const root = document.documentElement;
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const motion = window.gsap;
const scrollEffects = window.ScrollTrigger;
if (motion && scrollEffects) motion.registerPlugin(scrollEffects);
const emailAddress = "ghimireishan55@gmail.com";

const work = {
  "web-development": {
    title: "Web Development",
    description:
      "Live websites and applications from my internship and independent projects.",
    caption: "Live websites and web applications",
    highlights: [
      "Responsive interfaces",
      "Full-stack development",
      "Database integration",
    ],
    projects: [
      {
        title: "QJMOTOR Nepal",
        type: "Internship · Live website",
        art: "QJMOTOR Nepal",
        color: "plum",
        screenshot: "qjmotor.webp",
        url: "https://www.qjmotornepal.com/",
        description:
          "I contributed to the Nepal distributor’s website during my internship at Omni Trident A.I. The site showcases motorcycles and gives visitors a way to contact the team or request a test ride.",
      },
      {
        title: "HAMS Group",
        type: "Internship · Live website",
        art: "HAMS Group",
        color: "green",
        screenshot: "hams-group.webp",
        url: "https://hamsgroup.com.np/",
        description:
          "I contributed to the HAMS Group website during my internship at Omni Trident A.I.",
      },
      {
        title: "HAMS Hospital Tender Portal",
        type: "Web application · Live",
        art: "HAMS Tender",
        color: "navy",
        screenshot: "hams-tender.webp",
        url: "https://hams-hospital-tender.vercel.app/login",
        linkLabel: "Open sign-in page",
        description:
          "A web portal for HAMS Hospital’s tender process. The live link opens the sign-in page.",
      },
      {
        title: "Paragon Academy Website",
        type: "Co-built · Full-stack",
        art: "Paragon Academy",
        color: "navy",
        screenshot: "paragon.webp",
        url: "https://paragonacademy.edu.np/",
        description:
          "I co-built the academy’s official website, contributing to the user interface, site functionality, and database integration.",
      },
      {
        title: "SXC Notes",
        type: "Solo project · Full-stack",
        art: "SXC Notes",
        color: "umber",
        screenshot: "sxc-notes.webp",
        url: "https://sxcnotes.tech/",
        description:
          "I built a platform where St. Xavier’s College students can access academic notes. I worked on the front end, back end, and database.",
      },
    ],
  },
  "semester-projects": {
    title: "Semester Projects",
    description:
      "Projects from my BSc CSIT journey, covering machine learning, algorithm visualization, and object-oriented programming.",
    caption: "Projects from my BSc CSIT coursework",
    highlights: [
      "House price prediction",
      "Algorithm visualization",
      "Object-oriented C++",
    ],
    projects: [
      {
        title: "Hamro Ghar — House Price Prediction",
        type: "Python · scikit-learn · Node.js",
        art: "Hamro Ghar",
        color: "green",
        screenshot: "hamro-ghar.webp",
        screenshotAspect: "1912 / 903",
        description:
          "I built a data pipeline and trained a Gradient Boosting model to predict house prices in Nepal, then integrated it into a Node.js web app.",
      },
      {
        title: "AlgoVisual — Algorithm Visualizer",
        type: "Algorithms · Visualization",
        art: "Algorithm Visualizer",
        color: "navy",
        screenshot: "algovisual.webp",
        screenshotAspect: "1890 / 897",
        description:
          "An educational tool that animates computer science algorithms so learners can follow how they work step by step.",
      },
      {
        title: "Car Rental System",
        type: "C++ · Object-oriented programming",
        art: "Car Rental System",
        color: "plum",
        description:
          "An academic car rental system built in C++ to apply object-oriented programming concepts.",
      },
    ],
  },
  "ai-video": {
    title: "AI Video & Editing",
    description:
      "I explore how AI-generated footage and hands-on editing can turn an idea into a short video.",
    caption: "From a visual idea to a finished cut",
    highlights: [
      "Prompts and visual references",
      "AI-generated footage",
      "Editing and sound",
    ],
    projects: [
      {
        title: "A1 · The Choice",
        type: "QJMOTOR Nepal campaign · English · 10 seconds",
        art: "A1",
        color: "plum",
        video: "qjmotor-a1.mp4",
        poster: "qjmotor-a1-poster.jpg",
        description: "The first cut in the QJMOTOR Nepal short-form campaign.",
      },
      {
        title: "A2 · Italian Heritage",
        type: "QJMOTOR Nepal campaign · English · 10 seconds",
        art: "A2",
        color: "green",
        video: "qjmotor-a2.mp4",
        poster: "qjmotor-a2-poster.jpg",
        description: "A campaign cut centered on Italian motorcycle heritage.",
      },
      {
        title: "A3 · Racing DNA",
        type: "QJMOTOR Nepal campaign · English · 10 seconds",
        art: "A3",
        color: "umber",
        video: "qjmotor-a3.mp4",
        poster: "qjmotor-a3-poster.jpg",
        description: "The racing-themed cut in the QJMOTOR Nepal campaign.",
      },
      {
        title: "AI video generation",
        type: "Creative process · Generation",
        art: "From idea to frame",
        color: "umber",
        description:
          "I explore prompts and visual references, generate scenes, and compare variations to find shots that fit the idea.",
      },
      {
        title: "Video editing",
        type: "Creative process · Post-production",
        art: "From frame to cut",
        color: "plum",
        description:
          "I bring shots together into a sequence, working on timing, transitions, and the relationship between sound and picture.",
      },
    ],
  },
};

