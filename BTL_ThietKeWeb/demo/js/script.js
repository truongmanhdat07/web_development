/**
 * ==========================================================================
 * BÀI TẬP LỚN MÔN THIẾT KẾ WEB - TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI (UTC)
 * Đề tài: Hệ Thống Thư Viện Điện Tử UTC (100% Front-End)
 * Nhóm sinh viên Lớp CNTT3:
 *   1. Trương Mạnh Đạt (Nhóm trưởng) - MSV: 251230841 - index.html
 *   2. Nguyễn Phương Hải             - MSV: 251210853 - books.html
 *   3. Nguyễn Quốc Khánh             - MSV: 251230887 - borrow.html
 *   4. Trần Xuân Đô                  - MSV: 251230843 - readers.html
 *   5. Đinh Văn Phan Dũng            - MSV: 251230826 - contact.html
 * Giảng viên hướng dẫn: ThS. Hoàng Văn Cường (Mã: GV001)
 * File: js/script.js
 * ==========================================================================
 */

// ==========================================================================
// 1. TÌM KIẾM SÁCH THEO TỪ KHÓA (books.html)
// ==========================================================================
function timKiemSach() {
  let input = document.getElementById("oTimKiem");
  if (!input) return;
  let tuKhoa = input.value.toLowerCase().trim();
  let danhSachSach = document.getElementsByClassName("the-sach");

  for (let i = 0; i < danhSachSach.length; i++) {
    let text = danhSachSach[i].innerText.toLowerCase();
    if (tuKhoa === "" || text.indexOf(tuKhoa) > -1) {
      danhSachSach[i].style.display = "";
    } else {
      danhSachSach[i].style.display = "none";
    }
  }
}

// ==========================================================================
// 2. LỌC SÁCH THEO THỂ LOẠI (books.html)
// ==========================================================================
function locTheLoai() {
  let select = document.getElementById("chonTheLoai");
  if (!select) return;
  let theLoaiDuocChon = select.value;
  let danhSachSach = document.getElementsByClassName("the-sach");

  for (let i = 0; i < danhSachSach.length; i++) {
    let theLoaiSach = danhSachSach[i].getAttribute("data-theloai");
    if (theLoaiDuocChon === "" || theLoaiSach === theLoaiDuocChon) {
      danhSachSach[i].style.display = "";
    } else {
      danhSachSach[i].style.display = "none";
    }
  }
}

// ==========================================================================
// 3. KIỂM TRA FORM THÊM SÁCH MỚI (books.html)
// ==========================================================================
function kiemTraThemSach() {
  let maSachEl = document.getElementById("maSach");
  let tenSachEl = document.getElementById("tenSach");
  let theLoaiEl = document.getElementById("theLoai") || document.getElementById("theLoaiMoi");
  let tacGiaEl = document.getElementById("tacGia");
  let soLuongEl = document.getElementById("soLuong");

  let maSach = maSachEl ? maSachEl.value.trim().toUpperCase() : "";
  let tenSach = tenSachEl ? tenSachEl.value.trim() : "";
  let theLoai = theLoaiEl ? theLoaiEl.value : "";
  let tacGia = tacGiaEl ? tacGiaEl.value.trim() : "";
  let soLuong = soLuongEl ? soLuongEl.value.trim() : "";

  if (maSach === "") {
    alert("Vui lòng nhập mã sách thư viện!");
    if (maSachEl) maSachEl.focus();
    return false;
  }

  // Ràng buộc tiền tố UTC (ví dụ UTC009)
  if (!maSach.startsWith("UTC")) {
    alert("Quy ước mã sách Thư viện UTC phải bắt đầu bằng 'UTC' (Ví dụ: UTC009)!");
    if (maSachEl) maSachEl.focus();
    return false;
  }

  if (tenSach === "") {
    alert("Vui lòng nhập tên giáo trình / tài liệu!");
    if (tenSachEl) tenSachEl.focus();
    return false;
  }

  if (theLoai === "") {
    alert("Vui lòng chọn thể loại tài liệu!");
    if (theLoaiEl) theLoaiEl.focus();
    return false;
  }

  if (tacGia === "") {
    alert("Vui lòng nhập tác giả hoặc đơn vị xuất bản!");
    if (tacGiaEl) tacGiaEl.focus();
    return false;
  }

  if (soLuong === "" || isNaN(soLuong) || parseInt(soLuong) <= 0) {
    alert("Số lượng sách nhập kho phải là số nguyên dương lớn hơn 0!");
    if (soLuongEl) soLuongEl.focus();
    return false;
  }

  alert("Thêm giáo trình mới vào Thư viện UTC thành công!\n- Mã sách: " + maSach + "\n- Tên sách: " + tenSach + "\n- Thể loại: " + theLoai + "\n- Số lượng: " + soLuong + " cuốn.");

  // Đóng modal bootstrap nếu có
  let modalElement = document.getElementById('modalThemSach');
  if (modalElement && typeof bootstrap !== 'undefined') {
    let modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) modal.hide();
  }

  // Reset form
  let form = modalElement ? modalElement.querySelector("form") : null;
  if (form) form.reset();

  return false;
}

