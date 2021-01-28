1. Here, prices.length will be outputted because var doesn't have block scope.
2. Here, the value calculated on the final iteration of the for loop will be outputted, since var doesn't have block scope. 
3. The value calculated for finalPrice during the last iteration of the for loop will be outputted, since the variable was declared beforehand and updated inside the loop.
4. An array with elements [50, 100, 150], because the function simply takes in the array elements and multiplies them by the discount, returning the new values. 
5. Here, an error will be thrown because 'let' has block scope, and this statement is outside the scope of the loop where it was declared.
6. Here, an error will be thrown because 'let' has block scope, and this statement is outside the scope of the loop where it was declared.
7. The value calculated for finalPrice during the last iteration of the for loop will be outputted, since the variable was declared beforehand and updated inside the loop.
8. An array with elements [50, 100, 150], because the function simply takes in the array elements and multiplies them by the discount, returning the new values. 
9. Here, an error will be thrown because 'let' has block scope, and this statement is outside the scope of the loop where it was declared.
10. An error would be previously thrown on the second iteration of the loop since we are trying to redeclare and reassign a const variable. This line, however, will also throw an error since const variables are block scoped.
11. 0 will be outputted, since that was the original variable assignment and const variables can't be reassigned. 
12. If no errors are thrown prior to the return statement, an array of elements [0,0,0] will be returned, since finalPrice is const and cannot be reassigned after assignment. 
13.
	1. student.name
	2. student['Grad Year']
	3. student.greeting()
	4. student['Favorite Teacher'].name
	5. student.courseLoad[0]
14. 
	1. '32', string concatenation occurs
	2. 1, string converted to number
	3. 3, null is converted to 0 
	4. '3null', string concatenation occurs
	5. 4, boolean true is converted to 1
	6. 0, false is converted to 0 and null is converted to 0
	7. '3undefined', string concatenation occurs
	8. NaN, undefined is NaN as a number
15.
	1. true, string '2' gets converted to number 2
	2. false, '2' is lexicographically greater than 12
	3. true, '2' gets converted to number 2
	4. false, true is converted to 1
	5. true, nonzero number converted to true
16. == checks equality after type conversion, === is stricter and does not convert types before comparison
17. 'How are you', because the true is converted to a 1, so the first if statement fails. 2 is always true here so the else if will be entered.
