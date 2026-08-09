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
/* =========================================
   CINEMATIC BACKGROUND PARALLAX
========================================= */

const heroArt =
    document.querySelector(".hero-art");

if (heroArt) {

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                    window.innerWidth) - 0.5;

            const y =
                (event.clientY /
                    window.innerHeight) - 0.5;

            const moveX =
                x * -14;

            const moveY =
                y * -10;

            heroArt.style.setProperty(
                "--parallax-x",
                `${moveX}px`
            );

            heroArt.style.setProperty(
                "--parallax-y",
                `${moveY}px`
            );

        }
    );

}

/* =========================================
   SCROLL PARALLAX
========================================= */

if (heroArt) {

    window.addEventListener(
        "scroll",
        () => {

            const scroll =
                window.scrollY;

            if (scroll < window.innerHeight) {

                heroArt.style.backgroundPosition =
                    `center ${50 + scroll * 0.025}%`;

            }

        }
    );

}

/* =========================================
   HERO SCROLL FADE
========================================= */

const heroContent =
    document.querySelector(".hero-content");

const heroCard =
    document.querySelector(".hero-card");

window.addEventListener(
    "scroll",
    () => {

        const scroll =
            window.scrollY;

        const fadeStart = 100;

        const fadeEnd =
            window.innerHeight * 0.8;

        let opacity =
            1 -
            (
                (scroll - fadeStart) /
                (fadeEnd - fadeStart)
            );

        opacity =
            Math.max(
                0,
                Math.min(1, opacity)
            );

        if (heroContent) {

            heroContent.style.opacity =
                opacity;

            heroContent.style.transform =
                `translateY(${scroll * 0.12}px)`;

        }

        if (heroCard) {

            heroCard.style.opacity =
                opacity;

            heroCard.style.transform =
                `
                rotate(2deg)
                translateY(${scroll * 0.08}px)
                `;

        }

    }
);
/* =========================================
   CINEMATIC LOADING SYSTEM
========================================= */

const loadingScreen =
    document.getElementById("loading-screen");

const loadingPercent =
    document.querySelector(".loader-percent");

const loadingProgress =
    document.querySelector(".loader-progress");

let loadingValue = 0;

function runLoadingScreen() {

    if (!loadingScreen) {
        console.error("Loading screen not found.");
        return;
    }

    const loadingInterval = setInterval(() => {

        loadingValue += Math.floor(Math.random() * 7) + 1;

        if (loadingValue >= 100) {

            loadingValue = 100;

            clearInterval(loadingInterval);

        }

        if (loadingPercent) {
            loadingPercent.textContent =
                `${loadingValue}%`;
        }

        if (loadingProgress) {
            loadingProgress.style.width =
                `${loadingValue}%`;
        }

        if (loadingValue === 100) {

            setTimeout(() => {

                loadingScreen.classList.add("loaded");

                setTimeout(() => {
                    startFlyingBatarang();
                }, 900);

            }, 500);

        }

    }, 45);
}

runLoadingScreen();


/* =========================================
   RANDOM FLYING BATARANG
========================================= */

const flyingBatarang =
    document.getElementById(
        "flying-batarang"
    );


function randomNumber(min, max) {

    return Math.random() *
        (max - min) + min;

}


function startFlyingBatarang() {

    if (!flyingBatarang) return;


    function fly() {

        const screenWidth =
            window.innerWidth;

        const screenHeight =
            window.innerHeight;


        const startX =
            randomNumber(
                -100,
                screenWidth
            );

        const startY =
            randomNumber(
                80,
                screenHeight - 80
            );


        const endX =
            randomNumber(
                -100,
                screenWidth + 100
            );

        const endY =
            randomNumber(
                80,
                screenHeight - 80
            );


        const rotation =
            randomNumber(
                360,
                1080
            );


        const duration =
            randomNumber(
                1800,
                3200
            );


        flyingBatarang.style.transition =
            "none";


        flyingBatarang.style.left =
            `${startX}px`;

        flyingBatarang.style.top =
            `${startY}px`;

        flyingBatarang.style.opacity =
            "0";


        requestAnimationFrame(() => {

            flyingBatarang.style.transition =
                `left ${duration}ms cubic-bezier(.2,.7,.2,1),
                 top ${duration}ms cubic-bezier(.2,.7,.2,1),
                 transform ${duration}ms linear,
                 opacity 350ms ease`;


            flyingBatarang.style.opacity =
                "0.75";


            flyingBatarang.style.transform =
                `rotate(${rotation}deg)`;


            flyingBatarang.style.left =
                `${endX}px`;

            flyingBatarang.style.top =
                `${endY}px`;

        });


        setTimeout(() => {

            flyingBatarang.style.opacity =
                "0";


        }, duration - 300);


        setTimeout(() => {

            fly();

        }, duration + randomNumber(
            2500,
            6500
        ));

    }


    /* First appearance */

    setTimeout(() => {

        fly();

    }, 1800);

}
