const projectContainer = document.querySelector(".project_container");

const projects = [
  {
    image: "images/p1.png",
    title: "Life Timer App",
    url: "../project1-fix/index.html",
  },
  {
    image: "images/p2.png",
    title: "Github User Search App",
    url: "../project2/index.html",
  },
  {
    image: "images/p3.png",
    title: "Percentage Calculator App",
    url: "../project3/index.html",
  },
  {
    image: "images/p4.png",
    title: "Math Quiz App",
    url: "../project4.2/index.html",
  },
  {
    image: "images/p5.png",
    title: "Search & Filters Product App",
    url: "../project5/index.html",
  },
  {
    image: "images/p6.png",
    title: "Color Generator App",
    url: "../project6/index.html",
  },
  {
    image: "images/p7.png",
    title: "QR Code Generator App",
    url: "../project7/index.html",
  },
  {
    image: "images/p8.png",
    title: "Expense Tracker App",
    url: "../project8.3/index.html",
  },
  {
    image: "images/p9.png",
    title: "Password Generator App",
    url: "../project9/index.html",
  },
  {
    image: "images/p10.png",
    title: "Drawer + Dropdown",
    url: "../project10/index.html",
  },
];

const showProjects = () => {
  let output = "";
  projects.forEach(
    ({ image, title, url }, i) =>
      (output += `
      <div class="grid_item">
      <div class="card">
        <img src="${image}" alt="Project ${i}" />
        <a href="${url}">
          <div class="card_content">
            <h3>${title}</h3>
          </div>
        </a>
      </div>
    </div>
    `)
  );
  projectContainer.innerHTML = output;
};

showProjects();
