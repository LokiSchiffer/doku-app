<template>
  <div id="main-view">
    <div id="main-box">
      <header>
        <a href="/"
          ><img id="logo" src="../assets/logo.png" alt="Doku logo"
        /></a>
      </header>
      <main>
        <div id="contents">
          <p class="main__legend--welcome-screen">
            <span class="emphasis-main">El poder</span><br />
            <span class="emphasis-simple">de lo Simple</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            saepe similique accusamus voluptas nisi magni nulla quam ad
            accusantium eos!
          </p>
          <div>
            <button
              onclick="window.location.href='/user/admon/create/';"
              class="general__button--default general__button--enabled"
            >
              Administrar Usuarios
            </button>
            <button
              class="general__button--default general__button--disabled"
              disabled
            >
              Ingresar
            </button>
          </div>
        </div>
        <img
          id="welcome-image"
          src="../assets/welcome.png"
          alt="A girl showing management of documents"
        />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome_screen"
};
</script>

<style>
@import url("../assets/styles/general.css");
@import url("../assets/styles/welcome.css");
</style>
