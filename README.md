# RESTful Session Auth App

Ứng dụng Node.js sử dụng Express, MongoDB, và session-based authentication để quản lý đăng ký, đăng nhập, đăng xuất và truy cập thông tin người dùng.

## Tính năng

- Đăng ký tài khoản mới với username và password
- Đăng nhập, lưu session trên MongoDB
- Đăng xuất, xóa session và cookie
- Xem thông tin cá nhân (profile) khi đã đăng nhập

## Công nghệ sử dụng

- Node.js, Express
- MongoDB, Mongoose
- express-session, connect-mongo
- bcryptjs (hash mật khẩu)
- cookie-parser

## Cài đặt

1. **Clone repository**
   ```sh
   git clone <repo-url>
   cd resful-session-app
   ```

2. **Cài đặt dependencies**
   ```sh
   npm install
   ```

3. **Khởi động MongoDB**  
   Đảm bảo MongoDB đang chạy trên `mongodb://localhost:27017/sessionAuth`.

4. **Chạy ứng dụng**
   ```sh
   node app.js
   ```
   Ứng dụng sẽ chạy tại [http://localhost:3000](http://localhost:3000)

## API Endpoints

- `POST /auth/register`  
  Đăng ký tài khoản mới  
  **Body:** `{ "username": "yourname", "password": "yourpass" }`

- `POST /auth/login`  
  Đăng nhập  
  **Body:** `{ "username": "yourname", "password": "yourpass" }`  
  **Cookie:** Trả về cookie `sid` lưu session

- `POST /auth/logout`  
  Đăng xuất, xóa session và cookie

- `GET /auth/profile`  
  Xem thông tin cá nhân (yêu cầu đã đăng nhập)

## Cấu trúc thư mục

```
resful-session-app/
  app.js
  package.json
  models/
    User.js
  routes/
    auth.js
```

## Ghi chú

- Đổi `secret` trong cấu hình session khi dùng cho môi trường production.
- Để bảo mật hơn, hãy bật HTTPS và đặt `cookie.secure: true`.

---

Chúc bạn sử dụng hiệu quả!
