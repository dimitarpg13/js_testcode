# Ambiguous syntax

JS has several programming constructs that are syntactically ambiguous: the same syntax is interpreted differently,
depending on whether it is used in statment context or in expression context.

## Same syntax: function declaration and function expression

A _function declaration_ is a statement:

```js
function id(x) {
  return x;
}
```

A _function expression_ is an expression (right-hand side of =):

```js
const id = function me(x) {
  return x;
};
```

## Same syntax: object literal and block

In the following code, `{}` is an object literal: an expression that creates an empty object.

```js
const obj = {};
```

This is an empty code block (a statement):

```js
{
}
```

## Disambiguation

The ambiguities are only a problem in statement context: if the JavaScript parser encounters ambiguous syntax, it doesn't know if it's a plain statement or an expression statement. For example:

* If a statement starts with `function`: is it a function declaration or a function expression?

* if a statement starts with `{`: is it an object literal or a code block?


