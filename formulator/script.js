let input;
let results = [];
let raw = [];
let fileRead = false;
let randIndex = -1;

function Main() {
	randButton.style.display = "";
	let formFile = filein.files[0];
	Papa.parse(formFile, {
		worker: true,
		step: function (row) {
			fileRead = false;
			raw.push(row.data)
		},
		complete: generateTable
	});
}
function selRandom() {
	if (results.length > 0) {
		randIndex = Math.floor(Math.random() * results.length);
		output2.innerHTML = "The winner is: " + results[randIndex][2];
	} else {
		output2.innerHTML = "I don't see anything to select. If this is an error, please let me know.";
	}
}

function restrictTimes() {
	if (restrict.checked && fileRead) {
		results = [...raw];
		let keys = results[0];
		let tableHeader = arrayToHead(keys);
		results.shift()
		for (let i = 0; i < results.length - 1; i++) {
			if (new Date(results[i][0]) > new Date(endTime.value) || new Date(results[i][0]) < new Date(startTime.value)) {
				results.splice(i, 1);
				i--;
			}
		}
		tableBody = array2DToRows(formatData(results))
		output.innerHTML = `
			<table>
				<tHead>
					${tableHeader}
				</thead>
				<tbody>
					${tableBody}
				</tbody>
			</table>
    `
	} else {
		generateTable();
	}
}
function formatData(data) {
	for (let i = 0; i < data.length; i++) {
		row = data[i];
		row[0] = new Date(row[0]).toLocaleString();
		if (row[0] == "Invalid Date") {
			data.splice(i, 1);
		}
	}
	return data
}
function generateTable() {
	fileRead = true;
	results = [...raw];
	let keys = results[0];
	let tableHeader = arrayToHead(keys);
	results.shift()
	tableBody = array2DToRows(formatData(results))

	output.innerHTML = `
    <table>
        <tHead>
            ${tableHeader}
        </thead>
        <tbody>
            ${tableBody}
		</tbody>
    </table>
    `
}
function array2DToRows(arr2D) {
	let rows = "";
	for (el of arr2D) {
		rows += arrayToRow(el)
	}
	return rows;
}
function arrayToRow(arr) {
	let row = "<tr>";
	for (el of arr) {
		row += "<td>" + el + "</td>"
	}
	return row + "</tr>";
}
function arrayToHead(arr) {
	let row = "<tr>";
	for (el of arr) {
		row += "<th>" + el + "</th>"
	}
	return row + "</tr>";
}
   // Object.keys(results[0])
