/* =====================================================
AUZAIR MATTOO PORTFOLIO
CONTENT + INTERACTION SYSTEM
===================================================== */

/* =====================================================
ACHIEVEMENTS
EDIT YOUR ACHIEVEMENTS HERE
===================================================== */

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

/* =====================================================
POSTS
EDIT YOUR POSTS HERE
===================================================== */

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
```

];

/* =====================================================
PROJECTS
EDIT YOUR PROJECTS HERE
===================================================== */

const projects = [

```
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
```

];

/* =====================================================
MOBILE MENU
===================================================== */

const menuButton =
document.getElementById("menuButton");

const navLinks =
document.querySelector(".nav-links");

if (menuButton && navLinks) {

```
menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });
```

}

/* =====================================================
RENDER ACHIEVEMENTS
===================================================== */

function renderAchievements() {

```
const timeline =
    document.querySelector(".timeline");

if (!timeline) return;

timeline.innerHTML = "";

achievements.forEach(achievement => {

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

});
```

}

/* =====================================================
RENDER POSTS
===================================================== */

function renderPosts() {

```
const postsGrid =
    document.querySelector(".posts-grid");

if (!postsGrid) return;

postsGrid.innerHTML = "";

posts.forEach((post, index) => {

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

});


document
    .querySelectorAll(".read-post")
    .forEach(button => {

        button.addEventListener("click", () => {

            const index =
                Number(button.dataset.post);

            openPost(posts[index]);

        });

    });
```

}

/* =====================================================
RENDER PROJECTS
===================================================== */

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
```

}

/* =====================================================
POST READER
===================================================== */

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
```

}

/* =====================================================
SCROLL REVEAL
===================================================== */

function initializeScrollReveal() {

```
const elements =
    document.querySelectorAll(
        ".section, .skill-card, .project-card, .post-card"
    );


if (!("IntersectionObserver" in window)) {

    elements.forEach(element => {

        element.classList.add("visible");

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
```

}

/* =====================================================
MOUSE GLOW
===================================================== */

function initializeMouseGlow() {

```
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
```

}

/* =====================================================
CARD SPOTLIGHT
===================================================== */

function initializeCardSpotlight() {

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
```

}

/* =====================================================
BACKGROUND PARALLAX
===================================================== */

function initializeParallax() {

```
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
```

}

/* =====================================================
HERO SCROLL FADE
===================================================== */

function initializeHeroFade() {

```
const heroContent =
    document.querySelector(".hero-content");

const heroCard =
    document.querySelector(".hero-card");


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
```

}

/* =====================================================
LOADING SCREEN
===================================================== */

function initializeLoadingScreen() {

```
const loadingScreen =
    document.getElementById(
        "loading-screen"
    );

const loadingPercent =
    document.getElementById(
        "loading-percent"
    );

const loadingProgress =
    document.querySelector(
        ".loader-progress"
    );


/*
   IMPORTANT:
   If any loading element is missing,
   don't let the website get stuck.
*/

if (
    !loadingScreen ||
    !loadingPercent ||
    !loadingProgress
) {

    console.warn(
        "Loading screen elements missing."
    );

    startFlyingBatarang();

    return;

}


let value = 0;


loadingPercent.textContent =
    "0";

loadingProgress.style.width =
    "0%";


const interval =
    setInterval(() => {

        value +=
            Math.floor(
                Math.random() * 8
            ) + 2;


        if (value >= 100) {

            value = 100;

            clearInterval(interval);

        }


        loadingPercent.textContent =
            value;

        loadingProgress.style.width =
            `${value}%`;


        if (value >= 100) {

            setTimeout(() => {

                loadingScreen.classList.add(
                    "loaded"
                );


                setTimeout(() => {

                    startFlyingBatarang();

                }, 900);

            }, 400);

        }

    }, 45);
```

}

/* =====================================================
RANDOM FLYING BATARANG
===================================================== */

const flyingBatarang =
document.getElementById(
"flying-batarang"
);

function randomNumber(min, max) {

```
return Math.random() *
    (max - min) +
    min;
```

}

function startFlyingBatarang() {

```
if (!flyingBatarang) return;


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
            `
            left ${duration}ms cubic-bezier(.2,.7,.2,1),
            top ${duration}ms cubic-bezier(.2,.7,.2,1),
            transform ${duration}ms linear,
            opacity 350ms ease
            `;


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


setTimeout(() => {

    fly();

}, 1200);
```

}

/* =====================================================
START EVERYTHING
===================================================== */

document.addEventListener(
"DOMContentLoaded",
() => {

```
    renderAchievements();

    renderPosts();

    renderProjects();

    initializeScrollReveal();

    initializeMouseGlow();

    initializeCardSpotlight();

    initializeParallax();

    initializeHeroFade();

    initializeLoadingScreen();


    console.log(
        "🦇 Auzair Mattoo Portfolio System Online."
    );

}
```

);
