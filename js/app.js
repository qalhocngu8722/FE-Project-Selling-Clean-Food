/* ═══════════════════════════════════════════
   TOAST NOTIFICATION SYSTEM
   ═══════════════════════════════════════════ */
function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const icons = { success: '<i class="fa-solid fa-check"></i>', error: '<i class="fa-solid fa-times"></i>', warning: '<i class="fa-solid fa-exclamation-triangle"></i>', info: '<i class="fa-solid fa-info"></i>' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || '<i class="fa-solid fa-check"></i>'}</span>
        <span class="toast-msg">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
    `;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
}

/* ═══════════════════════════════════════════
   MODAL SYSTEM
   ═══════════════════════════════════════════ */
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});

/* ═══════════════════════════════════════════
   CART MANAGEMENT
   ═══════════════════════════════════════════ */
// Biến toàn cục lưu danh sách order_item hiện tại của user
let _currentOrderItems = [];

// Hàm load order_item hiện tại của user (gọi khi login hoặc reload page)
async function loadCurrentOrderItems(cart_id) {
    try {
        const res = await fetch(`https://localhost:7128/api/Cart_Item/CartItem/GetCartItemsByCartId?cartId=${cart_id}`);
        if (res.ok) {
            _currentOrderItems = await res.json();
        } else {
            _currentOrderItems = [];
        }
    } catch {
        _currentOrderItems = [];
    }
}

async function addToCart(cart_id, productId, quantity = 1) {
    const user = localStorage.getItem('current_user') ? JSON.parse(localStorage.getItem('current_user')) : null;
    if(user === null) {   
        navigateTo('login');
        return false;
    }
    let alo = await fetchCartFromAPI(user.id);
    console.log('Current order items:', alo);
    if (!user) {
        sessionStorage.setItem('qal_pending_action', JSON.stringify({ action: 'addToCart', productId, quantity }));
        navigateTo('login');
        return false;
    }
    const product = await getProductById(productId);
    console.log(product);
    if (!product) return false;
    if (!alo || !alo.length) {
        await loadCurrentOrderItems(cart_id);
    }
    // Kiểm tra số lượng hợp lệ
    let cart = getCart();
    try {
        let res;
        const orderItem = alo.find(item => item.product_id === productId);
        if (orderItem) {
            let newQty = orderItem.quantity + quantity;

            if (newQty > product.quantity) {
                showToast(`Số lượng tối đa có thể mua: ${product.quantity}`, 'warning');
                return false;
            }
            // Kiểm tra order_item đã tồn tại chưa
            console.log('orderItem order item:', orderItem);
            console.log('Product ID:', productId);
            // Nếu đã có, gọi API update số lượng
            console.log(JSON.stringify({ quantity: newQty }));
            res = await fetch(`https://localhost:7128/api/Cart_Item/CartItem/UpdateCartItem?id=${orderItem.id}&quantity=${newQty}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' }
            });

        } else {
            // Nếu chưa có, gọi API add mới
            res = await fetch('https://localhost:7128/api/Cart_Item/CartItem/Addnew', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    cart_id: cart_id,
                    product_id: productId,
                    quantity: quantity
                })
            });
            console.log(JSON.stringify({
                    cart_id: cart_id,
                    product_id: productId,
                    quantity: quantity
                }));
        }
        setCart(cart);
        updateCartBadge();
        showToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
        return true;
    } catch (err) {
        showToast('Không thể kết nối máy chủ!', 'error');
        return false;
    }
}

async function removeFromCart(productId,element_del) {
    const del = await fetch(`https://localhost:7128/api/Cart_Item/CartItem/DeleteCartItem?id=${productId}`, {
        method: 'DELETE'
    });
    if(del.ok){
        updateCartBadge();
        element_del.remove();
        if(await getCartCount() === 0){
            window.location.reload();
        }
        showToast('Sản phẩm đã được xóa khỏi giỏ hàng!', 'success');
    } else {
        showToast('Đã có lỗi xảy ra', 'error');
    }
}

function updateCartQuantity(productId, quantity) {
    const product = getProductById(productId);
    if (!product) return;
    if (quantity > product.quantity) {
        showToast(`Số lượng tối đa: ${product.quantity}`, 'warning');
        return;
    }
    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    const cart = getCart();
    const item = cart.find(i => i.product_id === productId);
    if (item) item.quantity = quantity;
    setCart(cart);
    updateCartBadge();
}

async function clearCart(id) {
    const res = await fetch(`https://localhost:7128/api/Cart_Item/CartItem/ClearAllbyUserId?userid=${id}`, {
        method: 'DELETE'
    });
    if(res.ok){
        updateCartBadge();
    } else {
        showToast('Có Lỗi xảy ra', 'danger');
    }
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => {
        const product = getProductById(item.product_id);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);
}

async function getCartCount() {
    const cart = await fetchCartFromAPI(getCurrentUser().id);
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

async function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = await getCartCount();
    badges.forEach(badge => {
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    });
}

/* ═══════════════════════════════════════════
   NAVIGATION HELPERS
   ═══════════════════════════════════════════ */
function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/customer/') || path.includes('/staff/') || path.includes('/admin/')) {
        return '../';
    }
    return './';
}

function navigateTo(page) {
    const base = getBasePath();
    const routes = {
        'home': base + 'index.html',
        'login': base + 'login.html',
        'cart': base + 'customer/cart.html',
        'checkout': base + 'customer/checkout.html',
        'orders': base + 'customer/orders.html',
        'product-detail': base + 'customer/product-detail.html',
        'staff-dashboard': base + 'staff/dashboard.html',
        'staff-products': base + 'staff/products.html',
        'staff-categories': base + 'staff/categories.html',
        'staff-orders': base + 'staff/orders.html',
        'staff-users': base + 'staff/users.html',
        'admin-dashboard': base + 'staff/dashboard.html',
        'admin-reports': base + 'admin/reports.html',
    };
    window.location.href = routes[page] || routes['home'];
}

