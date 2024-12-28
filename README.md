# React JS

- React ek JavaScript library hai jo single-page applications (SPA) ke liye use hoti hai. Ye fast aur interactive user interfaces (UI) banane mein madad karti hai.

## Why React was created ?

- React ko Facebook ne 2011 mein create kiya tha, aur uska primary goal tha dynamic web applications ko zyada efficient aur manageable banana. React ka creation kuch key problems ko solve karne ke liye kiya gaya tha:

## Features

- **React Components**: Reusable aur modular components ka use.
- **JSX**: JavaScript code ke andar HTML-like syntax ka use.
- **State & Props**: Data ko manage karna aur pass karna between components.
- **React Hooks**: Functional components mein state aur side-effects manage karne ke liye hooks ka use.
- **React Router**: Multi-page navigation for single-page applications.

## NPM (Node Package Manager)

- NPM (Node Package Manager) ek tool hai jo JavaScript ke packages ko manage karta hai. Agar aapko kisi library ya framework ki zarurat hai, to aap npm se usse install kar sakte ho.

## Important Work

1. `Packages Install Karna`: Jaise React, Express install karna.
2. `Dependencies Manage Karna`: Aapke project ke liye zaruri libraries ko manage karta hai.

### Commands:

- `npm install` <package-name>: Package install karna.
- `npm i`: Sare dependencies install karna.
- `npm update`: Packages ko update karna.
- `package.json` file mein sab dependencies aur project ki details hoti hai.

## NPX

npx ek command-line tool hai jo NPM ke sath aata hai. Yeh aapko bina package ko globally install kiye, ek package ko directly run karne ki suvidha deta hai.

### Key Features:

- Temporary Use : Agar aapko ek package sirf ek baar chalana hai, to aap usse globally install kiye bina directly npx <package-name> ke saath use kar sakte hain.
- Execute Local Packages: Agar aapke project mein koi package locally installed hai, to npx use kar ke usse run kar sakte hain.
- Version Control: Agar aapko specific version ki package run karni ho, to aap npx ke saath version specify kar sakte hain, jaise `npx create-react-app@latest`.

## VITE

- Vite ek modern build tool hai jo JavaScript aur front-end development ko fast aur efficient banata hai. Yeh specially React, Vue, ya dusre JavaScript frameworks ke liye design kiya gaya hai.

## What is a component in React?

- React mein component ek reusable piece of code hai jo UI ka ek part banata hai. Ye independent hote hain aur alag-alag functionality handle karte hain.

### Types of components:

- `Functional Component`: Ek function jo UI return karta hai. Ye props ka use karta hai.
- `Class Component`: Ek class jo state aur lifecycle methods ko handle kar sakti hai.

### Props and State:

- `Props`: Data ko ek component se dusre component mein pass karne ke liye.
- `State`: Component ke andar dynamic data manage karne ke liye.

#### Example

- Ek website ke header, footer, aur sidebar alag-alag components ho sakte hain.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```
