<template>
    <div id="3" class="parceria" style="padding-top: 100px; padding-bottom: 150px">
        <div class="container">
            <div class="row">
                <div class="col-md-6 order-12 order-md-1 d-flex justify-content-start">
                    <img src="../assets/img/parceria.png" width="100%"/>
                </div>
                <div class="col-md-6 order-1 order-md-12">
                    <div class="centraliza">
                        <h1 class="title_parceria">Quer ser nossa parceira?</h1>
                    </div>
                    <p>Entre em contato. <br/>Vamos construir essa parceria juntas</p>
                    <div class="centraliza" style="margin-bottom: 20px">
                        <span class="material-symbols-rounded mr-2 check mt-1">
                        check_circle
                        </span>
                        <p class="item_local mb-0"> mulhertechsimsr@gmail.com </p>
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
h1.title_parceria{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 50px;
    letter-spacing: -2px;
    color: #0F172A;
}

.centraliza{
    display: flex;
    justify-content: flex-start;
}

.parceria{
    background: url(../assets/img/bottom_right_parceria.png) bottom right no-repeat,
                url(../assets/img/bottom_left_parceria.png) bottom left no-repeat;
}
</style>
