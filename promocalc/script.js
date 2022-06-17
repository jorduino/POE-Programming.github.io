
function calc() {
	price = Number.parseInt(priceIn.value) || 0;
	promo = Number.parseInt(promoIn.value) || 0;
	trade = Number.parseInt(tradeIn.value) || 0;
	period = [24, 30][periodIn.selectedIndex];

	out = `Phone costs $${(price / period).toFixed(2)}/month, you'll get a credit back of $${(Math.max(promo - trade, 0) / period).toFixed(2)}/month, so your cost for the phones will be $${((price - Math.max(promo - trade, 0)) / period).toFixed(2)}/month`


	monthlyOut.innerHTML = "Customer's monthly EIP breakdown: " + out;

	upfrontOut.innerHTML = "Customer's up front credit to the bill: $" + (Number.parseInt(tradeIn.value) || 0)

}

window.onload = calc;