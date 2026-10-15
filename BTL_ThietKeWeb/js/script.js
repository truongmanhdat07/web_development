// xu ly form gop y

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formGopY");

    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const hoten = document.getElementById("hoten").value.trim();
        const email = document.getElementById("email").value.trim();
        const chude = document.getElementById("chude").value;
        const noidung = document.getElementById("noidung").value.trim();

        alert(
            "Gửi đề xuất đến Thư viện UTC thành công!\n\n" +
            "Họ và tên: " + hoten + "\n" +
            "Email sinh viên: " + email + "\n" +
            "Chủ đề đề xuất: " + chude + "\n" +
            "Nội dung chi tiết: " + noidung
        );

        const thongbao = document.getElementById("thongbao");

        if (thongbao) {
            thongbao.textContent = "Gửi đề xuất thành công!";
        }

        form.reset();
    });
});


// ===== CHỨC NĂNG LẬP PHIẾU MƯỢN SÁCH =====
function kiemTraMuonSach() {
  let maDocGiaEl = document.getElementById("studentId");
  let hoTenEl = document.getElementById("studentName");
  let sachMuonEl = document.getElementById("bookSelect");
  let ngayMuonEl = document.getElementById("borrowDate");
  let ngayHenTraEl = document.getElementById("dueDate");

  let maDocGia = maDocGiaEl.value.trim().toUpperCase();
  let hoTen = hoTenEl.value.trim();
  let sachMuon = sachMuonEl.value;
  let ngayMuon = ngayMuonEl.value;
  let ngayHenTra = ngayHenTraEl.value;

  if (maDocGia === "") {
    alert(
      "Vui lòng nhập Mã sinh viên UTC (9 chữ số) hoặc Mã giảng viên (GV001)!",
    );
    maDocGiaEl.focus();
    return false;
  }

  let isSinhVien = /^[0-9]{9}$/.test(maDocGia);
  let isGiangVien = maDocGia === "GV001" || maDocGia.startsWith("GV");

  if (!isSinhVien && !isGiangVien) {
    alert(
      "Mã độc giả không hợp lệ!\n" +
        "- Sinh viên: 9 chữ số (Ví dụ: 251230841)\n" +
        "- Giảng viên: GV001",
    );

    maDocGiaEl.focus();
    return false;
  }

  if (hoTen === "") {
    alert("Vui lòng nhập họ và tên người mượn!");
    hoTenEl.focus();
    return false;
  }

  if (sachMuon === "") {
    alert("Vui lòng chọn giáo trình CNTT hoặc tài liệu IELTS cần mượn!");
    sachMuonEl.focus();
    return false;
  }

  let soNgayMuon = 14;

  alert(
    "Lập phiếu mượn thành công!\n" +
      "- Mã độc giả: " +
      maDocGia +
      "\n- Họ tên: " +
      hoTen +
      "\n- Giáo trình: " +
      sachMuon +
      "\n- Thời hạn mượn: " +
      soNgayMuon +
      " ngày",
  );

  let modalElement = document.getElementById("borrowModal");
  let modal = bootstrap.Modal.getInstance(modalElement);

  if (modal) {
    modal.hide();
  }

  document.getElementById("borrowForm").reset();

  return false;
}

// ===== GẮN SỰ KIỆN CHO FORM MƯỢN SÁCH =====
document.addEventListener("DOMContentLoaded", function () {
  let borrowForm = document.getElementById("borrowForm");

  let ngayMuonEl = document.getElementById("borrowDate");
  let ngayHenTraEl = document.getElementById("dueDate");
  let borrowModal = document.getElementById("borrowModal");

  if (!borrowForm || !ngayMuonEl || !ngayHenTraEl) return;

  function datNgayMuonVaHanTra() {
    let homNay = new Date();

    let hanTra = new Date(homNay);
    hanTra.setDate(hanTra.getDate() + 14);

    let ngayMuon = homNay.toISOString().split("T")[0];
    let ngayTra = hanTra.toISOString().split("T")[0];

    ngayMuonEl.value = ngayMuon;
    ngayHenTraEl.value = ngayTra;
  }

  datNgayMuonVaHanTra();

  if (borrowModal) {
    borrowModal.addEventListener("show.bs.modal", function () {
      datNgayMuonVaHanTra();
    });
  }

  borrowForm.addEventListener("submit", function (event) {
    event.preventDefault();
    kiemTraMuonSach();
  });
});

// ===== CHỨC NĂNG TRẢ SÁCH / THU HỒI SÁCH =====