// ==========================================================================
// 4. KIỂM TRA FORM LẬP PHIẾU MƯỢN SÁCH (borrow.html)
// ==========================================================================
function kiemTraMuonSach() {
  let maDocGiaEl = document.getElementById("maSinhVien") || document.getElementById("maDocGia");
  let hoTenEl = document.getElementById("tenSinhVien") || document.getElementById("hoTenNguoiMuon");
  let sachMuonEl = document.getElementById("sachMuon") || document.getElementById("chonSachMuon");
  let ngayMuonEl = document.getElementById("ngayMuon");
  let ngayHenTraEl = document.getElementById("ngayHenTra");

  let maDocGia = maDocGiaEl ? maDocGiaEl.value.trim().toUpperCase() : "";
  let hoTen = hoTenEl ? hoTenEl.value.trim() : "";
  let sachMuon = sachMuonEl ? sachMuonEl.value : "";
  let ngayMuon = ngayMuonEl ? ngayMuonEl.value : "";
  let ngayHenTra = ngayHenTraEl ? ngayHenTraEl.value : "";

  if (maDocGia === "") {
    alert("Vui lòng nhập Mã sinh viên UTC (9 chữ số) hoặc Mã giảng viên (GV001)!");
    if (maDocGiaEl) maDocGiaEl.focus();
    return false;
  }

  // Kiểm tra mã độc giả hợp lệ
  let isSinhVien = /^[0-9]{9}$/.test(maDocGia);
  let isGiangVien = (maDocGia === "GV001" || maDocGia.startsWith("GV"));
  if (!isSinhVien && !isGiangVien) {
    alert("Mã độc giả không hợp lệ!\n- Sinh viên: 9 chữ số (Ví dụ: 251230841)\n- Giảng viên: GV001");
    if (maDocGiaEl) maDocGiaEl.focus();
    return false;
  }

  if (hoTen === "") {
    alert("Vui lòng nhập họ và tên người mượn!");
    if (hoTenEl) hoTenEl.focus();
    return false;
  }

  if (sachMuon === "") {
    alert("Vui lòng chọn giáo trình CNTT hoặc tài liệu IELTS cần mượn!");
    if (sachMuonEl) sachMuonEl.focus();
    return false;
  }

  if (!ngayMuon || !ngayHenTra) {
    alert("Vui lòng chọn đầy đủ ngày mượn và ngày hẹn trả sách!");
    return false;
  }

  let dMuon = new Date(ngayMuon);
  let dTra = new Date(ngayHenTra);

  if (dTra <= dMuon) {
    alert("Lỗi thời gian: Ngày hẹn trả phải sau ngày mượn ít nhất 1 ngày!");
    if (ngayHenTraEl) ngayHenTraEl.focus();
    return false;
  }

  let soNgayMuon = Math.round((dTra - dMuon) / (1000 * 60 * 60 * 24));
  if (soNgayMuon > 30) {
    alert("Cảnh báo: Thời gian mượn tiêu chuẩn của Thư viện UTC là 14 ngày (tối đa 30 ngày)!");
    return false;
  }

  alert("Lập phiếu mượn tài liệu Thư viện UTC thành công!\n- Mã độc giả: " + maDocGia + "\n- Họ tên: " + hoTen + "\n- Giáo trình: " + sachMuon + "\n- Thời hạn mượn: " + soNgayMuon + " ngày (Hạn trả: " + ngayHenTra + ")");

  let modalElement = document.getElementById('modalLapPhieu');
  if (modalElement && typeof bootstrap !== 'undefined') {
    let modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) modal.hide();
  }

  let form = modalElement ? modalElement.querySelector("form") : null;
  if (form) form.reset();

  return false;
}
// Hỗ trợ alias tên hàm nếu trang dùng kiemTraLapPhieuMuon
function kiemTraLapPhieuMuon() {
  return kiemTraMuonSach();
}

