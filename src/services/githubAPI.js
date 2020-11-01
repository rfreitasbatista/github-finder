const githubHeader = {
  Accept: 'application/vnd.github.v3+json',
};

const userRepoEndpoint = (user) => `https://api.github.com/users/${user}/repos`;

const jsonFetch = (url, header, onReject) => {
  return fetch(url, header).then((resolve) => {
    return resolve.json().then((data) => {
      return resolve.ok ? data : onReject();
    });
  });
};

export const userRepoFetch = (user, onReject) =>
  jsonFetch(userRepoEndpoint(user), githubHeader, onReject);
