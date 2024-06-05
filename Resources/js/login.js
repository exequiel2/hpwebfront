function login()
{
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if(user=="Exequiel" && pass=="0123")
        {
            window.location="index.html";
        }


else{
    alert("Contraseña incorrecta");
}
}
