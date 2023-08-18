'use strict';


window.onload = function () {
	let sidebarItems = document.querySelectorAll('.sidebar__wrap-item');
	sidebarItems.forEach(element => {
		element.addEventListener("click", () => {
			if (element.classList.contains('active')) {
				return
			} else {
				sidebarItems.forEach(element => {
					element.classList.remove('active');
				});
				element.classList.add('active');
			}
		});
	});
};

// window.onload = function () {
// 	let sidebarItems = document.querySelectorAll('.sidebar__item_click');
// 	let selectedItem = sidebarItems[0]

// 	sidebarItems.forEach(element => {
// 		element.addEventListener("click", () => {
// 			if (element.classList.contains('active')) {
// 				return
// 			}

// 			if (selectedItem) {
// 				selectedItem.classList.remove('active');
// 			}
// 			element.classList.add('active');
// 			selectedItem = element
// 		});
// 	});
// };