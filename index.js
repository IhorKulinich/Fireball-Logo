const setup = (function(){
    let canvas2, ctx2, noiseZ, hue, particles, config, colorConfig, buffer32;
    
      canvas = document.getElementById("canvasFire"); 
      canvas.width = window.innerWidth = 982; 
      canvas.height = window.innerHeight = 722;
      ctx = canvas.getContext("2d"); 
    
      // var imgagelogo = new Image();
      // imgagelogo.onload = function() {
      //   ctx.drawImage(imgagelogo, 350, 220, 270, 270);
      // };
      // imgagelogo.src = 'C:/Users/COMP_650/Desktop/portfolio/joblucktou/logoimg.png';
      // ctx.globalCompositeOperation='source-in';
    
    
    const Txtr = function() { 
      this.x = circ.crdx;     
      this.y = circ.crdy;   
      this.wid = (Math.random() * 128 + 64 )/ 2; 
      this.hei = (Math.random() * 128 + 64 )/ 2; 
      this.rot = Math.random() * Math.PI * 2;  
      this.life = 44;                  
      this.r = this.g = this.b = this.txtr = 0; 
    };
    
      circ = {curAng:0, radius:10, crdx:500, crdy:260 };
      fr = {maxT:300, tt:[], ys:true, txtrs:[]}; 
      let img = new Image(); 
      fr.txtrs.push({ txtr: img, loaded: true}); 
      img.src = "https://storage.googleapis.com/jm-cors/images/fire2.png"; 
      fr.tt.push(new Txtr());
    
    const calctim = (function(){
      setInterval(function(){
        circ.crdx += Math.cos(circ.curAng) * circ.radius;
        circ.crdy += Math.sin(circ.curAng) * circ.radius;
        circ.curAng += 0.1;
        fr.ys = (circ.curAng>6.5) ? false : true;
      }, 33); 
    })();
    
    
    drawFire();
    function drawFire(){
      const rend = function(obj) {
        obj==undefined ? obj=fr.tt[0] : null;
        ctx.globalAlpha = obj.life /44;
        ctx.save();  
        ctx.translate(obj.x,obj.y);
       ctx.rotate(obj.rot); 
        // ctx.globalCompositeOperation='screen';
        ctx.drawImage(fr.txtrs[0].txtr,-obj.wid/2,-obj.hei/2,obj.wid,obj.hei);
        ctx.restore();   
      };    
      const rendC = function(n) {
        while (n--) {
          fr.tt.length === fr.maxT ? fr.tt.shift() : null;
          if (fr.ys && fr.maxT - fr.tt.length > 0) {
            let j = 0;
            while (j < Math.ceil((fr.maxT - fr.tt.length) * 0.01)) {
              fr.tt.push(new Txtr());
              j++;}
          }
          let i = fr.tt.length;
          while (i--) {
            if (fr.tt[i].life > 0) {
              rend(fr.tt[i]);
              fr.tt[i].life--;
            } else { fr.tt.splice(i, 1)}
          }
        }
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rendC(1); 
      requestAnimationFrame(drawFire, canvas);
    };
    
    
    class Particle {
      constructor(x, y) {
        this.pos = { x:x, y:y };
        this.prev = { x:x, y:y }; 
      }
      move(dir) {
        this.prev.x = this.pos.x;
        this.prev.y = this.pos.y;
        this.pos.x += Math.random() - 0.5 + dir.x;
        this.pos.y += Math.random() - 0.5 + dir.y;
      }
      border() {
        (Math.pow( Math.abs( this.pos.x - 491),2) +   Math.pow( Math.abs( this.pos.y - 361),2)) > 9000 || 
        (Math.pow( Math.abs( this.pos.x - 491),2) + Math.pow( Math.abs( this.pos.y - 361),2)) < 4000 ?
         (this.prev.x = this.pos.x = this.pos.x + 2*(491 - this.pos.x),
         this.prev.y = this.pos.y = this.pos.y + 2*(361 - this.pos.y)) : null; 
        }
      drawing() {
        ctx2.beginPath();
        ctx2.moveTo(this.prev.x, this.prev.y);
        ctx2.lineTo(this.pos.x, this.pos.y);
        ctx2.stroke();  
     }
    }
    
    const lavastart = function() {
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 0, 50% 50%, 100% -8000%, 100% 0)', 100);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 0, 50% 50%, 100% -6000%, 100% 0)', 150);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 0, 50% 50%, 100% -4000%, 100% 0)', 200);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 0, 50% 50%, 100% -2000%, 100% 0)', 300);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 0, 50% 50%, 100% 0%, 100% 0)', 450);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 0, 50% 50%, 100% 50%, 100% 0)', 650);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 0, 50% 50%, 100% 100%, 100% 0)', 900);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 0, 50% 50%, 100% 200%, 100% 0)', 1000);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 0, 50% 50%, 100% 3000%, 100% 0)', 1200);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 0, 90% 50%, 100% 4000%, 100% 0)', 1300);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 0, 90% 50%, 100% 5000%, 100% 0)', 1400);
    
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 0, 90% 50%, 100% 10000%, 100% 0)', 1500);
    
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 50% 100%)', 1500);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 40% 100%)', 1520);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 30% 100%)', 1540);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 20% 100%)', 1560);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 10% 100%)', 1580);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 0% 100%)', 1600);
    
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 90%)', 1620);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 80%)', 1640);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 70%)', 1660);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 60%)', 1680);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)', 1700);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40%)', 1720);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30%)', 1750);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20%)', 1800);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)', 1850);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)', 190);
    
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 10% 0%)', 2000);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 20% 0%)', 2100);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 30% 0%)', 2300);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 90% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 40% 0%)', 2500);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 80% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%)', 2700);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 70% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%)', 2720);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 60% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%)', 2740);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%)', 2760);
    setTimeout(() => document.getElementById("canvasLava").style.clipPath='', 2800);
    
    
    function draw() {
      requestAnimationFrame(draw);
      let a = Math.random();
      a = (a<0.25) ? 0.03 : (a<0.5) ? 0.04 : (a<0.75) ? 0.07 : 1; 
      noiseZ += a;
      calc();
    }
    draw();
    }
      setTimeout(lavastart, 700); 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      canvas2 = document.getElementById("canvasLava");
      canvas2.width = window.innerWidth = 982;
      canvas2.height = window.innerHeight = 722;
      ctx2 = canvas2.getContext("2d");
    
       // canvas3 = document.getElementById("canvas");
       // canvas3.width = window.innerWidth = 982;
       // canvas3.height = window.innerHeight = 722;
       // ctx3 = canvas3.getContext("2d");
    
      
      let image = ctx2.getImageData(0,0,982,722);
      buffer32 = new Uint32Array(image.data.buffer);
      particles = [];
      let grad = [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]], p = [], gradP = [];
    
       // var imgagelogo = new Image();
       // imgagelogo.onload = function() {
       //   ctx3.drawImage(imgagelogo, 0, 0, 982, 722);
       //  };
       //  imgagelogo.src = 'C:/Users/COMP_650/Desktop/portfolio/joblucktou/logoimg2.png';
        //ctx2.globalCompositeOperation='source-in';
    
    
      let seed = function(seed) {    
       (seed>0 && seed<1) ? (seed*=65536, seed=Math.floor(seed), (seed<256) ? (seed|=seed<<8) : null) : null;    
        for(let i = 256; i--;) {
          let r = Math.floor(Math.random() * 255);
          r = (i)&1 ? r^(seed&255) : r^(seed>>8)&255; 
          p.push(r);
          gradP.push(grad[r % 12]); 
        }
        p = p.concat(p);
        gradP = gradP.concat(gradP);
      };
    
      let simplex3 = function(xin, yin, zin) {
        pin = []; pin.push(xin,yin,zin);
        pv = pin.map(n => n+pin.reduce((total,n) => total+n)/3);
        pin = pin.map((n,i) => n-pv[i]+pv.reduce((total,n) => total+n)/6);
        pout = [...[0,0,0],...pin.map(n => (n==Math.max(...pin)) ? 1 : 0),...pin.map(n => (n==Math.min(...pin)) ? 0 : 1),...[1,1,1]];
        pv = [...pv,...pv,...pv,...pv].map(n => n&= 255);
        pin = [...pin,...pin,...pin,...pin].map((n,i) => n-pout[i]+(i-i%3)/6);
        pout = pout.map((n,i) => n+pv[i]); 
        pv=null;
        pout = [...pout.map((n,i) => (i<4) ? n=gradP[pout[3*i]+p[pout[3*i+1]+p[pout[3*i+2]] ] ] : n=null)].filter(n => n!==null);
        pout = pout.map(function(n,i){
          let k=0.6 - pin[3*i]**2-pin[3*i+1]**2-pin[3*i+2]**2;
          k<0 ? k=0 : k= k**4*(n[0]*pin[3*i]+n[1]*pin[3*i+1]+n[2]*pin[3*i+2]);
          return n=k;
        });
        let out = 32*pout.reduce((total,n)=>total+n);
        pin = pout = null;
      return out;
      };
    
    let init = function(xk, yk) {
      let numberOfParticles = 20;
      for(let i = 0; i < numberOfParticles; i++) {
        let particle = new Particle(Math.random()*59+xk, Math.random()*59+yk);//291,340,410, 521
        particles.push(particle);
      }
    }
    
      init(521, 291);
      setTimeout(() => init(521, 310), 30);
      setTimeout(() => init(521, 430), 60);
      setTimeout(() => init(521, 350), 90);
      setTimeout(() => init(521, 370), 120);
      setTimeout(() => init(521, 390), 150);
      setTimeout(() => init(521, 410), 180);
      setTimeout(() => init(471, 430), 210);
    
      setTimeout(() => init(521, 291), 240);
      setTimeout(() => init(521, 310), 270);
      setTimeout(() => init(521, 430), 300);
      setTimeout(() => init(521, 350), 330);
      setTimeout(() => init(521, 370), 360);
      setTimeout(() => init(521, 390), 390);
      setTimeout(() => init(521, 410), 420);
      setTimeout(() => init(471, 430), 450);
    
      noiseZ = 0;
      colorConfig = { particleOpacity: 0.1, baseHue: -340, hueRange: 20, hueSpeed: 0.005, colorSaturation: 100,
      };
      hue = colorConfig.baseHue; 
      seed(0);
    
    function calc() {
      hue += colorConfig.hueSpeed; 
      let h = Math.sin(hue) * colorConfig.hueRange + colorConfig.baseHue;
    ctx2.strokeStyle = `hsla(${h}, ${colorConfig.colorSaturation}%, 50%, ${colorConfig.particleOpacity})`;
      let x, y;
      particles.forEach(p => {
        x = p.pos.x / 3;
        y = p.pos.y / 3;
        let dir = { x:0, y:0 };
        (x>=0 && x<328 && y>=0 && y<241) 
        ? ( color=buffer32[y*3*982+x*3], (!color) ?
          (dir.x = simplex3(x/80, y/80, noiseZ), 
          dir.y = simplex3(x/80+40000,y/80+40000,noiseZ)): null) : null;
        p.move(dir);
        p.border();
        p.drawing();
      });
    }
    
    
    })();
    
    
    
    
    
    
    
    
    //const fu = (function(a){})(1);