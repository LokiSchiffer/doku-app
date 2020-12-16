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
            class="general__button--default general__button--enabled general__button--active"
          >
            Crear
          </button>
          <button
            onclick="window.location.href='/user/admon/search/';"
            class="general__button--default general__button--enabled general__button--inactive"
          >
            Consultar
          </button>
        </div>
      </header>
      <main class="vertical">
        <p class="emphasis-simple">Crear Usuario</p>
        <form v-on:submit.prevent="createUser">
          <input
            type="text"
            name="create-username"
            id="create-username"
            placeholder="Nuevo usuario"
            required
            v-model="username"
          />
          <input
            type="password"
            name="create-password"
            id="create-password"
            placeholder="Contraseña"
            required
            v-model="password"
          />
          <button
            type="submit"
            class="general__button--default general__button--enabled"
          >
            Crear
          </button>
        </form>
        <p>
          <span>{{ mensaje }}</span>
        </p>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "user_create",

  data: function() {
    return {
      username: "",
      password: "",
      mensaje: ""
    };
  },

  methods: {
    createUser: function() {
      var datosJSON = {
        username: this.username,
        password: this.password
      };
      let self = this;
      axios
        .post("https://doku-app.herokuapp.com/user/admon/create/", datosJSON)
        .then(result => {
          if (result.data.Creación) {
            self.mensaje = "El usuario ha sido creado correctamente";
          }
        })
        .catch(err => {
          self.mensaje = err.response.data.detail;
        });
    }
  }
};
</script>

<style>
@import url("../assets/styles/general.css");
</style>
