const topSlider = () => {
	const slide = document.querySelectorAll('.slider-item'),
		dots = document.querySelector('.slick-dots'),
		slider = document.querySelector('.top-slider');

	let currentSlide = 0,
		interval;
	console.log(dots);
	const addDots = slides => {
		for (let i = 0; i < slides.length; i++) {
			if (i === 0) {
				const newElem = document.createElement('li');
				newElem.classList.add('slick-active');
				dots.append(newElem);
			} else {
				const newElem = document.createElement('li');
				dots.append(newElem);
			}
		}
	};

	addDots(slide);

	const dot = document.querySelectorAll('.slick-dots li');
	console.log(dot);
	const prevSlide = (elem, index, strClass) => {
		elem[index].classList.remove(strClass);
	};

	const nextSlide = (elem, index, strClass) => {
		elem[index].classList.add(strClass);
	};

	slider.addEventListener('click', e => {
		e.preventDefault();
		const target = e.target;

		if (!target.matches('.slick-dots li')) {
			return;
		}

		prevSlide(slide, currentSlide, 'slider-item--active');
		prevSlide(dot, currentSlide, 'slick-active');

		if (target.matches('.slick-dots li')) {
			dot.forEach((elem, index) => {
				if (elem === target) {
					currentSlide = index;
				}
			});
		}
		nextSlide(slide, currentSlide, 'slider-item--active');
		nextSlide(dot, currentSlide, 'slick-active');
	});

	const autoPlaySlide = () => {
		prevSlide(slide, currentSlide, 'slider-item--active');
		prevSlide(dot, currentSlide, 'slick-active');
		currentSlide++;
		if (currentSlide >= slide.length) {
			currentSlide = 0;
		}
		nextSlide(slide, currentSlide, 'slider-item--active');
		nextSlide(dot, currentSlide, 'slick-active');
	};

	const startSlide = (time = 3000) => {
		interval = setInterval(autoPlaySlide, time);
	};
	const stopSlide = () => {
		clearInterval(interval);
	};

	slider.addEventListener('mouseover', event => {
		if (event.target.matches('.slick-dots li')) {
			stopSlide();
		}
	});

	slider.addEventListener('mouseout', event => {
		if (event.target.matches('.slick-dots li')) {
			startSlide(3000);
		}
	});


	startSlide(3000);
};

export default topSlider;
