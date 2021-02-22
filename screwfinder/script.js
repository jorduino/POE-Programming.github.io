onScan.attachTo(document, {
    suffixKeyCodes: [13],
    reactToPaste: true,
    onScan: function (sCode, iQty) {
        scanTime(sCode);
    }
});

/*function scanTime(barcode) {
    let output = $("#output");
    let exists = screws.hasOwnProperty(barcode);
    let display = barcode + " (" + screws[barcode] + ")<br>";
    let doPrompt = $("#doPrompt")[0].checked;

    if (doPrompt) {
        if (exists) {
            output.prepend(display)
        } else {
            let val = prompt("Never seen this one before. What is it?");
            if (val) {
                output.prepend(barcode + " (" + val + ")<br>")
                screws[barcode] = val
            } else {
                output.prepend("declined<br>")
            }
        }
    } else {
        if (exists) {
            output.prepend(display)
        }
    }
}*/
function scanTime(e) { let r = $("#output"), p = screws.hasOwnProperty(e), s = e + " (" + screws[e] + ")<br>"; if ($("#doPrompt")[0].checked) if (p) r.prepend(s); else { let p = prompt("Never seen this one before. What is it?"); p ? (r.prepend(e + " (" + p + ")<br>"), screws[e] = p) : r.prepend("declined<br>") } else p && r.prepend(s) }