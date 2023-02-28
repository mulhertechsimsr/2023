<template>
    <div class="inscricoes_background">
        <div class="container">
            <div class="row pt-5 align-items-center">
                <div class="col-md-2">
                    <img src="../assets/img/logo_boneca.png" width="100%"/>
                </div>
                <div class="col-md-8 d-flex justify-content-center align-items-center" style="flex-direction: column;">
                    <p class="titulo_inscricao">Inscrição</p>
                    <p class="subtitulo_inscricao">Workshop 1</p>
                </div>
                <div class="col-md-2">
                    
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
.inscricoes_background{
    background: linear-gradient(180deg, #CCE4D7 0%, #D0E0D8 40%, #EFF8EA 40%, #EFF8EA 100%);
    height: 100vh;
}
.titulo_inscricao{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 120%;
    /* identical to box height, or 58px */

    text-align: center;

    /* Grey/Grey-900 */

    color: #1D1B1F;
}
.subtitulo_inscricao{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    /* identical to box height, or 34px */

    text-align: center;
    letter-spacing: 0.15px;

    /* Grey/Grey-900 */

    color: #1D1B1F;
}
</style>
