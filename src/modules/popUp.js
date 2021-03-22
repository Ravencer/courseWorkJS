const popUp = () => {
	const modalCallback = document.querySelector('.modal-callback'),
		modalOverlay = document.querySelector('.modal-overlay');

	const popUpToggle = elem => {
		if (elem && elem.classList.contains('callback-btn')) {
			modalCallback.style.display = 'block';
			modalOverlay.style.display = 'block';
		} else if (elem && (elem.closest('.modal-close') || elem.classList.contains('modal-overlay'))) {
			modalCallback.style.display = 'none';
			modalOverlay.style.display = 'none';
		}
	};

	document.body.addEventListener('click', e => {
		e.preventDefault();
		popUpToggle(e.target);
	});

};
export default popUp;
