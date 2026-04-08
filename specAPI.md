Trong vai là **Senior Frontend Engineer** có kinh nghiệm sâu về **RESTful API, optimistic UI update, DOM state management và clean JavaScript architecture**, hãy đọc kỹ yêu cầu sau và viết code **đúng production mindset**, không viết kiểu demo đơn giản.

## Bối cảnh

Tôi đang quản lý danh sách users trên giao diện web và cần thực hiện đầy đủ chức năng:

* Thêm user (POST)
* Sửa user (PUT)
* Xóa user (DELETE)

Sau mỗi thao tác, giao diện phải **cập nhật ngay lập tức mà không reload trang**.

---

# API Specification

## 1. POST - Add new user

API:
`https://localhost:7128/api/Users/Users/Addnew`

Request body:

```json
{
  "name": "string",
  "email": "qal7777@gmail.com",
  "password": "string",
  "role": "staff",
  "created_at": "2026-03-29T07:46:19.535Z"
}
```

Response:

* trả về `id` của user vừa tạo.

## Yêu cầu xử lý POST:

* Sau khi API thành công:
* dùng `id` trả về để tạo object user hoàn chỉnh.
* append ngay user mới vào danh sách hiện tại trên UI (**optimistic append / temporary DOM update**).
* Không reload trang.
* Không fetch lại toàn bộ list nếu không cần thiết.
* User mới phải hiển thị đúng vị trí và đúng format giống các item cũ.

---

# 2. PUT - Update user

API:
`https://localhost:7128/api/Users/Users/UpdateUser?id=${id}`

Request body:

```json
{
  "name": "string",
  "email": "qal7777@gmail.com",
  "password": "string",
  "role": "staff",
  "created_at": "2026-03-29T07:46:19.535Z"
}
```

Response:

* trả về `rowAffected`

## Yêu cầu xử lý PUT:

* Khi click icon edit:

  * lấy đúng dữ liệu user hiện tại từ item được click.
  * fill toàn bộ dữ liệu hiện tại vào form:

    * name
    * email
    * password
    * role
    * created_at nếu cần
* Người dùng chỉnh sửa xong → submit PUT.

## Mapping cực kỳ quan trọng:

AI phải đảm bảo mapping đúng giữa:

### field API

và

### value hiển thị trên DOM element

Ví dụ:

* `.user-name` ↔ `name`
* `.user-email` ↔ `email`
* `.user-role` ↔ `role`

## Sau khi PUT thành công:

* update ngay đúng item đang edit trên giao diện.
* chỉ update item đó.
* không render lại toàn bộ list.
* không reload trang.
* không tạo duplicate item.

## Chú ý:

* Không được vừa báo toast success vừa báo error cùng lúc.
* Chỉ hiển thị toast theo đúng response thật.

---

# 3. DELETE - Delete user

API:
`https://localhost:7128/api/Users/Users/DeleteUser?id=${id}`

Response:

* trả về `rowAffected`

## Yêu cầu xử lý DELETE:

* Khi delete thành công:
* remove ngay đúng item khỏi DOM.
* Không reload trang.
* Không fetch lại toàn bộ list.

---

# Technical Requirements

## Code style:

* Viết JavaScript sạch.
* Tách rõ:

  * call API
  * render UI
  * update UI
  * event binding

## Ưu tiên:

* tránh duplicated logic giữa POST và PUT.
* có reusable function renderUser(user).

## Error handling:

* handle trường hợp API fail.
* handle trường hợp response null.
* handle trường hợp rowAffected = 0.

## Output tôi cần:

1. Code hoàn chỉnh.
2. Giải thích rõ phần mapping.
3. Giải thích vì sao update DOM như vậy.
4. Nếu có bug tiềm ẩn thì chỉ rõ.

## Lưu ý quan trọng:

Không viết pseudo code.
Code phải chạy được ngay và phù hợp với frontend thực tế.
