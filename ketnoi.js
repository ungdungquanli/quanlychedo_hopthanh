// ==========================================
// CẤU HÌNH GIAO DIỆN & KẾT NỐI API
// ==========================================
const HT_DUONG_DAN_API = "https://script.google.com/macros/s/AKfycbzOVyDWdKsn0mG0ba38cpimEaQjkLNG-XlK_pOZ_pvW5gmw1-O9IlErQrJVvSn2bZLi/exec";

// Cấu hình định danh nhà trường
const HT_LOGO = "https://i.ibb.co/XkjLVJFt/logo-TH-THCS-v3.png";
const HT_TEN_TRUONG = "Trường TH&THCS Hợp Thành";
const HT_TIEU_DE_TRANG = "Quản lý Lương & Thâm niên - Trường TH&THCS Hợp Thành";

// Cấu hình API Google Login
const HT_CLIENT_ID = "407480994586-m6fpq6sfcc90qqj9k08rsmi1lge6br94.apps.googleusercontent.com";


// KHẮC PHỤC LỖI TREO MÀN HÌNH: Kế thừa biến google (nếu có) thay vì khai báo mới
window.google = window.google || {};
window.google.script = window.google.script || {};

window.google.script.run = {
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
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        tenHam: tenGoiHam,
        thamSo: cacThamSo,
        taiKhoan: taiKhoanSuDung
      })
    };
    
    const thanhCong = this._xuLyThanhCong;
    const thatBai = this._xuLyThatBai;
    
    // Xóa bộ nhớ đệm để chuẩn bị cho lượt gọi API tiếp theo
    this._xuLyThanhCong = null;
    this._xuLyThatBai = null;
    
    fetch(HT_DUONG_DAN_API, thamSoTruyen)
      .then(ph => ph.json())
      .then(kq => {
        if (kq.error && thatBai) {
          thatBai(new Error(kq.error));
        } else if (thanhCong) {
          thanhCong(kq.data);
        }
      })
      .catch(loi => {
        if (thatBai) thatBai(loi);
      });
  }
};
