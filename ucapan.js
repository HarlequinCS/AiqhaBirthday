document.addEventListener("DOMContentLoaded", () => {
const message = `   Assalamualaikum Aiqha 🌸✨

Pertama sekali, selamat hari ulang tahun yang ke-20 buat Aiqha.
Semoga pada usia ini, Aiqha sentiasa sihat,
diberikan rezeki yang melimpah ruah,
istiqamah dalam setiap kebaikan yang dilakukan,
dan dipermudahkan segala urusan oleh-Nya.

Iqbal juga berharap agar Aiqha terus cemerlang,
bukan sahaja dalam akademik,
tetapi juga dalam membina sahsiah yang berkualiti
serta terpuji sebagai seorang mahasiswa.
Apa sahaja yang Aiqha usahakan dan kejar selepas ini,
semoga ia memberi nilai tambah dalam diri Aiqha,
mendekatkan dengan kejayaan yang lebih besar,
serta membawa ketenangan dan kebahagiaan dalam hidup.

Usia 20 tahun ini adalah permulaan untuk banyak cerita indah.
Hargailah setiap langkah, simpanlah setiap kenangan,
dan teruslah jadi diri sendiri
kerana dengan itu, ramai yang akan sentiasa senang
dan gembira dengan kehadiran Aiqha.

Bunga mawar mekar berseri,
Harumnya semerbak di pagi hari.
Genaplah dua puluh usia ini,
Moga bahagia kekal abadi.

Selamat Hari Ulang Tahun Zulaikha Binti Mohd Omar 🎂🌸✨`;


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
