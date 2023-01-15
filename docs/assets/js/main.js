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

function formSubmit() {
	let userName = document.querySelector("#userName");
	let userEmail = document.querySelector("#userEmail");
	let textArea = document.querySelector("#inputTextArea");
	const sendMessage = document.querySelector("#sendMessage");

	sendMessage.addEventListener("click", (e) => {
		let status = [];
		e.preventDefault();
		let alphaNumericValidation = /^[(a-zA-Z)+.\-]$/;
		let emailValidation = /^[\w-\.]+@([\w-]+\.)+[a-z]{2,4}$/;
		let textAreaValidation = /(.|\s)*\S(.|\s)*/;

		if (userName.value.match(alphaNumericValidation)) {
			console.log("valid");
			userName.style.border = "1px solid #373737";
			status.push(true);

			console.log(status);
		} else {
			console.log("invalid");
			userName.style.border = "1px solid #ffc34d";
			status.splice(0, 0, false);
			console.log(status);
		}
		if (userEmail.value.match(emailValidation)) {
			console.log("valid");
			userEmail.style.border = "1px solid #373737";
			status.push(true);
			console.log(status);
		} else {
			console.log("invalid");
			userEmail.style.border = "1px solid #ffc34d";
			status.splice(1, 0, false);
			console.log(status);
		}
		if (textArea.value.match(textAreaValidation)) {
			console.log("valid");
			userEmail.style.border = "1px solid #373737";
			status.push(true);
			console.log(status);
		} else {
			console.log("invalid");
			textArea.style.border = "1px solid #ffc34d";
			status.splice(2, 0, false);
			console.log(status);
		}
		const passCredentials = status.filter((trueValue) => trueValue).length;
		console.log(passCredentials);
		console.log("number" + status.length);
		if (passCredentials == status.length) {
			confirm(
				"Email Feature is inprogress \n You can contact me at the email address provided."
			);
		}
	});
}
formSubmit();
function adjustTextareaRows() {
	const textarea = document.querySelector("#inputTextArea");
	const limit = 200;

	textarea.oninput = () => {
		textarea.style.height = "";
		textarea.style.height = Math.min(textarea.scrollHeight, limit) + "px";
	};
}
adjustTextareaRows();
