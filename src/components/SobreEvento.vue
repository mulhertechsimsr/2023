<template>
  <div style="margin-top:80px" id="1">
    <v-container class="bloco">
            <div class="d-flex" style="justify-content:center; margin-top: 45px; margin-bottom:50px">
                <h1 class="w-100" >CONHEÇA NOSSO EVENTO</h1>
            </div>
            <div style="padding-left: 5%; padding-right: 5%">
                    <div style="text-align: center !important;">
                        <img class="hidden" src="../assets/img/evento2.svg" alt="MulherTech" width="100%" style="border-radius:15px"/>
                        <img class="hidden2" src="../assets/img/evento.svg" alt="MulherTech" width="100%" style="border-radius:15px"/>
                        <small> Mulher Tech Sim Senhor 2022.1 </small>
                    </div>
                    <div class="mt-5">
                        <p>O Mulher Tech Sim Senhor é um grande encontro das mulheres de TI da Paraíba, promovido anualmente pelo Women Techmakers JP, um programa de alcance global do Google.</p>
                        <p>Realizado desde 2016, o evento oferece à comunidade palestras, mini-cursos e mesas redondas, com discussão não apenas de conteúdos técnicos, mas também de assuntos como diversidade, igualdade de gênero e mercado de trabalho.</p>
                    </div>
            </div>
            <div style="margin-bottom:50px">>
              <h2 class="mt-0">Edições anteriores</h2>
              <v-row justify="center">
                <a href="/2022.1/" target="__blank"> 2022.1</a>
                <p class="mr-2 ml-2">|</p>
                <a href="/2019/" target="__blank"> 2019</a>
                <p class="mr-2 ml-2">|</p>
                <a href="/2018/" target="__blank"> 2018</a>
                <p class="mr-2 ml-2">|</p>
                <a href="/2017/" target="__blank"> 2017</a>
                <p class="mr-2 ml-2">|</p>
                <a href="/2016/" target="__blank"> 2016</a>
              </v-row>
            </div>
    </v-container>
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
.hidden{
    display: none;
}
.hidden2{
    display: block;
}

@media (max-width: 600px) {
  .bloco {
    width: 90% !important;
  }

  h1{
    font-size: 22px;
  }

  p{
    font-size: 12px !important;
  }

  .hidden{
    display: block !important;
  }
  .hidden2{
    display: none !important;
  }

}

@media (min-width: 601px) and (max-width: 960px) {
  .bloco {
    width: 90% !important;
  }

  h1{
    font-size: 24px;
  }

  p{
    font-size: 14px !important;
  }
}
small{
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 163.7%;
    /* or 39px */

    text-align: justify;

    color: #FFFFFF;
}
p{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 163.7%;
    /* or 39px */

    text-align: justify;

    color: #FFFFFF;
}
.background_evento{
    height: 500px !important;
    background-color: #0E1F4B;
    background-image: url(../assets/img/inscricao_fundo.svg);
}
.bloco{
    background: rgba(3, 166, 150, 0.13);
    border: 1px solid #FF005E;
    border-radius: 20px;
}
</style>
