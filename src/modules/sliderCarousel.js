const sliderCarousel = () => {

	const servicesCarousel = document.querySelector('.services-carousel'),
		servicesElements = document.querySelector('.services-elements'),
		arrowRight = document.querySelector('.arrow-right'),
		arrowLeft = document.querySelector('.arrow-left');

	//Класс карусели

	class SliderCarousel {
		constructor(carousel, elements, next, prev, slidesToShow) {
			this.carousel = carousel;
			this.elements = elements;
			this.slides = carousel.children;
			this.position = 0;
			this.next = next;
			this.prev = prev;
			this.slidesToShow = slidesToShow;
			this.widthSlide =  Math.floor(100 / slidesToShow);
		}

		init() {
			this.addClass();
			this.controlSlider();
			this.popHandler();
		}

		addClass() {
			this.carousel.classList.add('glo-slider__wrap');
			this.elements.classList.add('glo-slider');
			for (const item of this.slides) {
				item.classList.add('glo-slider__item');
			}
		}
		controlSlider() {
			this.prev.addEventListener('click', this.prevSlider.bind(this));
			this.next.addEventListener('click', this.nextSlider.bind(this));
		}
		prevSlider() {
			--this.position;
			const width  = window.innerWidth || document.documentElement.clientWidth ||
      document.body.clientWidth;
			if (width >= 768) {
				if (this.position < 0) {
					this.position = this.slides.length - this.slidesToShow;
				}
				this.carousel.style.transform = `translateX(-${this.position * this.widthSlide}%)`;
			} else if (width < 768 && width >= 420) {
				if (this.position < 0) {
					this.position = this.slides.length - 2;
				}
				this.carousel.style.transform = `translateX(-${this.position * 50}%)`;
			} else {
				if (this.position < 0) {
					this.position = this.slides.length - 1;
				}
				this.carousel.style.transform = `translateX(-${this.position * 100}%)`;
			}
		}
		nextSlider() {
			const width  = window.innerWidth || document.documentElement.clientWidth ||
      document.body.clientWidth;
			if (width >= 768) {
				++this.position;
				if (this.position > this.slides.length - this.slidesToShow) {
					this.position = 0;
				}
				this.carousel.style.transform = `translateX(-${this.position * this.widthSlide}%)`;
			} else if (width < 768 && width >= 420) {
				++this.position;
				if (this.position > this.slides.length - 2) {
					this.position = 0;
				}
				this.carousel.style.transform = `translateX(-${this.position * 50}%)`;
			} else if (width < 420) {
				++this.position;
				if (this.position > this.slides.length - 1) {
					this.position = 0;
				}
				this.carousel.style.transform = `translateX(-${this.position * 100}%)`;
			}
		}
		popHandler() {
			const modalCallback = document.querySelector('.modal-callback'),
				modalOverlay = document.querySelector('.modal-overlay');
			for (const i of this.slides) {
				i.addEventListener('click', () => {
					modalCallback.style.display = 'block';
					modalOverlay.style.display = 'block';
				});
			}
		}
	}

	//Объявление объекта и инициализация
	const carousel = new SliderCarousel(servicesCarousel, servicesElements, arrowRight, arrowLeft, 3);
	carousel.init();
};


export default sliderCarousel;