function readPreference(key, session = false) {
  try {
    return (session ? sessionStorage : localStorage).getItem(key);
  } catch {
    return null;
  }
}

function savePreference(key, value, session = false) {
  try {
    (session ? sessionStorage : localStorage).setItem(key, value);
  } catch {
    // The interaction still works when the browser blocks storage.
  }
}

const intro = document.querySelector("#intro");
if (
  !reducedMotion.matches &&
  !location.hash &&
  !readPreference("ig-intro", true)
) {
  intro.hidden = false;
  savePreference("ig-intro", "seen", true);
  const count = document.querySelector("#load-count");
  const start = performance.now();
  function updateIntro(now) {
    const progress = Math.min(100, Math.round((now - start) / 8.2));
    count.textContent = String(progress).padStart(3, "0");
    if (progress < 100) {
      requestAnimationFrame(updateIntro);
      return;
    }
    intro.classList.add("departing");
    setTimeout(() => {
      intro.hidden = true;
    }, 650);
  }
  requestAnimationFrame(updateIntro);
}

const pull = document.querySelector(".pull");
const cordLines = pull.querySelectorAll(".cord-line");
const cordHandle = pull.querySelector(".cord-handle");
const cord = { x: 0, y: 0 };
const palette = [
  "--paper",
  "--surface",
  "--ink",
  "--muted",
  "--line",
  "--wall",
  "--trim",
  "--shadow",
  "--accent",
];
let themeTween;
let cordTween;
let pullStart;

function paletteColors() {
  const style = getComputedStyle(root);
  return Object.fromEntries(
    palette.map((name) => [name, style.getPropertyValue(name).trim()]),
  );
}

function clearPalette() {
  palette.forEach((name) => root.style.removeProperty(name));
  root.classList.remove("theme-changing");
}

function setTheme(dark, animate = false) {
  const previous = animate ? paletteColors() : null;
  themeTween?.kill();
  clearPalette();
  root.dataset.theme = dark ? "dark" : "light";
  pull.setAttribute("aria-checked", String(dark));
  document.querySelector('meta[name="theme-color"]').content = dark
    ? "#1a1817"
    : "#ebe7e0";
  if (!previous) return;
  const next = paletteColors();
  root.classList.add("theme-changing");
  motion.set(root, previous);
  themeTween = motion.to(root, {
    ...next,
    duration: 0.72,
    ease: "power2.inOut",
    onComplete: clearPalette,
  });
}
setTheme(readPreference("ig-theme") === "dark");

function drawCord() {
  const x = 56 + cord.x;
  const y = 213 + cord.y;
  const path = `M56 -8 C56 71 ${56 - cord.x * 0.5} 112 ${56 + cord.x * 0.24} 153 C${56 + cord.x * 0.9} 181 ${x} ${y - 17} ${x} ${y}`;
  cordLines.forEach((line) => line.setAttribute("d", path));
  cordHandle.setAttribute(
    "transform",
    `translate(${x} ${y}) rotate(${cord.x * -0.85})`,
  );
}

