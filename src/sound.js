// For sound Effects
var soundUtils = SU = {
	rd: function (a, b){
	    if(!b){
	        b = a;
	        a = 0;
	    }
		return Math.random() * (b - a) + a;
	},
	rp: function (a){
	    return a[~~this.rd(a.length)];
	},
	soundEffect: function(sid, settings){
		SU[sid] = [];

		settings.forEach(function(sound){
			var audio = new Audio();
			audio.src = jsfxr(sound);

			SU[sid].push(audio);
		});
	},
	play: function(sid) {
		if (!G.isSound) {
			return;
		}
		SU[sid] && SU.rp(SU[sid]).play();
	}
};


SU.soundEffect('gameOver', [
	[2,0.2,0.01,,0.83,0.24,,,,0.62,0.6,,,0.1248,0.4522,,,,0.4,,,,,0.6]
]);
SU.soundEffect('info', [
	[2,,0.1889,,0.111,0.2004,,,,,,,,0.1157,,,,,1,,,0.1,,1]
]);
SU.soundEffect('soundOn', [
	[2,,0.2,,0.1753,0.64,,-0.5261,,,,,,0.5522,-0.564,,,,1,,,,,0.5]
]);
SU.soundEffect('playGame', [
	[2,,0.261,0.2142,0.2005,0.4618,0.0137,-0.3602,,,,,,0.2249,0.0858,,,,1,,,0.0001,,0.44]
]);