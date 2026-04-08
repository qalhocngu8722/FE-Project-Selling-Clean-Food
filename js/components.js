/* ═══════════════════════════════════════════
   SHARED COMPONENTS - Header, Footer, Sidebar
   ═══════════════════════════════════════════ */

function renderCustomerHeader(activePage = '') {
    const user = JSON.parse(localStorage.getItem('current_user') || 'null');
    const base = getBasePath();
    const cartCount = getCartCount();

    return `
    <nav class="navbar" id="navbar">
        <div class="navbar-inner">
            <a href="${base}index.html" class="nav-logo">
                <div class="logo-icon"><i class="fa-solid fa-leaf"></i></div>
                <span>FreshQAL</span>
            </a>
            <div class="nav-search">
                <span class="search-icon"><i class='fa-solid fa-magnifying-glass'></i></span>
                <input type="text" id="globalSearch" placeholder="Tìm kiếm rau củ quả..." 
                       onkeypress="if(event.key==='Enter') handleGlobalSearch(this.value)">
            </div>
            <div class="nav-actions">
                <button class="nav-btn" onclick="navigateTo('cart')" title="Giỏ hàng">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span class="badge cart-badge" style="${cartCount > 0 ? '' : 'display:none'}">${cartCount}</span>
                </button>
                ${user ? `
                    <button class="nav-btn" onclick="navigateTo('orders')" title="Đơn hàng"><i class="fa-solid fa-box"></i></button>
                    <div class="nav-user" onclick="toggleUserMenu()">
                        <div class="avatar">${user.name.charAt(0).toUpperCase()}</div>
                        <span class="user-name">${user.name}</span>
                    </div>
                    <div id="userDropdown" class="user-dropdown" style="display:none;position:absolute;top:65px;right:24px;background:white;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,0.15);padding:8px;z-index:1001;min-width:200px;">
                        <a href="${base}customer/orders.html" style="display:flex;align-items:center;gap:10px;padding:10px 16px;border-radius:8px;color:#333;font-weight:500;"><i class="fa-solid fa-box"></i> Đơn hàng của tôi</a>
                        ${user.role === 'staff' ? `<a href="${base}staff/dashboard.html" style="display:flex;align-items:center;gap:10px;padding:10px 16px;border-radius:8px;color:#333;font-weight:500;"><i class="fa-solid fa-chart-line"></i> Quản trị</a>` : ''}
                        ${user.role === 'admin' ? `<a href="${base}staff/dashboard.html" style="display:flex;align-items:center;gap:10px;padding:10px 16px;border-radius:8px;color:#333;font-weight:500;"><i class="fa-solid fa-cog"></i> Admin Panel</a>` : ''}
                        <hr style="border:none;border-top:1px solid #eee;margin:4px 0;">
                        <a href="#" onclick="logout();window.location.href='${base}index.html'" style="display:flex;align-items:center;gap:10px;padding:10px 16px;border-radius:8px;color:#E53935;font-weight:500;"><i class="fa-solid fa-door-open"></i> Đăng xuất</a>
                    </div>
                ` : `
                    <a href="${base}login.html" class="btn btn-primary btn-sm">Đăng nhập</a>
                `}
            </div>
        </div>
    </nav>`;
}

function renderFooter() {
    const base = getBasePath();
    return `
    <footer class="footer">
        <div class="footer-inner">
            <div class="footer-brand">
                <div class="footer-logo"><i class="fa-solid fa-leaf"></i> FreshQAL</div>
                <p>Cửa hàng rau củ quả tươi sạch, cam kết 100% hữu cơ và an toàn vệ sinh thực phẩm. Giao hàng nhanh chóng trong ngày.</p>
            </div>
            <div class="footer-col">
                <h4>Sản phẩm</h4>
                <a href="${base}index.html#products">Rau lá</a>
                <a href="${base}index.html#products">Củ quả</a>
                <a href="${base}index.html#products">Trái cây</a>
                <a href="${base}index.html#products">Nấm tươi</a>
                <a href="${base}index.html#products">Gia vị</a>
            </div>
            <div class="footer-col">
                <h4>Mạng Xã Hội</h4>
                <a href="#" target="_blank"><i class="fab fa-facebook-f"></i> Facebook</a>
                <a href="#" target="_blank"><i class="fab fa-instagram"></i> Instagram</a>
                <a href="#" target="_blank"><i class="fab fa-twitter"></i> Twitter</a>
                <a href="#" target="_blank"><i class="fab fa-youtube"></i> YouTube</a>
            </div>
            <div class="footer-col">
                <h4>Liên hệ</h4>
                <a href="#"><i class="fa-solid fa-phone"></i> 0394783098</a>
                <a href="#"><i class="fa-regular fa-envelope"></i> support@freshqal.vn</a>
                <a href="#"><i class="fa-solid fa-map-marker-alt"></i> TP. Hà Nội</a>
            </div>
        </div>
        <div class="footer-bottom">
            © 2026 FreshQAL - Rau Củ Quả Tươi Sạch. All rights reserved.
        </div>
    </footer>`;
}

