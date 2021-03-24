const validateForm = () => {
	const formControls = document.querySelectorAll('.form-control');

	formControls.forEach(elem => {
		const maxAttribute = document.createAttribute('pattern'),
			titleAttribute = document.createAttribute('title');
		if (elem.name === 'fio') {
			titleAttribute.value = 'Мин. число символов - 2';
			maxAttribute.value = ".{2,}";
			elem.setAttributeNode(maxAttribute);
			elem.setAttributeNode(titleAttribute);
		} else if (elem.name === 'tel') {
			titleAttribute.value = 'Мин. число символов - 7, макс. - 13';
			maxAttribute.value = ".{7,13}";
			elem.setAttributeNode(maxAttribute);
			elem.setAttributeNode(titleAttribute);
		}
		elem.addEventListener('input', () => {
			if (elem.name === 'fio') {
				elem.value = elem.value.replace(/[^а-я' ']/i, '');
			} else if (elem.name === 'tel') {
				elem.value = elem.value.replace(/[^0-9+]/i, '');
			}
		});
	});
};

export default validateForm;
