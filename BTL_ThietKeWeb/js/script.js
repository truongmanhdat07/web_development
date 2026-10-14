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