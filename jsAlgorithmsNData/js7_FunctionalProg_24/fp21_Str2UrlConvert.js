/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs

==================================================================
DESCRIPTION

Apply Functional Programming to Convert Strings to URL Slugs
The last several challenges covered a number of useful array and string methods that follow functional programming principles. We've also learned about reduce, which is a powerful method used to reduce problems to simpler forms. From computing averages to sorting, any array operation can be achieved by applying it. Recall that map and filter are special cases of reduce.

Let's combine what we've learned to solve a practical problem.

Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes. For example, if you write a Medium post titled Stop Using Reduce, it's likely the URL would have some form of the title string in it (.../stop-using-reduce). You may have already noticed this on the freeCodeCamp site.

Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces

==================================================================
TESTCASE

Your code should not use the replace method for this challenge.

urlSlug("Winter Is Coming") should return the string winter-is-coming.

urlSlug(" Winter Is  Coming") should return the string winter-is-coming.

urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") should return the string a-mind-needs-books-like-a-sword-needs-a-whetstone.

urlSlug("Hold The Door") should return the string hold-the-door.

==================================================================
SETUP

// Only change code below this line
function urlSlug(title) {


}
// Only change code above this line

==================================================================

*/

let str2UrlTest = "Hold The Door";
function urlSlug(title) {
  return title.trim().toLowerCase().split(" ").join("-");
}
console.log(str2UrlTest);
console.log(urlSlug(str2UrlTest));
