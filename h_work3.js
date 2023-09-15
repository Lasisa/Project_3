
const root = document.querySelector('#root');

const firstSection = document.createElement('section');
firstSection.classList.add('first-section');
root.appendChild(firstSection);


const firstText = document.createElement("h1");
firstText.textContent="РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В МИРЕ";
firstText.classList.add("title");
firstSection.appendChild(firstText);

const secondText = document.createElement("p");
secondText.textContent="стадионы, газопроводы, мосты, дамбы";
secondText.classList.add("text-mini");
firstSection.appendChild(secondText);

const mainBlock = document.createElement("div")
mainBlock.classList.add("main-block")
firstSection.appendChild(mainBlock); 

for (let i = 0; i <= 3; i++) {
    const smallBlock = document.createElement("div");
    smallBlock.classList.add("small-block");
    
    const textOne = document.createElement("h3");
    textOne.textContent="26"
    textOne.classList.add("text-one")
    smallBlock.appendChild(textOne)

    const textTwo = document.createElement("h4");
    textTwo.textContent="лет"
    textTwo.classList.add("text-two")
    smallBlock.appendChild(textTwo)

    const textThree = document.createElement("h5");
    textThree.textContent="на рынке"
    textThree.classList.add("text-three")
    smallBlock.appendChild(textThree)

    mainBlock.appendChild(smallBlock)

}












