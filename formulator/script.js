let input;
let results = [];
let raw = [];
let fileDone = false;
let randIndex = -1;

function randomClicked() {
	if (results.length > 0) {
		randIndex = Math.floor(Math.random() * results.length);
		output2.innerHTML = "The winner is: " + results[randIndex][2];
	} else {
		output2.innerHTML = "I don't see anything to select. If this is an error, please let me know.";
	}
}

function fileChanged() {
	randButton.style.display = "";
	let formFile = filein.files[0];
	Papa.parse(formFile, {
		worker: true,
		step: stepFunction,
		complete: completeFunction
	});
}

function stepFunction(row) {
	fileDone = false;
	raw.push(row.data);
}

function completeFunction() {
	fileDone = true;
	results = [...raw];
	generateTable();
}

function restrictClicked() {
	results = [...raw]
	if (restrict.checked && fileDone) {
		results = raw.filter(row => new Date(row[0]) < new Date(endTime.value) && new Date(row[0]) > new Date(startTime.value))
	}
	generateTable();
}
function formatData(data) {
	return data.map(row => {
		row[0] = new Date(row[0]).toLocaleString();
		return row;
	}).filter(row =>
		row[0] != "Invalid Date" && selectColumn(row.slice(1))
	)
}
function jsonToTable(raw) {
	let json = [...raw];

	return `
    <table>
        <tHead>
            ${arrayToHead(json.shift())}
        </thead>
        <tbody>
            ${array2DToRows(formatData(json))}
		</tbody>
    </table>
    `
}

function selectColumn(array, column) {
	return array.map(value => value[column]);
}

function generateTable() {
	fileDone = true;
	output.innerHTML = jsonToTable(results);
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
