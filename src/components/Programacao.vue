<template>
  <div style="margin-top:50px" id="2">
    <v-container class="bloco">
        <div class="d-flex" style="justify-content:center; margin-top: 45px; margin-bottom:15px">
            <h1 class="w-100">PROGRAMAÇÃO</h1>
        </div>
        <div class="d-flex" style="justify-content:center; margin-bottom:30px">
            <h3 class="w-100">EM BREVE MAIS INFORMAÇÕES...</h3>
        </div>
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
