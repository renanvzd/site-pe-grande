var imgs=[];
var slider;
var imgAtual;
var maxImg;
var tmp;
var tempoTroca;
var vtempo;
var vload;
  
      function preCarregamento(){
        var s=1;  
        var i=0;
        var url_string = window.location.href;
        var url = new URL(url_string);
        var lofts = 'http://localhost:3000/moradas/lofts';
        switch (url) {
            case 'lofts':
                do {
                    imgs[i] = new Image();
                    imgs[i].src="../public/images/moradas/s"+s+".jpg";
                    i++;
                    s++;
                } while (i<3);
            break;
            case 'http://localhost:3000/moradas/casa':
                do {
                    imgs[i] = new Image();
                    imgs[i].src="../public/images/moradas/s"+s+".jpg";
                    i++;
                    s++;
                } while (i<3);
            break;
            default:
            res.render('home-guest');
            break;
        }
    }
      
  
      function carregarImg(img){
          slider.style.backgroundImage="url('"+imgs[img].src+"')";
      }
  
      function inicia(){
          preCarregamento();
          imgAtual=0;
          maxImg=imgs.length-1;
          slider=document.getElementById("dvslider");
          vbarra=document.getElementById("dvbarra");
          carregarImg(imgAtual);
          tempoTroca=0;
          anima();
      }
  
      function troca(dir){
          tempoTroca=0;
          imgAtual+=dir;
          if(imgAtual>maxImg){
              imgAtual=0;
          }else if(imgAtual<0){
              imgAtual=maxImg;
          }
          carregarImg(imgAtual);
      }
  
      function anima(){
          tempoTroca++;
          if(tempoTroca >= 200){
              tempoTroca=0;
              troca(1);
          }
          vtempo=tempoTroca/5;
          vbarra.style.width=vtempo+"%";
          window.requestAnimationFrame(anima);
      }
  
      window.addEventListener("load",inicia);
      
  /*********************************** Carousel ******************/
 