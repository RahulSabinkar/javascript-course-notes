# JavaScript Notes <!-- omit in toc -->

## Table Of Contents <!-- omit in toc -->

- [Introduction](#introduction)
  - [What can you do with JavaScript?](#what-can-you-do-with-javascript)
  - [Where does JavaScript code run?](#where-does-javascript-code-run)
  - [JavaScript vs ECMAScript](#javascript-vs-ecmascript)
- [Basics](#basics)
  - [Variables](#variables)
  - [Constants](#constants)
  - [console.log()](#consolelog)
  - [Primitive/Value Types](#primitivevalue-types)
  - [Reference Types](#reference-types)
    - [Objects](#objects)
    - [Arrays](#arrays)
    - [Functions](#functions)
- [Operators](#operators)
  - [Arithmetic Operators](#arithmetic-operators)
  - [Assignment Operators](#assignment-operators)
  - [Comparison Operators](#comparison-operators)
  - [Ternary Operator](#ternary-operator)
  - [Logical Operators](#logical-operators)
    - [Logical Operator with non-boolean values](#logical-operator-with-non-boolean-values)
    - [Short-circuiting](#short-circuiting)
  - [Bitwise Operators](#bitwise-operators)
  - [Operator Precedence](#operator-precedence)
  - [Associativity of Operators](#associativity-of-operators)
- [Control Flow](#control-flow)
  - [Conditional Statements](#conditional-statements)
  - [Loop Statements](#loop-statements)
    - [for...in](#forin)
    - [for...of](#forof)
  - [Break and Continue](#break-and-continue)
    - [break](#break)
    - [continue](#continue)

---

## Introduction

### What can you do with JavaScript?

For a long time, JavaScript was only used in Browsers to build interactive web pages. Some developers refered to JavaScript as a toy language. But those days are gone because of huge community support, and investments by large companies like Facebook and Google. These days you can build:

- Web/Mobile Apps
- Real-time Networking Apps
  - like chats, video-streaming services, etc
- Command-Line Tools
- Games

### Where does JavaScript code run?

JavaScript was originally designed to run only in Browsers. So every browser has a **JavaScript Engine** that can execute JavaScript code.

JavaScript Engines follow the ECMAScript Standards. These standards define how the JavaScript engine should work and what features it should have.

JavaScript Engines for some different Browsers are:

- Firefox: Spidermonkey
- Chrome: v8
- Microsoft Edge: Chakra (older version)

In 2009, Ryan Dahl took the open-source JavaScript Engine in Chrome and embedded it inside a C++ program called **Node**.

Definition from Wiki:

> Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

### JavaScript vs ECMAScript

ECMAScript is a specification. While JavaScript is a programming language that conforms to these specifications.

ECMA is an organisation that is responsible for defining standards.

ECMA v1 was released in 1997. Starting from 2015, ECMA has been working on any old releases of newer specifications.

In 2015, ECMA released ES2015/ES6.

---

## Basics

### Variables

In the old days, before ES6, we used to use `var` keyword to declare variables. But there are issues with `var`.

So going forward, from ES6, the best practice is to use `let` keyword to declare variables.

Rules for declaring variables:

- cannot be reserved keyword.
- should be meaningful.
- cannot start with a number.
- cannot contain space or hyphen (-).
- are case-sensitive.

Best Practice:

- use camel-toe notation (Ex: myFirstName).
- declare/initialise each variable on a single line.

### Constants

In a real-world application, there are situations when we don't want the value of a variable to change. Otherwise, it's gonna create all kinds of bugs in our application.

In those situations, when we don't want our variables to change after initialisation, we use `const` instead of `let`.

The value of a variable can change, but the value of a constant cannot change.

### console.log()

All modern browsers have a web console for debugging. The console.log() method is used to write messages to these consoles. For example,

```
let answer = 5 + 20;
console.log('Sum:', answer); // With a comma
console.log('Sum: ' + answer); // With concantation
```

### Primitive/Value Types

In the category of Primitive types we have:

1. string
   - there are no characters, only strings.
2. number
   - no integers or floating points, all are numbers.
3. boolean
   - true or false.
4. undefined
   - declared but un-initialised variable.
5. null
   - used to explicitly clear variable.

`typeof` is an operator that is used to get the type of a variable.

```
let name = 'Rahul';        // String Literal
let age = 23;              // Number Literal
let isApproved = false;    // Boolean Literal
let occupation;            // Undefined Variable
let selectedCourse = null; // Clearing the Variable
typeof name;               // Outputs Type of Variable
```

Unlike other programming languages, there are no two kinds of numbers like integers and floating points. All numbers come under the type of **number**.

### Reference Types

In the category of Reference types, we have:

1. objects
2. arrays
3. functions

#### Objects

When we're dealing with multiple related variables, we can put these variables inside of an object.

For example, in the code below, we have two variables that are highly related and are part of a representation of a person. So instead of declaring two variables,

```
let name = 'Rahul'
let age = 23;
```

we can declare an object.

```
// Object Literal
let person = {
    name: 'Rahul',
    age: 23
}
```

The object _person_ have two _properties_ or _keys_ and those properties have their corresponding property values.

For example, `name` is a key while `'Rahul'` is a value of that key.

There are two ways to work with these properties:

1. Dot Notation

```
`person.name = 'John';
```

2. Bracket Notation

```
person['name'] = 'John';
```

Dot Notation is shorter and concise so it should be the default choice.

However, Bracket Notation has it's own uses when we don't know the name of the target property until the run time.

```
let selection = 'name';
person[selection] = 'Mary';
```

With the code above, we can access that property using the Bracket Notation in a **Dynamic** way.

#### Arrays

Array is a data structure that we used to represent a list of items (objects).

```
let selectedColors = ['red', 'blue'];
```

Elements inside an array have index values that start with 0.

For example, the element 'red' in the above code is at index 0, and blue is at index 1.

We can access those elements inside of an array using those index values.

```
console.log(selectedColors[0]) // Shows output as 'red'
```

JavaScript is a dynamic language and the length of an array as well as the type of objects we have in our array are dynamic i.e. can be changed at run-time.

```
// Adds object 'green' to the array
selectedColors[2] = 'green';

// Arrays can have different types of elements
selectedColors[3] = '123';
```

Unlike other statically-typed programming languages where arrays must have same types of elements, in JavaScript we can have different types of elements inside an array.

Technically, an array is an object and just like with objects, we can access and manipulate elements inside an array using Dot Notation and Bracket Notation.

Whenever we declare an array, that array will automatically receive certain properties like length, push, pop, etc.

```
numberOfSelectedColors = selectedColors.length;
```

#### Functions

Functions are one of the fundamental building blocks. A function is basically a set of statements that performs a task or calculates a value.

Function declaration statement doesn't have a semi-colon at the end.

```
// Function declaration that takes parameter 'name'
// as input and uses it inside the function block
function greet(name) {
  console.log('Hello ' + name);
}

let name = 'World';
greet(name); // Function calling with argument 'name'
```

When we declare a function, we can take one or any number of variables as input which are called **parameters**.

These parameters are local variables that are only active or usable inside that specific function block. In other words, the scope of these parameters are limited to inside the function.

When we call a function, we can pass along one or any number of variables which are called **arguments**.

The above function was used to _perform a task_. We can also write a function to _calculate a value_ and return a variable.

```
// Calculating the value and returning the answer
function square(number) {
  return number * number;
}

// Calling the function and getting the answer
console.log(square(2));
```

---

## Operators

In JavaScript, we have different kinds of Operators. We can use these operators along with our variables and constants to create **expressions**. And with these _expressions_, we can implement _logic_ and _algorithms_.

Here are the different types of Operators in JavaScript:

1. Arithmetic
2. Assignments
3. Comparison
4. Logical
5. Bitwise

### Arithmetic Operators

Arithmetic Operators are used to perform **arithmetic calculations**.

```
const number = 3 + 5; // 8
```

Here, the `+` operator is used to add two operands.

| Operator | Name                       | Example        |
| -------- | -------------------------- | -------------- |
| `+`      | Addition                   | `x + y`        |
| `-`      | Subtraction                | `x - y`        |
| `*`      | Multiplication             | `x * y`        |
| `/`      | Division                   | `x / y`        |
| `%`      | Remainder                  | `x % y`        |
| `**`     | Exponentiation (Power)     | `x ** y`       |
| `++`     | Increment (increment by 1) | `++x` or `x++` |
| `--`     | Decrement (decrement by 1) | `--x` or `x--` |

Both increment or decrement operators like `++x` and `x++` do different things. For example,

```
let x = 10;

// Increment ++
console.log(x++); // 10
console.log(x);   // 11

// Decrement --
console.log(--x); // 9
console.log(x);   // 9
```

`x++` returns the variable `x` as it is and then increments the variable.

Meanwhile `++x` increments it first and then returns the changed variable.

### Assignment Operators

Assignment operators are used to **assign** values to variables. For example,

```
const x = 5;
```

Here, the `=` operator is used to assign value `5` to variable `x`.

Here's a list of commonly used assignment operators:

| Operator | Name                      | Example                |
| -------- | ------------------------- | ---------------------- |
| `=`      | Assignment operator       | `a = 7; // 7`          |
| `+=`     | Addition assignment       | `a += 5; // a = a + 5` |
| `-=`     | Subtraction Assignment    | `a -= 2; // a = a - 2` |
| `*=`     | Multiplication Assignment | `a *= 3; // a = a * 3` |
| `/=`     | Division Assignment       | `a /= 2; // a = a / 2` |
| `%=`     | Remainder Assignment      | `a %= 2; // a = a % 2` |
| `**=`    | Exponentiation Assignment | `a **= 2; // a = a**2` |

### Comparison Operators

Comparison operators **compare** two values and return a boolean value, either true or false. For example,

```
let a = 5;
let b = 3;

// Relational Operators
console.log(a > b);   // true
console.log(a >= b);  // true
console.log(a < b);   // false
console.log(a <= b);  // false
```

In JavaScript, there are two Equality Operators. They are:

1. Strict Equality Operator
   - checks both values and types of the operands.
2. Loose Equality Operator
   - checks only the values of the operands.

```
// Strict Equality Operators
// Checks both value and type of operands
console.log(1 === 1);   // true
console.log('1' === 1); // false
console.log('1' !== 1); // true

// Loose Equality Operators
// Checks only value of operands
console.log(1 == 1);  // true
console.log('1' == 1);  // true
console.log('1' != 1);  // false
```

### Ternary Operator

A ternary operator evaluates a condition and executes a block of code based on the condition.

It's syntax is:

```
condition ? exprIfTrue : exprIfFalse
```

The ternary operator evaluates the test condition.

- If the condition is `true`, `exprIfTrue` is executed.
- If the condition is `false`, `exprIfFalse` is executed.

The ternary operator takes **three operands**, hence, the name ternary operator. It is also known as a conditional operator.

A ternary operator is frequently used as an alternative to an `if...else` statement in certain situations.

For example,

```
let studentMarks = 70;
let evaluation = studentMarks > 60 ? 'pass' : 'fail';
console.log(evaluation); // pass
```

### Logical Operators

Logical operators perform logical operations and return a boolean value, either true or false.

There are three Logical Operators in JavaScript, they are:

1. Logical AND
   - returns `true` only if both operands are `true`.
2. Logical OR
   - returns `true` if any operands are `true`.
3. Logical NOT
   - returns `true` if the operand is `false` and vice versa

```
const x = 5;
const y = 3;

const logicalAnd = (x < 6) && (y < 6); // false
const logicalOr  = (x < 6) || (y < 6); // true
const logicalNot = !logicalAnd;        // true
```

#### Logical Operator with non-boolean values

In JavaScript, each value has a type and an inherent **Boolean value**, generally known as either truthy or falsy. Some of the rules that determine how non-Boolean values are translated into true or false values are a little bizarre. Understanding the concepts and their effect on comparison helps when debugging JavaScript applications.

The following values are **always falsy**:

- `false`
- `0`
- `-0`
- `0n` (`BigInt` zero)
- `''`, `""`, ` `` ` (Empty String)
- `null`
- `undefined`
- `NaN` (Not A Number)

Everything else is **truthy**. That includes:

- `'0'` (a string containing a single zero)
- `'false'` (a string containing the text “false”)
- `[]` (an empty array)
- `{}` (an empty object)
- `function(){}` (an “empty” function)

Here's an example,

```
let userColor; // undefined
let defaultColor = 'red';
let selectedColor = userColor || defaultColor;

console.log(selectedColor); // red

userColor = 'blue'; // defined
selectedColor = userColor || defaultColor;

console.log(selectedColor); // blue
```

It checks whether userColor is defined, and uses it in that case. If the userColor is not defined, it will use defaultColor.

#### Short-circuiting

```
console.log(false || 1 || 2); // 1
```

JavaScript Intrepreter only checks the expression til `1` and all the other `||` are ignored completely.

### Bitwise Operators

Computers store numbers in the binary format which is a combination of `0`'s and `1`'s. Every single instruction you write in the programming language is converted into binary format that the computer understands.

There are two types of Bitwise Operators. They are:

1. Bitwise OR
2. Bitwise AND

Here below you can see the number `1` and `2` is represented in the binary format

```
1 = 00000001
2 = 00000010
R = 00000011 // Bitwise OR
A = 00000000 // Bitwise AND

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND
```

A real world application can be seen when implementing these concepts in creating an access control system.

```
// Read Permission
// 00000100 -> 4
// Write Permission
// 00000010 -> 2
// Execute Permission
// 00000001 -> 1

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;

// Giving write and read permissions
myPermission = myPermission | writePermission | executePermission;

// Check if user have read permission
let message = (myPermission & readPermission) ? 'Yes' : 'No'
console.log(message) // Yes
```

### Operator Precedence

Operator precedence determines the order in which the operators in an expression are evaluated.

When dealing with multiple operators and operands in a single expression, you can use parentheses for clarity. The expression inside the parentheses is evaluated first.

### Associativity of Operators

If an expression has two operators with similar precedence, the expression is evaluated according to its associativity (either left to right, or right to left).

---

## Control Flow

### Conditional Statements

- if...else
  - used when dealing with multiple variables.
- switch...case
  - only used when dealing with a single variable.

### Loop Statements

We have three types of loops that are common with many other programming languages. They are:

1. for
   - index variable is defined inside for() initialisation section.
2. while
   - index variable is defined before while statement.
   - condition is evaluated first.
   - statements are executed only if the condition is satisfied.
   - statements can be executed any number of times including zero.
3. do...while
   - index variable is defined before while statement.
   - condition is evaluated last.
   - an iteration of statement is executed first, then condition is checked
   - statements are executed atleast once.
   - not used a lot in real life scenarios.

In JavaScript, we have two more types of loops. They are:

1. for...in
2. for...of

#### for...in

We use for...in loop to iterate over the **properties** of an object.

```
// Object with two properties
const person = {
    name: 'Rahul',
    age: 22
};

// We use Bracket Notation to access object
// property values dynamically
for (let key in person) {
    console.log(key, person[key]);
}

// Array with three elements
const colors = [ 'red', 'green', 'blue'];

// Bracket Notation to access those elements
for (let index in colors) {
    console.log(index, colors[index]);
}
```

Starting from ES6, even though it is possible to use for...in loop to iterate over the index of an array, it is not recommended as best practice. Ideal way of accessing array elements is through for...of loop.

#### for...of

We use for...of loop to iterate over the elements or items of an array.

```
// Array creation with three elements
const colors = [ 'red', 'green', 'blue'];

// Accessing array elements
for (let color of colors) {
    console.log(color);
}
```

### Break and Continue

There are two keywords we can use that can change how the loop behaves.

#### break

We use the `break` keyword to break or jump out of an iteration in a loop. For example,

```
// To print numbers til 4
for (let i=0; i <= 10; i++) {
    if (i === 5)
        break;
    console.log(i);
}
```

#### continue

We use `continue` keyword to skip an interation in a loop. For example,

```
// To print odd numbers til 10
for (let i=0; i <= 10; i++) {
    if (i % 2 === 0)
        continue;
    console.log(i);
}
```

In real-world applications, we don't really use the keyword `continue` that often. It's one of those legacy things in the JavaScript language.

It's not considered a recommended way of writing code because it leads to a lot of noise in the code. In other words, it's an ugly way of writing code.

---
