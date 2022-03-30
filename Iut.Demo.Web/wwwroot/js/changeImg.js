var images = ["1cdec11b-c127-4bb5-a87b-cd6e0ead7bdf.png","6c8b802b-4252-4200-8d6f-e00386bb9471.png", "14ea8926-b54d-46f1-8abe-caebca42f052.png", "34a161fe-a2c7-4560-b5ff-50bb767dab07.png", "49a7b352-e55c-47a6-abdf-45f898bd647c.png", "057a42bf-2baf-496f-95c5-f967a3fe24c8.png", "68d2122f-b408-4749-8988-9973e2cc646e.png"];


let ia = document.getElementById("echantillon")

ia.addEventListener('click', function click(){
    var randomName = images[Math.floor(Math.random() * images.length)];
    document.getElementById("echantillon").src = "./Data/hackathon_data/classification_yahourt_cote/" + randomName ;
})