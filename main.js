function functionality2()
{
    var val=document.getElementById("first").value;// takes input value
    
    var xhr1= new XMLHttpRequest();
        xhr1.open("GET","https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+val+"");
        xhr1.send();
         
    var data;
   
    xhr1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         data=JSON.parse(this.responseText);//changing the data into json format 
         console.log(data);
		 var items=data.drinks.length
		 if(items<6)
		 {
			 if(items%2==0)
			 {
				 var j=items/2;
				 for(var i=0;i<(items/2);i++)
				 {
					console.log(data.drinks[i].strDrink);
					$("#cont").append('<div class="post" style="margin-left:125px"><img src='+data.drinks[i].strDrinkThumb+' alt=""><div class="post-s"><h2>'+data.drinks[i].strDrink+'</h2></div><br></div><br><br>'); 
					$("#cont").append('<div class="post" style="margin-left:850px;margin-top:-420px"><img src='+data.drinks[i+j].strDrinkThumb+' alt=""><div class="post-s"><h2>'+data.drinks[i+j].strDrink+'</h2></div></div><br><br>'); 
			   
				 }
			 }
			 else if(items==1)
			 {
				$("#cont").append('<div class="post" style="margin-left:125px"><img src='+data.drinks[0].strDrinkThumb+' alt=""><div class="post-s"><h2>'+data.drinks[0].strDrink+'</h2></div><br></div><br><br>'); 
			 }
			 else if(items==3)
			 {
				 for(var i=0;i<1;i++)
				 {
					console.log(data.drinks[i].strDrink);
					$("#cont").append('<div class="post" style="margin-left:125px"><img src='+data.drinks[i].strDrinkThumb+' alt=""><div class="post-s"><h2>'+data.drinks[i].strDrink+'</h2></div><br></div><br><br>'); 
					$("#cont").append('<div class="post" style="margin-left:850px;margin-top:-420px"><img src='+data.drinks[i+1].strDrinkThumb+' alt=""><div class="post-s"><h2>'+data.drinks[i+1].strDrink+'</h2></div></div><br><br>'); 
			   
				 }
				 $("#cont").append('<div class="post" style="margin-left:125px"><img src='+data.drinks[2].strDrinkThumb+' alt=""><div class="post-s"><h2>'+data.drinks[2].strDrink+'</h2></div><br></div><br><br>'); 
			 }
			 else
			 {
				  for(var i=0;i<1;i++)
				 {
					console.log(data.drinks[i].strDrink);
					$("#cont").append('<div class="post" style="margin-left:125px"><img src='+data.drinks[i].strDrinkThumb+' alt=""><div class="post-s"><h2>'+data.drinks[i].strDrink+'</h2></div><br></div><br><br>'); 
					$("#cont").append('<div class="post" style="margin-left:850px;margin-top:-420px"><img src='+data.drinks[i+2].strDrinkThumb+' alt=""><div class="post-s"><h2>'+data.drinks[i+2].strDrink+'</h2></div></div><br><br>'); 
			   
				 }
				 $("#cont").append('<div class="post" style="margin-left:125px"><img src='+data.drinks[4].strDrinkThumb+' alt=""><div class="post-s"><h2>'+data.drinks[4].strDrink+'</h2></div><br></div><br><br>'); 
			 }
		 }
		 else{
			 
		 for(var i=0;i<3;i++)
     {
     console.log(data.drinks[i].strDrink);
	 $("#cont").append('<div class="post" style="margin-left:125px"><img src='+data.drinks[i].strDrinkThumb+' alt=""><div class="post-s"><h2>'+data.drinks[i].strDrink+'</h2></div><br></div><br><br>'); 
	 $("#cont").append('<div class="post" style="margin-left:850px;margin-top:-420px"><img src='+data.drinks[i+3].strDrinkThumb+' alt=""><div class="post-s"><h2>'+data.drinks[i+3].strDrink+'</h2></div></div><br><br>'); 

     }
		 }
}
};
}
function fun()
{
		var url="https://www.thecocktaildb.com/api/json/v1/1/random.php"
		var xhr=new XMLHttpRequest();
		xhr.open('GET',url);
		xhr.onreadystatechange=test
		
		   function test()
		   {
		   if(this.status==200 && this.readyState==4){
			var res_data=JSON.parse(this.responseText)
			console.log(res_data);
			var img_url=res_data.drinks[0].strDrinkThumb
			var get_tag=document.getElementById('img1')
			get_tag.setAttribute('src',img_url)
			var name=document.getElementById("drink_name");
			name.textContent=res_data.drinks[0].strDrink;

			}
		  }
		xhr.send();
		
	

	$("figure").mouseleave(
		function() {
		  $(this).removeClass("hover");
		}
	  );
}