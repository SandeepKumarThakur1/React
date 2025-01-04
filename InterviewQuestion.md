# React.js Interview Questions and Answers

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

# React JS Interview Questions (Hooks, States, Form Handling)

## Hooks

**Q1: React Hooks kya hain?**\
**Ans:** Hooks functions hain jo aapko React functional components mein state aur lifecycle features use karne dete hain bina kisi class ke.

**Q2: Commonly used hooks kaunse hain?**\
**Ans:**

- `useState`: State manage karne ke liye.
- `useEffect`: Side effects handle karne ke liye jaise API calls.
- `useContext`: Context API ka use karne ke liye.
- `useMemo`: Expensive calculations ko optimize karne ke liye.
- `useRef`: DOM elements ya mutable values ko directly access karne ke liye.

**Q3: useEffect ka syntax aur example batayein?**\
**Ans:**

```javascript
import { useEffect } from "react";

useEffect(() => {
  console.log("Component mounted or updated");

  return () => {
    console.log("Cleanup on unmount");
  };
}, []);
```

- Pehla argument ek callback function hota hai.
- Dusra argument dependency array hoti hai.

**Q4: Dependency array useEffect mein kyun hoti hai?**\
**Ans:** Dependency array batata hai ki kab useEffect execute hona chahiye. Agar array khali ho (`[]`), toh sirf mount hone par chalega.

**Q5: useRef aur useState mein kya difference hai?**\
**Ans:**

- `useRef` value ko bina re-render kiye update karta hai.
- `useState` value ko update karne par component re-render hota hai.

**Q6: useCallback ka use kab hota hai?**\
**Ans:** Jab aapko ek function ko memoize karna ho, taki wo baar-baar create na ho.

**Q7: useMemo aur useCallback mein kya farak hai?**\
**Ans:**

- `useMemo` ek value ko memoize karta hai.
- `useCallback` ek function ko memoize karta hai.

---

## States

**Q6: State kya hoti hai React mein?**\
**Ans:** State ek JavaScript object hota hai jo component ka dynamic data hold karta hai.

**Q7: useState hook ka example de sakte hain?**\
**Ans:**

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

- `useState(0)` initial value set karta hai.
- `setCount` state ko update karta hai.

**Q8: State aur Props mein kya difference hai?**\
**Ans:**

- State component ke andar hoti hai aur mutable hoti hai.
- Props parent se child component mein pass hote hain aur immutable hote hain.

**Q9: State ko directly modify karne ki bajaye setState kyu use karte hain?**\
**Ans:** React ko directly state modify karne par pata nahi chalta. `setState` ya `useState` ka use karne se React ko pata chalta hai ki component re-render karna hai.

**Q10: useReducer hook ka use kab karte hain?**\
**Ans:** Jab complex state logic manage karna ho ya multiple state values ek saath handle karni ho.

**Q11: Initial state ko dynamically kaise set karte hain?**\
**Ans:** Ek function pass karke jo initial value calculate kare.

```javascript
const [value, setValue] = useState(() => expensiveComputation());
```

---

## Form Handling

**Q11: React mein form ka data kaise handle karte hain?**\
**Ans:** Controlled components ka use karke. Input ki value React state se control hoti hai.

**Q12: Ek simple form ka example de sakte hain?**\
**Ans:**

```javascript
import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

- `onChange` event state ko update karta hai.
- `onSubmit` event default behavior ko prevent karta hai.

**Q13: Controlled aur Uncontrolled components mein kya difference hai?**\
**Ans:**

- Controlled components mein form data React state se manage hota hai.
- Uncontrolled components mein form data DOM se directly manage hota hai.

**Q14: React mein file upload kaise handle karte hain?**\
**Ans:**
Uncontrolled components ka use karke file input handle karte hain.

```javascript
function FileUpload() {
  const fileInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected file: ${fileInput.current.files[0].name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" ref={fileInput} />
      <button type="submit">Upload</button>
    </form>
  );
}
```

**Q15: Form validation React mein kaise karte hain?**\
**Ans:** Form validation karne ke liye state aur custom validation logic ka use karte hain ya libraries jaise `Formik` aur `Yup` ka use karte hain.

**Q16: React Hook Form library ka fayda kya hai?**\
**Ans:**

- Less re-renders.
- Simple API.
- Better performance.
- Built-in validation support.

**Q17: Form mein default values kaise set karte hain?**\
**Ans:** Input ke `value` attribute ke through ya `defaultValue` use karke.

**Q18: Multi-step form kaise implement karte hain?**\
**Ans:** State aur conditional rendering ka use karke.

---
