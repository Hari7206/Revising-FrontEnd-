let people = [
  {
    fullName: "Lanna Tirister",
    img: "https://i.pinimg.com/736x/e2/51/46/e25146a3cc2b7182546f7b937949cd66.jpg",
    profession: "Model",
    description: "Professional fashion model known for editorial and runway work."
  },
  {
    fullName: "Ethan Walker",
    img: "https://i.pinimg.com/736x/20/70/dc/2070dcb7165b4686fd295e888e89d7db.jpg",
    profession: "Photographer",
    description: "Creative photographer specializing in portraits and lifestyle shoots."
  },
  {
    fullName: "Sophia Martinez",
    img: "https://i.pinimg.com/736x/97/29/82/972982ec787befacdc9df0bef36eb708.jpg",
    profession: "Graphic Designer",
    description: "Passionate designer focused on branding and digital experiences."
  },
  {
    fullName: "Noah Kim",
    img: "https://i.pinimg.com/736x/a0/46/47/a04647d6801825ef694c426b24aa9d31.jpg",
    profession: "Web Developer",
    description: "Frontend developer building responsive and modern web interfaces."
  },
  {
    fullName: "Ava Thompson",
    img: "https://i.pinimg.com/736x/32/25/dc/3225dc2941c832b03762e893a0b6b344.jpg",
    profession: "Content Creator",
    description: "Digital content creator sharing fashion, travel, and lifestyle stories."
  }
    ,
  {
    fullName: "Daniel Cruz",
    img: "https://i.pinimg.com/736x/81/74/5b/81745b910372c27d32c7c414a7bd429d.jpg",
    profession: "UI/UX Designer",
    description: "Designs clean and user-friendly interfaces focused on smooth user experience."
  },
  {
    fullName: "Mia Robinson",
    img: "https://i.pinimg.com/736x/05/cc/0a/05cc0a0fc472f6a6c93f60cb0f0a3a68.jpg",
    profession: "Digital Marketer",
    description: "Specialist in social media growth and performance-based advertising strategies."
  },
  {
    fullName: "Lucas Bennett",
    img: "https://i.pinimg.com/736x/19/dc/7c/19dc7cf3607d034b7ab9af710d2cc4e8.jpg",
    profession: "Video Editor",
    description: "Creates cinematic video edits and engaging short-form content."
  }
];


let main = document.querySelector('main')
console.log(main);


let sum = ''
people.forEach(function(elem) {
sum = sum + `   <div class="box">
    <img src="${elem.img}" alt="">
    <h1 >${elem.fullName}</h1>
   <h2>${elem.profession}</h2>
   <p>${elem.description}</p>
   </div>`
})

main.innerHTML = sum;