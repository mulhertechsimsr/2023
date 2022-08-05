<template>
  <div style="margin-top:50px" id="3">
    <v-container class="bloco">
        <div class="d-flex" style="justify-content:center; margin-top: 45px; margin-bottom:30px">
            <h1 class="w-100">Código de Conduta</h1>
        </div>
        <div class="d-flex" style="justify-content: center">
            <div style="margin-bottom:30px; width:90%; text-align:justify">
                <p>O <strong>Mulher Tech Sim Senhor</strong> está comprometido a ser uma comunidade livre de discriminação para todos, independentemente de identidade e expressão de gênero, orientação sexual, deficiência, aparência física, raça, idade, origem ou religião. Não será tolerado, sob nenhuma circunstância, o constrangimento de participantes em eventos e canais organizados pela comunidade. Linguagem e/ou exposição de imagens sexuais ou de cunho discriminatório não serão apropriadas no âmbito de nossa comunidade - isto inclui os eventos, as palestras, apresentações, exemplos ou demonstrações, site, emails, chat e qualquer outro canal da comunidade. Os participantes que violarem estas regras podem ser repreendidos ou expulsos do canal e/ou evento sem direito a reembolso, a critério da organização. Entendemos como assédio e constrangimento:
                </p>
                <ul>
                    <li>Comentários que reforçam estruturas sociais de dominação, sejam relacionados a identidade ou expressão de gênero, orientação sexual, deficiência, aparência física, raça, idade, origem ou religião;
                    </li>
                    <li>Imagens sexuais em espaços públicos;
                    </li>
                    <li>Comentários de cunho sexual;
                    </li>
                    <li>Intimidação intencional;
                    </li>
                    <li>Perseguição;
                    </li>
                    <li>Obtenção de som ou imagem constrangedores;
                    </li>
                    <li>Interrupção continuada e intencional de palestras e/ou eventos paralelos;
                    </li>
                    <li>Contato físico inapropriado; atenção sexual não solicitada;
                    </li>
                </ul>
                <p>Se você se sentiu assediada, discriminada indevidamente ou humilhada, ou presenciou alguma destas atitudes, por favor entre em contato com a equipe organizadora. Embora o desejo seja de que isso não venha a ser necessário, caso seja preciso a organização tomará providências. </p>
                <p>Faremos o possível para que todas sintam-se confortáveis e seguras.
</p>
                <p>Contamos com sua compreensão e participação.</p>       

                <ul>
                    <li>Contato para eventos do <strong>MTSS</strong>: mulhertechsimsr@gmail.com
                    </li>
                    <li>Polícia: 190
                    </li>
                    <li>Central de Atendimento à Mulher: 180
                    </li>
                    <li>SAMU: 192
                    </li>
                </ul>

                <p>Esperamos que todas as participantes sigam estas recomendações em todos os locais onde o <b> Women Techmakers  - João Pessoa </b> estiver levando um evento.</p>

                <p>Aproveitem o evento!</p>
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

p, li{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
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
