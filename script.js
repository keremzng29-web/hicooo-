const button = document.getElementById("startBtn");

button.addEventListener("click", function () {
    document.getElementById("bgMusic").play().catch(() => {});
    document.getElementById("hero").style.display = "none";
    document.querySelector(".gallery").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
});

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

const stars = document.getElementById("stars");
for (let s = 0; s < 120; s++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    stars.appendChild(star);
}

const starSection = document.getElementById("starLoveSection");
const shootingStars = document.getElementById("shootingStars");
const wishStars = document.getElementById("wishStars");
const wishBtn = document.getElementById("wishBtn");
const wishMessage = document.getElementById("wishMessage");
const wishReveal = document.getElementById("wishReveal");

function createShootingStar() {
    if (!shootingStars) return;
    const star = document.createElement("span");
    star.className = "shooting-star";
    star.style.left = (45 + Math.random() * 55) + "%";
    star.style.top = (2 + Math.random() * 42) + "%";
    shootingStars.appendChild(star);
    requestAnimationFrame(() => star.classList.add("go"));
    setTimeout(() => star.remove(), 1400);
}
setInterval(() => {
    if (starSection && Math.random() < 0.8) createShootingStar();
}, 1800);
if (starSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                createShootingStar();
                setTimeout(createShootingStar, 900);
            }
        });
    }, { threshold: 0.25 });
    observer.observe(starSection);
}
function createWishSpark() {
    if (!wishStars) return;
    const spark = document.createElement("span");
    spark.className = "wish-spark";
    spark.style.left = (35 + Math.random() * 30) + "%";
    spark.style.top = (35 + Math.random() * 30) + "%";
    spark.style.setProperty("--dx", (Math.random() * 300 - 150) + "px");
    spark.style.setProperty("--dy", (Math.random() * 300 - 150) + "px");
    wishStars.appendChild(spark);
    setTimeout(() => spark.remove(), 1500);
}
if (wishBtn) {
    wishBtn.addEventListener("click", function () {
        if (starSection) starSection.classList.add("wish-active");
        wishMessage.textContent = "Dileğini tuttun... Şimdi gökyüzüne bırak ✨";
        wishMessage.classList.add("wish-made");
        if (wishReveal) setTimeout(() => wishReveal.classList.add("show"), 700);
        for (let s = 0; s < 35; s++) setTimeout(createWishSpark, s * 35);
        for (let s = 0; s < 7; s++) setTimeout(createShootingStar, s * 280);
        setTimeout(() => { wishMessage.textContent = "Belki de en güzel dileğin zaten yanında... ❤️"; }, 3200);
    });
}

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
closeSecret.addEventListener("click", function () { secretBox.classList.remove("show"); });

const reasons = [
    "Gülüşün","Sesin","Bakışların","Yanımda oluşun","Beni anlayışın","Beni dinleyişin","Küçük şeyleri hatırlaman","Benimle gülmen","Bana güvenmen","Bana huzur vermen","Yanında kendim olabilmem","Sesini duyunca mutlu olmam","Gülüşünü görmek istemem","Beni olduğum gibi kabul etmen","En zor anımda yanımda olman","Mutluluğumu önemsemen","Hayallerime ortak olman","Geleceği seninle düşünmem","Seninle konuşmanın hiç sıkıcı olmaması","Birlikte susmanın bile güzel olması","Bana kendimi değerli hissettirmem","Kalbime iyi gelmen","Varlığın","Sabrın","Şefkatin","Samimiyetin","Tatlılığın","Masum gülüşün","Bana bakışın","Yanımda huzurlu hissetmen","Kötü günlerimi güzelleştirmen","İyi günlerimi daha da güzelleştirmen","Beni merak etmen","Beni özlemen","Birlikte kurduğumuz hayaller","Birlikte biriktirdiğimiz anılar","Seni düşündüğümde yüzümün gülmesi","Kalbimde sana ait bir yer olması","Çünkü sen sensin ❤️"
];
const reasonBtn = document.getElementById("reasonBtn");
const reasonText = document.getElementById("reasonText");
const reasonNumber = document.getElementById("reasonNumber");
const reasonCard = document.getElementById("reasonCard");
let reasonIndex = 0;
if (reasonBtn) {
    reasonBtn.addEventListener("click", function () {
        reasonIndex = (reasonIndex + 1) % reasons.length;
        reasonText.textContent = reasons[reasonIndex];
        reasonNumber.textContent = String(reasonIndex + 1).padStart(2, "0");
        reasonCard.classList.remove("pop");
        void reasonCard.offsetWidth;
        reasonCard.classList.add("pop");
    });
}

const secretLittleBtn = document.getElementById("secretLittleBtn");
if (secretLittleBtn) {
    secretLittleBtn.addEventListener("click", function () {
        secretLittleBtn.textContent = "🤍 Seni her gün yeniden seçiyorum";
        secretLittleBtn.style.color = "#ff91bd";
        setTimeout(() => { secretLittleBtn.textContent = "🤍 Bir sırrı daha var"; }, 3500);
    });
}

