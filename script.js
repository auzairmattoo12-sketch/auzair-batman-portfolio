/* =========================================
AUZAIR MATTOO PORTFOLIO
CLEAN JAVASCRIPT SYSTEM
========================================= */

/* =========================================
CONTENT
========================================= */

const achievements = [

```
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
```

];

const posts = [

```
{
    date: "AUG 2026",
    category: "JOURNEY",
    title: "Why I Built This Portfolio",
    excerpt:
        "A look at why I decided to create my own digital headquarters and document my journey into technology and AI.",
    content:
        "This portfolio is more than just a website. It is a place where I can document projects, achievements, experiments, ideas and everything I build throughout my engineering journey.",
    image: ""
},

{
    date: "COMING SOON",
    category: "AI / MACHINE LEARNING",
    title: "My First AI Project",
    excerpt:
        "Documenting the process of building my first major artificial intelligence project.",
    content:
        "This post will be updated when the project is completed.",
    image: ""
},

{
    date: "COMING SOON",
    category: "DEVELOPMENT",
    title: "What I'm Learning",
    excerpt:
        "A collection of technologies, programming concepts and tools I'm currently exploring.",
    content:
        "This section will contain updates about the technologies and concepts I'm learning.",
    image: ""
}
```

];

const projects = [

```
{
    title: "Personal Portfolio",
    category: "WEB DEVELOPMENT",
    description:
        "A cinematic Batman-inspired personal portfolio built from scratch using HTML, CSS and JavaScript.",
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
```

];

/* =========================================
LOADING SCREEN
========================================= */

function startLoadingScreen() {

```
const loadingScreen =
    document.getElementById("loading-screen");

const loadingPercent =
    document.getElementById("loading-percent");

const loadingProgress =
    document.querySelector(".loader-progress");


if (!loadingScreen) {

    console.error(
        "Loading screen element was not found."
    );

    return;

}


let value = 0;


const interval = setInterval(() => {

    value += Math.floor(Math.random() * 6) + 2;


    if (value >= 100) {

        value = 100;

        clearInterval(interval);

    }


    if (loadingPercent) {

        loadingPercent.textContent = value;

    }


    if (loadingProgress) {

        loadingProgress.style.width =
            value + "%";

    }


    if (value === 100) {

        setTimeout(() => {

            loadingScreen.classList.add("loaded");


            setTimeout(() => {

                startFlyingBatarang();

            }, 900);


        }, 500);

    }


}, 50);
```

}

/* =========================================
MOBILE MENU
========================================= */

function setupMobileMenu() {

```
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
```

}

/* =========================================
RENDER ACHIEVEMENTS
========================================= */

function renderAchievements() {

```
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
```

}

/* =========================================
RENDER POSTS
========================================= */

function renderPosts() {

```
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
                type="button"
                data-post="${index}"
            >
                READ MORE →
            </button>

        `;


        postsGrid.appendChild(article);

    }
);


document
    .querySelectorAll(".read-post")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        button.dataset.post
                    );


                openPost(
                    posts[index]
                );

            }
        );

    });
```

}

/* =========================================
RENDER PROJECTS
========================================= */

function renderProjects() {

```
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


    let imageHTML;


    if (project.image) {

        imageHTML = `

            <div class="project-image has-image">

                <img
                    src="${project.image}"
                    alt="${project.title}"
                >

            </div>

        `;

    } else {

        imageHTML = `

            <div class="project-image">

                <span>
                    ${project.title}
                </span>

            </div>

        `;

    }


    const technologyHTML =
        project.technologies
            .map(
                technology =>
                    `<span>${technology}</span>`
            )
            .join("");


    const githubHTML =
        project.github !== "#"
            ?
            `
            <a
                href="${project.github}"
                target="_blank"
                rel="noopener noreferrer"
            >
                GITHUB →
            </a>
            `
            :
            "";


    const liveHTML =
        project.live !== "#"
            ?
            `
            <a
                href="${project.live}"
                target="_blank"
                rel="noopener noreferrer"
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

                ${technologyHTML}

            </div>

            <div class="project-buttons">

                ${githubHTML}

                ${liveHTML}

            </div>

        </div>

    `;


    projectsGrid.appendChild(article);

});
```

}

/* =========================================
POST MODAL
========================================= */

function openPost(post) {

```
if (!post) return;


const modal =
    document.createElement("div");


modal.className =
    "post-modal";


