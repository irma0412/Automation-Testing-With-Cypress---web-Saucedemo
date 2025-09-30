# Belajar Cypress 🧪

Project ini dibuat untuk latihan automation testing menggunakan Cypress dengan pendekatan POM (Page Object Model), penggunaan assertion, serta reusable functions.

🎯 Tujuan utamanya adalah memahami alur testing web dari login, sortir produk, checkout, hingga logout dengan skenario yang beragam.

# Fitur yang Diuji (Test Cases)

- Login (1 skenario)
✅ Login sukses (username & password valid)

- Sortir Produk (3 skenario)
✅ Sortir dari nama Z → A
✅ Sortir harga dari rendah → tinggi
✅ Sortir harga dari tinggi → rendah

- Checkout (2 skenario)
✅ Checkout dengan 2 produk
✅ Checkout dengan 3 produk

- Logout (4 skenario)
✅ Logout dari halaman utama (homepage)
✅ Logout dari halaman shopping cart
✅ Logout dari halaman checkout
✅ Logout dari halaman pembayaran (payment)

# 🛠️ Tools & Library

- Cypress

- cypress-xpath plugin (untuk selector alternatif jika diperlukan)

# 🚀 Cara Menjalankan

- Clone repo ini

- Jalankan npm install

- Buka Cypress dengan npx cypress open

- Pilih browser (Chrome disarankan)

- Jalankan test case via GUI

# ⚙️ CI/CD Pipeline

Project ini juga sudah ditambahkan konfigurasi CI/CD pipeline di folder .github/workflows menggunakan GitHub Actions.

- CI (Continuous Integration) → Setiap kali ada push/PR, automation test dijalankan otomatis untuk memastikan semua script masih berjalan sesuai harapan.

- CD (Continuous Deployment/Delivery) → Karena project ini hanya berfokus pada pengujian (tanpa aplikasi web/apk yang dibuild), tahap CD tidak bisa dijalankan penuh. Namun, script CD tetap disertakan untuk memperlihatkan alur pipeline lengkap.

# Cabang (Branch) Khusus CI/CD

Di repository ini ada branch khusus bernama action yang digunakan untuk menjalankan CI/CD pipeline.

Pada branch ini, test case negative case dihilangkan agar lebih fokus ke jalannya pipeline CI/CD. (Di branch main, negative case awalnya masih ada).

Kalau mau melihat hasil dari CI yang sudah dijalankan, bisa cek langsung di menu Actions pada repository GitHub.

# Kenapa CI/CD Penting untuk QA?

- Deteksi cepat bug/regression → QA bisa tahu lebih awal kalau ada test case yang gagal setelah perubahan kode.

- Mengurangi pekerjaan manual → Test otomatis dijalankan setiap commit, jadi QA tidak perlu run test berulang-ulang secara manual.

- Mendukung kolaborasi tim → QA, dev, dan tim lain bisa lebih percaya diri dengan kualitas produk karena pipeline berjalan konsisten.

- Lebih efisien → Proses testing jadi lebih cepat dan rapi dengan report otomatis.

# Referensi
Kalo ada yang penasaran sama dokumentasinya, boleh banget yaaah liat di postingan linkedin ku, ini aku lampirin linknya yah dan boleh banget jugaaa kepoin dokumentasi project lainnyaaa juga hihi 
- Dokumentasi Project test web Sauce Demo:
https://www.linkedin.com/posts/irma-suryani-3b07841ba_cypress-automationtesting-testingupdate-activity-7349327282450153473-TOPT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMEGTQBFSv0AdY1vOZRPgVyJI6HXfLr5pM

- Dokumentasi CI:
https://www.linkedin.com/posts/irma-suryani-3b07841ba_githubactions-ciabrcd-cypress-activity-7377530351272853505-JjXf?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMEGTQBFSv0AdY1vOZRPgVyJI6HXfLr5pM

# 📝 Catatan

Project ini masih dalam proses belajar dan pengembangan. Karena belum ada app/web yang dibuild, pipeline baru berjalan sampai tahap CI. Tapi script untuk CD tetap dimasukkan agar alurnya lengkap ✨. Jika kamu punya masukan atau saran untuk perbaikan, aku sangat terbuka untuk itu! 💛