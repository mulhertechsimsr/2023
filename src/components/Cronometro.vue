<template>
    <div>
        <div class="container tema">
            <h1 class="titulo_tema"> Está cada vez mais próximo!</h1>
            <p class="subtitulo mb-0">Garanta logo seu ingresso e aproveite a oportunidade de se imergir e se aprofundar nesse universo tech, com ótimas palestras, boa comida e mulheres incríveis</p>
            {{cronometro()}}
            <div class="row justify-content-center" style="margin-top:80px; padding-bottom: 150px;">
                <div class="d-flex" style="margin-right:100px; flex-direction: column">
                    <div class="row justify-content-center">
                        <div class="number" style="margin-right: 20px;">
                            <label class="number_text" id="day1"></label>
                        </div>
                        <div class="number">
                            <label class="number_text" id="day2"></label>
                        </div>
                    </div>
                    <p class="extenso">Dias</p>      
                </div>
                <div class="d-flex" style="margin-right:100px; flex-direction: column ">
                    <div class="row justify-content-center">
                        <div class="number" style="margin-right: 20px;">
                            <label class="number_text" id="hour1"></label>
                        </div>
                        <div class="number">
                            <label class="number_text" id="hour2"></label>
                        </div>
                    </div>
                    
                    <p class="extenso">Horas</p>  
                </div>
                <div class="d-flex" style="margin-right:85px; flex-direction: column">
                    <div class="row justify-content-center">
                        <div class="number" style="margin-right: 20px;">
                            <label class="number_text" id="minute1"></label>
                        </div>
                        <div class="number">
                            <label class="number_text" id="minute2"></label>
                        </div>
                    </div>
                    <p class="extenso">Minutos</p>  
                </div>
                <div class="d-flex" style="flex-direction: column">
                    <div class="row justify-content-center">
                        <div class="number" style="margin-right: 20px;">
                            <label class="number_text" id="second1"></label>
                        </div>
                        <div class="number">
                            <label class="number_text" id="second2"></label>
                        </div>
                    </div>
                    <p class="extenso">Segundos</p>  
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TemaVue',


    methods:{
        cronometro(){
            let deadline = new Date("Mar 4, 2023 08:00:00").getTime();
            let x = setInterval(function() {
            let now = new Date().getTime();
            let t = deadline - now;
            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            days = String(days).padStart(2, '0')
            let day1 = days.substr(0 , 1)
            let day2 = days.substr(1 , 1)
            let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
            hours = String(hours).padStart(2, '0')
            let hour1 = hours.substr(0 , 1)
            let hour2 = hours.substr(1 , 1)
            let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            minutes = String(minutes).padStart(2, '0')
            let minute1 = minutes.substr(0 , 1)
            let minute2 = minutes.substr(1 , 1)
            let seconds = Math.floor((t % (1000 * 60)) / 1000);
            seconds = String(seconds).padStart(2, '0')
            let second1 = seconds.substr(0 , 1)
            let second2 = seconds.substr(1 , 1)
            
            document.getElementById("day1").innerHTML = day1;
            document.getElementById("day2").innerHTML = day2;
            document.getElementById("hour1").innerHTML = hour1;
            document.getElementById("hour2").innerHTML = hour2;
            document.getElementById("minute1").innerHTML = minute1;
            document.getElementById("minute2").innerHTML = minute2;
            document.getElementById("second1").innerHTML = second1;
            document.getElementById("second2").innerHTML = second2;
            if (t < 0) {
                clearInterval(x);
                document.getElementById("day1").innerHTML ='0';
                document.getElementById("day2").innerHTML ='0';
                document.getElementById("hour1").innerHTML ='0';
                document.getElementById("hour2").innerHTML ='0';
                document.getElementById("minute1").innerHTML ='0';
                document.getElementById("minute2").innerHTML ='0';  
                document.getElementById("second1").innerHTML = '0';      
                document.getElementById("second2").innerHTML = '0';       
                }
            }, 1000);
    }
    }
  }
</script>

<style>
.extenso{
    margin-top: 20px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 72px;
    color: #FF005E;
}
.number_text{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    line-height: 116px;
    color: #25987F;
}
.number{
    padding: 22px 30px;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%);
    backdrop-filter: blur(32.5px);
    border-radius: 5px;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.12);

}
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
