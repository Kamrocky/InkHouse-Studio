/**
 * Adds a 'visible' class to each '.artist-section' element when it is scrolled into view.
 * The 'visible' class is added when the top of the element is within 100 pixels of the viewport's bottom.
 */
document.addEventListener("scroll", function() {
    document.querySelectorAll(".artist-section").forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});