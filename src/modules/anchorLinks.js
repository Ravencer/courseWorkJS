const anchorLinks = () => {
	const topMenu = document.querySelector('.top-menu');
	topMenu.addEventListener('click', e => {
		e.preventDefault();
		const target = e.target;
		if (target.tagName === 'A') {
			e.preventDefault();
			const anchor = document.querySelector(target.getAttribute('href'));
			anchor.scrollIntoView({
				behavior: 'smooth'
			});
		}
	});
};

export default anchorLinks;