const futureLetterBtn = document.getElementById("futureLetterBtn");
const futureModal = document.getElementById("futureModal");
const closeFutureModal = document.getElementById("closeFutureModal");
if (futureLetterBtn && futureModal) {
    futureLetterBtn.addEventListener("click", function () {
        futureModal.classList.add("show");
        document.body.style.overflow = "hidden";
    });
}
if (closeFutureModal && futureModal) {
    closeFutureModal.addEventListener("click", function () {
        futureModal.classList.remove("show");
        document.body.style.overflow = "";
    });
    futureModal.addEventListener("click", function (e) {
        if (e.target === futureModal) {
            futureModal.classList.remove("show");
            document.body.style.overflow = "";
        }
    });
}

const finalStars = document.getElementById("finalStars");
if (finalStars) {
    for (let s = 0; s < 35; s++) {
        const star = document.createElement("span");
        star.style.position = "absolute";
        star.style.width = (1 + Math.random() * 3) + "px";
        star.style.height = star.style.width;
        star.style.borderRadius = "50%";
        star.style.background = "white";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.opacity = (0.25 + Math.random() * 0.7).toFixed(2);
        star.style.boxShadow = "0 0 8px white";
        star.style.animation = `twinkle ${2 + Math.random() * 4}s ${Math.random() * 3}s infinite alternate`;
        finalStars.appendChild(star);
    }
}

// ŞİİR BÖLÜMÜ — başlık ve paylaşan kişi bilgileri olmadan yalnızca şiir metinleri
const poems = [
`Ya dayan ey güzel gözlüm
Ya da yan olmazsa eğer ki
Solmuş zaten tüm umutlarım
Artık bana ne iyi gelir ki
Bir tutam senden koklat bana
Kızma lütfen son kezdir belki
Kendinden koy bir yudum da
Yarat bende sonsuz bir etki`,
`Beceriksiz biriyimdir kabul
Bir çayı demlemeyi bir takvimi takip etmeyi
Hep unuturum

Ama seni bir gün bile eksik sevmedim
Bu benim hayattaki tek dürüst ustalığım`,
`Ah bir satır fazla yazabilsem seni
Tek derdim seni anlatmak değil mi zaten
Ne olur yeni bir dil keşfetsem
Bir dil bin insana ulaşmaz mı
Binbir insana anlatsam seni
Olmaz mı

Yetiremiyorum seni yazmalara
İlhamım gözlerin değil mi zaten
Bir şiirlik sev dedim olmaz mı
Ömrümüz on satırsa sen on bir satırsın
İnadım inat dün sevdim bugün seviyorum
Yarın elbet benim olacaksın`,
`Gözlerin değince sustu bütün rüzgârlar
Kalbimde yeşerdi solmuş bütün baharlar
Sana değil sensiz geçen yıllarıma ağlarım
Çünkü cennet dediğim yer gözlerinde başlar`,
`Gözlerinin büyüsüne kapıldım
Ve kendime Sen diye bir dünya kurdum
Günler tarihler ve mevsimler
Bunların hepsi gereksiz şeyler
Benim dünyamda sensin bütün saatler
Benim dünyamda sensin bütün iklimler
Buralarda aşk senle başlar
Ve yalnızca senle biter`,
`Kendimi ararken
Seni bulmak isterim
Çarşıya diye çıkıp
Sana uğrar adımlarım

Senli cümleler kurup
Senli şarkılar söylerim
Başımı kaldırıp
Gökyüzüne bakmak isterim

Dikenli yollarda yürüyüp
Sende açar güllerim`,
`Arzu hâl eyledim mâh güzele
Ömrümün vadesi kirpiğindedir
Aşkın ateşi düşmüş gönlüme
Vallahi tek şifam gözlerindedir`,
`Bana neden sen diye sorma
Ben de soruyorum
Neden seçtim seni
Bakışın mı çaldı beni
Yoksa o mahcup sesin mi
Aklımdan çıkmıyor ki
En damarın heybeti

Onca insan içinden
Ben mi buldum seni
Yoksa sen mi beni

Aşkta tesadüf olmaz
Seni bana getiren
Ezelden yazılmış bir kaderdi`,
`Şimdi şiir bence senin yüzündür
Şimdi benim tahtım senin dizindir
Sevgilim saadet ikimizinindir
Göklerden gelen bir yadigâr gibi

Sözün şiirlerin mükemmelidir
Senden başkasını seven delidir
Yüzün çiçeklerin en güzelidir
Gözlerin bilinmez bir diyar gibi`
];
const poemBtn = document.getElementById("poemBtn");
const poemText = document.getElementById("poemText");
const poemCard = document.querySelector("#poemSection .poem-card");
const poemCount = document.getElementById("poemCount");
let poemIndex = -1;
if (poemBtn && poemText) {
    poemBtn.addEventListener("click", function () {
        poemIndex = (poemIndex + 1) % poems.length;
        poemText.textContent = poems[poemIndex];
        if (poemCount) poemCount.textContent = `${poemIndex + 1} / ${poems.length}`;
        if (poemCard) {
            poemCard.classList.remove("change");
            void poemCard.offsetWidth;
            poemCard.classList.add("change");
        }
    });
}
