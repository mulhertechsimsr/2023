<template>
  <div>
      <v-container class="bloco">
        <div class="d-flex" style="justify-content:center; margin-bottom:50px">
            <h1 class="titulo_tema"> Perguntas Frequentes</h1>
            </div>
        <div style="padding-left: 5%; padding-right: 5% ;">
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
                    Teremos cinco lotes com preços progressivos de R$ 20 a R$ 50. Sempre que um lote acabar, outro será iniciado.
                </v-expansion-panel-content>
              </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels focusable>
            <v-expansion-panel>
                <v-expansion-panel-header>Há alguma vantagem entre os lotes?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  O primeiro lote terá direito a um brinde especial.
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
          <v-expansion-panels focusable>
            <v-expansion-panel>
                <v-expansion-panel-header>Até quando posso solicitar reembolso?</v-expansion-panel-header>
                <v-expansion-panel-content>
                    As solicitações de reembolso serão atendidas até 10 dias antes do evento, após essa data ficará inviável emitir reembolso, apesar da configuração da ferramenta.
                </v-expansion-panel-content>
              </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels focusable>
            <v-expansion-panel>
                <v-expansion-panel-header>Precisa de transporte para o local do evento?</v-expansion-panel-header>
                <v-expansion-panel-content>
                    Não queremos que a distância seja um empecilho para ninguém! Pensando nisso, fizemos uma parceria com Pedroza Receptivo e haverá vans e ônibus saindo da UFPB para o Centro de Convenções 1h antes do evento, e retornando após o encerramento pelo valor único de R$ 30,00. Para adquirir esse serviço ou obter mais detalhes, basta entrar em contato pelo email transporte.mulhertechsimsr@gmail.com
                </v-expansion-panel-content>
              </v-expansion-panel>
          </v-expansion-panels>
          <a class="link mx-0 d-flex justify-content-start" style="margin-top:32px" target="_blank" download href="/files/codigo_conduta.pdf">Acesse aqui nosso código de conduta</a>
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
.link, .link:hover{
    color:#FF005E !important;
    margin-bottom:50px;
    text-decoration-line: underline;
    font-family: 'Noticia Text';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
}

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
  color:#FF005E !important;
  font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
}
.theme--light.v-expansion-panels .v-expansion-panel{
    background: white !important;
    color:#FF005E !important;
}
.v-expansion-panel-content__wrap{
    color: #202020 !important;
}

</style>