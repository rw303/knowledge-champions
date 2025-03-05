
const slider = document.querySelector(".slider-container");
const images = document.querySelectorAll(".slider-container img");
const viewMoreBtn = document.querySelector(".view-more");

// إظهار الصور عند التمرير
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
        }
    });
}, { threshold: 0.5 });

images.forEach(image => observer.observe(image));

// إيقاف الحركة عند النقر
slider.addEventListener("click", () => {
    slider.style.animationPlayState = "paused";
    setTimeout(() => {
        slider.style.animationPlayState = "running";
    }, 3000); // استئناف بعد 5 ثوانٍ
});



document.addEventListener("DOMContentLoaded", () => {
    const reviews = document.querySelectorAll(".review");
    const loadMoreBtn = document.getElementById("loadMore");
    let visibleReviews = 2;

    // إخفاء بعض التقييمات عند التحميل الأول
    reviews.forEach((review, index) => {
        if (index >= visibleReviews) {
            review.style.display = "none";
        }
    });

    // زر عرض المزيد
    loadMoreBtn.addEventListener("click", () => {
        visibleReviews += 5;
        reviews.forEach((review, index) => {
            if (index < visibleReviews) {
                review.style.display = "block";
            }
        });

        if (visibleReviews >= reviews.length) {
            loadMoreBtn.style.display = "none";
        }
    });
});