The bug is that the inputs are taken as strings, so the result variable is also calculated as a string rather than a number. 
I added a unary + prior to the getElementByID call, which converts the string read to a number. 

