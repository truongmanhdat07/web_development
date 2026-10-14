// xu ly form gop y
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formGopY");
  const thongbao = document.getElementById("thongbao");

  if (!form || !thongbao) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    thongbao.textContent = "Gửi góp ý thành công!";
    thongbao.style.color = "green";

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
    alert("Vui lòng nhập Mã sinh viên UTC (9 chữ số) hoặc Mã giảng viên (GV001)!");
    maDocGiaEl.focus();
    return false;
  }

  let isSinhVien = /^[0-9]{9}$/.test(maDocGia);
  let isGiangVien = maDocGia === "GV001" || maDocGia.startsWith("GV");

  if (!isSinhVien && !isGiangVien) {
    alert(
      "Mã độc giả không hợp lệ!\n" +
      "- Sinh viên: 9 chữ số (Ví dụ: 251230841)\n" +
      "- Giảng viên: GV001"
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

  if (ngayMuon === "" || ngayHenTra === "") {
    alert("Vui lòng chọn đầy đủ ngày mượn và ngày hẹn trả sách!");
    return false;
  }

  let dMuon = new Date(ngayMuon);
  let dTra = new Date(ngayHenTra);

  if (dTra <= dMuon) {
    alert("Ngày hẹn trả phải sau ngày mượn ít nhất 1 ngày!");
    ngayHenTraEl.focus();
    return false;
  }

  let soNgayMuon =
    Math.round((dTra - dMuon) / (1000 * 60 * 60 * 24));

  if (soNgayMuon > 30) {
    alert("Thời gian mượn tối đa là 30 ngày!");
    return false;
  }

  alert(
    "Lập phiếu mượn thành công!\n" +
    "- Mã độc giả: " + maDocGia +
    "\n- Họ tên: " + hoTen +
    "\n- Giáo trình: " + sachMuon +
    "\n- Thời hạn mượn: " + soNgayMuon + " ngày"
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

  if (!borrowForm) return;

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
        "'?"
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

        alert(
          "Đã xác nhận trả sách thành công cho phiếu: " +
          maPhieu
        );
      }
    });
  }
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
  const ids = ["maDocGia", "tenDocGia", "lopKhoa", "emailDocGia", "sdtDocGia"];
  for (const id of ids) {
    if (document.getElementById(id).value.trim() === "") {
      alert("Vui lòng nhập đầy đủ các trường có dấu (*)");
      return false;
    }
  }
  alert("Dữ liệu hợp lệ");
  return false;
}