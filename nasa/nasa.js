document.querySelector('button').addEventListener('click',getFetch)

function getFetch () {
    const choice = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=qbSAcffP4VMPsGSU0flsbx8CbXz5lUaMPA031k0d&date=${choice}`
    console.log(choice)
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.hdurl
            document.querySelector('h3').innerText = data.explanation
        data.abilities } )
        .catch(err => {
            console.log(`error ${err}`)
            })
        }
