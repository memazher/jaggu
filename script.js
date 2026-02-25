// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});


// Dark Mode Toggle
const darkButtons = document.querySelectorAll(".dark-toggle");

darkButtons.forEach(button => {
    button.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        darkButtons.forEach(btn => {
            if (document.body.classList.contains("dark-mode")) {
                btn.innerHTML = "☀️ Light";
            } else {
                btn.innerHTML = "🌙 Dark";
            }
        });

    });
});
// ===============================
// MOBILE MENU TOGGLE
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");  // animate icon
});
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// VIDEO SECTION //
/*
const videoIDs = [
    "b6cJ9m29eAw",
    "VIDEO_ID_2",
    "VIDEO_ID_3",
    "VIDEO_ID_4"
];
const slider = document.getElementById("videoSlider");
videoIDs.forEach(id => {
    const card = document.createElement("div");
    card.classList.add("video-card");

    card.innerHTML = `
        <iframe 
            src="https://www.youtube.com/shorts/${id}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    `;
    slider.appendChild(card);
});
*/




/*
const videoFolder = "videos/";
const videoFiles = [
    "video1.mp4",
    "video2.mp4",
    "video3.mp4",
    "video4.mp4",
    "video5.mp4",
    "video6.mp4",
    "video7.mp4",
    "video8.mp4",
    "video9.mp4",
    "video10.mp4"
];
const slider = document.getElementById("videoSlider");
videoFiles.forEach(file => {
    const card = document.createElement("div");
    card.classList.add("video-card");
    card.innerHTML = `
        <video controls>
            <source src="${videoFolder + file}" type="video/mp4">
        </video>
    `;
    slider.appendChild(card);
});*/
/*
let scrollAmount = 0;
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
function getMaxScroll() {
    return slider.scrollWidth - slider.clientWidth;
}

nextBtn.addEventListener("click", () => {
    const maxScroll = getMaxScroll();

    scrollAmount += slider.clientWidth;

    if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll;
    }

    slider.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener("click", () => {
    scrollAmount -= slider.clientWidth;

    if (scrollAmount < 0) {
        scrollAmount = 0;
    }

    slider.style.transform = `translateX(-${scrollAmount}px)`;
});
*/

//////////////////////// gallery////////////////////////////
const track = document.getElementById('carousel-track');
const imageFolder = "child/"; 
const imageCount = 18; // or number of images you have

for (let i = 1; i <= imageCount; i++) {
    const img = document.createElement('img');
    img.src = `${imageFolder}img${i}.jpeg`;
    img.alt = `Teaching Activity ${i}`;
    track.appendChild(img);
    img.loading = "lazy";
}

const slides = Array.from(track.children);
const imgNextBtn = document.getElementById('img-next');
const imgPrevBtn = document.getElementById('img-prev');
let currentIndex = 0;

function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

imgNextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
});

imgPrevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
});

////////////////////////footer ////////////////////////////
document.getElementById("year").textContent = new Date().getFullYear();




// ===============================
// ANIMATED COUNTERS
// ===============================

// ===============================
// PREMIUM ANIMATED COUNTERS
// ===============================

const counters = document.querySelectorAll(".counter");
const heroStats = document.querySelector(".hero-stats");

const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const plusSymbol = counter.getAttribute("data-plus") || "";
    let count = 0;
    const increment = target / 120;

    const updateCounter = () => {
        count += increment;

        if (count < target) {
            counter.textContent = Math.ceil(count) + plusSymbol;

            // Slide effect
            counter.style.transform = "translateY(-5px)";
            setTimeout(() => {
                counter.style.transform = "translateY(0)";
            }, 100);

            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target + plusSymbol;
            counter.classList.add("glow"); // Add glow after finishing
        }
    };

    updateCounter();
};

// Trigger animation when visible
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            heroStats.classList.add("active"); // fade-in section

            counters.forEach(counter => {
                animateCounter(counter);
            });

            counterObserver.disconnect();
        }
    });
}, { threshold: 0.4 });

counterObserver.observe(heroStats);



// ===============================
// TESTIMONIALS (Dynamic)
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const testimonials = [
        {
            text: "Jagriti ma’am creates a joyful and safe learning environment. My child loves coming to school.",
            author: "Parent of LKG Student"
        },
        {
            text: "Her activity-based teaching improved my child’s confidence and communication skills.",
            author: "Nursery Parent"
        },
        {
            text: "She is patient, caring, and truly dedicated to every child’s growth.",
            author: "Sr.KG Parent"
        }
    ];

    const container = document.getElementById("testimonialContainer");

    if (!container) return;

    testimonials.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("testimonial-card");

        card.innerHTML = `
            <p class="testimonial-text">“${item.text}”</p>
            <h4>- ${item.author}</h4>
        `;

        container.appendChild(card);
    });

});