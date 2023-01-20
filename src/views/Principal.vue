<template>
  <v-app>
    <v-main class="background" >
      <NavBar/>
      <Header/>
      <!--
      <Inscricoes/>
      <Cronometro />
      <SobreEvento/>
      <Programacao/>
      <InscricaoGarante/>
      <PerguntasFrequentes/>
      <Patrocinadores/>
      <CodigoConduta/>
      <Local/>
      <FooterEvento/> -->
      
    </v-main>
  </v-app>
</template>

<style>


.background{
    width: 100vw;
    background-size: cover !important;
    background: #EFF8EA;
    background-image: url(../assets/img/fundo_home.png);
    
}

</style>

<script>
import NavBar from '@/components/NavBar';
import Header from '@/components/Header'

export default {
  name: 'PaginaPrincipal',

  components: {
    NavBar,
    Header,
    // Inscricoes,
    // Cronometro,
    // SobreEvento,
    // Programacao,
    // CodigoConduta,
    // FooterEvento,
    // Local,
    // InscricaoGarante,
    // PerguntasFrequentes,
    // Patrocinadores,
  },

  data: () => ({
    //
  }),
};
</script>