document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("Register-form");
  const loginBtn = document.getElementById("Login");

  // Validasi Form Registrasi
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      const email = registerForm.Email.value.trim();
      const password = registerForm.Password.value;
      const confirmPassword = registerForm.ConfirmPassword.value;
      const username = registerForm.UserName.value.trim(); // Ambil username

      // Email harus menggunakan @gmail.com
      if (!email.endsWith("@gmail.com")) {
        alert("Email harus menggunakan domain @gmail.com");
        e.preventDefault();
        return;
      }

      // Password harus ada huruf kapital dan angka
      const hasCapital = /[A-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);

      if (!hasCapital || !hasNumber) {
        alert(
          "Password harus mengandung minimal satu huruf kapital dan satu angka."
        );
        e.preventDefault();
        return;
      }

      // Konfirmasi password
      if (password !== confirmPassword) {
        alert("Konfirmasi password tidak cocok.");
        e.preventDefault();
        return;
      }

      // Menyimpan data ke localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      // ✅ Semua validasi sukses — redirect ke login
      e.preventDefault(); // Cegah form reload default
      alert("Registrasi berhasil! Mengarahkan ke halaman login...");
      window.location.href = "Login.html"; // Ganti dengan path ke halaman login kamu
    });
  }

  // Validasi Form Login
  if (loginBtn) {
    loginBtn.addEventListener("click", function (e) {
      const usernameInput = document
        .getElementById("login-username")
        .value.trim();
      const passwordInput = document.getElementById("login-password").value;

      // Ambil data username dan password yang sudah disimpan di localStorage
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");

      // Periksa kecocokan username dan password
      if (
        usernameInput === storedUsername &&
        passwordInput === storedPassword
      ) {
        alert("Login berhasil!");
        window.location.href = "home page (after).html"; // Pindah ke halaman setelah login
      } else {
        alert("Username atau password salah!");
        e.preventDefault(); // Cegah form untuk submit atau refresh
      }
    });
  }
});
