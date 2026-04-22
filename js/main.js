// ===== EMAILJS INIT =====
document.addEventListener('DOMContentLoaded', () => {
  const cfg = window.PRINTASY_CONFIG?.emailjs;
  if (typeof emailjs !== 'undefined' && cfg?.publicKey) {
    emailjs.init(cfg.publicKey);
  }
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initContactForm();
  initGalleryLightbox();
  initWhatsApp();
});


// ===== NAVBAR — transparente → oscuro al scroll =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const links  = document.querySelectorAll('.nav-link');

  const toggleScrolled = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  };
  window.addEventListener('scroll', toggleScrolled, { passive: true });
  toggleScrolled();

  // Resaltar sección activa
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4, rootMargin: '-80px 0px -40% 0px' });

  sections.forEach(s => observer.observe(s));
}


// ===== MENÚ HAMBURGUESA =====
function initMobileMenu() {
  const hamburger   = document.getElementById('hamburger');
  const mobilePanel = document.getElementById('navMobilePanel');
  const closeBtn    = document.getElementById('mobilePanelClose');
  if (!hamburger || !mobilePanel) return;
  const links = mobilePanel.querySelectorAll('.nav-link');

  const toggle = (open) => {
    hamburger.classList.toggle('open', open);
    mobilePanel.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  hamburger.addEventListener('click', () => toggle(!hamburger.classList.contains('open')));
  if (closeBtn) closeBtn.addEventListener('click', () => toggle(false));
  links.forEach(l => l.addEventListener('click', () => toggle(false)));
  document.addEventListener('click', e => {
    if (!mobilePanel.contains(e.target) && !hamburger.contains(e.target)) toggle(false);
  });
}


// ===== ANIMACIONES AL HACER SCROLL =====
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  // Asignar delay de transición desde atributo data-delay
  elements.forEach(el => {
    const delay = el.dataset.delay;
    if (delay) el.style.transitionDelay = `${delay}ms`;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}


// ===== FORMULARIO DE CONTACTO =====
function initContactForm() {
  const form       = document.getElementById('contactForm');
  const submitBtn  = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('formSuccess');
  if (!form) return;

  // Validación individual por campo
  const validators = {
    name: (v) => v.trim().length >= 2 ? '' : 'Por favor ingresa tu nombre completo.',
    phone: (v) => /^[0-9+\s\-()]{7,15}$/.test(v.trim()) ? '' : 'Ingresa un número de teléfono válido (mínimo 7 dígitos).',
    message: (v) => v.trim().length >= 20 ? '' : 'Por favor describe tu proyecto (mínimo 20 caracteres).',
  };

  const showError = (id, msg) => {
    const el = document.getElementById(`${id}Error`);
    const input = document.getElementById(id);
    if (el) el.textContent = msg;
    if (input) input.classList.toggle('error', !!msg);
  };

  // Validación en tiempo real al perder el foco
  ['name', 'phone', 'message'].forEach(field => {
    const input = document.getElementById(field);
    if (input) {
      input.addEventListener('blur', () => showError(field, validators[field](input.value)));
      input.addEventListener('input', () => { if (input.classList.contains('error')) showError(field, validators[field](input.value)); });
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validar todos los campos
    let valid = true;
    ['name', 'phone', 'message'].forEach(field => {
      const input = document.getElementById(field);
      const error = validators[field](input ? input.value : '');
      showError(field, error);
      if (error) valid = false;
    });
    if (!valid) return;

    // Estado cargando
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    const cfg = window.PRINTASY_CONFIG?.emailjs;
    const templateParams = {
      name:      document.getElementById('name').value.trim(),
      phone:     document.getElementById('phone').value.trim(),
      message:   document.getElementById('message').value.trim(),
      reply_to:  window.PRINTASY_CONFIG?.contactEmail ?? '',
    };

    try {
      if (typeof emailjs === 'undefined' || !cfg?.serviceId) throw new Error('EmailJS no está configurado.');
      await emailjs.send(cfg.serviceId, cfg.templateId, templateParams);
      form.style.display = 'none';
      formSuccess.style.display = 'block';
    } catch (err) {
      showToast('Hubo un error al enviar. Por favor intenta de nuevo o escríbenos por WhatsApp.');
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }
  });
}


// ===== LIGHTBOX DE GALERÍA =====
function initGalleryLightbox() {
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lightboxImg');
  const lbCaption = document.getElementById('lightboxCaption');
  const lbClose   = document.getElementById('lightboxClose');
  if (!lightbox) return;

  const open = (src, alt, caption) => {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lbCaption.textContent = caption || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { lbImg.src = ''; }, 350);
  };

  document.querySelectorAll('.gallery-item:not(.img-placeholder)').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && img.src && !img.src.endsWith('/')) {
        open(img.src, img.alt, item.dataset.label);
      }
    });
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') item.click(); });
  });

  lbClose.addEventListener('click', close);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && lightbox.classList.contains('open')) close(); });
}


// ===== BOTÓN WHATSAPP — entrada con delay =====
function initWhatsApp() {
  const btn = document.getElementById('whatsappBtn');
  if (!btn) return;
  setTimeout(() => btn.classList.add('visible'), 1500);
}


// ===== TOAST DE ERROR =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4500);
}
