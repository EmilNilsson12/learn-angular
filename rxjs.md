# Used with Angular

RxJS is a library for reactive programming using observables

Terminology:

- Observables
- Operators
- Observer
- Pipes
- Unicast
- Multicast

## Real-life example

Owner of a burger shop

I dont have ingredients except buns

Customer comes in with the ingredients, i cook for him

This is the concept of the restaurant

3 types of ingredients:

- Meat: "Chicken" | "Lamb" | "Beef"
- Cheese: any
- Vegetables: any[]

Shop is a black box function that takes a bag of ingredients and returns a burger

Shop is a white box which consists of an assembly life of chefs.

1. Chef 1 takes the ingredients out of the bag
2. Chef 2 checks that the ingredients are of valid types

- If the meat is invalid then he informs the clerk immediatly that this order is null and void

3. Chef 3 cooks the meat
4. Chef 4 assembles the burger with all ingredients and gives it to the clerk
5. Clerk hands the burger to the customer

This burger shop is analagous to RxJS

1. Customer provides a bag of ingredients
2. Shop performs a chain of events
3. Clerk hands burger back to customer

### Customer: Observable

- Emits data
- Can emit multiple bags of data

### Bag of ingredients: data

Burger joint processes that data

Each chef operates on the bag of data

Chef 1 unpacks the data

Chef 2 validates the data

Chef 3 cooks the meat of data

Chef 4 assembles the data

Clerk hand the data back

### Chefs: Operators

- validates data
  - this meat is invalid
- changes data
  - cooks meat
  - assembles burger

### Assembly line of operators: Pipe

### Clerk that interacts with the customer: Observer
- informs the customer about the status of the burger
- informs about order cancellations due to invalid input


## Marble Diagram
x: time

y: operators in the pipe
