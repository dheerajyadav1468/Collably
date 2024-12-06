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


    
    const followersSlider = document.getElementById('followersSlider');
    const contentSlider = document.getElementById('contentSlider');
    const followersThumb = followersSlider.nextElementSibling;
    const contentThumb = contentSlider.nextElementSibling;
    const followersValue = followersThumb.querySelector('.thumb-value');
    const contentValue = contentThumb.querySelector('.thumb-value');
    const followersTrack = followersSlider.previousElementSibling.querySelector('.slider-fill');
    const contentTrack = contentSlider.previousElementSibling.querySelector('.slider-fill');
    const resultAmount = document.querySelector('.amount');
    const resultBlur = document.querySelector('.amount-blur');

    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K';
        }
        return num.toString();
    }

    function calculateEarnings(followers, content) {
        const conversionRate = 0.001;
        const averageEarning = 1000;
        const monthlyCustomers = followers * conversionRate;
        const monthlyEarnings = monthlyCustomers * averageEarning * (content / 30);
        
        if (monthlyEarnings >= 100000) {
            return Math.round(monthlyEarnings / 100000) + 'L';
        }
        return Math.round(monthlyEarnings / 1000) + 'K';
    }

    function updateSlider(slider, thumb, value, track) {
        const percent = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
        thumb.style.left = `${percent}%`;
        track.style.width = `${percent}%`;
        
        if (slider === followersSlider) {
            value.textContent = formatNumber(parseInt(slider.value));
        } else {
            value.textContent = slider.value;
        }

        const earnings = calculateEarnings(followersSlider.value, contentSlider.value);
        resultAmount.textContent = earnings;
        resultBlur.textContent = earnings;
    }

    function handleSliderInput(event) {
        const slider = event.target;
        const thumb = slider.nextElementSibling;
        const value = thumb.querySelector('.thumb-value');
        const track = slider.previousElementSibling.querySelector('.slider-fill');
        updateSlider(slider, thumb, value, track);
    }

    followersSlider.addEventListener('input', handleSliderInput);
    contentSlider.addEventListener('input', handleSliderInput);

    // Initialize sliders
    updateSlider(followersSlider, followersThumb, followersValue, followersTrack);
    updateSlider(contentSlider, contentThumb, contentValue, contentTrack);
   

        
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




  