function calculoPromedio(num1,num2,num3) 
{
    return ((num1+num2+num3)/3);
}

function obtenerPromedio()
 {

    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let num3=parseInt(document.getElementById("num3").value);
    alert("el promedio de los números es: " + calculoPromedio(num1,num2,num3));
    
}