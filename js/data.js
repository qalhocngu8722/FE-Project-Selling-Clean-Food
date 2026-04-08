// Map icon for category by name
function mapCategoryIconByName(name) {
    const lower = name.toLowerCase();
    if (lower.includes('nấm')) return '🍄';
    if (lower.includes('hạt') || lower.includes('đậu')) return '🫘';
    if (lower.includes('rau')) return '🥬';
    if (lower.includes('củ')) return '🥔';
    if (lower.includes('trái cây') || lower.includes('hoa quả') || lower.includes('fruit')) return '🍎';
    if (lower.includes('gia vị')) return '🌿';
    if (lower.includes('bầu') || lower.includes('bí')) return '🎃';
    if (lower.includes('cà rốt')) return '🥕';
    if (lower.includes('khoai')) return '🥔';
    if (lower.includes('hành') || lower.includes('tỏi')) return '🧅';
    if (lower.includes('ớt')) return '🌶️';
    if (lower.includes('chuối')) return '🍌';
    if (lower.includes('cam') || lower.includes('quả') || lower.includes('trái')) return '🍊';
    if (lower.includes('nho')) return '🍇';
    if (lower.includes('dưa')) return '🍉';
    if (lower.includes('ngô')) return '🌽';
    if (lower.includes('hoa')) return '🌸';
    if (lower.includes('dưa')) return '🥒';

    // Default icon
    return '🥦';
}
const DB = {
    categories: [
        { id: 1, name: 'Rau lá', description: 'Các loại rau lá xanh tươi', icon: '🥬' },
        { id: 2, name: 'Củ quả', description: 'Các loại củ quả tươi ngon', icon: '🥕' },
        { id: 3, name: 'Trái cây', description: 'Trái cây nhập khẩu & nội địa', icon: '🍎' },
        { id: 4, name: 'Nấm', description: 'Các loại nấm tươi sạch', icon: '🍄' },
        { id: 5, name: 'Rau gia vị', description: 'Rau gia vị thơm ngon', icon: '🌿' },
        { id: 6, name: 'Rau qal', description: 'Các loại rau lá xanh tươi', icon: '📦' },
        { id: 7, name: 'Củ quả', description: 'Các loại củ quả tươi ngon', icon: '🌍' },
        { id: 8, name: 'Trái cây', description: 'Trái cây nhập khẩu & nội địa', icon: '🍎' },
        { id: 9, name: 'Nấm', description: 'Các loại nấm tươi sạch', icon: '🍄' },
        { id: 10, name: 'Rau gia vị', description: 'Rau gia vị thơm ngon', icon: '🌿' }
    ],

    products: [
        { id: 1, name: 'Rau cải ngọt', description: 'Rau cải ngọt tươi xanh, trồng theo phương pháp hữu cơ, giàu vitamin A, C và chất xơ. Thích hợp xào, luộc, nấu canh.', price: 15000, unit: 'bó', category_id: 1, origin: 'Đà Lạt', food_type: 'Hữu cơ', quantity: 150, size: '300g', usage_instructions: 'Rửa sạch, có thể xào, luộc hoặc nấu canh', storage_instructions: 'Bảo quản ngăn mát tủ lạnh 2-5°C', hsd: '2026-03-29', emoji: '🥬', badge: 'new' },
        { id: 2, name: 'Rau muống', description: 'Rau muống tươi giòn, không thuốc trừ sâu. Giàu sắt và canxi, tốt cho sức khỏe.', price: 10000, unit: 'bó', category_id: 1, origin: 'Hóc Môn', food_type: 'Sạch', quantity: 200, size: '400g', usage_instructions: 'Xào tỏi, luộc chấm kho quẹt', storage_instructions: 'Bảo quản nơi thoáng mát, dùng trong 2 ngày', hsd: '2026-03-29', emoji: '🥬', badge: '' },
        { id: 3, name: 'Xà lách Đà Lạt', description: 'Xà lách xoăn Đà Lạt tươi giòn, lý tưởng cho salad và cuốn thịt nướng.', price: 20000, unit: 'cây', category_id: 1, origin: 'Đà Lạt', food_type: 'Hữu cơ', quantity: 80, size: '250g', usage_instructions: 'Rửa sạch, ăn sống hoặc trộn salad', storage_instructions: 'Bọc khăn ẩm, bảo quản ngăn mát', hsd: '2026-03-29', emoji: '🥗', badge: 'hot' },
        { id: 4, name: 'Bắp cải', description: 'Bắp cải xanh tươi nguyên cây, giòn ngọt tự nhiên. Nhiều vitamin K và chất chống oxy hóa.', price: 25000, unit: 'kg', category_id: 1, origin: 'Đà Lạt', food_type: 'Sạch', quantity: 120, size: '1kg', usage_instructions: 'Luộc, xào, muối chua, nấu canh', storage_instructions: 'Bảo quản ngăn mát tủ lạnh', hsd: '2026-04-05', emoji: '🥬', badge: '' },
        { id: 5, name: 'Cải bó xôi (Rau bina)', description: 'Rau bina giàu sắt, folate và vitamin. Siêu thực phẩm cho sức khỏe mỗi ngày.', price: 30000, unit: 'bó', category_id: 1, origin: 'Đà Lạt', food_type: 'Hữu cơ', quantity: 60, size: '200g', usage_instructions: 'Xào, nấu canh, làm sinh tố xanh', storage_instructions: 'Bảo quản ngăn mát, dùng trong 3 ngày', hsd: '2026-03-29', emoji: '🥬', badge: 'new' },
        { id: 6, name: 'Khoai tây', description: 'Khoai tây Đà Lạt tươi, vỏ mỏng ruột vàng. Thích hợp chiên, nướng, hầm và làm salad.', price: 35000, unit: 'kg', category_id: 2, origin: 'Đà Lạt', food_type: 'Sạch', quantity: 300, size: '1kg', usage_instructions: 'Gọt vỏ, chiên, xào, hầm', storage_instructions: 'Để nơi thoáng mát, tránh ánh sáng', hsd: '2026-04-15', emoji: '🥔', badge: 'hot' },
        { id: 7, name: 'Cà rốt', description: 'Cà rốt Đà Lạt tươi, ngọt tự nhiên. Giàu beta-carotene tốt cho mắt và da.', price: 28000, unit: 'kg', category_id: 2, origin: 'Đà Lạt', food_type: 'Hữu cơ', quantity: 180, size: '1kg', usage_instructions: 'Ăn sống, ép nước, xào, hầm', storage_instructions: 'Bảo quản ngăn mát tủ lạnh', hsd: '2026-04-10', emoji: '🥕', badge: '' },
        { id: 8, name: 'Củ cải trắng', description: 'Củ cải trắng giòn, vị ngọt thanh. Tốt cho hệ tiêu hóa và giải độc cơ thể.', price: 22000, unit: 'kg', category_id: 2, origin: 'Hà Nội', food_type: 'Sạch', quantity: 100, size: '1kg', usage_instructions: 'Nấu canh, kho, muối dưa', storage_instructions: 'Bảo quản ngăn mát tủ lạnh', hsd: '2026-04-08', emoji: '🥬', badge: '' },
        { id: 9, name: 'Bí đỏ', description: 'Bí đỏ Hokkaido thơm bùi, giàu vitamin A. Thích hợp nấu canh, chè, làm bánh.', price: 32000, unit: 'kg', category_id: 2, origin: 'Đà Lạt', food_type: 'Sạch', quantity: 90, size: '1kg', usage_instructions: 'Nấu canh, hầm, nấu chè, làm soup', storage_instructions: 'Để nơi thoáng mát, cắt rồi bọc màng bảo quản ngăn mát', hsd: '2026-04-20', emoji: '🎃', badge: 'sale' },
        { id: 10, name: 'Khoai lang mật', description: 'Khoai lang Nhật ruột vàng, ngọt mật. Giàu chất xơ, tốt cho tiêu hóa.', price: 38000, unit: 'kg', category_id: 2, origin: 'Đà Lạt', food_type: 'Hữu cơ', quantity: 150, size: '1kg', usage_instructions: 'Luộc, nướng, hấp, chiên', storage_instructions: 'Để nơi thoáng mát, khô ráo', hsd: '2026-04-18', emoji: '🍠', badge: '' },
        { id: 11, name: 'Táo Envy New Zealand', description: 'Táo Envy nhập khẩu từ New Zealand, vị ngọt thanh, giòn tan. Giàu vitamin C và chất chống oxy hóa.', price: 89000, unit: 'kg', category_id: 3, origin: 'New Zealand', food_type: 'Nhập khẩu', quantity: 50, size: '1kg', usage_instructions: 'Rửa sạch ăn trực tiếp', storage_instructions: 'Bảo quản ngăn mát tủ lạnh 2-4°C', hsd: '2026-04-15', emoji: '🍎', badge: 'hot' },
        { id: 12, name: 'Cam sành', description: 'Cam sành Vĩnh Long mọng nước, ngọt chua hài hòa. Giàu vitamin C.', price: 45000, unit: 'kg', category_id: 3, origin: 'Vĩnh Long', food_type: 'Sạch', quantity: 200, size: '1kg', usage_instructions: 'Vắt nước, ăn trực tiếp', storage_instructions: 'Để nơi thoáng mát hoặc ngăn mát tủ lạnh', hsd: '2026-04-10', emoji: '🍊', badge: '' },
        { id: 13, name: 'Chuối già Nam Mỹ', description: 'Chuối già chín vàng đều, thơm ngọt. Giàu kali và năng lượng.', price: 32000, unit: 'nải', category_id: 3, origin: 'Đồng Nai', food_type: 'Sạch', quantity: 180, size: '1 nải (~1kg)', usage_instructions: 'Ăn trực tiếp, làm sinh tố, bánh', storage_instructions: 'Treo nơi thoáng mát, tránh tủ lạnh', hsd: '2026-03-25', emoji: '🍌', badge: '' },
        { id: 14, name: 'Dưa hấu không hạt', description: 'Dưa hấu ruột đỏ không hạt, ngọt mát. Giải khát tuyệt vời cho ngày nắng.', price: 25000, unit: 'kg', category_id: 3, origin: 'Long An', food_type: 'Sạch', quantity: 70, size: '~3-4kg/trái', usage_instructions: 'Rửa vỏ, cắt ăn trực tiếp hoặc ép nước', storage_instructions: 'Để nơi mát, cắt rồi bọc màng bảo quản tủ lạnh', hsd: '2026-03-28', emoji: '🍉', badge: 'sale' },
        { id: 15, name: 'Nho xanh Mỹ', description: 'Nho xanh không hạt nhập khẩu từ Mỹ, giòn ngọt thanh. Giàu polyphenol chống oxy hóa.', price: 120000, unit: 'kg', category_id: 3, origin: 'Mỹ', food_type: 'Nhập khẩu', quantity: 40, size: '500g', usage_instructions: 'Rửa sạch ăn trực tiếp', storage_instructions: 'Bảo quản ngăn mát tủ lạnh', hsd: '2026-04-05', emoji: '🍇', badge: 'new' },
        { id: 16, name: 'Nấm rơm tươi', description: 'Nấm rơm tươi giòn dai, hương vị đậm đà. Giàu protein và vitamin D.', price: 71280, unit: 'kg', category_id: 4, origin: 'Long An', food_type: 'Sạch', quantity: 40, size: '500g', usage_instructions: 'Xào, nấu lẩu, nấu canh chua', storage_instructions: 'Bảo quản ngăn mát, dùng trong ngày', hsd: '2026-03-22', emoji: '🍄', badge: '' },
        { id: 17, name: 'Nấm bào ngư', description: 'Nấm bào ngư trắng giòn mềm, vị thanh nhẹ. Thích hợp cho người ăn chay.', price: 45000, unit: 'kg', category_id: 4, origin: 'Bình Dương', food_type: 'Hữu cơ', quantity: 60, size: '300g', usage_instructions: 'Xào, chiên giòn, nấu soup, lẩu', storage_instructions: 'Bảo quản ngăn mát 2-5°C', hsd: '2026-03-25', emoji: '🍄', badge: 'new' },
        { id: 18, name: 'Nấm kim châm', description: 'Nấm kim châm Hàn Quốc, trắng dài giòn. Nấu lẩu, nướng BBQ tuyệt vời.', price: 25000, unit: 'gói', category_id: 4, origin: 'Hàn Quốc', food_type: 'Nhập khẩu', quantity: 100, size: '200g', usage_instructions: 'Nấu lẩu, nướng, xào bơ tỏi', storage_instructions: 'Bảo quản ngăn mát tủ lạnh', hsd: '2026-03-28', emoji: '🍄', badge: '' },
        { id: 19, name: 'Húng quế', description: 'Húng quế thơm nồng, lá xanh tươi. Gia vị không thể thiếu cho phở, bún.', price: 8000, unit: 'bó', category_id: 5, origin: 'TP.HCM', food_type: 'Hữu cơ', quantity: 200, size: '100g', usage_instructions: 'Rửa sạch, ăn kèm phở, bún, gỏi cuốn', storage_instructions: 'Ngâm gốc trong nước, để nơi thoáng', hsd: '2026-03-22', emoji: '🌿', badge: '' },
        { id: 20, name: 'Rau mùi (Ngò rí)', description: 'Rau mùi tươi xanh, thơm đặc trưng. Gia vị trang trí và tăng hương vị cho món ăn.', price: 10000, unit: 'bó', category_id: 5, origin: 'Đà Lạt', food_type: 'Hữu cơ', quantity: 150, size: '100g', usage_instructions: 'Rắc lên canh, phở, cháo, salad', storage_instructions: 'Bọc khăn ẩm, bảo quản ngăn mát', hsd: '2026-03-24', emoji: '🌿', badge: '' },
        { id: 21, name: 'Hành lá', description: 'Hành lá tươi xanh, thơm nhẹ. Gia vị quen thuộc trong mọi bữa ăn Việt.', price: 12000, unit: 'bó', category_id: 5, origin: 'TP.HCM', food_type: 'Sạch', quantity: 180, size: '200g', usage_instructions: 'Thái nhỏ rắc lên món ăn, phi mỡ hành', storage_instructions: 'Bảo quản ngăn mát tủ lạnh', hsd: '2026-03-25', emoji: '🧅', badge: '' },
        { id: 22, name: 'Sả', description: 'Sả tươi thơm, vị cay nhẹ. Gia vị không thể thiếu cho món kho, nướng.', price: 15000, unit: 'bó', category_id: 5, origin: 'Tây Ninh', food_type: 'Sạch', quantity: 160, size: '300g', usage_instructions: 'Băm nhỏ ướp thịt, nấu lẩu, pha trà', storage_instructions: 'Để nơi thoáng mát hoặc ngăn mát tủ lạnh', hsd: '2026-04-01', emoji: '🌿', badge: '' },
        { id: 23, name: 'Gừng', description: 'Gừng tươi cay nồng, giúp ấm bụng và tăng cường miễn dịch.', price: 40000, unit: 'kg', category_id: 5, origin: 'Hưng Yên', food_type: 'Hữu cơ', quantity: 90, size: '500g', usage_instructions: 'Pha trà gừng, ướp thịt cá, nấu canh', storage_instructions: 'Để nơi thoáng mát, khô ráo', hsd: '2026-04-20', emoji: '🫚', badge: '' },
        { id: 24, name: 'Ớt hiểm', description: 'Ớt hiểm đỏ tươi, cay vừa phải. Trang trí và tăng hương vị cho món ăn.', price: 35000, unit: 'kg', category_id: 5, origin: 'Bình Thuận', food_type: 'Sạch', quantity: 100, size: '500g', usage_instructions: 'Thái lát trang trí, làm nước chấm, ướp thịt', storage_instructions: 'Bảo quản ngăn mát tủ lạnh', hsd: '2026-04-05', emoji: '🌶️', badge: '' }
    ],

    product_images: [
        { id: 1, product_id: 1, image_url: '🥬', is_primary: true },
        { id: 2, product_id: 1, image_url: '🌱', is_primary: false },
        { id: 3, product_id: 1, image_url: '🥗', is_primary: false },
    ],

    users: [
        { id: 1, name: 'Admin QAL', email: 'admin@qal.vn', password: 'admin123', role: 'admin', created_at: '2026-01-01' },
        { id: 2, name: 'Nhân viên Minh', email: 'staff@qal.vn', password: 'staff123', role: 'staff', created_at: '2026-01-15' },
        { id: 3, name: 'Nguyễn Văn A', email: 'user@qal.vn', password: 'user123', role: 'user', created_at: '2026-02-01' },
        { id: 4, name: 'Trần Thị B', email: 'user2@qal.vn', password: 'user123', role: 'user', created_at: '2026-02-10' }
    ],

    orders: [
        {
            id: 1001, user_id: 3, order_date: '2026-03-15T10:30:00', total_amount: 171280,
            payment_method: 'COD', payment_status: 'unpaid', order_status: 'pending',
            shipping_address: '123 Nguyễn Trãi, Q.1, TP.HCM', note: 'Giao buổi sáng',
            recipient_name: 'Nguyễn Văn A', phone: '0901234567', address: '123 Nguyễn Trãi, Q.1, TP.HCM',
            items: [
                { product_id: 1, quantity: 3, unit_price: 15000 },
                { product_id: 6, quantity: 2, unit_price: 35000 },
                { product_id: 11, quantity: 1, unit_price: 89000 }
            ]
        },
        {
            id: 1002, user_id: 3, order_date: '2026-03-14T14:20:00', total_amount: 210000,
            payment_method: 'Banking', payment_status: 'paid', order_status: 'approve',
            shipping_address: '456 Lê Lai, Q.5, TP.HCM', note: '',
            recipient_name: 'Nguyễn Văn A', phone: '0901234567', address: '456 Lê Lai, Q.5, TP.HCM',
            items: [
                { product_id: 11, quantity: 2, unit_price: 89000 },
                { product_id: 7, quantity: 1, unit_price: 28000 }
            ]
        },
        {
            id: 1003, user_id: 4, order_date: '2026-03-13T09:00:00', total_amount: 95000,
            payment_method: 'COD', payment_status: 'unpaid', order_status: 'resolve',
            shipping_address: '789 Trần Hưng Đạo, Q.3, TP.HCM', note: 'Gọi trước khi giao',
            recipient_name: 'Trần Thị B', phone: '0987654321', address: '789 Trần Hưng Đạo, Q.3, TP.HCM',
            items: [
                { product_id: 3, quantity: 2, unit_price: 20000 },
                { product_id: 18, quantity: 1, unit_price: 25000 },
                { product_id: 19, quantity: 2, unit_price: 8000 }
            ]
        }
    ],

    payment_transactions: [
        { id: 1, order_id: 1002, amount: 210000, payment_method: 'Banking', transaction_id: 'TXN20260314001', status: 'resolve', paid_at: '2026-03-14T14:25:00' }
    ]
};

