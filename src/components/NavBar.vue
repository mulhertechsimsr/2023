<template>
  <v-toolbar class="nav">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2 mt-4"
        contain
        src="../assets/img/logo.svg"
        transition="scale-transition"
        width="60"
      />
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down mt-4">
      <v-small class="mr-5"  flat>
        <a href="#1">
          Sobre o evento
        </a>
      </v-small>
      <v-small class="mr-5"  flat>
        <a href="#2">
          Programação
        </a>
      </v-small>
      <v-small class="mr-5"  flat>
        <a href="#3">
          Código de Conduta 
        </a>
      </v-small>
      <v-small class="mr-5"  flat>
        <a href="#4">
          Local
        </a>
      </v-small>
      </v-toolbar-items>
      </v-toolbar>
</template>

<script>
  export default {
    name: 'NavBar',

    data() {
      return {
        menu: [
          { title: "Sobre o Evento" },
          { title: "Programação" },
          { title: "Código de Conduta" },
          { title: "Local" },
        ]
      };
    },

    methods: {
      menuItems() {
        return this.menu;
      }
    }
  }
</script>

<style>
.nav{
  background: linear-gradient(89.91deg, #0E1F4B 5.49%, #B71E87 100.75%) !important;
  height: 80px !important;
  position: fixed;
  width:100vw;
  z-index: 1;
}

a{
  font-size: 14px;
  color:white !important;
  text-decoration: none;
}
.v-toolbar__items{
  align-items: center;
  height: 80px !important;
}
</style>
