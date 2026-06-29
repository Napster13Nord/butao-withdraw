// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ── Reviews Marquee ──────────────────────────────────────────────────
(function () {
  const REVIEWS = [
    {
      name: 'Mariana S.',
      initial: 'M',
      color: '#009688',
      timeAgo: '3 semanas atrás',
      stars: 5,
      text: 'Estava completamente exposta sem saber. Instalaram o botão em menos de 24h e ficou tudo a funcionar perfeitamente na minha loja WooCommerce. Recomendo a qualquer loja em Portugal!'
    },
    {
      name: 'Tiago R.',
      initial: 'T',
      color: '#2196F3',
      timeAgo: '1 mês atrás',
      stars: 5,
      text: 'Profissional, rápido e com um conhecimento excelente da legislação europeia. Explicou-me tudo sobre a Diretiva UE 2023/2673, configurou o fluxo de e-mail e testou tudo ao vivo. Valeu cada cêntimo.'
    },
    {
      name: 'Carla V.',
      initial: 'C',
      color: '#9C27B0',
      timeAgo: '2 meses atrás',
      stars: 5,
      text: 'Tinha receio de coimas depois de ler sobre as inspeções automáticas da EU. Entrei em contacto e em 24h a minha loja estava em conformidade. Processo muito simples e sem interromper as vendas.'
    },
    {
      name: 'Ricardo F.',
      initial: 'R',
      color: '#F44336',
      timeAgo: '5 semanas atrás',
      stars: 5,
      text: 'Excelente serviço! A instalação foi feita sem eu ter de fazer nada de técnico. O botão aparece exatamente como a lei exige — em 2 passos — e o e-mail de confirmação é enviado automaticamente. Perfeito.'
    },
    {
      name: 'Sofia P.',
      initial: 'S',
      color: '#607D8B',
      timeAgo: '6 semanas atrás',
      stars: 5,
      text: 'Descobri que a janela de devolução podia passar para 1 ano se não tivesse o botão. Fiquei em pânico, mas em menos de um dia estava tudo resolvido. Super profissional e muito atencioso.'
    },
    {
      name: 'Nuno A.',
      initial: 'N',
      color: '#4CAF50',
      timeAgo: '2 meses atrás',
      stars: 5,
      text: 'Tenho duas lojas WooCommerce e instalaram o botão em ambas. O serviço é exatamente o que prometem: rápido, completo e sem dores de cabeça. Fico descansado com a conformidade legal garantida.'
    },
    {
      name: 'Ana L.',
      initial: 'A',
      color: '#FF9800',
      timeAgo: '1 mês atrás',
      stars: 5,
      text: 'Pensei que seria algo complicado e caro de implementar. Foi o oposto: 100€, instalado em 24h, com suporte e testes incluídos. Deveria ser obrigatório saber disto antes de abrir uma loja online!'
    },
    {
      name: 'Bruno M.',
      initial: 'B',
      color: '#3F51B5',
      timeAgo: '7 semanas atrás',
      stars: 5,
      text: 'Excelente profissional. Muito responsável, criativo e atento a todos os pormenores da lei. Configurou o botão, testou os dois fluxos de utilizador (registado e convidado) e o e-mail saiu de imediato. Obrigado!'
    },
  ];

  const GOOGLE_ICON = `<svg width="22" height="22" viewBox="0 0 24 24" aria-label="Google" role="img">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>`;

  function buildStars(n) {
    let s = '';
    for (let i = 0; i < 5; i++) {
      s += `<span class="${i < n ? 'reviews__star' : 'reviews__star--empty'}">★</span>`;
    }
    return s;
  }

  function buildCard(r) {
    return `
      <div class="reviews__card">
        <div class="reviews__card-spotlight"></div>
        <div class="reviews__card-body">
          <div class="reviews__profile-row">
            <div class="reviews__avatar" style="background:${r.color}">${r.initial}</div>
            <div class="reviews__profile-info">
              <div class="reviews__profile-name">${r.name}</div>
              <div class="reviews__profile-time">${r.timeAgo}</div>
            </div>
          </div>
          <p class="reviews__text">${r.text}</p>
          <div class="reviews__bottom-row">
            <div class="reviews__stars">${buildStars(r.stars)}</div>
            ${GOOGLE_ICON}
          </div>
        </div>
      </div>`;
  }

  const track = document.getElementById('reviews-track');
  if (!track) return;

  // Duplicate for seamless infinite loop
  const all = [...REVIEWS, ...REVIEWS];
  track.innerHTML = all.map(buildCard).join('');

  // ── Spotlight on mousemove ──
  track.querySelectorAll('.reviews__card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.querySelector('.reviews__card-spotlight').style.setProperty('--sx', x + '%');
      card.querySelector('.reviews__card-spotlight').style.setProperty('--sy', y + '%');
    });
  });

  // ── Auto-scroll loop ──
  const wrapper = document.getElementById('reviews-marquee');
  let isDragging = false;
  let isHovered = false;
  let dragStartX = 0;
  let dragScrollLeft = 0;
  let rafId;
  let lastTime = 0;
  let initialized = false;
  const SPEED = 0.04; // px/ms

  function tick(time) {
    if (!initialized) {
      wrapper.scrollLeft = wrapper.scrollWidth / 2;
      initialized = true;
      lastTime = time;
    }
    const dt = time - lastTime;
    lastTime = time;

    if (!isDragging && !isHovered) {
      wrapper.scrollLeft += SPEED * dt;
    }

    const half = wrapper.scrollWidth / 2;
    if (wrapper.scrollLeft >= half) wrapper.scrollLeft -= half;
    else if (wrapper.scrollLeft <= 0) wrapper.scrollLeft += half;

    rafId = requestAnimationFrame(tick);
  }
  rafId = requestAnimationFrame(tick);

  // ── Mouse drag ──
  wrapper.addEventListener('mousedown', e => {
    isDragging = true;
    wrapper.style.cursor = 'grabbing';
    dragStartX = e.pageX;
    dragScrollLeft = wrapper.scrollLeft;
  });
  wrapper.addEventListener('mousemove', e => {
    if (!isDragging) return;
    e.preventDefault();
    wrapper.scrollLeft = dragScrollLeft - (e.pageX - dragStartX);
  });
  wrapper.addEventListener('mouseup', () => { isDragging = false; wrapper.style.cursor = 'grab'; });
  wrapper.addEventListener('mouseleave', () => { isDragging = false; isHovered = false; wrapper.style.cursor = 'grab'; });
  wrapper.addEventListener('mouseenter', () => { isHovered = true; });

  // ── Touch drag ──
  let touchStartX = 0;
  let touchScrollLeft = 0;
  wrapper.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = wrapper.scrollLeft;
    isHovered = true;
  }, { passive: true });
  wrapper.addEventListener('touchmove', e => {
    wrapper.scrollLeft = touchScrollLeft - (e.touches[0].pageX - touchStartX);
  }, { passive: true });
  wrapper.addEventListener('touchend', () => { isHovered = false; });
})();

