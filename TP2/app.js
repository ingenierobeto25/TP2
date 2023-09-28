//API à utiliser pour le travail: https://randomuser.me/api/?results=5

fetch('https://randomuser.me/api/?results=5')
.then(response=> response.json())
.then(data=>{
    let firstArray = Object.values(data)   
    let secondArray = Object.values(firstArray[0])
    let imagePersonnage    
    let output = ['<h2>Listes de personnages</h2>']   

    secondArray.forEach(function(element) {        
        imagePersonnage = element.picture.large         
        names = element.name.title +' '+ element.name.first + ' ' + element.name.last + '<br/> '
        emails = element.email + '<br/>'
        showImage(imagePersonnage)
        printInfo(names, emails)              
    })

    function printInfo(names, emails){       
        output += names + emails
        document.getElementById('container').innerHTML = output    
   }

   function showImage(imagePersonnage){
        const showImg = document.createElement('img')
        showImg.src=imagePersonnage
        document.body.appendChild(showImg)
   }
})
.catch(error => console.log(error));

