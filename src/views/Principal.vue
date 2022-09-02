<template>
  <v-app>
    <v-main class="background" >
      <NavBar/>
      <Header/>
      <Inscricoes/>
      <Cronometro />
      <SobreEvento/>
      <Programacao/>
      <InscricaoGarante/>
      <PerguntasFrequentes/>
      <Patrocinadores/>
      <CodigoConduta/>
      <Local/>
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
    font-size: 16px;
    line-height: 177%;
    text-align: center;
    color: #D9CD2B;
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
import NavBar from '@/components/NavBar';
import Header from '@/components/Header.vue';
import Inscricoes from '@/components/Inscricoes.vue';
import Cronometro from '@/components/Cronometro.vue';
import SobreEvento from '@/components/SobreEvento.vue';
import Programacao from '@/components/Programacao.vue';
import Local from '@/components/LocalEvento.vue';
import CodigoConduta from '@/components/CodigoConduta.vue';
import InscricaoGarante from '@/components/InscricaoGarante.vue';
import PerguntasFrequentes from '@/components/PerguntasFrequentes.vue';
import FooterEvento from '@/components/Footer.vue';
import Patrocinadores from '@/components/Patrocinadores.vue';

export default {
  name: 'PaginaPrincipal',

  components: {
    NavBar,
    Header,
    Inscricoes,
    Cronometro,
    SobreEvento,
    Programacao,
    CodigoConduta,
    FooterEvento,
    Local,
    InscricaoGarante,
    PerguntasFrequentes,
    Patrocinadores,
  },

  data: () => ({
    //
  }),
};
</script>