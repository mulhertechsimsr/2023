<template>
    <div id="6" style="padding-bottom: 60px;">
            <div class="d-flex" style="justify-content:center; margin-bottom:50px; flex-direction: column;">
                <div class="container">
                    <h1 class="titulo_tema mb-2"> Programação</h1>
                <p class="subtitulo mt-0" style="text-align:center">Confira as atrações do evento e não deixe de se inscrever nas atividades </p>
                </div>
                
                <div class="container d-flex largura centraliza_mobile" style="margin-top:40px">
                    <v-btn id="manha" style="padding: 20px 12px" :class="isActiveManha" @click="mudarProg('manha')">
                        <div class="d-flex align-items-center">
                           <span class="material-symbols-outlined mr-2">
                                light_mode
                            </span>
                                Manhã 
                        </div>
                    
                    </v-btn>
                    <v-btn id="tarde" :class="isActiveTarde" style="padding: 20px 12px" @click="mudarProg('tarde')">
                        <div class="d-flex align-items-center">
                            <span class="material-symbols-outlined mr-2" style="color: #1C1B1F;">
                            partly_cloudy_day
                            </span>
                                Tarde
                        </div>
                    
                    </v-btn>
                </div>
                
            </div>
            <div class="container largura" v-if="manha">
                <div class="credenciamento mt-5" style="padding-top: 3%;">
                    <v-card variant="outlined" id="card_atividade" style="position:relative">
                        <v-card-item>
                                <div class="titulo_card">
                                    Credenciamento
                                </div>
                            </v-card-item>
                    </v-card>
                </div>
                <div class="boas_vindas mt-5" style="padding-top: 3%;">
                    <v-card variant="outlined" id="card_atividade" style="position:relative">
                        <v-card-item>
                                <div class="titulo_card">
                                    Boas Vindas
                                </div>
                            </v-card-item>
                    </v-card>
                </div>
                <div class="palestra1 mt-5" style="padding-top: 3%;">
                    <v-card variant="outlined" id="card_atividade" style="position:relative">
                        <v-card-item>
                                <div class="titulo_card">
                                    Palestra: Como considerar a experiência da pessoa usuária no desenvolvimento de Software
                                </div>
                                <div class="subtitulo_card">
                                    Taciana Pontual | Professora @ UFRPE
                                </div>
                            </v-card-item>
                    </v-card>
                </div>
                <div class="palestra2 mt-5" style="padding-top: 3%;">
                    <v-card variant="outlined" id="card_atividade" style="position:relative">
                        <v-card-item>
                                <div class="titulo_card">
                                    Palestra: Você pagou quanto para fazerem esse código?
                                </div>
                                <div class="subtitulo_card">
                                    Soraya Roberta | Doutoranda @ UFRPE
                                </div>
                            </v-card-item>
                    </v-card>
                </div>
                <div class="palestra3 mt-5" style="padding-top: 3%;">
                    <v-card variant="outlined" id="card_atividade" style="position:relative">
                        <v-card-item>
                                <div class="titulo_card">
                                    Palestra: Do Caps Lock ao Top Voice
                                </div>
                                <div class="subtitulo_card">
                                    Silvia Coelho | Fundadora @ Elas Programam
                                </div>
                            </v-card-item>
                    </v-card>
                </div>
                <div class="almoco mt-5" style="padding-top: 3%;">
                    <v-card variant="outlined" id="card_atividade" style="position:relative">
                        <v-card-item>
                                <div class="titulo_card">
                                    Almoço
                                </div>
                            </v-card-item>
                    </v-card>
                </div>
            </div>
            <div class="container largura" v-if="tarde">
                <div class="foto mt-5" style="padding-top: 3%;">
                    <v-card variant="outlined" id="card_atividade" style="position:relative">
                        <v-card-item>
                                <div class="titulo_card">
                                    Foto Oficial
                                </div>
                            </v-card-item>
                    </v-card>
                </div>
                <div class="atividades mt-5" style="padding-top: 3%;">
                    <v-card variant="outlined" id="card_atividade" style="position:relative">
                        <v-card-item>
                                <div class="titulo_card">
                                    Início das atividades (em paralelo)
                                </div>
                            </v-card-item>
                    </v-card>
                </div>
                <div class="mt-5">
                    <v-card variant="outlined" id="card_atividade" style="position:relative;">
                        <v-card-item class="row align-items-center justify-content-start margem">
                            <div>
                                <div class="d-flex my-auto mt-2 hidden" id="esconde" style="align-items: center;">
                                    <p class="ml-2 inscricoes_abertas" style="margin-bottom: 0px !important;">
                                        Inscrições esgotadas
                                    </p>
                                </div>
                                <div class="titulo_card" style="padding-top: 16px ">
                                    Code Game
                                </div>
                                
                                <!-- <div class="subtitulo_card">
                                    Apoio @ Alura
                                </div> -->
                            </div>
                            <div class="d-flex my-auto hidden2" id="esconde" style="align-items: center;">
                                <p class="inscricoes_abertas" style="margin-bottom: 0px !important;">
                                    Inscrições esgotadas
                                </p>
                            </div>
                            <!-- <v-btn to="/inscricao" target="_blank" id="inscricao" style="color:white !important; margin-right: 16px;">Inscreva-se</v-btn> -->
                            
                        </v-card-item>
                    </v-card>
                </div>
                <div class="mt-5">
                    <v-expansion-panels id="card_work">
                        <v-expansion-panel id="top">
                            <div class="d-flex my-auto mt-2 hidden" id="esconde" style="align-items: center;">
                                <p class="ml-2 inscricoes_abertas" style="margin-bottom: 0px !important;">
                                    Inscrições esgotadas
                                </p>
                            </div>
                            <v-expansion-panel-header class="titulo_card" style="padding-top: 16px " disable-icon-rotate>
                            Workshops
                            <div class="d-flex my-auto hidden2" id="esconde" style="align-items: center;">
                                <p class="ml-2 inscricoes_abertas" style="margin-bottom: 0px !important;">
                                    Inscrições esgotadas
                                </p>
                            </div>
                            <template v-slot:actions>
                                <div class="d-flex align-items-center verMais" style="color: #9747FF;">
                                    Ver mais
                                    <span class="material-symbols-outlined ml-1" style="font-size:16px">
                                    add
                                    </span>
                                </div>
                            </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-card variant="outlined" id="card_atividade" style="position:relative; border: 1px solid rgba(151, 71, 255, 0.31);" >
                                    <v-card-item class="row w-100 align-items-center justify-content-between">
                                        <div class="col-md-12">
                                            <div class="titulo_card titulo_workshop" style="padding-top: 16px ">
                                                Visualização de dados com Locker Studio: Primeiros passos pra engenharia analítica
                                            </div>
                                            <div class="subtitulo_card">
                                                Laysa Belici | Engenheira de dados @ Energisa
                                            </div>
                                        </div>
                                        <!-- <div  id="inscricao" style="color:white !important; padding-left: 16px;">
                                            <v-btn to="/inscricao" target="_blank" style="color:white !important;" class="btn_insc" id="inscricao">Inscreva-se</v-btn>
                                        </div> -->
                                        
                                        
                                    </v-card-item>
                                </v-card>
                                <v-card variant="outlined" id="card_atividade" class="mt-5" style="position:relative; border: 1px solid rgba(151, 71, 255, 0.31);" >
                                    <v-card-item class="row w-100 align-items-center justify-content-between">
                                        <div class="col-md-12">
                                            <div class="titulo_card titulo_workshop" style="padding-top: 16px ">
                                                Design Thiking: Ouse transformar
                                            </div>
                                            <div class="subtitulo_card">
                                                Micheline Barroso e Lívia Vasconcelos | Fundadoras @ Inova-te
                                            </div>
                                        </div>
                                        <!-- <div  id="inscricao" style="color:white !important; padding-left: 16px;">
                                            <v-btn to="/inscricao" target="_blank" style="color:white !important;" class="btn_insc" id="inscricao">Inscreva-se</v-btn>
                                        </div> -->
                                        
                                        
                                    </v-card-item>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
                <div class="mt-5">
                    <v-expansion-panels id="card_trilha">
                        <v-expansion-panel id="top">
                            <v-expansion-panel-header class="titulo_card" style="padding-top: 16px " disable-icon-rotate>
                            Trilha Design
                            <template v-slot:actions>
                                <div class="d-flex align-items-center verMais" style="color: #FF005E;">
                                    Ver mais
                                    <span class="material-symbols-outlined ml-1" style="font-size:16px">
                                    add
                                    </span>
                                </div>
                            </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-card variant="outlined" id="card_atividade" style="position:relative; border: 1px solid rgba(255, 0, 94, 0.24);" >
                                    <v-card-item class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <div class="titulo_card" style="padding-top: 16px ">
                                                Psicologia atrelada a produtos digitais: Como utilizar conceitos de psicologia no dia a dia em UX e UI
                                            </div>
                                            <div class="subtitulo_card">
                                                Gabriela Ozório | Product Designer Sênior @ PicPay
                                            </div>
                                        </div>
                                        
                                    </v-card-item>
                                </v-card>
                                <v-card variant="outlined" class="mt-5" id="card_atividade" style="position:relative; border: 1px solid rgba(255, 0, 94, 0.24);" >
                                    <v-card-item class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <div class="titulo_card" style="padding-top: 16px ">
                                                O que o Design tem a ver com isso?
                                            </div>
                                            <div class="subtitulo_card">
                                                Danuza Neiva | UX Designer
                                            </div>
                                        </div>
                                        
                                    </v-card-item>
                                </v-card>
                                <v-card variant="outlined" id="card_atividade" class="mt-5" style="position:relative; border: 1px solid rgba(255, 0, 94, 0.24);" >
                                    <v-card-item class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <div class="titulo_card" style="padding-top: 16px ">
                                                Construindo experiências excepcionais: A influência dos princípios básicos do design na jornada do UX/UI Design
                                            </div>
                                            <div class="subtitulo_card">
                                                Cecília Veloso| CEO @ Lit Collective
                                            </div>
                                        </div>
                                        
                                    </v-card-item>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
                <div class="mt-5">
                    <v-expansion-panels id="card_trilha">
                        <v-expansion-panel id="top">
                            <v-expansion-panel-header class="titulo_card" style="padding-top: 16px " disable-icon-rotate>
                            Trilha Carreira
                            <template v-slot:actions>
                                <div class="d-flex align-items-center verMais" style="color: #FF005E;">
                                    Ver mais
                                    <span class="material-symbols-outlined ml-1" style="font-size:16px">
                                    add
                                    </span>
                                </div>
                            </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-card variant="outlined" id="card_atividade" style="position:relative; border: 1px solid rgba(255, 0, 94, 0.24);" >
                                    <v-card-item class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <div class="titulo_card" style="padding-top: 16px ">
                                                Vem pro play, mulher!
                                            </div>
                                            <div class="subtitulo_card">
                                                Tânia Schmidt e Ana Paula Mileski @ Banco do Brasil
                                            </div>
                                        </div>
                                        
                                    </v-card-item>
                                </v-card>
                                <v-card variant="outlined" class="mt-5" id="card_atividade" style="position:relative; border: 1px solid rgba(255, 0, 94, 0.24);" >
                                    <v-card-item class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <div class="titulo_card" style="padding-top: 16px ">
                                                Carreira Internacional: um caminho possível para mulheres?
                                            </div>
                                            <div class="subtitulo_card">
                                                Lorena Locks Coelho | WTM Ambassador e Global Tech Recruiter @ Teamit
                                            </div>
                                        </div>
                                        
                                    </v-card-item>
                                </v-card>
                                <v-card variant="outlined" id="card_atividade" class="mt-5" style="position:relative; border: 1px solid rgba(255, 0, 94, 0.24);" >
                                    <v-card-item class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <div class="titulo_card" style="padding-top: 16px ">
                                                Saiba as principais soft skills necessárias para chegar à NASA!
                                            </div>
                                            <div class="subtitulo_card">
                                                Dani Bezerra | Local Leader @ NASA Space Jampa
                                            </div>
                                        </div>
                                        
                                    </v-card-item>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
                <div class="mt-5">
                    <v-expansion-panels id="card_trilha">
                        <v-expansion-panel id="top">
                            <v-expansion-panel-header class="titulo_card" style="padding-top: 16px " disable-icon-rotate>
                            Trilha Desenvolvimento
                            <template v-slot:actions>
                                <div class="d-flex align-items-center verMais" style="color: #FF005E;">
                                    Ver mais
                                    <span class="material-symbols-outlined ml-1" style="font-size:16px">
                                    add
                                    </span>
                                </div>
                            </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-card variant="outlined" id="card_atividade" style="position:relative; border: 1px solid rgba(255, 0, 94, 0.24);" >
                                    <v-card-item class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <div class="titulo_card" style="padding-top: 16px ">
                                                Desbravando HTTP com http.server
                                            </div>
                                            <div class="subtitulo_card">
                                                Ana Paula Mendes | Senior Software Engineer @ Jusbrasil
                                            </div>
                                        </div>
                                        
                                    </v-card-item>
                                </v-card>
                                <v-card variant="outlined" id="card_atividade" class="mt-5" style="position:relative; border: 1px solid rgba(255, 0, 94, 0.24);" >
                                    <v-card-item class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <div class="titulo_card" style="padding-top: 16px ">
                                                QA como uma opção de carreira
                                            </div>
                                            <div class="subtitulo_card">
                                                Sara Gonçalves | Quality Assurance Engineer Jr @ Atlas Technologies
                                            </div>
                                        </div>
                                        
                                    </v-card-item>
                                </v-card>
                                <v-card variant="outlined" id="card_atividade" class="mt-5" style="position:relative; border: 1px solid rgba(255, 0, 94, 0.24);" >
                                    <v-card-item class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <div class="titulo_card" style="padding-top: 16px ">
                                                Quem é responsável pelo "output" da IA?
                                            </div>
                                            <div class="subtitulo_card">
                                                Renata Góis | Assistente jurídica  @ Bezerra e Costa Advogados
                                            </div>
                                        </div>
                                        
                                    </v-card-item>
                                </v-card>
                                
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
                <div class="mt-5">
                    <v-expansion-panels id="card_trilha">
                        <v-expansion-panel id="top">
                            <v-expansion-panel-header class="titulo_card" style="padding-top: 16px " disable-icon-rotate>
                            Trilha Tendências
                            <template v-slot:actions>
                                <div class="d-flex align-items-center verMais" style="color: #FF005E;">
                                    Ver mais
                                    <span class="material-symbols-outlined ml-1" style="font-size:16px">
                                    add
                                    </span>
                                </div>
                            </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                
                                <v-card variant="outlined" id="card_atividade" style="position:relative; border: 1px solid rgba(255, 0, 94, 0.24);" >
                                    <v-card-item class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <div class="titulo_card" style="padding-top: 16px ">
                                                O potencial educacional da sucata tecnológica
                                            </div>
                                            <div class="subtitulo_card">
                                                Ielê Passos | Graduanda em Ciência da Computação @ Universidade Federal de Campina Grande
                                            </div>
                                        </div>
                                        
                                    </v-card-item>
                                </v-card>
                                <v-card variant="outlined" id="card_atividade" class="mt-5" style="position:relative; border: 1px solid rgba(255, 0, 94, 0.24);" >
                                    <v-card-item class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <div class="titulo_card" style="padding-top: 16px ">
                                                TI sem programar!
                                            </div>
                                            <div class="subtitulo_card">
                                                Natasha Costa | Analista de Recursos Humanos @ Dock
                                            </div>
                                        </div>
                                        
                                    </v-card-item>
                                </v-card>
                                <v-card variant="outlined" id="card_atividade" class="mt-5" style="position:relative; border: 1px solid rgba(255, 0, 94, 0.24);" >
                                    <v-card-item class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <div class="titulo_card" style="padding-top: 16px ">
                                                Do Plim ao Play: Uma trajetória de sucesso unindo Arte e Tecnologia
                                            </div>
                                            <div class="subtitulo_card">
                                                Laís Layme | Agile Coach @ Globo Play
                                            </div>
                                        </div>
                                        
                                    </v-card-item>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
                <div class="mt-5 sorteio" style="padding-top: 3%;">
                    <v-card variant="outlined" id="card_atividade" style="position:relative;">
                        <v-card-item class="row align-items-center justify-content-between margem">
                            <div>
                                <div class="titulo_card" >
                                    Sorteios
                                </div>
                            </div>
                        </v-card-item>
                    </v-card>
                </div>
                <div class="mt-5 madrinha " style="padding-top: 3%;">
                    <v-card variant="outlined" id="card_atividade" style="position:relative;">
                        <v-card-item class="row align-items-center justify-content-between margem">
                            <div>
                                <div class="titulo_card" >
                                    Apresentação das empresas madrinhas 
                                </div>
                            </div>
                        </v-card-item>
                    </v-card>
                </div>
                <div class="mt-5 premiacao " style="padding-top: 3%;">
                    <v-card variant="outlined" id="card_atividade" style="position:relative;">
                        <v-card-item class="row align-items-center justify-content-between margem">
                            <div>
                                <div class="titulo_card" >
                                    Premiação Code Game
                                </div>
                            </div>
                        </v-card-item>
                    </v-card>
                </div>
                <div class="mt-5 encerramento " style="padding-top: 3%;">
                    <v-card variant="outlined" id="card_atividade" style="position:relative;">
                        <v-card-item class="row align-items-center justify-content-between margem">
                            <div>
                                <div class="titulo_card" >
                                    Encerramento
                                </div>
                            </div>
                        </v-card-item>
                    </v-card>
                </div>
            </div>
            
      
    </div>
  </template>
  
  <script>
      
    export default {
      name: 'PerguntasFrequentes',
      data () {
        return {
          panel: [],
          manha: true,
          tarde: false,
          isActiveManha: 'isActiveManha',
          isActiveTarde: ''
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

        mudarProg(valor){
            if (valor == "manha"){
                this.manha = true
                this.tarde = false
                this.isActiveManha = "isActiveManha"
                this.isActiveTarde = ''
            } else{
                this.manha = false
                this.tarde = true
                this.isActiveTarde = "isActiveTarde"
                this.isActiveManha = ''
            }
            
        }
      },
    }


  </script>
  
  <style>
  .v-expansion-panel::before, .theme--light.v-expansion-panels .v-expansion-panel{
    background-color: #FBFAFC;
    box-shadow: none;
  }
  #card_trilha{
    background: white;
    border: 1px solid rgba(255, 0, 94, 0.24);
    border-radius: 8px;
    box-shadow: none;
  }
  .inscricoes_abertas{
    background: #FF765E;
    border-radius: 10px;
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    padding: 4px 8px;
    text-align: center;

    color: white;
  }
  .v-expansion-panel#top{
    margin-top: 0px !important;
  }
  #card_work{
    background-color: #FBFAFC;
    border: 1px solid rgba(151, 71, 255, 0.31);
    border-radius: 8px;
    box-shadow: none;
  }
  .verMais{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    /* identical to box height, or 20px */

    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
  }
  a#inscricao{
    margin: 0;
  }
  .v-btn#inscricao{
    background: #9747FF;
    border-radius: 6.81633px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
    text-transform: none;
  }
  .atividades{
        position: relative;
    }
  .atividades::after{
    background: #EFF8EA;
    border: 1px solid rgba(40, 168, 153, 0.31);
    border-radius: 8px;
    padding: 10px;
    position: absolute;	
    content:"14:00";
    top:0;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 160%;
    letter-spacing: 0.4px;
    color: #1D1B1F;
  }
  .isActiveManha, .isActiveTarde{
    background-color: rgba(254, 23, 181, 0.31) !important;
  }
  .largura{
    width: 50vw !important;
  }
  .almoco{
        position: relative;
    }
  .almoco::after{
    background: #EFF8EA;
    border: 1px solid rgba(40, 168, 153, 0.31);
    border-radius: 8px;
    padding: 10px;
    position: absolute;	
    content:"12:00";
    top:0;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 160%;
    letter-spacing: 0.4px;
    color: #1D1B1F;
  }
  .palestra3{
        position: relative;
    }
  .palestra3::after{
    background: #EFF8EA;
    border: 1px solid rgba(40, 168, 153, 0.31);
    border-radius: 8px;
    padding: 10px;
    position: absolute;	
    content:"11:00";
    top:0;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 160%;
    letter-spacing: 0.4px;
    color: #1D1B1F;
  }
  .palestra2{
        position: relative;
    }
  .palestra2::after{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 160%;
    /* or 19px */

    letter-spacing: 0.4px;

    /* Grey/Grey-900 */

    color: #1D1B1F;
    background: #EFF8EA;
    border: 1px solid rgba(40, 168, 153, 0.31);
    border-radius: 8px;
    padding: 10px;
    position: absolute;	
    content:"10:10";
    top:0
  }
  .palestra1{
        position: relative;
    }
  .palestra1::after{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 160%;
    /* or 19px */

    letter-spacing: 0.4px;

    /* Grey/Grey-900 */

    color: #1D1B1F;
    background: #EFF8EA;
    border: 1px solid rgba(40, 168, 153, 0.31);
    border-radius: 8px;
    padding: 10px;
    position: absolute;	
    content:"09:20";
    top:0
  }
  .boas_vindas{
        position: relative;
    }
  .boas_vindas::after{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 160%;
    /* or 19px */

    letter-spacing: 0.4px;

    /* Grey/Grey-900 */

    color: #1D1B1F;
    background: #EFF8EA;
    border: 1px solid rgba(40, 168, 153, 0.31);
    border-radius: 8px;
    padding: 10px;
    position: absolute;	
    content:"09:00";
    top:0
  }
    .credenciamento{
        position: relative;
    }
  .credenciamento::after{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 160%;
    /* or 19px */

    letter-spacing: 0.4px;

    /* Grey/Grey-900 */

    color: #1D1B1F;
    background: #EFF8EA;
    border: 1px solid rgba(40, 168, 153, 0.31);
    border-radius: 8px;
    padding: 10px;
    position: absolute;	
    content:"08:00";
    top:0
  }
  .foto{
        position: relative;
    }
  .foto::after{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 160%;
    /* or 19px */

    letter-spacing: 0.4px;

    /* Grey/Grey-900 */

    color: #1D1B1F;
    background: #EFF8EA;
    border: 1px solid rgba(40, 168, 153, 0.31);
    border-radius: 8px;
    padding: 10px;
    position: absolute;	
    content:"13:40";
    top:0
  }
  .sorteio{
        position: relative;
    }
  .sorteio::after{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 160%;
    /* or 19px */

    letter-spacing: 0.4px;

    /* Grey/Grey-900 */

    color: #1D1B1F;
    background: #EFF8EA;
    border: 1px solid rgba(40, 168, 153, 0.31);
    border-radius: 8px;
    padding: 10px;
    position: absolute;	
    content:"16:15";
    top:0
  }
  .madrinha{
        position: relative;
    }
  .madrinha::after{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 160%;
    /* or 19px */

    letter-spacing: 0.4px;

    /* Grey/Grey-900 */

    color: #1D1B1F;
    background: #EFF8EA;
    border: 1px solid rgba(40, 168, 153, 0.31);
    border-radius: 8px;
    padding: 10px;
    position: absolute;	
    content:"16:30";
    top:0
  }
  .premiacao{
        position: relative;
    }
  .premiacao::after{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 160%;
    /* or 19px */

    letter-spacing: 0.4px;

    /* Grey/Grey-900 */

    color: #1D1B1F;
    background: #EFF8EA;
    border: 1px solid rgba(40, 168, 153, 0.31);
    border-radius: 8px;
    padding: 10px;
    position: absolute;	
    content:"17:00";
    top:0
  }
  .encerramento{
        position: relative;
    }
  .encerramento::after{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 160%;
    /* or 19px */

    letter-spacing: 0.4px;

    /* Grey/Grey-900 */

    color: #1D1B1F;
    background: #EFF8EA;
    border: 1px solid rgba(40, 168, 153, 0.31);
    border-radius: 8px;
    padding: 10px;
    position: absolute;	
    content:"17:30";
    top:0
  }
  .titulo_card{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: #1D1B1F;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-top: 32px;
  }
  #card_atividade{
    background: #FBFAFC;
    border: 1px solid rgba(40, 168, 153, 0.31);
    border-radius: 8px;
    box-shadow: none;
  }
  .v-btn#tarde, .v-btn__content#tarde{
    border: 1px solid #79747E;
    border-left: none ;
    border-radius: 0px 100px 100px 0px;
    background-color: rgba(209, 237, 218, 1);
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #1C1B1F;
    text-transform:none;

  }
  .v-btn#manha, .v-btn__content#manha{
    border: 1px solid #79747E;
    border-radius: 100px 0px 0px 100px;
    background-color: rgba(209, 237, 218, 1);
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #1C1B1F;
    text-transform:none;

  }

  .subtitulo_card{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.15px;
    color: #706D73;
    padding: 0px 16px 16px 16px;
  }
  .margem{
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
  .hidden#esconde{
    display: none !important;
  }
  .largura2{
    width: 75vw;
  }



  @media only screen and (max-width: 768px)
{ 

}

@media only screen and (max-width: 576px)
{
    .largura{
    width: 100vw !important;
  }
  .largura2{
    width: 100vw;
  }
  .margem{
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
  .titulo_card{
    font-size: 18px;
  }
  .titulo_workshop{
    padding-left: 16px !important;
    padding-top: 16px !important;
    padding-right: 16px !important;
  }
  .btn_insc{
    margin-left: 16px !important;
    margin-bottom: 16px !important;
  }
  .hidden#esconde{
    display: flex !important;
  }
  .hidden2#esconde{
    display: none !important;
  }
}
  
  </style>