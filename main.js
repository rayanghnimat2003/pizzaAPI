async function getData(){
    const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    const data = await response.json();;
    const recipes = data.recipes;;
  const result = recipes.map(function (recipe) {
    return `
    <div>
    <h2>${recipe.title}</h2>
    <img src ="${recipe.image_url} ">
    </div>
    
    `
  } ).join('');
  document.querySelector(".pizza_section .row").innerHTML = result
  document.querySelector(".numberOfItems").textContent = data.count
}

getData()

