const core = require('@actions/core')

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

    console.log(context.payload)
}

run ();