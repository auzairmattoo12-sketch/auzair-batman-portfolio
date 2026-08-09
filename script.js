/* =====================================================
   AUZAIR MATTOO PORTFOLIO
   CLEAN JAVASCRIPT SYSTEM
===================================================== */


/* =====================================================
   CONTENT
===================================================== */


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


/* =====================================================
   START EVERYTHING AFTER HTML LOADS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeMusicSystem();
   
    initializeNavigation();

    renderAchievements();

    renderProjects();

    renderPosts();

    initializePostReader();

    initializeScrollReveal();

    initializeMouseGlow();

    initializeCardSpotlight();

    initializeBackgroundParallax();

    initializeHeroFade();

    initializeLoadingScreen();

    console.log(
        "🦇 Auzair Mattoo Portfolio System Online."
    );

});


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

function initializeNavigation() {

    const menuButton =
        document.getElementById("menuButton");

    const navLinks =
        document.querySelector(".nav-links");


    if (!menuButton || !navLinks) {
        return;
    }


    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });


    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

            });

        });

}


/* =====================================================
   ACHIEVEMENTS
===================================================== */

function renderAchievements() {

    const timeline =
        document.querySelector(".timeline");


    if (!timeline) {
        return;
    }


    timeline.innerHTML = "";


    achievements.forEach(achievement => {

        const item =
            document.createElement("div");

        item.className =
            "timeline-item";


        const imageHTML =
            achievement.image
                ? `
                    <img
                        src="${achievement.image}"
                        alt="${achievement.title}"
                        class="achievement-image"
                    >
                `
                : "";


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

                ${imageHTML}

            </div>

        `;


        timeline.appendChild(item);

    });

}


/* =====================================================
   PROJECTS
===================================================== */

function renderProjects() {

    const projectsGrid =
        document.querySelector(".projects-grid");


    if (!projectsGrid) {
        return;
    }


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
                .map(technology => `
                    <span>
                        ${technology}
                    </span>
                `)
                .join("");


        let buttonsHTML = "";


        if (project.github !== "#") {

            buttonsHTML += `

                <a
                    href="${project.github}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GITHUB →
                </a>

            `;

        }


        if (project.live !== "#") {

            buttonsHTML += `

                <a
                    href="${project.live}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LIVE DEMO →
                </a>

            `;

        }


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

                ${
                    buttonsHTML
                        ? `
                            <div class="project-buttons">
                                ${buttonsHTML}
                            </div>
                        `
                        : ""
                }

            </div>

        `;


        projectsGrid.appendChild(article);

    });

}


/* =====================================================
   POSTS
===================================================== */

function renderPosts() {

    const postsGrid =
        document.querySelector(".posts-grid");


    if (!postsGrid) {
        return;
    }


    postsGrid.innerHTML = "";


    posts.forEach((post, index) => {

        const article =
            document.createElement("article");


        article.className =
            "post-card";


        const imageHTML =
            post.image
                ? `
                    <img
                        src="${post.image}"
                        alt="${post.title}"
                        class="post-image"
                    >
                `
                : "";


        article.innerHTML = `

            ${imageHTML}

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
                type="button"
                class="read-post"
                data-post="${index}"
            >
                READ MORE →
            </button>

        `;


        postsGrid.appendChild(article);

    });

}


/* =====================================================
   POST READER
===================================================== */

function initializePostReader() {

    const postsGrid =
        document.querySelector(".posts-grid");


    if (!postsGrid) {
        return;
    }


    postsGrid.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(".read-post");


            if (!button) {
                return;
            }


            const index =
                Number(button.dataset.post);


            const post =
                posts[index];


            if (post) {
                openPost(post);
            }

        }
    );

}


/* =====================================================
   OPEN POST
===================================================== */

function openPost(post) {

    const modal =
        document.createElement("div");


    modal.className =
        "post-modal";


    const imageHTML =
        post.image
            ? `
                <img
                    src="${post.image}"
                    alt="${post.title}"
                    class="modal-post-image"
                >
            `
            : "";


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

            ${imageHTML}

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


    const closeButton =
        modal.querySelector(".close-post");


    function closeModal() {

        modal.remove();

        document.body.style.overflow =
            "";

    }


    closeButton.addEventListener(
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

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

function initializeScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".section, .skill-card, .project-card, .post-card"
        );


    if (!elements.length) {
        return;
    }


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

}


/* =====================================================
   MOUSE GLOW
===================================================== */

function initializeMouseGlow() {

    const mouseGlow =
        document.querySelector(".mouse-glow");


    if (!mouseGlow) {
        return;
    }


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


/* =====================================================
   CARD SPOTLIGHT
===================================================== */

function initializeCardSpotlight() {

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


/* =====================================================
   BACKGROUND PARALLAX
===================================================== */

function initializeBackgroundParallax() {

    const heroArt =
        document.querySelector(".hero-art");


    if (!heroArt) {
        return;
    }


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

            if (window.scrollY <
                window.innerHeight) {

                heroArt.style.backgroundPosition =
                    `center ${
                        50 +
                        window.scrollY * 0.025
                    }%`;

            }

        }
    );

}


