# Belajar Cypress 🧪

Project ini dibuat untuk latihan automation testing menggunakan Cypress.

## 🧾 Fitur Test:

- Login (4 skenario):

1.✅ Login sukses dengan username & password valid

2.❌ Login gagal: username salah

3.❌ Login gagal: password salah

4.❌ Login gagal: username & password salah

- 🔃 Sortir produk (3 skenario):

1.✅ Sortir produk dari Z ke A

2.✅ Sortir produk dari harga terendah ke tertinggi

3.✅ Sortir produk dari harga tertinggi ke terendah

- 🛒 Checkout (4 skenario):

1.✅ Checkout 2 produk

2.✅ Checkout 3 produk

3.❌ Checkout tanpa memilih produk

4.❌ Cancel saat proses checkout

- 🚪 Logout (4 halaman berbeda):

1.✅ Logout dari halaman utama (homepage)

2.✅ Logout dari halaman shopping cart

3.✅ Logout dari halaman checkout

4.✅ Logout dari halaman pembayaran (payment)

## 🚀 Tools yang digunakan:
- Cypress
- XPath Plugin

## 📂 Struktur Folder:
cypress/
├── e2e/
├── fixtures/
├── support/
.gitignore
cypress.config.js
package.json

> Note: Project ini dijalankan menggunakan Cypress GUI dengan browser Chrome.


