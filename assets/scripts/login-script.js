/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** @module Login-Script*/
/**
* Membuat Variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
**/
const loginFormElement = document.querySelector('#loginForm');

/** @module Login-Script*/
/**
* Membuat Variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
**/
const inputEmailElement = document.querySelector('#inputEmail');

/** @module Login-Script*/
/**
* Membuat Variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
**/
const inputPasswordElement = document.querySelector('#inputPassword');

/** @module Login-Script*/
/**
* Membuat Variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant {string}
**/
const expectedEmail = 'admin@dicoding.com';

/** @module Login-Script*/
/**
* Membuat Variabel expectedPassword untuk menyimpan informasi password sementara.
* @constant {string}
**/
const expectedPassword = 'superpassword';

// Menambahkan aksi klik pada button
loginFormElement.addEventListener('submit', function (event) {
  event.preventDefault();

  /** @module Login-Script*/
  /**
  * Membuat Variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan.
  * @constant {string}
  **/
 const email = inputEmailElement.value;
 
 /** @module Login-Script*/
 /**
 * Membuat Variabel email untuk menyimpan nilai password yang didapatkan saat button ditekan.
 * @constant {string}
 **/
  const password = inputPasswordElement.value;

  // Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan.
  if (email == expectedEmail && password == expectedPassword) {
    // Jika sesuai maka program akan berpindah ke halaman home.
    goToHome();
  }
  else {
    // Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah.
    showPopUp();
  }
});
