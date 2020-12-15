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
      <main>
        <p class="emphasis-simple">Crear Usuario</p>
        <input
          type="text"
          name="create-username"
          id="create-username"
          placeholder="Nuevo usuario"
          v-model="username"
        />
        <input
          type="password"
          name="create-password"
          id="create-password"
          placeholder="Contraseña"
          v-model="password"
        />
        <button
          v-on:click = "createUser"
          class="general__button--default general__button--enabled"
        >
          Crear
        </button>
        <div>
          <h2 ><span>{{mensaje}}</span> </h2>
        </div>
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
    createUser: function(){
      var datosJSON ={
        username: this.username,
        password: this.password
      };
      let self = this
      axios.post("http://localhost:8000/user/admon/create/", datosJSON)
          .then(result => {
            if (result.data.Creación){
              console.log(result)
              self.mensaje = "El usuario fue creado exitosamente"
            }
          })
          .catch(err => {
            console.log (err);
            self.mensaje = "Error en la creación"
          })
    }
  }
};
</script>

<style>
@import url("../assets/styles/general.css");
@import url("../assets/styles/user-create.css");
</style>
