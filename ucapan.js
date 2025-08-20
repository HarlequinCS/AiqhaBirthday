document.addEventListener("DOMContentLoaded", () => {
  const message = `Selamat ulang tahun yang ke-20 buat
Zulaikha binti Mohd Omar 🌸✨

Dua puluh tahun, satu angka yang cukup bermakna.
Moga dengan bertambahnya usia ini,
Zulaikha sentiasa diberi kesihatan yang baik,
dipermudahkan segala urusan, dan dilimpahkan rezeki yang berkat.

Semoga langkah yang Zulaikha ambil selepas ini
membawa lebih banyak senyuman, ketenangan hati,
serta kejayaan dalam apa sahaja yang diimpikan.
Usia 20 tahun ni adalah permulaan untuk banyak cerita indah,
jadi hargailah setiap detik, dan simpanlah setiap kenangan yang hadir.

Teruslah jadi diri sendiri, sebab dengan itu
ramai yang selesa dan gembira ada Zulaikha dalam hidup mereka.

Selamat menyambut hari lahir yang ke-20,
semoga hari istimewa ini menjadi satu kenangan manis
yang akan Zulaikha bawa bersama sampai bila-bila. 🎂🌹`;

  const msgContainer = document.getElementById("message");
  let i = 0;

  function typeWriter() {
    if (i < message.length) {
      msgContainer.textContent += message.charAt(i);
      i++;
      setTimeout(typeWriter, 50); // kelajuan typing
    } else {
      msgContainer.style.borderRight = "none"; // remove cursor lepas siap
    }
  }

  // Start typing bila page load
  typeWriter();
});
