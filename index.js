const core = require('@actions/core')
const github = require('@actions/github')

async function run () {
    const token = core.getInput('GITHUB_TOKEN');

    if(!token){
        core.setFailed('Please provide the access token to continue further')
        return;
    }
    
    console.log('Access token got it 😇 ')  
    
    const octokit = github.getOctokit(token)

    
    const context = github.context;
    console.log(context.payload)
//     const issue_number = context.payload.issues.number;


    
//     if (context.payload.issues == null) {
//         core.setFailed('Not linked to a pull request');
//         return;
//     }

//     console.log(octokit)
   

//     await octokit.rest.issues.createComment(Object.assign(Object.assign({}, context.repo), { issue_number: issue_number, body: "Thank you for creating the Issue" }))

//     console.log(context.payload)
}

run ();


// const message = core.getInput('message');
//             const github_token = core.getInput('GITHUB_TOKEN');
//             const context = github.context;

//             const octokit = new github.GitHub(github_token);
//             const new_comment = octokit.issues.createComment(Object.assign(Object.assign({}, context.repo), { issue_number: pull_request_number, body: message }));
