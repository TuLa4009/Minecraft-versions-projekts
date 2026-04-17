function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const path = el.getAttribute("data-i18n");

    const value = path.split(".").reduce((obj, key) => obj[key], translations[lang]);

    el.textContent = value;
  });

  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "lv";
  setLanguage(savedLang);
});
