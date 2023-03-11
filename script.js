var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
   // console.log(result);
   // for in loop 
  /* for(var i in result){
        console.log(result[i].name);
        console.log(result[i].flag);
        console.log(result[i].name,result[i].capital);
        }*/
        //for loop
        for(var j=0 ;j<result.length;j++){
            console.log(result[j].name);
        console.log(result[j].flag);
        console.log(result[j].name,result[j].capital);
        }
    
}


