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
- Created a very basic, unproteted home page
- Wrote the tutorial for how to implement a theme switcher using `next-themes` and `clerk`
  - Really glad I tested walking through my tutorial a few times! Found some items that weren't working right the first iteration or two of the tutorial.
  - I tried to use .mdx instead of a .md file and to implement Clerk's styling with `<Step>` among other styles, but after fighting it for a bit decided to make a .md file and get close to Clerk's styling without using the extra features of a .mdx file. If I'm understanding correctly, I think I would need to deploy the docs to see all of the functionality of a .mdx file (since Github doesn't render it the same as it does a .md file), so I opted for something that I could format nicely, and have readable directly in Github instead. I would have liked to mimic the Clerk UI a bit more closely on the doc, but I'm happy with how it turned out.

**🎉 Celebrations 🎉**

Got lots working today! Fun to see it all come together.

- [useSession() Clerk](https://clerk.com/docs/hooks/use-session)
- [TailwindCSS Docs](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Clerk Style Guide](https://github.com/clerk/clerk-docs/blob/main/styleguides/STYLEGUIDE.md)
- [next-themes docs](https://github.com/pacocoursey/next-themes?tab=readme-ov-file#next-themes--)
- [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- [Clerk Themes](https://clerk.com/docs/customization/themes)

### Any Blockers:

Not yet 😬

### Next I'm working on:

- Proof reading
- Final touches
- Turning in!

### References for Next Time:

- [Clerk Style Guide](https://github.com/clerk/clerk-docs/blob/main/styleguides/STYLEGUIDE.md)

### Final Thoughts

Overall I thought this was a great project! Next.js has been on my list to learn for a long time, I had just never taken the deep dive to learn it. Because of that, I spent a large chunk of the week going through a tutorial on Frontend Masters to learn how Next.js works. If I could go back, I think I could have spent less time on a Next.js tutorial, as the Next.js and Clerk docs made it very easy to spin up an application. With the providers given, and the next-themes set up, it was relatively simple to get everything going. There were some important things to understand about Next.js such as when you need to have `'use client'` at the top, the file structure creating the routes, and the layout/page functionalities, but overall you can almost start a Next.js app with Clerk without any Next.js knowledge!

The only piece of the Clerk implementation that I found to be a bit tricky was the `<SignInButton />` and `<SignUpButton />` with the theme switcher. With the default settings and only using the button, and not the `<SignUp />` or `<SignIn />` components the page that is brought up when clicking the `<SignInButton />` or `<SignUpButton />` is not impacted by the theme switcher. The fix for this is to either create custom Sign In and Sign Up pages using the `<SignUp />` and `<SignIn />` components, or to set the mode property on `<SignInButton />` and `<SignUpButton />` to `mode="modal"`.

With more time on the project, I would have loved to have implemented the functionality of the app outside of the Clerk pieces. My idea for this app was a plant watering tracker that would allow you to both log when you watered, and set a watering schedule to be notified when it has been longer than you want between waterings for a particular plant. I'm also not very happy with the Session ID and Organization ID placement on my dashboard page. I would have loved to make the dashboard a bit more customized, and fitting within the "Rainy Day" theme, but I'm happy with how it looks within the time I had.

I'm quite happy with how my squiggly lines turned out. I've been pushing myself to learn a bit more fun CSS where you can make designs, and I wanted a simple, sleek, but fun design for the background of this app. They were definitely a stretch for me as it was something else new to learn, but I really wanted to learn a lot from this experience and push myself to try things that I hadn't before!
