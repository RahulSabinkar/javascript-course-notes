# JavaScript Notes

---

## Table Of Contents

- [JavaScript Notes](#javascript-notes)
  - [Table Of Contents](#table-of-contents)
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
    - [Logical Operator with non-boolean values](#logical-operator-with-non-boolean-values)
      - [Short-circuiting](#short-circuiting)
    - [Bitwise Operators](#bitwise-operators)
  - [Control Flow](#control-flow)
    - [Conditional Statements](#conditional-statements)
    - [Loops Statements](#loops-statements)

---

## Introduction

### What can you do with JavaScript?

For a long time, JavaScript was only used in Browsers to build interactive web pages. Some developers refered to JavaScript as a toy language. But those days are gone because of huge community support, and investments like large companies by Facebook and Google. These days you can build:

- web/mobile Apps
- real-time networking apps
  - like chats, video-streaming services
- command-line tools
- games

### Where does JavaScript code run?

JavaScript was originally designed to run only in Browsers. So every browser has a _JavaScript Engine_ that can execute JavaScript code.

JavaScript Engines follow the ECMAScript Standards. These standards define how the JavaScript engine should work and what features it should have.

JavaScript Engines for different Browsers are:

- Firefox: Spidermonkey
- Chrome: v8
- Microsoft Edge: Chakra (older version)

In 2009, Ryan Dahl took the open-source JavaScript Engine in Chrome and embedded it inside a C++ program called Node.

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

---

### Constants

In a real-world application, there are situations when we don't want the value of a variable to change. Otherwise, it's gonna create all kinds of bugs in our application.

In those situations, when we don't want our variables to change after initialisation, we use `const` instead of `let`.

The value of a variable can change, but the value of a constant cannot change.

---

### console.log()

All modern browsers have a web console for debugging. The console.log() method is used to write messages to these consoles. For example,

```
let answer = 5 + 20;
console.log('Sum:', answer); // With a comma
console.log('Sum: ' + answer); // With concantation
```

---

### Primitive/Value Types

In the category of Primitive types we have:

- string
  - there are no characters, only strings.
- number
  - no integers or floating points, all are numbers.
- boolean
  - true or false.
- undefined
  - declared but un-initialised variable.
- null
  - used to explicitly clear variable.

`typeof` is an operator that is used to get the type of a variable.

```
let name = 'Rahul';        // String Literal
let age = 23;              // Number Literal
let isApproved = false;    // Boolean Literal
let occupation;            // Undefined Variable
let selectedCourse = null; // Clear Variable
typeof name;               // Outputs Type of Variable
```

Unlike other programming languages, there are no two kinds of numbers like integers and floating points. All numbers come under the type of _number_.

---

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

With the code above, we can access that property using the Bracket Notation in a _Dynamic_ way.

---

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

Javascript is a dynamic language and the length of an array as well as the type of objects we have in our array are dynamic i.e. can be changed at run-time.

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

---

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

When we declare a function, we can take one or any number of variables as input which are called _parameters_.

These parameters are local variables that are only active or usable inside that specific function block. In other words, the scope of these parameters are limited to inside the function.

When we call a function, we can pass along one or any number of variables which are called _arguments_.

The above function was used to _perform a task_. We can also write a function to _calculate a value_ and returns a variable.

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

In Javascript, we have different kinds of Operators. We can use these operators along with our variables and constants to create _expressions_. And with these _expressions_, we can implement _logic_ and _algorithms_.

Here are the different types of Operators in Javascript:

1. Arithmetic
2. Assignments
3. Comparison
4. Logical
5. Bitwise

---

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

---

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

---

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

---

### Logical Operator with non-boolean values

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

#### Short-circuiting

```
console.log(false || 1 || 2); // 1
```

JavaScript Intrepreter only checks the expression til `1` and all the other `||` are ignored completely.

Here's an example,

```
let userColor = 'blue';
let defaultColor = 'red';
let selectedColor = userColor || defaultColor;
console.log(selectedColor); // blue
```

It checks whether userColor is defined, and uses it in that case. If the userColor is not defined, it will use defaultColor as shown below.

```
let userColor = undefined;
let defaultColor = 'red';
let selectedColor = userColor || defaultColor;
console.log(selectedColor); // red
```

---

### Bitwise Operators

```
1 = 00000001
2 = 00000010
R = 00000011
A = 00000000
Bitwise OR: R = 1 | 2
Bitwise AND: A = 1 & 2
```

---

## Control Flow

### Conditional Statements

- if...else
  - used when dealing with multiple variables.
- switch...case
  - only used when dealing with a single variable.

### Loops Statements

**Common:**

- for
  - index variable is defined inside for() initialisation section.
- while
  - index variable is defined before while statement.
  - condition is evaluated first.
  - statements are executed only if condition is satisfied.
  - statements can be executed any number of times including zero.
- do...while
  - index variable is defined before while statement.
  - condition is evaluated last.
  - an iteration of statement is executed first, then condition is checked
  - statements are executed atleast once.
  - not used a lot in real life scenarios.

**New:**

- For...in
- For...of

---
