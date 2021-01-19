$(document).ready(function(){
    var x="";
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
       $("#display").html(x);
       
       
          
      
       function bubblesort(a,i){
           let t=0;
           if(i==a.length-1)
           {
               return;
           }
           else{
             for(j=0;j<a.length-i;j++)
             {
                 if(a[j]>a[j+1])
                 {
                     beforeappend(a,a[j],a[j+1]);
                     t=a[j];
                     a[j]=a[j+1];
                     a[j+1]=t;
                 }
             }
               
               console.log(a);
              
               bubblesort(a,i+1);
           }
       }
    /*   function sorthere(item,i,arr)
       {
           var t=0;
         
           if(arr[i]>arr[i+1] && arr.length-1!=i)
           {
               beforeappend(arr,arr[i],arr[i+1]);
               t=arr[i];
               arr[i]=arr[i+1];
               arr[i+1]=t;
               afterappend(arr,arr[i],arr[i+1]) 
              
           }
        } */
       function beforeappend(arr,c,d)
       {
           x=x+"<div class='container mt-3 showbefore'><div class='d-inline-flex p-3 bg-secondary text-white'>";
        for(i=0;i<arr.length;i++)
        {
            if(arr[i]==c)
            {
        x=x+"<div class='p-2 bg-info moving' style='width:50px'>"+arr[i]+"</div>";
            }
            else if(arr[i]==d)
            {
                x=x+"<div class='p-2 bg-info moving2' style='width:50px'>"+arr[i]+"</div>";

            }
            else
            {
                x=x+"<div class='p-2 bg-warning' style='width:50px'>"+arr[i]+"</div>";

            }
        }
        x=x+"</div></div><br><br>";
     }
    /* function afterappend(arr,c,d)
       {
           x=x+"<div class='container mt-3 showlater'><div class='d-inline-flex p-3 bg-secondary text-white'>";
        for(i=0;i<arr.length;i++)
        {
            if(arr[i]==c)
            {
        x=x+"<div class='p-2 bg-info'>"+arr[i]+"</div>";
            }
            else if(arr[i]==d)
            {
                x=x+"<div class='p-2 bg-info'>"+arr[i]+"</div>";

            }
            else
            {
                x=x+"<div class='p-2 bg-warning'>"+arr[i]+"</div>";

            }
        }
        x=x+"</div></div><br>";
     } */
   });
      
   $("#show").click(function(){
        $(".showbefore").slideDown(5000 /*,function(){
            $(".showlater").slideDown(4000);
        }); } */
        );

 });
});

