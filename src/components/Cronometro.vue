<template>
  <div style="margin-top:80px">
    <div class="d-flex w-100" style="justify-content:center"> 
        <h1>NOSSO ENCONTRO SERÁ EM</h1>
    </div>
    {{cronometro()}}
    <div class="cronometro">
        <div class="pacman-css"></div>
        <div class="fantasma"> 
            <img src="../assets/img/fantasma1.svg" alt="fantasma" class="fantasmatamanho"/>
            <label class="posicao_fantasma" id="days"></label>      
        </div>
        <div class="fantasma">
            <img src="../assets/img/fantasma2.svg" alt="fantasma" class="fantasmatamanho"/>
            <label class="posicao_fantasma" id="hours"></label>
        </div>
        <div class="fantasma">
            <img src="../assets/img/fantasma3.svg" alt="fantasma" class="fantasmatamanho"/>
            <label class="posicao_fantasma" id="minutes"></label>
        </div>
        <div class="fantasma">
            <img src="../assets/img/fantasma4.svg" alt="fantasma" class="fantasmatamanho"/>
            <label class="posicao_fantasma" id="seconds"></label>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CronoMetro',

    data: () => ({
    }),

    methods: {
        cronometro(){
            let deadline = new Date("Sep 3, 2022 08:00:00").getTime();
            let x = setInterval(function() {
            let now = new Date().getTime();
            let t = deadline - now;
            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
            let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((t % (1000 * 60)) / 1000);
            document.getElementById("days").innerHTML = String(days).padStart(2, '0');
            document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
            document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
            document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');
                if (t < 0) {
                    clearInterval(x);
                    document.getElementById("days").innerHTML ='00';
                    document.getElementById("hours").innerHTML ='00';
                    document.getElementById("minutes").innerHTML ='00' ; 
                    document.getElementById("seconds").innerHTML = '00';                
                }
            }, 1000);
    }
  }
}
</script>

<style>
@media (max-width: 600px) {
    .pacman-css, .pacman-css::before, .pacman-css::after {
    width: 75px;
    height: 80px;
    margin-right:10px;
    
}
    .fantasmatamanho{
        width: 50px;
        height: 100px;
        margin-right:5px;
    }

    .posicao_fantasma{
    position: absolute;
    top: 18%;
    right: 35%;
    }

    label{
        font-size:16px
    }

    h1{
        font-size: 22px !important;
        width: 90% !important;
    }
}

@media (min-width: 601px) and (max-width: 960px) {
    .pacman-css, .pacman-css::before, .pacman-css::after {
    width: 125px;
    height: 130px;
    margin-right:20px;
    }
    .fantasmatamanho{
        width: 90px;
        margin-right:10px;
    }

    .posicao_fantasma{
    position: absolute;
    top: 25%;
    right: 40%;
    }

    label{
        font-size:24px
    }

    h1{
        font-size: 26px !important;
        width: 90% !important;
    }
    
}

@media (min-width: 961px) {
    .pacman-css, .pacman-css::before, .pacman-css::after {
    width: 150px;
    height: 160px;
    margin-right:30px;
    }
    .fantasmatamanho{
        width: 100px;
        height: 200px;
        margin-right:20px;
    }

    .posicao_fantasma{
    position: absolute;
    top: 30%;
    right: 45%;
    }

    label{
        font-size:24px
    }

    h1{
        font-size: 26px !important;
        width: 90% !important;
    }
}



.pacman-css {
    position: relative;
    
}

.pacman-css::before, .pacman-css::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,
                                           rgba(0,0,0,0) 50%,
                                           yellow 50%);
}

.pacman-css::before {
    transform: rotate(180deg);
    animation: anima-pacman-cima .5s infinite;
}

.pacman-css::after {
    
    animation: anima-pacman-baixo .5s infinite;
}

@keyframes anima-pacman-cima
{
    0%   { transform: rotate(180deg); }
    50%  { transform: rotate(150deg); }
    100% { transform: rotate(180deg); }
}

@keyframes anima-pacman-baixo
{
    0%   { transform: rotate(0deg);  }
    50%  { transform: rotate(30deg); }
    100% { transform: rotate(0deg);  }
}

label{
    font-style: normal;
    font-weight: 700;
    line-height: 50px;
    text-align: center;
    color: #D9CD2B;
}

.fantasma{
    display: inline-block;
    position: relative;
}

.cronometro{
    display: flex;
    margin-top: 20px;
    justify-content: center;
}
.background_cronometro{
    height: 350px !important;
    background-color: #0E1F4B;
    background-image: url(../assets/img/cronometro_fundo.svg);
}
.gradiente{
    display:flex;
    flex-direction: column;
    background: linear-gradient(90.14deg, rgba(254, 23, 181, 0) -0.05%, rgba(254, 23, 181, 0.44) 49.97%, rgba(254, 23, 181, 0) 96%);;
}
</style>
