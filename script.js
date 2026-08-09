/* =========================================
   AUZAIR MATTOO PORTFOLIO
   CONTENT SYSTEM
========================================= */


/* =========================================
   EDIT ACHIEVEMENTS HERE
========================================= */

const achievements = [

    {
        year: "2026",
        title: "B.Tech Journey Begins",
        description:
            "Started my engineering journey with a focus on Artificial Intelligence.",
        image: ""
    },

    {
        year: "2026",
        title: "Portfolio System",
        description:
            "Designed and developed my personal developer portfolio from scratch.",
        image: ""
    },

    {
        year: "COMING SOON",
        title: "First Major AI Project",
        description:
            "A new AI project will be added here when completed.",
        image: ""
    }

];


/* =========================================
   EDIT POSTS HERE
========================================= */

const posts = [

    {
        date: "AUG 2026",

        category: "JOURNEY",

        title: "Why I Built This Portfolio",

        excerpt:
            "A look at why I decided to create my own digital headquarters and document my journey into technology and AI.",

        content:
            "This portfolio is more than just a website. It is a place where I can document projects, achievements, experiments, ideas and everything I build throughout my engineering journey.",

        image: "",

        link: "#"
    },


    {
        date: "COMING SOON",

        category: "AI / MACHINE LEARNING",

        title: "My First AI Project",

        excerpt:
            "Documenting the process of building my first major artificial intelligence project.",

        content:
            "This post will be updated when the project is completed.",

        image: "",

        link: "#"
    },


    {
        date: "COMING SOON",

        category: "DEVELOPMENT",

        title: "What I'm Learning",

        excerpt:
            "A collection of technologies, programming concepts and tools I'm currently exploring.",

        content:
            "This section will contain updates about the technologies and concepts I'm learning.",

        image: "",

        link: "#"
    }

];
/* =========================================
   EDIT PROJECTS HERE
========================================= */

const projects = [

    {
        title: "Personal Portfolio",

        category: "WEB DEVELOPMENT",

        description:
            "A Batman-inspired personal portfolio built from scratch using HTML, CSS and JavaScript.",

        image: "",

        technologies: [
            "HTML",
            "CSS",
            "JAVASCRIPT"
        ],

        github: "#",

        live: "#",

        featured: true
    },


    {
        title: "AI Project",

        category: "ARTIFICIAL INTELLIGENCE",

        description:
            "My upcoming artificial intelligence project. Details will be added after development begins.",

        image: "",

        technologies: [
            "PYTHON",
            "AI"
        ],

        github: "#",

        live: "#",

        featured: false
    },


    {
        title: "Future Project",

        category: "EXPERIMENT",

        description:
            "A future project that will be added to the portfolio.",

        image: "",

        technologies: [
            "COMING SOON"
        ],

        github: "#",

        live: "#",

        featured: false
    }

];

/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   RENDER ACHIEVEMENTS
========================================= */

function renderAchievements() {

    const timeline = document.querySelector(".timeline");

    if (!timeline) return;

    timeline.innerHTML = "";

    achievements.forEach(achievement => {

        const item = document.createElement("div");

        item.className = "timeline-item";

        item.innerHTML = `

            <div class="timeline-dot"></div>

            <div class="timeline-content">

                <span>${achievement.year}</span>

                <h3>${achievement.title}</h3>

                <p>${achievement.description}</p>

                ${
                    achievement.image
                    ?
                    `<img
                        src="${achievement.image}"
                        alt="${achievement.title}"
                        class="achievement-image"
                    >`
                    :
                    ""
                }

            </div>

        `;

        timeline.appendChild(item);

    });

}


/* =========================================
   RENDER POSTS
========================================= */

