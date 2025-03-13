const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial
      .split(' ') // Split the string into words
      .map(word => {
        // Standard title casing
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ') // Join the words back into a string
  })
  .map(tutorial => {
    // Handle specific case-sensitive terms after title casing
    return tutorial
      .replace('Preventdefault', 'PreventDefault') // Correct 'preventdefault'
      .replace('Stoppropagation', 'StopPropagation') // Correct 'stoppropagation'
      .replace('Jsonp', 'JSONP') // Correct 'jsonp'
      .replace('Nan', 'NaN') // Correct 'nan'
      .replace('Api', 'API') // Correct 'api'
      .replace('Oo', 'OO'); // Correct 'oo'
  });
}

console.log(titleCased());
