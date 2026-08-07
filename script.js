const button = document.getElementById("startBtn");

// Giriş butonu
button.addEventListener("click", function () {
    document.getElementById("bgMusic").play();

    document.getElementById("hero").style.display = "none";
    document.querySelector(".gallery").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// =======================
// SAYAÇ
// =======================

const startDate = new Date("2026-06-02T00:00:00");

function updateCounter() {

    const now = new Date();

    let diff = now - startDate;

    if (diff < 0) {
        document.getElementById("loveCounter").innerHTML =
            "Sonsuz güzel günler için geri sayım ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("loveCounter").innerHTML =
        `${days} Gün ❤️ ${hours} Saat ❤️ ${minutes} Dakika ❤️ ${seconds} Saniye`;
}

updateCounter();
setInterval(updateCounter, 1000);


// =======================
// FOTOĞRAF BÜYÜTME
// =======================

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

closeLightbox.addEventListener("click", function () {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", function (e) {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});


// =======================
// UÇUŞAN KALPLER
// =======================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.className = "floating-heart";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

setInterval(createHeart, 400);


// =======================
// DAKTİLO EFEKTİ
// =======================

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

        if (message.charAt(i) === "\n") {

            element.innerHTML += "<br><br>";

        } else {

            element.innerHTML += message.charAt(i);

        }

        i++;

        setTimeout(typeLetter, 40);

    }

}

typeLetter();const openLetter = document.getElementById("openLetter");
const letterBox = document.querySelector(".letter-box");

openLetter.addEventListener("click", function(){

    letterBox.classList.add("showLetter");

    openLetter.style.display = "none";

});const stars = document.getElementById("stars");

for(let i = 0; i < 120; i++){

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random()*100 + "%";

    star.style.top = Math.random()*100 + "%";

    star.style.animationDelay = Math.random()*3 + "s";

    stars.appendChild(star);

}