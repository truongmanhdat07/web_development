# THƯ VIỆN ĐIỆN TỬ - TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI (UTC)

## BÀI TẬP LỚN MÔN THIẾT KẾ WEB (100% FRONT-END) - KHOA CÔNG NGHỆ THÔNG TIN

---

### 1. Thông tin chung dự án

- **Đơn vị đào tạo:** Trường Đại học Giao thông Vận tải (UTC)
- **Khoa:** Công nghệ thông tin
- **Lớp:** `CNTT3`
- **Học phần:** Thiết Kế Web
- **Đề tài số 01:** Xây dựng Hệ thống Website Quản lý Thư viện Điện tử UTC
- **Giảng viên hướng dẫn:** ThS. Lại Mạnh Dũng (Khoa CNTT - UTC)

---

### 2. Bảng phân công 5 thành viên nhóm thực hiện

| STT | Họ và tên sinh viên                 | Mã sinh viên  | Email LMS UTC                   | File phân công                                        | Nhiệm vụ chính                                                                                                 |
| :-: | :---------------------------------- | :-----------: | :------------------------------ | :---------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
|  1  | **Trương Mạnh Đạt** _(Nhóm trưởng)_ | **251230841** | `dat251230841@lms.utc.edu.vn`   | [`index.html`](index.html)<br>(Trang chủ)             | Thiết kế Banner giới thiệu, 4 thẻ thống kê số liệu, sách tiêu biểu, quy trình 3 bước mượn sách, điều phối nhóm |
|  2  | **Nguyễn Phương Hải**               | **251210853** | `hai251210853@lms.utc.edu.vn`   | [`books.html`](books.html)<br>(Kho sách)              | Xây dựng danh mục sách CNTT & IELTS (UTC001 - UTC008), tìm kiếm từ khóa, bộ lọc danh mục và Modal thêm sách    |
|  3  | **Nguyễn Quốc Khánh**               | **251230887** | `khanh251230887@lms.utc.edu.vn` | [`borrow.html`](borrow.html)<br>(Mượn - Trả)          | Xây dựng bảng phiếu mượn thời gian thực, modal tạo phiếu mượn mới và xử lý trạng thái trả sách                 |
|  4  | **Trần Xuân Đô**                    | **251230843** | `do251230843@lms.utc.edu.vn`    | [`readers.html`](readers.html)<br>(Quản lý độc giả)   | Xây dựng bảng thẻ độc giả sinh viên lớp CNTT3 và giảng viên, tìm kiếm độc giả, xử lý nút Khóa / Mở khóa thẻ    |
|  5  | **Đinh Văn Phan Dũng**              | **251230826** | `dung251230826@lms.utc.edu.vn`  | [`contact.html`](contact.html)<br>(Nội quy & Liên hệ) | Xây dựng bảng giờ mở cửa, nội quy mượn giáo trình và form gửi góp ý / đề xuất mua giáo trình mới               |

---

### 3. Cấu trúc thư mục dự án

Dự án được tổ chức khoa học gồm **Bộ khung sườn (Skeleton)** để nhóm tự code và **Bản tham khảo (Demo)** để đối chiếu:

```
BTL_ThietKeWeb/
│
├── 📂 demo/                           # THƯ MỤC BẢN MẪU HOÀN CHỈNH (DÙNG ĐỂ THAM KHẢO)
│   ├── css/
│   │   └── style.css                 
│   ├── js/
│   │   └── script.js                 
│   ├── index.html                    
│   ├── books.html                    
│   ├── borrow.html                   
│   ├── readers.html                  
│   └── contact.html                  
│
├── 📂 images/                         # TÀI NGUYÊN HÌNH ẢNH DÙNG CHUNG
│   ├── logo_utc.png                  # Logo Trường Đại học Giao thông Vận tải
│   ├── use_case.png                  # Sơ đồ Use-Case hệ thống thư viện
│   ├── site_map.png                  # Sơ đồ cấu trúc điều hướng website
│   └── book1_web.jpg ... book8.jpg   # Ảnh bìa các cuốn giáo trình UTC001 - UTC008
│
├── 📂 wireFrame/                      # BẢN VẼ WIREFRAME THIẾT KẾ CỦA DỰ ÁN
│
├── 📂 css/
│   └── style.css                     # File CSS khung sườn
│
├── 📂 js/
│   └── script.js                     # File JS khung sườn
│
├── index.html                        # File khung sườn Trang chủ 
├── books.html                        # File khung sườn Danh mục sách 
├── borrow.html                       # File khung sườn Mượn - Trả sách
├── readers.html                      # File khung sườn Quản lý độc giả 
├── contact.html                      # File khung sườn Nội quy & Liên hệ
│
├── README.md                         # Hướng dẫn dự án & Quy trình làm việc nhóm
└── BAO_CAO_BAI_TAP_LON_QUAN_LY_THU_VIEN.md # Báo cáo chi tiết nộp bài tập lớn
```

---

### 4. Hướng dẫn làm việc nhóm qua Git & GitHub

Để tránh xung đột code (conflict), các thành viên thực hiện theo quy trình sau:

1. **Kéo code mới nhất về máy:**
   ```bash
   git pull origin main
   ```
2. **Tạo nhánh riêng theo tên và nhiệm vụ:**
   - Đạt: `git checkout -b feature/dat-index`
   - Hải: `git checkout -b feature/hai-books`
   - Khánh: `git checkout -b feature/khanh-borrow`
   - Đô: `git checkout -b feature/do-readers`
   - Dũng: `git checkout -b feature/dung-contact`
3. **Thực hiện code:**
   - Mở file `.html` được phân công tại thư mục gốc.
   - Tham khảo cấu trúc và mẫu giao diện tương ứng tại thư mục `demo/`.
   - Viết CSS bổ sung vào phần được chia sẵn tại `css/style.css`.
   - Viết JavaScript bổ sung vào phần được chia sẵn tại `js/script.js`.
4. **Commit và đẩy code lên GitHub:**
   ```bash
   git add .
   git commit -m "feat: hoan thien giao dien trang ... boi [Ten]"
   git push origin feature/[ten-nhanh]
   ```
5. **Tạo Pull Request (PR)** trên GitHub để nhóm trưởng Trương Mạnh Đạt review và merge vào nhánh `main`.

---

### 5. File Báo Cáo Hoàn Chỉnh Bài Tập Lớn

Báo cáo đầy đủ 6 phần (Sơ đồ Use-Case, Sitemap, Wireframe, Bảng kiểm thử chức năng, Bảng điểm tự đánh giá):
👉 [**`BAO_CAO_BAI_TAP_LON_QUAN_LY_THU_VIEN.md`**](BAO_CAO_BAI_TAP_LON_QUAN_LY_THU_VIEN.md)

---

### 6. Hướng dẫn xem trang trên trình duyệt

- Dự án là ứng dụng thuần **Front-End** (HTML5, CSS3, JavaScript và Bootstrap 5).
- Mở trực tiếp các file `.html` bằng trình duyệt (Chrome, Edge) hoặc qua extension **Live Server** trên Visual Studio Code.
