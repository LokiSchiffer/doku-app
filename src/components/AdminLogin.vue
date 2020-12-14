<template>
  <div id="app">
    <div id="main-box">
      <header>
        <a href="/"
          ><img id="logo" src="../assets/logo.png" alt="Doku logo"
        /></a>
      </header>
      <main>
        <p class="emphasis-simple">Administra</p>
        <div>
          <img class="icon" src="../assets/login/user.png" alt="User head" />
          <input
            type="text"
            name="admin-username"
            id="admin-username"
            placeholder="Usuario de administrador"
          />
        </div>
        <div>
          <img class="icon" src="../assets/login/padlock.png" alt="User head" />
          <input
            type="password"
            name="admin-password"
            id="admin-password"
            placeholder="Contraseña"
          />
        </div>
        <button
          onclick="window.location.href='/user/admon/create/';"
          class="general__button--default general__button--enabled"
        >
          Ingresar
        </button>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "admin_login"
};
</script>

<style>
@import url("../assets/styles/general.css");
@import url("../assets/styles/admin-login.css");
</style>
