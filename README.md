

Screenshot --> COMP484_HW9.png

1) Built-In Objects and Methods Used

Date
- new Date(): creates a Date object for the current date
- getMonth(): gets the month (0–11, so I added 1)
- getDate(): gets the day of the month
- getFullYear(): gets the 4-digit year

Number
- Number(): converts a string to a number
- Number.isNaN(): checks if a value is NaN
- Number.isInteger(): checks if a value is a whole number
- toFixed(): rounds the average score to 2 decimal places

String
- String(): converts a number to a string
- padStart(): adds leading zeros so the month and day are always two digits

document (browser DOM object)
- getElementById(): selects an element on the page by its id
- textContent (property): displays plain text
- innerHTML (property): displays text that includes HTML tags like `<br>`

What part was easiest?
The date display in part 1 was probably the easiest since we just need the month, year, and day methods from the Date object and just format it.

What part was hardest?
I would say the hardest part is probably part 2 because there are a lot of conversions and outputs.

What did you learn about the Date object?
I learned that getMonth() starts counting at 0, so I had to add 1 to get the month I want.

What did you learn about the Number object?
I learned that Number() turns a string into a number, but returns NaN if the string isn't a valid number.

What did you learn about displaying results in the browser?
I learned that textContent shows plain text while innerHTML reads HTML tags like `<br>`, and I needed that to put each result on its own line.