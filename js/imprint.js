function initCopyrightYear() {
	const year = new Date().getFullYear();
	document.getElementById(
		"copyright-text"
	).innerHTML = `Copyright © ${year} WoodyTheDev. All Rights Reserved.`;
}

function insertEmail() {
	document.getElementById("contact-mail").innerHTML =
		"<p>E-Mail:</p><a href='mailto:denisholts@woodythe.dev'>denisholts@woodythe.dev</a>";
}

insertEmail();
initCopyrightYear();
