# Variables

Most of the time, a JavaScript application needs to work with information. Here are two examples:
1. An online shop - the information might include goods being sold and a shopping cart.
2. A chat application - the information might include users, messages, and much more.

Variables are used to store this information.

## A Variable

A variable is a "anmed storage" for data. We can use variables to store goodies, visitors, and other data. To create a variable in JavaScript, use the `let` keyword.
The statement below creates (in other words: declares) a variable with the name "message":

```javascript
let message;
```
Now, we can put some data into it by using the assignment operator `=`:

```javascript
let message;
message = "Hello"; // store the string 'hello' in the variable message
```

The string is now saved into the memory area associated with the variable. We can access it using the variable name:

```javascript
let message;
message = 'Hello!';
alert(message); // shows the variable content
```
To be concise, we can combine the variable declaration and assignment into a single line:

```javascript
let message = 'hello'; // define the variable and assign a value to it
alert(message); // hello
```

We can declare multiple variables in one line,
```javascript
let user = 'John', age = 25, message = 'Hello';
```
That might seem shorter, but we don't recommend it. For the sake of better readability, please use a single line per variable.

The multiline variant is a bit longer, but easier to read:
```javascript
let user = 'John';
let age = 25;
let message = 'Hello';
```
Some people also define multiple variables in this multiline style:
```javascript
let user = 'John',
    age = 25,
    message = 'Hello';
```
... or even in the "comma-first" style:
```javascript
let user = 'John'
    ,age = 25
    ,message = 'Hello';
```
Technically, all these variants do the same thing. So, it's a matter of personal taste and asthetics. But we recommend the first multiline style, as it is the most readable.

### `var` instead of `let`

In older scripts, you may also find another keyword, `var` instead of `let`:
```javascript
var message = 'Hello';
```
The `var` keyword is almost the same as `let`. It also declares a variable but in a slightly different, "old-school" way.

There are subtle differences between `let` and `var`, but they do not matter to us yet. We'll cover them in detail in the chapter "The old 'var'".

# A real-life analogy

We can easily grasp the concept of a "variable" if we imagine it as a "box" for data, with a uniquely-named sticker on it.
For instance, the variable `message` can be imagined as a boc labelled `"message"` with the value `"Hello"` inside it.

```plaintext
+----------------+
|    message     |
+----------------+
|    "Hello"     |
+----------------+
```
we can put any value in the box.

We can also change it as many times as we want:

```javascript
let message;
message = 'Hello'; // put "Hello" in the box
message = 'World'; // change the value to "World"
alert(message); // shows "World"
```
When the value is changed, the old data is removed from the variable:
```plaintext
+----------------+
|    message     |
+----------------+
|    "World"     |
+----------------+
```
we can also declare two variables and copy data from one into the other:
```javascript
let message = 'hello world';

let anotherMessage;

anotherMessage = message; // copy the value of message into anotherMessage
alert(message); // shows "hello world"
alert(anotherMessage); // shows "hello world"
```

### Declaring twice triggers an error
A variable should be declared only once.

A repeated declaration with `let` or `const` of the same variable name is an error:
```javascript
let message = "This";
//repeat 'let' leads to an error
let message = "That";
// SyntaxError: Identifier 'message' has already been declared
```
So we should declare a variable once and that refere to it without the `let` keyword:
```javascript
let message = "This";
message = "That"; // change the value, no error
alert(message); // shows "That"
```
### Functional languages

It's interesting to note that there exist so called "pure functional" programming languages, such as Haskell, that forbid changing variable values.

In such languages, once the value is stored "in the box", it's there forever. If we need to store something else, the language forces us to create a new box (declare a new variable). We can't reuse the old one.

Though it may seem a little odd at first sight, these languages are quite capable of serious development. More that that, there are areaas like parallel computations where this limitation confers certain benefits.

## Variable Naming

There are two limitations on variable names in JavaScript:

1. The name must contain only letters, digits, ot symbols `$` and `_`.
2. The first character must not be a digit.

Ecample of valid names:

```javascript
let userName;
let test123;
let $ = 5;
let _ = 6;
```
Examples of invalid names:

```javascript
let 123test; // starts with a digit
let user-name; // contains a hyphen
let user name; // contains a space
let user@name; // contains an invalid symbol
```

When the name contains multiple words, camelCase is commonly used. That is: words go one after another, each word expect first starting with a capital letter: `myVeryLongName`.

What's interesting-the dollar sign `$` and the underscore `_`  can also be used in names. They are regular symbols, just like letters, without any special meaning.

These names are valid:
```javascript
let $ = 5; //declare a variable with the name '$'
let _ = 6; //declare a variable with the name '_'
alert($ + _); // shows 11
```

### Case matters
Variables named `apple` and `APPLE` are two different variables

### Non-Latin letters are allowed, but not recommended

It is possible to use any language, including Cyrillic letters, chinese logograms and so on, like this:
```javascript
let имя = 'Иван';
let возраст = 25;
let 我 = '...';
```

Technically, there is no error here. Such names are allowed, but there is an international convention to use English in variable names. Even if we're writing a small script, it may have a long life ahead. People from other countries may need to read it sometime.

### Reserved names

There is a list of (reserved names)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords], which cannot be used as variable names because they are used by the language itself.

For example, `let`, `class`, `return`, `if`, `else`, `while`, `for`, `function` and so on.

The code below gives a syntax error:
```javascript
let let = 5; // SyntaxError: Unexpected token 'let'
let class = 5; // SyntaxError: Unexpected token 'class'
let return = 5; // SyntaxError: Unexpected token 'return'
```

