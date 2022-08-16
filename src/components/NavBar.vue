<template>
  <v-toolbar class="nav hidden-sm-and-down">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2 mt-4"
        contain
        src="../assets/img/logo.svg"
        width="60"
      />
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down mt-4">
      <v-small class="mr-5"  flat>
        <v-btn>
          <a href="#1">
            Sobre o evento
          </a>
        </v-btn>
      </v-small>
      <v-small class="mr-5"  flat>
        <v-btn>
        <a href="#2">
          Programação
        </a>
        </v-btn>
      </v-small>
      <v-small class="mr-5"  flat>
        <v-btn>
        <a href="#6">
          Perguntas Frequentes 
        </a>
        </v-btn>
      </v-small>
      <v-small class="mr-5"  flat>
        <v-btn>
        <a href="#3">
          Código de Conduta 
        </a>
        </v-btn>
      </v-small>
      <v-small class="mr-5"  flat>
        <v-btn>
        <a href="#4">
          Local
        </a>
        </v-btn>
      </v-small>
      <v-small class="mr-5"  flat>
        <v-btn>
        <a href="https://www.eventbrite.com.br/e/mulher-tech-sim-senhor-2022-tickets-396687421757" target="_blank">
          Inscreva-se
        </a>
        </v-btn>
      </v-small>
      <v-small class="mr-5"  flat>
        <v-btn>
        <a href="https://mulhertechsimsr.lojavirtualnuvem.com.br/" target="_blank">
          Lojinha
        </a>
        </v-btn>
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
.theme--light.v-btn.v-btn--has-bg{
    background-color: #f0ffff00;
    border-radius: 100px;
    color: white;
    text-transform: none;
    
}
.v-btn--is-elevated{
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 0%), 0px 2px 2px 0px rgb(0 0 0 / 0%), 0px 1px 5px 0px rgb(0 0 0 / 0%);
}

.nav{
  background: linear-gradient(89.91deg, #0E1F4B 5.49%, #B71E87 100.75%) !important;
  height: 80px !important;
  position: fixed;
  width:100vw;
  z-index: 2;
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
