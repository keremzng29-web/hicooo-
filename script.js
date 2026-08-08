const button = document.getElementById("startBtn");

// Giriş butonu
button.addEventListener("click", function () {
    document.getElementById("bgMusic").play();
    document.getElementById("hero").style.display = "none";
    document.querySelector(".gallery").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// SAYAÇ
const startDate = new Date("2026-06-02T00:00:00");
function updateCounter() {
    const now = new Date();
    let diff = now - startDate;
    if (diff < 0) {
        document.getElementById("loveCounter").innerHTML = "Sonsuz güzel günler için geri sayım ❤️";
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("loveCounter").innerHTML = `${days} Gün ❤️ ${hours} Saat ❤️ ${minutes} Dakika ❤️ ${seconds} Saniye`;
}
updateCounter();
setInterval(updateCounter, 1000);

// FOTOĞRAF BÜYÜTME
const images = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
images.forEach(image => {
    image.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImage.src = image.src;
    });
});
closeLightbox.addEventListener("click", function () { lightbox.style.display = "none"; });
lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) lightbox.style.display = "none";
});

// UÇUŞAN KALPLER
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = ["❤️", "💗", "💖", "💕", "💘", "💓"][Math.floor(Math.random() * 6)];
    heart.className = "floating-heart";
    heart.style.left = Math.random() * (window.innerWidth - 50) + "px";
    heart.style.fontSize = (16 + Math.random() * 30) + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 400);

// DAKTİLO EFEKTİ
const message = `Hayatıma girdiğin günden beri her şey değişti

Seninle tanıştığım gün benim en güzel başlangıcımdı

Gülüşün en sevdiğim manzara

Sesin en huzurlu melodim oldu

Bazen sadece sana bakarken bile ne kadar şanslı olduğumu düşünüyorum

Sen benim evimsin

İyi ki varsın sevgilim ❤️`;
let i = 0;
function typeLetter() {
    const element = document.getElementById("letterText");
    if (!element) return;
    if (i < message.length) {
        if (message.charAt(i) === "\n") element.innerHTML += "<br><br>";
        else element.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeLetter, 40);
    }
}
typeLetter();

const openLetter = document.getElementById("openLetter");
const letterBox = document.querySelector(".letter-box");
openLetter.addEventListener("click", function () {
    letterBox.classList.add("showLetter");
    openLetter.style.display = "none";
});

// YILDIZLAR
const stars = document.getElementById("stars");
for (let s = 0; s < 120; s++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    stars.appendChild(star);
}

// GİZLİ AŞK MESAJI
const secretBtn = document.getElementById("secretBtn");
const secretBox = document.getElementById("secretBox");
const closeSecret = document.getElementById("closeSecret");
const secretText = document.getElementById("secretText");

const secretMessage =
"Seninle tanıştığım günden beri hayatımın bazı yerleri hiç eskisi gibi olmadı\n\n" +
"Çünkü artık güzel bir şey olduğunda onu seninle paylaşmak istiyorum\n" +
"Bir şey canımı sıktığında sesini duymak bana iyi geliyor\n" +
"Güzel bir günün sonunda aklımdan geçen ilk kişi yine sen oluyorsun\n\n" +
"Belki sana her zaman anlatamıyorum ama seni düşündüğümden çok daha fazla düşünüyorum\n" +
"Seninle geçirdiğim her anı ayrı bir yerde saklıyorum\n" +
"Birlikte güldüğümüz anları birlikte kurduğumuz hayalleri ve gelecekte yaşayacağımız daha nice güzel günü düşünüyorum\n\n" +
"Ben senden sadece bugünümü değil geleceğimi de paylaşmak istiyorum Hicret\n" +
"Yanımda olmanı hayatımın güzel anlarında da zor zamanlarında da elimi bırakmamanı istiyorum\n\n" +
"İyi ki yollarımız kesişmiş\n" +
"İyi ki seni tanımışım\n" +
"İyi ki hayatımda sen varsın\n\n" +
"Ve eğer bir gün bana bu hikayenin en güzel tarafı neydi diye sorarsan\n" +
"cevabım hiç düşünmeden sen olursun ❤️";

let secretIndex = 0;

function writeSecret() {
    if (secretIndex < secretMessage.length) {
        secretText.textContent += secretMessage.charAt(secretIndex);
        secretIndex++;
        setTimeout(writeSecret, 35);
    }
}

secretBtn.addEventListener("click", function () {
    secretBox.classList.add("show");
    secretText.textContent = "";
    secretIndex = 0;
    writeSecret();

    for (let h = 0; h < 30; h++) {
        const heart = document.createElement("div");
        heart.className = "secret-heart";
        heart.innerHTML = ["❤️", "💗", "💖", "💕", "💘"][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + "%";
        heart.style.top = "100%";
        heart.style.fontSize = (18 + Math.random() * 25) + "px";
        heart.style.setProperty("--x", (Math.random() * 400 - 200) + "px");
        heart.style.setProperty("--y", -(200 + Math.random() * 500) + "px");
        heart.style.setProperty("--rotate", (Math.random() * 720 - 360) + "deg");
        secretBox.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
});

closeSecret.addEventListener("click", function () {
    secretBox.classList.remove("show");
});
