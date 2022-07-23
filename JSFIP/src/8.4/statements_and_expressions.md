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

