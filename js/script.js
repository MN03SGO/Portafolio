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
    /*WEB*/
    nomProyecto: "Pagina web INTI",
    img: "img/img_proyectos/instituto.png",
    defaultImg: "https://via.placeholder.com/400x225?text=Pagina+web+INTI",
    category: "web",
    categoryTag: "Desarrollo Web",
    desc: "Sistema integral para la gestión académica y administrativa de instituciones educativas.",
    tecnologia:["HTML", "CSS", "Js"], 
    visual: "https://mn03sgo.github.io/inti2.github.io/",
    repo: "https://github.com/MN03SGO/inti2.github.io"
  },
  {
    nomProyecto: "Florecer Natural",
    img: "img/img_proyectos/florecer.png",
    defaultImg: "https://via.placeholder.com/400x225?text=Florecer+Natural",
    category: "web",
    categoryTag: "Desarrollo Web",
    desc: "Sitio web enfocado en la promoción y venta de productos naturales y salud.",
    tecnologia:["HTML", "CSS", "SCSS", "Js"],
    visual: "https://mn03sgo.github.io/FlorecerNatural.github.io/",
    repo: "https://github.com/MN03SGO/FlorecerNatural.github.io"
  },
  {
    nomProyecto: "Joyería Online",
    img: "img/img_proyectos/joyeria.png",
    defaultImg: "https://via.placeholder.com/400x225?text=Joyeria+Online",
    category: "web",
    categoryTag: "Desarrollo Web",
    desc: "E-commerce elegante diseñado para la visualización de catálogos de joyería fina.",
    tecnologia:["HTML", "CSS", "Javascript"], 
    visual: "https://mn03sgo.github.io/INTI.github.io/index.html",
    repo: "https://github.com/MN03SGO/INTI.github.io",
  },
  {
    nomProyecto: "Asistencia de Viaje",
    img: "img/img_proyectos/Fly.png",
    defaultImg: "https://via.placeholder.com/400x225?text=Control+Inventario",
    category: "web",
    categoryTag: "Desarrollo web",
    desc: "Aplicación web robusta para el control de stock, entradas y salidas de productos en tiempo real.",
    tecnologia:["TypeScript", "CSS","API REST"], 
    visual: "https://test1-teal-ten.vercel.app/",
    repo: "https://github.com/MN03SGO/test1",
    /*enDesarrollo: true,*/
  },
  {
    nomProyecto:"Comedores S.S",
    img:"img/img_proyectos/ss.jpeg",
    defaultImg: "https://via.placeholder.com/400x225?text=Joyeria+Online",
    category: "web",
    categoryTag: "Desarrollo web",
    desc: "Intento de creacion de aplicacion web comunitaria que mapea comedores populares, pupuserías, puestos callejeros y mercados económicos en San Salvador los lugares reales donde come la gente de a pie, que Google Maps ignora o digitalmente “no existen”.",
    tecnologia:["TypeScript"], 
    visual: "#",
    repo: "https://github.com/peperechas-sv/Comedores_SS",
    enDesarrollo: true,
    /*isLogo: true,*/
  },
  {
    /*Embebido */
    nomProyecto: "Asistente Visual RPi 4",
    img: "img/img_proyectos/rasvision.jpg",
    defaultImg: "https://via.placeholder.com/400x225?text=Asistente+Visual+IA",
    category: "embebido",
    categoryTag: "Raspberry Pi / IA",
    desc: "Dispositivo de asistencia para personas con discapacidad visual utilizando yolo V8 y una Raspberry Pi 4 + piCam.",
    tecnologia:["Python","Jupyter Notebook","YOLOv8"], 
    visual: "#",
    repo: "https://github.com/MN03SGO/GafasIA",
    isLogo: true,
  },  
  {
    /*Embebido */
    nomProyecto: "Brazo robotico con ROS",
    img: "img/img_proyectos/representativa_brazo.jpg",
    defaultImg: "https://via.placeholder.com/400x225?text=Asistente+Visual+IA",
    category: "embebido",
    categoryTag: "Raspberry Pi ",
    desc: "El objetivo es desarrollar un sistema robótico capaz de percibir su entorno mediante una cámara web, identificar objetos de colores, y manipularlos de forma inteligente.",
    tecnologia:["Python","Shell", "Docker"], 
    visual: "#",
    repo: "https://github.com/MN03SGO/Brazo_robotico",
    isLogo: true,
  },
  /*CRUDS*/
  {
    nomProyecto: "Sistema de inventario",
    img: "img/img_proyectos/CRUD.png",
    defaultImg: "https://via.placeholder.com/400x225?text=Asistente+Visual+IA",
    category: "inventario",
    categoryTag: "Sistema de Gestion",
    desc: 'Sistema de gestion de inventario "CRUD", para una empresa que vende galletas ',
    tecnologia:["Java","Postgre SQL"], 
    visual: "#",
    repo: "https://github.com/MN03SGO/Krocbites2",
    enDesarrollo: true,
    isLogo: true,
  },
  {
    nomProyecto: "CRUD Basico",
    img: "img/img_proyectos/CRUD_py.png",
    defaultImg: "https://via.placeholder.com/400x225?text=Asistente+Visual+IA",
    category: "inventario",
    categoryTag: "Sistema de Gestion",
    desc: "Aplicacion  de crear, actualizar, eliminar y modificar en un sistema sencillo echo en python ",
    tecnologia:["Python","MySQL"], 
    visual: "#",
    repo: "https://github.com/MN03SGO/Krocbites2",
    enDesarrollo: false,
    isLogo: true,
  },

  /*HOMELAB*/
    {
    nomProyecto: "Infraestructura VPN usando Tailscale",
    img: "img/img_proyectos/vpn.jpg",
    defaultImg: "https://via.placeholder.com/400x225?text=Asistente+Visual+IA",
    category: "homelab",
    categoryTag: "Infraestructura",
    desc: "Este proyecto integra una VPN Mesh mediante Tailscale para acceso remoto seguro y tambien utiliza Docker para desplegar servicios, en este caso Open WebUI y Ollama. Esto permite la administración remota por protocolo SSH, la ejecución de modelos de IA locales con una interfaz bonita y amigable además el acceso seguro a recursos de la red doméstic",
    tecnologia:["Shell","Docker"], 
    visual: "#",
    repo: "https://github.com/peperechas-sv/Home_lab",
    enDesarrollo: false,
    isLogo: true,
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

    const tecnologias = proyecto.tecnologia ? proyecto.tecnologia.map(t => `<span class="tech-tag">${t}</span>`).join("") : "";

    if (proyecto.enDesarrollo) {
      visualBtnHTML = `<span class="btn" style="opacity: 0.5; cursor: not-allowed;">En Desarrollo</span>`;
    } else if (proyecto.visual && proyecto.visual !== "#") {
      visualBtnHTML = `<a href="${proyecto.visual}" target="_blank" class="btn">Visualizar</a>`;
    }
    caja.innerHTML = `
                    <div class="proyecto-content">
                        <span class="category-tag">${proyecto.categoryTag}</span>
                        <div class="proyecto-img-container ${proyecto.isLogo ? "is-logo" : ""}">
                            <img src="${proyecto.img}" alt="${proyecto.nomProyecto}" onerror="this.onerror=null; this.src='${proyecto.defaultImg}';">
                        </div>
                        <h3>${proyecto.nomProyecto}</h3>
                        <p>${proyecto.desc}</p>
                        <div class="tarjeta_tecnologias">${tecnologias}</div>
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
const btn_homelab  = document.getElementById("proyectos_homelab");

const setActiveButton = (activeBtn) => {
  const todosLosBotones = [btnTodos, btnWeb, btnInventario, btnEmbebido, btn_homelab];
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

if(btn_homelab){
  btn_homelab.addEventListener("click",() =>{
    proyectosFiltrados("homelab");
    setActiveButton(btn_homelab);
  })
}

if (btnTodos) {
  btnTodos.addEventListener("click", () => {
    proyectosFiltrados("all");
    setActiveButton(btnTodos);
  });
}

proyectos_display(proyectos);

const modal = document.getElementById('modal');
const btnCerrar = document.getElementById('modal_cerrar');

function cerrarModal() {
    modal.style.opacity = '0';
    modal.style.transition = 'opacity 0.2s ease';
    setTimeout(() => modal.style.display = 'none', 200);
}

btnCerrar.addEventListener('click', cerrarModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) cerrarModal();
});