const fullname1 = document.querySelector(".repo-1");
const fullname2 = document.querySelector(".repo-2");
const fullname3 = document.querySelector(".repo-3");
const owner1 = document.querySelector(".owner-1");
const owner2 = document.querySelector(".owner-2");
const owner3 = document.querySelector(".owner-3");
const repo1 = document.querySelector(".url-1");
const repo2 = document.querySelector(".url-2");
const repo3 = document.querySelector(".url-3");
const image1 = document.querySelector(".img-1");
const image2 = document.querySelector(".img-2");
const image3 = document.querySelector(".img-3");

const promise1 =new Promise((resolve,reject)=>{
  resolve(fetch(
  "https://api.github.com/search/repositories?q=user:benna100"
).then(response => response.json()).then(data =>{
    image1.src = data.items[0].owner.avatar_url;
    fullname1.innerHTML = `Full_Name: ${data.items[0].full_name}`
    owner1.innerHTML = `Owner: ${data.items[0].owner.login}`
    repo1.innerHTML = `${data.items[0].owner.html_url}`;
}))
}) 

const promise2 =new Promise((resolve,reject)=>{
  resolve(fetch(
  "https://api.github.com/search/repositories?q=user:Shahila1990"
)
  .then((response) => response.json())
  .then((data) => {
    image2.src = data.items[2].owner.avatar_url;
    fullname2.innerHTML = `Full_Name: ${data.items[2].full_name}`;
    owner2.innerHTML = `Owner: ${data.items[2].owner.login}`;
    repo2.innerHTML = `${data.items[2].owner.html_url}`;
  }))
}) 

const promise3 =new Promise((resolve,reject)=>{
  resolve(fetch(
  "https://api.github.com/search/repositories?q=user:john-smilga"
)
  .then((response) => response.json())
  .then((data) => {
    image3.src = data.items[2].owner.avatar_url;
    fullname3.innerHTML = `Full_Name: ${data.items[2].full_name}`;
    owner3.innerHTML = `Owner: ${data.items[2].owner.login}`;
    repo3.innerHTML = `${data.items[2].owner.html_url}`;
  }))
}) 

  let promiseExecution = async () =>{
      await Promise.all([
          promise1,
          promise2,
          promise3
      ])
  }
  promiseExecution()
