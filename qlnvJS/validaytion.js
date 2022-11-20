function VaLiDaTion() {
    this.kyTu = function (value, spthongbao, mess, min, max) {
        if (min <= value.trim().length && value.trim().length <= max) {
            getEle(spthongbao).innerHTML = "";
            getEle(spthongbao).style.display = "none";
            return true;
        } else {
            getEle(spthongbao).innerHTML = mess;
            getEle(spthongbao).style.display = "block";
            return false;
        };
    };

    this.trungNV = function (value, spthongbao, mess, dsnv) {
        var check = false;
        for (var i = 0; i < dsnv.length; i++) {
            var nv = dsnv[i];
            if (nv.taiKhoan === value) {
                check = true;
                break;
            };
        };

        if (check) {
            getEle(spthongbao).innerHTML = mess;
            getEle(spthongbao).style.display = "block";
            return false;
        } else {
            getEle(spthongbao).innerHTML = "";
            getEle(spthongbao).style.display = "none";
            return true;
        };
    };

    this.checkName = function (value, spthongbao, mess) {
        var check = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(check)) {
            getEle(spthongbao).innerHTML = "";
            getEle(spthongbao).style.display = "none";
            return true;
        } else {
            getEle(spthongbao).innerHTML = mess;
            getEle(spthongbao).style.display = "block";
            return false;
        };
    };

    this.checkSpace = function (value, spthongbao, mess) {
        if (value === "") {
            getEle(spthongbao).innerHTML = mess;
            getEle(spthongbao).style.display = "block";
            return false;
        } else {

            getEle(spthongbao).innerHTML = "";
            getEle(spthongbao).style.display = "none";
            return true;
        };
    };

    this.checkEmail = function (value, spthongbao, mess) {
        var check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(check)) {
            getEle(spthongbao).innerHTML = "";
            getEle(spthongbao).style.display = "none";
            return true;
        } else {
            getEle(spthongbao).innerHTML = mess;
            getEle(spthongbao).style.display = "block";
            return false;
        };
    };

    this.checkPassword = function (value, spthongbao, mess) {
        var check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if (value.match(check)) {
            getEle(spthongbao).innerHTML = "";
            getEle(spthongbao).style.display = "none";
            return true;
        } else {
            getEle(spthongbao).innerHTML = mess;
            getEle(spthongbao).style.display = "block";
            return false;
        };
    };

    this.checkLuong = function (value, spthongbao, mess, min, max) {
        if (value >= min && value <= max) {
            return true;
        } else {
            getEle(spthongbao).innerHTML = mess;
            getEle(spthongbao).style.display = "block";
            return false;
        };
    };

    this.checkNV = function (idSelect, spthongbao, mess) {
        if (getEle(idSelect).selectedIndex !== 0) {
            getEle(spthongbao).innerHTML = "";
            getEle(spthongbao).style.display = "none";
            return true;
        } else {

            getEle(spthongbao).innerHTML = mess;
            getEle(spthongbao).style.display = "block";
            return false;
        };
    };

    this.checkTimeWork=function(value, spthongbao, mess, min, max){
        if (value >= min && value <= max) {
            return true;
        } else {
            getEle(spthongbao).innerHTML = mess;
            getEle(spthongbao).style.display = "block";
            return false;
        };
    };
};