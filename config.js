/*
 * Hyc! — landing config.
 * TO JEDYNE MIEJSCE na linki do sklepów. Zmieniasz je tu, a potem podbijasz
 * `config.js?v=` w index.html i pobierz.html.
 * Puste ("") działa tylko lokalnie: baton pokazuje „Wkrótce" i jest nieklikalny, a QR
 * się nie pokazuje. Deploy z pustym appStore albo playStore kończy się błędem, bo
 * wstawia oba adresy do HTML jako statyczne href.
 * QR prowadzi na stały adres pobierz.html?qr=1, skąd main.js kieruje
 * do sklepu pasującego do urządzenia.
 */
window.HYC_CONFIG = {
  // App Store (iPhone, iPad).
  appStore: "https://apps.apple.com/pl/app/hyc-mapy-dla-w%C4%99drowc%C3%B3w/id6793204849",

  // Google Play (Android).
  playStore: "https://play.google.com/store/apps/details?id=pl.hycdobudy.hyc_do_budy",
};
