var SP;

function Splash() {
	SP = this;
	G.splash = SP;
	SP.is = 0;
}
Splash.prototype = {
	show: function (number) {
		if (SP.num === 8) {
			G.stopCycle();
		}
		SP.is = 1;
		SP.num = number || SP.num;
	},
	hide: function () {
		SP.is = 0;
	},
	addBtn: function (isLeft) {
		var hFactor = 2.1;
		var w = G.can.width;
		var h = G.can.height;

		w = isLeft ? w/10 - 30: w - 50;

		var sign = isLeft ? 1 : -1;
		ctx.beginPath();
		ctx.arc(w, h/hFactor, 30, 0, 2 * Math.PI, false);
		ctx.fillStyle = '#555';
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		    ctx.moveTo(w, h/hFactor-(sign * 5));
		    ctx.lineTo(w, h/hFactor-(sign * 5) - (sign * 10));
		    ctx.lineTo(w - (sign * 20), h/hFactor-(sign * 5) + (sign * 5));
		    ctx.lineTo(w, h/hFactor-(sign * 5) + (sign * 20));
		    ctx.lineTo(w, h/hFactor-(sign * 5) + (sign * 10));
		    ctx.lineTo(w + (sign * 20), h/hFactor-(sign * 5) + (sign * 10));
		    ctx.lineTo(w + (sign * 20), h/hFactor-(sign * 5));
		ctx.closePath();
		ctx.fillStyle = '#222';
		ctx.fill();
	},
	mouseDown: function (e, x, y) {
		var w = G.can.width;
		var h = G.can.height;

		if (x >= w*(1/10) - 30 - 30 && x <= w*(1/10) - 30 + 30 &&
            y >= h/2.1 - 30 && y <= h/2.1 + 30) {
            // back btn clicked
            SP.num -= 1;
            SU.play('info');
        } else if (x >= (w-50) - 30 && x <= (w-50) + 30 &&
            y >= h/2.1 - 30 && y <= h/2.1 + 30) {
            // forward btn clicked
            SP.num += 1;
            SU.play('info');
            if (SP.num === 4 || SP.num === 6 || SP.num === 8) {
            	SP.is = 0;
            	if (SP.num === 6) {G.part = 2;}
            	if (SP.num === 8) {G.part = 3;}
            	G.restart();
            }
        }
	},
	addNavigationBtns: function () {
		SP.addBtn(0);
		if (SP.num >= 2) {
			SP.addBtn(1);
		}
	},
	getText: function () {
		var text = [];
		switch (SP.num) {
			case 1:
				text = [
					'A MAN STARTED',
					'LOSING',
					'HIS LIFE',
					'THE DAY',
					'HE STARTED...'
				];
				config = {
					color: [0, 1, 0, 0, 0]
				};
				break;
			case 2:
				text = [
					'LEVEL 1',
					'DRUGS'
				];
				config = {
					color: [0, 1]
				};
				break;
			case 3:
			case 5:
			case 7:
				text = [
					'LIT UP ALL THE CELLS',
					// 'CELLS',
					'OF DAMAGED ' + (SP.num === 3 ? 'BRAIN' : SP.num === 5 ? 'HEART' : 'LUNGS'),
					'OF A',
					'LOST MAN',
					'BY',
					'Moving the mouse to position the paddle and avoiding the',
					'moving cell to cross paddle and hit bottom more than 10 times.',
					'Note: Moving cell can cross the already lit cell. Don\'t be LOST!'
				];
				config = {
					color: [0, 0, 0, 1, 0, 2, 2, 2]
				};
				break;
			case 4:
				text = [
					'LEVEL 2',
					'DRINKING'
				];
				config = {
					color: [0, 1]
				};
				break;
			case 6:
				text = [
					'LEVEL 3',
					'SMOKING'
				];
				config = {
					color: [0, 1]
				};
				break;
		}

		return {
			text: text,
			config: config
		};
	},
	update: function () {
		if (SP.is) {
			fs('#222');
			fr(0, 0, G.can.width, G.can.height);

			SP.addNavigationBtns();

			var w = G.can.width;
			var h = G.can.height;
			var text = SP.getText().text;
			var config = SP.getText().config;
			var alm;

			for (var i = 0; i < text.length; i++) {
				var tOffset = (text.length - 1) * 0.5;

				if (config.color[i] === 1) {
					hOffset = i * 95;
					alm = text[i].split('').join('  ');
					ctx.fillStyle = 'rgb(255, 56, 8)';
					ctx.font = '45px Helvetica';
				} else if (config.color[i] === 2) {
					if (config.color[i - 1] === 2) {
						hOffset = i * 85;
					} else {
						hOffset = i * 95;
					}
					alm = text[i].split('').join('');
					ctx.fillStyle = '#fff';
					ctx.font = '25px Helvetica';
				} else {
					hOffset = i * 95;
					alm = text[i].split('').join('  ');
					ctx.fillStyle = '#fff';
					ctx.font = '35px Helvetica';
				}
				ctx.fillText(
					alm,
					(w - ctx.measureText(alm).width) / 2,
					h / (2 + (tOffset)) + hOffset
				);
			}
		}
	}
}