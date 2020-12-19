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
            class="general__button--default general__button--enabled general__button--inactive"
          >
            Consultar
          </button>
          <button
            onclick="window.location.href='/user/admon/delete/';"
            class="general__button--default general__button--enabled general__button--active"
          >
            Eliminar
          </button>
        </div>
      </header>
      <main class="vertical">
        <p class="emphasis-simple">Eliminar Usuario</p>
        <form v-on:submit.prevent="deleteUser">
          <input
            type="text"
            name="delete-username"
            id="delete-username"
            placeholder="Usuario a eliminar"
            required
            v-model="username"
          />
          <input
            type="password"
            name="delete-password"
            id="delete-password"
            placeholder="Contraseña"
            required
            v-model="password"
          />
          <button
            type="submit"
            class="general__button--default general__button--enabled"
          >
            Eliminar
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
  name: "user_delete",

  data: function() {
    return {
      username: "",
      password: "",
      mensaje: ""
    };
  },

  methods: {
    deleteUser: function() {
      var datosJSON = {
        username: this.username,
        password: this.password
      };
      let self = this;
      axios
        .delete("https://doku-app.herokuapp.com/user/admon/delete/", datosJSON)
        .then(result => {
          self.mensaje =
            "El usuario " +
            result.data.Eliminado.username +
            " ha sido eliminado";
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
