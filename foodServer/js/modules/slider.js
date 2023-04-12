function slider() {
    // Slider
    const slides = document.querySelectorAll('.offer__slide'),
          slider = document.querySelector('.offer__slider'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          currentSlide = document.querySelector('#current'),
          totalSlides = document.querySelector('#total'),
          slideWrapper = document.querySelector('.offer__slider-wrapper'),
          sliderInner = document.querySelector('.offer__slider-inner'),
          width = window.getComputedStyle(slideWrapper).width;
    let slideIndex = 1,
        offset = 0;

    // Horizontal scrolling

    totalSlides.textContent = (slides.length < 10) ? `0${slides.length}` : slides.length;
    currentSlide.textContent = (slideIndex < 10) ? `0${slideIndex}` : slideIndex;

    sliderInner.style.width = 100 * slides.length + '%';
    sliderInner.style.display = 'flex';
    sliderInner.style.transition = '0.5s all';

    slideWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const dots = document.createElement('ol'),
          dotsArr = [];
    dots.classList.add('carousel-indicators');
    slider.append(dots);

    for (let i = 0; i < slides.length; i++) {
       const dot = document.createElement('li');
       dot.setAttribute('data-slide-to', i + 1);
       dot.classList.add('dot');

        if (i == 0) {
            dot.style.opacity = 1;
        }

       dots.append(dot);
       dotsArr.push(dot);
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length -1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        sliderInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        setCurrentSLideIndicator (); 

    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length -1);
        } else {
            offset -= deleteNotDigits(width);
        }

        sliderInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        setCurrentSLideIndicator ();
    });

    dotsArr.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo -1);

            sliderInner.style.transform = `translateX(-${offset}px)`;

            setCurrentSLideIndicator ();
        })
    });

    function setCurrentSLideIndicator () {
        currentSlide.textContent = (slideIndex < 10) ? `0${slideIndex}` : slideIndex;

        dotsArr.forEach(dot => dot.style.opacity = '0.5');
        dotsArr[slideIndex - 1].style.opacity = '1';
    }


    // Simple Slider

    // showSlides(slideIndex);
    // totalSlides.textContent = (slides.length < 10) ? `0${slides.length}` : slides.length;

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'block';

    //     currentSlide.textContent = (slideIndex < 10) ? `0${slideIndex}` : slideIndex;
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // })
    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });

}

module.exports = slider;