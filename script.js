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

    
   
    
//     const section = document.querySelector('.section');
// const dots = document.querySelectorAll('.dot');
// const textContents = document.querySelectorAll('.text-content');
// const screenContents = document.querySelectorAll('.screen-content');
// let currentStep = 1; 
// let isScrolling = false; 
// const totalSteps = dots.length; 

// function setActiveStep(step) {
    
//     dots.forEach((dot, index) => {
//         dot.classList.toggle('active', index === step - 1);
//     });

//     textContents.forEach((content, index) => {
//         content.classList.toggle('active', index === step - 1);
//     });

//     screenContents.forEach((content, index) => {
//         content.classList.toggle('active', index === step - 1);
//     });

//     currentStep = step;
// }

// function handleScroll(event) {
    
//     if (isScrolling) return;

    
//     isScrolling = true;

    
//     const delta = event.deltaY;

//     if (delta > 0 && currentStep < totalSteps) {
//         setActiveStep(currentStep + 1);
//     } else if (delta < 0 && currentStep > 1) {
//         setActiveStep(currentStep - 1);
//     } else if (currentStep === totalSteps && delta > 0) {
//         section.style.position = 'relative';
//         window.scrollBy({
//             top: 100, 
//             behavior: 'smooth',
//         });
//     } else if (currentStep === 1 && delta < 0) {
//         section.style.position = 'relative';
//         window.scrollBy({
//             top: -100, 
//             behavior: 'smooth',
//         });
//     }

//     setTimeout(() => (isScrolling = false), 1000);
// }

// window.addEventListener('wheel', (event) => {
//     event.preventDefault(); 
//     handleScroll(event);
// });
  
});



const stories = [
    {
        username: "Arcane by Mayuri Isame",
        profile: [{ type: "image", url: "images/product1.webp" }],
        media: [
            { type: "image", url: "images/spotlight1.webp" },
            { type: "video", url: "images/playback.mp4" }
        ]
    },
    {
        username: "Loca Slopa",
        profile: [{ type: "image", url: "images/product2.webp" }],
        media: [
            { type: "image", url: "images/spotlight2.webp" },
            { type: "image", url: "images/main.mp4" }
        ]
    },
    {
        username: "Starchild by Krissann Barretto",
        profile: [{ type: "image", url: "images/product3.webp" }],
        media: [
            { type: "image", url: "https://via.placeholder.com/1080x1920" },
            { type: "image", url: "https://via.placeholder.com/1080x1920" }
        ]
    },
    {
        username: "Vaishnavi",
        profile: [{ type: "image", url: "images/product4.webp" }],
        media: [
            { type: "image", url: "https://via.placeholder.com/1080x1920" }
        ]
    }
];

const storyContainer = document.getElementById('storyContainer');
const storyViewer = document.getElementById('storyViewer');
const storyImage = document.getElementById('storyImage');
const storyVideo = document.getElementById('storyVideo');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressContainer = document.getElementById('progressContainer');
const storyProfilePic = document.getElementById('storyProfilePic');
const storyProfileName = document.getElementById('storyProfileName');

let currentStoryIndex = 0;
let currentMediaIndex = 0;
let progressBars = [];
let currentProgressBar = null;

function createStoryItem(story, index) {
    const storyItem = document.createElement('div');
    storyItem.className = 'story-item';
    storyItem.innerHTML = `
        <div class="story-cover" style="background-image: url('${story.profile[0].url}');"></div>
        <div class="story-username">${story.username}</div>
    `;
    storyItem.addEventListener('click', () => openStory(index));
    return storyItem;
}

function createProgressBars(story) {
    progressContainer.innerHTML = '';
    progressBars = [];
    
    story.media.forEach((_, index) => {
        const progressBarContainer = document.createElement('div');
        progressBarContainer.className = 'progress-bar';
        
        const progress = document.createElement('div');
        progress.className = 'progress';
        
        progressBarContainer.appendChild(progress);
        progressContainer.appendChild(progressBarContainer);
        progressBars.push(progress);
    });
}

function openStory(index) {
    currentStoryIndex = index;
    currentMediaIndex = 0;
    createProgressBars(stories[currentStoryIndex]);
    updateStoryView();
    storyViewer.style.display = 'block';
}

function closeStory() {
    storyViewer.style.display = 'none';
    storyVideo.pause();
    if (currentProgressBar) {
        clearInterval(currentProgressBar);
    }
}

function updateStoryView() {
    const story = stories[currentStoryIndex];
    const media = story.media[currentMediaIndex];

    
    storyProfilePic.src = story.profile[0].url;
    storyProfileName.textContent = story.username;

    
    progressBars.forEach((bar, index) => {
        bar.style.width = index < currentMediaIndex ? '100%' : '0%';
    });

    if (media.type === 'image') {
        storyImage.src = '';
        storyImage.src = media.url;
        storyImage.style.display = 'block';
        storyVideo.style.display = 'none';
        storyVideo.pause();
        startProgressBar(5000);
    } else if (media.type === 'video') {
        storyVideo.src = '';
        storyVideo.src = media.url;
        storyVideo.style.display = 'block';
        storyImage.style.display = 'none';
        storyVideo.play().then(() => {
            startProgressBar(storyVideo.duration * 1000);
        });
    }
}

function startProgressBar(duration) {
    if (currentProgressBar) {
        clearInterval(currentProgressBar);
    }

    const currentBar = progressBars[currentMediaIndex];
    const startTime = Date.now();
    
    currentProgressBar = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progress = (elapsedTime / duration) * 100;
        currentBar.style.width = `${Math.min(progress, 100)}%`;
        
        if (progress >= 100) {
            clearInterval(currentProgressBar);
            nextMedia();
        }
    }, 10);
}

function nextMedia() {
    const story = stories[currentStoryIndex];
    if (currentMediaIndex < story.media.length - 1) {
        currentMediaIndex++;
    } else {
        currentStoryIndex = (currentStoryIndex + 1) % stories.length;
        currentMediaIndex = 0;
    }
    updateStoryView();
}

function prevMedia() {
    if (currentMediaIndex > 0) {
        currentMediaIndex--;
    } else {
        currentStoryIndex = (currentStoryIndex - 1 + stories.length) % stories.length;
        currentMediaIndex = stories[currentStoryIndex].media.length - 1;
    }
    updateStoryView();
}

stories.forEach((story, index) => {
    storyContainer.appendChild(createStoryItem(story, index));
});

closeBtn.addEventListener('click', closeStory);
nextBtn.addEventListener('click', nextMedia);
prevBtn.addEventListener('click', prevMedia);

document.addEventListener('keydown', (e) => {
    if (storyViewer.style.display === 'block') {
        if (e.key === 'ArrowRight') nextMedia();
        if (e.key === 'ArrowLeft') prevMedia();
        if (e.key === 'Escape') closeStory();
    }
});

storyVideo.addEventListener('ended', nextMedia);
