$(document).ready(function() {

    const endpoint = 'https://api.github.com/users/alanmdsan';

    $.ajax(endpoint).done(function(resposta) {
        const name = resposta.name;
        const login = '@' + resposta.login;
        const avatar_url = resposta.avatar_url;
        const following = resposta.following;
        const followers = resposta.followers;
        const public_repos = resposta.public_repos;
        const html_url = resposta.html_url;

        $('#profile-avatar').attr('src', avatar_url);
        $('#profile-name').text(name);
        $('#profile-username').text(login);
        $('#public-repos').text(public_repos);
        $('#following').text(following);
        $('#followers').text(followers);
        $('#profile-link').attr('href', html_url);
    });
});