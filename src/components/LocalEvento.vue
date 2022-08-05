<template>
  <div style="margin-top:50px" >
    <v-container class="bloco" id="4">
        <div class="d-flex" style="justify-content:center; margin-top: 45px; margin-bottom:30px">
            <h1 class="w-100">ONDE VAI SER?</h1>
        </div>
        <v-row style="justify-content: space-evenly; padding-left: 10%; padding-right: 10%; align-items: center">
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15837.086931053405!2d-34.848476!3d-7.094469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x252e780cac7ff41c!2sCentro%20Universit%C3%A1rio%20-%20UNIESP!5e0!3m2!1spt-PT!2sbr!4v1659554660603!5m2!1spt-PT!2sbr" width="100%" height="300" style="border:0; border-radius:15px; margin-bottom:30px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
            </div>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <div>
              <p>O evento será realizado na UNIESP no dia 03 de setembro de 2022 </p>
              <p>Endereço: Rodovia BR 230, Km 14, s/n, Morada Nova. Cabedelo - PB. CEP 58109-303</p>
            </div>
        </v-col>
    </v-row>
    </v-container>
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
@media (max-width: 600px) {
  .bloco {
    width: 90% !important;
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
    font-size: 16px;
    line-height: 163.7%;
    /* or 39px */

    text-align: justify;

    color: #FFFFFF;
}
.background_local{
    height: 550px !important;
    background-color: #0E1F4B;
    background-image: url(../assets/img/inscricao_fundo.svg);
}
.bloco{
    background: rgba(3, 166, 150, 0.13);
    border: 1px solid #FF005E;
    border-radius: 20px;
}
</style>
