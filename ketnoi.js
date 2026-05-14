/**
 * CẤU HÌNH GIAO DIỆN & KẾT NỐI HỆ THỐNG WEB APP
 * Hệ thống: Quản lý Lương & Thâm niên (CD)
 * Tác giả: Hoàng Ngọc Lâm
 */

// ĐỊA CHỈ API WEB APP (ĐUÔI /EXEC)
const HT_DUONG_DAN_API = "https://script.google.com/macros/s/AKfycbzOVyDWdKsn0mG0ba38cpimEaQjkLNG-XlK_pOZ_pvW5gmw1-O9IlErQrJVvSn2bZLi/exec"; 

// THÔNG SỐ ĐỊNH DANH HỆ THỐNG
var CD_LINK_LOGO = "https://i.ibb.co/XkjLVJFt/logo-TH-THCS-v3.png";
var CD_TEN_TRUONG = "Trường TH&THCS Hợp Thành";
var CD_TEN_TRUONG_UP = "TRƯỜNG TH&THCS HỢP THÀNH";

var CD_TEN_PM = "Quản lý Lương & Thâm niên";
var CD_TEN_PM_UP = "QUẢN LÝ LƯƠNG & THÂM NIÊN";
var CD_PHIEN_BAN = "V2.3.2026";
var CD_TAC_GIA = "Hoàng Ngọc Lâm";
var CD_TAC_GIA_UP = "HOÀNG NGỌC LÂM";

var CD_GOOGLE_CLIENT_ID = "407480994586-m6fpq6sfcc90qqj9k08rsmi1lge6br94.apps.googleusercontent.com";
var CD_MO_TA = "Hệ thống quản lý dữ liệu chế độ lương và thâm niên nội bộ - " + CD_TEN_TRUONG;

/* ========================================================================= */
/* KHỞI TẠO CẤU TRÚC HEADER TỰ ĐỘNG                                          */
/* ========================================================================= */
(function() {
    var metaDesc = document.createElement('meta');
    metaDesc.name = "description";
    metaDesc.content = CD_MO_TA;
    document.head.appendChild(metaDesc);
    
    document.title = CD_TEN_PM + " - " + CD_TEN_TRUONG;
    
    var linkIcon = document.createElement('link');
    linkIcon.rel = 'icon';
    linkIcon.id = 'page_favicon';
    linkIcon.href = CD_LINK_LOGO;
    document.head.appendChild(linkIcon);
})();
