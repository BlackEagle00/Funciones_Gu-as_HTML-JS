function calculoDigitos(num) 
{

    let cifras=0;
    while (num != 0) 
    {
        cifras++;
        num/=10;
        num=parseInt(num);
    }
    return cifras;
    
}

function obtenerDigitos() 
{

    let num=document.getElementById("num").value;
    alert("El numero posee " + calculoDigitos(num) + " dígitos");
    
}