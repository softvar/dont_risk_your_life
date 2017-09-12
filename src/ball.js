var B, CC;

function Ball(config) {
	B = this;
	config = config || {};
	// B.lw = B.w = 0;
	B.width = 10;
	B.height = 10;
	B.slope = 1;
	B.xDirection = 1;
	B.yDirection = 1;
	B.globalSpeed = 10;
	B.speed = 10;
	B.color = '#fff';
	B.numCollided = 0;
	B.maxCollisions = 10;

	CC.w = utils.pI(G.can.width);
	CC.h = utils.pI(G.can.height);

	B.add();
	return B;
}

Ball.prototype = {
	add: function (val) {
		B.x = 80;
		B.y = 700;

		return B;
	},
	setSlope: function (Bxr) {
		var shift = (Bxr - Pa.x);
		// var normalizeShift = shift / Pa.width;
		var boxNumOnPaddle = Math.abs(Math.floor(shift / 10));

		switch (boxNumOnPaddle) {
			case 0:
				B.slope = 0.1;
				B.speed = B.globalSpeed + 5;
			case 1:
			case 20:
				B.slope = 0.3;
				B.speed = B.globalSpeed + 4;
				break;
			case 2:
			case 19:
				B.slope = 0.5;
				B.speed = B.globalSpeed + 3;
				break;
			case 3:
			case 18:
				B.slope = 0.7;
				B.speed = B.globalSpeed + 2;
				break;
			case 4:
			case 17:
				B.slope = 0.9;
				B.speed = B.globalSpeed + 1;
				break;
			case 5:
			case 16:
				B.slope = 1.5;
				B.speed = B.globalSpeed + 5;
				break;
			case 6:
			case 15:
				B.slope = 2;
				B.speed = B.globalSpeed + 4;
				break;
			case 7:
			case 14:
				B.slope = 4;
				B.speed = B.globalSpeed + 3;
				break;
			case 8:
			case 13:
				B.slope = 7;
				B.speed = B.globalSpeed + 2;
				break;
			case 9:
			case 12:
				B.slope = 15;
				B.speed = B.globalSpeed + 1;
				break;
			case 10:
			case 11:
				B.slope = Infinity;
				B.speed = B.globalSpeed;
				break;
		}
		SU.play('playGame');
	},
	checkCollision: function () {
		var y, x;

		var bxOffset = Math.abs(B.x) % B.width;
		var byOffset = Math.abs(B.y) % B.width;
		var bxr, Byr;

		if (bxOffset !== 0) {
			if (bxOffset < Math.round(B.width / 2)) {
				Bxr = B.x - bxOffset;
			} else {
				Bxr = B.x + (B.width - bxOffset);
			}
		} else {
			Bxr = B.x;
		}

		if (byOffset !== 0) {
			if (byOffset < Math.round(B.width / 2)) {
				Byr = B.y - byOffset;
			} else {
				Byr = B.y + (B.width - byOffset);
			}
		} else {
			Byr = B.y;
		}

		// Need to move with a constant speed
		// Check if slope is greater tha 1, which means x should be equal to ball speed
		if (B.slope === Infinity) {
			x = 0;
			y = B.speed;
		} else if (B.slope <= 1) {
			x = B.speed;
			y = B.slope * x;

			/*if (y % 10 !== 0) {
				var nF = (x/y);
				y = y * nF;
				x = x * nF;
			}*/
		} else {
			y = B.speed;
			x = y / B.slope;

			/*if (x % 10 !== 0) {
				var nF = (y/x);
				y = y * nF;
				x = x * nF;
			}*/
		}

		// Check y direction collision with walls
		if (Byr >= (G.can.height - B.height)) {
			B.yDirection = -1;
			B.y -= y;
			B.numCollided += 1;
			SU.play('playGame');
		} else if (Byr <= 0) {
			B.yDirection = 1;
			B.y += y;
			SU.play('playGame');
		}



		// Check x direction collision with walls
		if (Bxr >= (G.can.width - B.width)) {
			B.xDirection = -1;
			B.x -= x;
			SU.play('playGame');
		} else if (Bxr <= 0) {
			B.xDirection = 1;
			B.x += x;
			SU.play('playGame');
		}

		// Check collision
		for (var i = 0; i < Ce.cells.length; i++) {
			var Cx = Ce.cells[i].x,
				Cy = Ce.cells[i].y;

			if (Ce.cells[i].mode !== 1) { continue; }

			// top
			if (B.yDirection === 1 &&
				Byr + B.height === Cy && Bxr === Cx && Bxr + B.width === Cx + Ce.width) {
				B.yDirection = -1;
				B.y -= y;
				Ce.cells[i].mode = 2;
				SU.play('playGame');
				break;
			} else if (B.yDirection === -1 &&
				Byr === Cy + Ce.height && Bxr === Cx && Bxr + B.width === Cx + Ce.width) { // bottom
				B.yDirection = 1;
				B.y += y;
				Ce.cells[i].mode = 2;
				SU.play('playGame');
				break;
			} else if (B.xDirection === 1 && B.slope !== Infinity &&
				Bxr + B.width === Cx && Byr === Cy && Byr + B.height === Cy + Ce.height) { // left
				B.xDirection = -1;
				B.x -= x;
				Ce.cells[i].mode = 2;
				SU.play('playGame');
				break;
			} else if (B.xDirection === -1 && B.slope !== Infinity &&
				Bxr === Cx + Ce.width && Byr === Cy && Byr + B.height === Cy + Ce.height) { // right
				B.xDirection = 1;
				B.x += x;
				Ce.cells[i].mode = 2;
				SU.play('playGame');
				break;
			}
		}

		// Paddle collision
		if (Byr >= Pa.y && Byr <= Pa.y + Pa.height) {
			if ((Bxr >= Pa.x + (Pa.width / 2) - 20) &&
				(Bxr + B.width <= Pa.x + (Pa.width / 2) + 20)
			) { // center hit
				B.setSlope(Bxr);
				// B.slope = Infinity;
				B.yDirection = -1;
				// B.y -= y;
			} else if (B.xDirection === -1 &&
				Bxr >= Pa.x + Pa.width / 2 &&
				Bxr <= Pa.x + Pa.width
				// Coming from RIGHT and hit RIGHT side of paddle
			) {
				B.setSlope(Bxr);
				B.yDirection = -1;
				// B.y -= y;
				B.xDirection = 1;
				// B.x += x;
				// B.slope = 1;

			} else if (B.xDirection === 1 &&
				Bxr + B.width <= Pa.x + Pa.width / 2 &&
				Bxr >= Pa.x
			) { // Coming from LEFT and hit LEFT side of paddle
				B.setSlope(Bxr);
				B.yDirection = -1;
				// B.y -= y;
				B.xDirection = -1;
				// B.x -= x;
				// B.slope = 1;
			} else if (Bxr + B.width >= Pa.x &&
				Bxr <= Pa.x + Pa.width &&
				Bxr + B.width <= Pa.x + Pa.width
			) { // Coming from RIGHT and hit LEFT side of paddle and vice-versa

				B.setSlope(Bxr);
				B.yDirection = -1;
				// B.y -= y;
				// B.slope = 1;
			}
		}
		// console.log(B.x, B.y)

		// When ball is inside the walls
		if ((Byr > 0 && Byr < (G.can.height - B.height)) &&
			(Bxr > 0 && Bxr < (G.can.width - B.width))
		) {
			// Check x directions and move it accordingly
			if (B.xDirection === 1) {
				B.x += x;
			} else {
				B.x -= x;
			}

			// Check y directions and move it accordingly
			if (B.yDirection === 1) {
				B.y += y;
			} else {
				B.y -= y;
			}
		}

		var counts = {};

		for (var i = 0; i < Ce.cells.length; i++) {
		  var num = Ce.cells[i].mode;
		  counts[num] = counts[num] ? counts[num] + 1 : 1;
		}

		var t1 = 'CELLS  LEFT:  ' + counts[1];
		var t2 = 'LIVES  LEFT:  ' + (B.maxCollisions - B.numCollided);
		var t3 = 'S K I P  : /';

		ctx.fillStyle = '#fff';
		ctx.font = '12px Helvetica';

		ctx.fillText(t1, 25, 25);
		ctx.fillText(t2, G.can.width - 110, 25);

		ctx.fillText(t3, G.can.width - 80, G.can.height - 20);

		var isDone = Ce.cells.every(function (c) {
			return c.mode === 2;
		});

		if (isDone) {
			canvasToImage();
			// setTimeout(function () {
				if (G.part === 1 || G.part === 2 || G.part === 3) {
					SP.show();
				} else {
					G.stopCycle();
				}
			// }, 1000)
		}
		if (B.numCollided >= B.maxCollisions) {
			B.gameOver();
			setTimeout(function () {
				G.restart();
			}, 2500);
		}

	},
	gameOver: function () {
		var t = 'G A M E  O V E R';

		ctx.fillStyle = 'rgb(255, 56, 8)';
		ctx.font = '45px Helvetica';
		ctx.fillText(t, (G.can.width - ctx.measureText(t).width) / 2, G.can.height / 2.1);
		// SU.play('gameOver')
	},
	update: function (instance) {
		instance = instance || B;
		var x = instance.x,
			y = instance.y;
		sv();

		fs('#444');
		fr(x, y, instance.width, instance.height);
		fs(B.color);
		fr(x + 1, y + 1, instance.width - 2, instance.height - 2);
		rs();

		if (B.numCollided >= B.maxCollisions) {
			B.gameOver();
		} else {
			B.checkCollision();
		}
	},
	mouseDown: function (e, x, y) {
		if (x >= G.can.width - 80 && x <= G.can.width - 10 &&
            y >= G.can.height - 30 && y <= G.can.height - 10) {
            SU.play('playGame');
			SP.show();
		}
	}
};
