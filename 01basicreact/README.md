
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