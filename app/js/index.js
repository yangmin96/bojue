window.onload=function(){
    (function(){
        let oSelect=document.getElementById('select');
        let oList =document.getElementById('list');
        let bool;
        oSelect.onclick=function(){
            if(bool){
                oList.style.display='none';
                bool=false;
            }else{
                oList.style.display='block';
                bool=true;
            }
        }
        let oLis=document.getElementById('flag').getElementsByTagName('li');
		let oImgs=document.getElementById('banner').getElementsByTagName('img');
		let now=0;
		let timer=null;
		for(var i=0; i<oLis.length; i++){
    		oLis[i].index = i;
    		oLis[i].onmouseover = function(){
    		now = this.index;
     	    play();
    }
	}
		function play(){
            show();  
            now++;
            if(now == oImgs.length) 
			{
			now = 0;
		}
        }
		function show(){
			for(var i=0;i<oImgs.length;i++){
				oLis[i].className='';
				oImgs[i].className='';	
			}
			oImgs[now].className = "on";
            oLis[now].className = "on";
		}
        timer=setInterval(play, 2500);
        
//验证
let Ousername=document.getElementById('username');
let Ospan=document.getElementById('Ospan');
let Otel=document.getElementById('tel');
Ousername.onblur=function() {
    if(isNaN(Ousername.value)){
        Ospan.style.display="none";
        
    }
    else{
        Ospan.style.display="block";
    }

}

Otel.onblur=function() {
    if(isNaN(Otel.value)){
        Ospan2.style.display="block";
        
    }
    else{
        
        Ospan2.style.display="none";
    }

}

    })();
}