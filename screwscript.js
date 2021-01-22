onScan.attachTo(document, {
    suffixKeyCodes: [13], // enter-key expected at the end of a scan
    reactToPaste: true, // Compatibility to built-in scanners in paste-mode (as opposed to keyboard-mode)
    onScan: function (sCode, iQty) { // Alternative to document.addEventListener('scan')
        scanTime(sCode);
    }//,
    // onKeyDetect: function(iKeyCode){ // output all potentially relevant key events - great for debugging!
    //     console.log('Pressed: ' + iKeyCode);
    // }
});

// function scanTime(barcode) {
//     if (screws.hasOwnProperty(barcode)) {
//         $("#output").text(screws[barcode])
//     } else {
//         let val = prompt("Never seen this one before. What is this??");
//         if (val) {
//             screws[barcode] = val
//         } else {
//             $("#output").text("looks like you declined to save that one. If this is a mistake, please scan it again")
//         }
//     }
// }


function scanTime(barcode) {
        $("#output").text(()=>screws.hasOwnProperty(barcode)?screws[barcode]:(val = prompt("Never seen this one before. What is this??"))?val:"looks like you declined to save that one. If this is a mistake, please scan it again")
}