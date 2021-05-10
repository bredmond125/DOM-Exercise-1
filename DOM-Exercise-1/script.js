// 1. add ".big" to "grow-me" paragraph
function main(){
// 1. add ".big" to "grow-me" paragraph
    const grow = document.getElementById('grow-me');
    grow.classList.add('big'); 
// 2. remove big from shrink
    const shrink = document.getElementById('shrink-me');
    shrink.classList.remove('big');
// 3. select and log all li
    const listItems = document.querySelectorAll('li');
    listItems.forEach((li) => {
        console.log(li);
    })
// 4. change link to "somewhere" instead of "nowhere"
    const link = document.querySelector('.link');
    link.setAttribute('href', 'https://www.example.com');
    link.innerText = 'link to somewhere';
// 5. change display of #hide-me to 'none'
    const hide = document.querySelector('#hide-me');
    hide.style.display = 'none';
// 6. change #show-me display to 'block
    const show = document.querySelector('#show-me');
    show.style.display = 'block';
// 7. Get the text that the user enters into the "name" input box and use it to set a welcome message in the <h1>, e.g., "Welcome Grant!".
    let enterName = document.querySelector('#name');
    let welcome = document.querySelector('h1');
    welcome.innerText = `Welcome, ${enterName.value}`;
}

    
  
