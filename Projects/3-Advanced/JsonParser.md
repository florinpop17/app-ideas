# Json Parser

**Tier:** 3-Advanced

Json is an essential part of a regular developers workflow and one of the most popular 
communication formats between systems and web applications. But have you ever asked yourself:
How is a standard text format .json translated into many different data structures
(objects in js, arrays in php and data types in haskell)?

The only way to discover this is by digging in the basics of compilers and automata theory.

Requirements:

-   You must have a good knowledge of data structures(trees, tables, tuples) and a good produtivity with one programming language.
-   You must be familiar with automata theory and formal languages or computing theory.

All the requirements will probably have many courses and tutorials available in your native language, 
so i recommend you to do an youtube search on the topics above.

## User Stories

### Tokenization
The first phase of the compiler is the lexical analysis that consists into reading a .json file and add labels to the data.
Json has the following token types: 
OpenObjToken | CloseObjToken | IdentifierKeyToken | StringToken | NumberToken | NullToken 
| OpenArrayToken | CloseArrayToken | BooleanToken | SeparatorToken | Empty --end of file 

-   [ ] Read the inputs and store than in a similar data structure like this: [(OpenObjToken. "{"), (SeparatorToken. ",")]

### Sintatic Analysis
Sintatic Analysis consist of checking if all the tokens are in the correct place (open object "{" appears first than close object token "}", for example).
The json rules are described in this free context grammar:
A -> [C] | {K} | {} | []
C -> TEC | T
K -> "key":TEK | "key":T
E -> ,
T -> "str" | 0-9 | 0.0-9.9 | A | true | false | null

-   [ ] Create sintatic analysis rules and process the tokens list we get in the previous step.
-   [ ] Create a parse tree following the rules of the free context grammar using the tokens you got previously.

### Semantic analysis
Semantic analysis is about guaranteeing the actions and meaning of our programs, 
for example checking if a variable exists before using it or if the value is numeric before multiplying its value.
In json we dont have these concepts that can generate errors but we have something we have to check in semantic analysis:
We have to check if a key is declared more than once in the same scope:
{ key: "123", key: 123 } --we should print a warning that the key is declared twice 
{ key: "123", scope: { key: 123 } } --we should not print a warning because the keys are not in the same scopes.

-   [ ] Process the parse tree and create semantic analysis to warn if a key is duplicated in the same scope
-   [ ] Create the intermediary representation if necessary or just use the previous parse tree if not.

### Code generation
The phase of the backend of the compiler generally we compile our programs to binary, 
but with our json parser we are going to compile then to a .js file with the same name of the .json file
src/{JSON FILE NAME}.js
module.exports = {our processed json exporting as object}

-   [ ] Read the parse tree or the IR and convert the lines into js code
-   [ ] Save the file with the same name of the .json file.

## Bonus features

-   [ ] Keep track of collumn and line of the file and inform it in an error message when you get an invalid .json structure
-   [ ] Separate your errors into Lexical errors and sintatic errors with a label in the beginning of the error like: "[LEXICAL ERROR] error line:3 col:2"
-   [ ] Wrap it all into a cli or a simple user interface
-   [ ] Try to add colors to differentiate your errors, success and warning events in the parser
-   [ ] Using the same parsetree or intermediary representation try to convert to a .yml file instead of a .js object

## Example projects

[My implementation of the json parser](https://github.com/KevinDaSilvaS/sparser-invaders)
