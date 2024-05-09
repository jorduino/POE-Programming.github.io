let normalRoof;
let currentRoof;
let normalAux;
let currentAux;

// normalRoofFeetIn
// normalRoofInchIn
// normalAuxFeetIn
// normalAuxInchIn
// offsetRoofFeetIn
// offsetRoofInchIn

// normalDiffOut
// offsetOut
// offsetAuxOut

function calc() {
	normalRoofFeet = parseFloat(normalRoofFeetIn.value);
	normalRoofInch = parseFloat(normalRoofInchIn.value);

	normalAuxFeet = parseFloat(normalAuxFeetIn.value);
	normalAuxInch = parseFloat(normalAuxInchIn.value);

	offsetRoofFeet = parseFloat(offsetRoofFeetIn.value);
	offsetRoofInch = parseFloat(offsetRoofInchIn.value);

	normalRoof = normalRoofFeet * 12 + normalRoofInch;
	normalAux = normalAuxFeet * 12 + normalAuxInch;
	offsetRoof = offsetRoofFeet * 12 + offsetRoofInch

	let normalDiff = normalAux - normalRoof;
	let offset = offsetRoof - normalRoof;
	let offsetAux = normalAux + offset;


	let normalDiffNeg = normalDiff < 0;
	let offsetNeg = offset < 0;
	let offsetAuxNeg = offsetAux < 0;

	let normalDiffFeet = Math.abs(Math.trunc(normalDiff / 12));
	let normalDiffInch = Math.abs(Math.abs(normalDiff) - normalDiffFeet * 12);

	let offsetFeet = Math.abs(Math.trunc(offset / 12));
	let offsetInch = Math.abs(Math.abs(offset) - offsetFeet * 12);

	let offsetAuxFeet = Math.abs(Math.trunc(offsetAux / 12));
	let offsetAuxInch = Math.abs(Math.abs(offsetAux) - offsetAuxFeet * 12);

	normalDiffOut.innerHTML = `Difference: ${normalDiffNeg ? "-" : ""}${normalDiffFeet}'${normalDiffInch}"`;

	offsetOut.innerHTML = `Offset: ${offsetNeg ? "-" : ""}${offsetFeet}'${offsetInch}"`;

	offsetAuxOut.innerHTML = `Height should be: <br>${offsetAuxNeg ? "-" : ""}${offsetAuxFeet}'${offsetAuxInch}"`;
	// normalOut.innerHTML = "Normal Bill Charges: $" + normal;
	// increaseOut.innerHTML = "Bill Increase Amount: $" + increase;
	// otcOut.innerHTML = "One time charges:<br>$" + otc
}

function clr() {
	planIn.value = "";
	eipIn.value = "";
	discountIn.value = "";
	currentIn.value = "";
	lateIn.value = "";
	promoIn.value = "";
	otaIn.value = "";
	intlIn.value = "";
	midcycleIn.value = "";
	calc()
}

window.onload = calc;