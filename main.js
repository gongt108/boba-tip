const orderBox = document.querySelector('#order-box');
const thankYouImg = document.querySelector('#thank-you-img');
const orderText = document.querySelector('#order-text');
const tipJar = document.querySelector('#tip-jar');
const noTipBtn = document.querySelector('#no-tip-button');
const sadCatContainer = document.querySelector('#sad-cat-container');

let noTipBtnX;
let noTipBtnY;
let numTimesNo = 0;

tipJar.addEventListener('click', (event) => {
	if (event.target.classList.contains('tip-button')) {
		if (event.target.id === 'fruit-tea') {
			orderText.innerHTML =
				'I would like a Guava Sunset from Teaspoon or Strawberry Black Tea from Happy Lemon, half ice, 25% sweet please :3';
		} else if (event.target.id === 'coffee') {
			orderText.innerHTML =
				'I would like a hot lavendar oat milk latte or iced caramel macchiato please :3';
		} else if (event.target.id === 'milk-tea') {
			orderText.innerHTML =
				'I would like a Rose or Oolong Milk Tea with Grass Jelly or Coffee Jelly, half ice, 25% sweet please :3';
		}
		orderBox.style.display = 'flex';
		numTimesNo = 0;
		sadCatContainer.style.display = 'none';
	} else if (event.target.classList.contains('no-tip-button')) {
		orderBox.style.display = 'none';
		numTimesNo++;
		if (numTimesNo > 10) {
			noTipBtn.style.display = 'none';
		}
		noTipBtn.style.width = `${450 / numTimesNo}px`;
		noTipBtn.style.height = `${50 / numTimesNo}px`;

		randomXY();
	}
});

const randomXY = () => {
	let randomX = Math.random();
	let randomY = Math.random();
	console.log(randomX, randomY);

	const sadCatImg = document.createElement('img');
	sadCatImg.src = `./images/sadcat${Math.floor(randomX * 10)}.jpg`;
	sadCatImg.classList = 'sad-cat-img';
	sadCatContainer.style.top = `${window.event.clientY - 50}px`;
	sadCatContainer.style.left = `${window.event.clientX - 50}px`;
	if (sadCatContainer.firstChild) {
		sadCatContainer.removeChild(sadCatContainer.firstChild);
	}
	sadCatContainer.appendChild(sadCatImg);
	sadCatContainer.style.display = 'flex';

	noTipBtn.style.position = 'absolute';
	noTipBtn.style.top = `${(window.innerHeight - 100) * randomY}px`;
	noTipBtn.style.left = `${(window.innerWidth - 100) * randomX}px`;
};

