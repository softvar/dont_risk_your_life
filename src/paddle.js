var Pa;
function Paddle() {
	Pa = this;
	Pa.x = G.can.width / 2;
	Pa.y = G.part === 1 ? G.can.height - 55 : G.can.height - 50;
	Pa.speed = 1;
	P.vx = 5;
	P.vy = 0;
	Pa.width = 200;
	Pa.height = 10;
}
Paddle.prototype = {
	body: function () {
		sv();

		if (G.part === 3) {
			fs('#eee');
			fr(Pa.x, Pa.y, Pa.width - 30, Pa.height);
			fs('#ffa666');
			fr(Pa.x + Pa.width - 30, Pa.y, 30, Pa.height);
		} else {
			fs('#777');
			fr(Pa.x, Pa.y, Pa.width, Pa.height);
		}
		rs();
	},
	update: function () {
		Pa.body();
	},
	keyDown: function (e, key) {
		var key = key || e.keyCode;
		if (Pa.busted) { return; }

		var x = e.offsetX - (Pa.width / 2);

		if (e.offsetX <= G.can.width && e.offsetX === e.clientX) {
			x = -1 * (Pa.width / 2);
		} else if (e.offsetX >= G.can.width && e.offsetX === e.clientX) {
			x = G.can.width - (Pa.width / 2);
		}

		/*var delta = Math.round(x) % B.speed;
		if (delta < Math.floor(B.speed / 2)) {
			x -= delta;
		} else {
			x += (B.speed - delta);
		}*/

		if (key === 37 || key === 39) { // 32 is space,38 is UP, 40 is DOWN, 37 is LEFT, 39 is RIGHT
			Pa.x = Math.round(x);
			// Pa.speed += 0.02;
		}
	},
	keyUp: function (key) {
		Pa.speed = 5;
	}
};