function initDB() {
    if (!localStorage.getItem('qal_products')) {
        localStorage.setItem('qal_products', JSON.stringify(DB.products));
    }
    if (!localStorage.getItem('qal_categories')) {
        localStorage.setItem('qal_categories', JSON.stringify(DB.categories));
    }
    if (!localStorage.getItem('qal_users')) {
        localStorage.setItem('qal_users', JSON.stringify(DB.users));
    }
    if (!localStorage.getItem('qal_orders')) {
        localStorage.setItem('qal_orders', JSON.stringify(DB.orders));
    }
    if (!localStorage.getItem('qal_cart')) {
        localStorage.setItem('qal_cart', JSON.stringify([]));
    }
    if (!localStorage.getItem('qal_next_order_id')) {
        localStorage.setItem('qal_next_order_id', '1004');
    }
    if (!localStorage.getItem('qal_next_user_id')) {
        localStorage.setItem('qal_next_user_id', '5');
    }
}

let _productsCache = null;

async function _fetchProductsFromAPI() {
    try {
        const res = await fetch('https://besellingcleanfood0604-production.up.railway.app/api/SanPham/Get_List_Product_homepage');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        return data;
    } catch (e) {
        console.warn('Lấy sản phẩm từ API thất bại, dùng dữ liệu cục bộ:', e.message);
        _productsCache = JSON.parse(localStorage.getItem('qal_products') || '[]');
    }
}

