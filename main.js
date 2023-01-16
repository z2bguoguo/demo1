// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: 'YOUR-TOKEN'
})

await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
    owner: 'OWNER',
    repo: 'REPO',
    path: 'PATH',
    message: 'a new commit message',
    committer: {
        name: 'Monalisa Octocat',
        email: 'octocat@github.com'
    },
    content: 'bXkgdXBkYXRlZCBmaWxlIGNvbnRlbnRz',
    sha: '95b966ae1c166bd92f8ae7d1c313e738c731dfc3'
})