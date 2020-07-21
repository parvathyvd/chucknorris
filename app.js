const getJokes = document.querySelector('#jokes');


const getNumber = () =>{
    const number = document.querySelector('#number').value;
    fetch(`http://api.icndb.com/jokes/random/${number}`)
        .then( res => res.json())
        .then( data => {
           console.log(data);
           let result = '';
           data.value.forEach(element => {
               console.log(element.joke);
               result += `<li>${element.joke}</li>`;
           });
        const jokeDisplay = document.querySelector('#joke-display');
        jokeDisplay.insertAdjacentHTML('afterbegin', result);
        })


}



getJokes.addEventListener('click', getNumber);
