const accordeon = () => {
	const accordeonBlock = document.querySelector('.accordeon'),
		accordeonItems = document.querySelectorAll('.accordeon .element');
	const toggleElements = e => {
		const target = e.target.closest('.element');
		if (target && target.classList.contains('active')) {
			target.classList.remove('active');
		} else if (target && !target.classList.contains('active')) {
			accordeonItems.forEach(elem => {
				const itemContent = elem.querySelector('.element-content');
				if (elem === target) {
					elem.classList.add('active');
					itemContent.style.display = 'block';
				} else {
					elem.classList.remove('active');
					itemContent.style.display = 'none';
				}
			});
		}
	};
	accordeonBlock.addEventListener('click', toggleElements);


};

export default accordeon;
