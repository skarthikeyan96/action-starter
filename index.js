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

    console.log(octokit)
    
    const { context = {}} = github;

    const {pull_request} = context.payload

    await octokit.issues.createComment({
        ...context.repo,
        issue_number: pull_request.number,
        body: 'Thank you for creating the PR 👍 😅'        
    })

    console.log(context.payload)
}

run ();
