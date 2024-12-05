document.addEventListener('DOMContentLoaded', () => {

    // Floating brands hover effect
    const brands = document.querySelectorAll('.brand');
    
    brands.forEach(brand => {
        brand.addEventListener('mouseenter', () => {
            brand.style.transform = `${brand.style.transform.replace('rotate', '')} scale(1.1)`;
        });
        
        brand.addEventListener('mouseleave', () => {
            brand.style.transform = brand.style.transform.replace(' scale(1.1)', '');
        });
    });

    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const brandList = document.querySelector(".brand-list");
    const scroller = document.querySelector(".scroller");
    
   
    brandList.innerHTML += brandList.innerHTML;
    let scrollPosition = 0;
  
    function moveLogos() {
      scrollPosition -= 1; 
      if (Math.abs(scrollPosition) >= brandList.scrollWidth / 2) {
        scrollPosition = 0;
      }
      brandList.style.transform = `translateX(${scrollPosition}px)`;
      requestAnimationFrame(moveLogos);
    }
  
    moveLogos(); 
  });
  