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
});
let scrollAmount = 0;
document.querySelector(".next").addEventListener("click", () => {
    scrollAmount += 320;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});
document.querySelector(".prev").addEventListener("click", () => {
    scrollAmount -= 320;
    if (scrollAmount < 0) scrollAmount = 0;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});

//////////////////////// gallery////////////////////////////
const track = document.getElementById('carousel-track');
const imageFolder = "child/"; 
const imageCount = 18; // or number of images you have

for (let i = 1; i <= imageCount; i++) {
    const img = document.createElement('img');
    img.src = `${imageFolder}img${i}.jpeg`;
    img.alt = `Teaching Activity ${i}`;
    track.appendChild(img);
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


