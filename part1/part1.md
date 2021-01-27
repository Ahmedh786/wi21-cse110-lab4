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
