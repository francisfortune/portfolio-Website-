document.addEventListener('DOMContentLoaded', function () {
    const roles = ["Front-End Developer.", "Graphic Designer.", "Videographer & Editor.", "Generative AI Engineer.", "Digital Marketer.",];
    let index = 0;
    let charIndex = 0;
    let currentRole = '';
    let isDeleting = false;
    const dynamicText = document.getElementById('dynamic-text');

    function type() {
        if (isDeleting) {
            currentRole = roles[index].substring(0, charIndex--);
        } else {
            currentRole = roles[index].substring(0, charIndex++);
        }

        dynamicText.textContent = currentRole;

        if (!isDeleting && charIndex === roles[index].length) {
            setTimeout(() => isDeleting = true, 200);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % roles.length;
        }

        const speed = isDeleting ? 100 : 200;
        setTimeout(type, speed);
    }

    type();
});
    document.addEventListener('DOMContentLoaded', function () {
        const projectItems = document.querySelectorAll('.project-item');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animation');
                }
            });
        }, {
            threshold: 0.1
        });

        projectItems.forEach(item => {
            observer.observe(item);
        });
    });
    const video = document.getElementById('video');
    const playPauseButton = document.getElementById('playPause');
    const volumeUpButton = document.getElementById('volumeUp');
    const volumeDownButton = document.getElementById('volumeDown');
    
    // Play/Pause toggle
    playPauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            playPauseButton.textContent = 'Play';
        }
    });
    
    // Volume up
    volumeUpButton.addEventListener('click', () => {
        if (video.volume < 1) video.volume += 0.1;
    });
    
    // Volume down
    volumeDownButton.addEventListener('click', () => {
        if (video.volume > 0) video.volume -= 0.1;
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        const typewriterElement = document.querySelector('.typewrite');
        const text = typewriterElement.textContent;
        typewriterElement.textContent = '';
    
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                typewriterElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter,80);
            }
        }
        typeWriter();
    });
    document.getElementById("menu-toggle").addEventListener("click", function() {
        document.getElementById("nav-links").classList.toggle("nav-active");
    });
    