const certs = document.querySelectorAll('.cert');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 0;

function showLightbox(index) {
  currentIndex = index;
  lightboxImg.src = certs[index].src;
  lightbox.classList.remove('hidden');
}

certs.forEach((img, index) => {
  img.addEventListener('click', () => showLightbox(index));
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.classList.add('hidden');
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % certs.length;
  showLightbox(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + certs.length) % certs.length;
  showLightbox(currentIndex);
});
