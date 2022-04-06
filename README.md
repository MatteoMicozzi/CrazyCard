# Crazy Cards Application
This is a web application is made with React.js and simulate a real world scenario of credit cards availability to a user in base of their credit status.

## Description
- The user should submit their details via a form.
- The application should then return a filtered list of cards available to that user.
- The user should be allowed to select one or more of the returned cards and see the details for the cards selected.
- When multiple cards are selected, the total amount of credit available to the user on those cards should be displayed.

### Available cards

- Student Life
  Apr: 18.9%
  Balance Transfer Offer Duration: 0 months
  Purchase Offer Duration: 6 Months
  Credit Available: £1200  

  **The Student Life credit card is only available to customers with an employment status of Student.**

- Anywhere Card
  Apr: 33.9%
  Balance Transfer Offer Duration: 0 months
  Purchase Offer Duration: 0 Months
  Credit Available: £300  

  **The anywhere card is available to anyone anywhere.**

- Liquid Card
  Apr: 33.9%
  Balance Transfer Offer Duration: 12 months
  Purchase Offer Duration: 6 Months
  Credit Available: £3000  

  **The Liquid card is a card available to customers who have an income of more than £16000.**

### Customers examples


- **Mr. Ollie Murphree**
  01/07/1970
  Full time
  Annual income: £34000
  House number: 700
  Postcode: BS14 9PR
  - **Eligible for**:
    - Anywhere Card
    - Liquid Card

- **Miss Elizabeth Edmundson**
  29/06/1984
  Student
  Annual income: £17000
  House number: 177
  Postcode: PH12 8UW
  - **Eligible for**:
    - Anywhere Card
    - Liquid Card
    - Student Card

- **Mr. Trevor Rieck**
  07/09/1990
  Part time
  Annual income: £15000
  House number: 343
  Postcode: TS25 2NF
  - **Eligible for**:
    - Anywhere Card

------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

##### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

###### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

###### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

###### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

###### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

###### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

###### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
