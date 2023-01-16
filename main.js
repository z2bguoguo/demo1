// Octokit.js
// https://github.com/octokit/core.js#readme
//import { Octokit, App } from "https://cdn.skypack.dev/octokit";
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.slice(1).match(reg); //匹配目标参数
    if (r != null) return decodeURI(r[2]);
    return null; //返回参数值
}

var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
httpRequest.open('GET',
    'https://github.com/login/oauth/access_token?client_id=Iv1.706e309d265ed0af&client_secret=2e4cf20169960d0126e8afe34b4898d554bd632d&code='+getUrlParam("code")
    , true);
httpRequest.send();
httpRequest.onreadystatechange = function () {
    console.log(httpRequest.responseText)
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var json = httpRequest.responseText;//获取到json字符串，还需解析
        console.log(json);
    }
};
/*const octokit = new Octokit({
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

*/