document.querySelector('button').addEventListener('click',getDrink)
function getDrink() {
  let drink = document.querySelector('input').value
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks[0].strIngredient2)
      let x = []
      for(let i = 1 ; i<16; i++)
        {
          x.push(eval(`data.drinks[0].strIngredient${i}`))

        }
       console.log(x)
      
      for(let j =0 ; j<16; j++)
        {
          if (x[j] !== null && x[j] !==undefined)
          document.querySelector('h4').innerText += ` ${x[j]}, `
        }
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[0].strInstructions
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

