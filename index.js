const axios = require('axios')

async function getReposByUser(username, limit = 10) {
  try {
    const apiUrl = `https://api.github.com/users/${username}/repos?sort=stars&per_page=${limit}`
    const response = await axios.get(apiUrl)
    const popularRepos = response.data

    console.log(`Primeros ${limit} repositorios para el usuario ${username}:`)
    popularRepos.forEach((repo, index) => {
      console.log(`${index + 1}. ${repo.name}`)
    })
  } catch (error) {
    console.error('Ocurrio un error:', error.message)
  }
}

getReposByUser('google')
