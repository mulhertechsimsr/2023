<template>
  <div style="margin-top:80px" id="1">
    <v-container class="bloco">
            <div class="d-flex" style="justify-content:center; margin-top: 45px; margin-bottom:50px">
                <h1 class="w-100" >CONHEÇA NOSSO EVENTO</h1>
            </div>
                <v-row style="justify-content: space-evenly; padding-left: 10%; padding-right: 10%">
                    <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                        <div>
                            <img src="../assets/img/evento.svg" alt="MulherTech" width="100%"/>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                        <div>
                            <p>O Mulher Tech Sim Senhor é um grande encontro das mulheres de TI da Paraíba, promovido anualmente pelo Women Techmakers JP, um programa de alcance global do Google.</p>
                            <p>Realizado desde 2016, o evento oferece à comunidade palestras, mini-cursos e mesas redondas, com discussão não apenas de conteúdos técnicos, mas também de assuntos como diversidade, igualdade de gênero e mercado de trabalho.</p>
                        </div>
                    </v-col>
                </v-row>
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
