<template>
  <div style="margin-top:60px" id="1">
    <v-container class="bloco">
            <div class="d-flex" style="justify-content:center; margin-top: 45px; margin-bottom:20px">
                <h1 class="w-100" >CLIQUE E DESCUBRA O QUE SUA INSCRIÇÃO GARANTE</h1>
            </div>
            <v-row style="justify-content:center;">
                <div class="coluna" sm="12">
                    <input type="checkbox" name="" id="carta1">
                    <div class="container">
                        <div class="item card1">
                            <label for="carta1" class="estilo"></label>
                        </div>
                    </div>
                </div>
                <div class="coluna">
                    <input type="checkbox" name="" id="carta2">
                    <div class="container">
                        <div class="item card2">
                            <label for="carta2" class="estilo"></label>
                        </div>
                    </div>
                </div>
                <div class="coluna">
                    <input type="checkbox" name="" id="carta3">
                    <div class="container">
                        <div class="item card3">
                            <label for="carta3" class="estilo"></label>
                        </div>
                    </div>
                </div>   
            </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'InscricaoGarante',

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

  label.estilo {
    height: 400px !important;
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

  .coluna{
    width: 90% !important;
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
  label.estilo {
    height: 400px !important;
    }
}

@media (min-width: 961px) {
  label.estilo {
    height: 400px !important;
    }
}

.coluna{
    width: 30%;
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

.card1 {
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    border-radius: 15px;
    background-image: url("../assets/img/carta1_tras.svg");
}

.card2 {
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    border-radius: 15px;
    background-image: url("../assets/img/carta2_tras.svg");
}

.card3 {
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    border-radius: 15px;
    background-image: url("../assets/img/carta3_tras.svg");
}

.item:hover {
    cursor: pointer;
    transform: rotate(0deg) scale(1);
    transition: .5s all ease;
    z-index: 400;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.16);
}

#carta1:checked~.container>.card1 {
    transform: rotateY(180deg) scaleX(-1);
    background-image: url("../assets/img/carta1_frente.svg");
}

#carta2:checked~.container>.card2 {
    transform: rotateY(180deg) scaleX(-1);
    background-image: url("../assets/img/carta2_frente.svg");
}

#carta3:checked~.container>.card3 {
    transform: rotateY(180deg) scaleX(-1);
    background-image: url("../assets/img/carta3_frente.svg");
}

label.estilo {
    display: block;
    height: 400px;
}

input {
    display: none;
}

#mostra {
   display:none;
}

#toggle-1 {
   display:none;
}

/* CSS quando o checkbox está marcado */
#toggle-1:checked ~ #mostra {
   display:block;
}
</style>
