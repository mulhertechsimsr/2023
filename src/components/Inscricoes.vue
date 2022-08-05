<template>
  <div>
    <div class="gradiente">
        <div>
            <h2 class="subtitulo">PREPARADAS PARA MAIS UMA AVENTURA?</h2>
        </div>
        <div class="d-flex" style="justify-content: center; ">
            <h1 class="titulo" style="width: 50%;">O MAIOR ENCONTRO DE MULHERES DE TI DA PARAÍBA ESTÁ DE VOLTA!!</h1>
        </div>
        <div>
            <h3 class="embreve" style="margin-bottom: 50px;
    margin-top: 50px;">INSCRIÇÕES EM BREVE</h3>
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
.background_inscricoes{
    height: 400px !important;
    background-color: #0E1F4B;
    background-image: url(../assets/img/inscricao_fundo.svg);
}
.gradiente{
    display:flex;
    flex-direction: column;
    background: linear-gradient(90.14deg, rgba(254, 23, 181, 0) -0.05%, rgba(254, 23, 181, 0.44) 49.97%, rgba(254, 23, 181, 0) 96%);;
}

@media (max-width: 600px) {
  .subtitulo {
    font-size: 12px;
  }
  .titulo {
    font-size: 20px;
    width: 90% !important;
  }
  .embreve {
    font-size: 12px;
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .subtitulo {
    font-size: 14px;
  }
  .titulo {
    font-size: 24px;
    width: 90% !important;
  }
  .embreve {
    font-size: 14px;
  }
}
</style>
