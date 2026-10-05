/**
 * ==========================================================================
 * BÀI TẬP LỚN MÔN THIẾT KẾ WEB - TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI (UTC)
 * Đề tài: Hệ Thống Quản Lý Thư Viện Điện Tử UTC (100% Front-End)
 * Nhóm sinh viên Lớp CNTT3:
 *   1. Trương Mạnh Đạt (Nhóm trưởng) - MSV: 251230841 - Phụ trách: index.html
 *   2. Nguyễn Phương Hải             - MSV: 251210853 - Phụ trách: books.html
 *   3. Nguyễn Quốc Khánh             - MSV: 251230887 - Phụ trách: borrow.html
 *   4. Trần Xuân Đô                  - MSV: 251230843 - Phụ trách: readers.html
 *   5. Đinh Văn Phan Dũng            - MSV: 251230826 - Phụ trách: contact.html
 * Giảng viên hướng dẫn: ThS. Hoàng Văn Cường (Khoa CNTT - UTC)
 * 
 * [KHUNG HÀM JAVASCRIPT ĐỂ CÁC THÀNH VIÊN TỰ VIẾT CODE HOÀN THIỆN]
 * (Có thể tham khảo code mẫu đầy đủ tại file: demo/js/script.js)
 * ==========================================================================
 */

// ==========================================================================
// PHẦN 1: CODE CHO TRANG CHỦ (index.html)
// Phụ trách: Trương Mạnh Đạt (MSV: 251230841)
// ==========================================================================

/**
 * Hàm khởi tạo hoặc cập nhật số liệu thống kê trên trang chủ
 */
function khoiTaoTrangChu() {
  // TODO: Viết code tính toán hoặc hiển thị hiệu ứng động cho các số liệu thống kê:
  // - 1,500+ Đầu sách CNTT & Ngoại ngữ
  // - 650 Thẻ sinh viên UTC
  // - 92 Sách đang được mượn
  // - 8 Sách quá hạn trả
  console.log("Khởi tạo trang chủ UTC hoàn tất.");
}


// ==========================================================================
// PHẦN 2: CODE CHO TRANG DANH MỤC SÁCH (books.html)
// Phụ trách: Nguyễn Phương Hải (MSV: 251210853)
// ==========================================================================

/**
 * 1. Tìm kiếm sách theo từ khóa (tiêu đề, tác giả, mã sách)
 */
function timKiemSach() {
  let input = document.getElementById("oTimKiem");
  if (!input) return;
  let tuKhoa = input.value.toLowerCase().trim();
  let danhSachSach = document.getElementsByClassName("the-sach");

  // TODO: Duyệt danh sách sách (danhSachSach)
  // Nếu nội dung sách chứa tuKhoa thì hiển thị (style.display = ""), ngược lại ẩn đi (style.display = "none")
}

/**
 * 2. Lọc sách theo danh mục / thể loại (CNTT, IELTS, Toan, Triet...)
 */
function locTheLoai() {
  let select = document.getElementById("chonTheLoai");
  if (!select) return;
  let theLoaiDuocChon = select.value;
  let danhSachSach = document.getElementsByClassName("the-sach");

  // TODO: Lấy attribute data-theloai của từng thẻ sách
  // Nếu theLoaiDuocChon rỗng hoặc trùng khớp thì hiển thị, ngược lại ẩn đi
}

/**
 * 3. Kiểm tra tính hợp lệ và thêm sách mới vào danh sách
 * @returns {boolean} true nếu hợp lệ, false nếu lỗi
 */
function kiemTraThemSach() {
  // TODO: Lấy các giá trị: maSach, tenSach, theLoai, tacGia, namXB, soLuong
  // - Kiểm tra không được để trống
  // - Kiểm tra định dạng mã sách UTCxxx (Ví dụ: UTC009)
  // - Tạo phần tử card sách mới và append vào #danhSachSach
  // - Thông báo thành công và đóng modal
  return false;
}


// ==========================================================================
// PHẦN 3: CODE CHO TRANG MƯỢN - TRẢ SÁCH (borrow.html)
// Phụ trách: Nguyễn Quốc Khánh (MSV: 251230887)
// ==========================================================================

/**
 * 1. Kiểm tra dữ liệu khi lập phiếu mượn sách mới
 * @returns {boolean} true nếu hợp lệ, false nếu lỗi
 */
function kiemTraMuonSach() {
  // TODO: Lấy các trường: maSinhVien, maSach, ngayMuon, ngayHenTra
  // - Kiểm tra sinh viên có trong danh sách và thẻ còn hiệu lực không
  // - Kiểm tra ngày hẹn trả phải lớn hơn hoặc bằng ngày mượn (tối đa 14 ngày)
  // - Thêm dòng mới vào bảng phiếu mượn (#bangPhieuMuon)
  return false;
}

/**
 * 2. Xử lý trả sách khi thủ thư bấm nút "Xác nhận trả"
 * @param {string} maPhieu - Mã phiếu mượn (Ví dụ: 'PM001')
 */
function traSach(maPhieu) {
  // TODO: Tìm dòng có mã phiếu tương ứng
  // Đổi trạng thái từ "Đang mượn" hoặc "Quá hạn" sang "Đã trả sách"
  // Đổi màu badge sang màu xanh lá (bg-success) và vô hiệu hóa nút bấm
  alert("Xử lý trả sách cho phiếu: " + maPhieu);
}


// ==========================================================================
// PHẦN 4: CODE CHO TRANG QUẢN LÝ ĐỘC GIẢ (readers.html)
// Phụ trách: Trần Xuân Đô (MSV: 251230843)
// ==========================================================================

/**
 * 1. Đổi trạng thái thẻ độc giả (Khóa thẻ / Mở khóa thẻ)
 * @param {string} idSinhVien - Mã SV hoặc ID dòng thẻ (Ví dụ: '251230841')
 */
function thayDoiTrangThaiThe(idSinhVien) {
  // TODO: Lấy badge trạng thái và nút bấm tương ứng với idSinhVien
  // Nếu đang "Hoạt động" -> chuyển sang "Bị khóa" (badge bg-danger), nút đổi thành "Mở khóa thẻ"
  // Nếu đang "Bị khóa" -> chuyển sang "Hoạt động" (badge bg-success), nút đổi thành "Khóa thẻ"
  alert("Đã chuyển đổi trạng thái thẻ của độc giả: " + idSinhVien);
}

/**
 * 2. Tìm kiếm độc giả theo Mã SV hoặc Họ tên
 */
function timKiemDocGia() {
  // TODO: Lấy từ khóa từ input #timDocGia và lọc các dòng trong bảng độc giả (#bangDocGia)
}


// ==========================================================================
// PHẦN 5: CODE CHO TRANG NỘI QUY & LIÊN HỆ (contact.html)
// Phụ trách: Đinh Văn Phan Dũng (MSV: 251230826)
// ==========================================================================

/**
 * Kiểm tra form gửi ý kiến / Đề xuất giáo trình mới
 * @returns {boolean} true nếu hợp lệ, false nếu lỗi
 */
function kiemTraFormLienHe() {
  // TODO: Lấy hoTen, email, maSinhVien, noiDung
  // - Kiểm tra định dạng email hợp lệ (regex)
  // - Kiểm tra nội dung không được để trống và tối thiểu 10 ký tự
  // - Hiển thị alert thông báo gửi ý kiến thành công và reset form
  return false;
}

// Lắng nghe sự kiện khi trang đã tải xong DOM
document.addEventListener("DOMContentLoaded", function () {
  console.log("Hệ thống Thư viện UTC đã sẵn sàng.");
});
