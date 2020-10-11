const NOTES = {
  javascript: [
    {
      exercise: 'TwoFer',
      sections: [
        {
          name: 'Welcome',
          link: 'track-welcome',
          note: " \
            Hey there and welcome to JavaScript! :) \
          "
        },
        {
          name: 'Missing Export',
          link: 'missing-export',
          note: " \
          So first off, in order to ensure our tests are passing, we need our `spec` file to \
          have access to the `twoFer` function. In order to do this, we simply add the keyword `export` \
          before the function declaration:<br> \
          ```<br> \
          export function twoFer(name) {<br><br> \
          \
          }<br> \
          ```<br> \
          Notice how the `spec` file is using `import` to get the `twoFer` function?<br><br> \
          \
          Let me know if there are any questions on this or if you had any trouble getting the tests running! We're here to help! :)<br><br> \
          \
          Andrew. \
          "
        },
        {
          name: 'Default Parameters',
          link: 'default-parameters',
          note: " \
            In JavaScript, we can use [Default Paramaters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) \
            to handle missing arguments \
          "
        },
        {
          name: 'Template Strings',
          link: 'template-strings',
          note: " \
            You can also have a look at using [Template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) \
          "
        }
      ]
    },
    {
      exercise: 'Resistor Color',
      sections: [
        {
          name: "Implicit Return",
          link: "implicit-return",
          note: " \
            Optionally, we could also use [implicit return](https://riptutorial.com/javascript/example/17665/implicit-return) on our `colorCode` function \
          "
        },
      ]
    },
    {
      exercise: 'Resistor Color Duo',
      sections: [
        {
          name: 'Destructuring',
          link: 'destructuring',
          note: " \
            The first thing I would suggest is taking a look at \
            [Destructuring Assigment](https://javascript.info/destructuring-assignment). \
            This can make for a very elegant way to 'destructure' the Array, rather than \
            using indexes. \
          "
        },
        {
          name: 'Single Responsibility',
          link: 'single-responsibility',
          note: " \
            Next, have a look at the [Single Responsibility Principle](https://codepen.io/allanpope/post/single-responsibility-principle) \
            of functions, meaning we only ever want our functions to handle one \
            concern. Notice how this line of code `COLORS.indexOf()` is happening twice? \
            So here, getting the index of a color is a separate concern and \
            should therefore be handled by a second function. We should see that \
            this will alleviate repetition and make our code more readable. \
          "
        },
        {
          name: 'Math Method',
          link: 'math-method',
          note: " \
            There is also a mathematical approach to this exercise. If we look at our \
            expected output, we will notice that our first color value is in the _one's_ \
            position, and the second is in the _ten's_ position. If we **multiply** our \
            number by it's base, we won't even have to deal with strings!<br><br> \
            \
            Consider this example:<br><br> \
            \
            ```<br> \
            tensPosition = 2<br> \
            onesPosition = 1<br> \
            return 2 * 10 + 1 * 1 // 21<br> \
            ``` \
          "
        },
        {
          name: 'Prefer Number',
          link: 'prefer-number',
          note: " \
            Lastly, we want to prefer using the `Number()` method rather than \
            `parseInt()` when we _know_ the input. Here we _know_ the input is \
            always going to be a String. \
          "
        },
        {
          name: 'Avoid Unary Plus',
          link: 'unary-plus',
          note: " \
            We want to prefer using the `Number()` method rather than the unary `+` \
            operator. It makes your code easier to understand. One of the most valuable \
            traits a coder can develop is the ability to write code that clearly \
            conveys its intent to readers! :) \
          "
        },
        {
          name: "Destructuring Arguments",
          link: "destructuring-arguments",
          note: " \
            We can take the Destructuring one step further and have it happen in the function arguments:<br> \
            ```<br> \
            export const decodedValue = ([firstColor, secondColor]) => {...}<br> \
            ``` \
          "
        },
      ]
    },
    {
      exercise: 'Gigasecond',
      sections: [
        {
          name: 'Scientific Notation',
          link: 'single-responsibility-duo',
          note: " \
            We can write this number in a more concise way using Scientific Notation:<br> \
            ```<br> \
            1e12;<br> \
            <br> \
            // or<br> \
            <br> \
            1 * 10**12;<br> \
            <br> \
            // or<br> \
            <br> \
            1 * Math.pow(10, 12);<br> \
            ``` \
          "
        },
        {
          name: 'Date.parse()',
          link: 'date-parse',
          note: " \
            `Date.parse()` is not the ideal method to be using in this case because it is \
            meant to _parse_ a Date String (and here we have a Date Object). Have a look at \
            the [JavaScript Date Methods] \
            (https://www.tutorialspoint.com/javascript/javascript_date_object.htm) and see if we \
            can find one that would be more appropriate for the use case here. \
          "
        },
        {
          name: 'Work with Milliseconds',
          link: 'date-milliseconds',
          note: " \
            Whenever we're working with Date's in Programming, we want to prefer working in \
            Milliseconds. So here, what we need to do is _extract_ the milliseconds from the \
            Date Object and convert our gigasecond into a gigasecond _expressed_ in milliseconds. \
            This way we'll be able to calculate the **new** milliseconds and pass this directly \
            into the Date arguments: `new Date(milliseconds)`<br><br> \
            \
            Have a look at the methods for the [JavaScript Date Object] \
            (https://www.tutorialspoint.com/javascript/javascript_date_object.htm) and see if you \
            can find the one that will _extract_ the milliseconds. \
          "
        },
      ]
    },
    {
      exercise: 'Space Age',
      sections: [
        {
          name: 'Magic Numbers',
          link: 'magic-numbers',
          note: " \
            We have to watch out for 'magic numbers' in our code \
            (numbers that appear out of thin air with no explanation!). \
            Many readers won't know what `` is meant to \
            represent. So how can we more clearly convey it's meaning? \
          "
        },
        {
          name: 'Single Responsibility',
          link: 'single-responsibility-space',
          note: " \
            Have a look at the [Single Responsibility Principle] \
            (https://codepen.io/allanpope/post/single-responsibility-principle) \
            of functions, meaning we only ever want our functions to handle one concern. \
            Here, everything that is concerned with rounding is a separate concern and \
            should therefore be handled by a second function. We should see that \
            this will help to make our code more readable. \
          "
        },
        {
          name: 'Scientific Notation',
          link: 'scientific-notation-space',
          note: " \
            We can write our large number using Scientific Notation:<br> \
            ```<br> \
            315576e2;<br> \
            <br> \
            // or<br> \
            <br> \
            315576 * 10**2;<br> \
            <br> \
            // or<br> \
            <br> \
            315576 * Math.pow(10, 2);<br> \
            ``` \
          "
        },
        {
          name: 'toFixed()',
          link: 'to-fixed',
          note: " \
            There is much discussion on using `Math.round()` vs `toFixed()` for which one is \
            better. Personally, I would recommend you to use `Math.round()`. Using `toFixed` \
            causes 'type juggling' and it's not necessary. Then in order to improve the \
            readability factor, we can create a separate function that concerns itself with the \
            rounding. \
          "
        },
        {
          name: 'Naming',
          link: 'naming-space',
          note: " \
              The naming in this exercise is tricky!<br> \
            - `ORBITAL_PERIOD_SECONDS`: I would say the number that this represents is the \
            **seconds** in an **Earth Year**<br> \
            - `ORBITAL_PERIOD_RATIOS`: We can be a little more descriptive here. Are they ratios \
            or do they have a unit?<br> \
            - `SPACE_AGE`: The data represented in this Object are **orbital periods** of \
            _specific_ planets in **Earth Years**. How can we have the name reflect this?<br> \
            - `EARTH_SECONDS_IN_YEAR`: Perfect! Bang on! Right on the money! \
          "
        },
        {
          name: 'Switch Statement',
          link: 'switch-statement-space',
          note: " \
            First off, interesting use of a `switch` statement here. The problem with this \
            is it makes the code very difficult to _scale_ (image if we had 200 planets!). \
            So what we want to have a look at is an appropriate [JavaScript Data Type] \
            (https://www.w3schools.com/js/js_datatypes.asp) to make use of. \
          "
        },
        {
          name: 'Math.round() Precision',
          link: 'round-space',
          note: " \
            JavaScript's rounding is quite tricky. One way that we can handle the rounding in \
            this exercise would be:<br> \
            ```<br> \
            // For specifically two decimal places:<br> \
            <br> \
            Math.round(number * 100) / 100;<br> \
            <br> \
            // Or<br> \
            <br> \
            const shift = Math.pow(10, decimal);<br> \
            Math.round(number * shift) / shift;<br> \
            ``` \
          "
        },
      ]
    }
  ],
  ruby: [
    {
      exercise: 'Raindrops',
      sections: [
        {
          name: 'each_with_object Method',
          link: 'each-with-object-rain',
          note: " \
            Check out Ruby's [each_with_object](https://apidock.com/ruby/Enumerable/each_with_object) \
            method. This can be a more elegant method, rather than creating an empty String. \
          "
        },
        {
          name: 'Single Responsibility Principle',
          link: 'single-responsibility-raind',
          note: " \
            Have a look at the [Single Responsibility Principle] \
            (https://codepen.io/allanpope/post/single-responsibility-principle) \
            of functions (and don't worry about the code examples). We can make \
            our code more readable by _separating our concerns_. For example, I \
            would say the condition in our `each` iterator `(number % factor).zero?` \
            is a separate concern and should therefore be handled by a second function. \
            This will then do us the favour of describing what this line of code does. \
          "
        }
      ]
    },
  ],
  python: [

  ]
};

module.exports = {
  NOTES,
};
