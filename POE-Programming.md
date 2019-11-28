
# PLTW Programming  

## Motors and sensor setup  
  
* Make sure the cables are plugged in according to the diagram below

![wiring diagram](http://chrisandjimcim.com/wp-content/uploads/2017/07/3-Cortex-Wiring-Clawbot.png)

* In robotc, at the top click on `Robot` > `Motors and Sensors Setup`  
* Go through the `Motors`, `Analog`, and `Digital` tabs and name and assign ports appropriately. Select `Ok` to close window  
* Before writing any code, click `Save As` and name the file '\<last name> template'
* Save on your desktop and upload to google drive
  
## Basic programming  
  
### Problem 1  

* Turn the left motor on at half speed CW. Wait 1 second  
* Stop the left motor and turn on the right motor at half speed CW. Wait 1 second
* Stop the right motor and turn on the LED. Wait 2 seconds
* Turn the LED off and the program ends

___

### Problem 2  

* Turn the left motor on at half speed CW. Wait until the bump switch is pressed
* Stop the left motor and turn on the right motor at half speed CW. Wait until the limit switch is pressed
* Stop the right motor and turn on the LED. Wait until the bump switch is pressed again
* Turn the LED off and the program ends

___

### Problem 3

TIP: Make sure the potentiometer is at zero before running this program

* Turn the left motor on at half speed CW. Wait until the potentiometer is turned to 1500
* Stop the left motor and turn on the right motor at half speed CW. Wait until the light sensor is covered
* Stop the right motor and turn on the LED. Wait until something is within 6 inches of the Sonar
* Turn the LED off and the program ends

___

### Problem 4

* Turn the right motor on at half speed CW
* Wait until the bump switch is pressed then turn right motor off
* 1 second after that, the servo motor turns to 60 degrees to the right _(set it to 127)_
* When the limit switch is pressed, the servo moves back to home position _(set it to 0)_
* After another second, the left motor turns on at half speed CW
* Once the quad encoder is turned 1 full rotation, the left motor turns off and the program ends