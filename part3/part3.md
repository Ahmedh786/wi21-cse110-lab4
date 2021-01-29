The bug is that the inputs are taken as strings, so the result variable is also calculated as a string rather than a number. 
I added a unary '+' prior to the getElementByID call, which converts the string read to a number. 

1. citylots.json
2. part2.js
3. 11.7 MB
4. 2.76 s
5. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetchData()

