# Pre-requisites

+ node v16.x+
+ npm 6.x

# Installation

1. Clone the repository `git@github.com:rausanchezc/dott-challenge.git`
2. Navigate to the repository folder and run the command `npm install`
3. Run the application by executing the command `<input_source> | npm run start` 

The application also can be executed _in developer mode_ by executing the command `npm run start:dev`

**Note:** 

There is a set of utility scripts defined in the `package.json` file thought for being used during the development phase. 

Please feel free to check them out. `;-)`  

# How to execute a basic example
1. First, the project should be transpiled by running the command: 
```bash
> npm run build
```
2. The example can be run by running the command: 
```bash
> cat resources/sample.txt | npm run start
```

# How to run the test suite
The suite of tests can be executed by running the command `npm run test`

An alternative way of executing tests is `npm run test:watch` that allows developers to interactively run the tests suite.
It's the recommended way for speeding up developer's productivity.


# Decision record
All the decisions taken during the development of this challenge have been recorded in the [Decisions Record](docs/decisions-record.md) document. 

# Maintainer
Raul Sanchez Castillo 

**Contact information**

Feel free to reach out to me: 
+ email: `sanchez.castillo.raul@gmail.com`
+ Twitter: [`@rausanchezc`](https://twitter.com/rausanchezc)
+ LinkedIn: [`rausanchezc`](linkedin.com/in/rausanchezc/)

