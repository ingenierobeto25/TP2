//API à utiliser pour le travail: https://randomuser.me/api/?results=5
let image = document.getElementById('image')
console.log(image)
fetch('https://randomuser.me/api/?results=5')
.then(response=> response.json())
.then(data=>{
    let firstArray = Object.values(data)
   // console.log(firstArray)
    let secondArray = Object.values(firstArray[0])
    console.log(secondArray) 
    let output = '<h2>Listes de personnages</h2>' 
    secondArray.forEach(function(element) {
        
        image.src += element.picture.medium + '<br/>'
        output += element.name.title +' '+ element.name.first + ' ' + element.name.last + '<br/> '
        output += element.email + '<br/>'
        
    })
   // document.getElementById('image').innerHTML = image   
    document.getElementById('container').innerHTML = output
    
    }) 

.catch(error => console.log(error));

