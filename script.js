const expandMenuButton = document.querySelector('.expand-menu-button')
const navbarText = document.querySelectorAll('.navbar-text')
const navbarLink = document.querySelectorAll(".nav-link-text")
const navbarMainDiv = document.querySelector(".navbar-main-div")
const overview = document.querySelector(".overview")
const mainTitle = document.querySelector(".main-title")
const searchBtn = document.querySelector("#search-btn")
const searchInput = document.querySelector("#search-input")
expandMenuButton.addEventListener('click', (e) => {
    e.preventDefault()
    navbarLink.forEach(i => i.classList.toggle("d-none"))
    navbarText.forEach(i => i.classList.toggle("d-none"))
    navbarMainDiv.classList.toggle("active")
    overview.classList.toggle("active2")
        //mainTitle.classList.toggle("d-none")
        //mainTitle.classList.add('d-inline-block')
    if (mainTitle.classList.contains("d-none")) {
        mainTitle.classList.remove("d-none")
        mainTitle.classList.add("d-block")
    } else {
        mainTitle.classList.add("d-none")
        mainTitle.classList.remove("d-inline-block")
    }

    if (!searchInput.classList.contains("d-none")) {
        searchInput.classList.add("d-none")
    }
})
searchBtn.addEventListener("click", (e) => {
    e.preventDefault()

    searchInput.classList.toggle("d-none")
    navbarLink.forEach(i => {
        if (!i.classList.contains("d-none")) {
            i.classList.add("d-none")
        }
    })
    navbarText.forEach(i => {
        if (!i.classList.contains("d-none")) {
            i.classList.add("d-none")
        }
    })
    navbarMainDiv.classList.remove("active")
    overview.classList.remove("active2")
    if (!mainTitle.classList.contains("d-none")) {
        mainTitle.classList.add("d-none")
    }

})