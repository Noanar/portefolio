particlesJS("particles-js", {
    "particles": {
        "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
        "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1 } },
        "size": { "value": 3, "random": true, "anim": { "enable": true, "speed": 40, "size_min": 0.1 } },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 6, "direction": "random", "random": true, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" }
        }
    }
});

// Scroll vers le haut si lien "#"
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        if (this.getAttribute('href') === '#') {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// Affichage des compétences
function toggleCompetences() {
    let competencesDiv = document.getElementById("competences-content");
    if (competencesDiv.style.display === "none" || competencesDiv.style.display === "") {
        competencesDiv.style.display = "block";
    } else {
        competencesDiv.style.display = "none";
    }
}

document.querySelectorAll('.diapo').forEach((diapo, index) => {
    let compteur = 0;
    const elements = diapo.querySelector('.elements');
    const slides = elements.querySelectorAll('.element');

    const getSlideWidth = () => diapo.clientWidth;

    const navGauche = diapo.querySelector('.nav-arrow.left');
    const navDroite = diapo.querySelector('.nav-arrow.right');

    function updateSlidePosition() {
        const decal = -getSlideWidth() * compteur;
        elements.style.transform = `translateX(${decal}px)`;
    }

    function slideNext() {
        compteur = (compteur + 1) % slides.length;
        updateSlidePosition();
    }

    function slidePrev() {
        compteur = (compteur - 1 + slides.length) % slides.length;
        updateSlidePosition();
    }

    navDroite.addEventListener('click', slideNext);
    navGauche.addEventListener('click', slidePrev);
    window.addEventListener('resize', updateSlidePosition);
});

function openModal(type) {
    document.getElementById(`modal-${type}`).style.display = 'block';
}

function closeModal(type) {
    document.getElementById(`modal-${type}`).style.display = 'none';
}

window.addEventListener('click', function(event) {
    ['technologique', 'juridique'].forEach(type => {
        const modal = document.getElementById(`modal-${type}`);
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

