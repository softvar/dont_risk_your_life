var Ce;
function Cells() {
	Ce = this;
	Ce.color = '#777';
	Ce.part = G.part === 1 ? brain : G.part === 2 ? heart : lungs;
}
Cells.prototype.update = function () {
	if (!Ce.isOneCycleCompleted) {
		Ce.cells = [];
	}

	if (G.part === 3) {
		Ce.width = 10;
		Ce.height = 10;
		B.speed = 10;
		B.globalSpeed = 10;
		B.width = 10;
		B.height = 10;
	} else if (G.part === 2) {
		Ce.width = 10;
		Ce.height = 10;
		B.speed = 10;
		B.globalSpeed = 10;
		B.width = 10;
		B.height = 10;
		B.color = '#a23939';
	} else if (G.part === 1) {
		Ce.width = 20;
		Ce.height = 20;
		B.speed = 10;
		B.globalSpeed = 10;
		B.width = 20;
		B.height = 20;
		Pa.height = 20;
		B.color = '#ffc284';
	}

	var halfPartLength = G.part === 3 ? (Ce.part[0].length * Ce.width) : (Ce.part[0].length * Ce.width)/2;
	var startX = (G.can.width / 2) - halfPartLength;
	var startY = G.part === 1 ? 50 : 170;

	var bxOffset = Math.abs(startX) % B.width;
	var byOffset = Math.abs(startY) % B.width;

	if (bxOffset !== 0) {
		if (bxOffset < Math.round(B.width / 2)) {
			startX -= bxOffset;
		} else {
			startX += (B.width - bxOffset);
		}
	}

	if (byOffset !== 0) {
		if (byOffset < Math.round(B.width / 2)) {
			startY -= byOffset;
		} else {
			startY += (B.width - byOffset);
		}
	}

	if (!Ce.isOneCycleCompleted) {
		Ce.drawCells({
			startX: startX,
			startY: startY,
			isRight: 0
		});

		startX += halfPartLength;

		if (G.part === 3) {
			Ce.drawCells({
				startX: startX,
				startY: startY,
				isRight: 1
			});
		}
	} else {
		for (var i = 0; i < Ce.cells.length; i++) {
			Ce.drawCell({
				mode: Ce.cells[i].mode,
				color: '#111',
				inColor: Ce.cells[i].mode === 1 ? '#444' : G.part === 3 ? '#fff' : G.part === 2 ? '#a23939' : '#ffc284',
				x: Ce.cells[i].x,
				y: Ce.cells[i].y
			});
		}
	}

	Ce.isOneCycleCompleted = true;
};
Cells.prototype.drawCells = function (config) {
	for (var i = 0; i < Ce.part.length; i++) {
		var sidePart = config.isRight ? Ce.part[i].slice().reverse() : Ce.part[i];
		for (var j = 0; j < sidePart.length; j++) {
			if (sidePart[j] === 1 || sidePart[j] === 2) {
				Ce.drawCell({
					mode: sidePart[j],
					color: '#111',
					inColor: Ce.part[i].mode === 1 ? '#444' : G.part === 3 ? '#fff' : G.part === 2 ? '#a23939' : '#ffc284',
					x: config.startX + (j * Ce.width),
					y: config.startY + (i * Ce.height)
				});
			}
		}
	}
};
Cells.prototype.drawCell = function (config) {
	if (!Ce.isOneCycleCompleted) {
		Ce.cells.push(config);
	}

	sv();
	fs(config.color);
	fr(config.x, config.y, Ce.width, Ce.height);
	fs(config.inColor);
	fr(config.x + 1, config.y + 1, Ce.width - 2, Ce.height - 2);
	rs();
};