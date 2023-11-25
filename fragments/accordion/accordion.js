$(document).ready(() => {
	$(".jq-title").on("click", (evt) => {
		const $this = $(evt.currentTarget);
		const $next = $this.next(".jq-content");

		$next.slideToggle();
		$this.toggleClass("accordi-active");
		$this.siblings(".jq-title").removeClass("accordi-active");
		$next.siblings(".jq-content").slideUp();
	});
});