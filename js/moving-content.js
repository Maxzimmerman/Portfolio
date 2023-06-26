const TodoAppLink = document.querySelector('.project-git-link-todoapp');
const WebDirectory = document.querySelector('.project-git-link-webdirectory');
const Elbigote = document.querySelector('.project-git-link-elbigote');

TodoAppLink.addEventListener('click', () => {
   window.location='https://www.example.com';
   console.log("worked")
});

WebDirectory.addEventListener('click', () => {
   window.location.href = "https://brittanychiang.com/"
   console.log("worked")
});

Elbigote.addEventListener('click', () => {
   window.location.href = "https://brittanychiang.com/"
   console.log("worked")
});