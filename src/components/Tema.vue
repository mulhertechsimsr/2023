<template>
    <div>
        <div class="container tema">
            <h1 class="titulo_tema"> Arte e tecnologia</h1>
            <p class="subtitulo mb-0">De que forma arte e tecnologia se complementam? Como uma pode influenciar a outra? Este é o tema que iremos debater nesta edição!</p>
            <div class="row" style="margin-top:80px; padding-bottom: 150px;">
                <div class="col-md-6 col-lg-3 coluna">
                    <h2 class="titulo_dois">04</h2>
                    <h3 class="titulo_tres">Trilhas</h3>
                    <p class="subtitulo_tema">As trilhas são um conjunto de atividades em sequência que abordam um tema específico!</p>
                </div>

                <div class="col-md-6 col-lg-3 coluna">
                    <h2 class="titulo_dois">03</h2>
                    <h3 class="titulo_tres">Palestras</h3>
                    <p class="subtitulo_tema">Teremos palestras sobre diversos temas e contaremos com convidadas muito especiais!</p>
                </div>

                <div class="col-md-6 col-lg-3 coluna">
                    <h2 class="titulo_dois">02</h2>
                    <h3 class="titulo_tres">Workshops</h3>
                    <p class="subtitulo_tema">Dizem que a melhor forma de aprender é praticando, então você não pode perder os Workshops! </p>
                </div>

                <div class="col-md-6 col-lg-3 coluna">
                    <h2 class="titulo_dois">01</h2>
                    <h3 class="titulo_tres">Girl Code Game</h3>
                    <p class="subtitulo_tema">Que tal se desafiar participando de uma maratona super divertida e ainda concorrer a prêmios?</p>
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
.tema{
    text-align: center;
}
.titulo_tema{
    padding-top: 100px;
    text-align: center;
}
.subtitulo{
    font-weight: 400;
    font-size: 21px;
    line-height: 34px;
    color: #4B5262;
}
.coluna{
    text-align: left;
}

.titulo_dois{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 48px;
    color: #DA3369;
}

.titulo_tres{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 32px;
    color: #212939;
}

.subtitulo_tema{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #4B5262;
}
</style>
