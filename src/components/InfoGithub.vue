<template>
  <div class="row">
    <div class="col s12 m12">
      <h4>Username : <span>{{username}}</span></h4>
      <br>
      <table class="striped bordered">
        <tbody>
          <tr>
            <td>Public Repos</td>
            <td>{{public_repos}}</td>
          </tr>
          <tr>
            <td>Number of Followers</td>
            <td>{{followers}}</td>
          </tr>
          <tr>
            <td>Number Following</td>
            <td>{{following}}</td>
          </tr>
          <tr>
            <td>Public Gists</td>
            <td>{{gists}}</td>
          </tr>
          <tr>
            <td><b>Total Score</b></td>
            <td><b>{{total}}</b></td>
          </tr>
        </tbody>
      </table>
    </div>   
  </div>
</template>

<script>
export default {
  name: 'InfoGithub',
  data() {
    return {
      username:'',
      public_repos: 0,
      followers: 0,
      following: 0,
      gists: 0,
      total: 0
    }
  },
  mounted() {
    this.axios.get('https://api.github.com/users/pablofsj')
    .then((datos) => {
      const github = datos.data;
      this.username = github.login;
      this.public_repos = github.public_repos;
      this.followers = github.followers;
      this.following = github.following;
      this.gists = github.public_gists;
      this.total = (this.public_repos + this.followers + this.following + this.gists)

    })
    .catch((error) => {
      alert(error);
    });
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}

table{
  font-size: 20px;
}

</style>
