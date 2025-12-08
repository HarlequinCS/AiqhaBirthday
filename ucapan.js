document.addEventListener("DOMContentLoaded", () => {
const message = `   Assalamualaikum Zulaikha 🌸✨

Pertama sekali, selamat hari ulang tahun yang ke-20 buat Zulaikha.
Semoga pada usia ini, Zulaikha sentiasa sihat,
diberikan rezeki yang melimpah ruah,
istiqamah dalam setiap kebaikan yang dilakukan,
dan dipermudahkan segala urusan oleh-Nya.

Iqbal juga berharap agar Zulaikha terus cemerlang,
bukan sahaja dalam akademik,
tetapi juga dalam membina sahsiah yang berkualiti
serta terpuji sebagai seorang mahasiswa.
Apa sahaja yang Zulaikha usahakan dan kejar selepas ini,
semoga ia memberi nilai tambah dalam diri Zulaikha,
mendekatkan dengan kejayaan yang lebih besar,
serta membawa ketenangan dan kebahagiaan dalam hidup.

Usia 20 tahun ini adalah permulaan untuk banyak cerita indah.
Hargailah setiap langkah, simpanlah setiap kenangan,
dan teruslah jadi diri sendiri
kerana dengan itu, ramai yang akan sentiasa senang
dan gembira dengan kehadiran Zulaikha.

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
      
      // Random typing speed for more natural feel
      const baseSpeed = 40;
      const randomVariation = Math.random() * 20;
      const speed = baseSpeed + randomVariation;
      
      setTimeout(typeWriter, speed);
    } else {
      // Remove cursor when complete
      msgContainer.classList.add('complete');
      
      // After typing finishes, fade in signature with surprise
      setTimeout(() => {
        const s = document.getElementById('signature');
        if (s) { 
          s.style.opacity = '0'; 
          s.style.transition = 'opacity 1.5s ease, transform 1.5s ease'; 
          requestAnimationFrame(() => { 
            s.style.opacity = '1'; 
            s.style.transform = 'translateX(0)';
          }); 
        }
        
        // Create surprise sparkles around signature
        createSignatureSparkles();
      }, 500);
    }
  }

  // Start typing when card appears
  function startTypingWhenReady() {
    const wrapper = document.querySelector('.flowers-wrapper');
    if (!wrapper) {
      setTimeout(startTypingWhenReady, 100);
      return;
    }
    
    // Check if already visible
    if (wrapper.classList.contains('show')) {
      setTimeout(() => typeWriter(), 500);
      return;
    }
    
    // Watch for when card becomes visible
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (wrapper.classList.contains('show')) {
            setTimeout(() => typeWriter(), 500);
            observer.disconnect();
          }
        }
      });
    });
    
    observer.observe(wrapper, { attributes: true });
    
    // Fallback: also check periodically
    const checkInterval = setInterval(() => {
      if (wrapper.classList.contains('show')) {
        clearInterval(checkInterval);
        setTimeout(() => typeWriter(), 500);
        observer.disconnect();
      }
    }, 200);
  }
  
  startTypingWhenReady();

  // Enhanced hearts spawn with variety
  function spawnHeart() {
    const container = document.querySelector('.hearts');
    if (!container) return;
    
    const heart = document.createElement('div');
    const heartTypes = ['heart', 'heart-pink', 'heart-gold', 'heart-white'];
    const heartType = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    heart.className = `heart ${heartType}`;
    
    const size = Math.random() * 15 + 8; // 8 - 23px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = '-20px';
    heart.style.animationDuration = `${Math.random() * 4 + 6}s`;
    heart.style.opacity = `${0.4 + Math.random() * 0.6}`;
    heart.style.animationDelay = `${Math.random() * 0.5}s`;
    
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 12000);
  }

  // Sparkles spawn function
  function spawnSparkle() {
    const container = document.querySelector('.sparkles');
    if (!container) return;
    
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 2}s`;
    sparkle.style.animationDuration = `${Math.random() * 2 + 2}s`;
    
    container.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 4000);
  }

  // Create sparkles around signature
  function createSignatureSparkles() {
    const signature = document.getElementById('signature');
    if (!signature) return;
    
    const rect = signature.getBoundingClientRect();
    const container = document.querySelector('.sparkles');
    if (!container) return;
    
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.position = 'fixed';
        sparkle.style.left = `${rect.left + Math.random() * rect.width}px`;
        sparkle.style.top = `${rect.top + Math.random() * rect.height}px`;
        sparkle.style.animation = 'sparkleFloat 1.5s ease-out forwards';
        sparkle.style.transform = 'scale(1.5)';
        container.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1500);
      }, i * 100);
    }
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (!prefersReduced) {
    // Spawn hearts more frequently
    setInterval(spawnHeart, 500);
    // Spawn sparkles less frequently
    setInterval(spawnSparkle, 2000);
    
    // Initial sparkles burst
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        setTimeout(spawnSparkle, i * 100);
      }
    }, 500);
  }
});
