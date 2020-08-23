# javascript-algorithms
Code Explanation
1)Create an array of arguments using Array.prototype.slice.call() and store it in the variable args. We’ll use this to check against arr.

2)Start a basic for loop to iterate through arr. Nest another for loop inside the first, changing the integer variable j and arr to args. This second loop will iterate through args .

Within the second loop create an if statement, checking strictly === that the current val of arr[i] is equal to args[j].

If the value at the current index is equal in both arrays, use delete to remove it from arr.

3)Outside of the nested loops: return the modified array using the Boolean object as a filter for any null's created by the delete operator.
