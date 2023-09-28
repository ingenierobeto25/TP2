//API à utiliser pour le travail: https://randomuser.me/api/?results=5

fetch('https://randomuser.me/api/?results=5')
.then(response=> response.json())
.then(data=>{
    let firstArray = Object.values(data)   
    let secondArray = Object.values(firstArray[0])
    let imagePersonnage    
    let output = '<h2>Listes de personnages</h2>'   
   
    secondArray.forEach(function(element) {        
        imagePersonnage = element.picture.large         
        names = 'Nom: ' + element.name.title +' '+ element.name.first + ' ' + element.name.last + '</br>'
        emails = 'Email: ' + element.email + '</br>'
        showImage(imagePersonnage)
        showInfo(names, emails)              
    })

    function showInfo(names, emails){            
        let showText = document.createElement('div') 
        showText.innerHTML = names + emails + '</br>'          
        document.getElementById('container').innerHTML = output        
        document.body.append(showText)
   }

   function showImage(imagePersonnage){
        let showImg = document.createElement('img')
        showImg.src=imagePersonnage       
        document.body.appendChild(showImg)
   }
})
.catch(error => console.log(error));

