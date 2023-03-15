let place = [
  {
    id: 1,
    title: "1 - Bhangarh Fort, Rajasthan",
    img: "pic1.jpg",
    desc: `Located in the Alwar region, the uninhabited town of Bhangarh is one of the eeriest places imaginable and is unanimously considered as one of India's most haunted places. It is considered to be so dangerous that even the Archaeological Survey of India has legally prohibited anyone from entering the Bhangarh Fort after dark.
  
      The legend goes that during the 16th century, a tantric named Singhia fell in love with Ratnavati, the beautiful princess of Bhangarh. And knowing it was a hopeless match, decided to use his magic to seduce her. However, the princess uncovered his plans and sentenced him to death. Before his death, enraged by the turn of events, he cursed the palace to doom and the town to be roofless and miserable forever. Nearby locals believe that anyone who goes into the fort after dark won't make it back, so visit at your own peril. `,
  },
  {
    id: 2,
    title: "2 - Kuldhara Village, Rajasthan",
    img: "pic2.webp",
    desc: `Rajasthan sure does have the choicest selection of deserted ghostly villages and towns! The Kuldhara village is located near Jaisalmer and was originally inhabited by Paliwal Brahmins. The lore speaks of the sudden disappearance of all the villagers of Kuldhara as well as 83 other nearby villages in 1825 into thin air, leaving no trace of their whereabouts. It is said that the minister of state had fallen in love with a girl from the village and had threatened to impose huge taxes upon the entire village unless they married her to him. To protect the honour of the girl, the chief of Kulhara and surrounding areas abandoned their villages and cursed the land to remain unoccupied for eternity. `,
  },
  {
    id: 3,
    title: "3 - Dow Hill, Kurseong, West Bengal",
    img: "pic3.webp",
    desc: `The Victoria Boy's High School and Dowhill Girl's Boarding School in Kurseong, Darjeeling, are believed to be the residence of many spirits whose footsteps can be heard echoing through the hallways. There have been countless murdered bodies found in the wood surrounding the schools and several locals and tourists report being followed by a headless boy who then disappears into the woods.`,
  },
  {
    id: 4,
    title: " 4 - Dumas Beach, Gujarat",
    img: "pic4.webp",
    desc: `On the Arabian sea coast, the black sands of Dumas Beach in Gujarat are associated with several mysteries over several years. The beach used to be a Hindu burial ground and many believe that the restless spirits call out to visitors taking midnight strolls and walking towards the sea to return back to the shore. There have been reports that those who don't heed the voices of the dead disappear into the waters forever. This beach is definitely not for the faint-hearted `,
  },
  {
    id: 5,
    title: "5 - Jatinga, Assam",
    img: "pic5.webp",
    desc: `This tiny village with a population of 2500 has one of the most puzzling phenomena in the world, namely recurring mass bird suicides. For centuries now, local and migratory birds plummet to the ground in large numbers on moonless nights of September and October only on a specific area. This has baffled scientists who can't find any reasonable justification for birds dropping dead from the sky in such a pattern and it is extremely disturbing to say the least.`,
  },
];

let slide = document.querySelector(".icon")
let nav = document.querySelector(".logo");
let container = document.querySelector(".container")
let list = document.querySelector(".list");
let div = document.querySelector(".back")
let a = document.querySelectorAll(".aTag")
let upbtn = document.querySelector("button")
let header = document.querySelector("header")
let local = document.querySelectorAll(".local")

slide.addEventListener('click' , ()=>{
  navbarShow();
})

function navbarShow(){
  if(slide.innerText == "menu"){
    list.classList.replace("side" , "side_bar");
   slide.innerText = "close"
  }
  else if(slide.innerText == "close"){
      list.classList.replace("side_bar" , "side")
        slide.innerText="menu"
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 170) {
   div.classList.add("navBar")
   list.classList.add("navBar")
   if(window.scrollY > 400){
     upbtn.style.visibility = "visible";

   }else if(window.scrollY < 400){
    upbtn.style.visibility ="hidden";
      upbtn.style.transform = "rotate(0deg)";
   }

  } else if (window.scrollY < 170) {
    div.classList.remove("navBar")
   list.classList.remove("navBar")

  }
});

upbtn.addEventListener('click' ,()=>{
  window.scrollTo({
    left: 0,
    top:0,
  })
 if(upbtn.style.visibility == "visible"){
  upbtn.style.transform= "rotate(360deg)"
 }
})


a.forEach((a)=>{
   a.addEventListener('click' , (e)=>{
      e.preventDefault();
  let id = e.currentTarget.getAttribute("href").slice(1);
  let element = document.getElementById(id);
  let x = container.getBoundingClientRect().height
  let position  = element.offsetTop-x;
  list.classList.add("side");
  slide.innerText="menu";
if(window.innerWidth > 800){
  window.scrollTo({
    left: 0,
    top:position,
  })
}else if(window.innerWidth < 800){
  window.scrollTo({
    left: 0,
    top:position+140,
  })
}

   })
})


let displayPlace = document.querySelector(".full");
window.addEventListener("DOMContentLoaded", () => {
  let html = place.map((pl) => {
    return `  <div class="content1">
      <h2>${pl.title}</h2>
    <img src="${pl.img}"/ width="500px">
    <p>${pl.desc}</p>
  </div>
`;
  });
  displayPlace.innerHTML = html;
});