// ── Theme Toggle Switcher ────────────────────────────────────────────
(function () {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
})();

// ── Floating WhatsApp Widget ─────────────────────────────────────────
(function () {
  const waButton = document.getElementById('wa-button');
  const waChatBox = document.getElementById('wa-chat-box');
  const waChatClose = document.getElementById('wa-chat-close');
  const waChatInput = document.getElementById('wa-chat-input');
  const waChatSend = document.getElementById('wa-chat-send');

  if (!waButton || !waChatBox) return;

  // Toggle chat box
  waButton.addEventListener('click', (e) => {
    e.stopPropagation();
    waChatBox.classList.toggle('wa-chat-box--active');
  });

  // Close chat box
  if (waChatClose) {
    waChatClose.addEventListener('click', (e) => {
      e.stopPropagation();
      waChatBox.classList.remove('wa-chat-box--active');
    });
  }

  // Click outside to close
  document.addEventListener('click', (e) => {
    if (!waChatBox.contains(e.target) && !waButton.contains(e.target)) {
      waChatBox.classList.remove('wa-chat-box--active');
    }
  });

  // Redirect to WhatsApp function
  function sendToWhatsApp() {
    const text = waChatInput.value.trim();
    const defaultText = "Olá! Gostaria de saber mais sobre a adequação da minha loja WooCommerce.";
    const message = text ? text : defaultText;
    const url = `https://wa.me/3584578337530?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    waChatBox.classList.remove('wa-chat-box--active');
    waChatInput.value = '';
  }

  // Send click event
  if (waChatSend) {
    waChatSend.addEventListener('click', sendToWhatsApp);
  }

  // Send keypress Enter event
  if (waChatInput) {
    waChatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendToWhatsApp();
      }
    });
  }
})();
