const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];



console.log('ciao')
const tableElement = document.getElementById('table')
let result = ''


imputHtml(teamMembers)

const formElement = document.getElementById('form')

formElement.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log('ciao cosa hai inserito')
  const nameElement = document.getElementById('name')
  const roleElement = document.getElementById('role')
  const emailElement = document.getElementById('email')
  const imgElement = document.getElementById('img')



  console.log(nameElement.value)
  console.log(roleElement.value)
  console.log(emailElement.value)
  console.log(imgElement.value)
const name = nameElement.value
const role = roleElement.value
const email = emailElement.value
const img = imgElement.value
const newMember = {
  name ,
  role ,
  email,
  img,


}
teamMembers.push(newMember)



imputHtml(teamMembers)
  

 tableElement.innerHTML = result
formElement.reset()
})































function imputHtml( array){
  
  for (let i = 0; i < array.length; i++) {
    const { name, role, email, img } = teamMembers[i]
 
  result += `
                  <div class=" row  col-12 col-md-6 col-lg-4 column-gap-3 mb-3" style="max-width: 540px;">
                      <div class="row g-0 m">
                          <div class="col-4">
                              <img src="${img}" class="img-fluid " alt="${name}">
                          </div>
                          <div class="col-8 bg-black">
                              <div class="card-body text-white ">
                                  <h5 class="card-title">${name}</h5>
                                  <p class="card-text">${role}</p>
                                  <p class="card-text text-info">${email}</small></p>
                              </div>
                          </div>
                        </div>
                    </div>`
  }
  tableElement.innerHTML = result
  }