function springCord() {
  cordTween?.kill();
  if (!motion || reducedMotion.matches) {
    cord.x = cord.y = 0;
    drawCord();
    return;
  }
  cordTween = motion
    .timeline({ onUpdate: drawCord })
    .to(cord, {
      x: cord.x > 5 ? -27 : 29,
      y: -12,
      duration: 0.17,
      ease: "power2.out",
    })
    .to(cord, { x: 0, y: 0, duration: 1.15, ease: "elastic.out(1,.37)" });
}

pull.addEventListener("pointerdown", (event) => {
  if (event.button !== 0 || !event.isPrimary) return;
  cordTween?.kill();
  pullStart = { x: event.clientX, y: event.clientY };
  pull.setPointerCapture(event.pointerId);
});
pull.addEventListener("pointermove", (event) => {
  if (!pullStart || !event.isPrimary || reducedMotion.matches) return;
  cord.x = Math.max(-36, Math.min(36, event.clientX - pullStart.x));
  cord.y = Math.max(0, Math.min(75, event.clientY - pullStart.y));
  drawCord();
});
pull.addEventListener("pointerup", () => {
  pullStart = null;
});
pull.addEventListener("lostpointercapture", () => {
  if (!pullStart) return;
  pullStart = null;
  springCord();
});
pull.addEventListener("click", () => {
  const dark = root.dataset.theme !== "dark";
  springCord();
  setTheme(dark, Boolean(motion && !reducedMotion.matches));
  savePreference("ig-theme", root.dataset.theme);
});

const portrait = document.querySelector(".portrait");
const portraitPhoto = portrait.querySelector(".portrait-photo");
const portraitImage = portraitPhoto.querySelector(".portrait-mono");
const brushCanvas = portraitPhoto.querySelector(".portrait-brush");
const brushContext = brushCanvas.getContext("2d");
const trailCanvas = document.createElement("canvas");
const trailContext = trailCanvas.getContext("2d");
let brushFrame;
let brushPoint;
let brushLastPaint = 0;
let brushScale = 1;
let brushTime = 0;
let brushStamps = [];

function drawPortraitBrush(time) {
  brushFrame = null;
  const { width, height } = brushCanvas;
  if (!width || !height || !portraitImage.naturalWidth) return;
  const radius = Math.min(118 * brushScale, width * 0.24);
  trailContext.globalCompositeOperation = "destination-out";
  trailContext.fillStyle = `rgba(0,0,0,${1 - Math.exp(-Math.min(60, time - brushTime) / 220)})`;
  trailContext.fillRect(0, 0, width, height);
  trailContext.globalCompositeOperation = "source-over";
  if (brushPoint) {
    brushStamps.push(brushPoint);
    brushLastPaint = time;
  }
  brushStamps.forEach(({ x, y }) => {
    const brush = trailContext.createRadialGradient(
      x,
      y,
      radius * 0.25,
      x,
      y,
      radius,
    );
    brush.addColorStop(0, "#000");
    brush.addColorStop(1, "#0000");
    trailContext.fillStyle = brush;
    trailContext.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  });
  brushStamps = [];
  brushContext.clearRect(0, 0, width, height);
  if (time - brushLastPaint > 1100) {
    trailContext.clearRect(0, 0, width, height);
    return;
  }
  brushContext.globalCompositeOperation = "source-over";
  brushContext.drawImage(portraitImage, 0, 0, width, height);
  brushContext.globalCompositeOperation = "destination-in";
  brushContext.drawImage(trailCanvas, 0, 0);
  brushTime = time;
  brushFrame = requestAnimationFrame(drawPortraitBrush);
}

if (brushContext && trailContext) {
  new ResizeObserver(([entry]) => {
    brushScale = Math.min(1.5, devicePixelRatio);
    const { width, height } = entry.contentRect;
    brushCanvas.width = trailCanvas.width = Math.round(width * brushScale);
    brushCanvas.height = trailCanvas.height = Math.round(height * brushScale);
    brushPoint = null;
    brushStamps = [];
  }).observe(portraitPhoto);
}

