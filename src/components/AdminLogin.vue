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
        <form action="" method="get">
          <div>
            <img class="icon" src="../assets/login/user.png" alt="User head" />
            <input
              type="text"
              name="admin-username"
              id="admin-username"
              placeholder="Usuario de administrador"
              required
            />
          </div>
          <div>
            <img
              class="icon"
              src="../assets/login/padlock.png"
              alt="User head"
            />
            <input
              type="password"
              name="admin-password"
              id="admin-password"
              placeholder="Contraseña"
              required
            />
          </div>
          <button
            type="submit"
            class="general__button--default general__button--enabled"
          >
            Ingresar
          </button>
        </form>
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
