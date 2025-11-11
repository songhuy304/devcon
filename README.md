## Devcon Landing – React + TypeScript + Vite

Ảnh xem trước:

![Preview giao diện](./preview.png)

### Tính năng chính

- **React 18 + TypeScript**: DX tốt, an toàn kiểu.
- **Vite**: Dev server cực nhanh, HMR mượt.
- **TailwindCSS**: Styling tiện, tuỳ biến dễ.
- **Cấu trúc module hóa**: `components/`, `pages/`, `shared/` rõ ràng.

### Yêu cầu môi trường

- Node.js ≥ 18
- npm hoặc pnpm/yarn

### Cài đặt & chạy

```bash
# Cài dependencies
npm install

# Chạy môi trường phát triển
npm run dev

# Build production
npm run build

# Xem thử bản build
npm run preview
```

### Scripts hữu ích

- `dev`: chạy HMR server.
- `build`: bundle production.
- `preview`: phục vụ thư mục `dist`.
- `lint`: chạy ESLint (nếu cấu hình).

### Stack kỹ thuật

- React, TypeScript, Vite
- TailwindCSS, PostCSS
- ESLint (cấu hình QOL cho TS/React)

### Cấu trúc thư mục (rút gọn)

```text
src/
  assets/
  components/
  pages/
  router/
  shared/
  main.tsx
  App.tsx
```

### Ghi chú phát triển

- Sử dụng `src/shared/utils` cho helpers chung.
- Tách UI nhỏ trong `src/components/ui/` để tái sử dụng.
- Tối ưu ảnh trong `public/` hoặc `src/assets/` nếu cần.

### Giấy phép

Mã nguồn dùng cho mục đích học tập/trình diễn. Vui lòng kiểm tra lại trước khi dùng cho sản phẩm.
