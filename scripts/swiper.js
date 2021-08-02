var Bswiper = new Swiper("#banner", {
	loop: true,
	speed: 600,
	parallax: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: "#banner-pag",
		clickable: true,
	},
	navigation: {
		nextEl: ".Snext", // 上一頁按鈕物件
		prevEl: ".Sprev", // 下一頁按鈕物件
	},
});
// 滑鼠滑入後停止輪播
$("#banner").mouseenter(function () {
	Bswiper.autoplay.stop();
});
$("#banner").mouseleave(function () {
	Bswiper.autoplay.start();
});