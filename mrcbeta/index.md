
    <style type="text/css">
      #wrapper {
        margin: auto;
        width: 50%;
        border: 1px solid black;
        overflow: hidden;
      }

      #first {
        width: 50%;
        float: left;
      }

      #second {
        overflow: hidden;
      }

    </style>
    <script>
      function calc() {
      let plan=Number(planlbl.value);
      let eip=Number(eiplbl.value);
      let discount=Number(discountlbl.value);
      let current=Number(currentlbl.value);
      let late=Number(latelbl.value);
      let rest=Number(restlbl.value);
      let promo=Number(promolbl.value);
      let ota=Number(otalbl.value);
      let intl=Number(intllbl.value);
      let midcycle=Number(midcyclelbl.value);
      
      let mrc=plan+eip;
      let normal = mrc-discount;
      let increase = current-normal;
      let otc = late+rest+promo-ota+intl+midcycle;
      
      mrcout.innerHTML="$"+mrc;
      normalout.innerHTML="$"+normal;
      increaseout.innerHTML="$"+increase;
      otcout.innerHTML="One time charges? $"+otc
      }

    </script>

    <div id="wrapper">
      <div id="first">
        <label>Plan and Features =</label>
        <input type="text" id="planlbl" onchange="calc()"/><br>
        
        <label>EIP Amount =</label>
        <input type="text" id="eiplbl" onchange="calc()"/><br>
        
        <label>MRC=</label>
        <span id="mrcout">$0</span><br>
        <label>Discounts and Promos =</label>
        <input type="text" id="discountlbl" onchange="calc()"/><br>
        
        <label>Normal Bill Charges =</label>
        <span id="normalout">$0</span><br>
      </div>
      
      <div id="second">
        <label>Current Bill</label>
        <input type="text" id="currentlbl" onchange="calc()"/><br>
        
        <label>Bill increase amount =</label>
        <span id="increaseout" >$0</span><br>
        
        <h3 id="otcout">One time charges? $0</h3>
        
        <label>Late Fee?</label>
        <input type="text" id="latelbl" onchange="calc()"/><br>
        
        <label>Restore Fee?</label>
        <input type="text" id="restlbl" onchange="calc()"/><br>
        
        <label>Missing Promos?</label>
        <input type="text" id="promolbl" onchange="calc()"/><br>
        
        <label>One Time Adjustments?</label>
        <input type="text" id="otalbl" onchange="calc()"/><br>
        
        <label>International/411 Calls?</label>
        <input type="text" id="intllbl" onchange="calc()"/><br>
        
        <label>Plan Changes?</label>
        <input type="text" id="midcyclelbl" onchange="calc()"/>
      </div>
    </div>

    <p id="demo"></p>
