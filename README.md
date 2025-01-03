# React JS

- React ek JavaScript library hai jo single-page applications (SPA) ke liye use hoti hai. Ye fast aur interactive user interfaces (UI) banane mein madad karti hai.

- React ek JavaScript library hai jo UI (User Interface) banane ke liye use hoti hai. Ye single-page applications aur complex web apps develop karne mein help karti hai. React ko Facebook ne develop kiya hai, aur iska main focus component-based architecture aur virtual DOM par hai.

### Why React was created ?

- React ko Facebook ne 2011 mein create kiya tha, aur uska primary goal tha dynamic web applications ko zyada efficient aur manageable banana. React ka creation kuch key problems ko solve karne ke liye kiya gaya tha:

### Features

- **React Components**: Reusable aur modular components ka use.
- **JSX**: JavaScript code ke andar HTML-like syntax ka use.
- **State & Props**: Data ko manage karna aur pass karna between components.
- **React Hooks**: Functional components mein state aur side-effects manage karne ke liye hooks ka use.
- **React Router**: Multi-page navigation for single-page applications.

### NPM (Node Package Manager)

- NPM (Node Package Manager) ek tool hai jo JavaScript ke packages ko manage karta hai. Agar aapko kisi library ya framework ki zarurat hai, to aap npm se usse install kar sakte ho.

### Important Work

1. `Packages Install Karna`: Jaise React, Express install karna.
2. `Dependencies Manage Karna`: Aapke project ke liye zaruri libraries ko manage karta hai.

### Commands:

- `npm install` <package-name>: Package install karna.
- `npm i`: Sare dependencies install karna.
- `npm update`: Packages ko update karna.
- `package.json` file mein sab dependencies aur project ki details hoti hai.

### NPX

npx ek command-line tool hai jo NPM ke sath aata hai. Yeh aapko bina package ko globally install kiye, ek package ko directly run karne ki suvidha deta hai.

### Key Features:

- Temporary Use : Agar aapko ek package sirf ek baar chalana hai, to aap usse globally install kiye bina directly npx <package-name> ke saath use kar sakte hain.
- Execute Local Packages: Agar aapke project mein koi package locally installed hai, to npx use kar ke usse run kar sakte hain.
- Version Control: Agar aapko specific version ki package run karni ho, to aap npx ke saath version specify kar sakte hain, jaise `npx create-react-app@latest`.

### VITE

- Vite ek modern build tool hai jo JavaScript aur front-end development ko fast aur efficient banata hai. Yeh specially React, Vue, ya dusre JavaScript frameworks ke liye design kiya gaya hai.

## What is `JSX` in React? How is it different from HTML?

- `JSX` React ka ek syntax extension hai jo JavaScript mein HTML code likhne ki tarah dikhta hai. Yeh ek tarah se JavaScript aur HTML ka combination hai. `JSX` ko React mein use karte hain taaki hum components ka structure easily define kar sakein.

```javascript
const element = <h1>Hello, world!</h1>;
```

## Virtual DOM

- `Virtual DOM` ek lightweight in-memory representation hota hai Real DOM ka. Jab React component ka state ya props change hote hain, to React pehle `Virtual DOM` ko update karta hai, phir comparison karta hai `Virtual DOM` aur Real DOM ke beech mein. Jo changes `Virtual DOM` mein hoti hain, unhe efficiently Real DOM mein apply kiya jata hai.

### Example:

- Agar ek component ka text change hota hai, to React sabse pehle `Virtual DOM` ko update karega, phir `Virtual DOM` aur Real DOM ko compare karega aur sirf us part ko real DOM mein update karega jisme changes hui hain.

## Interview Tip:

- Jab `Virtual DOM` ke baare mein puchha jaye, toh yeh zaroor batao ki `Virtual DOM` React ko fast banane mein help karta hai kyunki Real DOM ki direct manipulation slow hoti hai, aur `Virtual DOM` ki madad se unnecessary re-renders avoid kiye ja sakte hain.

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

