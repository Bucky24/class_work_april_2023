const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
    {
        message: 'Enter your name',
        name: 'username',
    },
    {
        message: 'Enter your location',
        name: 'location',
    },
    {
        message: 'Enter your bio',
        name: 'biography',
    },
    {
        message: 'Enter linkedin profile name',
        name: 'linkedin',
    },
    {
        message: 'Enter github profile name',
        name: 'github',
    },
    {
        message: 'What is your gitlab name',
        name: 'gitlab',
    },
]).then((responses) => {
    console.log(responses);

    const url = `https://api.github.com/users/${responses.github}/repos`;

    fetch(url).then((response) => {
        return response.json();
    }).then((repos) => {
        const repoList = repos.map((repo) => {
            const { full_name, html_url } = repo;

            return `<li><a href='${html_url}'>${full_name}</a></li>`;
        });

        const repoCode = `<ul>${repoList.join('\n')}</ul>`;

        responses.repos = repoCode;

        let htmlContents = fs.readFileSync('index.tmpl.html', 'utf-8');

        for (const responseKey in responses) {
            const templateKey = "{{" + responseKey + "}}"
            htmlContents = htmlContents.replaceAll(templateKey, responses[responseKey]);
        }
    
        const myResultingPortfolioHtml = htmlContents;
    
        fs.writeFileSync('index.html', myResultingPortfolioHtml);
        console.log("It is done.");
    });
});