// ==========================================================================
// 5. THAO TÁC XÁC NHẬN TRẢ SÁCH (borrow.html)
// ==========================================================================
function xacNhanTraSach(maPhieu, tenDocGia) {
  let xacNhan = confirm("Bạn có chắc chắn muốn xác nhận trả sách cho phiếu '" + maPhieu + "' của bạn đọc '" + tenDocGia + "'?");
  if (xacNhan) {
    let dongPhieu = document.getElementById("dong-" + maPhieu) || document.getElementById("row-" + maPhieu);
    if (dongPhieu) {
      dongPhieu.classList.remove("table-danger");
      let cotTrangThai = dongPhieu.querySelector(".cot-trangthai");
      if (cotTrangThai) {
        cotTrangThai.innerHTML = '<span class="badge bg-success">Đã trả</span>';
      }
      let cotThaoTac = dongPhieu.querySelector(".cot-thaotac");
      if (cotThaoTac) {
        cotThaoTac.innerHTML = '<span class="text-success small fw-bold"><i class="bi bi-check-circle-fill me-1"></i>Hoàn tất</span>';
      }
    }
    alert("Thủ thư đã xác nhận nhận lại sách thành công cho phiếu: " + maPhieu + "!\nTrạng thái: ĐÃ TRẢ (Hôm nay: 15/10/2026).");
  }
}

// ==========================================================================
// 6. KIỂM TRA FORM CẤP THẺ ĐỘC GIẢ (readers.html)
// ==========================================================================
function kiemTraDangKyDocGia() {
  let maDocGiaEl = document.getElementById("maDocGia") || document.getElementById("maTheMoi");
  let hoTenEl = document.getElementById("hoTen") || document.getElementById("hoTenDocGia");
  let doiTuongEl = document.getElementById("doiTuong") || document.getElementById("loaiDocGia");
  let khoaEl = document.getElementById("khoa") || document.getElementById("lopDocGia");
  let emailEl = document.getElementById("email") || document.getElementById("emailDocGia");
  let sdtEl = document.getElementById("sdt") || document.getElementById("sdtDocGia");

  let maDocGia = maDocGiaEl ? maDocGiaEl.value.trim().toUpperCase() : "";
  let hoTen = hoTenEl ? hoTenEl.value.trim() : "";
  let doiTuong = doiTuongEl ? doiTuongEl.value : "";
  let khoa = khoaEl ? khoaEl.value.trim() : "";
  let email = emailEl ? emailEl.value.trim().toLowerCase() : "";
  let sdt = sdtEl ? sdtEl.value.trim() : "";

  if (maDocGia === "") {
    alert("Vui lòng nhập Mã sinh viên (9 số) hoặc Mã giảng viên (GV001)!");
    if (maDocGiaEl) maDocGiaEl.focus();
    return false;
  }

  let isSinhVien = /^[0-9]{9}$/.test(maDocGia);
  let isGiangVien = (maDocGia === "GV001" || maDocGia.startsWith("GV"));
  if (!isSinhVien && !isGiangVien) {
    alert("Mã độc giả không hợp lệ!\n- Sinh viên: đúng 9 chữ số (Ví dụ: 251230841)\n- Giảng viên: GV001");
    if (maDocGiaEl) maDocGiaEl.focus();
    return false;
  }

  if (hoTen === "") {
    alert("Vui lòng nhập đầy đủ họ và tên độc giả!");
    if (hoTenEl) hoTenEl.focus();
    return false;
  }

  if (khoa === "") {
    alert("Vui lòng nhập Khoa / Lớp chuyên ngành (ví dụ: CNTT3 - UTC)!");
    if (khoaEl) khoaEl.focus();
    return false;
  }

  if (email === "") {
    alert("Vui lòng nhập địa chỉ Email trường UTC!");
    if (emailEl) emailEl.focus();
    return false;
  }

  // Kiểm tra đuôi email LMS UTC hoặc UTC
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Địa chỉ email không đúng định dạng!");
    if (emailEl) emailEl.focus();
    return false;
  }

  let phonePattern = /^0[0-9]{9}$/;
  if (!phonePattern.test(sdt)) {
    alert("Số điện thoại không hợp lệ! Vui lòng nhập đúng 10 chữ số bắt đầu bằng số 0 (Ví dụ: 0981234567).");
    if (sdtEl) sdtEl.focus();
    return false;
  }

  alert("Cấp thẻ Thư viện Điện tử UTC thành công!\n- Mã thẻ: " + maDocGia + "\n- Độc giả: " + hoTen + "\n- Lớp/Khoa: " + khoa + "\n- Email: " + email + "\n- Hiệu lực: 15/10/2026 đến 15/10/2027.");

  let modalElement = document.getElementById('modalCapThe');
  if (modalElement && typeof bootstrap !== 'undefined') {
    let modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) modal.hide();
  }

  let form = modalElement ? modalElement.querySelector("form") : null;
  if (form) form.reset();

  return false;
}
// Hỗ trợ alias tên hàm nếu có
function kiemTraCapThe() {
  return kiemTraDangKyDocGia();
}

