document.addEventListener("DOMContentLoaded", (event) => {
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Add active class to current nav item
  const currentPage = window.location.pathname.split("/").pop()
  document.querySelectorAll("nav ul li a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active")
    }
  })
})

