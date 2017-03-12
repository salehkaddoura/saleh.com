$("#typed").typed({
    strings: ["a developer", "a student", "Saleh"],
    typeSpeed: 40,
    startDelay: 2000,
    callback: function() {
        // lift();
    }
});

particlesJS.load('particles-js', '/scripts/particles.json', function() {
  console.log('callback - particles.js config loaded');
});