// ==========================================================================
// 7. KHÓA / MỞ KHÓA THẺ ĐỘC GIẢ (readers.html)
// ==========================================================================
function doiTrangThaiThe(maDocGia, hoTen) {
  let dongDocGia = document.getElementById("docgia-" + maDocGia);
  if (!dongDocGia) return;

  let cotTrangThai = dongDocGia.querySelector(".trang-thai-the");
  let nutHanhDong = dongDocGia.querySelector(".nut-khoa-the");
  let dangHoatDong = cotTrangThai ? cotTrangThai.innerText.includes("Hoạt động") : true;

  if (dangHoatDong) {
    let xacNhan = confirm("Bạn có chắc chắn muốn TẠM KHÓA thẻ thư viện của " + hoTen + " (Mã: " + maDocGia + ") do quá hạn hoặc vi phạm nội quy?");
    if (xacNhan) {
      if (cotTrangThai) {
        cotTrangThai.innerHTML = '<span class="badge bg-secondary">Đã khóa</span>';
      }
      if (nutHanhDong) {
        nutHanhDong.className = "btn btn-sm btn-success nut-khoa-the";
        nutHanhDong.innerText = "Mở khóa";
      }
      alert("Đã tạm khóa thẻ của độc giả: " + hoTen + " (" + maDocGia + ").");
    }
  } else {
    let xacNhan = confirm("Bạn có muốn KÍCH HOẠT LẠI (MỞ KHÓA) thẻ thư viện cho " + hoTen + " (Mã: " + maDocGia + ")?");
    if (xacNhan) {
      if (cotTrangThai) {
        cotTrangThai.innerHTML = '<span class="badge bg-success">Hoạt động</span>';
      }
      if (nutHanhDong) {
        nutHanhDong.className = "btn btn-sm btn-warning nut-khoa-the";
        nutHanhDong.innerText = "Khóa thẻ";
      }
      alert("Đã mở khóa thẻ thành công cho: " + hoTen + " (" + maDocGia + ").");
    }
  }
}

// ==========================================================================
// 8. KIỂM TRA FORM GỬI LIÊN HỆ & ĐỀ XUẤT SÁCH (contact.html)
// ==========================================================================
function kiemTraLienHe() {
  let hoTenEl = document.getElementById("lhHoTen");
  let emailEl = document.getElementById("lhEmail");
  let chuDeEl = document.getElementById("lhChuDe");
  let noiDungEl = document.getElementById("lhNoiDung");

  let hoTen = hoTenEl ? hoTenEl.value.trim() : "";
  let email = emailEl ? emailEl.value.trim().toLowerCase() : "";
  let chuDe = chuDeEl ? chuDeEl.value : "";
  let noiDung = noiDungEl ? noiDungEl.value.trim() : "";

  if (hoTen === "") {
    alert("Vui lòng nhập họ và tên của bạn!");
    if (hoTenEl) hoTenEl.focus();
    return false;
  }

  if (email === "") {
    alert("Vui lòng nhập Email để Thư viện UTC phản hồi!");
    if (emailEl) emailEl.focus();
    return false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Định dạng Email không hợp lệ (Ví dụ: sinhvien@lms.utc.edu.vn)!");
    if (emailEl) emailEl.focus();
    return false;
  }

  if (noiDung === "" || noiDung.length < 10) {
    alert("Nội dung góp ý / đề xuất mua giáo trình phải có ít nhất 10 ký tự!");
    if (noiDungEl) noiDungEl.focus();
    return false;
  }

  alert("Cảm ơn bạn (" + hoTen + ") đã gửi đề xuất / ý kiến đóng góp cho Thư viện UTC!\nBộ phận Thủ thư sẽ xem xét và phản hồi qua email " + email + " trong vòng 24h làm việc.");

  let form = hoTenEl ? hoTenEl.closest("form") : null;
  if (form) form.reset();

  return false;
}
