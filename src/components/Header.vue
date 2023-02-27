<template>
  <div class="container header" style="align-content: center;
    flex-wrap: wrap;">
    <div class="row">
      <div class="col-1 hidden-sm-and-down"></div>
      <div class="col-lg-5 col-md-12 d-flex coluna-text" style="align-items:center">
        <div>
          <h1 class="title_header">
          O <span class="title_italico">maior</span> encontro de mulheres de tecnologia na Paraíba
        </h1>
        <p style="margin-bottom: 40px !important;">
          O Mulher Tech Sim Senhor está de volta! Dia <strong>04 de março de 2023</strong> teremos mais um evento. A temática dessa vez é a relação da <strong>tecnologia</strong> com o mundo das <strong>artes</strong>. Junte-se a nós!
        </p>
        <div class="d-flex centraliza_mobile">
          <v-btn class="primary_button mr-5" target="_blank" style="margin:0px;" href="https://www.eventbrite.com.br/e/mulher-tech-sim-senhor-2023-tickets-508226849187">Venha participar</v-btn>
          <v-btn class="outline_button" style=" margin:0px;" target="_blank" href="https://mulhertechsimsr.lojavirtualnuvem.com.br/">Visite nossa loja</v-btn>
        </div>
        </div>
        
        
      </div>
      <div class="col-md-6 col-sm-12 d-flex justify-content-center">
        <img src="../assets/img/arte_home.svg" class="arte_home hidden-sm-and-down"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',

    data: () => ({
    }),
  }
</script>

<style>
.primary_button{
  background-color: #28A899 !important;
  color:white !important;
  padding: 13px 24px;
  border-radius:8px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-transform: none;
}

.primary_button:hover{
  text-decoration: none;
}

.outline_button:hover{
  text-decoration: none;
  background-color: #FF005E !important;
  color: white !important;
}

.header{
  padding-bottom: 50px;
}

.arte_home{
  height: 500px;
}

.title_italico{
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 40px;
  line-height: 34px;
}



@media (max-width: 768px)
{
  h1.title_header{
    margin-top: 80px !important;
    font-size: 30px !important;
    text-align: center !important;
    line-height: 33px;
}
.title_italico{
  font-size: 30px !important;
  text-align: center !important;
}
p{
  text-align: center !important;
}
.centraliza_mobile{
  justify-content: center
}
}
</style>
