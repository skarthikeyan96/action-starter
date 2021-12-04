const core = require('@actions/core')

async function run () {
    const token = core.getInput('access-token');

    if(!token){
        core.setFailed('Please provide the access token to continue further')
        return;
    }
    console.log('Access token got it 😇 ')    
}

run ();