document.addEventListener('DOMContentLoaded', function () {
	const iconMenu = document.querySelector('#icon-menu');
	const sidebarWrapper = document.querySelector('#sidebar-wrapper');
	const menuIcon = iconMenu.querySelector('img');

	function toggleSidebar() {
		sidebarWrapper.classList.toggle('active');

		const originalSrc = 'images/icons/icon-menu.svg';
		const activeSrc = 'images/icons/icon-close.svg';

		if (sidebarWrapper.classList.contains('active')) {
			menuIcon.src = activeSrc;
		} else {
			menuIcon.src = originalSrc;
		}
	}

	iconMenu.addEventListener('click', toggleSidebar);

	document.addEventListener('click', function (event) {
		if (sidebarWrapper.classList.contains('active') && !sidebarWrapper.contains(event.target) && event.target !== iconMenu) {
			toggleSidebar()
		}
	});
});