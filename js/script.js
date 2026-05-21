const menuIcono = document.querySelector("#menu-icon");
const navEnlaces = document.querySelector(".nav_enlaces");

menuIcono.onclick = () => {
  navEnlaces.classList.toggle("active");
};

const proyectos = [
  {
    nomProyecto: "Pagina web INTI",
    img: "./img/img_proyectos/instituto.png",
    category: 'proyectos web'
  },
  {
    nomProyecto: "Florecer Natural",
    img: "./img/img_proyectos/florecer.png",
    category: 'proyectos web'
  },
  {
    nomProyecto: "Joyeria Online",
    img: "./img/img_proyectos/joyeria.png",
    category: 'proyectos web'
  },
  {
    nomProyecto: "Asistencia de viaje",
    img: "./img/img_proyectos/fly.png",
    category: 'proyectos web'
  },
  {
    nomProyecto: "Asistente visual RPI 4",
    category: 'proyectos embebidos'
  }
];
