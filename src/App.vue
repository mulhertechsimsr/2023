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
      <CodigoConduta/>
      <Local/>
      <FooterEvento/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import Header from './components/Header.vue';
import Inscricoes from './components/Inscricoes.vue';
import Cronometro from './components/Cronometro.vue';
import SobreEvento from './components/SobreEvento.vue';
import Programacao from './components/Programacao.vue';
import Local from './components/LocalEvento.vue';
import CodigoConduta from './components/CodigoConduta.vue';
import InscricaoGarante from './components/InscricaoGarante.vue';
import FooterEvento from './components/Footer.vue';


export default {
  name: 'App',

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
  },

  data: () => ({
    //
  }),
};
</script>