/* =====================================================
   HERO FADE
===================================================== */

function initializeHeroFade() {

    const heroContent =
        document.querySelector(".hero-content");


    const heroCard =
        document.querySelector(".hero-card");


    if (!heroContent && !heroCard) {
        return;
    }


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

}
/* =====================================================
   CINEMATIC MUSIC SYSTEM
===================================================== */

function initializeMusicSystem() {

    const music =
        document.getElementById("background-music");

    const musicToggle =
        document.getElementById("music-toggle");

    const musicVolume =
        document.getElementById("music-volume");

    const musicControl =
        document.getElementById("music-control");

    const enterNight =
        document.getElementById("enter-night");


    if (
        !music ||
        !musicToggle ||
        !musicVolume ||
        !musicControl ||
        !enterNight
    ) {

        console.error(
            "Music system elements missing."
        );

        return;

    }


    /* -------------------------------------------------
       DEFAULT VOLUME
    ------------------------------------------------- */

    music.volume =
        Number(musicVolume.value);


    /* -------------------------------------------------
       ENTER THE NIGHT
    ------------------------------------------------- */

    enterNight.addEventListener(
        "click",
        async () => {

            try {

                music.volume = 0;

                await music.play();

                musicControl.classList.add(
                    "active"
                );

                musicToggle
                    .querySelector(".music-label")
                    .textContent =
                    "SOUND ON";


                /* Smooth fade-in */

                let volume = 0;

                const fadeIn =
                    setInterval(() => {

                        volume += 0.01;

                        music.volume =
                            Math.min(
                                volume,
                                Number(
                                    musicVolume.value
                                )
                            );


                        if (
                            volume >=
                            Number(
                                musicVolume.value
                            )
                        ) {

                            clearInterval(
                                fadeIn
                            );

                        }

                    }, 45);


            } catch (error) {

                console.warn(
                    "Music could not start:",
                    error
                );

            }


            /* Close loading screen */

            const loadingScreen =
                document.getElementById(
                    "loading-screen"
                );


            if (loadingScreen) {

                loadingScreen.classList.add(
                    "loaded"
                );

            }


            /* Start flying Batarang */

            setTimeout(() => {

                startFlyingBatarang();

            }, 800);

        }
    );


    /* -------------------------------------------------
       PLAY / PAUSE
    ------------------------------------------------- */

    musicToggle.addEventListener(
        "click",
        () => {

            if (music.paused) {

                music.play();

                musicToggle
                    .querySelector(".music-label")
                    .textContent =
                    "SOUND ON";

            } else {

                music.pause();

                musicToggle
                    .querySelector(".music-label")
                    .textContent =
                    "SOUND OFF";

            }

        }
    );


    /* -------------------------------------------------
       VOLUME
    ------------------------------------------------- */

    musicVolume.addEventListener(
        "input",
        () => {

            music.volume =
                Number(
                    musicVolume.value
                );

        }
    );

}

/* =====================================================
   LOADING SCREEN
===================================================== */

function initializeLoadingScreen() {

    const screen =
        document.getElementById("loading-screen");

    const percent =
        document.getElementById("loading-percent");

    const progress =
        document.querySelector(".loader-progress");

    const enterNight =
        document.getElementById("enter-night");


    if (!screen) {
        console.error("Loading screen not found.");
        return;
    }


    if (!percent || !progress) {

        console.error(
            "Loading screen elements are missing."
        );

        screen.classList.add("loaded");

        return;

    }


    let value = 0;

    let finished = false;


    const interval =
        setInterval(() => {

            value +=
                Math.floor(
                    Math.random() * 8
                ) + 2;


            if (value >= 100) {

                value = 100;

                clearInterval(interval);

                finished = true;

            }


            percent.textContent =
                value;


            progress.style.width =
                `${value}%`;


            /* -----------------------------------------
               SHOW ENTER BUTTON
            ----------------------------------------- */

            if (
                value === 100 &&
                finished
            ) {

                setTimeout(() => {

                    if (enterNight) {

                        enterNight.classList.add(
                            "visible"
                        );

                    } else {

                        /*
                         Fallback:
                         If the button doesn't exist,
                         don't leave the visitor stuck.
                        */

                        screen.classList.add(
                            "loaded"
                        );

                        setTimeout(() => {

                            startFlyingBatarang();

                        }, 800);

                    }

                }, 500);

            }

        }, 45);

}

/* =====================================================
   RANDOM FLYING BATARANG
===================================================== */

function startFlyingBatarang() {

    const batarang =
        document.getElementById(
            "flying-batarang"
        );


    if (!batarang) {
        return;
    }


    function randomNumber(min, max) {

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
            `${startX}px`;


        batarang.style.top =
            `${startY}px`;


        batarang.style.opacity =
            "0";


        requestAnimationFrame(() => {

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
                    `${endX}px`;


                batarang.style.top =
                    `${endY}px`;

            });

        });


        setTimeout(() => {

            batarang.style.opacity =
                "0";

        }, Math.max(300, duration - 300));


        setTimeout(() => {

            fly();

        }, duration + randomNumber(2500, 6500));

    }


    fly();

}
