function mayorEntero(numero1, numero2, numero3)
{
    let numeroMayor;

    if(numero1 > numero2 && numero1 > numero3)
    {
        numeroMayor=numero1;
    }
    else if(numero1 < numero2 && numero3 < numero1)
    {
        numeroMayor=numero2;
    }
    else if (numero3 > numero1 && numero3 > numero2)
    {
        numeroMayor=numero3;
    }
    else
    {
        numeroMayor= "Los números son iguales";
    }
    return numeroMayor;
}

function numeroMayor()
{
    numero1=document.getElementById("numero1");
    numero2=document.getElementById("numero2");
    numero3=document.getElementById("numero3");

    let numeroMayor= mayorEntero(numero1.value, numero2.value, numero3.value);
    if(typeof numeroMayor == "number")
    {
        alert("El número mayor es: " + numeroMayor);
    }
    else
    {
        alert(numeroMayor);    
    }
}