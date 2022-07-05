// etiquetas HTML user1
const input1 = document.querySelector('#username1')
const btn1 = document.querySelector('#btn1')

const public_repos_1 = document.querySelector('.card-user-1 .public_repos')
const followers_1 = document.querySelector('.card-user-1 .followers')
const following_1 = document.querySelector('.card-user-1 .following')
const public_gists_1 = document.querySelector('.card-user-1 .public_gists')
const total_1 = document.querySelector('.card-user-1 .total')

// etiquetas HTML user2
const input2 = document.querySelector('#username2')
const btn2 = document.querySelector('#btn2')

btn1.addEventListener('click', async function () {
  const username1 = input1.value.trim();

  if (username1 == '') {
    return;
  }

  const datos = await fetch(`https://api.github.com/users/${username1}`)
  const user = await datos.json()

  console.log(user);
  public_repos_1.textContent = user.public_repos
  public_gists_1.textContent = user.public_gists
  followers_1.textContent = user.followers
  following_1.textContent = user.following

  total_1.textContent = user.public_gists + user.public_repos + user.followers + user.following
})