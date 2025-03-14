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


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        if (this.getAttribute('href') === '#') {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

function toggleCompetences() {
    let competencesDiv = document.getElementById("competences-content");
    if (competencesDiv.style.display === "none" || competencesDiv.style.display === "") {
        competencesDiv.style.display = "block";
    } else {
        competencesDiv.style.display = "none";
    }
}
