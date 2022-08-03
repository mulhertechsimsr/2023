<template>
  <div style="margin-top:50px" id="3">
    <v-container class="bloco">
        <div class="d-flex" style="justify-content:center; margin-top: 45px; margin-bottom:30px">
            <h1 class="w-100">Código de Conduta</h1>
        </div>
        <div class="d-flex" style="justify-content: center">
            <div style="margin-bottom:30px; width:90%; text-align:justify">
                <p>O evento Mulher Tech Sim Senhor é um ambiente amistoso, de boa convivência, inclusivo e livre de intimidação, onde todas as pessoas são bem-vindas e a civilidade é exigida.
                </p>
                <p>Por isso:</p>
                <ul>
                    <li>Não é tolerado nenhum tipo de assédio, discriminação inapropriada ou humilhação pública;
                    </li>
                    <li>Não é tolerado o descumprimento das leis brasileiras;
                    </li>
                    <li> Toda pessoa presente no evento, independente do seu papel, está sujeita a estas regras;
                    </li>
                </ul>
                <p>Desta forma, entendemos que:</p>
                <ul>
                    <li>Assédio é a ação de insistir, perseguir ou coagir outra pessoa a um comportamento involuntário.
                    </li>
                    <li>Discriminação inapropriada é o ato de separar, injuriar ou humilhar alguém promovendo sua exclusão por atributo particular da mesma.
                    </li>
                    <li> Humilhação pública é o ato de submeter, rebaixar, ridicularizar ou promover o vexame de outro publicamente.
                    </li>
                </ul>
                <p>O público alvo do evento também inclui crianças e adolescentes, por isso buscamos manter um ambiente apropriado para todas as faixas etárias. Sendo assim, linguagem e imagens sexualizadas não são adequados para palestras e ações promocionais de patrocinadores.
</p>
                <p>Se você se sentiu assediado, discriminado indevidamente ou humilhado, ou presenciou alguma destas atitudes, por favor entre em contato com a Equipe de Resposta.
</p>
                <p>Havendo um relato de violação destes princípios, a Equipe de Resposta realizará a devida análise e, quando necessário, tomará as ações para impedir a reincidência. Estas ações podem, mas não se restringem nem implicam em ir desde uma conversa em busca da retratação até um convite a se retirar do evento por tempo indeterminado.</p>

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
