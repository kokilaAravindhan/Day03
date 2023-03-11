var request=new XMLHttpRequest();
request.open("GET","https://gbfs.citibikenyc.com/gbfs/en/station_information.json");
request.send();
request.onload=function(){
        var result=JSON.parse(request.response);
        console.log(result);



}