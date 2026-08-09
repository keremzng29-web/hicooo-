// Fotoğraf başına Spotify şarkısı
const photoSongs = {
  1: '40x5K8xyIWVmSeUrYjj0os',
  2: '2mrSLrErsXbkcoIzGrD82E',
  3: '4Sng3wnol2Gb2yXgFdr9lj',
  4: '35kVwVsU5DoyAcxLRZIKWB',
  5: '5m8XiXEsK0dTd0VB1cYT1Z',
  6: '5vJTUmbKFvFMcirWag0XJD',
  7: '2Y4pWMzFMDaAJ8hXB4dw9w',
  8: '45LpIgOnh3OryDAuYXqTkp',
  9: '6lcpbfJjtJqQa5mICfLnw9',
  10: '0IECKI1BORaqZxdZefcp2V',
  11: '1wwM4MvZy8pTRn6tJdSiNL',
  12: '1QgmzvY34jV3O2PIP4yYAA',
  13: '3H2RwnEAFjyv8eYOwOtXsr'
};

(function () {
  const bgMusic = document.getElementById('bgMusic');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const closeLightbox = document.getElementById('closeLightbox');
  const images = document.querySelectorAll('.gallery-grid img');
  if (!lightbox || !lightboxImage || !closeLightbox) return;

  // Fotoğraf üstte, Spotify şarkısı hemen altında görünsün.
  const style = document.createElement('style');
  style.textContent = `
    #lightbox { flex-direction: column !important; gap: 18px; padding: 70px 20px 30px; overflow-y: auto; }
    #lightbox img { display:block; width:auto; max-width:min(88vw,900px); max-height:65vh; object-fit:contain; border-radius:20px; }
    .photo-spotify-player { display:block; width:min(88vw,520px); height:152px; border:0; border-radius:14px; box-shadow:0 0 30px rgba(255,79,139,.25); flex:none; }
    @media(max-width:600px){
      #lightbox { gap:12px; padding:65px 10px 20px; }
      #lightbox img { max-width:94vw; max-height:58vh; }
      .photo-spotify-player { width:94vw; height:152px; }
    }
  `;
  document.head.appendChild(style);

  let spotifyFrame = null;

  images.forEach((image, index) => {
    image.addEventListener('click', () => {
      const trackId = photoSongs[index + 1];
      if (!trackId) return;

      // Ana site müziğini durdur.
      if (bgMusic) bgMusic.pause();

      // Önceki oynatıcıyı temizle.
      if (spotifyFrame) spotifyFrame.remove();

      // Fotoğraf görünür kalacak.
      lightboxImage.style.display = 'block';

      // Şarkı fotoğrafın hemen altında açılacak.
      spotifyFrame = document.createElement('iframe');
      spotifyFrame.className = 'photo-spotify-player';
      spotifyFrame.src = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;
      spotifyFrame.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
      spotifyFrame.setAttribute('loading', 'eager');
      spotifyFrame.setAttribute('frameborder', '0');
      spotifyFrame.setAttribute('allowfullscreen', '');
      lightbox.appendChild(spotifyFrame);
    });
  });

  function closePhotoMusic() {
    if (spotifyFrame) {
      spotifyFrame.remove();
      spotifyFrame = null;
    }
    if (bgMusic) bgMusic.play().catch(() => {});
  }

  closeLightbox.addEventListener('click', closePhotoMusic);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closePhotoMusic();
  });
})();
