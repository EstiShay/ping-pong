# Ping-Pong

#### Number replacement & BDD project for Epicodus, 14.July.2017

#### By Esti Shay

## Description

This game takes in a number and returns a range of numbers up to the user input, with certain numbers replaced by words.

## Technologies Used

HTML, CSS, Bootstrap, JavaScript, jQuery

## Specifications

* It can count up to a specified number.
  * Input: 2
  * Output: 1, 2
* When the returned list of numbers includes a multiple of 3, it replaces that number with the word 'ping.'
  * Input: 3
  * Output: 1, 2, ping
* When the returned list of numbers includes a multiple of 5, it replaces that number with the word 'pong.'
  * Input: 6
  * Output: 1, 2, ping, 4, pong, ping
* When the returned list of numbers includes a multiple of 15, it replaces that number with 'ping-pong.'
  * Input: 16
  * Output: 1, 2, ping ... 13, 14, ping-pong, 16
* When given a number over 89, the computer gets bored and quits.
  * Input: 91
  * Output: 1, 2, ping, 4 ... 88, 89, BORED NOW COME BACK LATER
* When user selects the reverse play button, the numbers and words will display in descending order.
  * Input: 5, Reverse
  * Output: pong, 4, ping, 2, 1
* When user plays a number over 89 with the reverse button, numbers will descend until 89 numbers have been displayed, and then the 'bored' message will appear.
  * Input: 101, Reverse
  * Output: 101, pong, ping, 98 ... 14, 13, BORED NOW COME BACK LATER

## Alternative Play

This version of the game allows you to replay within the same window.  However, the files contain comments that would easily allow you to refactor the code to toggle between the answer and a fresh play form.


### License

GPL License

Copyright (c) 2017 Esti Shay
