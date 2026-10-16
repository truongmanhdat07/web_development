# BÁO CÁO BÀI TẬP LỚN MÔN THIẾT KẾ WEB

## ĐỀ TÀI: XÂY DỰNG WEBSITE HỆ THỐNG THƯ VIỆN ĐIỆN TỬ UTC

### CHUYÊN NGÀNH CÔNG NGHỆ THÔNG TIN

---

**TRƯỜNG:** ĐẠI HỌC GIAO THÔNG VẬN TẢI (UTC)  
**KHOA:** CÔNG NGHỆ THÔNG TIN  
**LỚP:** CÔNG NGHỆ THÔNG TIN 3 (CNTT3)  
**GIẢNG VIÊN HƯỚNG DẪN:** ThS. Lại Mạnh Dũng  
**HỌC PHẦN:** THIẾT KẾ WEB  
**HỌC KỲ / NĂM HỌC:** HỌC KỲ I - NĂM 2  
**ĐỀ TÀI SỐ:** 01 - QUẢN LÝ THƯ VIỆN  
**CÔNG NGHỆ ÁP DỤNG:** HTML5, CSS3, JavaScript Cơ Bản, Bootstrap 5

### BẢNG PHÂN CÔNG THÀNH VIÊN TRONG NHÓM (NHÓM 5 THÀNH VIÊN)

| STT | Họ và tên sinh viên                    | Mã sinh viên  | Email                           | Trang phụ trách               | Nhiệm vụ chính trong dự án |
| :-: | :------------------------------------- | :-----------: | :------------------------------ | :---------------------------- | :------------------------- |
|  1  | **Trương Mạnh Đạt**<br>_(Nhóm trưởng)_ | **251230841** | `dat251230841@lms.utc.edu.vn`   | `index.html`<br>(Trang chủ)   | - Điều phối dự án, quản lý Git repository.<br>- Thiết kế giao diện trang chủ `index.html`.<br>- Xây dựng hệ thống CSS dùng chung (`style.css`): Biến màu UTC, chuẩn hóa Header & Footer cho toàn bộ 5 trang, thiết lập style nền tảng cho nhóm. |
|  2  | **Nguyễn Phương Hải**                  | **251210853** | `hai251210853@lms.utc.edu.vn`   | `books.html`<br>(Kho sách)    | - Thiết kế giao diện kho sách `books.html`.<br>- Xây dựng CSS riêng `books.css` chuẩn quy ước.<br>- Hiện thực chức năng JavaScript: Tìm kiếm sách theo từ khóa và lọc sách theo chuyên ngành. |
|  3  | **Nguyễn Quốc Khánh**                  | **251230887** | `khanh251230887@lms.utc.edu.vn` | `borrow.html`<br>(Mượn - Trả) | - Thiết kế giao diện quản lý mượn - trả sách `borrow.html`.<br>- Xây dựng CSS riêng `borrow.css`.<br>- Hiện thực chức năng JavaScript: Kiểm tra tính hợp lệ dữ liệu lập phiếu mượn. |
|  4  | **Trần Xuân Đô**                       | **251230843** | `do251230843@lms.utc.edu.vn`    | `readers.html`<br>(Độc giả)   | - Thiết kế giao diện hồ sơ độc giả `readers.html`.<br>- Xây dựng CSS riêng `readers.css`.<br>- Hiện thực chức năng JavaScript: Tìm kiếm độc giả theo mã thẻ và thao tác Khóa / Mở khóa thẻ. |
|  5  | **Đinh Văn Phan Dũng**                 | **251230826** | `dung251230826@lms.utc.edu.vn`  | `contact.html`<br>(Nội quy)   | - Thiết kế giao diện nội quy và liên hệ `contact.html`.<br>- Xây dựng CSS riêng `contact.css`.<br>- Hiện thực chức năng JavaScript: Kiểm tra dữ liệu biểu mẫu góp ý và đề xuất sách. |

---

# MỤC LỤC BÁO CÁO

