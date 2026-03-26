1. API dùng để lấy ra danh sách Orders của người dùng : https://localhost:7128/api/Orders/List_Order_ofUsers?id=${}
định dạng json trả về : 
[
  {
    "id": 1,
    "payment_method": "Cash",
    "payment_status": "paid",
    "order_status": "approve",
    "order_date": "2026-03-25T14:39:27.993",
    "image_url": "potato.jpg",
    "name": "Potato",
    "quantity": 2,
    "unit_price": 25000
  }
]

2. API dùng để lấy ra danh sách Cart của người Dùng : https://localhost:7128/api/Cart/Get_List_Product_inCart?id=${}
định dạng json trả về : 
[
  {
    "name": "string",
    "price": 0,
    "unit": "string",
    "quantity": 0
  }
]

3. API dùng để làm chức năng Login : https://localhost:7128/api/Users/Users/Login

request body : 
{
  "email": "string",
  "password": "string"
}

định dạng json trả về : 
{
  "id": 0,
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "string",
  "created_at": "2026-03-26T06:58:30.518Z"
}

4. API dùng để làm chức năng Login : https://localhost:7128/api/Users/Users/SignUp
Lưu ý : cần phải validate email và mật khẩu độ dài >8 ký tự 
request body : 
{
  "name": "string",
  "email": "string",
  "password": "string",
  "repeatPassword": "string"
}

định dạng Text trả về : "Đăng ký thành công" 