## Conditional Rendering

- React mein conditional rendering ka matlab hai ki aap condition ke basis par alag-alag components ya elements ko render karte ho. Yeh bilkul JavaScript ke if-else ya ternary operator jaise concepts par kaam karta hai.

```javascript
function Greeting(props) {
  return props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;
}
Jab simple condition ho, toh ternary operator ka use karte hain
```

### Key Points for Interviews:

- React mein conditional rendering ka use karte hain UI ko dynamic banane ke liye.
- Ternary operator aur logical && zyada common aur concise hote hain.
- Code readable aur maintainable rehna chahiye.

## React mein props kya hote hain? Inka use kyun kiya jata hai? Ek example ke saath explain karo.

- `Props` (short for properties) React mein ek mechanism hai jiska use ek component se dusre component mein data pass karne ke liye kiya jata hai. `Props` read-only hote hain, iska matlab hai ki jo data `props` ke through pass hota hai, wo directly change nahi kiya ja sakta component ke andar.

- `Props` ka use parent component se child component ko data send karne ke liye hota hai. Isse reusability aur maintainability increase hoti hai, kyunki ek hi component ko multiple places pe use kiya ja sakta hai different data ke saath.

### Example

```javascript
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Sandeep" />;
}
```

## React mein state aur props mein kya difference hai?

- React mein `state` aur `props` dono ka use data ko handle karne ke liye hota hai, lekin dono ka kaam alag hota hai.

| Key Differences       | State                               | Props                                    |
| --------------------- | ----------------------------------- | ---------------------------------------- |
| **Definition**        | Local data within the component     | Data passed from parent to child         |
| **Mutability**        | Can be changed inside the component | Cannot be changed by the child component |
| **Re-render Trigger** | Triggers re-render on change        | No re-render on prop change              |

### React mein `key` ka kya role hota hai jab hum list items render karte hain? Aur yeh `key` kis tarah se optimize karta hai rendering ko?

- Jab React mein hum list items (jaise map() function se) render karte hain, toh har item ko unique `key` deni padti hai. `Key` React ko yeh batane mein madad karti hai ki kaunsa item change hua hai, taaki React sirf usi item ko update kare. Agar `key` na ho, toh React ko saare items ko dobara se render karna padta hai, jo slow ho sakta hai.

```javascript
const items = ['Apple', 'Banana', 'Orange'];

const List = () => (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>  {/* Har item ko unique key */}
    ))}
  </ul>
);
```

# React.js Interview Questions and Answers (Hinglish)

## General Questions

**Q1: React.js kya hai?**  
A: React.js ek JavaScript library hai jo user interfaces banane ke liye use hoti hai. Ye Facebook ne develop ki thi aur reusable UI components banane ki facility deti hai.

**Q2: React ke main features kya hain?**  
A: React ke key features hain:

- Component-based architecture
- Virtual DOM
- One-way data binding
- JSX syntax

**Q3: JSX kya hai?**  
A: JSX ka full form hai JavaScript XML. Ye ek syntax extension hai jo React components mein HTML-like code likhne ki permission deta hai.

## Components

**Q4: React components kya hote hain?**  
A: Components React application ke building blocks hain. Ye functional ya class-based ho sakte hain.

**Q5: Functional aur class components mein kya difference hai?**  
A:

- Functional components stateless hote hain aur simple hote hain, aur functions ke through define kiye jate hain.
- Class components state aur lifecycle methods rakhte hain, aur ES6 classes ka use karte hain.

## State and Props

**Q6: State aur props mein kya difference hai?**  
A:

- `state`: Component ke andar manage hoti hai aur time ke saath change ho sakti hai.
- `props`: Parent component se child component ko pass ki jati hain aur immutable hoti hain.

**Q7: Components ke beech data kaise pass karte hain?**  
A: Data parent se child components tak `props` ke through pass kiya jata hai.

## Lifecycle Methods

**Q8: React lifecycle methods kya hote hain?**  
A: Lifecycle methods special functions hain jo class components mein specific stages par chalti hain, jaise `componentDidMount` aur `componentWillUnmount`.

