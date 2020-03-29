'use strict';
// VERSION 1

/*
1.
Write a function that:
- Logs to the console numbers 1 to 100.
- However, if the number is a multiple of both 3 and 5 it should log "Jackpot!" instead of the number.
- If it doesn't pass the function should log "multiple of 3" if it's a multiple of only 3
- If it's a multiple of 5 it should log "This is a multiple of 5"

Hint: use the modulo operator (%) to figure out if it's a multiple of 3/5. Make sure the remainder is 0, in order to pass the condition.
Hint: the order of conditional statements is important!
*/

// Answer-1
function jackpotNums(cb) {
    for (let i=1; i<=100; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            cb('Jackpot!');
        } 
        else if (i % 3 === 0) {
            cb('multiple of 3');
        }
        else if (i % 5 === 0) {
            cb('This is a multiple of 5');
        }
        else {
            cb(i);
        }
    }
}

function printResult(res) {
    console.log(res);
}

jackpotNums(printResult);


/*
2.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Creates a button element (with text "click me!") 
- Creates an empty <img> element and add it to the document.
- When the button is clicked, inserts an image URL into an <img> tag and remove the button
- Use the following image URL: https://avatars3.githubusercontent.com/u/20858568?s=200&v=4
*/

// Answer-2
const body = document.querySelector('body');
const btn = document.createElement('button');
btn.innerText = 'click me!';
btn.style = 'font-size: 20px';
body.appendChild(btn);
const img = document.createElement('img');
body.appendChild(img);
btn.addEventListener('click', () => {
    img.src = 'https://avatars3.githubusercontent.com/u/20858568?s=200&v=4';
    body.removeChild(btn);
});


/*
3.
Write a function that:
- Makes an API call using the Fetch API
- Uses the following API: https://reqres.in/api/users
- Parses the response and then displays the "first_name" and "last_name" of the first THREE users within the DOM
- Creates an <ul> for each user
- Makes use of async/await
*/

// Answer-3

async function fetchJSON(url) {

    try {

      const response = await fetch(url);
      if (!response.statusText) {
        throw new Error(`Network error: ${response.status},${response.statusText}`);
      }
      
      return response.json();

    } 
    catch (error) {
      console.log(error);
    }
}

async function main(url) {
    
    await fetchJSON(url)
    .then ( res => {
        const users = res.data;
        for (let i=0; i<=2; i++) {
            const ul = document.createElement('ul');
            body.appendChild(ul);
            const liFirstName = document.createElement('li');
            liFirstName.innerText = users[i].first_name;
            const liLastName = document.createElement('li');
            liLastName.innerText = users[i].last_name;
            ul.appendChild(liFirstName);
            ul.appendChild(liLastName);
            
        }
    })
    .catch (err);
    console.log(err);
    
}

const URL = 'https://reqres.in/api/users';
main(URL);
