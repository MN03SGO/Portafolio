const menuIcono = document.querySelector("#menu-icon");
const navEnlaces = document.querySelector(".nav_enlaces");

if (menuIcono && navEnlaces) {
  menuIcono.onclick = () => {
    navEnlaces.classList.toggle("active");
    if (navEnlaces.classList.contains("active")) {
      menuIcono.className = "fa-solid fa-xmark";
    } else {
      menuIcono.className = "fa-solid fa-bars";
    }
  };
}

const proyectos = [
  {
    nomProyecto: "Pagina web INTI",
    img: "img/img_proyectos/instituto.png",
    defaultImg: "https://via.placeholder.com/400x225?text=Pagina+web+INTI",
    category: "web",
    categoryTag: "Desarrollo Web",
    desc: "Sistema integral para la gestión académica y administrativa de instituciones educativas.",
    visual: "https://mn03sgo.github.io/inti2.github.io/",
    repo: "https://github.com/MN03SGO/inti2.github.io",
  },
  {
    nomProyecto: "Florecer Natural",
    img: "img/img_proyectos/florecer.png",
    defaultImg: "https://via.placeholder.com/400x225?text=Florecer+Natural",
    category: "web",
    categoryTag: "Desarrollo Web",
    desc: "Sitio web enfocado en la promoción y venta de productos naturales y salud.",
    visual: "https://mn03sgo.github.io/FlorecerNatural.github.io/",
    repo: "https://github.com/MN03SGO/FlorecerNatural.github.io",
  },
  {
    nomProyecto: "Joyería Online",
    img: "img/img_proyectos/joyeria.png",
    defaultImg: "https://via.placeholder.com/400x225?text=Joyeria+Online",
    category: "web",
    categoryTag: "Desarrollo Web",
    desc: "E-commerce elegante diseñado para la visualización de catálogos de joyería fina.",
    visual: "https://mn03sgo.github.io/INTI.github.io/index.html",
    repo: "https://github.com/MN03SGO/INTI.github.io",
  },
  {
    nomProyecto: "Asistencia de Viaje",
    img: "img/img_proyectos/Fly.png",
    defaultImg: "https://via.placeholder.com/400x225?text=Control+Inventario",
    category: "inventario",
    categoryTag: "Sistema de Asistencia",
    desc: "Aplicación web robusta para el control de stock, entradas y salidas de productos en tiempo real.",
    visual: "https://test1-teal-ten.vercel.app/",
    repo: "https://github.com/MN03SGO/Krocbites2",
    /*enDesarrollo: true,*/
  },
  {
    nomProyecto: "Asistente Visual RPi 4",
    img: "img/linux.png",
    defaultImg: "https://via.placeholder.com/400x225?text=Asistente+Visual+IA",
    category: "embebido",
    categoryTag: "Raspberry Pi / IA",
    desc: "Dispositivo de asistencia para personas con discapacidad visual utilizando visión artificial y Raspberry Pi Cam.",
    visual: "#",
    repo: "https://github.com/MN03SGO/GafasIA",
    enDesarrollo: true,
  },
    {
    nomProyecto: "Sistema de inventario",
    img: "img/img_proyectos/CRUD.png",
    defaultImg: "https://via.placeholder.com/400x225?text=Asistente+Visual+IA",
    category: "embebido",
    categoryTag: "Sistema de Asistencia",
    desc: "Dispositivo de asistencia para personas con discapacidad visual utilizando visión artificial y Raspberry Pi Cam.",
    visual: "#",
    repo: "https://github.com/MN03SGO/GafasIA",
    enDesarrollo: true,
  },
];

const proyectos_display = (proyectos_mostrar) => {
  const gridContainer = document.getElementById("projectGrid");
  if (!gridContainer) return;

  gridContainer.innerHTML = "";

  proyectos_mostrar.forEach((proyecto) => {
    const caja = document.createElement("div");
    caja.className = "proyecto-card";
    caja.setAttribute("data-category", proyecto.category);


    let visualBtnHTML = proyecto.enDesarrollo
      ? `<span class="btn" style="opacity: 0.5; cursor: not-allowed;">En Desarrollo</span>`
      : `<a href="${proyecto.visual}" target="_blank" class="btn">Visualizar</a>`;

    caja.innerHTML = `
                    <div>
                        <span class="category-tag">${proyecto.categoryTag}</span>
                        <img src="${proyecto.img}" alt="${proyecto.nomProyecto}" onerror="this.onerror=null; this.src='${proyecto.defaultImg}';">
                        <h3>${proyecto.nomProyecto}</h3>
                        <p>${proyecto.desc}</p>
                    </div>
                    <div class="btn_group">
                        ${visualBtnHTML}
                        <a href="${proyecto.repo}" target="_blank" class="btn">Repo</a>
                    </div>
                `;
    gridContainer.appendChild(caja);
  });
};


const proyectosFiltrados = (category) => {
  if (category === "all") {
    proyectos_display(proyectos);
  } else {
    const proyectos_mostrar = proyectos.filter(
      (proyecto) => proyecto.category === category,
    );
    proyectos_display(proyectos_mostrar);
  }
};

const btnTodos = document.getElementById("todos");
const btnWeb = document.getElementById("proyectos_web");
const btnInventario = document.getElementById("proyectos_inventario");
const btnEmbebido = document.getElementById("proyectos_embebido");

const setActiveButton = (activeBtn) => {
  const todosLosBotones = [btnTodos, btnWeb, btnInventario, btnEmbebido];
  todosLosBotones.forEach((btn) => {
    if (btn) btn.classList.remove("activo");
  });
  if (activeBtn) activeBtn.classList.add("activo");
};

if (btnWeb) {
  btnWeb.addEventListener("click", () => {
    proyectosFiltrados("web");
    setActiveButton(btnWeb);
  });
}

if (btnInventario) {
  btnInventario.addEventListener("click", () => {
    proyectosFiltrados("inventario");
    setActiveButton(btnInventario);
  });
}

if (btnEmbebido) {
  btnEmbebido.addEventListener("click", () => {
    proyectosFiltrados("embebido");
    setActiveButton(btnEmbebido);
  });
}

if (btnTodos) {
  btnTodos.addEventListener("click", () => {
    proyectosFiltrados("all");
    setActiveButton(btnTodos);
  });
}

proyectos_display(proyectos);
