# Belajar Cypress 🧪

Project ini dibuat untuk latihan automation testing menggunakan Cypress dengan pendekatan POM (Page Object Model), penggunaan assertion, serta reusable functions.

🎯 Tujuan utamanya adalah memahami alur testing web dari login, sortir produk, checkout, hingga logout dengan skenario yang beragam.

# Fitur yang Diuji (Test Cases)
1. Login (4 skenario)
- ✅ Login sukses (username & password valid)

- ❌ Gagal login - username salah

- ❌ Gagal login - password salah

- ❌ Gagal login - username & password salah

2.  Sortir Produk (3 skenario)
- ✅ Sortir dari nama Z → A

- ✅ Sortir harga dari rendah → tinggi

- ✅ Sortir harga dari tinggi → rendah

3.  Checkout (4 skenario)
- ✅ Checkout dengan 2 produk

- ✅ Checkout dengan 3 produk

- ❌ Checkout tanpa memilih produk

- ❌ Cancel saat proses checkout

4.  Logout (dari 4 halaman berbeda)
- ✅ Logout dari halaman utama (homepage)

- ✅ Logout dari halaman shopping cart

- ✅ Logout dari halaman checkout

- ✅ Logout dari halaman pembayaran (payment)

# 🛠️ Tools & Library
- Cypress
cypress-xpath plugin (untuk selector alternatif jika diperlukan)


# 🚀 Cara Menjalankan
- Clone repo ini
- Jalankan npm install
- Buka Cypress dengan npx cypress open
- Pilih browser (Chrome disarankan)
- Jalankan test case via GUI

# Referensi
Kalo ada yang penasaran sama dokumentasinya, boleh banget yaaah liat di postingan linkedin ku, ini aku lampirin linknya yah dan boleh banget jugaaa kepoin dokumentasi project lainnyaaa juga hihi

Dokumentasi Project test web Sauce Demo: https://www.linkedin.com/posts/irma-suryani-3b07841ba_cypress-automationtesting-testingupdate-activity-7349327282450153473-TOPT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMEGTQBFSv0AdY1vOZRPgVyJI6HXfLr5pM



# 📝 Catatan
Project ini masih dalam proses belajar dan pengembangan.
Jika kamu punya masukan atau saran untuk perbaikan, aku sangat terbuka untuk itu! 💛
