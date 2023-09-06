const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`


const btn = document.getElementById('btn');
const btn2 = document.getElementById('checkuser')
const userInfo = document.getElementById('userinfo')


btn.addEventListener('click',() => {
    const user = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    }
    window.amplifyContext.login(user)
})

btn2.addEventListener('click',async () => {
    const user = await window.amplifyContext.currentUser();
    userInfo.innerText = user

})