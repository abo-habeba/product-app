// // import translations from "./translations.js";
let languageSelector = document.querySelector('select');
let translations = {
  en: {
    Home: "Home",
    productName: "product Name",
    productPrice: "product Price",
    productCat: "product Category",
    productDesc: "product Description",
    AddProduct: "Add Product",
    English: "English",
    Arabic: "Arabic",
    Update: "Update",
    Delete: "Delete",
    numberProducts: "number of products",
  },
  ar: {
    Home: "الصفحة الرئيسية",
    productName: "اسم المنتج",
    productPrice: "سعر المنتج",
    productCat: "القسم",
    productDesc: "وصف المنتج",
    AddProduct: "اضافة منتج",
    English: "الانجليزية",
    Arabic: "العربية",
    Update: "تحديث",
    Delete: "حذف",
    numberProducts: "عدد المنتجات",
  },
};

// // export default translations;

languageSelector.addEventListener("change", (e) => {
  setLanguage(e.target.value);
  localStorage.setItem("lang", e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  let language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

let setLanguage = (language) => {
  let elements = document.querySelectorAll("[data-tran]");
  elements.forEach((element) => {
    let translationKey = element.getAttribute("data-tran");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};