**Q9: Functional components mein lifecycle methods kaise use hote hain?**  
A: Functional components mein traditional lifecycle methods nahi hote, par `useEffect` hook ka use karke similar functionality achieve ki ja sakti hai.

## Performance

**Q10: Virtual DOM kya hai?**  
A: Virtual DOM real DOM ka ek lightweight copy hai. React pehle Virtual DOM ko update karta hai, phir efficiently changes ko real DOM mein sync karta hai.

**Q11: React performance kaise optimize karta hai?**  
A: React performance optimize karta hai:

- Virtual DOM updates ke through
- Code splitting
- Memoization (jaise `React.memo` ka use karna)

## Advanced Topics

**Q12: React Router kya hai?**  
A: React Router ek library hai jo React application mein navigation handle karne ke liye use hoti hai. Ye dynamic routing create karne ki facility deti hai.

**Q13: Redux kya hai?**  
A: Redux ek state management library hai jo React ke saath use hoti hai global state manage karne ke liye.

**Q14: Context API kya hai?**  
A: Context API React ka ek built-in feature hai jo bina kisi third-party library (jaise Redux) ke global state manage karne ki facility deta hai.

**Q15: Controlled aur uncontrolled components kya hote hain?**  
A:

- Controlled: Form elements jinki value React state ke through control hoti hai.
- Uncontrolled: Form elements jo apni state khud manage karte hain.

## Testing

**Q16: React components kaise test karte hain?**  
A: React components ko test karne ke liye Jest aur React Testing Library jaise tools ka use hota hai.

## Additional Questions

**Q17: Keys React mein kyun important hain?**  
A: Keys unique identifiers hain jo React ko help karti hain efficiently list components ko update karne mein.

**Q18: React mein HOC (Higher-Order Component) kya hai?**  
A: HOC ek function hai jo ek component ko input ke roop mein leta hai aur ek naya component return karta hai. Ye code reuse ke liye use hota hai.

**Q19: React mein lazy loading kya hai?**  
A: Lazy loading ka matlab hai components ya resources ko tab load karna jab unki zarurat ho, taki performance improve ho.

**Q20: React mein error boundaries kya hain?**  
A: Error boundaries special components hote hain jo unhandled JavaScript errors ko catch karte hain aur application ko crash hone se bachate hain.

**Q21: React mein Refs kya hote hain aur kaise use hote hain?**  
A: Refs ek way hai React mein DOM elements ya class components ko directly access karne ke liye. Ye `useRef` hook ya `React.createRef` ke through implement hote hain.

**Q22: React mein Fragments kya hote hain?**  
A: Fragments ek wrapper component hai jo multiple elements ko bina additional DOM node ke render karne ki facility deta hai.

**Q23: React StrictMode kya hai?**  
A: StrictMode ek tool hai jo application ke potential problems ko identify karne mein madad karta hai. Ye development mode mein zyada use hota hai.

**Q24: React Portal kya hai?**  
A: React Portal ek method hai jo child components ko DOM ke kisi bhi part mein render karne ki facility deta hai, na ki sirf parent ke andar.

**Q25: Shallow rendering kya hai?**  
A: Shallow rendering ek testing technique hai jo ek component ko uske child components ke bina render karta hai, taki isolated testing ki ja sake.

**Q26: React.memo kya karta hai?**  
A: React.memo ek higher-order component hai jo functional components ko memoize karta hai taki unnecessary re-renders avoid ho sakein.

**Q27: Prop drilling kya hai?**  
A: Prop drilling ek process hai jisme deeply nested components ko props pass karne ke liye parent components se pass kiya jata hai, jo complex ho sakta hai.

**Q28: React.lazy aur Suspense kya hai?**  
A: React.lazy dynamic imports ko support karta hai aur Suspense ke saath milkar components ko lazy load karne ke liye use hota hai.

