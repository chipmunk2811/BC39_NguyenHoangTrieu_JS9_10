function DanhSachNhanVien() {
    this.arr = [];
    this.themNV = function (nv) {
        this.arr.push(nv)
    };

    this.timIndex = function (taiKhoan) {
        var index = -1;
        for (var i = 0; i < this.arr.length; i++) {
            var sv = this.arr[i];
            if (sv.taiKhoan === taiKhoan) {
                index = i;
                break;
            };
        };
        return index;
    };

    this.xoaNV = function (taiKhoan) {
        var index = this.timIndex(taiKhoan);
        if (index !== -1) {
            this.arr.splice(index, 1);
        };
    };

    this.capNhatNV=function(taiKhoan){
        var index=this.timIndex(taiKhoan);
        if(index!=-1){
            return this.arr[index];
        };
    };

    this.capNhatDSNV=function(nv){
        var index=this.timIndex(nv.taiKhoan);
        if(index!=-1){
            this.arr[index] = nv;
        };
    };

    this.timKiemXepHang = function (keyWord) {
        var arrXepHang = [];

        for (var i = 0; i < this.arr.length; i++) {
          var nv = this.arr[i];
          var xepHangLowerCase = nv.xepHang.toLowerCase();
          var keyWordLowerCase = keyWord.toLowerCase();
          console.log(xepHangLowerCase,keyWordLowerCase)
          if (xepHangLowerCase.indexOf(keyWordLowerCase) !== -1) {
            arrXepHang.push(nv);
          };
        };
        return arrXepHang;
      };
};