// Vibration api
navigator.vibrate = (function(){
    return navigator.vibrate
        || navigator.mozVibrate
        || navigator.webkitVibrate
        || noop;
})();

// Utility functions
var utils = {
	/**
	 * Get a random number between the specified values
	 * @param  {Number} min
	 * @param  {Number} max
	 * @return {Number}
	 */
	getRandomInt: function (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	/**
	 * Shorthand for parseInt with radix 10
	 * @param  {Number} value
	 * @return {Number}
	 */
	pI: function (value) {
		return parseInt(value, 10);
	},
	/**
	 * Clamp value between specified limits
	 * @param  {Number} value - value to be clamped
	 * @param  {Number} min   - min value
	 * @param  {Number} max   - max value
	 * @return {Number}       - desired clamped value
	 */
	clamp: function (value, min, max) {
		if (typeof min !== 'number') { min = -Infinity; }
		if (typeof max !== 'number') { max = Infinity; }
		return Math.max(min, Math.min(max, value));
	},
	/**
	 * Get local storage data decode it before using it
	 * @param  {Boolean} isSound
	 * @return {String}
	 */
	getLocalStorageData: function (isSound) {
		if (!isSound) {
			return utils.pI(atob(localStorage.getItem('__js13k_game_karma'))) || 0;
		}
		return utils.pI(atob(localStorage.getItem('__js13k_game_sound')));
	},
	/**
	 * Save data to local storage
	 * @param {String/Number}  data
	 * @param {Boolean} isSoundData - for saving sound preferences
	 */
	setLocalStorageData: function (data, isSoundData) {
		if (!isSoundData) {
			localStorage.setItem('__js13k_game_karma', btoa(data));
		} else {
			localStorage.setItem('__js13k_game_sound', btoa(data))
		}

	}
};
/* Jsfxr lib for sound effects */

function J(){this.B=function(e){for(var f=0;24>f;f++)this[String.fromCharCode(97+f)]=e[f]||0;0.01>this.c&&(this.c=0.01);e=this.b+this.c+this.e;0.18>e&&(e=0.18/e,this.b*=e,this.c*=e,this.e*=e)}}
			var W=new function(){this.A=new J;var e,f,d,g,l,z,K,L,M,A,m,N;this.reset=function(){var c=this.A;g=100/(c.f*c.f+0.001);l=100/(c.g*c.g+0.001);z=1-0.01*c.h*c.h*c.h;K=1E-6*-c.i*c.i*c.i;c.a||(m=0.5-c.n/2,N=5E-5*-c.o);L=0<c.l?1-0.9*c.l*c.l:1+10*c.l*c.l;M=0;A=1==c.m?0:2E4*(1-c.m)*(1-c.m)+32};this.D=function(){this.reset();var c=this.A;e=1E5*c.b*c.b;f=1E5*c.c*c.c;d=1E5*c.e*c.e+10;return e+f+d|0};this.C=function(c,O){var a=this.A,P=1!=a.s||a.v,r=0.1*a.v*a.v,Q=1+3E-4*a.w,n=0.1*a.s*a.s*a.s,X=1+1E-4*a.t,Y=1!=
			a.s,Z=a.x*a.x,$=a.g,R=a.q||a.r,aa=0.2*a.r*a.r*a.r,D=a.q*a.q*(0>a.q?-1020:1020),S=a.p?(2E4*(1-a.p)*(1-a.p)|0)+32:0,ba=a.d,T=a.j/2,ca=0.01*a.k*a.k,E=a.a,F=e,da=1/e,ea=1/f,fa=1/d,a=5/(1+20*a.u*a.u)*(0.01+n);0.8<a&&(a=0.8);for(var a=1-a,G=!1,U=0,v=0,w=0,B=0,t=0,x,u=0,h,p=0,s,H=0,b,V=0,q,I=0,C=Array(1024),y=Array(32),k=C.length;k--;)C[k]=0;for(k=y.length;k--;)y[k]=2*Math.random()-1;for(k=0;k<O;k++){if(G)return k;S&&++V>=S&&(V=0,this.reset());A&&++M>=A&&(A=0,g*=L);z+=K;g*=z;g>l&&(g=l,0<$&&(G=!0));h=g;0<
			T&&(I+=ca,h*=1+Math.sin(I)*T);h|=0;8>h&&(h=8);E||(m+=N,0>m?m=0:0.5<m&&(m=0.5));if(++v>F)switch(v=0,++U){case 1:F=f;break;case 2:F=d}switch(U){case 0:w=v*da;break;case 1:w=1+2*(1-v*ea)*ba;break;case 2:w=1-v*fa;break;case 3:w=0,G=!0}R&&(D+=aa,s=D|0,0>s?s=-s:1023<s&&(s=1023));P&&Q&&(r*=Q,1E-5>r?r=1E-5:0.1<r&&(r=0.1));q=0;for(var ga=8;ga--;){p++;if(p>=h&&(p%=h,3==E))for(x=y.length;x--;)y[x]=2*Math.random()-1;switch(E){case 0:b=p/h<m?0.5:-0.5;break;case 1:b=1-2*(p/h);break;case 2:b=p/h;b=0.5<b?6.28318531*
			(b-1):6.28318531*b;b=0>b?1.27323954*b+0.405284735*b*b:1.27323954*b-0.405284735*b*b;b=0>b?0.225*(b*-b-b)+b:0.225*(b*b-b)+b;break;case 3:b=y[Math.abs(32*p/h|0)]}P&&(x=u,n*=X,0>n?n=0:0.1<n&&(n=0.1),Y?(t+=(b-u)*n,t*=a):(u=b,t=0),u+=t,B+=u-x,b=B*=1-r);R&&(C[H%1024]=b,b+=C[(H-s+1024)%1024],H++);q+=b}q=0.125*q*w*Z;c[k]=1<=q?32767:-1>=q?-32768:32767*q|0}return O}};
			window.jsfxr=function(e){W.A.B(e);var f=W.D();e=new Uint8Array(4*((f+1)/2|0)+44);var f=2*W.C(new Uint16Array(e.buffer,44),f),d=new Uint32Array(e.buffer,0,44);d[0]=1179011410;d[1]=f+36;d[2]=1163280727;d[3]=544501094;d[4]=16;d[5]=65537;d[6]=44100;d[7]=88200;d[8]=1048578;d[9]=1635017060;d[10]=f;for(var f=f+44,d=0,g="data:audio/wav;base64,";d<f;d+=3)var l=e[d]<<16|e[d+1]<<8|e[d+2],g=g+("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l>>18]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l>>
			12&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l>>6&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l&63]);d-=f;return g.slice(0,g.length-d)+"==".slice(0,d)};
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
var lungs = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],

	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
	[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
	[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
	[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
	[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],

	[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],

	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],

	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],

	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],

	[0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var brain = [
	[ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ],
	[ ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ],
	[ ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ],
	[ ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ],
	[ ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , ,  ,  ,  , 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ],

];
var heart = [
	[ ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  , 1, 1,  , 1, 1, 1,  , 1, 1,  , 1, 1,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  , 1,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ],
	[ ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ],
	[ ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ],
	[ , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ],
	[ , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ],
	[ ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ],
	[ ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ],
	[ ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ],
	[ ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ],
	[ ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ],
	[ ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ],
	[ ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ],
	[ , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ],
	[ , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  , 1, 1, 1, 1, 1,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  , 1, 1, 1,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  , 1,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ],
	[ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ],
];
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
var MN, splash;
function Menu() {
    MN = this;
    this.y = 0;
    this.font = '50px Helvetica';
    this.fireColor = 'rgb(255, 56, 8)';

    ctx.fillStyle = '#222'
    ctx.fillRect(0, 0, G.can.width, G.can.height);

    splash = new Splash();
    this.heat = MN.getHeatMap();
    this.noise = null;
    this.noise = MN.getNoise(G.can.width, G.can.height*8);
    ctx.drawImage(this.heat, 0, 0);
    this.update();
}
Menu.prototype = {
    getNoise: function () {
        var canvas = document.createElement('canvas');
        canvas.width = G.can.width;
        canvas.height = G.can.height;
        var ctx = canvas.getContext('2d');

        var w = canvas.width, h = canvas.height,
            img = ctx.createImageData(w, h),
            n = w * h * 4;

        for(var i = 0; i < n; i+=4) {
            img.data[i] = 15;
            img.data[i+1] = 3;
            img.data[i+2] = 1;
            img.data[i+3] = Math.floor(Math.random() * 128);
        }
        sv();
        ctx.putImageData(img, 0, 0);
        ctx.drawImage(canvas, 0, 0, w * 64, h * 64);
        ctx.globalAlpha = 0.5;
        ctx.drawImage(canvas, 0, 0, w * 16, h * 16);
        var img = ctx.getImageData(0, 0, w, h);
        // increase contrast a bit by clamping values
        for (var i = 3; i < w * h * 4; i += 4){
            if (img.data[i] > 220){
                img.data[i] = 255;
            }
            if (img.data[i] < 40){
                img.data[i] = 0;
            }
        }
        ctx.putImageData(img, 0, 0);
        rs();
        return canvas;
    },
    getHeatMap: function () {
        var canvas = document.createElement('canvas');
        canvas.width = G.can.width;
        canvas.height = G.can.height;

        var ctx = canvas.getContext('2d');
        sv();
        var w = G.can.width,
            h = G.can.height,
            color = MN.fireColor,
            firstText = G.isGameOver ? 'WELL PLAYED' : 'DO NOT'
            firstSecondText = 'NOT',
            secondText = G.isGameOver ? 'YOU SAVED' : 'PLAY';
            thirdText = G.isGameOver ? 'THE' : 'WITH LIFE';
            fText = G.isGameOver ? 'LOST MAN' : '';


        firstText = firstText.split('').join('   ');
        secondText = secondText.split('').join('   ');
        thirdText = thirdText.split('').join('   ');
        fText = fText.split('').join(' ');

        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.font = MN.font;

        var m1 = ctx.measureText(firstText);
        var m2 = ctx.measureText(secondText);
        var m3 = ctx.measureText(thirdText);
        var m4 = ctx.measureText(fText);

        ctx.fillStyle = '#fff';
        if (!G.isGameOver) {
            ctx.fillText('D   O', (w - m1.width) / 2, (h / 2) - 270);
            ctx.fillStyle = MN.fireColor;
            ctx.fillText('N   O   T', (w - m1.width + 400 ) / 2, (h / 2) - 270);
        } else {
            ctx.fillText(firstText, (w - m1.width) / 2, (h / 2) - 270);
        }
        ctx.fillStyle = '#fff';
        ctx.fillText(secondText, (w - m2.width) / 2, (h / 2) - 180);
        G.isGameOver ? ctx.fillStyle = MN.fireColor : ctx.fillStyle = '#fff';
        ctx.fillText(thirdText, (w - m3.width) / 2, (h / 2) - 90);

        if (fText) {
            ctx.fillText(fText, (w - m4.width) / 2, (h / 2) - 0);
        }
        ctx.lineWidth = 10;

        if (!G.isInfoMenu) {

            // Sound circle
            ctx.beginPath();
            ctx.arc(w*(2/4), h/1.2, 30, 0, 2 * Math.PI, false);
            ctx.fillStyle = '#555';
            ctx.closePath();
            ctx.fill();

            // Rules / Instructions circle
            /*ctx.beginPath();
            ctx.arc(w*(3/4), h/1.2, 30, 0, 2 * Math.PI, false);
            ctx.fillStyle = '#555';
            ctx.closePath();
            ctx.fill();*/

            // sound icon
            ctx.beginPath();
            ctx.moveTo(w*(2/4) - 20, h/1.2 - 10);
            ctx.lineTo(w*(2/4) - 20, h/1.2 + 5);
            ctx.lineTo(w*(2/4) - 10, h/1.2 + 5);
            ctx.lineTo(w*(2/4) + 5, h/1.2 + 15);
            ctx.lineTo(w*(2/4) + 5, h/1.2 - 20);
            ctx.lineTo(w*(2/4) - 10, h/1.2 - 10);
            ctx.fillStyle = '#222';
            ctx.closePath();
            if (G.isSound) {
                ctx.fillRect(w*(2/4) + 10, h/1.2 - 5, 3, 10);
                ctx.fillRect(w*(2/4) + 15, h/1.2 - 7, 3, 15);
                ctx.fillRect(w*(2/4) + 20, h/1.2 - 10, 3, 20);
            }
            ctx.fill();

            // if no sound, show / on icon
            if (!G.isSound) {
                ctx.save();
                ctx.beginPath();
                    ctx.moveTo(w*(2/4) + 10, h/1.2 - 22);
                    ctx.lineTo(w*(2/4) - 10, h/1.2 + 22);
                ctx.closePath();
                ctx.fill();
                ctx.lineWidth = 5;
                ctx.strokeStyle = '#000';
                ctx.stroke();
                ctx.restore();
            }

            // instructions icon
            /*ctx.fillRect(w*(3/4) - 2, h/1.2, 5, 15);
            ctx.beginPath();
            ctx.arc(w*(3/4), h/1.2 - 10, 5, 0, 2 * Math.PI, false);
            ctx.closePath();
            ctx.fillStyle = '#222';
            ctx.fill();*/

            if (G.isGameOver) {
                ctx.fillStyle = '#fff';
                ctx.font = '35px Helvetica';

                ctx.lineWidth = 10;

                ctx.beginPath();
                    ctx.arc(w*(2/4), h/1.06 , 30, 0, 2 * Math.PI, false);
                    ctx.fillStyle = '#555';
                ctx.closePath();
                ctx.fill();

                // download icon
                ctx.beginPath();
                    ctx.moveTo(w*(2/4) - 10, h/1.06 - 15);
                    ctx.lineTo(w*(2/4) - 10, h/1.06 - 15 + 15);
                    ctx.lineTo(w*(2/4) - 20, h/1.06 - 15 + 15);

                    ctx.lineTo(w*(2/4), h/1.06 - 15 + 35);
                    ctx.lineTo(w*(2/4) + 20, h/1.06 - 15 + 15);

                    ctx.lineTo(w*(2/4) + 10, h/1.06 - 15 + 15);
                    ctx.lineTo(w*(2/4) + 10, h/1.06 - 15);

                    ctx.fillStyle = '#222';
                ctx.closePath();
                ctx.fill();
            }

            // Play button
            ctx.beginPath();
                ctx.arc(w/2, h/1.6, 50, 0, 2 * Math.PI, false);
                ctx.fillStyle = '#793f02';
            ctx.closePath();
            ctx.fill();

            var tw = 20, th = h/1.6 - tw;
            ctx.beginPath();
                ctx.moveTo(w/2 - tw/2, th);
                ctx.lineTo(w/2 + tw, th + 20);
                ctx.lineTo(w/2 - tw/2, th + 40);
                ctx.fillStyle = '#fff';
            ctx.closePath();
            ctx.fill();
        } else {
            // back button

        }
        rs();
        return canvas;
    },
     process: function () {
        sv();
        // cooldown factor
        ctx.globalAlpha = 0.25;
        ctx.globalCompositeOperation = 'source-over';
        // movement speed of cooldown map
        MN.y = (MN.y + 3) % MN.noise.height;
        // flickering of cooldown map
        x = Math.round(Math.random() * 5) * 0;
        ctx.drawImage(MN.noise, x, MN.y);
        ctx.drawImage(MN.noise, x, MN.y - MN.noise.height);

        // spread of the flame
        ctx.globalAlpha = 1.0;
        // whind
        x = 1 - Math.random() * 2;
        // move flame up
        ctx.drawImage(G.can, x, -1);
        ctx.globalAlpha = 0.13;
        ctx.globalCompositeOperation = 'lighter';
        ctx.drawImage(G.can, x, -1);

        // heat it up
        ctx.globalAlpha = 0.22;
        ctx.drawImage(MN.heat, 0, 0);

        bp();
        // ctx.globalAlpha = 0.52;
        cp();
        fl();
        rs();
    },
    mouseDown: function (e, x, y) {
        var w = G.can.width,
            h = G.can.height,
            ctx = MN.heat.getContext('2d');

        var hFactor = G.isMobile() ? 10 : 4.4;

        if (x >= w/2 - 50 && x <= w/2 + 50 &&
            y >= h/1.6 - 50 && y <= h/1.6 + 50) {
            // play btn clicked
            G.menu = null;
            splash.show(1);
            SU.play('playGame');
        } else if (x >= w*(2/4) - 30 && x <= w*(2/4) + 30 &&
            y >= h/1.06 - 30 && y <= h/1.06 + 30) {
            // download clicked
            downloadCanvas();
            SU.play('download');
        } else if (x >= w*(2/4) - 30 && x <= w*(2/4) + 30 &&
            y >= h/1.2 - 30 && y <= h/1.2 + 30) {
            // sound clicked
            G.isSound = +(!G.isSound);
            G.isSound && SU.play('soundOn');
            utils.setLocalStorageData(G.isSound, true);
            MN.heat = MN.getHeatMap();
        } else if (x >= w*(3/4) - 30 && x <= w*(3/4) + 30 &&
            y >= h/1.2 - 30 && y <= h/1.2 + 30) {
            // info clicked
            G.isInfoMenu = true;
            MN.heat = MN.getHeatMap();
            SU.play('info');
        } else if (x >= w*(1/10) - 30 && x <= w*(1/10) + 30 &&
            y >= h/hFactor - 30 && y <= h/hFactor + 30) {
            // back btn clicked
            G.isInfoMenu = false;
            MN.heat = MN.getHeatMap();
            SU.play('info');
        }
    },
    update: function () {
        // this.noise = MN.getNoise(G.can.width, G.can.height * 8);
        // MN.process();
        this.heat = MN.getHeatMap();
        this.noise = null;
        this.noise = MN.getNoise(G.can.width, G.can.height*8);
        ctx.drawImage(this.heat, 0, 0);
    }
};

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
var _ = window,
raf = (function() {
	return  _.requestAnimationFrame     ||
    _.webkitRequestAnimationFrame 		||
    _.mozRequestAnimationFrame    		||

    function(c){
        setTimeout(c, 1000 / 60);
    };
})(),
M       = Math,
abs     = M.abs,
min     = M.min,
max     = M.max,
to      = setTimeout,
fps     = 60;

// Shortcuts
var p = CanvasRenderingContext2D.prototype;
p.fr = p.fillRect;
p.sv = p.save;
p.rs = p.restore;
p.lt = p.lineTo;
p.mt = p.moveTo;
p.sc = p.scale;
p.bp = p.beginPath;
p.cp = p.closePath;
p.rt = p.rotate;
p.ft = p.fillText;
p.bct = p.bezierCurveTo;
p.qct = p.quadraticCurveTo;
p.st = p.stroke;
p.ar = p.arc;
p.fl = p.fill;

// ctx.ellipsis wont work in firefox
p.el = function drawEllipseWithQuatraticCurve(ctx, x, y, w, h, style) {
    var kappa = .5522848,
        ox = (w / 2) * kappa, // control point offset horizontal
        oy = (h / 2) * kappa, // control point offset vertical
        xe = x + w,           // x-end
        ye = y + h,           // y-end
        xm = x + w / 2,       // x-middle
        ym = y + h / 2;       // y-middle

    sv();
    bp();
    mt(x, ym);
    qct(x,y,xm,y);
    qct(xe,y,xe,ym);
    qct(xe,ye,xm,ye);
    qct(x,ye,x,ym);
    ctx.strokeStyle = style ? style : '#000';
    ctx.lineWidth = 2;
    st();
    rs();
    fl();
}

p.fs = function(p){
    this.fillStyle = P.inverted ? invert(p) : p;
};
p.sts = function(p){
    this.strokeStyle = P.inverted ? invert(p) : p;
};

// Adding all these functions to the global scope
for(var i in p){
    _[i] = (function(f){
        return function(){
            c[f].apply(c, arguments);
        }
    })(i);
}

_.isMobile = function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent)) {
      return true;
    }
    return false;
}

var P = {
	w: _.isMobile() ? 640 : 800,
	h: 760,
	g: 800,
	fireOffset: 70,
    spikesOffset: 50,
    tbOffset: 20
};

function canvasToImage() {
    G.dataURL = document.getElementById('game-canvas').toDataURL('image/png');
}

function downloadCanvas() {
    var windowRef = _.open();
    if (windowRef) {
        windowRef.document.write('<img src="' + G.dataURL + '"/>');
    } else {
        alert('Your browser prevented the window from opening. Please allow to view game screenshot.')
    }
}

addEventListener('DOMContentLoaded',function(){
	_._can  = document.querySelector('canvas');
    new Game();
});