function revealPortrait(show, centered = false) {
  if (centered) {
    portraitPhoto.style.setProperty("--spot-x", "50%");
    portraitPhoto.style.setProperty("--spot-y", "43%");
  }
  const size = show
    ? Math.round(portraitPhoto.offsetWidth * (centered ? 0.85 : 0.27))
    : 0;
  const variables = {
    "--spot-size": `${size}px`,
    "--spot-opacity": show ? 1 : 0,
  };
  if (motion && !reducedMotion.matches) {
    motion.to(portraitPhoto, {
      ...variables,
      duration: show ? 0.38 : 0.55,
      ease: "power2.out",
      overwrite: true,
    });
  } else {
    Object.entries(variables).forEach(([name, value]) =>
      portraitPhoto.style.setProperty(name, value),
    );
  }
}
function positionPortraitReveal(event) {
  if (event.pointerType === "touch") return;
  const bounds = portraitPhoto.getBoundingClientRect();
  if (brushContext && trailContext && !reducedMotion.matches) {
    const next = {
      x: (event.clientX - bounds.left) * brushScale,
      y: (event.clientY - bounds.top) * brushScale,
    };
    if (brushPoint) {
      const dx = next.x - brushPoint.x;
      const dy = next.y - brushPoint.y;
      const steps = Math.min(
        12,
        Math.ceil(Math.hypot(dx, dy) / (18 * brushScale)),
      );
      for (let step = 1; step < steps; step++) {
        brushStamps.push({
          x: brushPoint.x + (dx * step) / steps,
          y: brushPoint.y + (dy * step) / steps,
        });
      }
    }
    brushPoint = next;
    if (!brushFrame) brushFrame = requestAnimationFrame(drawPortraitBrush);
    return;
  }
  portraitPhoto.style.setProperty(
    "--spot-x",
    `${((event.clientX - bounds.left) / bounds.width) * 100}%`,
  );
  portraitPhoto.style.setProperty(
    "--spot-y",
    `${((event.clientY - bounds.top) / bounds.height) * 100}%`,
  );
  revealPortrait(true);
}
portraitPhoto.addEventListener("pointerenter", positionPortraitReveal);
portraitPhoto.addEventListener("pointermove", positionPortraitReveal);
portraitPhoto.addEventListener("pointerleave", (event) => {
  if (event.pointerType === "touch") return;
  brushPoint = null;
  revealPortrait(false);
});
portraitPhoto.addEventListener("pointerup", (event) => {
  if (event.pointerType !== "touch") return;
  revealPortrait(portraitPhoto.dataset.revealed !== "true", true);
  portraitPhoto.dataset.revealed = String(
    portraitPhoto.dataset.revealed !== "true",
  );
});
const abilityButton = portrait.querySelector(".ability-trigger");
abilityButton.addEventListener("focus", () => {
  if (abilityButton.matches(":focus-visible")) revealPortrait(true, true);
});
abilityButton.addEventListener("blur", () => revealPortrait(false));

const clock = document.querySelector("[data-clock]");
const nepalTime = new Intl.DateTimeFormat("en", {
  timeZone: "Asia/Kathmandu",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});
function updateClock() {
  const now = new Date();
  clock.textContent = nepalTime.format(now).toLowerCase();
  clock.dateTime = now.toISOString();
}
updateClock();
setInterval(updateClock, 15000);
document.querySelector("#copyright-year").textContent =
  new Date().getFullYear();

const paper = document.querySelector("#book-paper");
const roleText = paper.querySelector(".book-role");
const roleNumber = paper.querySelector(".book-number");
const roles = ["Web Developer", "CSIT Student", "AI Video Creator"];
let roleIndex = 0;
let bookVisible = true;
new IntersectionObserver(([entry]) => {
  bookVisible = entry.isIntersecting;
}).observe(paper.closest(".book"));
setInterval(async () => {
  if (
    document.hidden ||
    !bookVisible ||
    reducedMotion.matches ||
    document.querySelector("dialog[open]")
  )
    return;
  await paper.animate(
    [
      { transform: "rotateX(0deg)" },
      { transform: "rotateX(90deg)", opacity: 0.2 },
    ],
    { duration: 340, easing: "cubic-bezier(.6,.1,.65,1)" },
  ).finished;
  roleIndex = (roleIndex + 1) % roles.length;
  roleText.textContent = roles[roleIndex];
  roleNumber.textContent = `0${roleIndex + 1} / 03`;
  paper.animate(
    [
      { transform: "rotateX(-80deg)", opacity: 0.25 },
      { transform: "rotateX(0deg)", opacity: 1 },
    ],
    { duration: 510, easing: "cubic-bezier(.22,.8,.21,1)" },
  );
}, 3400);

