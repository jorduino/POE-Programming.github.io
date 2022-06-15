
		function calc() {
			let plan = Number(planIn.value);
			let eip = Number(eipIn.value);
			let discount = Number(discountIn.value);
			let current = Number(currentIn.value);
			let late = Number(lateIn.value);
			let rest = Number(restIn.value);
			let promo = Number(promoIn.value);
			let ota = Number(otaIn.value);
			let intl = Number(intlIn.value);
			let midcycle = Number(midcycleIn.value);

			let mrc = plan + eip;
			let normal = mrc - discount;
			let increase = current - normal;
			let otc = late + rest + promo - ota + intl + midcycle;

			mrcOut.innerHTML = "MRC: $" + mrc;
			normalOut.innerHTML = "Normal Bill Charges: $" + normal;
			increaseOut.innerHTML = "Bill Increase Amount: $" + increase;
			otcOut.innerHTML = "One time charges:<br>$" + otc
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
	