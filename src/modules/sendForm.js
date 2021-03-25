const sendForm = () => {
	const modalForm = document.getElementById('callback-form'),
		statusMessage = document.createElement('p');

	const modalCallback = document.querySelector('.modal-callback'),
		modalOverlay = document.querySelector('.modal-overlay');

	const postData = body => fetch("./server.php", {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	});
	const messageFunc = message => {
		statusMessage.textContent = message;
		setTimeout(() => {
			statusMessage.remove();
		}, 3000);
	};


	modalForm.addEventListener('submit', event => {
		event.preventDefault();
		statusMessage.textContent = 'Загрузка...';
		modalForm.appendChild(statusMessage);

		const elemData = new FormData(modalForm);
		const body = {};

		elemData.forEach((val, key) => {
			body[key] = val;
		});


		/////Ajax с fetch
		postData(body)
			.then(response => {
				if (response.status !== 200) {
					throw new Error('status network not 200');
				}
				messageFunc('Спасибо! Мы скоро с вами свяжемся');
			})
			.catch(error => {
				messageFunc('Что-то пошло не так...');
				console.error(error);
			});
		modalForm.reset();
		setTimeout(() => {
			modalCallback.style.display = 'none';
			modalOverlay.style.display = 'none';
		}, 5000);
	});


};

export default sendForm;