const dialogs = [...document.querySelectorAll("dialog")];
const workDialog = document.querySelector("#work-detail");
const workScroll = workDialog.querySelector(".work-scroll");
const projectList = document.querySelector("#project-list");
projectList.addEventListener(
  "play",
  (event) => {
    projectList.querySelectorAll("video").forEach((video) => {
      if (video !== event.target) video.pause();
    });
  },
  true,
);
workDialog.addEventListener("close", () => {
  projectList.querySelectorAll("video").forEach((video) => video.pause());
});
const doors = [...document.querySelectorAll(".door")];
const passage = document.querySelector(".door-passage");
const hallway = document.querySelector(".works");
const doorWall = hallway.querySelector(".door-wall");
const doorPreview = hallway.querySelector(".door-preview");
const doorCursor = document.querySelector(".door-cursor");
let previewedDoor;
let doorMotion;
let showcaseMotion;
let currentWork;
let focusAfterWork;

function showDialog(dialog) {
  dialogs
    .filter((other) => other !== dialog && other.open)
    .forEach((other) => other.close());
  if (!dialog.open) dialog.showModal();
}

function showWork(key) {
  const section = work[key];
  if (key === currentWork && workDialog.open) return;
  currentWork = key;
  document.querySelector("#work-title").textContent = section.title;
  document.querySelector("#work-description").textContent = section.description;
  const projects = section.projects.map((project, index) => {
    const card = document.createElement("article");
    card.className = "project";
    card.innerHTML = `
      <div class="project-copy"><span class="micro"></span><h3></h3><p></p></div>
      <div class="project-monitor">
        <div class="project-art ${project.color}">
          <header aria-hidden="true"><span class="art-dots"></span><span class="micro">IG / 0${index + 1}</span></header>
          <span class="art-word" aria-hidden="true"></span><span class="art-rule" aria-hidden="true"></span>
        </div>
        <span class="monitor-stand" aria-hidden="true"></span>
      </div>`;
    card.querySelector(".art-word").textContent = project.art;
    card.querySelector("h3").textContent = project.title;
    card.querySelector("p").textContent = project.description;
    card.querySelector(".project-copy .micro").textContent = project.type;
    if (project.url) {
      const link = document.createElement("a");
      link.className = "pill secondary project-link";
      link.href = project.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = `${project.linkLabel || "Visit live site"} ↗`;
      link.setAttribute(
        "aria-label",
        `${project.linkLabel || "Visit live site"} for ${project.title} (opens in a new tab)`,
      );
      card.querySelector(".project-copy").append(link);
    }
    if (project.screenshot) {
      const screen = card.querySelector(".project-art");
      screen.classList.add("has-media");
      if (project.screenshotAspect)
        screen.style.setProperty("--project-aspect", project.screenshotAspect);
      const image = document.createElement("img");
      image.alt = `Screenshot of ${project.title}`;
      image.decoding = "async";
      image.addEventListener(
        "load",
        () => {
          screen.classList.add("has-screenshot");
        },
        { once: true },
      );
      image.addEventListener(
        "error",
        () => {
          image.remove();
          screen.classList.remove("has-media");
        },
        { once: true },
      );
      image.src = `projects/${project.screenshot}`;
      screen.append(image);
    }
    if (project.video) {
      const screen = card.querySelector(".project-art");
      screen.classList.add("has-media", "has-video");
      const video = document.createElement("video");
      video.setAttribute("aria-label", project.title);
      video.controls = true;
      video.playsInline = true;
      video.preload = "none";
      video.poster = `projects/${project.poster}`;
      video.src = `projects/${project.video}`;
      screen.append(video);
    }
    return card;
  });
  projectList.querySelectorAll("video").forEach((video) => video.pause());
  projectList.replaceChildren(...projects);
  showDialog(workDialog);
  workScroll.scrollTop = 0;
  if (!motion || reducedMotion.matches) return;
  showcaseMotion?.kill();
  showcaseMotion = motion
    .timeline({ defaults: { ease: "power3.out" } })
    .fromTo(
      workDialog,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.72, clearProps: "transform,opacity" },
    )
    .fromTo(
      ".work-intro, .project:first-child .project-monitor",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.62,
        stagger: 0.08,
        clearProps: "transform,opacity",
      },
      0.12,
    );
}