**Q29: PureComponent aur Component mein kya difference hai?**  
A: PureComponent ek optimized version hai jo shallow comparison perform karta hai aur unnecessary renders ko avoid karta hai, jabki Component har update par render hota hai.

**Q30: Difference between useCallback and useMemo?**  
A: `useCallback` ek memoized function return karta hai, jabki `useMemo` ek memoized value return karta hai.

**Q31: Forward refs kya hote hain?**  
A: Forward refs React me ek technique hai jo refs ko child components ke andar pass karne ke liye use hoti hai.

**Q32: useReducer hook kab use hota hai?**  
A: `useReducer` complex state logic ko handle karne ke liye use hota hai, jo multiple state transitions require karta hai.

**Q33: React ke andar animations kaise implement karte hain?**  
A: Animations implement karne ke liye React mein `React Transition Group` aur `Framer Motion` jaise libraries ka use hota hai.

**Q34: React component unmount hone par cleanup kaise karte hain?**  
A: Cleanup karne ke liye `useEffect` ke cleanup function ka use hota hai.

**Q35: SSR (Server-Side Rendering) kya hai?**  
A: SSR ek technique hai jisme React components ko server par render karke HTML browser ko bheja jata hai, taki performance aur SEO improve ho.

**Q36: CSR (Client-Side Rendering) kya hai?**  
A: CSR ek technique hai jisme poora JavaScript bundle client ke browser me render hota hai aur browser HTML generate karta hai.

**Q37: React hydration kya hai?**  
A: Hydration ek process hai jo SSR ke baad browser me React components ko interactive banata hai.

**Q38: React hooks ke rules kya hain?**  
A: React hooks ke do main rules hain:

1. Hooks ko top-level par hi call karein.
2. Hooks ko sirf React functions ke andar call karein.

**Q39: Synthetic events kya hote hain?**  
A: Synthetic events React ke custom events hote hain jo browser ke native events ko wrap karte hain aur cross-browser compatibility dete hain.

**Q40: useImperativeHandle hook ka use kab hota hai?**  
A: `useImperativeHandle` custom ref handling ke liye use hota hai, jo parent components ko imperative methods expose karta hai.

**Q41: React suspense boundary ke kya use cases hain?**  
A: Suspense boundary components ko asynchronous rendering handle karne ke liye use hota hai, jaise data fetching ya lazy loading.

**Q42: Difference between controlled and uncontrolled inputs?**  
A: Controlled inputs React state ke through controlled hote hain, jabki uncontrolled inputs apne DOM state ko maintain karte hain.

**Q43: Dynamic import kaise kaam karta hai React mein?**  
A: Dynamic import JavaScript ka feature hai jo code ko runtime par load karne ki facility deta hai, React mein lazy loading ke liye.

**Q44: Suspense fallback kya hai?**  
A: Suspense fallback ek placeholder component hota hai jo tab render hota hai jab koi asynchronous operation complete ho raha hota hai.

**Q45: React ke andar CSS modules kaise use hote hain?**  
A: CSS modules ek technique hai jo locally scoped CSS classes create karne ke liye use hoti hai.

**Q46: Difference between render and return in React?**  
A: `render` method sirf class components mein hota hai aur JSX ko return karta hai, jabki `return` functional components ke andar JSX ko return karta hai.

**Q47: React keys ke limitations kya hain?**  
A: Keys ko unique hona chahiye aur list rendering ke waqt dynamically change nahi karna chahiye, warna bugs ho sakte hain.

**Q48: React Profiler ka kya use hai?**  
A: React Profiler ek tool hai jo components ki rendering performance analyze karne ke liye use hota hai.

**Q49: Difference between async components and lazy loading?**  
A: Async components manually asynchronous logic handle karte hain, jabki lazy loading `React.lazy` aur `Suspense` ke sath built-in functionality provide karta hai.

**Q50: What is reconciliation in React?**  
A: Reconciliation ek process hai jo React use karta hai Virtual DOM aur real DOM ke beech difference calculate karne ke liye aur efficiently DOM ko update karne ke liye.
