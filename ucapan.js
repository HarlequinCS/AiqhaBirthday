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

Selamat Hari Ulang Tahun Zulaikha Binti Mohammed Omar 🎂🌸✨`;


  const msgContainer = document.getElementById("message");
  let i = 0;

  function typeWriter() {
    if (i < message.length) {
      msgContainer.textContent += message.charAt(i);
      i++;
      setTimeout(typeWriter, 50); // kelajuan typing
    } else {
      msgContainer.style.borderRight = "none"; // remove cursor lepas siap
      // After typing finishes, fade in signature
      const s = document.getElementById('signature');
      if (s) { s.style.opacity = '0'; s.style.transition = 'opacity 1.2s ease'; requestAnimationFrame(() => { s.style.opacity = '1'; }); }
    }
  }

  // Start typing bila page load
  typeWriter();

  // Gentle hearts spawn
  function spawnHeart() {
    const container = document.querySelector('.hearts');
    if (!container) return;
    const heart = document.createElement('div');
    heart.className = 'heart';
    const size = Math.random() * 10 + 10; // 10 - 20px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = '-20px';
    heart.style.animationDuration = `${Math.random() * 4 + 6}s`;
    heart.style.opacity = `${0.5 + Math.random() * 0.5}`;
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 12000);
  }
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) setInterval(spawnHeart, 700);
});