function syncWorkFromHash() {
  const key = location.hash.slice(1);
  if (Object.hasOwn(work, key)) {
    showWork(key);
  } else if (workDialog.open) dismissDialog(workDialog);
}

function resetDoorAnimation() {
  doorMotion?.kill();
  doorMotion = null;
  passage.hidden = true;
  document.body.classList.remove("walking-door");
  hallway.classList.remove("walking");
  if (motion) {
    motion.set(".door-leaf", { clearProps: "transform" });
    motion.set(hallway, { clearProps: "transform,transformOrigin" });
  }
  doors.forEach((door) => door.classList.remove("opening"));
}

function enterDoor(door) {
  if (doorMotion || workDialog.open) return;
  const key = door.dataset.work;
  const enter = () => {
    focusAfterWork = door;
    history.pushState(null, "", `#${key}`);
    showWork(key);
    resetDoorAnimation();
  };
  const leaf = door.querySelector(".door-leaf");
  const pose = new DOMMatrixReadOnly(getComputedStyle(leaf).transform);
  const angle = (Math.atan2(pose.m31, pose.m11) * 180) / Math.PI;
  clearDoorPreview();
  if (!motion || reducedMotion.matches) {
    enter();
    return;
  }
  door.classList.add("opening");
  hallway.classList.add("walking");
  document.body.classList.add("walking-door");
  const frame = door.querySelector(".door-light").getBoundingClientRect();
  const room = hallway.getBoundingClientRect();
  const gapX = frame.left + frame.width * 0.63;
  const gapY = frame.top + frame.height * 0.57;
  const zoom =
    Math.max(root.clientWidth / frame.width, innerHeight / frame.height) * 1.8;
  motion.set(leaf, { rotationY: angle });
  motion.set(hallway, {
    transformOrigin: `${gapX - room.left}px ${gapY - room.top}px`,
  });
  motion.set(passage, { opacity: 0 });
  doorMotion = motion
    .timeline({ onComplete: enter })
    .to(leaf, { rotationY: -70, duration: 0.65, ease: "power2.inOut" })
    .to(
      hallway,
      {
        scale: zoom,
        x: root.clientWidth / 2 - gapX,
        y: innerHeight / 2 - gapY,
        duration: 1.12,
        ease: "power3.inOut",
      },
      0.67,
    )
    .call(
      () => {
        passage.hidden = false;
      },
      null,
      1.15,
    )
    .to(passage, { opacity: 1, duration: 0.56, ease: "power2.inOut" }, 1.15);
}

function positionDoorPreview() {
  const wall = doorWall.getBoundingClientRect();
  const door = previewedDoor.getBoundingClientRect();
  const leftRoom = door.left - wall.left;
  const rightRoom = wall.right - door.right;
  const onRight = rightRoom >= leftRoom;
  const available = (onRight ? rightRoom : leftRoom) - 32;
  const width = Math.min(350, available);
  const edge = onRight ? door.right - wall.left : 0;
  doorPreview.style.setProperty(
    "--preview-left",
    `${edge + (available - width) / 2 + 16}px`,
  );
  doorPreview.style.setProperty("--preview-width", `${width}px`);
  doorPreview.style.setProperty(
    "--preview-y",
    `${door.top - wall.top + door.height / 2}px`,
  );
}

function showDoorPreview(door) {
  if (doorMotion || workDialog.open || door === previewedDoor) return;
  const details = work[door.dataset.work];
  previewedDoor?.classList.remove("previewed");
  previewedDoor = door;
  door.classList.add("previewed");
  doorPreview.querySelector("h3").textContent = details.title;
  doorPreview.querySelector("p").textContent = details.caption;
  doorPreview.querySelector("ul").replaceChildren(
    ...details.highlights.map((highlight) => {
      const item = document.createElement("li");
      item.textContent = highlight;
      return item;
    }),
  );
  positionDoorPreview();
  doorWall.classList.add("has-preview");
  if (motion && !reducedMotion.matches) {
    motion.fromTo(
      doorPreview,
      { opacity: 0, y: 8 },
      {
        opacity: 1,
        y: 0,
        duration: 0.36,
        ease: "power2.out",
        overwrite: true,
        clearProps: "transform,opacity",
      },
    );
  }
}

