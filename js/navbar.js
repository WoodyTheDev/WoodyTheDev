const navbar = document.querySelector("nav");
const burger = document.querySelector("#menu-btn");
const languageList = document.querySelector("#drop-lang-list");
const menuList = document.querySelector("#menu-list");
const overlay = document.querySelector("#overlay");
const text = document.querySelector("p");
const languageBtn = document.querySelector("#lang-btn");

function getWidthScrollbar() {
	let element;
	if (document.getElementById("home")) {
		element = document.getElementById("home");
	} else {
		element = document.getElementById("content-container");
	}
	return document.body.clientWidth - element.scrollWidth;
}

function initLanguageBtnMenu() {
	function eventAction(event) {
		if (event.target.id == "lang-btn") {
			navbar.classList.toggle("open");
			languageBtn.classList.toggle("open");
			if (languageList.classList.contains("appear")) {
				languageList.classList.remove("appear");
				languageList.classList.add("disappear");
			} else {
				languageList.classList.add("appear");
				languageList.classList.remove("disappear");
			}
		}
	}
	languageBtn.addEventListener("click", eventAction);
}

function initLanguageBtns() {
	let path = window.location.pathname;
	let page = path.split("/").pop();

	document.getElementById("btn-de").addEventListener("click", function () {
		window.location.href = "/" + page;
	});
	document.getElementById("btn-en").addEventListener("click", function () {

		window.location.href = "/en/" + page;
	});
}

function initBurgerClickEvent() {
	menuList.style.top = navbar.offsetHeight + "px";

	function eventAction() {
		navbar.classList.toggle("open");
		burger.classList.toggle("open");
		if (menuList.classList.contains("open")) {
			menuList.classList.remove("open");
			menuList.classList.add("closed");
		} else {
			menuList.classList.remove("closed");
			menuList.classList.add("open");
		}

		if (overlay.classList.contains("active")) {
			overlay.classList.remove("active");
			overlay.classList.add("inactive");
		} else {
			overlay.classList.remove("inactive");
			overlay.classList.add("active");
		}

		text.classList.toggle("blur");
	}
	burger.addEventListener("click", eventAction);
}

function initHideElementsOnClick() {
	function eventAction(e) {
		const isClosestToMenuBtn = e.target.closest("#menu-btn");
		const isClosestToLangBtn = e.target.closest("#lang-btn");
		if (!isClosestToMenuBtn && !isClosestToLangBtn) {
			navbar.classList.remove("open");
			if (overlay.classList.contains("active"))
				overlay.classList.add("inactive");
			overlay.classList.remove("active");
			burger.classList.remove("open");
			if (menuList.classList.contains("open")) menuList.classList.add("closed");
			menuList.classList.remove("open");
			languageBtn.classList.remove("open");
			if (languageList.classList.contains("appear"))
				languageList.classList.add("disappear");
			languageList.classList.remove("appear");
			text.classList.remove("blur");
		} else if (!isClosestToMenuBtn) {
			if (overlay.classList.contains("active"))
				overlay.classList.add("inactive");
			overlay.classList.remove("active");
			burger.classList.remove("open");
			if (menuList.classList.contains("open")) menuList.classList.add("closed");
			menuList.classList.remove("open");
			text.classList.remove("blur");
		} else if (!isClosestToLangBtn) {
			languageBtn.classList.remove("open");
			if (languageList.classList.contains("appear"))
				languageList.classList.add("disappear");
			languageList.classList.remove("appear");
		}
	}
	document.addEventListener("click", eventAction);
}

function initWidth() {
	if (document.getElementById("home")) {
		document
			.querySelector(":root")
			.style.setProperty("--scrollbar-width", getWidthScrollbar() + "px");
	} else {
		document
			.querySelector(":root")
			.style.setProperty("--scrollbar-width", "0px");
	}
}

initWidth();
window.onresize = initWidth;
initLanguageBtnMenu();
initLanguageBtns();
initBurgerClickEvent();
initHideElementsOnClick();
