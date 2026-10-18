const navItems = [...document.querySelectorAll('.nav-item[data-page]')];
const pages = [...document.querySelectorAll('.page')];
const breadcrumb = document.getElementById('breadcrumbCurrent');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('mobileOverlay');
const toast = document.getElementById('toast');
let toastTimer;

const pageNames = {
  dashboard: 'Dashboard', gallery: 'Galeri', students: 'Siswa',
  organization: 'Organisasi', about: 'Tentang Kelas', social: 'Sosial Media', admin: 'Admin Panel'
};

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

function navigate(page) {
  if (!pageNames[page]) return;
  pages.forEach(section => section.classList.toggle('active', section.id === `page-${page}`));
  navItems.forEach(item => item.classList.toggle('active', item.dataset.page === page));
  breadcrumb.textContent = pageNames[page];
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.innerWidth <= 760) document.body.style.overflow = '';
}

navItems.forEach(item => item.addEventListener('click', () => navigate(item.dataset.page)));
document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => navigate(button.dataset.go)));

document.getElementById('openSidebar').addEventListener('click', () => {
  sidebar.classList.add('open'); overlay.classList.add('show'); document.body.style.overflow = 'hidden';
});
function closeSidebar() {
  sidebar.classList.remove('open'); overlay.classList.remove('show'); document.body.style.overflow = '';
}
document.getElementById('closeSidebar').addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

const date = new Date();
document.getElementById('todayDate').textContent = new Intl.DateTimeFormat('id-ID', { weekday:'short', day:'numeric', month:'short', year:'numeric' }).format(date);

// Galeri: filter dan pencarian hanya untuk kartu demo. Upload nyata diaktifkan setelah storage dikonfigurasi.
let currentFilter = 'all';
const gallerySearch = document.getElementById('gallerySearch');
const mediaCards = [...document.querySelectorAll('.media-card')];
const emptyState = document.getElementById('galleryEmpty');

function filterGallery() {
  const query = (gallerySearch.value || '').toLowerCase().trim();
  let shown = 0;
  mediaCards.forEach(card => {
    const type = card.dataset.type;
    const title = card.querySelector('.media-info strong').textContent.toLowerCase();
    const matches = (currentFilter === 'all' || currentFilter === type) && title.includes(query);
    card.hidden = !matches;
    if (matches) shown++;
  });
  emptyState.hidden = shown !== 0;
}
document.querySelectorAll('.filter-tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.filter-tab').forEach(item => item.classList.toggle('active', item === tab));
  currentFilter = tab.dataset.filter;
  filterGallery();
}));
gallerySearch.addEventListener('input', filterGallery);

document.getElementById('uploadButton').addEventListener('click', () => {
  showToast('Upload online akan diaktifkan setelah Supabase Storage dikonfigurasi.');
});

const studentGrid = document.getElementById('studentGrid');
const colors = ['A','N','R','D','F','S','K','M','T','Z','B','I'];
for (let i = 1; i <= 12; i++) {
  const card = document.createElement('div');
  card.className = 'student-card';
  card.innerHTML = `<div class="student-avatar">${String(i).padStart(2,'0')}</div><strong>Siswa ${String(i).padStart(2,'0')}</strong><small>Anggota TJKT 2 ANGKATAN 2026</small><span class="student-role">Profil contoh</span>`;
  studentGrid.appendChild(card);
}

document.querySelectorAll('.media-card').forEach(card => card.addEventListener('click', () => {
  showToast('Ini kartu contoh. Media asli akan tampil setelah galeri online diaktifkan.');
}));

// Jangan simpan file unggahan ke storage lokal secara otomatis; proses upload membutuhkan backend dan aturan akses yang aman.
document.getElementById('mediaInput').addEventListener('change', event => {
  if (event.target.files.length) showToast('File dipilih. Upload online belum aktif di mode pratinjau.');
  event.target.value = '';
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeSidebar();
});
