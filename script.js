var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];

var newArr = products;

$(document).ready(function(){
   displayNew();
});

function displayNew(){
    var table="<table border=1px  'solid black'><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating-system</th><th>Remove</th></tr>"
    products.forEach(element => {
        table+="<tr><td>"+
                element.id+
                "</td><td>"+
                element.name+
                "</td><td>"+
                element.brand+
                "</td><td>"+
                element.os+
                "</td><td>"+
                ' <a href="#" onclick =delprod()"(\''+element.id+'\')">X</a>'

                "</td></tr>"
                document.getElementById("list").innerHTML= table
        
    });
    table+= "</table>"
    
}
function filter(){
    var table="<table border=1px  'solid black'><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating-system</th><th>Remove</th></tr>"
    var OS = document.getElementById("OS").value
    console.log(OS);
    var Brand = document.getElementById("Brand").value
    products.forEach(element => {
        if(element.os==OS){
        table+="<tr><td>"+
                element.id+
                "</td><td>"+
                element.name+
                "</td><td>"+
                element.brand+
                "</td><td>"+
                element.os+
                "</td><td>"+
                ' <a href="#" onclick =delprod()"(\''+element.id+'\')">X</a>'

                "</td></tr>"}
                // document.getElementById("list").innerHTML= table
                else if(element.brand == Brand){
                    table+="<tr><td>"+
                    element.id+
                    "</td><td>"+
                    element.name+
                    "</td><td>"+
                    element.brand+
                    "</td><td>"+
                    element.os+
                    "</td><td>"+
                    ' <a href="#" onclick =delprod()"(\''+element.id+'\')">X</a>'
                
                    "</td></tr>"
                    }
                    else if(element.os==OS && element.brand == Brand){
                    table+="<tr><td>"+
                    element.id+
                    "</td><td>"+
                    element.name+
                    "</td><td>"+
                    element.brand+
                    "</td><td>"+
                    element.os+
                    "</td><td>"+
                    ' <a href="#" onclick =delprod()"(\''+element.id+'\')">X</a>'
                
                    "</td></tr>"
                    }
                
        
    });
    table+= "</table>"
    document.getElementById("list").innerHTML= table
   

}
function searchData(){
    var table="<table border=1px  'solid black'><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating-system</th><th>Remove</th></tr>"
    var tval = document.getElementById("searh").value
    tval = tval.toLowerCase();
    products.forEach(element => {
        if(element.name.toLowerCase() == tval){

      
        table+="<tr><td>"+
                element.id+
                "</td><td>"+
                element.name+
                "</td><td>"+
                element.brand+
                "</td><td>"+
                element.os+
                "</td><td>"+
                ' <a href="#" onclick =delprod()"(\''+element.id+'\')">X</a>'

                "</td></tr>"
        

} else if(element.id = tval){
    table+="<tr><td>"+
    element.id+
    "</td><td>"+
    element.name+
    "</td><td>"+
    element.brand+
    "</td><td>"+
    element.os+
    "</td><td>"+
    '<a href="#" onclick =delprod(\''+element.SKU+'\')>X</a>'

    "</td></tr>"

}
    });
    table+= "</table>"
    document.getElementById("list").innerHTML= table
  
}
function delprod(){
    for(let i =0;i < newArr.length; i++){
        if (val ==newArr[i].id){
            newArr.splice(i,1);

        }
    }
    displayNew();
}





