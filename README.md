# incubator-3000-project

Mini Project 2: A React / Vite application which calculates the future growth of a users Bitcoin asset holdings. The aim with this project beyond the presentation is to expand into other assets & asset classes, giving users the ability to understand & plan for their future financial self.

## Features

**STAGE 1** Gives a snapshot of the current value of a users Bitcoin holdings. This stage utilises three components:

1. Fraction of Bitcoin Owned: This component uses a simple state hook for the user to type in the amount of Bitcoin they currently own
2. Current Price: This component uses an effect hook to fetch the current Bitcoin price in AUD, from the public & free CoinGecko API(via axios.get)
3. Current Holdings: This component passes down props from the two components above, allowing for a button-click calculation of the current value of the users Bitcoin holdings.

**STAGE 2** Gives historical context on Bitcoin as an asset class, utilising charts.js.

1. The data from the last 11 years of Bitcoin returns was collected into an array.
2. This was then plotted onto a Bar Graph for easy visualisation.
3. State was then used to slice the data into blocks of 11, 7 & 3 year averages, displayed as buttons.
4. These results were the plotted onto a second line graph, to allow for user understanding of the Law of Diminishing Returns & leading into the Final Stage of the project.

**STAGE 3** Calculating Future Growth Projections

1. State is used to pass the data to 5 separate Growth Projection buttons, projecting different time periods
2. Effect is used to access the Current Holdings component result
3. A static Compound Annual growth Rate of 29% is used in the calculation.
4. The user simply clicks the button to project the value of their asset, under different time frames.

## Branch Organisation

### Main Branch (`main`)

Contains the main stable version of the project.

### Feature Branches

The feature brances utilise React to perform math calculations, to project future growth potential.

- `average-returns`: Contains the logic to calculate & display the average returns buttons & display the average % returns bar graph.
- `current-holdings`: Contains the logic to simply multiply Bitcoin Owned x Current Price
- `current-price`: Safely fetches current price from the coin-gecko API.
- `diminishing-returns`: Plots the averages calculated in Average Returns in a simple line graph
- `nav-bar`: Used to display an Albert Einstein quote about Compound interest - contains no logic
- `number-of-coins`: Allows the user to input the current value of their bitcoin holdings

### **Workflow Summary**

1. Keep the `main` branch stable. _do not work directly on to develop features_
2. Develop features in dedicated branches.
3. Use pull requests to merge features into `main`.
4. Update the `README.md` as new features are added.
