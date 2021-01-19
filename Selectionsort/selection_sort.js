$(document).ready(function(){
    var a,n,x,i,z="";
    $("button").click(function(){
    n=$("#takeinput").val();
    a=n.split(",");
    
    x=a.map((i)=>{
        i=Number(i);
        z=z+`<div>${i}</div>`;
        console.log(typeof(i));
        return i;
    });
    y=`<div class='flex-container'>${z}</div>`;
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
        console.log(`min position is ${pos}`);
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
  h=120*(pos-i);
   console.log(h);
    for(j=0;j<x.length;j++)
    {
      if(j==i)
      {
          d+=`<div>${x[j]}</div>`;
      }
      else if(j==pos)
      {
          d+=`<div class="move2">${x[pos]}</div>`;
      }
      else
      {
          d+=`<div>${x[j]}</div>`;
      }
    }
    e=`<div class="flex-container">${d}</div>`;
    $("#contentofsort").append(e);
   m=$("#contentofsort div:last-child div");
   $(m[i]).animate({top:`100px`},"slow");
   $(m[i]).animate({left:`${h}px`},"slow");
   $(m[i]).animate({top:`0px`},"slow");
   $(m[pos]).animate({top:`100px`},"slow");
   $(m[pos]).animate({left:`-${h}px`},"slow");
   $(m[pos]).animate({top:`0px`},"slow");
}   


});
});