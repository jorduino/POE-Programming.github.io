let input;
let results = [];
function Main() {
	let formFile = filein.files[0]
	// Papa.parse(filein.files[0], {
	//     complete: function(res) {
	//         results=res;
	//     }
	// });    
	Papa.parse(formFile, {
		worker: true,
		// header: true,
		step: function (row) {
			results.push(row.data)
			console.log("row:" + row.data)
		},
		complete: generateTable
	});

	// let keys = [];

}

function generateTable() {
	let keys = results[0];
	let tableHeader = arrayToRow(keys);
	results.shift()
	tableBody = array2DToRows(results)

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
function array2DToRows(arr2D){
	let rows = "";
	for(el of arr2D){
		rows+=arrayToRow(el)
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
   // Object.keys(results[0])
