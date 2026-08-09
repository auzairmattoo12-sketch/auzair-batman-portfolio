```javascript
/* =========================================
   AUZAIR MATTOO PORTFOLIO
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   CONTENT
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

function setupMobileMenu() {

    const menuButton =
        document.getElementById("menuButton");

    const navLinks =
        document.querySelector(".nav-links");

    if (!menuButton || !navLinks) return;


    menuButton.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle("active");

        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "active"
                    );

                }
            );

        });

}


/* =========================================
   ACHIEVEMENTS
========================================= */

function renderAchievements() {

    const timeline =
        document.querySelector(".timeline");

    if (!timeline) return;


    timeline.innerHTML = "";


    achievements.forEach(
        achievement => {

            const item =
                document.createElement("div");

            item.className =
                "timeline-item";


            item.innerHTML = `

                <div class="timeline-dot"></div>

                <div class="timeline-content">

                    <span>
                        ${achievement.year}
                    </span>

                    <h3>
                        ${achievement.title}
                    </h3>

                    <p>
                        ${achievement.description}
                    </p>

                    ${
                        achievement.image
                        ?
                        `
                        <img
                            src="${achievement.image}"
                            alt="${achievement.title}"
                            class="achievement-image"
                        >
                        `
                        :
                        ""
                    }

                </div>

            `;


            timeline.appendChild(item);

        }
    );

}


/* =========================================
   POSTS
========================================= */

function renderPosts() {

    const postsGrid =
        document.querySelector(".posts-grid");

    if (!postsGrid) return;


    postsGrid.innerHTML = "";


    posts.forEach(
        (post, index) => {

            const article =
                document.createElement("article");

            article.className =
                "post-card";


            article.innerHTML = `

                ${
                    post.image
                    ?
                    `
                    <img
                        src="${post.image}"
                        alt="${post.title}"
                        class="post-image"
                    >
                    `
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

        }
    );


    postsGrid
        .querySelectorAll(".read-post")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.post
                        );

                    openPost(posts[index]);

                }
            );

        });

}


/* =========================================
   PROJECTS
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


        const imageHTML =
            project.image
            ?
            `
            <div class="project-image has-image">

                <img
                    src="${project.image}"
                    alt="${project.title}"
                >

            </div>
            `
            :
            `
            <div class="project-image">

                <span>
                    ${project.title}
                </span>

            </div>
            `;


        const technologiesHTML =
            project.technologies
                .map(
                    technology =>
                        `<span>${technology}</span>`
                )
                .join("");


        const githubHTML =
            project.github &&
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
            "";


        const liveHTML =
            project.live &&
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
            "";


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

                    ${githubHTML}

                    ${liveHTML}

                </div>

            </div>

        `;


        projectsGrid.appendChild(article);

    });

}


/* =========================================
   POST MODAL
========================================= */

