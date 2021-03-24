const upArrow = () => {
	const arrowElem = document.querySelector('.up'),
		servicesSection = document.querySelector('.services-section');
	window.addEventListener('scroll', () => {
		if (window.scrollY >= servicesSection.getBoundingClientRect().top) {
			arrowElem.style.display = 'block';
		} else {
			arrowElem.style.display = 'none';
		}
	});
	arrowElem.addEventListener('click', e => {
		e.preventDefault();
		document.body.scrollIntoView({
			behavior: 'smooth',
			alignToTop: true
		});
	});
};

export default upArrow;
