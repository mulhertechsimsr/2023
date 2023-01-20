<template>
  <div class="nav container justify-content-center" style="padding-right:0px;">
    <div class="row w-100">
      <div class="col-lg-1 col-md-12 logo">
        <img src="../assets/img/logo.svg" class="logo_tamanho" style="width:60px"/>
      </div>
      <div class="col nav_itens d-flex justify-content-center ">
          <a href="#1" class="hidden-sm-and-down">
            O evento
          </a>
          <a href="#6" class="hidden-sm-and-down">
            Perguntas frequentes 
          </a>
          <a href="#7" class="hidden-sm-and-down">
            Para empresas
          </a>
          <a href="#9" class="hidden-sm-and-down">
            Contato
          </a>
      </div>
      <div class=" col-2 d-flex justify-content-end" style="align-content:center;flex-wrap: wrap;">
        <v-btn class=" hidden-sm-and-down primary_button" target="_blank" href="https://www.eventbrite.com.br/e/mulher-tech-sim-senhor-2023-tickets-508226849187">Inscreva-se</v-btn>
      </div>
    </div>
  </div>
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
.primary_button{
  background-color: #28A899 !important;
  color:white !important;
  padding: 13px 24px;
  border-radius:8px;
  text-transform: none;
}
.nav{
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-top:30px;
}
a{
  color:black !important;
  text-decoration: none;
  margin: auto 20px;
  display: flex;
  justify-content: center;
}
.v-sheet.v-toolbar:not(.v-sheet--outlined){
  box-shadow: none !important;
}
@media (max-width: 768px){
  .logo{
    display:flex;
    justify-content: center;
    padding:0px !important;
  }
  .logo_tamanho{
    width:100px !important;
  }
}
</style>
