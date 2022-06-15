let prices = [{
    "name": "T-Mobile Essentials",
    "soc": "TMESNTL",
    "prices": [
        65, 100, 120, 140, 160, 180
    ],
    "max": 0
},
{
    "name": "Essentials 55+",
    "soc": "TMESNTL55",
    "prices": [
        45, 65
    ],
    "max": 1
}, {
    "name": "Magenta",
    "soc": "MGNTA",
    "prices": [
        75, 130, 155, 180, 205, 230, 255, 280, 310, 340, 370, 400
    ],
    "max": 0
},
{
    "name": "Magenta 55+",
    "soc": "MG55TI",
    "prices": [
        55, 80, 120, 160
    ],
    "max": 1
},
{
    "name": "Magenta First Responder",
    "soc": "MAGFR",
    "prices": [
        60, 90, 105, 120, 135, 150, 175, 200, 225, 250, 275, 300
    ],
    "max": 2
},
{
    "name": "Magenta Military",
    "soc": "MAGMIL",
    "prices": [
        60, 90, 105, 120, 135, 150, 175, 200, 225, 250, 275, 300
    ],
    "max": 3
}
];
let maxes = [{
    "name": "Magenta MAX",
    "soc": "MPLSSUB",
    "prices": [
        90, 150, 185, 220, 255, 290, 325, 360, 400, 440, 480, 520
    ]
},
{
    "name": "Magenta MAX 55+",
    "soc": "MGP55USL",
    "prices": [
        70, 100, 150, 200
    ]
},
{
    "name": "Magenta MAX First Responder",
    "soc": "MPLSFRSL",
    "prices": [
        75, 110, 135, 160, 185, 210, 245, 280, 315, 350, 385, 420
    ]
},
{
    "name": "Magenta MAX Military",
    "soc": "MPLSMILSL",
    "prices": [
        75, 110, 135, 160, 185, 210, 245, 280, 315, 350, 385, 420
    ]
}
]

window.onload = function () {
    for (let i = 0; i < prices.length; i++) {
        planSelect.innerHTML += `<option value="${prices[i].soc}">${prices[i].name}</option>`
    }
    planChange();

}

function calc() {
    let autopay = autopayCheck.checked;
    let plan = prices[planSelect.selectedIndex];
    let lines = linesSelect.selectedIndex;
    let apDiscount = autopay * Math.max(lines);

    let current = plan.prices[lines] - (autopay ? apDiscount : 0);
    let currentTotal = plan.prices[lines] + 55 - (autopay ? apDiscount + 5 : 0);

    let max = maxes[plan.max].prices[lines] - (autopay ? 5 * (lines + 1) : 0);
    let maxTotal = maxes[plan.max].prices[lines] + 35 - 5 * (lines + 2);

    currentOut.innerHTML = `Current Plan: $${current}`;
    currentTotalOut.innerHTML = `Current Plan Plus HINT: $${currentTotal}`;

    maxOut.innerHTML = `MAX Equivalent Plan (${maxes[plan.max].name}): $${max}`
    maxTotalOut.innerHTML = `MAX Plan Plus HINT w/ autopay: $${maxTotal}`

    let difference = maxTotal - currentTotal;
    let shouldSwitch = difference <= 0 ? "YES! " : difference <= 10 ? "Maybe. " : "Speak to the value of increasing.";
    let suffix =
        "It would be " + (difference < 0 ?
            `$${Math.abs(difference)} cheaper!` : difference == 0 ?
                "the same price!" :
                `$${Math.abs(difference)} more.`);


    switchOut.innerHTML = lines >= 1 ? "<h1>Should they switch?</h1><h2>" + shouldSwitch + " " + suffix + "</h2>" :
        "<h1>This promotion requires minimum of two lines</h1>";

    notice.innerHTML = autopay ? "" : "Notice: MAX discount includes adding autopay.";


}

function updateLines() {
    let plan = prices[planSelect.selectedIndex];
    linesSelect.innerHTML = ""
    for (i = 1; i <= plan.prices.length; i++) {
        linesSelect.innerHTML += `<option value="${i}">${i}</option>`
    }
}

function planChange() {
    updateLines();
    calc();
}