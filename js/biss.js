(function () {
	/* (화면의 크기에 따른) 배경이미지의 크기를 조절하는 함수 */
	function changeSizeOfBg() {
		if (1280 > document.documentElement.clientWidth) {
			document.querySelector(".bg_box").style.height = "100%";
		}
		else {
			document.querySelector(".bg_box").style.height = "";
		}
	}

	/* 처음 화면을 load할 때, 배경이미지 크기 조절 */
	document.addEventListener("DOMContentLoaded", changeSizeOfBg);

	/* 화면을 resize할 때, 배경이미지 크기 조절 */
	window.addEventListener("resize", changeSizeOfBg);


	/* 배경이미지 슬라이드쇼 효과 */
	var bgImages = [];
	var numImages = 3; // 이미지 개수
	for (var i = 0; i < numImages; i++) {
		bgImages[i] = new Image();
		bgImages[i].src = "img/bg" + (i + 1) + ".jpg";
	}

	var step = 0;

	var elImg = document.querySelector('.bg_img');

	function slideBg() {
		if (!document.images) { return; }
		document.querySelector(".bg_box").style.backgroundColor = "#fff";

		/* opacity 효과 */
		elImg.style.opacity = 0.3;
		var nTime = setInterval(function () {
			var _nPre = parseFloat(elImg.style.opacity);
			elImg.style.opacity = _nPre + 0.009;
			if (_nPre > 1.0) {
				clearInterval(nTime);
			}
		}, 17);
		/* //opacity 효과 */

		elImg.src = bgImages[step].src;
		if (step < 2) {
			step++;
		}
		else {
			step = 0;
		}
		setTimeout(slideBg, 7000);	// 7초 마다 반복
	}

	slideBg();

})();