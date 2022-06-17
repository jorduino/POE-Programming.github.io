
function calc() {
	monthlyOut.innerHTML = "Customer's monthly EIP payment: $" + (((Number.parseInt(priceIn.value) || 0) - (Number.parseInt(promoIn.value) || 0) + (Number.parseInt(tradeIn.value) || 0)) / [24, 30][periodIn.selectedIndex]).toFixed(2)
	upfrontOut.innerHTML = "Customer's up front credit to the bill: $" + (Number.parseInt(tradeIn.innerHTML) || 0)
}

