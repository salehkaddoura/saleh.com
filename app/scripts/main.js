$(document).ready(function() {
  // ACTIVATE MATERIALIZE MOBILE SIDENAV
  $(".button-collapse").sideNav();

});

$("#typed").typed({
    strings: ["a developer", "a student", "Saleh"],
    typeSpeed: 40,
    startDelay: 2000,
    callback: function() {
        lift();
    }
});

function lift(){
    $(".header-container--h1").addClass("lift-text");
    $(".header-container--p").addClass("show-text");
}

particlesJS('particles-js', {
  particles: {
    color: '#fff',
    color_random: false,
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: {
      opacity: 1,
      anim: {
        enable: true,
        speed: 1.5,
        opacity_min: 0,
        sync: false
      }
    },
    size: 4,
    size_random: true,
    nb: 250,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#fff',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: false,
    mouse: {
      distance: 300
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab', // "grab" or false
    line_linked: {
      opacity: 0.5
    },
    events: {
      onclick: {
        enable: false,
        mode: 'push', // "push" or "remove"
        nb: 4
      },
      onresize: {
        enable: true,
        mode: 'bounce', // "out" or "bounce"
        density_auto: true
        // density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});