async function getProducts() {
    let listproducts = await fetch(`https://besellingcleanfood0604-production.up.railway.app/api/SanPham/GetAllSanPham`);
    if (listproducts.ok) {
        const data = await listproducts.json();
        _productsCache = data;
        return _productsCache;
    }
    return [];
}
function setProducts(data) {
    _productsCache = data;
    localStorage.setItem('qal_products', JSON.stringify(data));
}
let _categoriesCache = null;

async function _fetchCategoriesFromAPI() {
    try {
        const res = await fetch('https://besellingcleanfood0604-production.up.railway.app/api/DanhMucSP/ProductCategory/Getall');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        let data = await res.json();
        data = data.map(cat => ({ ...cat, icon: mapCategoryIconByName(cat.name) }));
        _categoriesCache = data;
        localStorage.setItem('qal_categories', JSON.stringify(data));
    } catch (e) {
        console.warn('Lấy danh mục từ API thất bại, dùng dữ liệu cục bộ:', e.message);
        let data = JSON.parse(localStorage.getItem('qal_categories') || '[]');
        data = data.map(cat => ({ ...cat, icon: cat.icon || mapCategoryIconByName(cat.name) }));
        _categoriesCache = data;
    }
}

function getCategories() {
    if (_categoriesCache) return _categoriesCache;
    let data = JSON.parse(localStorage.getItem('qal_categories') || '[]');
    return data.map(cat => ({ ...cat, icon: cat.icon || mapCategoryIconByName(cat.name) }));
}
function setCategories(data) {
    _categoriesCache = data;
    localStorage.setItem('qal_categories', JSON.stringify(data));
}

