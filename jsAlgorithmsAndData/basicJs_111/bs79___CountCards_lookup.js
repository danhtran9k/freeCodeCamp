/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards

==================================================================
DESCRIPTION

Counting Cards
In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.

==================================================================
TESTCASE

Cards Sequence 2, 3, 4, 5, 6 should return 5 Bet

Passed
Cards Sequence 7, 8, 9 should return the string 0 Hold

Passed
Cards Sequence 10, J, Q, K, A should return the string -5 Hold

Passed
Cards Sequence 3, 7, Q, 8, A should return the string -1 Hold

Passed
Cards Sequence 2, J, 9, 2, 7 should return the string 1 Bet

Passed
Cards Sequence 2, 2, 10 should return the string 1 Bet

Passed
Cards Sequence 3, 2, A, 10, K should return the string -1 Hold

==================================================================
SETUP

var count = 0;

function cc(card) {
  // Only change code below this line
  let decreaseCard = [10, 'J', 'Q', 'K', 'A'];
  let decision = "";

  count += decreaseCard.includes(card) ? -1 :
    (card >= 2 && card <= 6) ? 1 : 0;

  decision = count > 0 ? " Bet" : " Hold";

  return count + decision;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

==================================================================

*/

var count = 0;

function cc(card) {
  // Only change code below this line
  let decreaseCard = [10, "J", "Q", "K", "A"];
  let decision = "";

  count += decreaseCard.includes(card) ? -1 : card >= 2 && card <= 6 ? 1 : 0;

  decision = count > 0 ? " Bet" : " Hold";

  return count + decision;
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
