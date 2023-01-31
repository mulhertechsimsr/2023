<template>
    <div id="2" style="margin-bottom: 100px;">
        <div class="container diferenciais">
            <h4 class="subtitle_rosa">E ainda tem mais!</h4>
            <h1 class="titulo_tema pt-0"> Confira nossos diferenciais!</h1>
            <div class="container">
                <div class="row" style="margin-top: 80px">
                    <div class="col-lg-3 card_diferencial2 col-md-6">
                        <v-card
                        elevation="2"
                        class="h-100"
                        style="padding-top: 20px;padding-bottom: 40px;"
                        >
                        <div class="d-flex justify-content-center">
                            <div class="d-flex" style="height:150px">
                                <img
                                
                                src="../assets/img/ingresso.png"
                                />
                            </div>
                        </div>
                        <v-card-text>
                            
                            <p class="card_title">
                                Ingresso Simbólico
                            </p>
                
                            <div class="subtitle_card">
                                Os ingressos têm preços inferiores a 50 reais para tornar o evento acessível a estudantes da região e profissionais.
                            </div>
                            </v-card-text>
                        </v-card>
                    </div>

                    <div class="col-lg-3 card_diferencial col-md-6">
                        <v-card
                        elevation="2"
                        class="h-100"
                        style="padding-top: 20px;padding-bottom: 40px;"
                        >
                        <div class="d-flex justify-content-center">
                            <div class="d-flex" style="height:150px">
                                <img
                                width="130"
                                src="../assets/img/alimentacao.png"
                                />
                            </div>
                        </div>
                        <v-card-text>
                            
                            <p class="card_title">
                                Alimentação Diferenciada
                            </p>
                
                            <div class="subtitle_card">
                                As participantes recebem alimentação completa durante o evento, com opções inclusive para dietas restritivas.
                            </div>
                            </v-card-text>
                        </v-card>
                    </div>

                    <div class="col-lg-3 card_diferencial col-md-6">
                        <v-card
                        elevation="2"
                        class="h-100"
                        style="padding-top: 20px; padding-bottom: 40px;"
                        >
                        <div class="d-flex justify-content-center">
                            <div class="d-flex" style="height:150px">
                                <v-img
                                width="150"
                                src="../assets/img/kids.png"
                                ></v-img>
                            </div>
                        </div>
                        <v-card-text>
                            
                            <p class="card_title">
                                Espaço Kids
                            </p>
                
                            <div class="subtitle_card">
                                <br/>
                                Oferecemos um espaço kids com educadora para que as mães possam deixar suas crianças enquanto participam do evento.
                            </div>
                            </v-card-text>
                        </v-card>
                    </div>

                    <div class="col-lg-3 card_diferencial col-md-6">
                        <v-card
                        elevation="2"
                        class="h-100"
                        style="padding-top: 20px; padding-bottom: 30px;"
                        >
                        <div class="d-flex justify-content-center">
                            <div class="d-flex" style="height:150px">
                                <img
                                height="150"
                                width="120"
                                src="../assets/img/libras.png"
                                />
                            </div>
                            
                        </div>
                        
                        <v-card-text >
                            
                            <p class="card_title">
                                Intérpretes de Libras
                            </p>
                
                            <div class="subtitle_card">
                                Há intérpretes de libras para apoiar PCDs durante todas as atividades realizadas no evento.
                            </div>
                            </v-card-text>
                        </v-card>
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
.subtitle_rosa{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #D94A77;
}
.outline_button{
    background-color: rgba(0, 0, 0, 0) !important;
    color: #FF005E !important;
    border: 2px solid #FF005E;
    padding: 13px 24px;
    border-radius:8px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    text-transform: none;
}

.card_title{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color: #D94A77;
    text-align: center;
    margin-top: 15px;
}

.subtitle_card{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #4B5262;
}

.check{
    color:#FF005E
}

.item_local{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 32px;
    /* identical to box height, or 152% */

    letter-spacing: -0.3px;

    /* Blue/900 */

    color: #0F172A;
}
</style>
