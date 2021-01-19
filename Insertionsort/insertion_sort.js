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
    console.log(x);
        insertionsort(1,x);

  function insertionsort(i,x)
  {
    if(i==x.length)
    {
        console.log("Done");
       return;
    }
   var j,tmp,t;
   t=x.map((b)=>{
       return b;
   });
   tmp=x[i];
   j=i-1
   while(j>=0 && x[j]>tmp)                                  
{
    x[j+1]=x[j];       
  j--;
  }

 x[j+1]=tmp;
 console.log(`Before function ${t}`);
 swapping(i,j+1,t)
 console.log(`After function ${x}`);

 setTimeout(function(){
 insertionsort(i+1,x);  
 },6000);    
}


function swapping(i,j,t)
{
    
    var d="",e="",init=0;
    h=50*(i-j);
    console.log(`i=${i} and j=${j}`);
if(i!=j)
{
 for(k=0;k<t.length;k++)
 {
    if(k>=j && k<=i)
    {
     d+=`<div class="p-2 bg-info" style="width:50px;position:relative">${t[k]}</div><br>`;
    }
    else{
        d+=`<div class="p-2 bg-warning" style="width:50px;position:relative">${t[k]}</div><br>`;
    }
 }
 e=`<div class="d-flex p-3 bg-secondary text-white">${d}</div>`;
 $("#contentofsort").append(e);
 var m=$("#contentofsort div:last-child div");
 for(k=0;k<t.length;k++)
 {
     if(k>=j && k<i)
     {
        $(m[k]).animate({
       left:'50px' });
        }
       if(k==i)
        {
            var v=$(m[k]);
            v.animate({ top:`100px` },"slow");
            v.animate({ left:`-${h}px`},"slow");
            v.animate({ top:`0px`},"slow");

        } 
        }
    }

    
     }

    });
});
