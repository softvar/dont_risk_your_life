var Bo;

function Body () {
	Bo = this;
	Bo.outlineColor = '#fff';


	Bo.addOutline();
	return Bo;
}
Body.prototype.update = function () {
	Bo.addOutline();
};
Body.prototype.halfSideOutline = function (sign) {
	var c = G.can.width / 2;

	sv();
	bp();
	sts('#444');
	ctx.lineWidth = 3;

	// straight neck line
	mt(c - (80 * sign), 50);
	qct(c - (80 * sign), 105, c - (80 * sign), 105);

	// neck round
	mt(c - (80 * sign), 105);
	qct(c - (80 * sign), 145, c - (270 * sign), 155);

	// shoulder arm
	mt(c - (270 * sign), 155);
	qct(c - (315 * sign), 163, c - (330 * sign), 205);

	// shoulder curve
	mt(c - (330 * sign), 205);
	qct(c - (335 * sign), 240, c - (335 * sign), 315);

	// shoulder connecting downwards
	mt(c - (325 * sign), 295);
	qct(c - (355 * sign), 340, c - (360 * sign), 470);

	// small line shoulder outside
	mt(c - (360 * sign), 470);
	qct(c - (360 * sign), 470, c - (365 * sign), 490);

	// shoulder inside curve
	mt(c - (260 * sign), 270);
	qct(c - (240 * sign), 370, c - (260 * sign), 430);

	// shoulder inside straight line
	mt(c - (260 * sign), 430);
	qct(c - (260 * sign), 430, c - (280 * sign), 490);

	// shoulder inside straight V line
	mt(c - (260 * sign), 430);
	qct(c - (260 * sign), 430, c - (235 * sign), 490);

	ctx.stroke();
}
Body.prototype.addOutline = function () {
	// LEFT
	Bo.halfSideOutline(1);
	// RIGHT
	Bo.halfSideOutline(-1);
};
