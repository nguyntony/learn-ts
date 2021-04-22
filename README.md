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

## Tuples
Array-like structure where each element represents some property of a record

### When to use tuples? 
- when you’re working with a csv file

## Interfaces
Creates a new type, describing the property names and values types of an object.
- create Fns that accept arguments that are typed with interfaces
- objects/classes can decide to ‘implement’ a given interface to work with a fn

## Classes
Blueprint to create and object with some fields (values) and methods (functions) to represent a ‘thing’

- private modifier is to limit the ways to call a method bc we do not want other developers to call, we don’t want it accessible, this is NOT to be confused with setting up some sort of form security, using the private modifier is not for that purpose. 
- protected modifier is to still give child classes access to what is in the parent
- by default everything is public 

### Initializing props
There are two ways that you can initialize props. 
1. The first way is when you are expecting a hard-coded value and it will look like this, near the top of the class declaration `color: string = 'red'`
2. If you don’t want to hard code any values then you will need a constructor fn and this will allow you to pass args when creating an instance of that class.
```
color: string;
constructor(color: string) {
	this.color = color;
}
```
Note that even though you are not assigning a value to the color prop upon declaration you still need it for the constructor fn to work.

There is a shorthand method that combines both ways
```
constructor(public color: string) {}
```
This will init the prop and make it so that the instance will also be able to accept an arg as well. Take note that in order to do this, you need to have a modifier per param. 

### Parent & Child Constructor
If there is a parent class and you’d like to extend that class to create a child class, note that upon declaring an instance of a child class you will still need to pass the necessary args or values if the parent constructor requires them. 

You can have a child constructor fn as well but when doing so you need to include the super() in order to access the parent constructor fn.

The super() will accept the args that is expected from the parent constructor fn, you can receive values and pass them into the super() but declaring the params in the child constructor class. Note that when you are doing this, you do not need to include a modifier keyword for the param bc the parent constructor fn has already handled that. 

### Takeaway
Instances and classes are really crucial for TS bc it will create strong reusable code. 