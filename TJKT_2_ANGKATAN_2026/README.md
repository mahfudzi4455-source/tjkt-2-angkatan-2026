# TJKT 2 ANGKATAN 2026 — Class Hub

Website front-end untuk galeri kelas TJKT 2 ANGKATAN 2026, SMK NEGERI 1 BIAU. Dibuat menggunakan HTML, CSS, dan JavaScript — **tanpa Python dan tanpa instalasi package**.

## Cara membuka

1. Ekstrak ZIP ini ke folder di komputer.
2. Buka VS Code.
3. Pilih **File → Open Folder...**, lalu pilih folder `X_TJKT_2_WEB_BARU`.
4. Klik dua kali `index.html`.
5. Untuk preview yang lebih nyaman, gunakan ekstensi **Live Server** di VS Code, lalu klik kanan `index.html` → **Open with Live Server**.

Bisa juga membuka `index.html` langsung lewat File Explorer.

## Isi folder

- `index.html` — struktur halaman dan navigasi.
- `style.css` — tampilan ungu gelap, sidebar, kartu, layout responsif.
- `app.js` — navigasi antarhalaman, filter galeri, pencarian, tanggal, dan interaksi demo.

## Halaman yang tersedia

- Dashboard
- Galeri foto/video (saat ini data contoh)
- Siswa (profil contoh)
- Struktur organisasi
- Tentang kelas
- Sosial media
- Admin Panel (tampilan pratinjau)

## Penting sebelum dipakai oleh siswa sungguhan

Versi ini adalah **front-end demo**. Login, persetujuan pendaftaran, upload media, dan hak akses belum aktif. Jangan memasukkan password atau mengandalkan Admin Panel demo untuk keamanan.

Tahap lanjutan yang direncanakan:
1. Firebase Authentication untuk login.
2. Database dan aturan keamanan untuk status persetujuan siswa dan peran admin.
3. Supabase Storage untuk foto/video, dengan kebijakan yang memastikan siswa hanya dapat menghapus unggahan miliknya sendiri dan admin memiliki hak moderasi.
4. Hosting statis untuk membuat website bisa diakses online.

Kunci rahasia atau service-role key tidak boleh diletakkan di JavaScript browser. Aturan akses wajib diatur dan diuji di backend/provider sebelum membuka akses kepada siswa.
