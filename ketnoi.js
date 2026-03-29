// Thay đổi bằng link Deploy App Script mới nhất của thầy sau khi cập nhật nhé
const HT_DUONG_DAN_API = "https://script.google.com/macros/s/AKfycbzOVyDWdKsn0mG0ba38cpimEaQjkLNG-XlK_pOZ_pvW5gmw1-O9IlErQrJVvSn2bZLi/exec";

const google = {
  script: {
    run: {
      _xuLyThanhCong: null,
      _xuLyThatBai: null,
      withSuccessHandler: function(hamXuLy) {
        this._xuLyThanhCong = hamXuLy;
        return this;
      },
      withFailureHandler: function(hamXuLy) {
        this._xuLyThatBai = hamXuLy;
        return this;
      },
      _goiMayChu: function(tenGoiHam, cacThamSo) {
        const taiKhoanSuDung = sessionStorage.getItem("CD_TAI_KHOAN") || "";
        const thamSoTruyen = {
          method: 'POST',
          body: JSON.stringify({
            tenHam: tenGoiHam,
            thamSo: cacThamSo,
            taiKhoan: taiKhoanSuDung
          })
        };
        
        fetch(HT_DUONG_DAN_API, thamSoTruyen)
          .then(ph => ph.json())
          .then(kq => {
            if (kq.error && this._xuLyThatBai) {
              this._xuLyThatBai(new Error(kq.error));
            } else if (this._xuLyThanhCong) {
              this._xuLyThanhCong(kq.data);
            }
          })
          .catch(loi => {
            if (this._xuLyThatBai) this._xuLyThatBai(loi);
          });
      },
      // Ánh xạ tương ứng với backend
      CD_LayThuMucCon: function() { this._goiMayChu('CD_LayThuMucCon', []); },
      CD_TaiNhieuTep: function(dl, id, link, chedo) { this._goiMayChu('CD_TaiNhieuTep', [dl, id, link, chedo]); },
      CD_TaiThuMuc: function(id, ten, dl, link, chedo) { this._goiMayChu('CD_TaiThuMuc', [id, ten, dl, link, chedo]); },
      CD_XoaMinhChung: function(link) { this._goiMayChu('CD_XoaMinhChung', [link]); },
      CD_CapNhatHangLoat: function(ds) { this._goiMayChu('CD_CapNhatHangLoat', [ds]); },
      CD_CapNhatMotDong: function(loai, viTri, dl) { this._goiMayChu('CD_CapNhatMotDong', [loai, viTri, dl]); },
      CD_TraCuuLuong: function(boLoc) { this._goiMayChu('CD_TraCuuLuong', [boLoc]); },
      CD_TraCuuThamNien: function(boLoc) { this._goiMayChu('CD_TraCuuThamNien', [boLoc]); },
      CD_LayQuyenNguoiDung: function(tk) { this._goiMayChu('CD_LayQuyenNguoiDung', [tk]); },
      CD_KiemTraQuyenDrive: function() { this._goiMayChu('CD_KiemTraQuyenDrive', []); }
    }
  }
};