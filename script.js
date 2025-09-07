// Initialize AOS (Animate On Scroll)
AOS.init({
    // Konfigurasi AOS Anda
    duration: 1200,
    once: true,
    offset: 100,
    easing: 'ease-out-back'
});

// Navbar scroll effect with sports energy
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    if (Math.abs(scrollTop - lastScrollTop) > 50) {
        navbar.style.transform = 'scale(0.98)';
        setTimeout(() => {
            navbar.style.transform = 'scale(1)';
        }, 150);
    }
    lastScrollTop = scrollTop;

    // Parallax effect
    const hero = document.querySelector('.hero');
    const sportsIcons = document.querySelectorAll('.sport-icon');
    
    if (hero) {
        hero.style.transform = `translateY(${scrollTop * 0.3}px)`;
    }
    
    sportsIcons.forEach((icon, index) => {
        const speed = 0.1 + (index * 0.05);
        const rotation = scrollTop * (0.1 + index * 0.02);
        icon.style.transform = `translateY(${scrollTop * speed}px) rotate(${rotation}deg)`;
    });
});

// Enhanced smooth scrolling with bounce effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Add energy pulse effect
            createEnergyPulse(e.clientX, e.clientY);
        }
    });
});

// Create energy pulse effect on click
function createEnergyPulse(x, y) {
    const pulse = document.createElement('div');
    pulse.className = 'energy-pulse';
    pulse.style.left = x + 'px';
    pulse.style.top = y + 'px';
    document.body.appendChild(pulse);
    
    pulse.animate([
        { transform: 'scale(0)', opacity: 1 },
        { transform: 'scale(4)', opacity: 0 }
    ], {
        duration: 600,
        easing: 'ease-out'
    });
    
    setTimeout(() => {
        pulse.remove();
    }, 600);
}

// Dynamic sports icons animation
function animateSportsIcons() {
    const icons = document.querySelectorAll('.sport-icon');
    icons.forEach((icon, index) => {
        const randomDelay = Math.random() * 2000;
        const randomDuration = 3000 + Math.random() * 2000;
        
        setTimeout(() => {
            icon.style.animation = `floatIcon ${randomDuration}ms ease-in-out infinite`;
        }, randomDelay);
    });
}

// Enhanced card interactions with sports energy
document.querySelectorAll('.theme-card, .competition-card, .contact-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.03) rotate(1deg)';
        
        // Add energy effect around card
        const rect = this.getBoundingClientRect();
        createEnergyBurst(rect.left + rect.width/2, rect.top + rect.height/2);
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
    });
    
    // Add click energy effect
    card.addEventListener('click', function(e) {
        createEnergyPulse(e.clientX, e.clientY);
        
        // Add shake effect
        this.style.animation = 'bounce 0.6s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 600);
    });
});

// Create energy burst effect
function createEnergyBurst(x, y) {
    for(let i = 0; i < 8; i++) {
        const burst = document.createElement('div');
        burst.style.position = 'fixed';
        burst.style.left = x + 'px';
        burst.style.top = y + 'px';
        burst.style.width = '4px';
        burst.style.height = '4px';
        burst.style.background = '#ffdd59';
        burst.style.borderRadius = '50%';
        burst.style.pointerEvents = 'none';
        burst.style.zIndex = '9999';
        document.body.appendChild(burst);
        
        const angle = (i / 8) * Math.PI * 2;
        const distance = 50 + Math.random() * 50;
        const endX = x + Math.cos(angle) * distance;
        const endY = y + Math.sin(angle) * distance;
        
        burst.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${endX - x}px, ${endY - y}px) scale(0)`, opacity: 0 }
        ], {
            duration: 800 + Math.random() * 400,
            easing: 'ease-out'
        });
        
        setTimeout(() => {
            burst.remove();
        }, 1200);
    }
}

// Dynamic background pattern movement
let patternOffset = 0;
function animatePattern() {
    patternOffset += 0.5;
    const patterns = document.querySelectorAll('.sport-pattern');
    patterns.forEach(pattern => {
        pattern.style.backgroundPosition = `${patternOffset}px ${patternOffset}px, ${patternOffset * 0.7}px ${patternOffset * 0.7}px, ${patternOffset * 1.3}px ${patternOffset * 1.3}px`;
    });
    requestAnimationFrame(animatePattern);
}

// CTA button energy effect
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mouseenter', function() {
        this.style.animation = 'bounce 1s infinite';
    });
    
    ctaButton.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });
    
    ctaButton.addEventListener('click', function(e) {
        // Create massive energy explosion
        const rect = this.getBoundingClientRect();
        for(let i = 0; i < 20; i++) {
            setTimeout(() => {
                createEnergyBurst(rect.left + rect.width/2, rect.top + rect.height/2);
            }, i * 100);
        }
    });
}

// Sports motivation messages
const motivationMessages = [
    "🏆 Keep Going Champion!",
    "💪 Push Your Limits!",
    "🔥 Unleash Your Power!",
    "⚡ Energy Never Dies!",
    "🚀 Reach New Heights!",
    "🎯 Focus & Achieve!",
    "💥 Break Barriers!",
    "🌟 Shine Bright!"
];

// Show random motivation message
function showMotivation() {
    const message = motivationMessages[Math.floor(Math.random() * motivationMessages.length)];
    const motivationDiv = document.createElement('div');
    motivationDiv.textContent = message;
    motivationDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ffdd59, #feca57);
        color: #ff4757;
        padding: 15px 30px;
        border-radius: 25px;
        font-weight: bold;
        font-size: 1.2rem;
        z-index: 10000;
        pointer-events: none;
        box-shadow: 0 10px 30px rgba(255, 221, 89, 0.5);
        text-transform: uppercase;
        letter-spacing: 2px;
    `;
    
    document.body.appendChild(motivationDiv);
    
    motivationDiv.animate([
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 },
        { transform: 'translate(-50%, -50%) scale(1.1)', opacity: 1, offset: 0.3 },
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1, offset: 0.7 },
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 }
    ], {
        duration: 2000,
        easing: 'ease-out'
    });
    
    setTimeout(() => {
        motivationDiv.remove();
    }, 2000);
}

