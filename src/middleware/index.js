export const fetchRepoInfoForUser = (username) =>
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) =>
      response.json().then((json) => response.ok ? Promise.resolve(json) : Promise.reject(response.status))
    );
