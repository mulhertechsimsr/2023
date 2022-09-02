<template>
  <div style="margin-top:100px" id="3">
    <v-container class="bloco">
        <div class="d-flex" style="justify-content:center; margin-top: 45px; margin-bottom:30px">
            <h1 class="w-100">Inscrição em Atividades</h1>
        </div>
        <div class="d-flex" style="justify-content: center">
            <div style="margin-bottom:30px; width:90%; text-align:justify">
                <p> <strong style="text-shadow: 2px 2px  black; color:#D9CD2B">Olá, querida participante!</strong></p>
                <p>Nosso evento está chegando, e a programação foi preparada com muito carinho pra você. De manhã, teremos três palestras bastante inspiradoras, e à tarde vão ocorrer várias atividades em paralelo com conteúdos técnicos e reflexões interessantes sobre carreira. Então, vamos dar agora as orientações necessárias para que você escolha como vai ser sua tarde.</p>
                <p>Das 14h às 16h, haverá atividades com 2h de duração (Code Game e oficinas), e outras com 1h de duração (palestras, rodas de conversa, mentorias).<strong style="color:#D9CD2B; text-shadow: 2px 2px  black"> Você só poderá escolher uma atividade de 2h, ou duas atividades de 1h, desde que não haja choque de horário entre elas.</strong> Veja a seguir os nomes das atividades disponíveis em cada horário, e os links correspondentes para inscrição. </p>
                <p>Caso tente se inscrever em alguma atividade que já esteja com vagas esgotadas, faça uma nova escolha. Temos muitas opções legais! </p>
                <h3>Horário: 14h às 16h</h3>
                <ul>
                    <li>Code Game - <a class="link" href="https://forms.gle/rX4BxvdvsGZtyE5EA">Clique aqui para se inscrever</a>
                    </li>
                    <li>Oficina: Figma: dando start no UX - <a class="link" href="https://forms.gle/3vPtEPYyuC7AEpQ36">Clique aqui para se inscrever</a>
                    </li>
                    <li>Oficina:  Crie seu primeiro jogo 2D sem código! - <a class="link" href="https://forms.gle/4eidzi83sj1yB67a9">Clique aqui para se inscrever</a>
                    </li>
                    <li>Oficina: Plano de Voo: Líder de Si Mesma - <a class="link" href="https://forms.gle/JDdqJ2jHLy2wbKVj8">Clique aqui para se inscrever</a>
                    </li>
                    <li>Oficina: Análise de Dados: um "idioma" que você precisa aprender! - <a class="link" href="https://forms.gle/QiMoTjXGZ8xqgr4M8">Clique aqui para se inscrever</a>
                    </li>
                    <li>Oficina: Como tornar seu LinkedIn atraente às empresas - <a class="link" href="https://forms.gle/XeGdQcfeZY145VRu6">Clique aqui para se inscrever</a>
                    </li>
                </ul>
                <h3>Horário: 14h às 15h</h3>
                <ul>
                  <li>Roda de conversa: Mulher e Tecnologia: representatividade no mercado de trabalho - <a class="link" href="https://forms.gle/SyGmMoe48tFqFZ5N6">Clique aqui para se inscrever</a>
                  </li>
                  <li>Palestra: Qualidade em times ágeis: antecipando os problemas e acelerando as entregas - <a class="link" href="https://forms.gle/pP7VQFKbA4jpmGhi8">Clique aqui para se inscrever</a>
                  </li>
                  <li>Mentoria: Como dar os primeiros passos com ReactJS - <a class="link" href="https://forms.gle/YEgikyTvME4yugZP8">Clique aqui para se inscrever</a>
                  </li>
                  <li>Roda de conversa: Processo seletivo: como se sair bem -  <a class="link" href="https://forms.gle/r98x94jsvS4fDp4e6">Clique aqui para se inscrever</a>
                  </li>
                   <li>Gestão na T.I: Um diálogo para além dos algoritmos -  <a class="link" href="https://forms.gle/bGq7YKT8bCRsHJpP6">Clique aqui para se inscrever</a>
                  </li>
                </ul>
                <h3>Horário: 15h às 16h</h3>
                <ul>
                  <li>Palestra: Engenharia de Requisitos: uma área de possibilidades além da programação - <a class="link" href="https://forms.gle/Y4cR2iTANgRz4Wrj8">Clique aqui para se inscrever</a>
                  </li>
                  <li>Palestra: Como ter uma carreira de sucesso - <a class="link" href="https://forms.gle/LaPopBv5ApHLbHsv8">Clique aqui para se inscrever</a>
                  </li>
                  <li>Roda de conversa: Desenvolvimento de sites: Carreira e Mercado -  <a class="link" href="https://forms.gle/zKYJYT9JZoVpnpM58">Clique aqui para se inscrever</a>
                  </li>
                  <li>Palestra: Certificação Professional Scrum Master I - Com disciplina e dedicação, em um mês tá na mão! -  <a class="link" href="https://forms.gle/qJLUop8ZZxHknihDA">Clique aqui para se inscrever</a></li>
                </ul>
            </div>
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

  p, li{
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

  p, li{
    font-size: 14px !important;
  }
}
ul{
    margin-bottom: 15px;
}
p{
  font-size: 18px;
}

li{
  font-size: 18px;
  margin-top:15px
}

.link:hover{
  color:#FF5CCC !important;
}

.link{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 177%;
  text-align: left;
  color: #D9CD2B !important;
  text-shadow: 2px 2px  black;
  margin: 0px;
}

p, li{
    font-style: normal;
    font-weight: 400;
    
    line-height: 163.7%;
    /* or 39px */

    text-align: justify;

    color: #FFFFFF;
}
.background_codigo{
    height: 820px !important;
    background-color: #0E1F4B;
    background-image: url(../assets/img/codigo_fundo.svg);
}
.bloco{
    background: rgba(3, 166, 150, 0.13);
    border: 1px solid #FF005E;
    border-radius: 20px;
}
</style>
