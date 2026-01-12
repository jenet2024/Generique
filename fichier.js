 // Create particles
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particlesContainer.appendChild(particle);
        }

        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                navLinks.forEach(l => l.classList.remove('active'));
                pages.forEach(p => p.classList.remove('active'));
                
                link.classList.add('active');
                
                const targetId = link.getAttribute('href').substring(1);
                document.getElementById(targetId).classList.add('active');
                
                window.scrollTo({ top: 0, behavior: 'smooth' });

                // Trigger fade-in animations
                setTimeout(() => {
                    const fadeElements = document.querySelectorAll('.fade-in');
                    fadeElements.forEach(el => {
                        el.classList.add('visible');
                    });
                }, 100);
            });
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Initial fade-in
        setTimeout(() => {
            document.querySelectorAll('#home .fade-in').forEach(el => {
                el.classList.add('visible');
            });
        }, 200);

        // Burger menu toggle

        const burger = document.getElementById('burger');
        const navMenu = document.querySelector('.nav-links');

        burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        });

        // Dark mode toggle (example, you can add a button for this)
        const darkToggle = document.getElementById('darkToggle');

        darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        });

        // Fermer le menu avec la croix
            const closeMenu = document.getElementById('closeMenu');

            closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
            });

            // Fermer le menu quand on clique sur un lien
            navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
            });
           
            document.querySelectorAll('.details-toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const card = toggle.closest('.project-card');
                card.classList.toggle('expanded');
            });
            });
 

            // Project details toggle
        function toggleDetails(element) {
            const card = element.closest ? element.closest('.project-card') : element;
            const details = card.querySelector('.project-details');
            const btn = card.querySelector('.view-details-btn');
            
            if (details.classList.contains('active')) {
                details.classList.remove('active');
                if (btn) btn.textContent = 'Voir les détails ▼';
            } else {
                // Close all other details first
                document.querySelectorAll('.project-details.active').forEach(d => {
                    d.classList.remove('active');
                    const otherBtn = d.parentElement.querySelector('.view-details-btn');
                    if (otherBtn) otherBtn.textContent = 'Voir les détails ▼';
                });
                
                details.classList.add('active');
                if (btn) btn.textContent = 'Masquer les détails ▲';
                
                // Smooth scroll to card
                setTimeout(() => {
                    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 300);
            }
        }


        
    const modal = document.getElementById("cvModal");
    const openBtn = document.getElementById("openCvBtn");
    const closeBtn = document.querySelector(".close");

    // Ouvrir la modale
    openBtn.onclick = function() {
        modal.style.display = "block";
    }

    // Fermer en cliquant sur X
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Fermer en cliquant en dehors de l'image
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

// --- Activer la bonne section au chargement de la page ---
window.addEventListener("load", () => {
    const hash = window.location.hash || "#home"; // si pas de hash → home
    const targetId = hash.replace("#", "");

    // Retirer toutes les sections actives
    pages.forEach(p => p.classList.remove("active"));
    navLinks.forEach(l => l.classList.remove("active"));

    // Activer la bonne section
    const targetPage = document.getElementById(targetId);
    if (targetPage) {
        targetPage.classList.add("active");
    }

    // Activer le lien correspondant
    const targetLink = document.querySelector(`a[href="${hash}"]`);
    if (targetLink) {
        targetLink.classList.add("active");
    }
});


            
            