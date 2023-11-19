const project_link = document.querySelector(".overview-link-projects")
const project_box = document.querySelector(".overview-item-projects")
const about_link = document.querySelector(".overview-link-about")
const about_box = document.querySelector(".overview-item-about")
const experience_link = document.querySelector(".overview-link-experience")
const experience_box = document.querySelector(".overview-item-experience")

const section_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            if(entry.target.id === "about-content") {
                console.log("about")
                about_box.width = "40px";
                about_link.style.marginLeft = "50px"
            }
            if(entry.target.id === "experience-content") {
                console.log("experience")
                experience_box.width = "40px";
                experience_link.style.marginLeft = "50px"
            }
            if(entry.target.id === "project-content") {
                console.log("project")
                project_box.width = "40px";
                project_link.style.marginLeft = "50px"
            }
            else {

            }
        }else {
            entry.target.classList.remove('show');
        }
    });
});
const project_section = document.querySelectorAll(".section")
project_section.forEach((el) => section_observer.observe(el));