// Show motivation every 15 seconds
setInterval(showMotivation, 15000);

// Social media hover effects
document.querySelectorAll('.fab').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.3) rotate(15deg)';
        this.style.color = '#fff';
        this.style.textShadow = '0 0 20px #ffdd59';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
        this.style.color = '#ffdd59';
        this.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
    });
});

// Initialize all animations
document.addEventListener('DOMContentLoaded', function() {
    animateSportsIcons();
    animatePattern();
    
    // Add initial energy burst after page load
    setTimeout(() => {
        const heroButton = document.querySelector('.cta-button');
        if (heroButton) {
            const rect = heroButton.getBoundingClientRect();
            createEnergyBurst(rect.left + rect.width/2, rect.top + rect.height/2);
        }
    }, 2000);

    // --- Competition Slider Logic ---
    const slider = document.querySelector('.competition-grid');
    if (slider) {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        let autoplayInterval = null;
        let isDown = false;
        let startX;
        let scrollLeft;

        const getScrollStep = () => {
            const firstCard = slider.querySelector('.competition-card');
            if (!firstCard) return 300;
            const sliderStyles = window.getComputedStyle(slider);
            const cardWidth = firstCard.offsetWidth;
            const cardGap = parseInt(sliderStyles.gap) || 40;
            return cardWidth + cardGap;
        };

        const slideNext = () => {
            const step = getScrollStep();
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 20) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: step, behavior: 'smooth' });
            }
        };

        const slidePrev = () => {
            const step = getScrollStep();
            if (slider.scrollLeft <= 20) {
                slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: -step, behavior: 'smooth' });
            }
        };

        const startAutoplay = () => {
            stopAutoplay();
            autoplayInterval = setInterval(slideNext, 3000); // Kecepatan baru: 3 detik
        };

        const stopAutoplay = () => clearInterval(autoplayInterval);

        const startDrag = (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            stopAutoplay();
        };

        const endDrag = () => {
            isDown = false;
            slider.classList.remove('active');
            startAutoplay();
        };

        const drag = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
            const walk = (x - startX) * 2; // Pengali untuk pergeseran lebih responsif
            slider.scrollLeft = scrollLeft - walk;
        };

        // Event Listeners
        nextBtn.addEventListener('click', () => { slideNext(); startAutoplay(); });
        prevBtn.addEventListener('click', () => { slidePrev(); startAutoplay(); });

        slider.addEventListener('mousedown', startDrag);
        slider.addEventListener('mouseleave', endDrag);
        slider.addEventListener('mouseup', endDrag);
        slider.addEventListener('mousemove', drag);

        slider.addEventListener('touchstart', startDrag, { passive: false });
        slider.addEventListener('touchend', endDrag);
        slider.addEventListener('touchmove', drag);

        startAutoplay();
    }
});

// Add keyboard interactions for accessibility and fun
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        createEnergyPulse(randomX, randomY);
        showMotivation();
    }
});

// Performance optimization
let ticking = false;
function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

function updateAnimations() {
    // Update any heavy animations here
    ticking = false;
}

// Mobile touch interactions
document.addEventListener('touchstart', function(e) {
    const touch = e.touches[0];
    createEnergyPulse(touch.clientX, touch.clientY);
});

// Loading screen removal with energy effect
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    
    // Welcome energy explosion
    setTimeout(() => {
        for(let i = 0; i < 50; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                createEnergyPulse(x, y);
            }, i * 50);
        }
    }, 500);
});