document.addEventListener("DOMContentLoaded", function () {
  let cacNutTraSach = document.querySelectorAll(".btn-return, .btn-collect");

  for (let i = 0; i < cacNutTraSach.length; i++) {
    cacNutTraSach[i].addEventListener("click", function () {
      let dongPhieu = this.closest("tr");

      let maPhieu = dongPhieu.querySelector(".code").innerText.trim();
      let tenDocGia = dongPhieu.querySelector(".student-name").innerText.trim();

      let xacNhan = confirm(
        "Bạn có chắc chắn muốn xác nhận trả sách cho phiếu '" +
          maPhieu +
          "' của bạn đọc '" +
          tenDocGia +
          "'?",
      );

      if (xacNhan) {
        // Xóa màu quá hạn nếu có
        dongPhieu.classList.remove("row-overdue");

        // Cột trạng thái là cột thứ 7
        let cotTrangThai = dongPhieu.cells[6];

        cotTrangThai.innerHTML =
          '<span class="badge-custom badge-success">Đã trả</span>';

        // Cột xử lý là cột thứ 8
        let cotXuLy = dongPhieu.cells[7];

        cotXuLy.className = "done";
        cotXuLy.innerHTML = "✓ Hoàn tất";

        alert("Đã xác nhận trả sách thành công cho phiếu: " + maPhieu);
      }
    });
  }
});
// TRANG DANH MỤC SÁCH

// Bỏ dấu và đổi chữ thường
function boDauTiengViet(chuoi) {
  return chuoi
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

// Hiện sách khớp từ khóa và thể loại, ẩn sách còn lại
function locDanhSachSach() {
  const tuKhoa = boDauTiengViet(
    document.getElementById("oTimKiem").value.trim(),
  );
  const theLoai = document.getElementById("chonTheLoai").value;
  const cacTheSach = document.querySelectorAll(".the-sach");

  for (const the of cacTheSach) {
    const tenSach = the.querySelector(".book-title").textContent;
    const tacGia = the.querySelector(".book-author").textContent;

    const khopTuKhoa = boDauTiengViet(tenSach + " " + tacGia).includes(tuKhoa);
    const khopTheLoai = theLoai === "" || the.dataset.theloai === theLoai;

    the.hidden = !(khopTuKhoa && khopTheLoai);
  }
}

function timKiemSach() {
  locDanhSachSach();
}

function locTheLoai() {
  locDanhSachSach();
}

// Kiểm tra form thêm giáo trình
function kiemTraThemSach() {
  const maSachEl = document.getElementById("maSach");
  const maSach = maSachEl.value.trim().toUpperCase();
  const tenSach = document.getElementById("tenSach").value.trim();
  const tacGia = document.getElementById("tacGia").value.trim();
  const soLuong = document.getElementById("soLuong").value;

  if (tenSach === "" || tacGia === "") {
    alert("Vui lòng nhập tên giáo trình và tác giả / nhà xuất bản!");
    return false;
  }

  // Kiểm tra trùng mã sách
  const cacMaSach = document.querySelectorAll(".the-sach .book-meta strong");
  for (const ma of cacMaSach) {
    if (ma.textContent.trim().toUpperCase() === maSach) {
      alert("Mã sách " + maSach + " đã tồn tại!");
      maSachEl.focus();
      return false;
    }
  }

  alert(
    "Thêm giáo trình thành công!\n" +
      "- Mã sách: " +
      maSach +
      "\n- Tên giáo trình: " +
      tenSach +
      "\n- Số lượng: " +
      soLuong,
  );

  // Đóng hộp thoại
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("modalThemSach"),
  );
  if (modal) {
    modal.hide();
  }

  return false;
}

// Xóa dữ liệu đã nhập khi đóng hộp thoại
document.addEventListener("DOMContentLoaded", function () {
  const modalThemSach = document.getElementById("modalThemSach");

  if (!modalThemSach) return;

  modalThemSach.addEventListener("hidden.bs.modal", function () {
    modalThemSach.querySelector("form").reset();
  });
});

