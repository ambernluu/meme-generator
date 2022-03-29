const form = document.getElementById('form');

const main = document.getElementById('main');
const memeDiv = document.createElement('div');
memeDiv.id = "memeBox";
main.append(memeDiv);

form.addEventListener('change', (event) => {
    // console.log(event.target);
    // console.log(event.target.value);
    // const textColor = event.target.value;
    document.getElementById('memeBox').style.color = event.target.value;
    form.addEventListener('submit', createMeme);
}, false);


//once form is submitted, build the meme box with the content
function createMeme (event,){
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

    //form.reset();
}

    //remove a meme
    memeDiv.addEventListener('click', (event) => {
        if((event.target.innerText === 'remove')){
            event.target.parentNode.remove();
        }
    });
