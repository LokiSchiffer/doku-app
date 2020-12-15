<template>
  <div id="app">
    <div id="main-box">
      <header>
        <a href="/"
          ><img id="logo" src="../assets/logo.png" alt="Doku logo"
        /></a>
        <div>
          <button
            onclick="window.location.href='/user/admon/create/';"
            class="general__button--default general__button--enabled general__button--inactive"
          >
            Crear
          </button>
          <button
            onclick="window.location.href='/user/admon/search/';"
            class="general__button--default general__button--enabled general__button--active"
          >
            Consultar
          </button>
        </div>
      </header>
      <main>
        <p class="emphasis-simple">Consultar Usuario</p>
        <form action="" method="get">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Nombre de usuario"
            required
          />
          <button
            type="submit"
            class="general__button--default general__button--enabled"
          >
            Consultar
          </button>
        </form>
        <div>
          <h2 ><span>{{mensaje}}</span> </h2>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "search",
    data: function (){
        return {
            mensaje: ""
        }
    },
  
  beforeCreate: function(){
    let searchURL = window.location.search
    let self = this

    if (searchURL != "") {
      axios.get("http://127.0.0.1:8000/user/admon/search/" + searchURL)
          .then((result) => {
            self.mensaje = "El ususario " + result.data.username + " ha subido: " +
            result.data.files + " archivo(s)"
          })
          .catch((error) => {
            self.mensaje = "El usuario buscado no existe"
          });
    }
  },
};
</script>

<style>
@import url("../assets/styles/general.css");
@import url("../assets/styles/user-search.css");
</style>
