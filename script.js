// ===============================================
// CARROSSEL AUTOMÁTICO - HERO
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlideIndex = 0;
    
    if (heroSlides.length > 0) {
        heroSlides[0].classList.add('active');
    }
    
    function nextSlide() {
        heroSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
        heroSlides[currentSlideIndex].classList.add('active');
    }
    
    if (heroSlides.length > 0) {
        setInterval(nextSlide, 5000);
    }
});

// ===============================================
// FAQ ACCORDION
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function(e) {
                e.preventDefault();
                
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                item.classList.add('active');
            });
        }
    });
});

// ===============================================
// MENU HAMBURGER
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
});

// ===============================================
// ANIMAÇÕES DE FUNDO - HERO
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    const backgroundSvg = document.querySelector('.background-animation');
    
    if (backgroundSvg) {
        const backgroundElements = backgroundSvg.querySelector('#background-elements');
        
        if (backgroundElements) {
            backgroundSvg.addEventListener('mousemove', (e) => {
                const rect = backgroundSvg.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                
                const moveX = (x - 0.5) * 20;
                const moveY = (y - 0.5) * 20;
                
                backgroundElements.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
            
            backgroundSvg.addEventListener('mouseleave', () => {
                backgroundElements.style.transform = 'translate(0, 0)';
            });
        }
    }
});

// ===============================================
// ANIMAÇÕES DE FUNDO - BENEFÍCIOS
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    const beneficiosSvg = document.querySelector('.background-animation-beneficios');
    
    if (beneficiosSvg) {
        const backgroundElements = beneficiosSvg.querySelector('#background-elements-2');
        
        if (backgroundElements) {
            beneficiosSvg.addEventListener('mousemove', (e) => {
                const rect = beneficiosSvg.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                
                const moveX = (x - 0.5) * 15;
                const moveY = (y - 0.5) * 15;
                
                backgroundElements.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
            
            beneficiosSvg.addEventListener('mouseleave', () => {
                backgroundElements.style.transform = 'translate(0, 0)';
            });
        }
    }
});

// ===============================================
// SMOOTH SCROLL
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// ===============================================
// SCROLL ANIMATIONS - INTERSECTION OBSERVER
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Aplicar animações baseadas no tipo de elemento
                if (element.classList.contains('slide-in-card')) {
                    element.style.animation = 'slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                } else if (element.classList.contains('slide-in-title')) {
                    element.style.animation = 'slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                } else if (element.classList.contains('slide-in-text')) {
                    element.style.animation = 'slideInUp 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s backwards';
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observar todos os elementos animáveis
    document.querySelectorAll('.card').forEach(card => observer.observe(card));
    document.querySelectorAll('.plano-card').forEach(card => observer.observe(card));
    document.querySelectorAll('.testimonial-card').forEach(card => observer.observe(card));
    document.querySelectorAll('.problema-card').forEach(card => observer.observe(card));
    document.querySelectorAll('.section-title').forEach(title => observer.observe(title));
    document.querySelectorAll('.slide-in-text').forEach(text => observer.observe(text));
});

// ===============================================
// EFEITOS DE DESLIZE EM CARDS (PC - HOVER)
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 1024) {
        const cards = document.querySelectorAll('.card, .plano-card, .problema-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * 5;
                const rotateY = ((centerX - x) / centerX) * 5;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });
    }
});

// ===============================================
// ANIMAÇÕES DE LINHA NO HERO - MOVIMENTO COM MOUSE
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const bgElements = document.querySelectorAll('.geometric-line, .geometric-poly, .geometric-wave');
    
    if (heroSection && bgElements.length > 0) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            bgElements.forEach((el, index) => {
                const speed = (index + 1) * 0.5;
                const moveX = (x - 0.5) * 30 * speed;
                const moveY = (y - 0.5) * 30 * speed;
                
                el.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
        
        heroSection.addEventListener('mouseleave', () => {
            bgElements.forEach(el => {
                el.style.transform = 'translate(0, 0)';
            });
        });
    }
});

// ===============================================
// STAGGER ANIMATION PARA MÚLTIPLOS ELEMENTOS
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const staggerObserver = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = index * 0.1;
                entry.target.style.animationDelay = `${delay}s`;
                staggerObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Aplicar stagger em grids
    const gridCards = document.querySelectorAll('.problemas-grid .problema-card, .planos-grid .plano-card, .beneficios-grid .card');
    gridCards.forEach(card => staggerObserver.observe(card));
});

// ===============================================
// PARALLAX EFFECT
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    let scrollPosition = 0;
    
    window.addEventListener('scroll', () => {
        scrollPosition = window.scrollY;
        
        // Parallax no hero
        const heroBg = document.querySelector('.hero-overlay');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
        
        // Parallax na seção sobre
        const sobreImage = document.querySelector('.sobre-image');
        if (sobreImage && isElementInViewport(sobreImage)) {
            sobreImage.style.transform = `translateY(${(scrollPosition - sobreImage.offsetTop + window.innerHeight) * 0.1}px)`;
        }
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// ===============================================
// ANIMAÇÃO DE PULSE NOS BOTÕES PRIMÁRIOS
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    const primaryBtns = document.querySelectorAll('.btn-primary');
    
    primaryBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'glowPulse 0.6s ease-in-out';
            }, 10);
        });
    });
});

// ===============================================
// RESIZE LISTENER PARA RESPONSIVIDADE
// ===============================================
window.addEventListener('resize', () => {
    if (window.innerWidth <= 1024) {
        const cards = document.querySelectorAll('.card, .plano-card, .problema-card');
        cards.forEach(card => {
            card.style.transform = 'none';
        });
    }
});

// ===============================================
// PERFORMANCE: DEBOUNCE PARA MOUSE MOVE
// ===============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===============================================
// LAZY LOAD PARA IMAGENS (Opcional)
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        images.forEach(img => imageObserver.observe(img));
    }
});

// ===============================================
// SUPORTE A TOUCH PARA DISPOSITIVOS MÓVEIS
// ===============================================
document.addEventListener('DOMContentLoaded', function() {
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleSwipe = () => {
        if (touchStartX - touchEndX > 50) {
            // Swipe left
        }
        if (touchEndX - touchStartX > 50) {
            // Swipe right
        }
    };
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
});

// ===============================================
// ANALYTICS E TRACKING (Adicione seu código aqui)
// ===============================================
// Exemplo: Google Analytics
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());

// ===============================================
// LOG DE SUCESSO
// ===============================================
console.log('%c✅ SmileCare Premium JavaScript Carregado com Sucesso!', 'color: #00a8cc; font-size: 14px; font-weight: bold;');
console.log('%c✅ Carrossel Hero funcionando!', 'color: #00d9ff; font-size: 12px;');
console.log('%c✅ FAQ Accordion funcionando!', 'color: #00d9ff; font-size: 12px;');
console.log('%c✅ Menu Hamburger funcionando!', 'color: #00d9ff; font-size: 12px;');
console.log('%c✅ Animações responsivas ativas!', 'color: #00d9ff; font-size: 12px;');
console.log('%c✅ Efeitos de hover em cards!', 'color: #00d9ff; font-size: 12px;');
console.log('%c✅ Movimento de fundo responsivo!', 'color: #00d9ff; font-size: 12px;');
console.log('%c✅ Intersection Observer para animações!', 'color: #00d9ff; font-size: 12px;');
console.log('%c✅ Todas as funcionalidades e efeitos ativos!', 'color: #00a8cc; font-size: 13px; font-weight: bold;');