function openPost(post) {

    if (!post) return;


    const modal =
        document.createElement("div");

    modal.className =
        "post-modal";


    modal.innerHTML = `

        <div class="post-modal-box">

            <button
                class="close-post"
                aria-label="Close post"
            >
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
                `
                <img
                    src="${post.image}"
                    alt="${post.title}"
                    class="modal-post-image"
                >
                `
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

    document.body.style.overflow =
        "hidden";


    function closeModal() {

        modal.remove();

        document.body.style.overflow = "";

    }


    modal
        .querySelector(".close-post")
        .addEventListener(
            "click",
            closeModal
        );


    modal.addEventListener(
        "click",
        event => {

            if (event.target === modal) {

                closeModal();

            }

        }
    );

}


/* =========================================
   SCROLL REVEAL
========================================= */

function setupScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".section, .skill-card, .project-card, .post-card"
        );


    if (!("IntersectionObserver" in window)) {

        elements.forEach(element => {

            element.classList.add(
                "reveal",
                "visible"
            );

        });

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });

}


/* =========================================
   MOUSE GLOW
========================================= */

function setupMouseGlow() {

    const mouseGlow =
        document.querySelector(".mouse-glow");

    if (!mouseGlow) return;


    document.addEventListener(
        "mousemove",
        event => {

            mouseGlow.style.left =
                `${event.clientX}px`;

            mouseGlow.style.top =
                `${event.clientY}px`;

        }
    );

}


/* =========================================
   CARD SPOTLIGHT
========================================= */

function setupCardSpotlight() {

    const cards =
        document.querySelectorAll(
            ".skill-card, .project-card, .post-card"
        );


    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

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

            }
        );

    });

}


/* =========================================
   BACKGROUND PARALLAX
========================================= */

function setupBackgroundParallax() {

    const heroArt =
        document.querySelector(".hero-art");

    if (!heroArt) return;


    document.addEventListener(
        "mousemove",
        event => {

            const x =
                event.clientX /
                window.innerWidth -
                0.5;


            const y =
                event.clientY /
                window.innerHeight -
                0.5;


            heroArt.style.setProperty(
                "--parallax-x",
                `${x * -14}px`
            );


            heroArt.style.setProperty(
                "--parallax-y",
                `${y * -10}px`
            );

        }
    );


    window.addEventListener(
        "scroll",
        () => {

            const scroll =
                window.scrollY;


            if (
                scroll <
                window.innerHeight
            ) {

                heroArt.style.backgroundPosition =
                    `center ${50 + scroll * 0.025}%`;

            }

        }
    );

}


/* =========================================
   HERO FADE
========================================= */

function setupHeroFade() {

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

            }


            if (heroCard) {

                heroCard.style.opacity =
                    opacity;

            }

        }
    );

}


/* =========================================
   LOADING SCREEN
========================================= */

function runLoadingScreen() {

    const screen =
        document.getElementById(
            "loading-screen"
        );


    const percent =
        document.getElementById(
            "loading-percent"
        );


    const progress =
        document.querySelector(
            ".loader-progress"
        );


    if (!screen) {

        console.error(
            "ERROR: #loading-screen was not found."
        );

        return;

    }


    let value = 0;


    const interval =
        setInterval(
            () => {

                value +=
                    Math.floor(
                        Math.random() * 5
                    ) + 2;


                if (value >= 100) {

                    value = 100;

                    clearInterval(interval);

                }


                if (percent) {

                    percent.textContent =
                        value;

                }


                if (progress) {

                    progress.style.width =
                        `${value}%`;

                }


                if (value >= 100) {

                    setTimeout(
                        () => {

                            screen.classList.add(
                                "loaded"
                            );


                            startFlyingBatarang();

                        },
                        500
                    );

                }

            },
            50
        );

}


/* =========================================
   FLYING BATARANG
========================================= */

function setupFlyingBatarang() {

    const batarang =
        document.getElementById(
            "flying-batarang"
        );


    if (!batarang) return;


    function random(min, max) {

        return Math.random() *
            (max - min) +
            min;

    }


    function fly() {

        const width =
            window.innerWidth;

        const height =
            window.innerHeight;


        const startX =
            random(-100, width);


        const startY =
            random(80, height - 80);


        const endX =
            random(-100, width + 100);


        const endY =
            random(80, height - 80);


        const duration =
            random(1800, 3200);


        const rotation =
            random(360, 1080);


        batarang.style.transition =
            "none";


        batarang.style.left =
            `${startX}px`;


        batarang.style.top =
            `${startY}px`;


        batarang.style.opacity =
            "0";


        batarang.style.transform =
            "rotate(0deg)";


        requestAnimationFrame(
            () => {

                batarang.style.transition =
                    `
                    left ${duration}ms cubic-bezier(.2,.7,.2,1),
                    top ${duration}ms cubic-bezier(.2,.7,.2,1),
                    transform ${duration}ms linear,
                    opacity 350ms ease
                    `;


                batarang.style.left =
                    `${endX}px`;


                batarang.style.top =
                    `${endY}px`;


                batarang.style.opacity =
                    "0.75";


                batarang.style.transform =
                    `rotate(${rotation}deg)`;

            }
        );


        setTimeout(
            () => {

                batarang.style.opacity =
                    "0";

            },
            duration - 300
        );


        setTimeout(
            fly,
            duration +
            random(2500, 6500)
        );

    }


    setTimeout(
        fly,
        1000
    );

}


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "🦇 Auzair Mattoo Portfolio System Starting..."
        );


        setupMobileMenu();

        renderAchievements();

        renderPosts();

        renderProjects();

        setupScrollReveal();

        setupMouseGlow();

        setupCardSpotlight();

        setupBackgroundParallax();

        setupHeroFade();

        setupFlyingBatarang();


        /* Start loading AFTER everything exists */

        runLoadingScreen();


        console.log(
            "🦇 Portfolio System Online."
        );

    }
);
```
