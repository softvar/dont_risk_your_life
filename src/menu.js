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
