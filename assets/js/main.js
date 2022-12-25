window.addEventListener('DOMContentLoaded', (e) => {
    const nextSlideButtons = document.querySelectorAll('.slider-btn.next'),
    prevSlideButtons = document.querySelectorAll('.slider-btn.prev')

    const nextSlide = (e) => {
        const sliderWrapper = e.target.closest('.slider__wrapper'),
        slider = sliderWrapper.querySelector('.slider'),
        sliderSlide = slider.querySelector('.slider__slide'),
        count = slider.getAttribute('data-count'),
        slidesNumber = slider.querySelectorAll('.slider__slide').length;
        if(Number(count) === 1){
            return
        }else{
            slider.setAttribute('data-count', Number(count) + 1)
            slider.style.transform = `translateX(-${(sliderSlide.offsetWidth + 20) * Number(slider.getAttribute('data-count'))}px)`;
        }

    };

    const prevSlide = (e) => {
        const sliderWrapper = e.target.closest('.slider__wrapper'),
        slider = sliderWrapper.querySelector('.slider'),
        sliderSlide = slider.querySelector('.slider__slide'),
        count = slider.getAttribute('data-count'),
        slidesNumber = slider.querySelectorAll('.slider__slide').length;
        if(Number(count) === -1){
            return
        }else{
            slider.setAttribute('data-count', Number(count) - 1);
            const counter = Number(slider.getAttribute('data-count'));
            if(counter === -1){
                slider.style.transform = `translateX(${(sliderSlide.offsetWidth + 20) * Number(counter + 2)}px)`
            }else{
                slider.style.transform = `translateX(${(sliderSlide.offsetWidth + 20) * Number(counter)}px)`
            }
        }
    };

    nextSlideButtons.forEach((i) => i.addEventListener('click', (e) => nextSlide(e)));
    prevSlideButtons.forEach((i) => i.addEventListener('click', (e) => prevSlide(e)));
});