function renderSidebar(role = 'staff', activePage = '') {
    const base = getBasePath();
    const user = localStorage.getItem("id_current_user");
    const isAdmin = role === 'admin';

    const staffLinks = [
        { icon: '<i class="fa-solid fa-chart-line"></i>', label: 'Dashboard', page: 'dashboard', href: `${base}staff/dashboard.html` },
        { icon: '<i class="fa-solid fa-carrot"></i>', label: 'Sản phẩm', page: 'products', href: `${base}staff/products.html` },
        { icon: '<i class="fa-solid fa-folder"></i>', label: 'Danh mục', page: 'categories', href: `${base}staff/categories.html` },
        { icon: '<i class="fa-solid fa-truck"></i>', label: 'Đơn hàng', page: 'orders', href: `${base}staff/orders.html` },
        { icon: '<i class="fa-solid fa-users"></i>', label: 'Người dùng', page: 'users', href: `${base}staff/users.html` },
    ];

    const adminLinks = [
        { icon: '<i class="fa-solid fa-chart-line"></i>', label: 'Dashboard', page: 'dashboard', href: `${base}staff/dashboard.html` },
        { icon: '<i class="fa-solid fa-carrot"></i>', label: 'Sản phẩm', page: 'products', href: `${base}staff/products.html` },
        { icon: '<i class="fa-solid fa-folder"></i>', label: 'Danh mục', page: 'categories', href: `${base}staff/categories.html` },
        { icon: '<i class="fa-solid fa-truck"></i>', label: 'Đơn hàng', page: 'orders', href: `${base}staff/orders.html` },
        { icon: '<i class="fa-solid fa-users"></i>', label: 'Người dùng', page: 'users', href: `${base}staff/users.html` },
        { icon: '<i class="fa-solid fa-chart-line"></i>', label: 'Báo cáo', page: 'reports', href: `${base}admin/reports.html` },
    ];

    const links = isAdmin ? adminLinks : staffLinks;

    return `
    <aside class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <div class="sidebar-logo"><i class="fa-solid fa-leaf"></i></div>
            <div>
                <h3>FreshQAL</h3>
                <small>${isAdmin ? 'Admin Panel' : 'Quản trị'}</small>
            </div>
        </div>
        <nav class="sidebar-nav">
            <div class="nav-label">Menu chính</div>
            ${links.map(link => `
                <a href="${link.href}" class="${activePage === link.page ? 'active' : ''}">
                    <span class="nav-icon">${link.icon}</span>
                    ${link.label}
                </a>
            `).join('')}
            <div class="nav-label">Khác</div>
            <a href="${base}index.html">
                <span class="nav-icon"><i class="fa-solid fa-house"></i></span>
                Về trang chủ
            </a>
            <a href="#" onclick="logout();window.location.href='${base}login.html'">
                <span class="nav-icon"><i class="fa-solid fa-door-closed"></i></span>
                Đăng xuất
            </a>
        </nav>
    </aside>`;
}

function renderProductCard(product) {
    // Dùng cho cả API mới (related_products) và cũ
    const id = product.id;
    const name = product.product_name || product.name || '';
    const price = product.price;
    const unit = product.unit || '';
    const origin = product.origin || '';
    const food_type = product.food_type || '';
    const current_user = localStorage.getItem('current_user') ? JSON.parse(localStorage.getItem('current_user')) : null;
    // API mới: image_url là string (related_products) hoặc mảng (chi tiết)
    let imgUrl = '';
    if (typeof product.image_url === 'string') {
        imgUrl = product.image_url;
    } else if (Array.isArray(product.image_url) && product.image_url.length > 0) {
        const mainImg = product.image_url.find(img => img.is_primary) || product.image_url[0];
        imgUrl = mainImg.image_url;
    }
    const categories = Array.isArray(product.list_category_name) ? product.list_category_name : [];
    return `
    <div product-id="${id}" class="product-card" onclick="navigateToProduct(${id})">
        <div class="card-img">
            <img src="https://localhost:7128${imgUrl}" alt="${name}" onerror="this.style.display='none'" style="max-width:100%;object-fit:contain;" />
        </div>
        <div class="card-body">
            <div class="card-category" style="display:flex;gap:6px;flex-wrap:wrap;">
                ${categories.map(cat => `<span class="category-chip">${cat}</span>`).join('')}
            </div>
            <h4 class="card-title">${name}</h4>
            <div class="card-meta">
                <span><i class="fa-solid fa-map-marker-alt"></i> ${origin}</span>
                <span>•</span>
                <span>${food_type}</span>
            </div>
            <div class="card-footer">
                <div class="card-price">${formatPrice(price)} <small>/${unit}</small></div>
                <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${current_user ? current_user.cart_id : 0}, ${id})" title="Thêm vào giỏ">+</button>
            </div>
        </div>
    </div>`;
}

/* User dropdown toggle */
function toggleUserMenu() {
    const dd = document.getElementById('userDropdown');
    if (dd) dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
}
document.addEventListener('click', (e) => {
    const dd = document.getElementById('userDropdown');
    if (dd && !e.target.closest('.nav-user') && !e.target.closest('#userDropdown')) {
        dd.style.display = 'none';
    }
});

function handleGlobalSearch(keyword) {
    if(keyword.length == 0) {
        window.location.href = getBasePath() + 'index.html';
        return;
    }
    if (keyword.trim()) {
        const base = getBasePath();
        window.location.href = base + 'index.html?search=' + encodeURIComponent(keyword.trim());
    }
}
