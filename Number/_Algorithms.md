
# Algorithms for Number Programs

## **Easy Programs**

### 1. Even / Odd
- if num % 2 = 0, it is even
- else, it is odd

### 2. Leap Year
- if year % 4 = 0 AND year % 100 ≠ 0, it is leap year
- OR if year % 400 = 0, it is leap year
- else, it is not a leap year

### 3. Positive / Negative / Zero
- if num > 0, it is positive
- if num < 0, it is negative
- if num = 0, it is zero

### 4. Largest of Two Numbers
- if num1 > num2, num1 is largest
- else, num2 is largest

---

## **Medium Programs**

### 5. Swap Two Numbers
**Method A: With temporary variable**
- temp = num1
- num1 = num2
- num2 = temp

**Method B: Without temporary variable (XOR)**
- num1 = num1 ^ num2
- num2 = num1 ^ num2
- num1 = num1 ^ num2

### 6. Reverse Number
- reverse = 0
- while num > 0:
  - digit = num % 10 (extract last digit)
  - reverse = reverse * 10 + digit
  - num = num / 10 (remove last digit)
- return reverse

### 7. Palindrome Number
- Use reverse number algorithm
- if original_num = reversed_num, it is palindrome
- else, it is not palindrome

### 8. Sum of Digits
- sum = 0, product = 1, count = 0
- while num > 0:
  - digit = num % 10
  - sum = sum + digit
  - product = product * digit
  - count = count + 1
  - num = num / 10
- return sum, product, count

### 9. Factorial
**Method A: Using recursion**
- if num = 0 or num = 1, return 1
- else return num * factorial(num - 1)

**Method B: Using loop**
- result = 1
- for i = num to 2:
  - result = result * i
- return result

---

## **Hard Programs**

### 10. Armstrong Number
- length = count of digits in num
- temp = num, sum = 0
- while num > 0:
  - digit = num % 10
  - sum = sum + (digit ^ length)
  - num = num / 10
- if temp = sum, it is Armstrong number

### 11. Fibonacci Series
- x = 0, y = 1
- print x, y
- for i = 1 to length-2:
  - z = x + y
  - print z
  - x = y
  - y = z

### 12. Prime Number
**Check if number is prime:**
- if num < 2, return false
- for i = 2 to √num:
  - if num % i = 0, return false
- return true

**Find primes in range:**
- for num = from to upto:
  - check if num is prime using above logic
  - if prime, add to result array
- return array and count
