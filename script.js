const form = document.getElementById('form');
const main = document.getElementById('main');
const memeDiv = document.createElement('div');
memeDiv.id = "memeBox";
main.append(memeDiv);


//once form is submitted, build the meme box with the content
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = document.getElementById('imageUrl').value;
    const top = document.getElementById('top').value;
    const bottom = document.getElementById('bottom').value;

    const img = document.createElement('img');
    img.src = url;
    img.classList.add('img');
    const topText = document.createElement('div');
    topText.innerText = top;
    topText.classList = "top text";

    const bottomText = document.createElement('div');
    bottomText.innerText = bottom;
    bottomText.classList = "bottom text";

    const newDiv = document.createElement('div');
    newDiv.classList.add("meme");
    newDiv.append(img);
    newDiv.append(topText);
    newDiv.append(bottomText);

    document.getElementById("memeBox").appendChild(newDiv);

    const deleteMeme = document.createElement('button');
    deleteMeme.innerText = 'remove';
    deleteMeme.classList.add("delete");
    newDiv.append(deleteMeme);
});

    //remove a meme
    memeDiv.addEventListener('click', (event) => {
        console.log("WTF");
        console.log(event);
        event.target.parentNode.remove();
    });
