const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

//Header'in icindeki nav'in icindeki a'lari secelim. Daha sonra for döngüsuyle her bir a'nin setAttribute ile class'ini italic yapalım. (bunu classList ile de yapabiliriz). Daha sonra textContent ile her bir a'nin textini ayarlayalım.

const navItems = document.querySelectorAll("header nav a");

for (let i = 0; i < navItems.length; i++) {
  /* navItems[i].setAttribute("class", "italic"); */
  navItems[i].classList.add("italic");

  navItems[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

// img icin source degerini ayarlayalim. Bunun icin ilk önce querySelector ile img'i secelim. Sonra setAttribute ile src degerini ayarlayalim.

const logoImg = document.querySelector("#logo-img");

logoImg.setAttribute("src", siteContent.images["logo-img"]);

// h1 elementini secip textContent ile icerisine metin ekleyelim.

document.querySelector("h1").textContent = siteContent.cta["h1"];

// cta-text class'inin altindaki butonu secip icerisine textContent ile metin ekleyelim.

document.querySelector(".cta-text button").textContent =
  siteContent.cta["button"];

// cta-img id'sine sahip img elementini sectikten sonra src degerini ayarlayalim.

document
  .querySelector("#cta-img")
  .setAttribute("src", siteContent.images["cta-img"]);

//querySelectorAll ile top-content class'i icerisindeki text-content classlarinin icindeki h4 elementlerini secelim. Bu classlarin icerisindeki h4 elementlerinin icerisindeki metinleri textContent ile ayarlayalim.

const mainContentTexts = document.querySelectorAll(
  ".top-content .text-content h4"
);

mainContentTexts[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];

mainContentTexts[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];

// Aynı işlemi p elementi icin yapalım:

const mainContentTexts2 = document.querySelectorAll(
  ".top-content .text-content p"
);

mainContentTexts2[0].textContent =
  siteContent["ana-içerik"]["özellikler-içerik"];

mainContentTexts2[1].textContent =
  siteContent["ana-içerik"]["hakkımızda-içerik"];

//middle-img id'sine sahip img elementini sectikten sonra src degerini ayarlayalim.

document
  .querySelector("#middle-img")
  .setAttribute("src", siteContent.images["accent-img"]);

//bottom-content class'i icerisindeki text-content classlarinin icindeki h4 elementlerini secelim. Bu classlarin icerisindeki h4 elementlerinin icerisindeki metinleri textContent ile ayarlayalim.

/* const bottomContentTexts = document.querySelectorAll(
  ".bottom-content .text-content h4"
);

bottomContentTexts[0].textContent = siteContent["ana-içerik"]["servisler-h4"];

bottomContentTexts[1].textContent = siteContent["ana-içerik"]["ürünler-h4"];

bottomContentTexts[2].textContent = siteContent["ana-içerik"]["vizyon-h4"];

//Ayni islemi p elementleri icin yapalim:

const bottomContentTexts2 = document.querySelectorAll(
  ".bottom-content .text-content p"
);

bottomContentTexts2[0].textContent =
  siteContent["ana-içerik"]["servisler-içeriği"];

bottomContentTexts2[1].textContent =
  siteContent["ana-içerik"]["ürünler-içeriği"];

bottomContentTexts2[2].textContent =
  siteContent["ana-içerik"]["vizyon-içeriği"]; */

// Ayni çözümü forEach ile yapalım.

const bottomContentTexts = document.querySelectorAll(
  ".bottom-content .text-content"
);

bottomContentTexts.forEach((element, i) => {
  let bottomContentTextsArr = ["servisler", "ürünler", "vizyon"];
  element.querySelector("h4").textContent =
    siteContent["ana-içerik"][`${bottomContentTextsArr[i]}-h4`];
  element.querySelector("p").textContent =
    siteContent["ana-içerik"][`${bottomContentTextsArr[i]}-içeriği`];
});

//Bütün ana icerigi object keys kullanarak da alabilirdik:

/* 
const contentAll = document.querySelectorAll(".text-content");

let keys = Object.keys(siteContent["ana-içerik"]);

contentAll.forEach((element, i) => {
  element.querySelector("h4").textContent = siteContent["ana-içerik"][keys[2 * i]];
  element.querySelector("p").textContent =
    siteContent["ana-içerik"][keys[2 * i + 1]];
})
*/

// contact class'i icerisindeki h4 ve p elementlerini secelim. Bu elementlerin icerisindeki metinleri textContent ile ayarlayalim.

document.querySelector(".contact h4").textContent =
  siteContent["iletisim"]["iletişim-h4"];

document.querySelectorAll(".contact p")[0].textContent =
  siteContent["iletisim"]["adres"];

document.querySelectorAll(".contact p")[1].textContent =
  siteContent["iletisim"]["telefon"];

document.querySelectorAll(".contact p")[2].textContent =
  siteContent["iletisim"]["email"];

// footer icerisindeki a elementini secelim. Bu elemente class ekleyelim.

document.querySelector("footer a").classList.add("bold");

//Bu elemente metin ekleyelim.

document.querySelector("footer a").textContent = siteContent.footer.copyright;
