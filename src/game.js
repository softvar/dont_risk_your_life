var G, ctx, CC, background, player, cells, paddle;
function Game() {
	G = this;
	G.isMobile = window.isMobile;
	G.isInProgress = true;
	G.canSpeedBeIncreased = G.canExplode = true;
	G.backgroundColor = '#222';

	G.karma = 0;

	G.highscore = utils.getLocalStorageData() || 0;
	G.isSound = utils.getLocalStorageData(true);
	if (G.isSound !== 0) {
		G.isSound = 1;
	}

	G.resolution = 1;
	G.curPos = [];

	G.can = document.querySelector('canvas');
	G.can.width = P.w;
	G.can.height = P.h;

	ctx = G.ctx = window.c = G.can.getContext('2d');

	G.part = 1;

	// Resizing
	G.resize();
	addEventListener('resize', G.resize, false);

	CC = document.getElementById('canvascontainer').style;

	document.body.addEventListener('touchstart', G.touchStart.bind(G), false);
	document.body.addEventListener('touchmove', G.touchMove.bind(G), false);
	document.body.addEventListener('touchend', G.touchEnd.bind(G), false);
	document.body.addEventListener('mousedown', G.mouseDown.bind(G), false);
	document.body.addEventListener('mousemove', G.mouseMove.bind(G), false);
	document.body.addEventListener('mouseup', G.mouseUp.bind(G), false);

	document.body.addEventListener('keydown', G.keyDown.bind(G), false);
	document.body.addEventListener('keyup', G.keyUp.bind(G), false);

	// Loop
	G.frameCount = 0;
	G.lastFrame = G.frameCountStart = Date.now();

	var displayablePixels = _.innerWidth * _.innerHeight * _.devicePixelRatio,
		gamePixels = P.w * P.h,
		ratio = displayablePixels / gamePixels;

	if (ratio < 0.5){
		G.setResolution(ratio * 2);
	}

	G.speed = 1;

	// background animation
	// background = new Background();
	// flameBack.canvas = G.can;
	// flameBack.init();

	G.menu = true;
}

