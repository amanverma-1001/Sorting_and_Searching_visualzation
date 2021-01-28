$(document).ready(function(){
    var a,n,x,i;
    $("button").click(function(){
    
    $("#contentofsort").empty();
    var z="",l="";
    n=$("#takeinput").val();
    a=n.split(",");
    l=`<p>The elements entered are :</p>`;
    x=a.map((i)=>{
        i=Number(i);
        z+=`<div  class="p-2 bg-warning" style="width:50px;position:relative">${i}</div>`;
        console.log(typeof(i));
        return i;
    });
    y=`${l}<div class="d-inline-flex p-2 bg-secondary text-white mb-3">${z}</div>`;
    $("#contentofsort").append(y);
    console.log(x);
        selectionsort(0,x);


        
        
            function selectionsort(i,x)
          {
                 var t=0,min=0;
              if (i==x.length)
              {
            
            console.log("done");
            return;
        }
        else{
        pos=i;
        for(j=i;j<x.length;j++)
        {
            if(x[j]<x[pos])
                pos=j;
        }

        swap(i,pos,x);
    }
}

function swap(i,pos,x){
       beforeswap(i,pos,x);
        t=x[i];
        x[i]=x[pos];
        x[pos]=t;
        console.log(x);
     setTimeout(function(){
        selectionsort(i+1,x); }, 3000);
     }

function beforeswap(i,pos,x)
{
   var d="";
   var e="",m="",h=0;
  h=50*(pos-i);
   console.log(h);
    for(j=0;j<x.length;j++)
    {
      if(j==i)
      {
        d+=`<div class="p-2 bg-info" style="width:50px;position:relative">${x[j]}</div>`;
      }
      else if(j==pos)
      {
        d+=`<div class="p-2 bg-success" style="width:50px;position:relative">${x[j]}</div>`;
      }
      else
      {
        d+=`<div class="p-2 bg-warning" style="width:50px;position:relative">${x[j]}</div>`;
      }
    }
    e=`<div class="d-inline-flex p-3 bg-secondary text-white mb-3">${d}</div>`;
    $("#contentofsort").append(e);
   m=$("#contentofsort div:last-child div");
   $(m[i]).animate({top:`80px`},"slow");
   $(m[i]).animate({left:`${h}px`},"slow");
   $(m[i]).animate({top:`0px`},"slow");
   $(m[pos]).animate({top:`80px`},"slow");
   $(m[pos]).animate({left:`-${h}px`},"slow");
   $(m[pos]).animate({top:`0px`},"slow");
}   


});
});