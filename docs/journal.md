## Tuesday April 15

### Today I worked on:

Through this morning I had been working through Next.js tutorials, as this was my first time using Next.js for a project! I've used React in the past so I don't feel like I was starting from zero, but still quite a bit to learn to complete this project.

- Project Init
  - Finally made it through enough tutorial that I felt ready to dive in and start the project. Got everything configured how I wanted including Tailwind
- Implemented Clerk
  - So quick to get the initial implementation in, I think easily less than 10 mins. I did struggle a little bit with getting Sign In and Sign Up on their own custom pages, but my main issues were related to Next.js naming conventions (`[[ ...slug ]]` and `[[...slug]]` are not the same).
  - Explored the Clerk dashboard a bit, there are a ton of options for what can be customized!
  - Also played around with the `appearance` property, but decided to leave the component how it is for now.
- Implemented a theme switcher with `next-themes`
  - This surprisingly gave me the most trouble! I decided to use TailwindCSS for this project, and faced a bit of difficulty getting Tailwind to follow my theme picker and not my system settings. After quite a bit of trouble shooting, figured out that it was a single line missing in my CSS file that tells it to watch for manually changing themes. Once I figured out this hiccup, everything was working great! Even declared some custom colors for each theme (light & dark).
- Created background squiggly lines!
  - This was a bit of a rabbit hole, but I got myself out relatively quickly. I wanted to push my CSS researching skills to see if I could make a simple squiggly design for the background. I'm pleased with how it turned out, and learned a bit more about CSS along the way.
- Switched global font to Montserrat
  - So nice that this is auto changed on the clerk components as well!

**AH-HA!💡**

There are some significant changes in Next.js, but it is similar to React in a lot of ways (which makes sense since it's a React framework). Before learning Next, it always felt so different from React to me - but it's not!

**🎉 Celebrations 🎉**

Finally get to start making progress after a weekend of learning Next.js!

### Bugs encountered 🐛🐞🐜 :

🪲 Theme switcher changing page theme, but not applying `dark:` tailwind themes on switch (staying on system setting)

**\~Solution~**

Add `@custom-variant dark (&:where(.dark, .dark *));` to CSS file

🪲 Sign In / Sign Up not showing up correctly. Error: `Error: Optional route parameters are not yet supported ("[[ ... sign-in ]]").`

**\~Solution~**

When doing Optional Catch-all Segments, there is no space inside the double brackets.

### References Used Today:

- [How to set up a new Next.js project](https://nextjs.org/docs/app/getting-started/installation)
- [Clerk Next.js Quick Start](https://clerk.com/docs/quickstarts/nextjs)
- [Custom Sign In or Sign Up Page w/ Clerk](https://clerk.com/docs/references/nextjs/custom-sign-in-or-up-page)
- [Next Dynamic Routes](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments)
- [Clerk Sign In Component](https://clerk.com/docs/components/authentication/sign-in)
- [TailwindCSS Docs](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [CSS nth Child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)
- [::after in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/::after)

### Any Blockers:

Not yet 😬

### Next I'm working on:

- Protected page & homepage
- Tutorial for a Theme Switcher using Clerk

### References for Next Time:

- [TailwindCSS Docs](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Clerk Middleware](https://clerk.com/docs/references/nextjs/clerk-middleware)

## Wednesday April 16

### Today I worked on:

- Building out the `/dashboard` page. It's protected, and redirects to sign-in when someone is not authenticated.
  - Shows the session ID using `useSession()` hook written by Clerk

**AH-HA!💡**

**🎉 Celebrations 🎉**

### Bugs encountered 🐛🐞🐜 :

🪲

**\~Solution~**

### References Used Today:

- [useSession() Clerk](https://clerk.com/docs/hooks/use-session)
- [TailwindCSS Docs](https://tailwindcss.com/docs/installation/framework-guides/nextjs)

### Any Blockers:

Not yet 😬

### Next I'm working on:

- Homepage
- Tutorial for a Theme Switcher using Clerk

### References for Next Time:

- [TailwindCSS Docs](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Clerk Middleware](https://clerk.com/docs/references/nextjs/clerk-middleware)
