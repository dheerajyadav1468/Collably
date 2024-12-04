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