async function preloadData() {
    const tasks = [];
    if (!_productsCache) tasks.push(_fetchProductsFromAPI());
    if (!_categoriesCache) tasks.push(_fetchCategoriesFromAPI());
    if (tasks.length) await Promise.all(tasks);
}
const API_BASE = 'https://besellingcleanfood0604-production.up.railway.app/api';

async function loginAPI(email, password) {
    const res = await fetch(`${API_BASE}/Users/Users/Login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    if (!res.ok) {
        const errText = await res.text().catch(() => '');
        throw new Error(errText || 'Login failed');
    }
    return await res.json();
}

async function signUpAPI(name, email, password, repeatPassword) {
    const res = await fetch(`${API_BASE}/Users/Users/SignUp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, repeatPassword })
    });
    if (!res.ok) {
        const errText = await res.text().catch(() => '');
        throw new Error(errText || 'SignUp failed');
    }
    return await res.text();
}

async function fetchCartFromAPI(userId) {
    try{
        const res = await fetch(`https://besellingcleanfood0604-production.up.railway.app/api/Cart/Get_List_Product_inCart?id=${userId}`);
        let list = await res.json();
        return list;
    }
    catch(e){
        return [];
    }
}

async function fetchOrdersFromAPI(userId) {
    const res = await fetch(`${API_BASE}/Orders/List_Order_ofUsers?id=${userId}`);
    if (!res.ok) throw new Error('Fetch orders failed');
    return await res.json();
}

