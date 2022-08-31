<template>
  <div style="margin-top:50px" id="2">
    <v-container class="bloco">
        <div class="d-flex" style="justify-content:center; margin-top: 45px; margin-bottom:15px">
            <h1 class="w-100">PROGRAMAÇÃO</h1>
        </div>
        <div class="d-flex" style="justify-content:center; margin-bottom:30px;">
           <template>
            <v-timeline class="tamanho" :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item class="mt-5" :color="item.color"
              v-for="item in items"
              :key="item">
                  <template v-slot:opposite>
                    <span :class="`headline font-weight-bold`" style="color:#D9CD2B;" >{{item.horario}}</span>
                  </template>
                  <div class="headline font-weight-bold text-center" style="color:#D9CD2B;"  v-if="$vuetify.breakpoint.smAndDown">
                      {{item.horario}}
                  </div>
                  <template>
                      <v-card class="elevation-2 card" :color="i.color" style="margin-top: 20px;" v-for="i in item.card" :key="i">
                          <v-card-title class="titulo w-100">
                            {{i.titulo}}
                          <v-icon v-if="i.eventos" small class="icon" style="font-size:30px !important; margin-left: auto" v-on:click="exibir = !exibir">mdi-cursor-default-click-outline</v-icon> 
                          </v-card-title>
                        <v-card-text v-if="i.palestrante" class="descricao">{{i.palestrante}} <br> {{i.profissao}}</v-card-text>
                        <v-timeline v-if="exibir && i.eventos" style="padding-bottom: 10px">
                          <v-card class="elevation-2 card" :color="evento.color" style="margin-top: 10px; width:90%; margin-left: auto; margin-right: auto; margin-bottom: 20px" v-for="evento in i.eventos" :key="evento">
                            <v-card-title class="titulo" >
                              {{evento.titulo}}
                            </v-card-title>
                            <v-card-text v-if="evento.palestrante" class="descricao">{{evento.palestrante}} <br> {{evento.profissao}}</v-card-text>
                          </v-card>
                        </v-timeline>
                      </v-card>
                    
                  </template>
              </v-timeline-item>
            </v-timeline>
        </template>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',

     data: () => ({
      exibir: false,
      items: [
        {
          card: [
            {
              titulo:'Credenciamento',
              palestrante:'',
              color: '#BA004D'
            }
          ],
          horario: '08:00',
          color: '#BA004D'
          
        },
        {
          card: [
            {
              titulo:'Abertura',
              palestrante:'',
              color: '#009283'
            }
          ],
          horario: '09:00',
          color: '#009283'
          
        },
        {
          card: [
            {
              titulo:'Palestra 1 - Virando o Jogo: Representatividade Feminina, mercado e suas possibilidades',
              palestrante:'Taty Calixto',
              profissao:'Consultora de Qualificação - Cesar School',
              color: '#5B008F'
            }
          ],
          horario: '09:30',
          color: '#5B008F'
          
        },
        {
          card: [
            {
              titulo:'Palestra 2 -  O que é ser Mulher?',
              palestrante:'Thalita Matta Machado',
              profissao:'Head de Cultura & Desenvolvimento - MaxMilhas',
              color: '#BA004D'
            }
          ],
          horario: '10:20',
          color: '#BA004D'
          
        },
        {
          card: [
            {
              titulo:'Palestra 3 - Luz, câmera, ação! Sendo protagonista da própria história',
              palestrante:'Juliana Saraiva',
              profissao:'Professora de Computação - UFPB',
              color: '#009283'
            }
          ],
          horario: '11:10',
          color: '#009283'
          
        },
        {
          card: [
            {
              titulo:'Almoço',
              palestrante:'',
              color: '#5B008F'
            }
          ],
          horario: '12:00',
          color: '#5B008F'
          
        },
        {
          card: [
            {
              titulo:'Foto Oficial',
              palestrante:'',
              color: '#BA004D'
            }
          ],
          horario: '13:30',
          color: '#BA004D'
          
        },
        {
          card: [
            {
              titulo:'Code Game: Olímpiada de Programação',
              palestrante:'',
              color: '#BA004D'
            },
            {
              titulo:'Oficinas',
              palestrante:'',
              color: '#009283',
              eventos:[
                {
                  titulo:'Como tornar seu LinkedIn atraente às empresas',
                  palestrante:'Laís Layme',
                  profissao:"Globoplay",
                  color: '#007065'
                },
                {
                  titulo:'Crie seu primeiro jogo 2D sem código!',
                  palestrante:'Taty Calixto',
                  profissao:"CESAR School",
                  color: '#007065'
                },
                {
                  titulo:'Figma - dando start no UX',
                  palestrante:'Emanuelly Assuéria',
                  profissao:"Todos Empreendimentos",
                  color: '#007065'
                },
                {
                  titulo:'Plano de Voo: Líder de Si Mesma',
                  palestrante:'Thalita Machado',
                  profissao:"MaxMilhas",
                  color: '#007065'
                },
                {
                  titulo:'Análise de Dados: um "idioma" que você precisa aprender!',
                  palestrante:'Thais Ramos',
                  profissao:"Minsait",
                  color: '#007065'
                },
              ]
            },
            {
              titulo:'Mentoria',
              palestrante:'',
              color: '#5B008F',
              eventos: [
                {
                  titulo:'Como dar os primeiros passos com ReactJS',
                  palestrante:'Laura Campos e Nelly Stanford',
                  profissao:"Dock",
                  color: '#3E0062'
                },
              ]
            },
            {
              titulo:'Rodas de conversa',
              palestrante:'',
              color: '#BA004D',
              eventos: [
                {
                  titulo:'Mulher e Tecnologia: representatividade no mercado de trabalho',
                  palestrante:'Erica Helena e Ilcelânia Silva',
                  profissao:"VOX Tecnologia",
                  color: '#860038'
                },
                {
                  titulo:'Desenvolvimento de sites: Carreira e Mercado',
                  palestrante:'Laura Campos e Nelly Stanford',
                  profissao:"Dock",
                  color: '#860038'
                },
              ]
            },
            {
              titulo:'Palestras',
              palestrante:'',
              color: '#009283',
              eventos: [
                {
                  titulo:'Qualidade em times ágeis: antecipando os problemas e acelerando as entregas',
                  palestrante:'Vanessa Sidrim',
                  profissao:"FreteBras",
                  color: '#007065'
                },
                {
                  titulo:'Engenharia de Requisitos: uma área de possibilidades além da programação',
                  palestrante:'Alice Martins',
                  profissao:"SOGO",
                  color: '#007065'
                },
                {
                  titulo:'Como ter uma carreira de sucesso',
                  palestrante:'Bianca Costa e Suzana Freitas',
                  profissao:"Phoebus",
                  color: '#007065'
                },
              ]
            },
          ],
          horario: '14:00',
          color: '#ACA000'
        },
        {
          card: [
            {
              titulo:'Novidades e oportunidades das empresas',
              palestrante:'',
              color: '#009283'
            }
          ],
          horario: '16:20',
          color: '#009283'
          
        },
        {
          card: [
            {
              titulo:'Sorteios e avisos',
              palestrante:'',
              color: '#5B008F'
            }
          ],
          horario: '17:10',
          color: '#5B008F'
          
        },
        {
          card: [
            {
              titulo:'Encerramento com Pocket Show',
              palestrante:'',
              color: '#BA004D'
            }
          ],
          horario: '17:30',
          color: '#BA004D'
          
        },
      ],
    }),

  }
</script>

<style>
.v-timeline-item__divider , .v-timeline-item__opposite{
  margin-top: 45px
}
.titulo{
  color: #FFFFFF;
  font-size: 16px !important;
  word-break: normal !important;
  width: 100% !important;
}
.descricao{
  color:#FFFFFF !important;
  text-align: right;
  margin-bottom: 10px;
}
@media (max-width: 600px) {
  .bloco {
    width: 90% !important;
  }

  .tamanho{
    width: 100%;
  }

  h1{
    font-size: 22px;
  }

  p{
    font-size: 12px !important;
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
p{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 163.7%;
    /* or 39px */

    text-align: justify;

    color: #FFFFFF;
}
.bloco{
    background: rgba(3, 166, 150, 0.13);
    border: 1px solid #FF005E;
    border-radius: 20px;
}
</style>
