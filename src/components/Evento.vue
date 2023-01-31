<template>
    <div id="1" class="back_evento">
        <div class="container evento">
           <h1 class="titulo_tema"> O evento</h1>
           <div class="row" style="margin-top: 80px">
                <div class="col-md-6 video">
                    <video class="col-md-12"  style="border-radius: 8px;" controls>
                        <source src="../assets/img/sobre.mp4" type="video/mp4">
                    </video>
                </div>
                
                <div class="col-md-6">
                    <div class="d-flex mt-3" style="margin-bottom: 16px;">
                        <span class="material-symbols-outlined mr-2">
                            arrow_forward
                        </span> 
                        <h6 class="mt-1">O Local</h6>
                    </div>
                    
                    <h3 class="mb-3">Centro de Convenções de João Pessoa</h3>
                    <div style="margin-top: 30px" class="sumir">
                        <div class="d-flex" style="margin-bottom: 20px">
                            <span class="material-symbols-rounded mr-2 check mt-1">
                            check_circle
                            </span>
                            <p class="item_local mb-0"> Espaço moderno e amplo</p>
                        </div>

                        <div class="d-flex" style="margin-bottom: 20px">
                            <span class="material-symbols-rounded mr-2 check mt-1">
                            check_circle
                            </span>
                            <p class="item_local mb-0" style="text-align: left !important;"> Estacionamento  gratuito</p>
                        </div>

                        <div class="d-flex" style="margin-bottom: 20px">
                            <span class="material-symbols-rounded mr-2 check mt-1">
                            check_circle
                            </span>
                            <p class="item_local mb-0"> Ambiente inclusivo</p>
                        </div>
                    </div>
                    
                </div>
           </div>
           <div class="d-flex justify-content-center" style="margin-top: 40px">
                <v-btn class="primary_button mr-5" target="_blank" style="margin:0px;" href="https://www.eventbrite.com.br/e/mulher-tech-sim-senhor-2023-tickets-508226849187">Inscreva-se hoje</v-btn>
                <v-btn class="outline_button" target="_blank" style="margin:0px;" href="https://goo.gl/maps/xPxR9tLySHkm8rTX8">Ver no mapa</v-btn>
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
.evento{
    margin-bottom:180px;
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

.back_evento{
    background: url(../assets/img/center-left-video.png) bottom left no-repeat;
    background-position: 5% 100%;
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
