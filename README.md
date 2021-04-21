# TypeScript
Notes from [Stephen Grider’s Udemy](https://www.udemy.com/course/typescript-the-complete-developers-guide/learn/lecture/15066368#overview) course.

## What is typescript?
You are essentially still writing JS and the knowledge that you have about it still applies to TS. The only thing that we are adding into our code is syntax to handle ‘the type system’

## Type system overview
- helps us catch errors during development 
- uses ‘type annotations’ to analyze our code
- only active during development
- doesn’t provide any performance optimization 

## Common process
1. Write TS code which is basically JS but with type annotations added in.
2. Feed our TS code to a TS compiler which is a command line tool
3. The compiler will spit out plain JS and this is what we are giving to the browser. 

## Interfaces
Interfaces are used to define the structure of an object. 

## Type Annotation & Type Inference 
### Annotation 
This is when the developer will explicitly assign the type of the value. It is great to do this as much as possible to ensure the security of your code, however there are some cases where you can leave TS to do the job for you.

### Inference 
There are several cases where we can rely on TS to infer the type of the value and not have to explicitly assign the type ourselves

## When to use annotations
- functions that return the ‘any’ type
- declare a variable on one line and initialize it later

## Type Arrays
### Why does it matter?
- TS can do type inference when extracting values out of the arr
- TS can help prevent from adding in incompatible types into the arr’
- we get a lot of help with builtin fn such as map, forEach, reduce
- you can put different types of elements into an arr

### When to use typed arrays?
- any time we need to represent a collection of records with some arbitrary sort order