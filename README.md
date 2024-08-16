# Integration and End-to-End testing with Cypress Notes

End to End testing workshop with Steve Kinney. 

## Getting Started

First and foremost, install your dependencies.

```
npm install
```

Next, set up the database.

```
npm run db:setup
```

Finally, spin up the server.

```
npm start
```

Your server will need to be running when you go to run your tests.

## Running the Tests

You can run the tests using the following command. **Note**: You must have completed the following steps and have the server up and running.

```
npx cypress open
```


## Small notes about commands `cypress open` and `cypress run` 

- `cypress open` : probably thing you want to do most of the time for development

- `cypress run` : what your CI CD process would like to run.

## A lot of pieces of Cypress are actually based on other open source testing tools

- Syntax for assertion and running the test are just `Mocha` and `Chai` 

- In term of E2E test, think in term of WHAT user WILL DO, rather than every other small unit.s