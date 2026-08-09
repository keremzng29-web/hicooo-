const poems = [`Ya dayan ey güzel gözlüm
Ya da yan olmazsa eğer ki
Solmuş zaten tüm umutlarım
Artık bana ne iyi gelir ki
Bir tutam senden koklat bana
Kızma lütfen son kezdir belki
Kendinden koy bir yudum da
Yarat bende sonsuz bir etki`,`Beceriksiz biriyimdir kabul

bir çayı demlemeyi bir takvimi takip etmeyi
hep unuturum

Ama seni bir gün bile eksik sevmedim
bu benim hayattaki tek dürüst ustalığım`,`Gözlerin değince sustu bütün rüzgârlar
Kalbimde yeşerdi solmuş bütün baharlar
Sana değil sensiz geçen yıllarıma ağlarım
Çünkü cennet dediğim yer gözlerinde başlar`,`Gözlerinin büyüsüne kapıldım
Ve kendime Sen diye bir dünya kurdum
Günler tarihler ve mevsimler
Bunların hepsi gereksiz şeyler
Benim dünyamda sensin bütün saatler
Benim dünyamda sensin bütün iklimler
Buralarda aşk senle başlar
Ve yalnızca senle biter`,`Kendimi ararken
Seni bulmak isterim
Çarşıya diye çıkıp
Sana uğrar adımlarım

Senli cümleler kurup
Senli şarkılar söylerim
Başımı kaldırıp
Gökyüzüne bakmak isterim

Dikenli yollarda yürüyüp
Sende açar güllerim`,`Arzu hâl eyledim mâh güzele
Ömrümün vadesi kirpiğindedir
Aşkın ateşi düşmüş gönlüme
Vallahi tek şifam gözlerindedir`,`Bana neden sen diye sorma
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
Ezelden yazılmış bir kaderdi`,`Şimdi şiir bence senin yüzündür
Şimdi benim tahtım senin dizindir
Sevgilim saadet ikimizinindir
Göklerden gelen bir yadigâr gibi

Sözün şiirlerin mükemmelidir
Senden başkasını seven delidir
Yüzün çiçeklerin en güzelidir
Gözlerin bilinmez bir diyar gibi`,`Oysa benim
Gönül kapım
kilitli ve şifreliydi...
Demek bütün
kodlar ve şifreler
senin bakışlarında gizli...
Herkes birine yanık
Ben sana kuzum...`];
let poemIndex = -1;
const poemText = document.getElementById('poemText');
const poemBtn = document.getElementById('poemBtn');
const poemCount = document.getElementById('poemCount');
if (poemBtn && poemText) { poemBtn.addEventListener('click', () => { poemIndex = (poemIndex + 1) % poems.length; poemText.textContent = poems[poemIndex]; if (poemCount) poemCount.textContent = `${poemIndex + 1} / ${poems.length}`; }); }
