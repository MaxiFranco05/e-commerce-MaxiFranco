localStorage.setItem("login", false);
function Signupbtn() {
  document.querySelector(".contenedor-card").innerHTML =
    ' <div id="signup-card" class="login-container"><div class="login-box"><h2>Crea una cuenta</h2><p>Crea una cuenta para comprar los mejores autos.</p><form id="signupForm"><div class="form-floating mb-1"><input type="text" class="form-control" id="signup-username" placeholder="Usuario" required /><label for="signup-username">Usuario</label></div><div class="form-floating mb-1"><input type="email" class="form-control" id="signup-email" placeholder="Correo" required/><label for="signup-email">e-mail</label></div><div class="form-floating mb-1"><input type="password" class="form-control" id="signup-password" placeholder="Contraseña" required /><label for="signup-password">Contraseña</label></div><button type="submit">Crear cuenta</button><p id="cuenta-creada" style="color: green"></p><span class="go-login" onclick="Loginbtn()" style="color: rgb(177, 177, 177); cursor: pointer; margin: 2px 0">¿Ya tienes una cuenta? Inicia sesion.</span></form></div></div> ';
}

function Loginbtn() {
  document.querySelector(".contenedor-card").innerHTML =
    ' <div id="login-card" class="login-container"><div class="login-box"><h2>Inicio Sesión</h2><p>Inicia sesión para comprar los mejores autos.</p><form id="loginForm"><div class="form-floating"><input type="email" class="form-control" id="login-email" placeholder="email" required><label for="login-email">e-mail</label></div><div class="form-floating"><input type="password" class="form-control" id="login-password" placeholder="Contraseña" required><label for="login-password">Contraseña</label></div><div style="text-align: left; margin: 2px 0;" class="box-visible form-check"><input type="checkbox" class="form-check-input" onChange="ocultar(this)"><label style="color: #fff;" class="form-check-label" for="mostrar-contra">Mostrar Contraseña</label></div><button type="submit">Iniciar Sesion</button><span class="go-signup" onclick="Signupbtn()" style="color: rgb(177, 177, 177); cursor: pointer; margin: 2px 0;">¿No tienes cuenta? Crea una.</span><p id="inicio-sesion" style="color: green; margin-bottom: 0px;"></p></form></div></div> ';

  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    userEmailcheck = document.querySelector("#login-email").value;
    userPasscheck = document.querySelector("#login-password").value;
    emailSaved = localStorage.getItem("email");
    passSaved = localStorage.getItem("pass");
    if (userEmailcheck === emailSaved && userPasscheck === passSaved) {
      document.querySelector("#inicio-sesion").textContent =
        "Inicio de sesión correctamente.";
      localStorage.setItem("login", true);
      setTimeout(function () {
        window.location.href = "./index.html";
      }, 1000);
    } else {
      document.querySelector("#inicio-sesion").style =
        "color: red; margin-bottom: 0;";
      document.querySelector("#inicio-sesion").textContent =
        "Email o Contraseña incorrecto.";
    }
  });
}

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  userName = document.querySelector("#signup-username").value;
  userEmail = document.querySelector("#signup-email").value;
  userPass = document.querySelector("#signup-password").value;
  localStorage.setItem("name", userName);
  localStorage.setItem("email", userEmail);
  localStorage.setItem("pass", userPass);

  var cuentaCreada = document.getElementById("cuenta-creada");
  cuentaCreada.textContent = "Cuenta creada correctamente";

  setTimeout(function () {
    cuentaCreada.textContent = "";
    Loginbtn();
  }, 1500);
});

function ocultar(box) {
  var contraOculta = document.getElementById("login-password");
  contraOculta.type = box.checked ? "text" : "password";
}
