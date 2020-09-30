const NAVIGATION = {
  javascript: [
    {
      exercise: 'Resistor Color Duo',
      sections: [
        {
          name: 'Destructuring',
          link: 'destructuring'
        },
        {
          name: 'Single Responsibility',
          link: 'single-responsibility'
        },
        {
          name: 'Math Method',
          link: 'math-method'
        },
        {
          name: 'Prefer Number',
          link: 'prefer-number'
        },
        {
          name: 'Avoid Unary Plus',
          link: 'unary-plus'
        }
      ]
    },
    {
      exercise: 'Gigasecond',
      sections: [
        {
          name: 'Scientific Notation',
          link: 'single-responsibility-duo'
        },
        {
          name: 'Date.parse()',
          link: 'date-parse'
        },
        {
          name: 'Work with Milliseconds',
          link: 'date-milliseconds'
        },
      ]
    },
    {
      exercise: 'Space Age',
      sections: [
        {
          name: 'Magic Numbers',
          link: 'magic-numbers'
        },
        {
          name: 'Single Responsibility',
          link: 'single-responsibility-space'
        },
        {
          name: 'Scientific Notation',
          link: 'scientific-notation-space'
        },
        {
          name: 'toFixed()',
          link: 'to-fixed'
        },
        {
          name: 'Naming',
          link: 'naming-space'
        },
        {
          name: 'Switch Statement',
          link: 'switch-statement-space'
        },
        {
          name: 'Math.round() Precision',
          link: 'round-space'
        },
      ]
    }
  ],
};

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
      know if anything is unclear or if you have any questions!.
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
      name: 'Variable Declaration',
      note: " \
        We want to prefer declaring our variables with `const` anytime we \
        have a value that's never going to change. \
      "
    },
  ],
};

module.exports = {
  NAVIGATION,
  GENERAL_NOTES,
}