async function getUsers() { 
    let listuser = await fetch(`${API_BASE}/Users/Users/Getall`);
    if (listuser.ok) {
        const data = await listuser.json();
        console.log('Fetched users from API:', data);
        return data;
    }
    return [];
}

function setUsers(data) { localStorage.setItem('qal_users', JSON.stringify(data)); }
async function getOrders() { 
    let listorders = await fetch(`${API_BASE}/Orders/ListDetailOrder_Staff`);
    if (listorders.ok) {
        const data = await listorders.json();
        console.log('Fetched orders from API:', data);
        return data;
    }
    return [];
}
async function setOrders(data) { 
    try {
        const res = await fetch(`${API_BASE}/Orders/Orders/Create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            const errText = await res.text().catch(() => '');
            throw new Error(errText || 'Set orders failed');
        }
        return await res.json();
    } catch (error) {
        console.error('Error setting orders:', error);
        throw error;
    }
}

function getCart() { return JSON.parse(localStorage.getItem('qal_cart') || '[]'); }
function setCart(data) { localStorage.setItem('qal_cart', JSON.stringify(data)); }
function getCurrentUser() { return JSON.parse(localStorage.getItem('qal_current_user') || 'null'); }
function setCurrentUser(user) { localStorage.setItem('qal_current_user', JSON.stringify(user)); }
function logout() { localStorage.removeItem('current_user'); }

async function getProductById(id) {
    return (await getProducts()).find(p => p.id === parseInt(id));
}
function getCategoryById(id) {
    return getCategories().find(c => c.id === parseInt(id));
}
async function getUserById(id) { return (await getUsers()).find(u => u.id === parseInt(id)); }

function getNextOrderId() {
    const id = parseInt(localStorage.getItem('qal_next_order_id') || '1004');
    localStorage.setItem('qal_next_order_id', String(id + 1));
    return id;
}
function getNextUserId() {
    const id = parseInt(localStorage.getItem('qal_next_user_id') || '5');
    localStorage.setItem('qal_next_user_id', String(id + 1));
    return id;
}

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatDateTime(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function getOrderStatusText(status) {
    const map = { pending: 'Chờ xác nhận', approve: 'Đã xác nhận', resolve: 'Đã giao', reject: 'Đã hủy' };
    return map[status] || status;
}

function getPaymentStatusText(status) {
    const map = { unpaid: 'Chưa thanh toán', paid: 'Đã thanh toán', pending: 'Chưa Thanh Toán', resolve: 'Đã Thanh Toán', reject: 'Thanh Toán Thất bại' };
    return map[status] || status;
}

initDB();
