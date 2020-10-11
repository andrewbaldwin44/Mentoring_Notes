const GLOBAL_GENERAL_NOTES = [
  {
    name: 'Introduction',
    note: `
      Hey there!<br><br>

      Awesome work getting those tests passing! :) You're off to a great
      start with this one!<br><br>

      I have a few pointers for you:<br>
      1.
    `
  },
  {
    name: 'Sign Off',
    note: `
      I want to give you hints without giving too much away, but please let me
      know if anything is unclear or if you have any questions!
      I'm here to help! :)<br><br>

      Andrew.
    `
  },
  {
    name: 'Stale',
    note: `
      I see you posted this quite some time ago, we apologize for the delay!
      Let me know if you're still interested in looking at this and I'd be
      happy to help you out!<br><br>

      Talk soon!
    `
  },
  {
    name: 'Testimonial',
    note: " \
      Thank you kindly for your awesome feedback! Always appreciate it! :) \
      I use my students testimonials on my [website here](https://andrewbaldwin.herokuapp.com/#testimonials-section). \
      Let me know if that's ok with you!<br><br> \
      \
      Andrew. \
    "
  },
  {
    name: 'Next Exercise',
    note: " \
      Best of luck with the next exercise in the meantime! Hope to see you there! :)<br><br> \
      \
      Andrew. \
    "
  },
  {
    name: 'Comments',
    note: " \
      Have a look at [this article](https://blog.codinghorror.com/coding-without-comments/), \
      and [this one too](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/) \
      on the role of comments in code. \
    "
  },
  {
    name: 'Let vs. Const vs. Var',
    note: " \
      In JavaScript, we want to use `let` anytime we have a **mutable** variable (one that we **will** be changed), \
      and `const` for **immutable** variables (ones that **are never** being changed). `var` is a special case that \
      we won't use very often. Check out [freecodecamp's article](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/) \
      on the subject for more! \
    "
  }
];

const GENERAL_NOTES = {
  javascript: [
    ...GLOBAL_GENERAL_NOTES,
    {
      name: 'Skeleton File',
      note: `
        As a quick aside, feel free to remove anything that's not pertinent
        to your solution. So here, the 'skeleton file' comments can go away.
      `
    },
    {
      name: 'Re-Declaration',
      note: `
        We should move this constant to the top level (outside of the function).
        This is because we don't want to re-declare it with each function call,
        nor do we need it to be exported.
      `
    },
    {
      name: 'Global Constants',
      note: " \
        By convention, global constants are written in \
        SCREAMING_SNAKE_CASE. So for example, `` would become `` \
      "
    },
    {
      name: 'Variable Declaration',
      note: " \
        We want to prefer declaring our variables with `const` anytime we \
        have a value that's never going to change. \
      "
    },
    {
      name: 'Naming',
      note: " \
        Check out [JavaScriptInfo's Article](https://javascript.info/variables#name-things-right) \
        on naming things right for some more awesome naming tips! \
      "
    },
    {
      name: 'Abbreviations',
      note: " \
        I do recommend staying away from any abbreviations as their meaning can very easily \
        become lost or confusing to the reader. My rule of thumb is if we can't find the word \
        in a standard English dictionary, our variable name isn't clear enough. \
      "
    }
  ],
  ruby: [
    ...GLOBAL_GENERAL_NOTES,
    {
      name: 'Lightweight Initialize',
      note: " \
        So ideally we want to make our `initialize` as _lightweight_ as possible. You can think \
        of a Class like the Subway sandwich line. When someone asks for a `Sandwich.new()`, \
        the worker isn't going to start off by packing the sandwich with everything on the menu. \
        What if we don't want pickles? So rather they start you off with just the bread \
        (the bare minimum we need for a sandwich) and then the customer gets to pick and choose \
        which methods (toppings) they want to add on.<br><br> \
        \
        So it's a bit of a funny metaphor but hopefully you see what I'm getting at. We don't want \
        to do the work of calculating the `latest` score or the `personal_best` until the user asks \
        for it (simply because they may never ask for it). \
      "
    }
  ],
  python: [
    ...GLOBAL_GENERAL_NOTES,
  ]
};

module.exports = {
  GENERAL_NOTES,
};