function navigateToProduct(productId) {
    const base = getBasePath();
    localStorage.setItem('selected_detail_product_id', productId);
    window.location.href = base + 'customer/product-detail.html';
}

function getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    console.log(params);
    return params.get(name);
}

/* ═══════════════════════════════════════════
   AUTH HELPERS
   ═══════════════════════════════════════════ */
function requireAuth() {
    const user = getCurrentUser();
    if (!user) {
        navigateTo('login');
        return null;
    }
    return user;
}

function requireRole(roles) {
    const user = requireAuth();
    if (!user) return null;
    if (!roles.includes(user.role)) {
        showToast('Bạn không có quyền truy cập!', 'error');
        navigateTo('home');
        return null;
    }
    return user;
}

/* ═══════════════════════════════════════════
   SCROLL ANIMATIONS (Intersection Observer)
   ═══════════════════════════════════════════ */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════
   NAVBAR SCROLL EFFECT
   ═══════════════════════════════════════════ */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

/* ═══════════════════════════════════════════
   PAGE TRANSITION
   ═══════════════════════════════════════════ */
function initPageTransition() {
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    transition.innerHTML = '<span class="loader-icon"><i class="fa-solid fa-clover"></i></span>';
    document.body.prepend(transition);
    setTimeout(() => transition.remove(), 1000);
}

/* ═══════════════════════════════════════════
   SEARCH FUNCTIONALITY
   ═══════════════════════════════════════════ */
function searchProducts(keyword, filters = {}) {
    let products = getProducts();
    if (keyword) {
        const kw = keyword.toLowerCase();
        products = products.filter(p =>
            p.name.toLowerCase().includes(kw) ||
            p.description.toLowerCase().includes(kw) ||
            p.origin.toLowerCase().includes(kw)
        );
    }
    if (filters.category_id) {
        products = products.filter(p => p.category_id === parseInt(filters.category_id));
    }
    if (filters.min_price) {
        products = products.filter(p => p.price >= parseInt(filters.min_price));
    }
    if (filters.max_price) {
        products = products.filter(p => p.price <= parseInt(filters.max_price));
    }
    if (filters.food_type) {
        products = products.filter(p => p.food_type === filters.food_type);
    }
    if (filters.sort) {
        switch (filters.sort) {
            case 'price_asc': products.sort((a, b) => a.price - b.price); break;
            case 'price_desc': products.sort((a, b) => b.price - a.price); break;
            case 'name_asc': products.sort((a, b) => a.name.localeCompare(b.name)); break;
            case 'newest': products.sort((a, b) => b.id - a.id); break;
        }
    }
    return products;
}

/* ═══════════════════════════════════════════
   ORDER MANAGEMENT
   ═══════════════════════════════════════════ */
function createOrder(orderData) {
    const orders = getOrders();
    const products = getProducts();
    const cart = getCart();

    const orderId = getNextOrderId();
    const items = cart.map(item => {
        const product = getProductById(item.product_id);
        return {
            product_id: item.product_id,
            quantity: item.quantity,
            unit_price: product.price
        };
    });

    const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.unit_price, 0);

    const newOrder = {
        id: orderId,
        user_id: getCurrentUser().id,
        order_date: new Date().toISOString(),
        total_amount: totalAmount,
        payment_method: orderData.payment_method,
        payment_status: orderData.payment_method === 'COD' ? 'unpaid' : 'paid',
        order_status: 'pending',
        shipping_address: orderData.address,
        note: orderData.note || '',
        recipient_name: orderData.recipient_name,
        phone: orderData.phone,
        address: orderData.address,
        items: items,
        created_at: new Date().toISOString()
    };

    cart.forEach(item => {
        const pIdx = products.findIndex(p => p.id === item.product_id);
        if (pIdx !== -1) products[pIdx].quantity -= item.quantity;
    });

    orders.push(newOrder);
    setOrders(orders);
    setProducts(products);
    clearCart();
    return newOrder;
}

function cancelOrder(orderId) {
    const orders = getOrders();
    const products = getProducts();
    const order = orders.find(o => o.id === orderId);
    if (!order) return false;

    const orderTime = new Date(order.order_date).getTime();
    const now = Date.now();
    const tenMinutes = 10 * 60 * 1000;
    if (order.order_status !== 'pending' || (now - orderTime) > tenMinutes) {
        showToast('Không thể hủy đơn hàng này! Vui lòng liên hệ nhân viên.', 'error');
        return false;
    }

    order.order_status = 'reject';
    order.items.forEach(item => {
        const pIdx = products.findIndex(p => p.id === item.product_id);
        if (pIdx !== -1) products[pIdx].quantity += item.quantity;
    });

    setOrders(orders);
    setProducts(products);
    return true;
}

/* ═══════════════════════════════════════════
   GLOBAL INIT
   ═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', async () => {
    initDB();
    await preloadData();
    initPageTransition();
    initNavbarScroll();
    updateCartBadge();

    const pending = sessionStorage.getItem('qal_pending_action');
    if (pending && getCurrentUser()) {
        sessionStorage.removeItem('qal_pending_action');
        const action = JSON.parse(pending);
        if (action.action === 'addToCart') {
            addToCart(action.productId, action.quantity);
        }
    }

    setTimeout(initScrollAnimations, 100);
});
