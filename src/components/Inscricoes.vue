<template>
  <div>
    <div class="gradiente">
        <div>
            <h2 class="subtitulo">PREPARADAS PARA MAIS UMA AVENTURA?</h2>
        </div>
        <div class="d-flex" style="justify-content: center; ">
            <h1 class="titulo" style="width: 50%;">O MAIOR ENCONTRO DE MULHERES DE TI DA PARAÍBA ESTÁ DE VOLTA!!</h1>
            
        </div>
        <div class="d-flex mt-5" style="justify-content: center; ">
            <h3> INSCRIÇÕES ESGOTADAS </h3>
            
        </div>
        
        <v-row class="mt-5 mb-10 mr-2 ml-2" style="justify-content: center; ">
            <v-col cols="12" sm="12" md="3" lg="3" xl="3" style="width: 50%"> 
              <v-btn  class="aparece botao d-flex" href="https://mulhertechsimsr.lojavirtualnuvem.com.br/" target="_blank" style="
background: linear-gradient(180deg, #FF005E 0%, #31005A 100%); width: 100%">
                <span>VISITE NOSSA LOJA</span>
              </v-btn>
            </v-col>
        </v-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',

    data: () => ({
    }),
  }
</script>

<style>
.background_inscricoes{
    height: 400px !important;
    background-color: #0E1F4B;
    background-image: url(../assets/img/inscricao_fundo.svg);
}
.gradiente{
    display:flex;
    flex-direction: column;
    background: linear-gradient(90.14deg, rgba(254, 23, 181, 0) -0.05%, rgba(254, 23, 181, 0.44) 49.97%, rgba(254, 23, 181, 0) 96%);;
}

.botao{
  background: linear-gradient(180deg, #6605CB 0%, #160029 100%);
  border-radius: 30px;
  font-style: normal;
  font-weight: bold;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: 30px !important;
  padding-bottom: 30px !important;
  color: #FFFFFF;
}

@media (max-width: 600px) {
  .subtitulo {
    font-size: 12px;
  }
  .titulo {
    font-size: 18px !important;
    width: 90% !important;
  }
  .embreve {
    font-size: 12px;
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .subtitulo {
    font-size: 14px;
  }
  .titulo {
    font-size: 24px;
    width: 90% !important;
  }
  .embreve {
    font-size: 14px;
  }
}
</style>
