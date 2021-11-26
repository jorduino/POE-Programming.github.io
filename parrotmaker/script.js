let input;
function Main() {

    function tDist(x1, y1, x2, y2) {
        return (Math.abs(x2 - x1) + Math.abs(y2 - y1))
    }
    inarea = document.getElementById("inarea")
    input = inarea.value;
    console.log(input)
    input = input.split("\n").map(x => x.split("\t"));
    output = [];
    for (let i = 0; i < input.length; i++) {
        temp = [];
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === '') {
                let minDist = Infinity;

                for (let k = 0; k < input.length; k++) {
                    for (let l = 0; l < input[k].length; l++) {
                        if (input[k][l] !== '') {
                            if ([d = tDist(i, j, k, l)] < minDist) {//set tDist to d instead of calculating twice
                                minDist = d;
                            }
                        }
                    }
                }
                temp[j] = minDist
            }
            else {
                temp[j] = 0;
            }
            output[i] = temp;
        }
    }

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            let o = document.getElementById('invert').checked?8-(output[i][j]%8):(output[i][j]%8)+1;
            console.log(o)
            output[i][j] = o > 0 && o < 8 ? ":parrotwave" + o + ":" : ":parrotsleep:"
        }
    }
inarea.value='.\n'+output.map(e => e.join('\t')).join('\n');
}