var tree, time;
Game.prototype = {
	restart: function () {
		G.isGameOver = false;
		G.isInProgress = true;
		G.karma = 0;
		G.speed = 1;
		G.gameStartTime = new Date().getTime();


		blw = 200, bw =0;
		G.ball = new Ball();


		if (G.part === 2 || G.part === 3) {
			player = new Body();
		}
		cells = new Cells();
		paddle = new Paddle();

		G.raf = raf(function(){
			if (G.raf) {
				G.cycle();
				raf(arguments.callee);
			}
		});
	},
	stopCycle: function () {
		canvasToImage();

		G.isGameOver = true;
		G.isInProgress = false;
		G.part = 1;
		player = null;

		// flameBack.update();
		// canvasToImage(); // get image before spash screen

   		// console.log('Boom! DIE!');
   		// update high score
   		// if (G.karma > G.highscore) {
   		// 	SU.play('highestScore');
   		// 	G.highscore = G.karma;
   		// 	utils.setLocalStorageData(G.karma);
   		// }

   		SU.play('gameOver');

  		G.menu = new Menu();
	},
	cycle: function () {
		var now = new Date().getTime();
		dt = now - time;

		if (dt < (1000 / fps))
			return; // skip a frame

		//SU.play('game');
		time = now;
		if (G.menu) {
			G.menu.update && G.menu.update();
			return;
		}
		if (SP.is) {
			SP && SP.update();
			return;
		}

		fs(G.backgroundColor);
		fr(0, 0, CC.w, CC.h);


		// background.burnBurnBurn();
		// weather.update();

		ctx.font = '15px Comic Sans';
		// ctx.fillStyle = thisWeather.hexToRgb(thisWeather.getColor(true), 1.0);
		ctx.fillText('KARMA: ' + G.karma, 25, 25);
		ctx.fillText('SPEED: ' + G.speed.toFixed(1) + ' mph', G.can.width - 130, 25);
		// ctx.fillText('WIND:  ' + WD.speed.toFixed(1) + ' mph W', G.can.width - 130, 45);
		ctx.lineWidth = 3;

		player && player.update();
		cells && cells.update();
		paddle && paddle.update();
		G.ball && G.ball.update();
	},
	resize: function() {
		setTimeout(function(){
			var maxWidth = innerWidth,
				maxHeight = innerHeight,

				availableRatio = maxWidth / maxHeight,
				baseRatio = P.w / P.h,
				ratioDifference = abs(availableRatio - baseRatio),
				width,
				height,
				s = document.getElementById('canvascontainer').style;

			if (availableRatio <= baseRatio){
				width = maxWidth;
				height = maxHeight;//width / baseRatio;
			} else{
				height = maxHeight;
				width = height * baseRatio;
			}

			s.width = width + 'px';
			s.height = height + 'px';

			ctx.globalCompositeOperation="lighter";

			G.can.width = width;
			G.can.height = height;


			if (G.menu) {
				G.menu = new Menu();
				G.raf = raf(function(){
					if (G.raf) {
						G.cycle();
						raf(arguments.callee);
					}
				});
				return;
			}

			G.restart();

		},100);
	},
	pos: function(e){
		var rect = G.can.getBoundingClientRect(),
			pos = [];

		e = e.touches || [e];

		for(var i = 0 ; i < e.length ; i++){
			pos.push({
				x : (e[i].clientX),// - rect.left) / (rect.width / P.w),
				y : (e[i].clientY)// - rect.top) / (rect.height / P.h)
			})
		}

		return pos;
	},
	touchStart: function(e,m) {
		e.preventDefault();
		G.touch = G.touch || !m;
		var p = G.pos(e);
		G.curPos = p;

		scrollTo(0, 1);

		var x = G.curPos[0].x - G.can.offsetLeft,
			y = G.curPos[0].y - G.can.offsetTop;
		if (G.menu) {
			G.menu.mouseDown && G.menu.mouseDown(e, x, y);
		} else if (G.splash.is) {
			G.splash.mouseDown && G.splash.mouseDown(e, x, y);
		}
		G.ball && G.ball.mouseDown && G.ball.mouseDown(e, x, y);

		if(!G.isInProgress) return;

		//G.world.touchStart();
	},
	touchMove: function(e) {
		e.preventDefault();

		if (G.curPos && G.curPos.length) {

			if (!G.isInProgress) return;

			if (G.curPos[0].x > G.pos(e)[0].x) {
				G.keyDown(e, 37);
			} else if (G.curPos[0].x < G.pos(e)[0].x) {
				G.keyDown(e, 39);
			}

			G.curPos = G.pos(e);
		}
	},
	touchEnd: function(e) {
		e.preventDefault();

		var p = G.curPos[0];
		// G.curPos = null;

		if (!G.isInProgress) {
			//!G.isInProgress.click(p.x, p.y);
		} else {
			//G.world.touchEnd();
		}
	},
	keyDown: function(e, key) {
		// 13 is enter
		if ((e.keyCode === 13 || e.keyCode === 32) && G.menu) {
			G.menu = null;
            G.restart();
            SU.play('playGame');
			return;
		}
		if (!G.isInProgress) {
			return;
		}

		// 39 is right, 40 is down, 38 is up
		if (key === 37 || key === 39) {
			paddle && paddle.keyDown(e, key);
		}
	},
	keyUp: function(e) {
		if (!G.isInProgress) return;
		paddle && paddle.keyUp(e.keyCode);
	},
	mouseDown: function(e) {
		// if (!G.touch) {
			G.touchStart(e);
		// }
	},
	mouseMove: function(e) {
		// if (!G.touch) {
			G.touchMove(e);
		// }
	},
	mouseUp: function(e) {
		// if (!G.touch) {
			G.touchEnd(e);
		// }
	},
	setResolution: function(r) {
		G.can.width = P.w * r;
		G.can.height = P.h * r;

		G.resolution = r;
	}
}