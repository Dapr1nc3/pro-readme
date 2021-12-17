const fs = require('fs');


function renderBadge(license) {
  if (license === 'None') {
    return ``
  };
  if (license === 'MIT') {
    return `<img src="https://img.shields.io/github/license/Dapr1nc3/run-buddy?color=Green&label=MIT">`
  };
  if (license === 'GNU') {
    return `<img src="https://img.shields.io/github/license/Dapr1nc3/run-buddy?color=Green&label=GNU">`
  };
  if (license === 'Apache') {
    return `<img src="https://img.shields.io/github/license/Dapr1nc3/run-buddy?color=Green&label=Apache">`
  };
};

function renderLink(license) {
  if (license === 'None') {
    return ``
  }
  if (license) {
    return `[${license} license](https://choosealicense.com/licenses/${license.toLowerCase()}/)`
  }
};

function renderSection(license) {
  if (license.badges[0] === 'None') {
    return ``
  };
  if (license) {
    return `## License
    
   ${renderBadge(license.badges[0])}

   ${renderLink(license.badges[0])} 
    
    
    `
  };
};



// TODO: Create a function to generate markdown for README
function loadReadme(userInput) {
  return `
  ${renderBadge(userInput.badges[0], userInput.name, userInput.project)}

  # ${userInput.project}

  ## Description📝
  ${userInput.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  

  ## Installation

  ${userInput.install}


  ## Usage

  ## How To Video Below
  


  ## Credits

  **Credit goes out to** 👇🏽

  ${userInput.credit}




  ${renderSection(userInput)}

  



  ## Contributing

  **Future contributors should know the following** 👇🏽

  ${userInput.repo}

  ${userInput.contributingrepo}



  ## Tests

  **Correct Answer** 👇🏽

  <img src= "https://user-images.githubusercontent.com/87787132/146451672-08bbcb79-a80e-4679-a64d-70f5f2c646c9.png">

  Your Answer: ${userInput.install}

  **Correct answer** 👇🏽

  <img src= "https://user-images.githubusercontent.com/87787132/146452913-dd0903c6-b937-4e32-9802-bc36a38c527f.png">
  
  Your answer: ${userInput.runtest}


  ## Questions

  👉 Email ${userInput.name} to reach out if you have any questions❓

  👉 **Email**: ${userInput.email}

  👉 **Github**: [${userInput.name}](https://github.com/${userInput.name})

  `;
}



module.exports = loadReadme;

































