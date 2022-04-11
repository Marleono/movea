const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play__wrap');
const videoUrl = document.querySelector('iframe');

buttonsModal.forEach((button, index) => {
	button.addEventListener('click', () => {
		modalWindow.classList.add('active');
	})
});

modalWindow.addEventListener('click', () => {
	modalWindow.classList.remove('active');
	videoUrl.src = '';
})