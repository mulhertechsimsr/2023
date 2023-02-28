<template>
    <div class="inscricoes_background">
        <div class="container" style="padding-bottom: 60px;">
            <div class="row pt-5 align-items-center justify-content-center">
                <div class="col-md-1 logo">
                    <img src="../assets/img/logo_boneca.png" class="logo_tamanho" width="100%"/>
                </div> 
            </div>
            <div class="row align-items-center justify-content-center">
                <div class="col-md-8">
                    <p class="titulo_inscricao d-flex justify-content-center">Inscrição</p>
                    <div class="row">
                        <div class="col-md-1 d-flex justify-content-center align-items-center">
                            <router-link class="voltar" to="/">Voltar</router-link>
                        </div>
                        <div class="col-md-10 d-flex justify-content-center">
                            <p class="subtitulo_inscricao">Atividades</p>
                        </div>
                        <div class="col-md-1">

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mt-4">
                                <v-card variant="outlined" id="card_atividade" style="border: 1px solid rgba(151, 71, 255, 0.31);">
                                    <v-card-item >
                                            <div class="titulo_horario">
                                                03/04/2023 - 14 às 16 horas
                                            </div>
                                            <div id="insc">
                                                Confira nossas atividades durante à tarde e se inscreva
                                            </div>
                                            <div class="subtitulo_card">
                                                Atenção: você só poderá se inscrever em 1 das 3 atividades. Verifique a opção selecionada antes de finalizar.
                                            </div>
                                        </v-card-item>
                                </v-card>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="mt-4" style="padding-top: 8px; padding-bottom: 8px; background-color: white; border-radius: 8px">
                            <div class="row justify-content-between align-items-center" variant="outlined" id="card_atividades" style="margin:16px;border: 1px solid rgba(151, 71, 255, 0.31); border-radius: 8px">
                                    <div>
                                            <div id="insc" style="margin-top: 16px;">
                                                Code Game
                                            </div>
                                            <div class="subtitulo_card">
                                                Apoio @ Alura
                                            </div>
                                        </div>
                                   
                                    <div>
                                        <v-btn to="/code_game" id="inscricao" style="color:white !important; margin-right: 16px;">Inscreva-se</v-btn>
                                    </div> 
                                </div>
                                <div class="row justify-content-between align-items-center" variant="outlined" id="card_atividades" style="margin:16px;border: 1px solid rgba(151, 71, 255, 0.31); border-radius: 8px">
                                    <div class="col-md-8">
                                            <div id="insc" class="pl-0" style="margin-top: 16px;">
                                                Visualização de dados com Locker Studio: Primeiros passos pra engenharia analítica
                                            </div>
                                            <div class="subtitulo_card pl-0">
                                                Laysa Belici | Engenheira de dados @ Energisa
                                            </div>
                                        </div>
                                   
                                    <!-- <div >
                                        <v-btn to="/work1" id="inscricao" style="color:white !important; margin-right: 16px; margin-left: 16px; margin-bottom: 16px;">Inscreva-se</v-btn>
                                    </div>  -->
                                </div>
                                <div class="row justify-content-between align-items-center" variant="outlined" id="card_atividades" style="margin:16px;border: 1px solid rgba(151, 71, 255, 0.31); border-radius: 8px">
                                    <div class="col-md-8">
                                            <div id="insc" class="pl-0" style="margin-top: 16px;">
                                                Design Thiking - Ouse transformar
                                            </div>
                                            <div class="subtitulo_card pl-0">
                                                Micheline Barroso e Lívia Vasconcelos | Fundadoras @ Inova-te
                                            </div>
                                        </div>
                                   
                                    <div >
                                        <v-btn to="/work2" id="inscricao" style="color:white !important; margin-right: 16px; margin-left: 16px; margin-bottom: 16px;">Inscreva-se</v-btn>
                                    </div> 
                                </div>
                            </div>
                            
                    </div>
                </div> 
            </div>
        </div>
        
    </div>
</template>

<script>
  export default {
    name: 'TemaVue',
  }
</script>

<style>
.voltar{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    color: #1D1B1F;
}
.inscricoes_background{
    background: linear-gradient(180deg, #CCE4D7 0%, #D0E0D8 40%, #EFF8EA 40%, #EFF8EA 100%);
    height: 100%;
}
.titulo_horario{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.15px;
    color: #1D1B1F;
    padding: 16px;
    padding-bottom: 12px;
}
#insc{
    font-family: 'Inter', sans-serif;
    padding: 16px;
    padding-bottom: 12px;
    padding-top: 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    color: #1D1B1F;
}
.subtitulo_inscricao{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    letter-spacing: 0.15px;
    color: #1D1B1F;
}
</style>
