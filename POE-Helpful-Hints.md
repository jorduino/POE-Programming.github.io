# Helpful hints

## Table of Contents

- [Helpful hints](#helpful-hints)
  - [Table of Contents](#table-of-contents)
  - [Basic Programming](#basic-programming)
	- [Problem 1](#problem-1)
	- [Problem 2](#problem-2)
	- [Problem 3](#problem-3)
	- [Problem 4](#problem-4)
  - [While Loops and Timers](#while-loops-and-timers)
	- [Problem 5](#problem-5)
	- [Problem 6](#problem-6)
	- [Problem 7](#problem-7)
	- [Problem 8](#problem-8)
	- [Problem 9](#problem-9)
  - [If-Else Statements](#if-else-statements)
	- [Problem 10](#problem-10)
	- [Problem 11](#problem-11)
	- [Problem 12](#problem-12)
	- [Problem 13](#problem-13)
	- [Problem 14](#problem-14)
  - [Variables and Functions](#variables-and-functions)
	- [Problem 15](#problem-15)
	- [Problem 16](#problem-16)
	- [Problem 17](#problem-17)
  - [Putting it all together](#putting-it-all-together)
	- [Problem 18](#problem-18)

## Basic Programming

### Problem 1

Use `wait(time)` to wait a given ammount of time

___

### Problem 2

Use `untilTouch(sensor-name)` to wait until a button is pressed

`turnLEDOn(led-name)` and `turnLEDOff(led-name)` can be found in the function library under `special`

___

### Problem 3

Use `untilPotentiometerGreaterThan(ammount,sensor-name)` and `untilPotentiometerLessThan(ammount,sensor-name)` to wait until the potentiometer reaches a certain point

Use `untilSonarLessThan(distance,sensor-name)` to wait until something is a certain distance from the sonar

___

### Problem 4

Use `setServo(servo-name,value)` to move the servo

Use `untilRotations(rotations, sensor-name)` to wait until the encoder has been turned a certain number of times

[Top](#helpful-hints)

## While Loops and Timers

### Problem 5

Use the following code snippet to help you write your program

```c
...
while(true)
{
	//code that will loop forever
}
...
```

___

### Problem 6

To use a timer, see the code snippet below

```c
...
clearTimer(T1);
while(time1[T1]<20000)//until timer reaches 20000 ms or 20 seconds
{
	//code that will loop for 20 seconds
}
...
```

___

### Problem 7

Use `untilDark(value, sensor-name)` to wait until the light sensor is covered and `untilLight(value,sensor-name)` to wait until its uncovered

>Experiment with different values to find one that works. The debugger menu works well for this

___

### Problem 8

Use a while loop as shown below

```c
...
while(sensorValue(limitSwitch)==0)
{
	//code in here only runs if the limit switch is not pressed
}
...
```

___

### Problem 9

Nothing new for this one. Refer to previous examples for help

[Top](#helpful-hints)

## If-Else Statements

### Problem 10

This code snippet shows how an if-else statement works

```c
...
if(SensorValue(sensor-name)<value)
{
	//code in here runs if the sensor's value is greater than the one given
}else{
	//code in here runs if the sensor's value is NOT greater than the one given
}
...
```

>The value you use will likely be different than the one in problem 7
___

### Problem 11

For this problem, you will need two different if-else statements as shown below

```c
...
if(condition1)//i.e. bump switch is pressed
{
	//code that runs if the condition is met

	//i.e. start right motor
}else
{
	//code that runs if its NOT met

	//i.e. stop right motor
}

if(condition2)//i.e. limit switch is pressed
{
	//code that runs if the condition is met

	//i.e. start left motor
}else
{
	//code that runs if its NOT met

	//i.e. stop left motor
}
...
```

___

### Problem 12

Similar to problem 10 but with light sensor and flashlight instead of line follower and LED. The if statement will also use a `>` symbol rather than a `<` symbol. Code snippet below

```c
...
if(SensorValue(sensor-name)>value)
{
	//code in here runs if the sensor's value is greater than the one given
}else{
	//code in here runs if the sensor's value is NOT greater than the one given
}
...
```

>For this one, the value ***should*** be the same as in problem 7, but it might be different depending on your cortex

___

### Problem 13

For this problem, use a nested if statement

```c
...
if(condition1)//i.e. limit switch is pressed
{
	if(condition2)//i.e. light sensor is covered
	{
		//code in here only runs if both condtitions are met

		//i.e. turn servo one way
	}else{
		//code in here runs if only the first condition is met

		//i.e.turn servo the other way
	}
}else
{
	/*code in here runs if the first condition
	isn't met (regardless of the second)*/

	//i.e. turn the servo to the home position
}
...
```

___

### Problem 14

This problem is similar to problem 11 but with a third condition

[Top](#helpful-hints)

## Variables and Functions

### Problem 15

The code snippet below shows how to use a variable and a for loop

```c
...
for(int variable = 0; variable < 5; variable++)
{
	//code you want to run 5 times
}
...
```

>'__int variable = 0__' makes a new integer variable named variable and starts it at 0,  
>'__variable < 5__' tells the loop to keep looping while variable is less than 5,  
>'__variable++__' tells the loop that each time it loops it needs to add 1 to variable

___

### Problem 16

This code snippet shows how functions work

```c
...
void functionName()
{
	//code that the function will run
}
...
task main(){
	functionName(); //this line runs the function
}
...
```

___

### Problem 17

Combines problems 15 and 16. An example is shown below

```c
...
void functionName()
{
	//code inside the function
}
...
task main(){
	for(int variable = 0; variable < 5; variable++)
	{
		functionName();
	}
}
```

[Top](#helpful-hints)

## Putting it all together

### Problem 18

Nothing new here. Combine knowledge from all previous problems to complete

[Top](#helpful-hints)
