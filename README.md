# Acme Note

A Landing Page for the the Acme Note-taking app, Which leads users or visitors to the signup buttons, while explaining to them the features and benefits of the Acme Note app

Link : [Acme Notes](https://acme-note.vercel.app/)

###### Framework:

**Next js** , I am going with Next js since, it allows for ssr and page vice bundling of our web app, unlike base React.js which renders the entire app only after loading the whole js bundle.

###### Major plugin:

- **framer-motion**: "^11.0.24"
  - CSS is good but to truly solve an animation-packed experience we have to use some bit of js and framer-motio helps a lot with that
  - I mainly used it for scroll-based animation
- **next:** "^14.2.0-canary.55",
- **react:** "^18",

###### Page Load time:

I get my page load time for the Network tab in the Dev tools section

```
16 requests
396 kB transferred
742 kB resources
Finish: 390 ms
DOMContentLoaded: 314 ms
```

hear is the build log form next js

```
Route (app)                              Size     First Load JS
┌ ○ /                                    44.4 kB         132 kB
└ ○ /_not-found                          905 B          88.4 kB
+ First Load JS shared by all            87.5 kB
  ├ chunks/23-053135d0d1571d6a.js        31.6 kB
  ├ chunks/fd9d1056-569f0b7fbd5aafa1.js  54 kB
  └ other shared chunks (total)          1.92 kB
```

The Load Time is Less them **350 ms** consting of **396 kB** of data

###### Optmigaton :

- Went with Next js SSR for the 1st introduction component of the page
- Using Next.js Image component instead of the image tab to deliver a optimised result
- Avoid using have packages for building the page
