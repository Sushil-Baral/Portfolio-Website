/* =========================================================
   PERSONAL ENGINEERING PORTFOLIO
   Main JavaScript File
   ========================================================= */


/* =========================================================
   1. WAIT UNTIL THE PAGE IS FULLY LOADED
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       2. MOBILE NAVIGATION
       ===================================================== */

    const menuToggle =
        document.getElementById("menu-toggle");

    const navMenu =
        document.getElementById("nav-menu");


    /*
       Check that the navigation elements actually exist.
       This prevents JavaScript errors if something is missing.
    */

    if (menuToggle && navMenu) {


        /* -----------------------------------------------
           Open / Close mobile menu
        ------------------------------------------------ */

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("open");


            const isOpen =
                navMenu.classList.contains("open");


            /* Update accessibility information */

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );


            /* Change hamburger icon */

            if (isOpen) {

                menuToggle.innerHTML = "×";

                menuToggle.setAttribute(
                    "aria-label",
                    "Close navigation"
                );

            } else {

                menuToggle.innerHTML = "☰";

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            }

        });


        /* -----------------------------------------------
           Close menu when a navigation link is clicked
        ------------------------------------------------ */

        const navLinks =
            navMenu.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("open");

                menuToggle.innerHTML = "☰";

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            });

        });


        /* -----------------------------------------------
           Close menu when clicking outside navigation
        ------------------------------------------------ */

        document.addEventListener("click", function (event) {

            const clickedInsideMenu =
                navMenu.contains(event.target);

            const clickedButton =
                menuToggle.contains(event.target);


            if (
                !clickedInsideMenu &&
                !clickedButton &&
                navMenu.classList.contains("open")
            ) {

                navMenu.classList.remove("open");

                menuToggle.innerHTML = "☰";

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            }

        });


        /* -----------------------------------------------
           Reset menu when returning to desktop size
        ------------------------------------------------ */

        window.addEventListener("resize", function () {

            if (window.innerWidth > 850) {

                navMenu.classList.remove("open");

                menuToggle.innerHTML = "☰";

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }



    /* =====================================================
       3. PROJECT INFORMATION
       ===================================================== */

    const projectData = {


        /* -------------------------------------------------
           PROJECT 1 — FEA
        ------------------------------------------------- */

        fea: {

            title:
                "MacPherson Strut & Steering Knuckle Analysis",

            description:
                "Comparative static stress analysis and high-cycle fatigue life prediction of a MacPherson strut lower control arm and steering knuckle under representative Nepal rough-road loading conditions.",

            details: `

                <h3>Project Overview</h3>

                <p>
                    This project focuses on evaluating the structural
                    behavior of important suspension components using
                    Finite Element Analysis.
                </p>

                <br>

                <h3>Components</h3>

                <ul>

                    <li>
                        MacPherson strut lower control arm
                    </li>

                    <li>
                        Steering knuckle
                    </li>

                </ul>

                <br>

                <h3>Analysis</h3>

                <ul>

                    <li>
                        Static structural analysis
                    </li>

                    <li>
                        Stress and deformation evaluation
                    </li>

                    <li>
                        High-cycle fatigue life prediction
                    </li>

                    <li>
                        Comparison under rough-road loading
                    </li>

                </ul>

                <br>

                <h3>Software & Tools</h3>

                <p>
                    ANSYS · CAD · Engineering Calculations
                </p>

            `

        },


        /* -------------------------------------------------
           PROJECT 2 — MATLAB LANDING GEAR
        ------------------------------------------------- */

        landing: {

            title:
                "Landing Gear Analysis Using MATLAB",

            description:
                "A compact mathematical model developed to study the dynamic response of an aircraft landing gear system.",

            details: `

                <h3>Project Overview</h3>

                <p>
                    The project models the landing gear as a
                    mass-spring-damper system and evaluates its
                    dynamic response using MATLAB.
                </p>

                <br>

                <h3>Inputs</h3>

                <ul>

                    <li>
                        Mass
                    </li>

                    <li>
                        Stiffness
                    </li>

                    <li>
                        Damping coefficient
                    </li>

                    <li>
                        Initial velocity
                    </li>

                    <li>
                        Initial displacement
                    </li>

                </ul>

                <br>

                <h3>Outputs</h3>

                <ul>

                    <li>
                        Natural frequency
                    </li>

                    <li>
                        Damping type
                    </li>

                    <li>
                        Dynamic response
                    </li>

                    <li>
                        Response plot
                    </li>

                </ul>

                <br>

                <h3>Software</h3>

                <p>
                    MATLAB
                </p>

            `

        },


        /* -------------------------------------------------
           PROJECT 3 — FUTURE PROJECT
        ------------------------------------------------- */

        future: {

            title:
                "CFD Analysis of an Airfoil",

            description:
                "This project card is reserved for another engineering project.",

            details: `

                <h3>Suggestion on the Projects</h3>

                <p>
                    You can suggest through contact section
                </p>

                <br>

                <h3>Software</h3>

                <p>
                    Pending...
                </p>

            `

        }

    };



    /* =====================================================
       4. PROJECT MODAL / POP-UP
       ===================================================== */

    const projectModal =
        document.getElementById("project-modal");

    const modalTitle =
        document.getElementById("modal-title");

    const modalDescription =
        document.getElementById("modal-description");

    const modalDetails =
        document.getElementById("modal-details");

    const modalClose =
        document.querySelector(".modal-close");


    /* -----------------------------------------------------
       Open project popup
    ----------------------------------------------------- */

    const projectButtons =
        document.querySelectorAll(".text-button");


    projectButtons.forEach(function (button) {


        button.addEventListener("click", function () {


            const projectID =
                button.getAttribute("data-project");


            const project =
                projectData[projectID];


            /* Make sure project exists */

            if (!project) {

                console.error(
                    "Project information not found:",
                    projectID
                );

                return;

            }


            /* Insert project information */

            modalTitle.textContent =
                project.title;


            modalDescription.textContent =
                project.description;


            modalDetails.innerHTML =
                project.details;


            /* Open modal */

            projectModal.classList.add("open");

            projectModal.setAttribute(
                "aria-hidden",
                "false"
            );


            /* Prevent background page scrolling */

            document.body.style.overflow =
                "hidden";

        });

    });



    /* =====================================================
       5. CLOSE PROJECT POPUP
       ===================================================== */

    function closeProjectModal() {


        if (!projectModal) {

            return;

        }


        projectModal.classList.remove("open");

        projectModal.setAttribute(
            "aria-hidden",
            "true"
        );


        /* Allow page scrolling again */

        document.body.style.overflow =
            "";

    }


    /* Close using X button */

    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeProjectModal
        );

    }


    /* Close by clicking outside popup */

    if (projectModal) {

        projectModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === projectModal
                ) {

                    closeProjectModal();

                }

            }
        );

    }


    /* Close using Escape key */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                projectModal &&
                projectModal.classList.contains("open")
            ) {

                closeProjectModal();

            }

        }
    );



    /* =====================================================
       6. CONTACT FORM
       ===================================================== */

    const contactForm =
        document.getElementById("contact-form");


    if (contactForm) {


        contactForm.addEventListener(
            "submit",
            function (event) {


                /* Stop normal form submission */

                event.preventDefault();


                /* Get form values */

                const formData =
                    new FormData(contactForm);


                const name =
                    formData.get("name");


                const email =
                    formData.get("email");


                const message =
                    formData.get("message");


                /* -----------------------------------------
                   IMPORTANT:
                   CHANGE THIS TO YOUR REAL EMAIL
                ----------------------------------------- */

                const destinationEmail =
                    "YOUR_EMAIL@example.com";


                /* Create email subject */

                const subject =
                    encodeURIComponent(
                        "Portfolio Contact - " + name
                    );


                /* Create email body */

                const body =
                    encodeURIComponent(

                        "Hello,\n\n" +

                        "Name: " +
                        name +
                        "\n\n" +

                        "Email: " +
                        email +
                        "\n\n" +

                        "Message:\n" +
                        message +
                        "\n\n" +

                        "Sent from my personal portfolio website."

                    );


                /* Open user's email application */

                window.location.href =
                    "mailto:" +
                    destinationEmail +
                    "?subject=" +
                    subject +
                    "&body=" +
                    body;


            }
        );

    }



    /* =====================================================
       7. ACTIVE NAVIGATION
       Highlights the section currently being viewed
       ===================================================== */

    const sections =
        document.querySelectorAll("main section[id]");


    const navigationLinks =
        document.querySelectorAll(
            "#nav-menu a"
        );


    if (
        sections.length > 0 &&
        navigationLinks.length > 0
    ) {


        window.addEventListener(
            "scroll",
            function () {


                let currentSection = "";


                sections.forEach(function (section) {


                    const sectionTop =
                        section.offsetTop - 150;


                    const sectionHeight =
                        section.offsetHeight;


                    if (
                        window.scrollY >= sectionTop &&
                        window.scrollY <
                        sectionTop + sectionHeight
                    ) {

                        currentSection =
                            section.getAttribute("id");

                    }

                });


                navigationLinks.forEach(
                    function (link) {


                        link.classList.remove(
                            "active"
                        );


                        const target =
                            link.getAttribute("href");


                        if (
                            target ===
                            "#" + currentSection
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    }
                );

            }
        );

    }



    /* =====================================================
       8. SMOOTH SCROLLING
       ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {


            link.addEventListener(
                "click",
                function (event) {


                    const targetID =
                        link.getAttribute("href");


                    /*
                       Ignore links that only contain "#"
                    */

                    if (
                        targetID === "#" ||
                        targetID.length <= 1
                    ) {

                        return;

                    }


                    const targetElement =
                        document.querySelector(
                            targetID
                        );


                    if (targetElement) {

                        event.preventDefault();


                        targetElement.scrollIntoView({

                            behavior: "smooth",

                            block: "start"

                        });

                    }

                }
            );

        });



    /* =====================================================
       9. SIMPLE SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".project-card, .skill-card, .timeline-item, .info-card, .research-list span"
        );


    /*
       Check whether browser supports
       IntersectionObserver.
    */

    if (
        "IntersectionObserver"
        in window
    ) {


        const observer =
            new IntersectionObserver(
                function (entries, observer) {


                    entries.forEach(
                        function (entry) {


                            if (
                                entry.isIntersecting
                            ) {


                                entry.target.classList.add(
                                    "show"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {

                    threshold: 0.12

                }
            );


        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "reveal"
                );

                observer.observe(
                    element
                );

            }
        );

    }



    /* =====================================================
       10. IMAGE ERROR HANDLING
       ===================================================== */

    const profileImage =
        document.querySelector(
            ".profile-photo"
        );


    if (profileImage) {


        profileImage.addEventListener(
            "error",
            function () {


                console.warn(
                    "Profile image could not be loaded. Check the image path."
                );


            }
        );

    }



    /* =====================================================
       11. CURRENT YEAR IN FOOTER
       ===================================================== */

    const footer =
        document.querySelector("footer");


    if (footer) {


        /*
           If your footer contains "2026",
           this automatically updates it
           in future years.
        */

        footer.innerHTML =
            footer.innerHTML.replace(
                /2026/g,
                new Date().getFullYear()
            );

    }

    // ===============================
// SPOTIFY-STYLE MUSIC PLAYER
// ===============================

const songs = [
    {
        title: "Song 1",
        artist: "Artist 1",
        src: "music/song1.mp3"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        src: "music/song2.mp3"
    },
    {
        title: "Song 3",
        artist: "Artist 3",
        src: "music/song3.mp3"
    }
];

let currentSongIndex = 0;
let isPlaying = false;

const audio = new Audio();


// ===============================
// LOAD SONG
// ===============================

function loadSong(index, autoplay = false) {

    if (index < 0) {
        index = songs.length - 1;
    }

    if (index >= songs.length) {
        index = 0;
    }

    currentSongIndex = index;

    const song = songs[currentSongIndex];

    audio.src = song.src;
    audio.load();

    // Update song information if these elements exist
    const titleElement = document.querySelector("#song-title");
    const artistElement = document.querySelector("#song-artist");

    if (titleElement) {
        titleElement.textContent = song.title;
    }

    if (artistElement) {
        artistElement.textContent = song.artist;
    }

    if (autoplay) {
        playSong();
    }
}


// ===============================
// PLAY
// ===============================

function playSong() {

    audio.play()
        .then(() => {
            isPlaying = true;
            updatePlayButton();
        })
        .catch(error => {
            console.error("Unable to play song:", error);
        });
}


// ===============================
// PAUSE
// ===============================

function pauseSong() {

    audio.pause();

    isPlaying = false;

    updatePlayButton();
}


// ===============================
// PLAY / PAUSE
// ===============================

function togglePlay() {

    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
}


// ===============================
// NEXT SONG
// ===============================

function nextSong() {

    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    loadSong(currentSongIndex, true);
}


// ===============================
// PREVIOUS SONG
// ===============================

function previousSong() {

    currentSongIndex--;

    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }

    loadSong(currentSongIndex, true);
}


// ===============================
// IMPORTANT:
// MOVE TO NEXT SONG ONLY
// WHEN THE CURRENT SONG ACTUALLY ENDS
// ===============================

audio.addEventListener("ended", function () {

    nextSong();

});


// ===============================
// UPDATE PLAY BUTTON
// ===============================

function updatePlayButton() {

    const playButton = document.querySelector("#play-button");

    if (!playButton) return;

    if (isPlaying) {
        playButton.textContent = "❚❚";
    } else {
        playButton.textContent = "▶";
    }
}


// ===============================
// OPTIONAL PROGRESS BAR
// ===============================

audio.addEventListener("timeupdate", function () {

    const progressBar = document.querySelector("#progress-bar");

    if (!progressBar || !audio.duration) return;

    const progress =
        (audio.currentTime / audio.duration) * 100;

    progressBar.value = progress;

});


// ===============================
// CLICK PROGRESS BAR
// ===============================

const progressBar = document.querySelector("#progress-bar");

if (progressBar) {

    progressBar.addEventListener("input", function () {

        if (!audio.duration) return;

        audio.currentTime =
            (progressBar.value / 100) * audio.duration;

    });

}


// ===============================
// BUTTONS
// ===============================

const playButton = document.querySelector("#play-button");
const nextButton = document.querySelector("#next-button");
const previousButton = document.querySelector("#previous-button");

if (playButton) {
    playButton.addEventListener("click", togglePlay);
}

if (nextButton) {
    nextButton.addEventListener("click", nextSong);
}

if (previousButton) {
    previousButton.addEventListener("click", previousSong);
}


// ===============================
// START WITH FIRST SONG
// ===============================

loadSong(0, false);


});