let showSubscribe = function () {
	if (document.cookie.replace(/(?:(?:^|.*;\s*)subcribeShown\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {

		let subscribeElement = document.getElementById("subscribe-modal");
		subscribeElement.classList.add("modal_active");

		subscribeElement.querySelector(".modal__close").addEventListener("click", function (e) {
			this.closest(".modal").classList.remove("modal_active");
			document.cookie =
				"subcribeShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
		});

	}
};

showSubscribe();
