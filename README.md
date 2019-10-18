# Ekonomiskt bistånd

Here you can make a very simplified calculation to find out if your finances are above or below the level of social benefits. These figures are valid from 1 January 2019.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Usage
### Colors
### app.js
```javascript
//change the colors here 
const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: parsed.main || '#CC0150', 
      mainLight: parsed.mainLight || '#fbf8f8', 
      second: parsed.second || '#AE0A06'
    },
  },
});

```
### startReducer.js

#### The national standard for 2019 (valid from 1 January 2019)

open [Riksnormen för försörjningsstöd](https://www.socialstyrelsen.se/stod-i-arbetet/ekonomiskt-bistand/riksnormen/) to get the new values .

```javascript
 let values = 
 {
    //Personal costs for adults, SEK
    // Single
    '0': 3090,
    //live together
    '1': 5570,
    //Personal costs per home-based child and school-age child, SEK
    '0-1': 2130,
    '1-2': 2380,
    '3': 2120,
    '4-6': 2380,
    '7-10': 2990,
    '11-14': 3440,
    '15-18': 3880,
    '19-20': 3910,
};
   //Common household costs, SEK
let antal = {
    '1': 990,
    '2': 1100,
    '3': 1380,
    '4': 1570,
    '5': 1810,
    '6': 2050,
    '7': 2220,
    '8': 170,
};
```
