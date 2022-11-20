function FormNhanVien(_taiKhoan, _hoVaTen, _eMail, _matKhau, _ngayLam, _luongCoBan, _chucVu, _gioLam) {
    this.taiKhoan = _taiKhoan;
    this.hoVaTen = _hoVaTen;
    this.eMail = _eMail
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan * 1;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam * 1;
    this.tongLuong = 0;
    this.xepHang = "";
    this.tinhTongLuong = function () {
        if (this.chucVu === "Sếp") {
            return this.tongLuong = this.luongCoBan * 3;
        } else if (this.chucVu === "Trưởng phòng") {
            return this.tongLuong = this.luongCoBan * 2;
        } else if (this.chucVu === "Nhân viên") {
            return this.tongLuong = this.luongCoBan * 1;
        };
    };
    this.tinhXepHang = function () {
        if (this.gioLam >= 192) {
            return this.xepHang = "Xuất Sắc";
        } else if (this.gioLam >= 176) {
            this.xepHang = "Giỏi";
        } else if (this.gioLam >= 160) {
            this.xepHang = "Khá";
        } else {
            this.xepHang = "Trung Bình";
        };
    };
}; 