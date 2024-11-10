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

document.addEventListener("DOMContentLoaded", function() {
    // Existing code for filtering gallery
    const checkboxes = document.querySelectorAll(".form-check-input");
    const galleryItems = document.querySelectorAll(".gallery-item");

    const filterGallery = () => {
        const selectedArtists = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        galleryItems.forEach(item => {
            const isVisible = selectedArtists.includes(item.dataset.artist);
            item.classList.toggle("d-none", !isVisible);
        });
    };

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filterGallery);
    });

    filterGallery();

    // Modal functionality
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    galleryItems.forEach(item => {
        item.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.querySelector("img").src;
            captionText.innerHTML = this.querySelector("img").alt;
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const button = item.querySelector(".accordion-button");
        button.addEventListener("click", () => {
            accordionItems.forEach(i => {
                if (i !== item) {
                    const collapse = i.querySelector(".accordion-collapse");
                    collapse.classList.remove("show");
                }
            });
        });
    });
});
