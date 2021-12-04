function Random(){
    fetch('https://api.spoonacular.com/recipes/random?apiKey=d6752cf4a9b446fca929a2b22152d82e')
   .then(Response => Response.json())
   .then(data => {
        let name = data['recipes'][0]['extendedIngredients'][0]['aisle'];
        let image = data['recipes'][0]['extendedIngredients'][0]['image'];

        console.log(name);
        document.getElementById('recipe').innerHTML = name;

   });
}
function WineDescription(){
    fetch('https://api.spoonacular.com/food/wine/description?apiKey=d6752cf4a9b446fca929a2b22152d82e&wine=merlot')
   .then(Response => Response.json())
   .then(data => {
        let merlot = data['wineDescription'];
        document.getElementById('merlot').innerHTML = `Merlot Wine: ${merlot}`;
        document.getElementById('merlot').style.color = 'purple';
   }).catch;
   fetch('https://api.spoonacular.com/food/wine/description?apiKey=d6752cf4a9b446fca929a2b22152d82e&wine=malbec')
   .then(Response => Response.json())
   .then(data => {
        let malbec = data['wineDescription'];
        document.getElementById('malbec').innerHTML = `Malbec Wine: ${malbec}`;
        document.getElementById('malbec').style.color = 'red';
   });
}