- [I. ĐỀ TÀI](#i-đề-tài)
  - [1. Sơ lược về hệ thống](#1-sơ-lược-về-hệ-thống)
  - [2. Nghiệp vụ của hệ thống (Giới thiệu bài toán)](#2-nghiệp-vụ-của-hệ-thống-giới-thiệu-bài-toán)
  - [3. Mục đích và yêu cầu](#3-mục-đích-và-yêu-cầu)
- [II. KHẢO SÁT & PHÂN TÍCH](#ii-khảo-sát--phân-tích)
  - [1. Tìm hiểu các website đã có cùng chủ đề](#1-tìm-hiểu-các-website-đã-có-cùng-chủ-đề)
  - [2. Trình bày các đối tượng sử dụng](#2-trình-bày-các-đối-tượng-sử-dụng)
  - [3. Trình bày các chức năng cơ bản cho từng đối tượng](#3-trình-bày-các-chức-năng-cơ-bản-cho-từng-đối-tượng)
- [III. THIẾT KẾ HỆ THỐNG](#iii-thiết-kế-hệ-thống)
  - [1. Sơ đồ Use-Case (Use-case Diagram)](#1-sơ-đồ-use-case-use-case-diagram)
  - [2. Sơ đồ cấu trúc trang (Sitemap)](#2-sơ-đồ-cấu-trúc-trang-sitemap)
  - [3. Thiết kế Wireframe bố cục các trang](#3-thiết-kế-wireframe-bố-cục-các-trang)
- [IV. TRIỂN KHAI XÂY DỰNG WEBSITE](#iv-triển-khai-xây-dựng-website)
  - [1. Cấu trúc thư mục dự án](#1-cấu-trúc-thư-mục-dự-án)
  - [2. Giải thích giao diện và phương pháp hiện thực (HTML, CSS, JS)](#2-giải-thích-giao-diện-và-phương-pháp-hiện-thực-html-css-js)
- [V. KIỂM THỬ HỆ THỐNG (TESTING)](#v-kiểm-thử-hệ-thống-testing)
  - [1. Mục tiêu kiểm thử](#1-mục-tiêu-kiểm-thử)
  - [2. Xây dựng các Test Cases (Link, Effect, Data Validation)](#2-xây-dựng-các-test-cases-link-effect-data-validation)
- [VI. TỰ ĐÁNH GIÁ & KẾT LUẬN](#vi-tự-đánh-giá--kết-luận)
  - [1. Đánh giá nhóm](#1-đánh-giá-nhóm)
  - [2. Bảng điểm tự đánh giá cá nhân](#2-bảng-điểm-tự-đánh-giá-cá-nhân)
  - [3. Bảng điểm nhóm đánh giá từng cá nhân](#3-bảng-điểm-nhóm-đánh-giá-từng-cá-nhân)

---

# I. ĐỀ TÀI

### 1. Sơ lược về hệ thống

Hệ thống **"Thư Viện Điện Tử UTC"** được xây dựng nhằm phục vụ nhu cầu học tập, nghiên cứu của sinh viên Trường Đại học Giao thông Vận tải, đặc biệt là sinh viên chuyên ngành Công nghệ thông tin. Kho tài liệu tập trung vào hai mảng chính:

- **Giáo trình Lập trình & CNTT:** Lập trình Web (HTML/CSS/JS), Cấu trúc dữ liệu và giải thuật (C/C++), Lập trình C# và .NET Core, Lập trình Game Unity & C#, Cơ sở dữ liệu SQL Server.
- **Tài liệu Ngoại ngữ:** Bộ luyện thi Cambridge IELTS (IELTS 18, Official Cambridge Guide) và Tiếng Anh chuyên ngành CNTT (Oxford).

### 2. Nghiệp vụ của hệ thống (Giới thiệu bài toán)

- **Quản lý danh mục sách:** Cho phép tra cứu nhanh, phân loại theo chuyên ngành hẹp và kiểm soát số lượng còn lại trong kho.
- **Quản lý thẻ sinh viên:** Độc giả sử dụng Mã sinh viên cùng tài khoản email định danh.
- **Quy trình Mượn - Trả:** Mỗi sinh viên được mượn tối đa 3 cuốn sách trong thời hạn 14 ngày, có thể gia hạn trực tuyến thêm 7 ngày.

### 3. Mục đích và yêu cầu

- **Mục đích:** Vận dụng toàn diện kiến thức nền tảng của học phần Thiết kế Web để xây dựng một website thực tế, gắn liền với môi trường học tập tại Đại học Giao thông Vận tải.
- **Yêu cầu kỹ thuật:** Bố cục rõ ràng, chuẩn Responsive trên màn hình máy tính và điện thoại thông minh, không dùng backend phức tạp, mã nguồn JavaScript thuần tường minh, cấu trúc mạch lạc và tuân thủ chuẩn lập trình phía Client (Front-end).

---

# II. KHẢO SÁT & PHÂN TÍCH

### 1. Tìm hiểu các website đã có cùng chủ đề

- **Thư viện Trường ĐH Giao thông Vận tải (lib.utc.edu.vn):** Cung cấp hệ thống tra cứu OPAC cho hàng nghìn sinh viên các khoa, tuy nhiên giao diện còn mang tính truyền thống, chưa tối ưu tốt cho trải nghiệm người dùng trẻ trên di động.
- **Giải pháp của nhóm:** Thiết kế giao diện hiện đại với Bootstrap 5, sử dụng hình ảnh trực quan cho từng cuốn sách, tích hợp thanh tìm kiếm tức thời bằng JavaScript thuần không cần tải lại trang.

### 2. Trình bày các đối tượng sử dụng

1. **Sinh viên UTC:** Tra cứu sách Lập trình & tài liệu IELTS, xem quy định mượn sách, gửi đề xuất bổ sung giáo trình mới.
2. **Thủ thư UTC:** Quản lý kho giáo trình, lập phiếu mượn, xác nhận thu hồi sách khi sinh viên trả, quản lý và tạm khóa thẻ khi sinh viên trễ hạn.

### 3. Trình bày các chức năng cơ bản cho từng đối tượng

| Đối tượng         | Tên chức năng             | Mô tả chi tiết                                                                     |
| :---------------- | :------------------------ | :--------------------------------------------------------------------------------- |
| **Sinh viên UTC** | Tra cứu giáo trình        | Nhập từ khóa tên sách (Web, C++, Java, IELTS...), lọc theo từng thể loại ngành.    |
|                   | Xem quy định & Giờ mở cửa | Nắm rõ thời gian mở cửa tại Nhà Thư viện, mức phạt quá hạn 2,000đ/ngày.            |
|                   | Đề xuất mua sách mới      | Gửi biểu mẫu yêu cầu thư viện mua thêm giáo trình công nghệ mới qua email LMS UTC. |
| **Thủ thư UTC**   | Thêm giáo trình mới       | Nhập mã sách, tên sách, tác giả, số lượng nhập kho (kiểm tra hợp lệ bằng JS).      |
|                   | Lập phiếu mượn tài liệu   | Nhập mã sinh viên, chọn sách, hẹn ngày trả (kiểm tra ngày trả sau ngày mượn).      |
|                   | Xác nhận thu hồi sách     | Bấm nút "Trả sách" để chuyển trạng thái sang "Đã trả".                             |
|                   | Quản lý thẻ sinh viên     | Cấp thẻ mới và bấm nút Khóa/Mở khóa thẻ khi sinh viên quá hạn trả sách.            |

---

# III. THIẾT KẾ HỆ THỐNG

### 1. Sơ đồ Use-Case (Use-case Diagram)

![Sơ đồ Use-Case Thư Viện UTC](images/use_case.png)

### 2. Sơ đồ cấu trúc trang (Sitemap)

![Sơ đồ cấu trúc trang Sitemap](images/site_map.png)

### 3. Thiết kế Wireframe bố cục các trang

Hệ thống được thiết kế Wireframe chi tiết cho toàn bộ 5 trang chức năng, đảm bảo tính nhất quán về bố cục thanh điều hướng (Header/Navbar), nội dung chính (Main) và chân trang (Footer):

- **Header (Dùng chung):** Thanh Navbar nền xanh nhận diện UTC, logo trường ĐH Giao thông Vận tải, menu điều hướng 5 trang.
- **Footer (Dùng chung):** Địa chỉ, liên kết nhanh, danh sách nhóm sinh viên thực hiện.

#### a. Wireframe Trang chủ (`index.html`)

Bố cục gồm: Hero Banner giới thiệu giáo trình CNTT & IELTS, 4 khối thống kê số liệu thư viện, lưới giáo trình tiêu biểu và khối quy trình 3 bước mượn trả sách.

![Wireframe Trang chủ - index.html](wireFrame/wireframe_index.png)

#### b. Wireframe Kho giáo trình & tài liệu (`books.html`)

Bố cục gồm: Thanh tìm kiếm từ khóa, bộ lọc danh mục/thể loại, các loại giáo trình.

![Wireframe Kho sách - books.html](wireFrame/wireframe_books.png)

#### c. Wireframe Quản lý mượn - trả sách (`borrow.html`)

Bố cục gồm: Thanh tác vụ, lập phiếu mượn mới và Bảng dữ liệu theo dõi trạng thái phiếu mượn theo thời gian thực (Đang mượn, Đã trả, Quá hạn) kèm nút thao tác xác nhận trả sách.

![Wireframe Mượn - Trả sách - borrow.html](wireFrame/wireframe_borrow.png)

#### d. Wireframe Quản lý hồ sơ độc giả (`readers.html`)

Bố cục gồm: Ô tìm kiếm bạn đọc theo Mã SV/Họ tên, nút làm mới danh sách và Bảng danh sách thẻ thư viện sinh viên &giảng viên kèm nút thao tác Khóa/Mở khóa thẻ.

![Wireframe Quản lý độc giả - readers.html](wireFrame/wireframe_readers.png)

#### e. Wireframe Nội quy & Liên hệ (`contact.html`)

Bố cục chia 2 cột gồm: Cột trái hiển thị thông tin thời gian mở cửa phòng đọc và nội quy thư viện; Cột phải là Biểu mẫu gửi ý kiến đóng góp & đề xuất mua thêm giáo trình mới.

![Wireframe Nội quy & Liên hệ - contact.html](wireFrame/wireframe_contact.png)

---

# IV. TRIỂN KHAI XÂY DỰNG WEBSITE

### 1. Cấu trúc thư mục dự án

```
BTL_ThietKeWeb
│
├── index.html                    # Trang 1: Trang chủ Thư viện UTC (Đạt)
├── books.html                    # Trang 2: Kho sách CNTT & IELTS (Hải)
├── borrow.html                   # Trang 3: Quản lý Mượn - Trả sách (Khánh)
├── readers.html                  # Trang 4: Quản lý Thẻ sinh viên UTC (Đô)
├── contact.html                  # Trang 5: Nội quy & Đề xuất mua sách (Dũng)
│
│
├── wireFrame/                    # Thư mục chứa bản vẽ Wireframe thiết kế
│   ├── wireframe_index.png       # Wireframe Trang chủ
│   ├── wireframe_books.png       # Wireframe Kho sách
│   ├── wireframe_borrow.png      # Wireframe Mượn - Trả sách
│   ├── wireframe_readers.png     # Wireframe Quản lý độc giả
│   └── wireframe_contact.png     # Wireframe Nội quy & Liên hệ
│
├── images/                       # Thư mục chứa hình ảnh cục bộ của hệ thống
│   ├── logo_utc.png              # File logo chính thức của Trường ĐH Giao thông Vận tải
│   ├── use_case.png              # Sơ đồ Use-Case hệ thống Thư viện UTC
│   ├── site_map.png              # Sơ đồ cấu trúc điều hướng trang (Sitemap)
│   ├── book1_web.jpg
│   ├── book2_dsa.jpg
│   ├── book3_cs.jpg
│   ├── book4_ielts18.png
│   ├── book5_unity.jpg
│   ├── book6_english_it.jpg
│   ├── book7_sql.jpg
│   └── book8_cambridge_guide.jpg
│
├── css/
│   ├── style.css             # CSS nền tảng dùng chung (Header, Footer, Nút, Badge)
│   ├── index.css             # CSS riêng Trang chủ (Đạt)
│   ├── books.css             # CSS riêng Kho sách (Hải)
│   ├── borrow.css            # CSS riêng Mượn - Trả (Khánh)
│   ├── readers.css           # CSS riêng Độc giả (Đô)
│   └── contact.css           # CSS riêng Nội quy & Đề xuất (Dũng)
│
├── js/
│   └── script.js                 # File JavaScript cơ bản
│
|
└── BAO_CAO_BAI_TAP_LON_QUAN_LY_THU_VIEN.md     # Bản báo cáo hoàn chỉnh bài tập lớn
```

### 2. Giải thích giao diện và phương pháp hiện thực (HTML, CSS, JS)

#### a. Mã nguồn HTML5:

- Dữ liệu sách và danh sách bạn đọc được viết trực tiếp trong HTML, phản ánh thông tin của 5 sinh viên nhóm:
  - Trương Mạnh Đạt (Mã SV: `251230841` - Email: `dat251230841@lms.utc.edu.vn`)
  - Nguyễn Phương Hải (Mã SV: `251210853` - Email: `hai251210853@lms.utc.edu.vn`)
  - Nguyễn Quốc Khánh (Mã SV: `251230887` - Email: `khanh251230887@lms.utc.edu.vn`)
  - Trần Xuân Đô (Mã SV: `251230843` - Email: `do251230843@lms.utc.edu.vn`)
  - Đinh Văn Phan Dũng (Mã SV: `251230826` - Email: `dung251230826@lms.utc.edu.vn`)

#### b. Mã nguồn CSS3 & Bootstrap 5:

- **Kiến trúc CSS phân tầng:**
  - **File `css/style.css`:** Đóng vai trò nền tảng dùng chung cho toàn bộ website. Thiết lập bảng màu nhận diện thương hiệu UTC, định dạng thanh điều hướng cố định ở đầu trang, chân trang đồng bộ và các thành phần giao diện dùng chung như nút bấm, nhãn trạng thái và thẻ sách.
  - **Các file CSS riêng theo trang:** Mỗi thành viên tự xây dựng một file CSS độc lập phục vụ bố cục chuyên biệt của trang mình phụ trách, tránh xung đột thuộc tính và giúp mã nguồn rõ ràng.
- **Quy ước kỹ thuật và Responsive:**
  - **Độ ưu tiên phẳng:** Thiết lập bộ chọn CSS mạch lạc, tuyệt đối không lạm dụng từ khóa `!important` nhằm đảm bảo khả năng mở rộng và bảo trì mã nguồn.
  - **Thiết kế thích ứng:** Kết hợp hệ thống lưới Bootstrap 5 cùng Flexbox giúp giao diện tự động co giãn tối ưu trên mọi độ phân giải màn hình từ máy tính đến điện thoại di động.

#### c. Mã nguồn JavaScript (`js/script.js`):

....

---

# V. KIỂM THỬ HỆ THỐNG (TESTING)

### 1. Mục tiêu kiểm thử

- Đảm bảo toàn bộ liên kết điều hướng 5 trang hoạt động thông suốt.
- Kiểm tra tính năng tìm kiếm sách chuyên ngành và các ràng buộc dữ liệu mã sinh viên, email .

### 2. Xây dựng các Test Cases (Link, Effect, Data Validation)

#### Phần 1: Kiểm thử Liên kết & Giao diện chung (Trương Mạnh Đạt - Trang chủ - index.html)

| Mã TC | Phụ trách | Mục tiêu kiểm thử | Các bước thực hiện & Dữ liệu nhập | Kết quả mong đợi | Đánh giá |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **TC01** | Trương Mạnh Đạt | Kiểm tra thanh điều hướng (Navbar) | Bấm lần lượt 5 liên kết trên Header: Trang chủ, Kho sách, Mượn trả, Độc giả, Liên hệ | Chuyển trang mượt mà, đúng URL, giữ nguyên Header/Footer đồng bộ | **Đạt** |
| **TC02** | Trương Mạnh Đạt | Kiểm tra tính Responsive | Thu nhỏ trình duyệt về kích thước điện thoại (dưới 768px) | Menu tự động thu gọn thành nút mở rộng, các thẻ thống kê tự xếp thành 1 cột | **Đạt** |
| **TC03** | Trương Mạnh Đạt | Hiệu ứng Hover thẻ sách tiêu biểu | Rê chuột vào từng thẻ giáo trình trên trang chủ | Thẻ sách nâng nhẹ lên | **Đạt** |

#### Phần 2: Kiểm thử Kho giáo trình (Nguyễn Phương Hải - Kho sách)
*(Thành viên phụ trách tự thực hiện kiểm thử và cập nhật kết quả)*

#### Phần 3: Kiểm thử Quản lý mượn - trả sách (Nguyễn Quốc Khánh - Mượn - Trả)
*(Thành viên phụ trách tự thực hiện kiểm thử và cập nhật kết quả)*

#### Phần 4: Kiểm thử Quản lý độc giả (Trần Xuân Đô - Độc giả)
*(Thành viên phụ trách tự thực hiện kiểm thử và cập nhật kết quả)*

#### Phần 5: Kiểm thử Nội quy & Góp ý (Đinh Văn Phan Dũng - Nội quy & Liên hệ)
*(Thành viên phụ trách tự thực hiện kiểm thử và cập nhật kết quả)*

# VI. TỰ ĐÁNH GIÁ & KẾT LUẬN

### 1. Đánh giá nhóm

- **Ưu điểm:**
  ....
- **Tự chấm điểm nhóm:**

### 2. Bảng điểm tự đánh giá cá nhân

_Công thức tính điểm trung bình môn học:_
$$\text{TB} = \frac{d1 + \frac{d2 + d3}{2}}{2}$$

#### Bảng điểm tự đánh giá

| Họ tên sinh viên       | Mã sinh<br>viên |  Trang<br>phụ trách  | d1.1 | d1.2 | d1.3 |   d1.4   | d2.1 | d2.2 |   d2.3   | d3.1 | d3.2 | d3.3 |   d3.4   | **Điểm<br>TB** |
| :--------------------- | :-------------: | :------------------: | :--: | :--: | :--: | :------: | :--: | :--: | :------: | :--: | :--: | :--: | :------: | :------------: |
| **Trương Mạnh Đạt**    |  **251230841**  |  `index`<br>`.html`  | ...  | ...  | ...  | **....** | ...  | ...  | **....** | ...  | ...  | ...  | **....** |    **....**    |
| **Nguyễn Phương Hải**  |  **251210853**  |  `books`<br>`.html`  | ...  | ...  | ...  | **....** | ...  | ...  | **....** | ...  | ...  | ...  | **....** |    **....**    |
| **Nguyễn Quốc Khánh**  |  **251230887**  | `borrow`<br>`.html`  | ...  | ...  | ...  | **....** | ...  | ...  | **....** | ...  | ...  | ...  | **....** |    **....**    |
| **Trần Xuân Đô**       |  **251230843**  | `readers`<br>`.html` | ...  | ...  | ...  | **....** | ...  | ...  | **....** | ...  | ...  | ...  | **....** |    **....**    |
| **Đinh Văn Phan Dũng** |  **251230826**  | `contact`<br>`.html` | ...  | ...  | ...  | **....** | ...  | ...  | **....** | ...  | ...  | ...  | **....** |    **....**    |

### 3. Bảng điểm nhóm đánh giá cho từng cá nhân

| Họ tên sinh viên       | Mã sinh viên | Nhiệm vụ hoàn thành                                                   | Đánh giá của tập thể nhóm                   | Điểm Nhóm Thống Nhất |
| :--------------------- | :----------: | :-------------------------------------------------------------------- | :------------------------------------------ | :------------------: |
| **Trương Mạnh Đạt**    |  251230841   | Trưởng nhóm, thiết kế trang chủ, tích hợp logo UTC và quản lý tiến độ | Tinh thần trách nhiệm cao, dẫn dắt nhóm tốt |       **...**        |
| **Nguyễn Phương Hải**  |  251210853   | Hoàn thành trang Sách CNTT & IELTS, viết hàm tìm kiếm/lọc JS          | Code cẩn thận, giao diện đẹp, đúng tiến độ  |       **...**        |
| **Nguyễn Quốc Khánh**  |  251230887   | Hoàn thành trang Mượn - Trả sách, kiểm tra logic mượn                 | Nhiệt tình, hoàn thành tốt bảng phiếu mượn  |       **...**        |
| **Trần Xuân Đô**       |  251230843   | Hoàn thành trang Độc giả, kiểm tra email LMS và SĐT                   | Chăm chỉ, phối hợp ăn ý với nhóm trưởng     |       **...**        |
| **Đinh Văn Phan Dũng** |  251230826   | Hoàn thành trang Nội quy UTC                                          | Hoàn thành tốt nhiệm vụ                     |       **...**        |

---

_Hà Nội, Năm 2026_  
**Xác nhận của Nhóm trưởng:** Trương Mạnh Đạt