function renderPosts() {

    const postsGrid = document.querySelector(".posts-grid");

    if (!postsGrid) return;

    postsGrid.innerHTML = "";

    posts.forEach((post, index) => {

        const article = document.createElement("article");

        article.className = "post-card";

        article.innerHTML = `

            ${
                post.image
                ?
                `<img
                    src="${post.image}"
                    alt="${post.title}"
                    class="post-image"
                >`
                :
                ""
            }

            <span class="post-date">
                ${post.date}
            </span>

            <span class="post-category">
                ${post.category}
            </span>

            <h3>
                ${post.title}
            </h3>

            <p>
                ${post.excerpt}
            </p>

            <button
                class="read-post"
                data-post="${index}"
            >
                READ MORE →
            </button>

        `;

        postsGrid.appendChild(article);

    });
/* =========================================
   RENDER PROJECTS
========================================= */

function renderProjects() {

    const projectsGrid =
        document.querySelector(".projects-grid");

    if (!projectsGrid) return;

    projectsGrid.innerHTML = "";

    projects.forEach(project => {

        const article =
            document.createElement("article");

        article.className =
            project.featured
                ? "project-card featured"
                : "project-card";

        const imageHTML = project.image
            ? `
                <div class="project-image has-image">

                    <img
                        src="${project.image}"
                        alt="${project.title}"
                    >

                </div>
            `
            : `
                <div class="project-image">

                    <span>
                        ${project.title}
                    </span>

                </div>
            `;


        const technologiesHTML =
            project.technologies
                .map(technology =>
                    `<span>${technology}</span>`
                )
                .join("");


        article.innerHTML = `

            ${imageHTML}

            <div class="project-content">

                <p class="project-type">
                    ${project.category}
                </p>

                <h3>
                    ${project.title}
                </h3>

                <p>
                    ${project.description}
                </p>

                <div class="project-tags">

                    ${technologiesHTML}

                </div>

                <div class="project-buttons">

                    ${
                        project.github !== "#"
                        ?
                        `
                        <a
                            href="${project.github}"
                            target="_blank"
                            rel="noopener"
                        >
                            GITHUB →
                        </a>
                        `
                        :
                        ""
                    }

                    ${
                        project.live !== "#"
                        ?
                        `
                        <a
                            href="${project.live}"
                            target="_blank"
                            rel="noopener"
                        >
                            LIVE DEMO →
                        </a>
                        `
                        :
                        ""
                    }

                </div>

            </div>

        `;

        projectsGrid.appendChild(article);

    });

}

    /* READ MORE BUTTONS */

    document.querySelectorAll(".read-post").forEach(button => {

        button.addEventListener("click", () => {

            const index = button.dataset.post;

            openPost(posts[index]);

        });

    });

}


/* =========================================
   POST READER
========================================= */

function openPost(post) {

    const modal = document.createElement("div");

    modal.className = "post-modal";

    modal.innerHTML = `

        <div class="post-modal-box">

            <button class="close-post">
                ×
            </button>

            <span class="post-category">
                ${post.category}
            </span>

            <span class="post-date">
                ${post.date}
            </span>

            ${
                post.image
                ?
                `<img
                    src="${post.image}"
                    alt="${post.title}"
                    class="modal-post-image"
                >`
                :
                ""
            }

            <h2>
                ${post.title}
            </h2>

            <p>
                ${post.content}
            </p>

        </div>

    `;

    document.body.appendChild(modal);

    document.body.style.overflow = "hidden";


    /* CLOSE */

    modal.querySelector(".close-post").addEventListener(
        "click",
        () => {

            modal.remove();

            document.body.style.overflow = "";

        }
    );


    /* CLICK OUTSIDE */

    modal.addEventListener("click", event => {

        if (event.target === modal) {

            modal.remove();

            document.body.style.overflow = "";

        }

    });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .post-card"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================================
   START CONTENT SYSTEM
========================================= */

renderAchievements();

renderPosts();

renderPosts();

/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "🦇 Auzair Mattoo Portfolio System Online."
);
/* =========================================
   CINEMATIC MOUSE EFFECT
========================================= */

const mouseGlow =
    document.querySelector(".mouse-glow");

document.addEventListener("mousemove", event => {

    if (!mouseGlow) return;

    mouseGlow.style.left =
        `${event.clientX}px`;

    mouseGlow.style.top =
        `${event.clientY}px`;

});


/* =========================================
   CARD MOUSE SPOTLIGHT
========================================= */

const interactiveCards =
    document.querySelectorAll(
        ".skill-card, .project-card, .post-card"
    );

interactiveCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        card.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        card.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });

});