function clearDoorPreview() {
  previewedDoor?.classList.remove("previewed");
  previewedDoor = null;
  doorWall.classList.remove("has-preview");
  doorCursor.classList.remove("visible");
  if (motion) {
    motion.killTweensOf(doorPreview);
    motion.set(doorPreview, { clearProps: "transform,opacity" });
  }
}

function previewDoorAtPointer(event) {
  if (event.pointerType === "touch" || doorMotion || workDialog.open) return;
  showDoorPreview(event.currentTarget);
  doorCursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
  doorCursor.classList.add("visible");
}

doors.forEach((door) => {
  door.addEventListener("pointerenter", previewDoorAtPointer);
  door.addEventListener("pointermove", previewDoorAtPointer);
  door.addEventListener("pointerleave", () => {
    if (previewedDoor === door) clearDoorPreview();
  });
  door.addEventListener("focus", () => {
    if (door.matches(":focus-visible")) showDoorPreview(door);
  });
  door.addEventListener("blur", () => {
    if (previewedDoor === door && !door.matches(":hover")) clearDoorPreview();
  });
  door.addEventListener("click", () => enterDoor(door));
});
window.addEventListener("resize", () => {
  if (previewedDoor) positionDoorPreview();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && doorMotion) resetDoorAnimation();
});

function dismissDialog(dialog, returnToDoor = true) {
  if (dialog === workDialog && Object.hasOwn(work, location.hash.slice(1))) {
    history.replaceState(null, "", "#works");
  }
  if (dialog === workDialog) {
    showcaseMotion?.progress(1).kill();
  }
  dialog.close();
  if (dialog === workDialog) {
    if (!focusAfterWork && returnToDoor) {
      document.querySelector("#works").scrollIntoView({
        behavior: reducedMotion.matches ? "instant" : "smooth",
      });
    }
    if (returnToDoor) {
      (
        focusAfterWork ||
        doors.find((door) => door.dataset.work === currentWork)
      )?.focus({ preventScroll: true });
    }
    focusAfterWork = null;
  }
}

window.addEventListener("hashchange", () => {
  clearDoorPreview();
  resetDoorAnimation();
  syncWorkFromHash();
});
syncWorkFromHash();

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open]");
  if (button) {
    const target = document.getElementById(button.dataset.open);
    if (button.closest(".work-dialog") && target.id === "navigation") {
      target.showModal();
      return;
    }
    resetDoorAnimation();
    if (workDialog.open) dismissDialog(workDialog, false);
    showDialog(target);
  }
  const close = event.target.closest("[data-close], [data-dismiss]");
  if (close) dismissDialog(close.closest("dialog"));
});
dialogs.forEach((dialog) => {
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    dismissDialog(dialog);
  });
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      dismissDialog(dialog);
  });
});

const card = document.querySelector(".skill-card");
card.addEventListener("click", () => {
  const flipped = card.getAttribute("aria-pressed") === "true";
  card.setAttribute("aria-pressed", String(!flipped));
  card.setAttribute(
    "aria-label",
    flipped
      ? "Flip ability card to see skills"
      : "Flip ability card to see the front",
  );
});
card.addEventListener("pointermove", (event) => {
  if (reducedMotion.matches || event.pointerType === "touch") return;
  const bounds = card.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width;
  const y = (event.clientY - bounds.top) / bounds.height;
  card.style.setProperty("--ry", `${(x - 0.5) * 31}deg`);
  card.style.setProperty("--rx", `${(0.5 - y) * 25}deg`);
  card.style.setProperty("--glint-x", `${x * 100}%`);
  card.style.setProperty("--glint-y", `${y * 100}%`);
});
card.addEventListener("pointerleave", () => {
  ["--rx", "--ry", "--glint-x", "--glint-y"].forEach((property) =>
    card.style.removeProperty(property),
  );
});

const milestones = [...document.querySelectorAll(".milestone")];
const story = document.querySelector(".story");
const storyHeader = story.querySelector(".story-header");
const timeline = story.querySelector(".timeline");
const year = document.querySelector("#story-year");
const date = document.querySelector("#story-date");
const storyIndex = document.querySelector("#story-index");
const topbar = document.querySelector(".topbar");
const topLink = document.querySelector(".to-top");
let activeMilestone = 0;
let yearAnimation;
let scrollFrame;

