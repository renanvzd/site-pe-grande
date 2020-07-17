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
            do {
                imgs[i] = new Image();
                imgs[i].src="../public/images/moradas-6/f"+s+".jpg";
                i++;
                s++;
            } while (i<14);
        }
    
      function carregarImg(img){
          slider.style.backgroundImage="url('"+imgs[img].src+"')";
      }
  
      function inicia(){
          preCarregamento();
          imgAtual=0;
          maxImg=imgs.length-1;
          slider=document.getElementById("dvslider-moradas");
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
  
     /* 
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
      */

      window.addEventListener("load",inicia);
      
  /*********************************** Carousel ******************/
 