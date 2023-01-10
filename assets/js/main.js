function animateMenuButton() {
	const menu = document.querySelector(".menu-button-container");
	const menuBtton = document.createElement("div");
	menuBtton.setAttribute("class", "menu-button");
	let isMenuOpen = false;
	menu.append(menuBtton);
	menu.addEventListener("click", (e) => {
		const showLists = document.querySelectorAll(".nav-link");

		showLists.forEach((showList) => {
			showList.style.opacity = "0";
			showList.style.paddingLeft = "10px";
		});
		if (!isMenuOpen) {
			menu.classList.add("open");
			isMenuOpen = true;

			for (let i = 0; showLists.length; i++) {
				showLists[i].style.animationName = "animationNavList";
				showLists[i].style.animationDuration = ".3s";
				showLists[i].style.animationTimingFunctions = "linear";
				showLists[i].style.animationDelay = `0.${i}0s`;
				showLists[i].style.animationFillMode = "forwards";
			}
		} else {
			menu.classList.remove("open");
			isMenuOpen = false;
		}
	});
}

animateMenuButton();

function webPageResponsive() {
	let toolItem = document.querySelector(".tools");
	let tools = document.querySelectorAll(".each-tool");
	let toolContent = document.querySelectorAll(".tool-container");
	let labelnames = document.querySelectorAll(".tool-name");

	onload = () => {
		for (let i = 0; i < tools.length; i++) {
			if (toolItem.clientWidth < 767) {
				toolContent[i].classList.add("justify-content-center");
				labelnames[i].style.display = "none";
			} else {
				toolContent[i].classList.remove("justify-content-center");
				labelnames[i].style.display = "block";
			}
		}
	};
	onresize = () => {
		labelnames.forEach((labelname) => {
			for (let i = 0; i < tools.length; i++) {
				if (toolItem.clientWidth < 767) {
					toolContent[i].classList.add("justify-content-center");
					labelnames[i].style.display = "none";
				} else {
					toolContent[i].classList.remove("justify-content-center");
					labelnames[i].style.display = "block";
				}
			}
		});
	};
}
webPageResponsive();

function submitMessage() {
	const sendMessageBtn = document.querySelector("#sendMessage");
	sendMessageBtn.addEventListener("click", (e) => {
		e.preventDefault();
	});
}
function adjustTextareaRows() {
	const textarea = document.querySelector("#inputTextArea");
	const limit = 200;

	textarea.oninput = () => {
		textarea.style.height = "";
		textarea.style.height = Math.min(textarea.scrollHeight, limit) + "px";
	};
}
adjustTextareaRows();
