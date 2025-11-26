// FAQ Functionality - Version isolée et robuste
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Fonction pour fermer tous les items FAQ
    function closeAllFAQItems() {
        faqItems.forEach(item => {
            item.classList.remove('active');
        });
    }
    
    // Fonction pour basculer un item FAQ
    function toggleFAQItem(item) {
        const isCurrentlyActive = item.classList.contains('active');
        
        // Fermer tous les items d'abord
        closeAllFAQItems();
        
        // Si l'item n'était pas actif, l'ouvrir
        if (!isCurrentlyActive) {
            item.classList.add('active');
        }
    }
    
    // Ajouter les écouteurs d'événements
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const toggleBtn = item.querySelector('.faq-toggle');
        
        if (question) {
            question.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleFAQItem(item);
            });
        }
        
        if (toggleBtn) {
            toggleBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleFAQItem(item);
            });
        }
    });
    
    // Fermer les FAQ en cliquant en dehors
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.faq-item')) {
            closeAllFAQItems();
        }
    });
    
    // Gérer la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllFAQItems();
        }
    });
}

// Initialiser quand le DOM est chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFAQ);
} else {
    initFAQ();
}

// Version alternative si vous préférez avec des données-attributs
function initFAQAlternative() {
    document.querySelectorAll('.faq-question, .faq-toggle').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const faqItem = this.closest('.faq-item');
            const isActive = faqItem.classList.contains('active');
            
            // Fermer tous les autres
            document.querySelectorAll('.faq-item.active').forEach(activeItem => {
                if (activeItem !== faqItem) {
                    activeItem.classList.remove('active');
                }
            });
            
            // Basculer l'état actuel
            faqItem.classList.toggle('active', !isActive);
        });
    });
}

// Version simple et robuste
document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.querySelector('.scroll-to-top');
    
    window.addEventListener('scroll', function() {
        // Afficher le bouton après 4000px de scroll
        if (window.pageYOffset > 4000) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});