function updateScroll() {
  scrollFrame = null;
  const stickyBottom =
    innerWidth <= 740 ? 61 + storyHeader.offsetHeight + 24 : 0;
  const marker = Math.max(innerHeight * 0.5, stickyBottom);
  const lastStop = milestones.at(-1).offsetTop;
  const distance = marker - timeline.getBoundingClientRect().top - 10;
  const travel = Math.max(0, Math.min(lastStop, distance));
  const next = milestones.findLastIndex(
    (item) => item.offsetTop <= distance + 32,
  );
  const index = Math.max(0, next);

  topbar.classList.toggle("scrolled", scrollY > 25);
  topLink.hidden = scrollY < innerHeight * 0.9;
  if (reducedMotion.matches) {
    story.style.setProperty(
      "--story-progress",
      index / (milestones.length - 1),
    );
  } else {
    timeline.style.setProperty("--rail-travel", `${travel}px`);
    story.style.setProperty(
      "--story-progress",
      lastStop ? travel / lastStop : 0,
    );
  }
  if (index === activeMilestone) return;
  milestones[activeMilestone].classList.remove("current");
  const milestone = milestones[index];
  milestone.classList.add("current");
  activeMilestone = index;
  date.textContent = milestone.dataset.date;
  storyIndex.textContent = `0${index + 1} / 0${milestones.length}`;
  if (year.textContent === milestone.dataset.year) return;
  year.textContent = milestone.dataset.year;
  if (reducedMotion.matches) return;
  yearAnimation?.cancel();
  yearAnimation = year.animate(
    [
      {
        clipPath: "inset(100% 0 0)",
        transform: "translateY(15%)",
        opacity: 0.25,
      },
      { clipPath: "inset(0)", transform: "none", opacity: 1 },
    ],
    { duration: 530, easing: "cubic-bezier(.22,.8,.21,1)" },
  );
}
function queueScrollUpdate() {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
}
window.addEventListener("scroll", queueScrollUpdate, { passive: true });
window.addEventListener("resize", queueScrollUpdate);
reducedMotion.addEventListener("change", queueScrollUpdate);
story.classList.add("story-tracked");
updateScroll();

if (motion && scrollEffects) {
  motion.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
    motion
      .timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom 20%",
          scrub: 0.65,
        },
      })
      .to(".hero-content", { y: -42, opacity: 0.28, ease: "none" }, 0)
      .to(".portrait", { y: -25, ease: "none" }, 0);

    motion.fromTo(
      "#works-title",
      {
        "--works-title-hidden": 1,
      },
      {
        "--works-title-hidden": 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#works-title",
          start: "top 89%",
          end: "top 43%",
          scrub: true,
        },
      },
    );
    motion.from(".hall-title .micro, .hall-guide", {
      opacity: 0,
      y: 12,
      ease: "none",
      scrollTrigger: {
        trigger: ".hall-head",
        start: "top 92%",
        end: "top 46%",
        scrub: true,
      },
    });
    motion.from(".door", {
      y: 28,
      opacity: 0,
      duration: 0.75,
      stagger: 0.095,
      ease: "power3.out",
      clearProps: "transform,opacity",
      scrollTrigger: { trigger: ".door-wall", start: "top 92%", once: true },
    });

    motion.from(".footer-main", {
      y: 22,
      opacity: 0.35,
      duration: 0.72,
      ease: "power2.out",
      scrollTrigger: { trigger: ".footer-main", start: "top 93%", once: true },
    });
  });
}

window.addEventListener(
  "load",
  () => {
    const section = location.hash.slice(1);
    if (section !== "works" && section !== "about") return;
    requestAnimationFrame(() => {
      if (location.hash === `#${section}`)
        document
          .getElementById(section)
          .scrollIntoView({ behavior: "instant" });
    });
  },
  { once: true },
);

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(
    `Portfolio inquiry — ${data.get("topic")}`,
  );
  const body = encodeURIComponent(
    `${data.get("message")}\n\nFrom ${data.get("name")}\n${data.get("email")}`,
  );
  location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
});
