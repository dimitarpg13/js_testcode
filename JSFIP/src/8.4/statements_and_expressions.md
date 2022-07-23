# Statements and Expressions

JS distinguishes two kinds of syntactic constructs - _Statements_ and _Expressions_.

## Statements

A _statement_ is a piece of code which can be executed and performs some kind of action. 
For example, `if` is a statement:

```js
let myStr;
if (myBool) {
  myStr = 'Yes';
} else {
  myStr = 'No';
}
``` 

One more example of a statement: a function declaration.

```js
function twice(x) {
  return x + x;
}
```

## Expressions

An _expression_ is a piece of code that can be _evaluated_ to produce a value. For example, the code 
between the parentheses is an expression:

```js
let myStr = (myBool ? 'Yes' : 'No');
```

The operator ` ? : ` used between the parentheses is called the _thernary operator_. It is the expression of the `if` statement. 
Let's look at more examples of expressions. We enter expressions and the REPL evaluates them for us:

```js
> 'ab' + 'cd'
'abcd'
> true || false
true
```

## What is allowed where?

The current location within JavaScript source code determines which kind of synthactic constructs you are allowed to use:

* The body of a function must be a sequence of statements:

```js
function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
```

* The arguments of a function call or a method call must be expressions:

```js
console.log('ab' + 'cd', Number('123'));
``` 

However, expressions can be used as statements. Then they are called _expression statements_. The opposite
is not true: when the context requires an expression, you can't use a statement.

The following code demonstrates that any expression `bar()` can be either expression or statement - it depends on the context:

```js
function f() {
  console.log(bar()); // bar() is an expression
  bar(); // bar(); is (expression) statement
}
```

