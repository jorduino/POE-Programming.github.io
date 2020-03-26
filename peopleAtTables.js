function checkRings(n) {
    let workedFor = []; //array that will hold all permutations for which you can rotate the table to find two or more matches

    //===========================================================================================================================================

    let didntWorkedFor = []; //array that will hold all permutations for which you can't rotate the table to find two or more matches

    //===========================================================================================================================================

    factorial = m => m == 1 ? 1 : factorial(m - 1) * m; //function that determines the factorial of a number 'm'

    //===========================================================================================================================================

    Array.prototype.rotate = (function () {
        var unshift = Array.prototype.unshift,
            splice = Array.prototype.splice;

        return function (count) {
            var len = this.length >>> 0,                                    //function that rotates an array
                count = count >> 0;

            unshift.apply(this, splice.call(this, count % len, len));
            return this;
        };

    })();

    //===========================================================================================================================================

    function perm(xs) {
        let ret = [];
        for (let i = 0; i < xs.length; i = i + 1) {
            let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
            if (!rest.length) {
                ret.push([xs[i]])                                       //function that gives all permutations of an array
            } else {                                                    //as an array of arrays
                for (let j = 0; j < rest.length; j = j + 1) {
                    ret.push([xs[i]].concat(rest[j]))
                }
            }
        }
        return ret;

    }

    //===========================================================================================================================================

    let allRings = perm((() => {
        let arr = [];
        for (i = 1; i <= n; i++) {                  //anonymously creates an array of n
            arr.push(i);                            //elements (i.e. [1,2,3,4...n]), passes
        }                                           //the array into perm(xs), and stores
        return arr;                                 //the answer into allRings
    })());

    //===========================================================================================================================================

    let innerRing = (() => {
        let arr = [];
        for (i = 1; i <= n; i++) {                  //anonymously creates an array of n
            arr.push(i);                            //elements (i.e.[1,2,3,4...n]), and stores
        }                                           //that array into innerRing
        return arr;
    })()

    //===========================================================================================================================================

    for (ring = 0; ring < factorial(n); ring++) { //loops through each permutation of n pamphlets at the seats

        let works = false; //assumes this permutation will not work

        let outerRing = allRings[ring]; //selects the permutation from the list of all permutations and stores it in outerRing



        for (turn = 0; turn <= n; turn++) { //loops through each position that the
            innerRing.rotate(1)            //table could be at 

            let firstSpot = false; //true if the first person to be seated has been found already

            for (i = 0; i < n; i++) {
                if (outerRing[i] == innerRing[i]) {
                    if (firstSpot) {
                        works = true                    //if any person is sitting at the correct
                    }                                   //seat, set works to true only if you've
                    else {                              //already found someone else sitting in their spot
                        firstSpot = true;
                    }
                }
            }
        }
        if (works) {
            workedFor.push(outerRing);
        }
        else {
            didntWorkedFor.push(outerRing);
        }

    }
    return { "table": innerRing, "seatingOrderThatCouldBeSolved": workedFor, "orderThatCouldntBeSolved": didntWorkedFor };
}
