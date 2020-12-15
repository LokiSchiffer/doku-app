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
            name="search-username"
            id="search-username"
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
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "search"
};
</script>

<style>
@import url("../assets/styles/general.css");
@import url("../assets/styles/user-search.css");
</style>
