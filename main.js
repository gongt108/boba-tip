const orderBox = document.querySelector('#order-box');
const thankYouImg = document.querySelector('#thank-you-img');
const orderText = document.querySelector('#order-text');
const tipJar = document.querySelector('#tip-jar');
const noTipBtn = document.querySelector('#no-tip-button');

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
	} else if (event.target.classList.contains('no-tip-button')) {
		orderBox.style.display = 'none';

		console.log(noTipBtn);
	}
});
