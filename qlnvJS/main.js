var dsnv = new DanhSachNhanVien();
getLocal();

var vaLiDaTion = new VaLiDaTion();

function getEle(id) {
    return document.getElementById(id);
};

function layThongTinNV(ADDorUPDATA) {
    var taiKhoan = getEle("tknv").value;
    var hoVaTen = getEle("name").value;
    var eMail = getEle("email").value;
    var matKhau = getEle("password").value;
    var ngayLam = getEle("datepicker").value;
    var luongCoBan = getEle("luongCB").value;
    var chucVu = getEle("chucvu").value;
    var gioLam = getEle("gioLam").value;

    var isValid = true;
    if (ADDorUPDATA) {
        isValid &= vaLiDaTion.kyTu(taiKhoan, "tbTKNV", "(*) Vui lòng nhập 4-6 ký tự", 4, 6)
            && vaLiDaTion.trungNV(taiKhoan, "tbTKNV", "(*) Mã Tài Khoản Bị Trùng", dsnv.arr);
    };

    isValid &= vaLiDaTion.checkSpace(hoVaTen, "tbTen", "(*) Không Để Tên Trống")
        && vaLiDaTion.checkName(hoVaTen, "tbTen", "(*) Tên Không Được Có Ký Tự Đặc Biệt");

    isValid &= vaLiDaTion.checkSpace(eMail, "tbEmail", "(*) Không Để Email Trống")
        && vaLiDaTion.checkEmail(eMail, "tbEmail", "(*) Nhập Đúng Định Dạng Mail");

    isValid &= vaLiDaTion.checkSpace(matKhau, "tbMatKhau", "(*) Không Để Mật Khẩu Trống")
        && vaLiDaTion.checkPassword(matKhau, "tbMatKhau", "(*) Mật Khẩu (Chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)");

    isValid &= vaLiDaTion.checkSpace(ngayLam, "tbNgay", "(*) Không Để Ngày Bắt Đầu Trống")

    isValid &= vaLiDaTion.checkSpace(luongCoBan, "tbLuongCB", "(*) Không Để Lương Trống")
        && vaLiDaTion.checkLuong(luongCoBan, "tbLuongCB", "(*) Lương Cơ Bản 1 000 000 - 20 000 000", 1000000, 20000000);

    isValid&=vaLiDaTion.checkNV("chucvu","tbChucVu","(*) Chọn Chức Vụ Của Bạn")

    isValid&=vaLiDaTion.checkSpace(gioLam,"tbGiolam","(*) Không Để Giờ Làm Trống")
    &&vaLiDaTion.checkTimeWork(gioLam,"tbGiolam","(*) Số Giờ Làm Trong Tháng 80 - 200 Giờ",80,200)

    if (!isValid) { return };

    var nv = new FormNhanVien(taiKhoan, hoVaTen, eMail, matKhau, ngayLam, luongCoBan, chucVu, gioLam);
    return nv;
};

getEle("btnThemNV").onclick = function () {
    var nv = layThongTinNV(true);
    console.log(nv)
    if (nv) {
        dsnv.themNV(nv);
        nv.tinhTongLuong();
        nv.tinhXepHang();
        renderTable(dsnv.arr);
        setLocal();
    };
};

function renderTable(data) {
    var result = "";
    for (var i = 0; i < data.length; i++) {
        var nv = data[i];
        result += `
        <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoVaTen}</td>
        <td>${nv.eMail}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.xepHang}</td>
        <td>
        <button data-target="#myModal" data-toggle="modal" class="btn btn-info" onclick="editNV('${nv.taiKhoan}')">Cập Nhật</button><br>
        <button class="btn btn-danger" onclick="deleteNV('${nv.taiKhoan}')">Delete</button></td>
        </tr>
        `
    };
    return getEle("tableDanhSach").innerHTML = result;
};

function setLocal() {
    var setLocalStorage = JSON.stringify(dsnv.arr);
    localStorage.setItem("DSNV", setLocalStorage);
};

function getLocal() {
    if (localStorage.getItem("DSNV")) {
        var getLocalStorage = localStorage.getItem("DSNV");
        dsnv.arr = JSON.parse(getLocalStorage);
        return renderTable(dsnv.arr);
    };
};

function deleteNV(taiKhoan) {
    dsnv.xoaNV(taiKhoan);
    renderTable(dsnv.arr);
    setLocal();
};

function editNV(taiKhoan) {
    var nv = dsnv.capNhatNV(taiKhoan);
    getEle("tknv").value = nv.taiKhoan;
    getEle("tknv").disabled = true;
    getEle("name").value = nv.hoVaTen;
    getEle("email").value = nv.eMail;
    getEle("password").value = nv.matKhau;
    getEle("datepicker").value = nv.ngayLam;
    getEle("luongCB").value = nv.luongCoBan;
    getEle("chucvu").value = nv.chucVu;
    getEle("gioLam").value = nv.gioLam;
    getEle("btnThemNV").style.display="none"
    getEle("btnCapNhat").style.display = "inline-block";
    getEle("header-title").innerHTML="Cập Nhật"
};

getEle("btnCapNhat").onclick = function () {
    var nv = layThongTinNV(false);
    dsnv.capNhatDSNV(nv);
    nv.tinhTongLuong();
    nv.tinhXepHang();
    renderTable(dsnv.arr);
    setLocal();

    clearData();
};


getEle("btnDong").onclick = function () {
    clearData();
};

function clearData(){
    getEle("tknv").disabled = false;
    getEle("tknv").value = "";
    getEle("name").value = "";
    getEle("email").value = "";
    getEle("password").value = "";
    getEle("luongCB").value = "";
    getEle("chucvu").selectedIndex=0;
    getEle("gioLam").value = "";

    getEle("tbTKNV").innerHTML = "";
    getEle("tbTen").innerHTML = "";
    getEle("tbEmail").innerHTML = "";
    getEle("tbMatKhau").innerHTML = "";
    getEle("tbLuongCB").innerHTML = "";
    getEle("tbChucVu").innerHTML="";
    getEle("tbGiolam").innerHTML = "";
    getEle("btnCapNhat").style.display = "none";

    getEle("btnThemNV").style.display="block"
    getEle("myModal").className="modal fade";
    getEle("myModal").style.display="none";
    getEle("header-title").innerHTML="Log In"
    getEle("swapbody").className=""
};


getEle("searchName").addEventListener("keyup", function () {
    var keyword = getEle("searchName").value;
    var arrXepHang = dsnv.timKiemXepHang(keyword);
    renderTable(arrXepHang);
  });