# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Portofolio React JS

Website portofolio pribadi yang dibuat dengan React, Vite, Tailwind CSS, dan React Router.

## Prasyarat

- [Node.js](https://nodejs.org/) versi 18 atau lebih baru (npm ikut terpasang bersama Node.js)
- [Git](https://git-scm.com/)

Cek versi yang terpasang:

```bash
node -v
npm -v
```

## Cara Menjalankan

### 1. Clone repository

```bash
git clone https://github.com/Acelino12/portofolio_reactjs.git
cd portofolio_reactjs
```

### 2. Install dependency

```bash
npm install
```

Perintah ini membaca `package.json` dan `package-lock.json`, lalu membuat folder `node_modules`.

### 3. Jalankan mode development

```bash
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`) di browser. Perubahan pada kode akan langsung tampil tanpa perlu refresh.

### 4. Build untuk production

```bash
npm run build
```

Hasil build disimpan di folder `dist/`.

### 5. Cek hasil build secara lokal

```bash
npm run preview
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:4173`) untuk melihat versi production sebelum di-deploy.

## Daftar Perintah

| Perintah | Fungsi |
| --- | --- |
| `npm install` | Memasang semua dependency |
| `npm run dev` | Menjalankan server development |
| `npm run build` | Membuat build production ke folder `dist/` |
| `npm run preview` | Menjalankan hasil build secara lokal |
| `npm run lint` | Memeriksa kode dengan ESLint |

## Memperbarui Dependency

Untuk memeriksa dan memperbaiki celah keamanan pada package:

```bash
npm audit
npm audit fix
```

Setelah memperbarui, jalankan `npm run build` untuk memastikan proyek masih bisa di-build.

## Struktur Folder

```
src/
├── assets/       # Gambar dan ikon
├── components/
│   ├── Elements/ # Komponen kecil (Button, Card, Input, dll.)
│   ├── Fragments/# Gabungan elemen (form, kontak, dll.)
│   └── Layout/   # Layout halaman (Header, Footer, dll.)
├── pages/        # Halaman (home, login, organisasi, sertifikat, dll.)
├── index.css
└── main.jsx      # Entry point dan konfigurasi route
```

## Teknologi

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [AOS](https://michalsnik.github.io/aos/) (animasi saat scroll)