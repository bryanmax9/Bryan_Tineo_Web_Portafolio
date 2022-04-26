const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");
const slide3 = document.querySelector("#slide3");
const pagina = document.querySelector(".services");
// esto usaremos para poner html usando java script
const contenidoTexto = document.querySelector(".contenido");

// seleccionamos la pantalla para luego apagar el celular
const pantalla = document.querySelector(".screen");
//boton del iphone
const boton = document.querySelector(".bottom");
//html que se injectara en la pagina
let menu = `<div
class="contenedor"
style="position: relative; left: 150px; top: -450px"
>
<h2>Active Worm Apps</h2>
<div style="text-align: center" style="display: block">
  <img
    src="images/bryanmax9_icon.png"
    alt="app1"
    width="100"
    height="100"
    style="clip-path: circle()"
  />
</div>
<p>
  Press the Home button of the phone to see Apps Preview and Details,
  make a "Fast Double click" to reset Preview. Each App will be shown for 16 seconds.
</p>
</div>
</div>`;
let pinguino = `<div
class="contenedor"
style="position: relative; left: 150px; top: -450px"
>
<h2>Crazy Penguin</h2>
<div style="text-align: center" style="display: block">
  <img
    src="images/penguin_app.jpg"
    alt="app1"
    width="100"
    height="100"
    style="clip-path: circle()"
  />
</div>

<p>
  Engine: Unity Language: C# Description:This game consists of a penguin
  running on a dangerous street. Your job is to make him dodge the
  obstacles that come in his way. Have fun while you unlock more
  penguins in your adventure!.
</p>
</div>`;

let geoffrey = `<div
class="contenedor"
style="position: relative; left: 150px; top: -450px"
>
<h2>Geoffrey Mission</h2>
<div style="text-align: center" style="display: block">
  <img
    src="images/mission.png"
    alt="Geoffrey Mission App"
    width="100"
    height="100"
    style="clip-path: circle()"
  />
</div>
<p>
  Engine: XCode Language: Swift Description:This game was based on the classic Solo mission game. Unlike the actual game, this one features a chicken driving a ship. This chicken is inspired by my little brother. Go on a space adventure with this little chicken and help him get the best score by destroying ships!.
</p>
</div>
</div>`;

let bannana = `<div
class="contenedor"
style="position: relative; left: 150px; top: -450px"
>
<h2>Bannana Split Game</h2>
<div style="text-align: center" style="display: block">
  <img
    src="images/274408859_634630864277631_1044603685045719530_n.png"
    alt="Bannana Split App"
    width="100"
    height="100"
    style="clip-path: circle()"
  />
</div>
<p>
  Engine: XCode Language: Swift Description:The Banana Split game is based on a bowl of ice cream dodging the clutches of my "cousin" who is an ice cream fanatic. The characters are inspired by people I know. Bannana Split is the Nickname a friend used to have. So play the game and help Bannana Split!
</p>
</div>
</div>`;

let segundos = 8000;
const arr = [slide3, slide2, slide1];
const aplicaciones = [pinguino, geoffrey, bannana];

contenidoTexto.innerHTML = menu;

const desaparecer = function (e) {
  e.classList.add("inactivo");
};

const aparecer = function (e) {
  e.classList.add("activo");
};

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const borrar = async () => {
  for (let i = 0; i <= 2; i++) {
    contenidoTexto.innerHTML = aplicaciones[i];
    await sleep(16500); //16.5 segundos
    arr[i].classList.add("inactivo");
  }
};

const mostrar = async () => {
  for (let i = 1; i >= 0; i--) {
    await sleep(500);
    arr[i].classList.add("activo");
    arr[i].classList.remove("inactivo");
  }
  pantalla.classList.remove("active");
  location.reload();
};

// evento que se puede dar en cualquier momento ()
/* const arrastrar = () => {
}; */
/* 
pagina.addEventListener("mousemove", arrastrar); */
/////////////////////////////////////////////////////////

boton.addEventListener("click", () => borrar());
boton.addEventListener("dblclick", () => mostrar());
