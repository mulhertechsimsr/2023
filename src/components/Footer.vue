<template>
  <v-footer
    class="footer"
    padless 
    style="margin-top:30px"
  >
    <v-row
      justify="center"
      no-gutters
      class="mt-10 mr-10 ml-10" 
      style="width:100%"
    >
    <v-col class="mb-10 mt-5" style="display:flex; align-items:center; justify-content: center">
        <v-img
        alt="Vuetify Logo mr-0"
        class="shrink"
        contain
        src="../assets/img/logo.svg"
        transition="scale-transition"
        width="150px"
      />
    </v-col>
    <v-col class="mb-10 coluna" style="display:flex; align-items:center; justify-content: center; flex-direction: column">
        <p>FALE CONOSCO</p>
        <div class="d-flex">
            <v-btn  href="https://www.instagram.com/mulhertechsimsr/" target="_blank">
                <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn  href="https://www.linkedin.com/company/mulher-tech-sim-senhor/" target="_blank">
                <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn  href="https://www.facebook.com/mulhertechsimsr" target="_blank">
                <v-icon>mdi-facebook</v-icon>
            </v-btn>
        </div>
    </v-col>
    <v-col style="display:flex; align-items:center; justify-content: center">
        <v-img
        alt="Vuetify Logo"
        class="shrink"
        contain
        src="../assets/img/woman.svg"
        transition="scale-transition"
        width="150px"
      />
    </v-col>
    </v-row>
    <v-row
    justify="center"
      no-gutters
      class="mt-5 mr-5 ml-5" style="text-align:center">
        <p>Mulher Tech Sim Senhor - 2022 | João Pessoa - PB, Brasil | 03 de Setembro</p>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: 'FooterEvento',
    
    data: () => ({
      
    }),
  }
</script>

<style>
.theme--light.v-btn.v-btn--has-bg{
    background-color: #f0ffff00;
    border-radius: 100px;
    color: white;
    font-weight: normal;
    
}
.v-btn--is-elevated{
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 0%), 0px 2px 2px 0px rgb(0 0 0 / 0%), 0px 1px 5px 0px rgb(0 0 0 / 0%);
}
.footer{
  background: linear-gradient(89.91deg, #0E1F4B 5.49%, #B71E87 100.75%) !important;

}


</style>
