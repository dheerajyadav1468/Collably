document.addEventListener('DOMContentLoaded', () => {

    
    function initializeCarousel(carouselSelector, slideSelector, interval = 2000) {
        const carousel = document.querySelector(carouselSelector);
        if (!carousel) return; 
        const slides = carousel.querySelectorAll(slideSelector);
        let currentIndex = 0;

        const firstClone = slides[0].cloneNode(true);
        const lastClone = slides[slides.length - 1].cloneNode(true);

        carousel.appendChild(firstClone);
        carousel.insertBefore(lastClone, slides[0]);

        carousel.style.transform = `translateX(-${100 / (slides.length + 2)}%)`;

        function nextSlide() {
            currentIndex++;
            const adjustmentFactor = 1.1; 
            carousel.style.transition = 'transform 0.5s ease';
            carousel.style.transform = `translateX(-${(currentIndex + 1) * 100 / (slides.length + 2) * adjustmentFactor}%)`;

            if (currentIndex === slides.length) {
                setTimeout(() => {
                    carousel.style.transition = 'none';
                    currentIndex = 0;
                    carousel.style.transform = `translateX(-${100 / (slides.length + 2)}%)`;
                }, 500);
            }
        }

        slides.forEach(slide => {
            const video = slide.querySelector('video');
            if (video) video.play();
        });

        return setInterval(nextSlide, interval);
    }

    const carousel1Interval = initializeCarousel('.carousel', '.video-slide');
    const carousel2Interval = initializeCarousel('.carousel1', '.video-slide1');

    function cleanupCarousels() {
        clearInterval(carousel1Interval);
        clearInterval(carousel2Interval);
    }

    window.addEventListener('beforeunload', cleanupCarousels);





    const hamburger = document.getElementById('hamburger');
    const navItems = document.getElementById('nav-items');

    hamburger.addEventListener('click', function(event) {
        event.stopPropagation();
        navItems.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        const isClickInsideNav = navItems.contains(event.target);
        const isClickInsideHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickInsideHamburger && navItems.classList.contains('active')) {
            navItems.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
       

    /*text scroller section*/
        function initializeLogoScroller(listSelector) {
            const brandLists = document.querySelectorAll(listSelector);
        
            brandLists.forEach(brandList => {
               
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
        }
        
        initializeLogoScroller('.brand-list');
         
    
        
    
    
        
    
      /* slider-section */
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
    
        updateSlider(followersSlider, followersThumb, followersValue, followersTrack);
        updateSlider(contentSlider, contentThumb, contentValue, contentTrack);
    
    
    
    
    
            const track = document.querySelector('.feature_track');
            const items = document.querySelectorAll('.feature_item');
            const itemWidth = items[0].offsetWidth;
            const totalItems = items.length;
            let currentIndex = 0;
          
            items.forEach(item => {
              const clone = item.cloneNode(true);
              track.appendChild(clone);
            });
          
            track.style.transform = 'translateX(0)';
          
            function rotateItems() {
              currentIndex++;
              const translateX = -currentIndex * itemWidth;
              track.style.transition = 'transform 0.5s ease';
              track.style.transform = `translateX(${translateX}px)`;
          
              if (currentIndex >= totalItems) {
                setTimeout(() => {
                  track.style.transition = 'none';
                  currentIndex = 0;
                  track.style.transform = 'translateX(0)';
                }, 500); 
              }
            }
          
            function startRotation() {
              rotateItems();
              setTimeout(startRotation, 3500); 
            }
          
            setTimeout(startRotation, 1000);
    
    
    
    
    
    
    
    
           
                const imageTrack = document.querySelector('.image-track');
                const imageItems = document.querySelectorAll('.image-item');
                const itemWidth1 = imageItems[0].offsetWidth;
                const totalItems1 = imageItems.length;
                let currentImageIndex = 0;
              
                imageItems.forEach(item => {
                  const clone = item.cloneNode(true);
                  imageTrack.appendChild(clone);
                });
              
            
                imageTrack.style.transform = 'translateX(0)';
              
                function rotateImages() {
                  currentImageIndex++;
                  const translateX = -currentImageIndex * itemWidth1;
                  imageTrack.style.transition = 'transform 0.5s ease';
                  imageTrack.style.transform = `translateX(${translateX}px)`;
              
                  
                  if (currentImageIndex >= totalItems1) {
                    setTimeout(() => {
                      imageTrack.style.transition = 'none';
                      currentImageIndex = 0;
                      imageTrack.style.transform = 'translateX(0)';
                    }, 500); 
                  }
                }
              
                function startImageRotation() {
                  rotateImages();
                  setTimeout(startImageRotation, 3500); 
                }
              
                setTimeout(startImageRotation, 1000);
              
    
    
    
    
            
                    function toggleDropdown(id, arrow) {
                        var content = document.getElementById(id);
                        var arrowIcon = document.getElementById(arrow);
                
                        if (content.style.maxHeight) {
                            content.style.maxHeight = null;
                            content.style.opacity = 0;
                            arrowIcon.style.transform = "rotate(0deg)";
                        } else {
                            content.style.maxHeight = content.scrollHeight + "px";
                            content.style.opacity = 1;
                            arrowIcon.style.transform = "rotate(180deg)";
                        }
                    }
                
                    const buttons = document.querySelectorAll('.dropdown button');
                    buttons.forEach(button => {
                        button.addEventListener('click', function() {
                            const id = this.nextElementSibling.id;
                            const arrow = this.querySelector('.arrow').id;
                            toggleDropdown(id, arrow);
                        });
                    });
               
                
        
            
     
                    const reviewBlocks = document.querySelectorAll('.review_block');
                    let currentReviewIndex = 0;
                    let isScrolling = false;
                    
                    function isInViewport(element) {
                        const rect = element.getBoundingClientRect();
                        return (
                            rect.top >= 0 &&
                            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
                        );
                    }
                    
                    function activateNextReview() {
                        if (currentReviewIndex < reviewBlocks.length) {
                            reviewBlocks[currentReviewIndex].classList.add('active');
                            currentReviewIndex++;
                        }
                    }
                    
                    window.addEventListener('scroll', () => {
                        if (!isScrolling) {
                            window.requestAnimationFrame(() => {
                                reviewBlocks.forEach((review, index) => {
                                    if (isInViewport(review) && index >= currentReviewIndex) {
                                        activateNextReview();
                                    }
                                });
                                isScrolling = false;
                            });
                            isScrolling = true;
                        }
                    });
                    
                    reviewBlocks.forEach((block, index) => {
                        block.addEventListener('click', () => {
                            if (index <= currentReviewIndex) {
                                block.classList.add('active');
                            }
                        });
                    });
   
    

});



