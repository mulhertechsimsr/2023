<template>
  <v-app>
    <v-main class="background" >
      <div class="sessao-1">
        <NavBar/>
        <Header/>
      </div>
      <div>
        <!-- <Cronometro/> -->
      </div>
      <div class="sessao-2">
          <Tema class="background_tema"/>
        </div>
      <div class="sessao-3">
        <Evento/>
        <Diferenciais />
      </div>
      <Programacao class="background_escuro"/>
      <Sobre/>
      <Faq class="background_escuro" />
      <Patrocinio/>
      <Parceria/>
      <Footer/> 
      
    </v-main>
  </v-app>
</template>

<style>


.background{
    width: 100vw;
    background-size: cover !important;
    background: #EFF8EA;
    
}

.background_escuro{
    width: 100vw;
    background-size: cover !important;
    background: rgba(189, 229, 207, 0.6);
}


.sessao-1{
  background: url(../assets/img/top-right-navbar.png) top right no-repeat,
              url(../assets/img/top-left-navbar2.png) top left no-repeat,
              url(../assets/img/top-left-navbar.png) top left no-repeat;
  background-size: auto, 12% 90%, auto
}

.sessao-2{
  background: url(../assets/img/bottom-left-tema.png) center left no-repeat,
              url(../assets/img/bottom-left-tema2.png) bottom left no-repeat,
              url(../assets/img/top-right-tema2.png) top right no-repeat,
              url(../assets/img/top-right-tema.png) center right no-repeat, 
              rgba(189, 229, 207, 0.6);
  
}

.sessao-3{
  background: url(../assets/img/center-right-evento2.png) center right no-repeat,
              url(../assets/img/center-right-evento.png) center right no-repeat;
  background-position: 100% 30%, 100% 50%;
}

h1{
    font-style: normal;
    font-weight: 700;
    line-height: 33px;
    text-align: left;
    margin-bottom: 30px!important;
}

@media only screen and (max-width: 768px)
{ 
  h1{
    font-size:30px !important;
  }
  .title_sobre{
    text-align: center;
  }
  .subtitulo{
    font-size: 20px;
  }
  .sessao-1{
    background-size: 15% 30%, 15% 80%, 15% 60%;
  }
  .sessao-2{
    background-size:0%, 15% 50%, 0%, 15%;
  }

  .card_title2{
    font-size: 20px;
  }
  .coluna{
    text-align: center;
    margin-top: 10px;
  }
  .back_evento{
    background-size: 50% 30%;
    background-position: 5% 80%;
  }
  
  .card_click{
    padding: 5px;
  }
  .video{
    display:flex;
    align-items: center;
  }

  .image_wtm{
    justify-content: center !important;
  }



  .sessao-3{
    background-position: 100% 30%, 100% 40%;
    background-size: 20% 20%, 20% 20%;
  }

  .card_diferencial2{
    margin-top: 20px;
  }
  .card_diferencial{
    margin-top: 20px;
  }

  .sobre{
    background-size: auto, 0%, 0%, 0%;
    background-position: 0% 95%, 0% 5%, 100% 5%, 100% 10%;
  }

  .logo_footer{
    justify-content: center;
}
}

@media only screen and (max-width: 576px)
{
  .sessao-1{
    background-size: 15% 30%, 20% 40%, 20% 35%;
  }

  .sessao-2{
    background-size:0%,0%,0%,0%;
  }
  .back_evento{
    background-size: 80%;
    background-position: 5% 40%;
  }
  .sessao-3{
    background-position: 100% 30%, 100% 32%;
    background-size: 20% 8%, 20% 10%;
  }

  .card_diferencial{
    margin-top: 20px;
  }
  
  .title_sobre{
    font-size: 30px;
    text-align: center;
    line-height: 35px;
  }

  .image_wtm{
    justify-content: center !important;
  }

  .card_title2{
    font-size: 16px !important;
    line-height: 25px;
  }

  .card_click{
    padding: 5px;
  }

  .sobre{
    background-size: auto, 0%, 0%, 0%;
    background-position: 0% 95%, 0% 5%, 100% 5%, 100% 10%;
  }

  .contatos{
    justify-content: center;
  }

  .logo_footer{
    justify-content: center;
}
  .centraliza{
      justify-content: center;
  }

  .parceria{
    background-size: 0%, 0%;
}


}
</style>

<script>
import NavBar from '@/components/NavBar';
import Header from '@/components/Header'
import Tema from '@/components/Tema.vue';
import Evento from '@/components/Evento.vue'
import Diferenciais from '@/components/Diferenciais.vue';
import Sobre from '@/components/Sobre.vue'
import Parceria from '@/components/Parceria.vue';
import Footer from '@/components/Footer.vue';
// import Cronometro from '@/components/Cronometro.vue';
import Faq from '@/components/Faq.vue';
import Patrocinio from '@/components/Patrocinio.vue'
import Programacao from '@/components/Programacao.vue'


export default {
  name: 'PaginaPrincipal',

  components: {
    NavBar,
    Header,
    Tema,
    Evento,
    Diferenciais,
    Sobre,
    Parceria,
    Footer,
    // Cronometro,
    Faq,
    Patrocinio,
    Programacao
},

  data: () => ({
    //
  }),
};
</script>