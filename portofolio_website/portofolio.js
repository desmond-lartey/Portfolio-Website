const logo = document.querySelector('.logo');
let currentText = "Ouijdane Ayach";
let newText = ""; // Variable pour stocker le texte en cours d'écriture
let writingTimeout; // Variable pour stocker le timeout de l'écriture

// Fonction pour changer le texte du logo progressivement
function changeText() {
    if (currentText === "Geomatics Engineer") {
        logo.textContent = currentText;
        return;
    }

    let i = 0;

    // Fonction récursive pour ajouter progressivement chaque caractère
    function addCharacter() {
        if (i < currentText.length) {
            newText += currentText.charAt(i);
            logo.textContent = newText;
            i++;
            // Appeler la fonction récursive avec un délai de 150 millisecondes
            writingTimeout = setTimeout(addCharacter, 150);
        }
    }

    // Démarrer l'ajout progressif de caractères
    addCharacter();
}

// Réinitialiser l'écriture en cours et le timeout
function resetWriting() {
    newText = "";
    clearTimeout(writingTimeout);
}

// Ajouter un écouteur d'événement pour détecter le survol du texte du logo
logo.addEventListener('mouseover', function() {
    resetWriting(); // Réinitialiser l'écriture en cours
    currentText = "Geomatics Engineer";
    changeText();
});

// Ajouter un écouteur d'événement pour détecter la sortie du survol du texte du logo
logo.addEventListener('mouseout', function() {
    resetWriting(); // Réinitialiser l'écriture en cours
    currentText = "Ouijdane Ayach";
    changeText();
});

// Ajouter un écouteur d'événement pour détecter le clic sur le texte du logo
logo.addEventListener('click', function() {
    // Si le texte en cours d'écriture est "Ouijdane Ayach", démarrer l'écriture de "Geomatics Engineer"
    if (newText === currentText) {
        resetWriting(); // Réinitialiser l'écriture en cours
        currentText = "Geomatics Engineer";
        changeText();
    }
});



/*changer image*/

const homeImg = document.querySelector('.home-img img');

// Stocker le chemin d'accès de l'image actuelle
let currentImage = homeImg.src;

// Fonction pour changer l'image au survol
function changeImage() {
    homeImg.src = "home2.jpg"; // Changer l'image au survol
}

// Fonction pour restaurer l'image d'origine
function restoreImage() {
    homeImg.src = currentImage; // Restaurer l'image d'origine
}

// Ajouter un écouteur d'événement pour détecter le survol de l'image
homeImg.addEventListener('mouseover', changeImage);

// Ajouter un écouteur d'événement pour détecter la sortie du survol de l'image
homeImg.addEventListener('mouseout', restoreImage);



/*bg*/


/* ---- particles.js config ---- */

particlesJS("particle-container", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 100
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.1,
          "opacity_min": 0.3,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  
  /* ---- stats.js config ---- */
  
  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);




///////////////////////////////////////////*


/* ---- particles.js config ---- */

/* ---- particles.js config ---- */