modal.innerHTML = `

    <div class="post-modal-box">

        <button
            class="close-post"
            type="button"
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


const closeModal = () => {

    modal.remove();

    document.body.style.overflow =
        "";

};


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


document.addEventListener(
    "keydown",
    function escapeHandler(event) {

        if (event.key === "Escape") {

            closeModal();

            document.removeEventListener(
                "keydown",
                escapeHandler
            );

        }

    }
);
```

}

/* =========================================
SCROLL REVEAL
========================================= */

function setupScrollReveal() {

```
const elements =
    document.querySelectorAll(
        ".section, .skill-card, .project-card, .post-card"
    );


if (
    !("IntersectionObserver" in window)
) {

    elements.forEach(element => {

        element.classList.add(
            "visible"
        );

    });

    return;

}


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

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

    element.classList.add(
        "reveal"
    );

    observer.observe(element);

});
```

}

/* =========================================
MOUSE GLOW
========================================= */

function setupMouseGlow() {

```
const mouseGlow =
    document.querySelector(
        ".mouse-glow"
    );


if (!mouseGlow) return;


document.addEventListener(
    "mousemove",
    event => {

        mouseGlow.style.left =
            event.clientX + "px";

        mouseGlow.style.top =
            event.clientY + "px";

    }
);
```

}

/* =========================================
CARD SPOTLIGHT
========================================= */

function setupCardSpotlight() {

```
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
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            card.style.setProperty(
                "--mouse-x",
                x + "px"
            );


            card.style.setProperty(
                "--mouse-y",
                y + "px"
            );

        }
    );

});
```

}

/* =========================================
BACKGROUND PARALLAX
========================================= */

function setupBackgroundParallax() {

```
const heroArt =
    document.querySelector(
        ".hero-art"
    );


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
            x * -14 + "px"
        );


        heroArt.style.setProperty(
            "--parallax-y",
            y * -10 + "px"
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
```

}

/* =========================================
HERO SCROLL EFFECT
========================================= */

function setupHeroScroll() {

```
const heroContent =
    document.querySelector(
        ".hero-content"
    );


const heroCard =
    document.querySelector(
        ".hero-card"
    );


if (
    !heroContent &&
    !heroCard
) return;


window.addEventListener(
    "scroll",
    () => {

        const scroll =
            window.scrollY;


        const fadeStart =
            100;


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
                Math.min(
                    1,
                    opacity
                )
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
```

}

/* =========================================
RANDOM FLYING BATARANG
========================================= */

function startFlyingBatarang() {

```
const batarang =
    document.getElementById(
        "flying-batarang"
    );


if (!batarang) return;


function randomNumber(
    min,
    max
) {

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
        randomNumber(
            -100,
            width
        );


    const startY =
        randomNumber(
            80,
            height - 80
        );


    const endX =
        randomNumber(
            -100,
            width + 100
        );


    const endY =
        randomNumber(
            80,
            height - 80
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


    batarang.style.transition =
        "none";


    batarang.style.left =
        startX + "px";


    batarang.style.top =
        startY + "px";


    batarang.style.opacity =
        "0";


    requestAnimationFrame(() => {

        batarang.style.transition =
            `
            left ${duration}ms cubic-bezier(.2,.7,.2,1),
            top ${duration}ms cubic-bezier(.2,.7,.2,1),
            transform ${duration}ms linear,
            opacity 350ms ease
            `;


        batarang.style.opacity =
            "0.75";


        batarang.style.transform =
            `rotate(${rotation}deg)`;


        batarang.style.left =
            endX + "px";


        batarang.style.top =
            endY + "px";

    });


    setTimeout(() => {

        batarang.style.opacity =
            "0";

    }, Math.max(0, duration - 350));


    setTimeout(
        fly,
        duration +
        randomNumber(
            2500,
            6500
        )
    );

}


setTimeout(
    fly,
    1000
);
```

}

/* =========================================
START EVERYTHING
========================================= */

document.addEventListener(
"DOMContentLoaded",
() => {

```
    renderAchievements();

    renderPosts();

    renderProjects();

    setupMobileMenu();

    setupScrollReveal();

    setupMouseGlow();

    setupCardSpotlight();

    setupBackgroundParallax();

    setupHeroScroll();

    startLoadingScreen();


    console.log(
        "🦇 Auzair Mattoo Portfolio System Online."
    );

}
```

);