/* ===== Trang độc giả ===== */
function doiTrangThaiThe(ma, ten) {
  const hang = document.getElementById("docgia-" + ma);
  const nhan = hang.querySelector(".trang-thai-the .badge-custom");
  const nut = hang.querySelector(".nut-khoa-the");

  const dangKhoa = nhan.classList.contains("badge-danger");
  const hanhDong = dangKhoa ? "mở khóa" : "khóa";

  if (!confirm("Bạn có chắc muốn " + hanhDong + " thẻ của " + ten + "?")) {
    return;
  }

  if (dangKhoa) {
    nhan.classList.replace("badge-danger", "badge-success");
    nhan.textContent = "Hoạt động";
    nut.classList.replace("btn-custom-primary", "btn-custom-warning");
    nut.textContent = "Khóa thẻ";
    nut.title = "Khóa thẻ độc giả này";
  } else {
    nhan.classList.replace("badge-success", "badge-danger");
    nhan.textContent = "Đã khóa";
    nut.classList.replace("btn-custom-warning", "btn-custom-primary");
    nut.textContent = "Mở khóa";
    nut.title = "Mở khóa thẻ độc giả này";
  }
}

function kiemTraDangKyDocGia() {
  // Bước 1: lấy giá trị, kể cả đối tượng
  let doiTuong = document.getElementById("doiTuong").value;
  let maDocGia = document.getElementById("maDocGia").value.trim().toUpperCase();
  let tenDocGia = document.getElementById("tenDocGia").value.trim();
  let lopKhoa = document.getElementById("lopKhoa").value.trim();
  let email = document.getElementById("emailDocGia").value.trim();
  let sdt = document.getElementById("sdtDocGia").value.trim();

  // Bước 2: chọn nhãn + quy tắc theo đối tượng
  let nhanMa, nhanLop, regexMa, loiMa, regexLop, loiLop, regexEmail, loiEmail;

  if (doiTuong === "Giảng viên") {
    nhanMa = "Mã giảng viên";
    nhanLop = "Bộ môn";
    regexMa = /^GV[0-9]{3}$/;
    loiMa = "Mã giảng viên phải gồm GV + 3 chữ số (VD: GV001)";
    regexLop = /^[\p{L}0-9\s.-]{2,50}$/u;
    loiLop = "Bộ môn chỉ gồm chữ, số, khoảng trắng (VD: Công nghệ thông tin)";
    regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    loiEmail = "Email không đúng định dạng (VD: ten@utc.edu.vn)";
  } else if (doiTuong === "Học viên") {
    nhanMa = "Số CCCD";
    nhanLop = "Lớp / Bộ môn";
    regexMa = /^[0-9]{12}$/;
    loiMa = "Số CCCD phải gồm đúng 12 chữ số (VD: 001203012345)";
    regexLop = /^[\p{L}0-9\s.-]{2,50}$/u;
    loiLop = "Lớp chỉ gồm chữ, số, khoảng trắng";
    regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    loiEmail = "Email không đúng định dạng";
  } else {
    nhanMa = "Mã sinh viên";
    nhanLop = "Lớp";
    regexMa = /^[0-9]{9}$/;
    loiMa = "Mã sinh viên phải gồm đúng 9 chữ số (VD: 251230899)";
    regexLop = /^K[0-9]{2}-[A-Z]+[0-9]*$/i;
    loiLop = "Lớp phải đúng dạng K66-CNTT3";
    regexEmail = /^[a-z0-9._-]+@lms\.utc\.edu\.vn$/i;
    loiEmail = "Email phải có đuôi @lms.utc.edu.vn";
  }

  // Bước 3: gom lỗi
  let loi = "";

  if (!regexMa.test(maDocGia)) {
    loi += "- " + loiMa + "\n";
  }
  if (!/^[\p{L}\s]{2,50}$/u.test(tenDocGia)) {
    loi += "- Họ tên chỉ gồm chữ cái và khoảng trắng (VD: Hoàng Minh Tuấn)\n";
  }
  if (!regexLop.test(lopKhoa)) {
    loi += "- " + loiLop + "\n";
  }
  if (!regexEmail.test(email)) {
    loi += "- " + loiEmail + "\n";
  }
  if (!/^(03|05|07|08|09)[0-9]{8}$/.test(sdt)) {
    loi += "- Số điện thoại phải gồm 10 số, bắt đầu bằng 03/05/07/08/09\n";
  }

  // Bước 4: có lỗi thì báo hết một lần
  if (loi !== "") {
    alert("Thông tin chưa hợp lệ:\n" + loi);
    return false;
  }

  // Bước 5: in kết quả, dùng nhãn theo đối tượng
  alert(
    "Thêm độc giả thành công!\n" +
      "- Đối tượng: " + doiTuong + "\n" +
      "- " + nhanMa + ": " + maDocGia + "\n" +
      "- Họ tên: " + tenDocGia + "\n" +
      "- " + nhanLop + ": " + lopKhoa + "\n" +
      "- Email: " + email + "\n" +
      "- Số điện thoại: " + sdt,
  );

  return false;
}