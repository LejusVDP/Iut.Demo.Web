

var images = ["1cdec11b-c127-4bb5-a87b-cd6e0ead7bdf.png","6c8b802b-4252-4200-8d6f-e00386bb9471.png", "14ea8926-b54d-46f1-8abe-caebca42f052.png", "34a161fe-a2c7-4560-b5ff-50bb767dab07.png", "49a7b352-e55c-47a6-abdf-45f898bd647c.png", "057a42bf-2baf-496f-95c5-f967a3fe24c8.png", "68d2122f-b408-4749-8988-9973e2cc646e.png"];


let ia = document.getElementById("echantillon")


// JS barre de temps
const openBtn = document.getElementById('boutton')

//openBtn.addEventListener('click', function click(ev) {
    //ev.target.move()

var score = 0;
var i = 0;
var difficulte = 1;
var Gagner = false;
var record = 0;

let victoire = document.getElementById('Win');
victoire.addEventListener('click', function click() {
    console.log("ça roule");
    Gagner = true;
}); 

function move() {
  if (i === 0) { 
    Gagner = false; 
    i = 1;
    var elem = document.getElementById("BarreDeTemps");
    var width = 99;
    var id = setInterval(frame, 100/(1*difficulte));
    function frame() {
       // if (width <= 50) {
            //clearInterval(id);
            //i = 0;
            //Gagner = true;}
        
      if (width <= 0) {
        clearInterval(id);
        i = 0;
        Gagner = false;
        alert(`Vous avez perdu !`);
        if (score > record)
            record = score;
        score =0;
        difficulte =1;
        res.innerHTML ='Score = ' +score+ ' points ' ;
        rec.innerHTML ='Record = ' +record+ ' points ' ;
        window.location.reload()

      } else {
        width--;
        elem.style.width = width + "%";
      }
      if (Gagner == true)
      {
        Gagner = false
          clearInterval(id);
          score += width * 100;
          difficulte+=1;
          res.innerHTML ='Score = ' +score+ ' points ' ;
          var randomName = images[Math.floor(Math.random() * images.length)];
  document.getElementById("echantillon").src = "c:/Users/Jules/Documents/GitHub/Hackathon/Data/hackathon_data/classification_yahourt_cote/" + randomName ;
          i=0;
          move()
      }
    }
  }
}

var res = document.getElementById('score');
res.innerHTML ='Score = ' +score+ ' points ' ;

var rec = document.getElementById('record');
rec.innerHTML ='Record = ' +record+ ' points ' ;




let cible1 = document.querySelector('#point_rouge');
let cible2 = document.querySelector('#point_vert');
let cercle1 = document.querySelector('#cercle1');
let cercle2 = document.querySelector('#cercle2');
let SizeTarget = 30;
let paddingCircle = 30;

cercle1.addEventListener('click', function click() {
  Gagner = true
  GeneratePoints()
  
    if (SizeTarget > 15)
        SizeTarget *= 0.9;
    if (paddingCircle > 8)
        paddingCircle *= 0.9;
    cercle1.style.padding = paddingCircle + "px";
    cercle2.style.padding = paddingCircle + "px";
    cible1.style.height = SizeTarget + "px";
    cible1.style.width = SizeTarget + "px";   
    cible2.style.height = SizeTarget + "px";
    cible2.style.width = SizeTarget + "px"; 
});

cercle2.addEventListener('click', function click() {
  Gagner = true
  GeneratePoints()
 // var randomName = images[Math.floor(Math.random() * images.length)];
  //document.getElementById("echantillon").src = "./Data/hackathon_data/classification_yahourt_cote/" + randomName ;
    if (SizeTarget > 15)
        SizeTarget *= 0.9;
    if (paddingCircle > 8)
        paddingCircle *= 0.9;
    cercle1.style.padding = paddingCircle + "px";
    cercle2.style.padding = paddingCircle + "px";
    cible1.style.height = SizeTarget + "px";
    cible1.style.width = SizeTarget + "px";   
    cible2.style.height = SizeTarget + "px";
    cible2.style.width = SizeTarget + "px";  
});



function GeneratePoints() {
  const pointRouge = document.getElementById('point-rouge-box')
  const pointVert = document.getElementById('point-vert-box')

  pointRouge.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)"
  pointVert.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)"

  pointRouge.style.paddingLeft = "" + (Math.floor(Math.random() * 15) + 15) + "%"
  pointVert.style.paddingRight = "" + (Math.floor(Math.random() * 15) + 15) + "%"
}

