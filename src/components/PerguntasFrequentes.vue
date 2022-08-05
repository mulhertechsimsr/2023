<template>
  <div style="margin-top:50px" id="6">
      <v-container class="bloco">
        <div class="d-flex" style="justify-content:center; margin-top: 45px; margin-bottom:50px">
                <h1 class="w-100" >PERGUNTAS FREQUENTES</h1>
            </div>
        <div style="padding-left: 5%; padding-right: 5% ; margin-bottom:50px">
          <v-expansion-panels focusable>
            <v-expansion-panel>
                <v-expansion-panel-header>Onde posso obter mais informações sobre o evento?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  Em nosso site (https://www.mulhertechsimsr.com.br/) e também em nossas redes sociais (Instagram, Facebook e LinkedIn)
                </v-expansion-panel-content>
              </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels focusable>
            <v-expansion-panel>
                <v-expansion-panel-header>Qual o valor da inscrição?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  Teremos quatro lotes com preços progressivos de R$ 15 a R$ 30. Sempre que um lote acabar, outro será iniciado.
                </v-expansion-panel-content>
              </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels focusable>
            <v-expansion-panel>
                <v-expansion-panel-header>Há alguma vantagem entre os lotes?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  O primeiro lote terá direito a um bottom especial.
                </v-expansion-panel-content>
              </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels focusable>
            <v-expansion-panel>
                <v-expansion-panel-header>Quem pode se inscrever?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  O evento é restrito para mulheres (cis, trans e travestis).
                </v-expansion-panel-content>
              </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels focusable>
            <v-expansion-panel>
                <v-expansion-panel-header>Há alguma vantagem para caravanas?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  Se for para o evento com um grupo, informe o nome dele (Ex: Caravana Cidade X) na inscrição. As caravanas vão receber um kit especial no dia do evento.
                </v-expansion-panel-content>
              </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels focusable>
            <v-expansion-panel>
                <v-expansion-panel-header>O que a inscrição inclui?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  Além de garantir acesso a toda a programação do evento (palestras, oficinas, etc) e a um kit participante com vários mimos, a inscrição também garante alimentação durante todo o evento, intérprete de libras e Espaço Kids para as mães que desejarem deixar seus filhos.
                </v-expansion-panel-content>
              </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels focusable>
            <v-expansion-panel>
                <v-expansion-panel-header>Como posso pagar minha inscrição?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  Usando pix, boleto ou cartão.              
                </v-expansion-panel-content>
              </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels focusable>
            <v-expansion-panel>
                <v-expansion-panel-header>Posso doar uma inscrição?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  Caso queira ser solidária e ajudar outra mulher a participar, entre em contato com a organização do evento pelo e-mail mulhertechsimsr@gmail.com.
                </v-expansion-panel-content>
              </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels focusable>
            <v-expansion-panel>
                <v-expansion-panel-header>Existe inscrição social ou gratuita?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  Não queremos deixar ninguém de fora do evento! Caso você não possa pagar, entre em contato com a organização pelo e-mail mulhertechsimsr@gmail.com e daremos um jeito.
                </v-expansion-panel-content>
              </v-expansion-panel>
          </v-expansion-panels>
        </div>
    </v-container>
  </div>
</template>

<script>
    
  export default {
    name: 'PerguntasFrequentes',
    data () {
      return {
        panel: [],
      }
    },
    methods: {
      // Create an array the length of our items
      // with all values as true
      all () {
        this.panel = [...Array(this.items).keys()].map((k, i) => i)
      },
      // Reset the panel
      none () {
        this.panel = []
      },
    },
  }
</script>

<style>
.v-expansion-panel-header{
  font-weight: 500;
  font-size:16px;
}
.v-expansion-panel-content{
  padding-top:15px;
}
.v-expansion-panel{
    margin-top: 16px !important;
}
.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{
  color:white !important
}
.theme--light.v-expansion-panels .v-expansion-panel{
  background: rgba(3, 166, 150, 0.13) !important;
  color:white !important;
}
.bloco{
    background: rgba(3, 166, 150, 0.13);
    border: 1px solid #FF005E;
    border-radius: 20px;
}
</style>
