const SCROLL_SWIPE_LEFT = "left";
const SCROLL_SWIPE_RIGHT = "right";
let swiperList;
let prevScrollPos = 0;
let scrollAtEnd = SCROLL_SWIPE_LEFT;

function initFadeIn() {
	const faders = document.querySelectorAll(".fade-in");
	const appearOptions = {
		threshold: 1,
		rootMargin: "0px 0px -100px 0px",
	};
	const appearOnScroll = new IntersectionObserver(function (
		entries,
		appearOnScroll
	) {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.add("appear");
				appearOnScroll.unobserve(entry.target);
			}
		});
	},
	appearOptions);
	faders.forEach((fader) => {
		appearOnScroll.observe(fader);
	});
}

function initSlideIn() {
	const sliders = document.querySelectorAll(".slide-in");
	const appearOptions = {
		threshold: 0,
		rootMargin: "0px 0px -150px 0px",
	};
	const appearOnScroll = new IntersectionObserver(function (
		entries,
		appearOnScroll
	) {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.add("appear");
				appearOnScroll.unobserve(entry.target);
			}
		});
	},
	appearOptions);
	sliders.forEach((slider) => {
		appearOnScroll.observe(slider);
	});
}

function initSendEmailButton() {
	document.getElementById("form-submit").addEventListener("click", function () {
		const name = document.getElementById("form-name").value;
		const email = document.getElementById("form-email").value;
		const subject = document.getElementById("form-subject").value;
		const message = document.getElementById("form-message").value;

		if (name && email && subject && message) {
			const xhr = new XMLHttpRequest(); // Create an XMLHttpRequest object
			const url = new URL(window.location.href).origin + "/php/sendMail.php"; // URL of the PHP script
			const data = {
				action: "send_mail",
				subject: subject,
				email: email,
				name: name,
				message: message,
			}; // Data to send to the server
			xhr.open("POST", url, true); // Initialize the request with method, URL, and async flag
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // Set the request header
			xhr.onload = function () {
				// Define the callback function for successful requests
				if (xhr.status === 200) {
					// If the status code is 200 (OK)
					const header = document.querySelector("#contact h1");
					const textAnimation = document.querySelector(
						"#contact .text-animation-wrapper"
					);
					const textContent = document.querySelector("#contact .content-text");
					const emailForm = document.querySelector("#email-form");
					if (CURRENT_LANGUAGE === LANGUAGE.DE) {
						header.innerHTML = "Vielen Dank!";
					} else if (CURRENT_LANGUAGE === LANGUAGE.EN) {
						header.innerHTML = "Thank you!";
					}
					textAnimation.remove();
					if (CURRENT_LANGUAGE === LANGUAGE.DE) {
						textContent.innerHTML =
							"Ihre Nachricht wurde erfolgreich versendet. Ich werde mich so schnell wie möglich bei Ihnen melden.";
					} else if (CURRENT_LANGUAGE === LANGUAGE.EN) {
						textContent.innerHTML =
							"Your message has been sent successfully. I will get back to you as soon as possible.";
					}
					textContent.classList.remove("text-animation-margin");
					textContent.classList.add("text-success-margin");
					emailForm.remove();
				}
			};
			xhr.onerror = function () {
				console.log(xhr.status); // Log the status code to the console
			};
			xhr.send(JSON.stringify(data)); // Send the request with the data in the body
		}
	});
}

function openGoogleMaps() {
	const iframe = document.createElement("iframe");
	iframe.id = "gmap_canvas";
	iframe.src =
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d168064.77775877144!2d9.543588802793373!3d48.83890999188071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799abc497576d3d%3A0x41ffd3c8d096fe0!2sSpraitbach!5e0!3m2!1sde!2sde!4v1711700956277!5m2!1sde!2sde";
	iframe.frameborder = "0";
	iframe.marginheight = "0";
	iframe.marginwidth = "0";
	document.getElementById("mapbtn").remove();
	document
		.getElementById("contact")
		.querySelector(".content-split-map")
		.appendChild(iframe);
}

