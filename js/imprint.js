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

function insertEmail() {
	document.getElementById("contact-mail").innerHTML =
		"<p>E-Mail:</p><a href='mailto:denisholts@woodythe.dev'>denisholts@woodythe.dev</a>";
}

insertEmail();
initCopyrightYear();
