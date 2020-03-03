function calculoPerimetro(ladoCuadrado) 
{

    return (ladoCuadrado*4);
    
}

function obtenerPerimetro() 
{

    let ladoCuadrado=document.getElementById("ladoCuadrado").value;
    alert("El perímetro del cuadrado es " + calculoPerimetro(ladoCuadrado));
    
}