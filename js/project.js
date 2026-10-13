const projects = [
    { name: "Ver Projeto 1", url: "https://curso-metodo.vercel.app", image: "../public/images/project01.png" },
    { name: "Ver Projeto 2", url: "https://deploy-desafio4-trilhas-5p18.vercel.app/landing/index.html", image: "../public/images/project02.png" },
    { name: "Ver Projeto 3", url: "https://desafio-5-1ut2.onrender.com", image: "../public/images/project03.png" },
    { name: "Ver Projeto 4", url: "https://www.linkedin.com/feed/update/urn:li:activity:7515579220266385409/", image: "../public/images/project04.png" }
];

const projectList = document.querySelector(".project-list");

projects.forEach((project) => {
    projectList.insertAdjacentHTML("beforeend", `
        <article class="project-card">
            <img class="project-image" src="${project.image}" alt="">
            <div class="project-name">
                <a href="${project.url}">${project.name}</a>
            </div>
        </article>
    `);
});