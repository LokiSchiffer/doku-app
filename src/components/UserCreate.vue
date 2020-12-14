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
        />
        <input
          type="password"
          name="create-password"
          id="create-password"
          placeholder="Contraseña"
        />
        <button
          onclick="window.location.href='/user/admon/create/';"
          class="general__button--default general__button--enabled"
        >
          Crear
        </button>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "user_create"
};
</script>

<style>
@import url("../assets/styles/general.css");
@import url("../assets/styles/user-create.css");
</style>