function initCopyrightYear() {
	const year = new Date().getFullYear();
	if (CURRENT_LANGUAGE === LANGUAGE.DE) {
		document.getElementById(
			"copyright-text"
		).innerHTML = `Copyright © ${year} WoodyTheDev. Einige Rechte vorbehalten.`;
	} else if (CURRENT_LANGUAGE === LANGUAGE.EN) {
		document.getElementById(
			"copyright-text"
		).innerHTML = `Copyright © ${year} WoodyTheDev. Some Rights Reserved.`;
	}
}

function initBulletChartHover() {
	const bulletPoints = document.querySelectorAll("[data-bullet]");
	function hoverOverChart(event) {
		let bulletNumber = event.target.dataset.bullet;
		if (!bulletNumber) {
			bulletNumber = event.target.closest("[data-bullet]").dataset.bullet;
		}
		if (bulletNumber) {
			activateBulletpoint(bulletNumber);
			activateBar(window.frontendChart, bulletNumber);
			activateBar(window.backendChart, bulletNumber);
		}
	}
	bulletPoints.forEach((el) => {
		el.addEventListener("mouseover", hoverOverChart);
	});
}

function activateBar(chart, bulletNumber) {
	chart.setActiveElements([{ datasetIndex: 0, index: bulletNumber - 1 }]);
	chart.update();
}

function activateBulletpoint(bulletNumber) {
	const divElements = document.querySelectorAll("[data-bullet]");
	divElements.forEach((el) => {
		if (el.dataset.bullet == bulletNumber) {
			el.classList.add("active");
		} else {
			el.classList.remove("active");
		}
	});
}

function initSwiper() {
	swiperList = new Swiper(".swiper", {
		loop: true,
		//Pagination points
		pagination: {
			el: ".swiper-pagination",
		},
		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	initBlockSwipeOnScroll(swiperList[0]);
	initBlockSwipeOnScroll(swiperList[1]);
}

function initBlockSwipeOnScroll(swiper) {
	document.querySelectorAll(".bulletpoints-container").forEach((el) => {
		el.addEventListener(
			"touchstart",
			function (e) {
				e.stopPropagation();
				if (swiper.allowTouchMove) {
					swiper.allowTouchMove = false;
					swiper.update();
				}
				prevScrollPos = e.touches[0].clientX;
				scrollAtEnd = getScrollAtEnd(el);
			},
			{ passive: true }
		);
		el.addEventListener("touchend", function (e) {
			e.stopPropagation();
			if (
				scrollAtEnd == SCROLL_SWIPE_LEFT &&
				getTouchDirection(e) == SCROLL_SWIPE_LEFT
			) {
				swiper.slidePrev();
			} else if (
				scrollAtEnd == SCROLL_SWIPE_RIGHT &&
				getTouchDirection(e) == SCROLL_SWIPE_RIGHT
			) {
				swiper.slideNext();
			}
		});
	});
	document.querySelector(".swiper").addEventListener(
		"touchstart",
		function (e) {
			if (!swiper.allowTouchMove) {
				swiper.allowTouchMove = true;
				swiper.update();
			}
		},
		{ passive: true }
	);
}

function getTouchDirection(e) {
	if (prevScrollPos - e.changedTouches[0].clientX > 0) {
		return SCROLL_SWIPE_RIGHT;
	} else {
		return SCROLL_SWIPE_LEFT;
	}
}

function getScrollAtEnd(el) {
	if (el.scrollLeft == 0) {
		return SCROLL_SWIPE_LEFT;
	} else if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
		return SCROLL_SWIPE_RIGHT;
	} else {
		return null;
	}
}

function resizeFunction() {
	initWidth();
	swiperList[0].update();
	swiperList[1].update();
}

initSlideIn();
initBulletChartHover();
initSendEmailButton();
initCopyrightYear();
initSwiper();
window.onresize = resizeFunction;
