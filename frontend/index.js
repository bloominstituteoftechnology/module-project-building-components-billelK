function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    let navEl = document.createElement('nav')
    links.forEach( link => {
      let aTagEl = document.createElement("a")
      aTagEl.href = link.href
      aTagEl.textContent = link.textContent
      aTagEl.title = link.title
      navEl.appendChild(aTagEl)
    })
    return navEl
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    const divEl = document.createElement("div")
    divEl.className = "learner-card"

    const fullName = document.createElement("p")
    fullName.textContent = learner.fullName
    divEl.appendChild(fullName)

    const idP = document.createElement("p")
    idP.textContent = `Learner ID: ${learner.id}`
    divEl.appendChild(idP)

    const dateP = document.createElement("p")
    dateP.textContent = `Date of Birth: ${learner.dateOfBirth}`
    divEl.appendChild(dateP)

    const favLangP = document.createElement("p")
    let favLang = languages.find(language => language.id === learner.favLanguage)
    favLangP.textContent = `Favorite Language: ${favLang.name}`
    divEl.appendChild(favLangP)

    divEl.addEventListener("click", (e) => {
      e.stopPropagation()
      const allCards = document.querySelectorAll("section>div")
      allCards.forEach(card => card.classList.remove("active"))
      divEl.classList.add("active")
    })
    return divEl
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    learners.forEach(learner => {
      const card = buildLearnerCard(learner, languages)
      document.querySelector("section").appendChild(card)
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    const footer = document.createElement('footer')

      const divInfo = document.createElement("div")
      divInfo.className = "company-info"
      footer.appendChild(divInfo)

        const companyName = document.createElement("p")
        companyName.textContent = footerData.companyName
        divInfo.appendChild(companyName)

        const address = document.createElement("p")
        address.textContent = footerData.address
        divInfo.appendChild(address)

        const email = document.createElement("p")
        email.innerHTML = `Email: <a href="mailto:${footerData.contactEmail}"> ${footerData.contactEmail} </a>`
        divInfo.appendChild(email)

      const divSocialMedia = document.createElement("div")
      divSocialMedia.className = "social-media"
      footer.appendChild(divSocialMedia)

        const twitter = document.createElement("a")
        twitter.textContent = "Twitter"
        twitter.href = footerData.socialMedia.twitter
        divSocialMedia.appendChild(twitter)

        const facebook = document.createElement("a")
        facebook.textContent = "Facebook"
        facebook.href = footerData.socialMedia.facebook
        divSocialMedia.appendChild(facebook)

        const instagram = document.createElement("a")
        instagram.textContent = "Instagram"
        instagram.href = footerData.socialMedia.instagram
        divSocialMedia.appendChild(instagram)

      const divBloom = document.createElement("div")
      divBloom.innerHTML = `© ${footerData.companyName.toUpperCase()} ${new Date().getFullYear()}`
      footer.appendChild(divBloom)

    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
  document.querySelector("section").addEventListener("click", () => {
    const allCards = document.querySelectorAll("section>div")
    allCards.forEach(card => card.classList.remove("active"))
  })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
