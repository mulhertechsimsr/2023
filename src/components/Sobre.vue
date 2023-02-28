<template>
    <div id="1" style="padding-bottom: 100px;" class="sobre">
        <div class="container diferenciais">
            <h1 class="titulo_tema pt-0"> Sobre o Mulher Tech</h1>
            <div class="container">
                <div class="row d-flex justify-content-center" style="margin-top: 80px; margin-bottom: 80px">
                    <div class="col-sm-3 col-4">
                        <v-card
                        elevation="20"
                        class="h-100"
                        style="padding: 10px; cursor: pointer;"
                        @click="mudar_sobre('mulhertech')"
                        >
                        <v-card-text class="card_click">
                            <div class="d-flex justify-content-center">
                                <img src="../assets/img/icon_sobre.png" width="50"/>
                            </div>
                            
                            <p class="card_title2 mt-5 mb-0">
                                Nossa <br/> história
                            </p>
                            </v-card-text>
                        </v-card>
                    </div>

                    <div class="col-sm-3 col-4">
                        <v-card
                        elevation="10"
                        class="h-100"
                        style="padding: 10px; cursor: pointer;"
                        @click="mudar_sobre('edicao_anterior')"
                        >
                        <v-card-text class="card_click">
                            <div class="d-flex justify-content-center">
                                <img src="../assets/img/icon_sobre.png" width="50"/>
                            </div>
                            
                            <p class="card_title2 mt-5 mb-0">
                                Edições <br/> anteriores
                            </p>
                            </v-card-text>
                        </v-card>
                    </div>

                    <div class="col-sm-3 col-4">
                        <v-card
                        elevation="10"
                        class="h-100"
                        style="padding: 10px; cursor: pointer;"
                        @click="mudar_sobre('woman_tech')"
                        >
                        <v-card-text class="card_click">
                            <div class="d-flex justify-content-center">
                                <img src="../assets/img/icon_sobre.png" width="50"/>
                            </div>
                            
                            <p class="card_title2 mt-5 mb-0">
                                Woman Tech <br/> Makers
                            </p>
                            </v-card-text>
                        </v-card>
                    </div>
                </div>

                <div class="row mulher_tech" v-if="mulhertech === true">
                    <div class="col-lg-6">
                        <p class="subtitle_sobre">Nossa História</p>
                        <h2 class="title_sobre">Um evento de tecnologia de mulheres para mulheres desde 2016...</h2>
                        <p class="mt-5 text_sobre">Nosso público são estudantes e profissionais de toda a Paraíba e de estados vizinhos com o objetivo de atrair cada vez mais mulheres para esse mundo, não só com conteúdos técnicos mas também com discussões sobre diversidade, igualdade de gênero, carreira e mercado de trabalho.</p>
                    </div>
                    <div class="col-lg-6">
                        <img src="../assets/img/sobre_mulhertech.png" width="100%"/>
                    </div>
                </div>

                <div class="row mulher_tech justify-content-center" v-if="edicao_anterior === true">
                    <h2 class="title_sobre pb-5">Confira nossas edições anteriores</h2>
                    <img src="../assets/img/sobre.png" width="100%" height="50%"/>
                </div>

                <div class="row mulher_tech" v-if="woman_tech === true">
                    <div class="col-lg-6">
                        <p class="subtitle_sobre">Realização</p>
                        <h2 class="title_sobre">O programa Women Techmakers do Google oferece visibilidade para mulheres...</h2>
                        <p class="mt-5 text_sobre">O evento é uma iniciativa do Women Techmakers (WTM) João Pessoa, que une atualmente várias comunidades de mulheres do Estado da Paraíba.
                        O WTM é um programa global do Google criado em 2014 para incentivar mulheres na área de tecnologia.</p>
                    </div>
                    <div class="col-lg-6 image_wtm">
                        <img src="../assets/img/wtm.png" width="70%"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TemaVue',

    data() {
      return {
        mulhertech: true,
        edicao_anterior: false,
        woman_tech: false
      };
    },

    methods: {
      mudar_sobre(sobre) {
        if (sobre === 'mulhertech'){
            this.mulhertech = true
            this.edicao_anterior = false
            this.woman_tech = false
        } else if (sobre === 'edicao_anterior'){
            this.mulhertech = false
            this.edicao_anterior = true
            this.woman_tech = false
        } else{
            this.mulhertech = false
            this.edicao_anterior = false
            this.woman_tech = true
        }
      }
    }
  }
</script>

<style>
.sobre{
    background: url(../assets/img/bottom_left_sobre.png) bottom left no-repeat,
    url(../assets/img/top_left_sobre.png) top left no-repeat,
    url(../assets/img/top_right_sobre.png) top right no-repeat, 
    url(../assets/img/top_right_sobre2.png) top right no-repeat,
    ;
    background-position: 0% 95%, 0% 5%, 100% 5%, 100% 10%;
}

.text_sobre{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 34px;
    color: #4B5262;
}

.image_wtm{
    display: flex;
    justify-content: flex-end;
}

.card_title2{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -1.2px;
    color: #0F172A;
}

.subtitle_sobre{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 32px;
    color: #4B5262;
}

.title_sobre{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 46px;
    letter-spacing: -1.2px;
    color: #0F172A;
}
</style>
