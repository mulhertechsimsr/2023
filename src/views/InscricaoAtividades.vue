<template>
  <v-app>
    <v-main class="background" >
      <NavBar/>
      <CodigoConduta/>
      <FooterEvento/>
      
    </v-main>
  </v-app>
</template>


<style>
h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 177%;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 2px 2px  black;
    margin: 0px;
}

h2{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 177%;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 2px 2px  black;
    margin: 0px;
    margin-top: 50px;
    margin-bottom: 20px;
}

h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 177%;
    text-align: left;
    color: #FF5CCC;
    text-shadow: 2px 2px  black;
    margin: 0px;
}


.bloco{
    width:70%
}

.background{
    width: 100vw;
    background-size: cover !important;
    background-color: #0E1F4B;
    background-image: url(../assets/img/fundo.svg);
}

</style>

<script>
import NavBar from '@/comp/NavBar';
import FooterEvento from '@/comp/Footer.vue';
import CodigoConduta from '@/comp/CodigoConduta.vue';

export default {
  name: 'InscricaoAtividades',

  components: {
    NavBar,
    CodigoConduta,
    FooterEvento,
  },

  data: () => ({
    //
  }),
};
</script>