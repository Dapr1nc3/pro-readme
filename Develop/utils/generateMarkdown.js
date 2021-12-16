const fs = require('fs');


function renderBadge(license, github, project) {
  if (license){
    return `https://img.shields.io/github/license/${github}/${project}`
  };
};

function renderLink(license) {
  if (license) {
    console.log(license);
    return `[${license} license](https://choosealicense.com/licenses/${license.toLowerCase()}/)`
  }
};

function renderSection(license) {
  if (license) {
    return `## License🐱‍🏍`
  };
};
 


// TODO: Create a function to generate markdown for README
function loadReadme(userInput) {
  console.log(userInput);
  return `
  # ${userInput.project}

  ## Description📝
  ${userInput.description}

  ## Table of Contents
  * [Installation](#installation💽)
  * [Usage](#usage🐱‍💻)
  * [Credits](#credits👻)
  * [License](#license🐱‍🏍)
  * [Badges](#badges🎭)
  * [Contributing](#contributing✔️)
  * [Tests](#tests.🧪)
  * [Questions](#questions❓)
  

  ## Description

  ${userInput.description}


  ## Installation💽

  ${userInput.install}


  ## Usage🐱‍💻

  ${userInput.runtest}
  ${userInput.repo}


  ## Credits👻

${userInput.contributingrepo}


  ${renderSection(userInput.badges[0])}

  ${renderLink(userInput.badges[0])}


  ## Badges🎭

  ${renderBadge(userInput.badges[0], userInput.name, userInput.project)}


  ## Contributing✔️




  ## Tests🧪




  ## Questions❓

${userInput.name}
${userInput.email}

[${userInput.name}](https://github.com/${userInput.name})

  `;
}



module.exports = loadReadme;

































