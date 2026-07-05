# Sprint 3 — TypeScript Foundations

## What is an interface?

An interface describes the shape (structure) that an object must follow.
It acts like a contract.
If an object claims to be of that interface, it must satisfy all required properties.

---

## What is a type?
A type is used to describe a TypeScript type.

It can represent

- literal values
- unions
- primitives
- objects
- combinations of types

Today we used it to restrict the allowed values for Roles.
---

## Difference between interface and type
interface describe shapes of the object wehre are the type describes the types.
Interface → mainly used for describing object shapes.

Type → more flexible.
Can describe literal values, unions, primitives, objects and combinations.
---

## Optional properties (?)
optional properties are for making things option in the objects suppose linkedin url link.. depends on the user wheater he want to pur or not or may exist or not
---

## readonly
to make objects immutable.
readonly prevents reassignment of a property after the object is created.

It helps make data immutable.
---

## Type inference
Type inference is TypecScript's ability to automatically determine the types of a variable from the value assigned to it.

Example 
const age = 21
TypeScript automatically infers that age is a number.
This reduce the need to explicitly write types everywhere.
---

## Biggest lessons I learned today
I learned that software engineering starts before coding.

First we model the problem.

Then we describe it using interfaces and types.

Only after that do we create the actual objects.

I also learned the difference between describing data and storing data.