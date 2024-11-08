document.addEventListener("scroll", function() {
    document.querySelectorAll(".artist-section").forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});
