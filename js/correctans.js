document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("InputEmail1").value;
    var password = document.getElementById("InputPassword1").value;
  
    // Validar que los campos estén llenos
    if (!email || !password) {
      var alerta = document.getElementById("alerta");
      alerta.innerHTML = "Debe llenar todos los campos";
      alerta.classList.remove("alert-success");
      alerta.classList.add("alert-danger");
      alerta.classList.remove("d-none");
      return;
    }
  
    var alerta = document.getElementById("alerta");
    alerta.innerHTML = "Se han enviado correctamente";
    alerta.classList.remove("alert-danger");
    alerta.classList.add("alert-success");
    alerta.classList.remove("d-none");
  
    // Redirigir al usuario a la sección de la página deseada
    window.location.href ="feed.html";
  });