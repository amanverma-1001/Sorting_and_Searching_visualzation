$(document).ready(function(){
    $("#type1").click(function(){
        $("#display").empty();
        var a,tmp;
        tmp=$("#uni").val();
        arr=tmp.split(",");
        a=arr.map(function(k){
            k=Number(k);
            return k;
        });
        console.log(a);
        bubblesort(a,0);
        
        
           
       
        function bubblesort(a,i){
            let t=0,flag=0;
            if(i==a.length)
            {
                return;
            }
            else{
               
              for(j=0;j<a.length-i;j++)
              {
                  
                  if(a[j]>a[j+1])
                  {
                      if(flag==0){
                    $("#display").append(`<h3>Pass ${i+1}</h3>`);
                      }
                    flag=1;
                      beforeappend(a,a[j],a[j+1]);
                      t=a[j];
                      a[j]=a[j+1];
                      a[j+1]=t;
                  }
              }
                
                console.log(a);
               setTimeout(function(){
                bubblesort(a,i+1);
            },2000);
        }}
 
 
        function beforeappend(arr,c,d)
        {
            var x="",e="";
         for(i=0;i<arr.length;i++)
         {
             if(arr[i]==c)
             {
         x+=`<div class="p-2 bg-info" style="width:50px;position:relative">${arr[i]}</div>`;
             }
             else if(arr[i]==d)
             {
                x+=`<div class="p-2 bg-info" style="width:50px;position:relative">${arr[i]}</div>`;
 
             }
             else
             {
                 x+=`<div class="p-2 bg-warning" style="width:50px">${arr[i]}</div>`;
 
             }
         }
         e=`<div class="d-inline-flex p-3 bg-secondary text-white">${x}</div>`;
         $("#display").append(e);
         var m=$("#display div:last-child div");
         for(k=0;k<arr.length;k++)
         {
             if(arr[k]==c)
             {
                $(m[k]).animate({top:`80px`},"slow");
                $(m[k]).animate({left:`50px`},"slow");
                $(m[k]).animate({top:`0px`},"slow");
                }
               if(arr[k]==d)
                {
                    $(m[k]).animate({top:`80px`},"slow");
                   $(m[k]).animate({left:`-50px`},"slow");
                   $(m[k]).animate({top:`0px`},"slow");
        
                } 
                }
            }

      
    
    });
 });