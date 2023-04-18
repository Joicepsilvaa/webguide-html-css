const github_profiles = {
    profile1: "gabriel-nunes-s",
    profile2: "usuario2-github",
    profile3: "usuario3-github",
    profile4: "usuario4-github"
  };
  
  function get_github_profile_info(profile) {
    const githubUsername = github_profiles[profile];
    if (!githubUsername) {
      console.error(`O perfil '${profile}' não foi encontrado.`);
      return;
    }
  
    const url = `https://api.github.com/users/${githubUsername}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        user_name.textContent = data.name;
        user_image.src = data.avatar_url;
        user_link.href = data.html_url;
        user_link.textContent = `@${githubUsername}`;
      });
  }

  get_github_profile_info('profile1');