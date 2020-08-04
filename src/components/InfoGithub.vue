<template>
  <div class="row">
    <div class="col s12 m12">
      <h5 id="usernametitle">Username : <input v-model="username"  @keyup.enter="cargar_usuario" type="text" placeholder="Enter the Github username"></h5>
      <button @click="cargar_usuario" class="btn waves-effect black" type="submit" name="action">Search
      <i class="material-icons right">arrow_downward</i>
      </button>
      <br>
      <br>
      <h5>{{usernametable}}</h5>
      <img :src= profile_image alt="">
      <br>
      <br>
      <table class="striped">
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
      profile_image:'https://imageog.flaticon.com/icons/png/512/25/25231.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF',
      username:'',
      public_repos: 0,
      followers: 0,
      following: 0,
      gists: 0,
      total: 0
    }
  },

  methods: {
    cargar_usuario() {
    this.axios.get(`https://api.github.com/users/${this.username}`)
    .then((datos) => {
      const github = datos.data;
      this.usernametable = github.login;
      this.profile_image = github.avatar_url;
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

input{
  font-size: 20px;
}

img{
  object-fit: cover;
  width: 100px;
  height: 100px;
}

#usernametitle{
  font-size: 30px;
  font-family: 'Righteous', cursive;
}

h5{
  font-family: 'Righteous', cursive;
  font-size: 40px;
}




</style>
