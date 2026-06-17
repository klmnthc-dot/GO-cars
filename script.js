window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    nav.style.boxShadow =
        window.scrollY > 50
        ? "0 6px 20px rgba(0,0,0,0.15)"
        : "0 2px 10px rgba(0,0,0,0.08)";
});

// video autoplay fix (GitHub + mobile)
document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".bg-video");
    if(video){
        video.play().catch(()=>{});
    }
});
