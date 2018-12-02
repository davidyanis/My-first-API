
fetch("https://yesno.wtf/api").then((response) => {
    return response.json()
 }).then((data) => {
   var image = document.createElement("img")
   image.src = data.image;
   image.className = "answerimage"
   document.body.appendChild(image)
});
    /*  var container = document.getElementById("container")
     var list = document.createElement("ul")
 
     for(var i = 0; i < data.bilar.length; i++) {
         var listItem = document.createElement("li")
 
         listItem.innerHTML = data[i].märke + ", " + data[i].modell + ", " + data[i].färg
         list.appendChild(listItem)
     }
 
     container.appendChild(list) */
 