let section;
let main;

export function setupHome(sectionTarget, mainTarget) {
    section = sectionTarget;
    main = mainTarget;
}

export function viewHome() {
    main.innerHTML = '';
    main.appendChild(section);
}