### An assingment without `use strict`

Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using `let`. This still works now if we don't put `use strict` in our scripts to maintain compatibility with old scripts.
```javascript
// note: no 'use strict' in this example
num =  5; // the variable 'num' is created if it didn't exist

alert(num); // 5
```

This is a bad practice and would cause an error in strict mode:
```javascript
'use strict';
num = 5; // ReferenceError: num is not defined
```
## Constants

To declare a constant (unchanging) variable, use `const` instead of `let`:
```javascript
const myBirthday = '1.1.1970';
```

Variables declared using `const` are called "constants". They cannot be reassigned. An attempt to do so would cause an error:
```javascript
const myBirthday = '1.1.1970';
myBirthday = '2.2.1970'; // Error: Assignment to constant variable.
```

When a programmer is sure that a variable will never change, they can declare it with `const` to guarantee and communicate that fact to everyone.

### Uppercase constants

There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.

Such constants are named using capital letters and underscores.

For instance, let's make constants for colors in so-called 'web'(hexadecimal) format:
```javascript
const COLOR_RED = '#FF0000';
const COLOR_GREEN = '#00FF00';
const COLOR_BLUE = '#0000FF';
const COLOR_ORANGE = '#FFA500';

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // shows '#FFA500'
```

Benefits:
- `COLOR_ORANGE` is much easier to remember than `'#FFA500'`.
- It is much easier to mistype "#FFA500" than "COLOR_ORANGE".
- When reading the code, `COLOR_ORANGE` is much more meaningful that `'#FFA500'`.
- If we need to change the color, we can do it in one place, not everywhere in the code.

When should we use capitals for a constant and when should we name it normally? Let's make it clear.

Being a "constant" just means that a variable's value never changes. But some constants are known before execution (like a hexadecimal value for red) and some constants are calculated during in run-time, during the execution, but do not change after their initial assignment.

For instance:

```javascript
const pageLoadTime = Date.now(); // the time when the page was loaded
// time taken by the webpage to load
```

The value of `pageLoadTime` is not known before the page load, so it's named normally. But it's still a constant because it does not change after the assignment.

In other words, capital-named constants are only used as aliases for "hard-coded" values that are known before execution.

## Name things right

Talking about variables, there's one more extremely important thing.

A variable name should have a clean, obvious meaning, describing the data that it stores.

Variable naming is one of the most important and complex skills in programming. A glace at variable names can reveral which code was written by a beginner versus an experienced developer.

In a real project, most of the time is spent modifying and extending an existing code base rather than writing something completely seperate from scratch. When we return to some code after doing something else for a while, it's much easier to find infromation that is well-labelled. Or, in other words, when the variables have good names.

Please spend time thinking about the right name of a variable before declaring it. Doing so will repay you handsomely.

Some good-to-follow rules are:
- Use human-readable names like `userName`, `shoppingCart`.
- stay away from abbreviations or short names like `x`, `y`, `a`,or `b`, unless you know that you're doing.
- Make names maximally descriptive and concise. Examples of bad names are `data` or `values` or `info`. Such names say nothing. It's only okey to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
- Agree on terms within your team and in your mind. If a site visitor is called a "user", then we should name related variables `currentUser` or `newUser` instead of `currentVisitor` or `newManInTown`.

Sounds simple? Indeed it is, but creating descriptive and concise variable names in practice is not. Go for it.

### Reuse or create?

And the last note. There are some lazy programmers who, instead of declaring new variables, tend to reuse existing ones.

As a result, their variables are like boxes into which people throw different things without changing their stickers. What's inside the box now? Who knows! We need to come closer and check.

Such programmers save a little bit on variable declaration but lose ten times more on debugging and code readability.

An extra variable is good, not evil.

Modern JavaScript minifiers and browsers optimize code well enough, so it won't create performance issues. Using different variables for different values can even help the engine optimize your code better.

# Summary

We can declare variables to store data by using the `var`, `let`, or `const` keywords.
- `let` - is a modern variable declaration
- `var` - is an old-school variable declaration. Normally we don't use it at all, but we'll cover subtle differences from `let` in the upcoming chapter "The old 'var'".
- `const` - is like `let`, but the value of the variable cannot be changed 

Variables should be named in a way that allows us to easily understand what's inside them.


# Tasks

## Working with variables

1. Declare two variables: `admin` and `name`.
2. Assign the value `"John"` to `name`.
3. Copy the value from `name` to `admin`.
4. Show the value of `admin` using `alert`.

```javascript
let admin;
let name;
name = 'John';
admin = name;
alert(admin); // John
```

## Giving the right name

1. Create a variable with then name of our planet. How would you name such a variable?
2. Create a variable to store the name of a current visitor to a website. How would you name such a variable?

```javascript
let ourPlanetName = 'Earth'; // name of the planet
let currentUserName = 'John'; // name of the current visitor
```

## Uppercase const?

Examine the following code:
```javascript
const birthday = '18.04.1982';

const age = someCode(birthday);
```

Here we have a constant `birthday` for the date, and also the `age` constant.

The age is calculated from `birthday` using `someCode(birthday)`, which means a function call that we didn't explain yet ( we will soon!), but the details don't matter here, the point is that `age` is calculated somehow based on the `birthday`.

Would it be right to use uppercase for `birthday`> For `age`? or even for both?

```javascript
const BIRTHDAY = '18.04.1982'; // should it be uppercase?
const AGE = someCode(BIRTHDAY); // should it be uppercase?
```

