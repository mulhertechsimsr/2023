<template>
    <div class="patrocinio" style="padding-top: 100px">
        <div>
            <p class="title_patrocinio">Veja nossas parceiras</p>
            <div class="hidden2">
                <div class="row justify-content-center">
                    <v-chip
                    class="ma-2 chip"
                    outlined
                    @click="cota('madrinha')"
                    >
                    <img src="../assets/img/patrocinio/icon_madrinha.svg" class="mr-2">
                    Empresa Madrinha
                    </v-chip>
                    <v-chip
                    class="ma-2"
                    color="deep-purple accent-4"
                    outlined
                    @click="cota('inspiradora')"
                    >
                    <img src="../assets/img/patrocinio/icon_inspiradora.svg" class="mr-2">
                    Empresa Inspiradora
                    </v-chip>
                    <v-chip
                    class="ma-2"
                    color="deep-purple accent-4"
                    outlined
                    @click="cota('realizadora')"
                    >
                    <img src="../assets/img/patrocinio/icon_realizadora.svg" class="mr-2">
                    Empresa Realizadora
                    </v-chip>
                    <v-chip
                    class="ma-2"
                    color="deep-purple accent-4"
                    outlined
                    @click="cota('incentivadora')"
                    >
                    <img src="../assets/img/patrocinio/icon_incentivadora.svg" class="mr-2">
                    Empresa Incentivadora
                    </v-chip>
                    <v-chip
                    class="ma-2"
                    color="deep-purple accent-4"
                    outlined
                    @click="cota('colaboradora')"
                    >
                    <img src="../assets/img/patrocinio/icon_colaboradora.svg" class="mr-2">
                    Empresa Colaboradora
                    </v-chip>
                </div>
                <div class="row mx-5 justify-content-center" style="align-items: center; margin-top: 30px;">
                    <div class="col-md-4 d-flex justify-content-center">
                        <img v-if="!madrinha" :src="banco_brasil"
                        @mouseover='banco_brasil = require("../assets/img/patrocinio/banco_brasil.png")'
                        @mouseout="banco_brasil = require('../assets/img/patrocinio/banco_brasil_false.png')" width="100%"/>
                        <img v-if="madrinha" src='../assets/img/patrocinio/banco_brasil.png' width="100%"/>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                        <img v-if="!colaboradora" :src="snet"
                        @mouseover='snet = require("../assets/img/patrocinio/snet.png")'
                        @mouseout="snet = require('../assets/img/patrocinio/snet_false.png')" width="140"/>
                        <img v-if="colaboradora" src='../assets/img/patrocinio/snet.png'  width="140"/>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                        <img v-if="!realizadora" :src="phoebus"
                        @mouseover='phoebus = require("../assets/img/patrocinio/phoebus1.png")'
                        @mouseout="phoebus = require('../assets/img/patrocinio/phoebus_false.png')" width="250"/>
                        <img v-if="realizadora" src='../assets/img/patrocinio/phoebus1.png'  width="250"/>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center">
                        <img v-if="!inspiradora" :src="dock"
                        @mouseover='dock = require("../assets/img/patrocinio/dock.png")'
                        @mouseout="dock = require('../assets/img/patrocinio/dock_false.png')" width="290"/>
                        <img v-if="inspiradora" src='../assets/img/patrocinio/dock.png'  width="290"/>
                    </div>
            </div>
            <div class="row mx-5 justify-content-center" style="align-items: center; margin-top: 30px;">
                    <div class="col-md-1 d-flex justify-content-center">
                        <img v-if="!colaboradora" :src="sogo"
                        @mouseover='sogo = require("../assets/img/patrocinio/sogo.png")'
                        @mouseout="sogo = require('../assets/img/patrocinio/sogo_false.png')" width="50"/>
                        <img v-if="colaboradora" src='../assets/img/patrocinio/sogo.png'  width="50"/>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center">
                        <img v-if="!inspiradora" :src="globo"
                        @mouseover='globo = require("../assets/img/patrocinio/globo.png")'
                        @mouseout="globo = require('../assets/img/patrocinio/globo_false.png')" width="290"/>
                        <img v-if="inspiradora" src='../assets/img/patrocinio/globo.png'  width="290"/>
                    </div>
                    <div class="col-md-1 d-flex justify-content-center">
                        <img v-if="!incentivadora" :src="alura"
                        @mouseover='alura = require("../assets/img/patrocinio/alura.png")'
                        @mouseout="alura = require('../assets/img/patrocinio/alura_false.png')"/>
                        <img v-if="incentivadora" src='../assets/img/patrocinio/alura.png'/>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                        <img v-if="!colaboradora" :src="maxmilhas"
                        @mouseover='maxmilhas = require("../assets/img/patrocinio/maxmilhas.png")'
                        @mouseout="maxmilhas = require('../assets/img/patrocinio/maxmilhas_false.png')" width="150"/>
                        <img v-if="colaboradora" src='../assets/img/patrocinio/maxmilhas.png'  width="150"/>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center">
                        <img v-if="!madrinha" :src="google"
                        @mouseover='google = require("../assets/img/patrocinio/google.png")'
                        @mouseout="google = require('../assets/img/patrocinio/google_false.png')" width="380"/>
                        <img v-if="madrinha" src='../assets/img/patrocinio/google.png'  width="380"/>
                    </div>
            </div>
            <div class="row mx-5 justify-content-center" style="align-items: center; margin-top: 30px;">
                    <div class="col-md-2 d-flex justify-content-center">
                        <img v-if="!incentivadora" :src="rebase"
                        @mouseover='rebase = require("../assets/img/patrocinio/rebase.png")'
                        @mouseout="rebase = require('../assets/img/patrocinio/rebase_false.png')" width="120"/>
                        <img v-if="incentivadora" src='../assets/img/patrocinio/rebase.png'  width="120"/>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                        <img v-if="!colaboradora" :src="fiabilite"
                        @mouseover='fiabilite = require("../assets/img/patrocinio/fiabillite.png")'
                        @mouseout="fiabilite = require('../assets/img/patrocinio/fiabillite_false.png')" width="130"/>
                        <img v-if="colaboradora" src='../assets/img/patrocinio/fiabillite.png'  width="130"/>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center">
                        <img v-if="!realizadora" :src="luizalabs"
                        @mouseover='luizalabs = require("../assets/img/patrocinio/luizalabs.png")'
                        @mouseout="luizalabs = require('../assets/img/patrocinio/luizalabs_false.png')" width="215"/>
                        <img v-if="realizadora" src='../assets/img/patrocinio/luizalabs.png'  width="215"/>
                    </div>
                    <div class="col-md-2 d-flex justify-content-center">
                        <img v-if="!colaboradora" :src="vsoft"
                        @mouseover='vsoft = require("../assets/img/patrocinio/vsoft.png")'
                        @mouseout="vsoft = require('../assets/img/patrocinio/vsoft_false.png')" width="150"/>
                        <img v-if="colaboradora" src='../assets/img/patrocinio/vsoft.png'  width="150"/>
                    </div>
                    <div class="col-md-3 d-flex justify-content-center">
                        <img v-if="!realizadora" :src="assespro"
                        @mouseover='assespro = require("../assets/img/patrocinio/assespro.png")'
                        @mouseout="assespro = require('../assets/img/patrocinio/assespro_false.png')" width="220"/>
                        <img v-if="realizadora" src='../assets/img/patrocinio/assespro.png'  width="220"/>
                    </div>
            </div>
           </div>
           <div class="hidden">
                <div class="row">
                    <v-sheet
                        class="mx-auto"
                        max-width="400"
                        style="background: rgba(255, 0, 0, 0);"
                    >
                        <v-slide-group
                        v-model="model"
                        class="pa-4"
                        selected-class="bg-success"
                        
                        >
                        <v-slide-item
                        v-for="item in items"
                        :key="item"
                        >
                        <div class="d-flex py-5 pl-3 pr-2" style="flex-direction: column; align-items: flex-start">
                                <v-card
                                    elevation="10"
                                    style="border-radius: 12px; padding:20px 30px;width:250px; display:flex; height: 180px; align-items: center; justify-content: center"
                                    >
                                        <div class="d-flex justify-content-center" style="align-items: center;">
                                            <img :src="item.image" width="100%"/>
                                        </div>
                                </v-card>
                            <p class="subtitle_mobile mt-3">{{item.name}}</p>
                            <img :src="item.cota"/>
                        </div>
                        </v-slide-item>
                        </v-slide-group>
                    </v-sheet>
                </div>
            </div>
           <p class="title_patrocinio hidden2" style="margin-top: 140px;">Veja nossos apoios</p>
           <div class="row hidden2 align-items-center justify-content-center mx-5">
                <div class="col-md-1 align-items-center mx-4 d-flex justify-content-center">
                    <img :src="graficajb"
                    @mouseover='graficajb = require("../assets/img/patrocinio/graficajb.png")'
                    @mouseout="graficajb = require('../assets/img/patrocinio/graficajb_false.png')" height="80px"/>
                </div>
                <div class="col-md-1  mx-4 d-flex  justify-content-center">
                    <img :src="saobraz"
                    @mouseover='saobraz = require("../assets/img/patrocinio/saobraz.png")'
                    @mouseout="saobraz = require('../assets/img/patrocinio/saobraz_false.png')" height="80px"/>
                </div>
                <div class="col-md-2  mx-4 d-flex  justify-content-center">
                    <img :src="uniesp"
                    @mouseover='uniesp = require("../assets/img/patrocinio/uniesp.png")'
                    @mouseout="uniesp = require('../assets/img/patrocinio/uniesp_false.png')"  height="80px"/>
                </div>
                <div class="col-md-2 mx-4  d-flex justify-content-center">
                    <img :src="ifpb"
                    @mouseover='ifpb = require("../assets/img/patrocinio/ifpb.png")'
                    @mouseout="ifpb = require('../assets/img/patrocinio/ifpb_false.png')" height="80px"/>
                </div>
                <div class="col-md-1  mx-4 d-flex justify-content-center">
                    <img :src="ufpb"
                    @mouseover='ufpb = require("../assets/img/patrocinio/ufpb.png")'
                    @mouseout="ufpb = require('../assets/img/patrocinio/ufpb_false.png')" height="100px"/>
                </div>
                <div class="col-md-1  mx-4  d-flex justify-content-center">
                    <img :src="centro"
                    @mouseover='centro = require("../assets/img/patrocinio/centro_convencoes.png")'
                    @mouseout="centro = require('../assets/img/patrocinio/centro_convencoes_false.png')" height="120px"/>
                </div>
                <div class="col-md-2  mx-4  d-flex justify-content-center">
                    <img :src="jp"
                    @mouseover='jp = require("../assets/img/patrocinio/joao_pessoa.png")'
                    @mouseout="jp = require('../assets/img/patrocinio/joao_pessoa_false.png')" height="80px"/>
                </div>
           </div>
           
        </div>
    </div>
</template>

<script>
    // import { VSlideGroup } from 'vuetify/lib/components'
    // import { VSlideGroupItem } from 'vuetify/lib/components'
  export default {
    name: 'TemaVue',
    // components: {VSlideGroupItem, VSlideGroup},
    data() {
      return {
        madrinha: false,
        inspiradora:false,
        realizadora:false,
        incentivadora:false,
        colaboradora:false,
        banco_brasil: require("../assets/img/patrocinio/banco_brasil_false.png"),
        snet: require("../assets/img/patrocinio/snet_false.png"),
        phoebus: require("../assets/img/patrocinio/phoebus_false.png"),
        dock: require("../assets/img/patrocinio/dock_false.png"),
        sogo: require("../assets/img/patrocinio/sogo_false.png"),
        globo: require("../assets/img/patrocinio/globo_false.png"),
        alura: require("../assets/img/patrocinio/alura_false.png"),
        maxmilhas:require("../assets/img/patrocinio/maxmilhas_false.png"),
        google: require("../assets/img/patrocinio/google_false.png"),
        graficajb:require("../assets/img/patrocinio/graficajb_false.png"),
        saobraz: require("../assets/img/patrocinio/saobraz_false.png"),
        uniesp: require("../assets/img/patrocinio/uniesp_false.png"),
        ifpb: require("../assets/img/patrocinio/ifpb_false.png"),
        codata: require("../assets/img/patrocinio/codata_false.png"),
        ufpb: require("../assets/img/patrocinio/ufpb_false.png"),
        centro: require("../assets/img/patrocinio/centro_convencoes_false.png"),
        jp: require("../assets/img/patrocinio/joao_pessoa_false.png"),
        rebase: require("../assets/img/patrocinio/rebase_false.png"),
        fiabilite: require("../assets/img/patrocinio/fiabillite_false.png"),
        luizalabs: require("../assets/img/patrocinio/luizalabs_false.png"),
        vsoft: require("../assets/img/patrocinio/vsoft_false.png"),
        assespro: require("../assets/img/patrocinio/assespro_false.png"),
        model: null,
        items:[
            {
                name: "Google",
                image: require("../assets/img/patrocinio/google.png"),
                cota: require("../assets/img/patrocinio/madrinha.svg")
            },
            {
                name: "Banco do Brasil",
                image: require("../assets/img/patrocinio/banco_brasil.png"),
                cota: require("../assets/img/patrocinio/madrinha.svg")
            },
            {
                name: "Dock",
                image: require("../assets/img/patrocinio/dock.png"),
                cota: require("../assets/img/patrocinio/inspiradora.svg")
            },
            {
                name: "Globo",
                image: require("../assets/img/patrocinio/globo.png"),
                cota: require("../assets/img/patrocinio/inspiradora.svg")
            },
            {
                name: "Assespro",
                image: require("../assets/img/patrocinio/assespro.png"),
                cota: require("../assets/img/patrocinio/realizadora.svg")
            },
            {
                name: "LuizaLabs",
                image: require("../assets/img/patrocinio/luizalabs.png"),
                cota: require("../assets/img/patrocinio/realizadora.svg")
            },
            {
                name: "Phoebus",
                image: require("../assets/img/patrocinio/phoebus1.png"),
                cota: require("../assets/img/patrocinio/realizadora.svg")
            },
            {
                name: "Alura",
                image: require("../assets/img/patrocinio/alura.png"),
                cota: require("../assets/img/patrocinio/incentivadora.svg")
            },
            {
                name: "Rebase",
                image: require("../assets/img/patrocinio/rebase.png"),
                cota: require("../assets/img/patrocinio/incentivadora.svg")
            },
            {
                name: "Snet",
                image: require("../assets/img/patrocinio/snet.png"),
                cota: require("../assets/img/patrocinio/colaboradora.svg")
            },
            {
                name: "MaxMilhas",
                image: require("../assets/img/patrocinio/maxmilhas.png"),
                cota: require("../assets/img/patrocinio/colaboradora.svg")
            },
            {
                name: "Vsoft",
                image: require("../assets/img/patrocinio/vsoft.png"),
                cota: require("../assets/img/patrocinio/colaboradora.svg")
            },
            {
                name: "SOGO",
                image: require("../assets/img/patrocinio/sogo.png"),
                cota: require("../assets/img/patrocinio/colaboradora.svg")
            },
            {
                name: "Fiabilité",
                image: require("../assets/img/patrocinio/fiabillite.png"),
                cota: require("../assets/img/patrocinio/colaboradora.svg")
            },
            {
                name: "São Braz",
                image: require("../assets/img/patrocinio/saobraz.png"),
                cota: require("../assets/img/patrocinio/apoio.svg")
            },
            {
                name: "Uniesp",
                image: require("../assets/img/patrocinio/uniesp.png"),
                cota: require("../assets/img/patrocinio/apoio.svg")
            },
            {
                name: "Gráfica JB",
                image: require("../assets/img/patrocinio/graficajb.png"),
                cota: require("../assets/img/patrocinio/apoio.svg")
            },
            {
                name: "UFPB",
                image: require("../assets/img/patrocinio/ufpb.png"),
                cota: require("../assets/img/patrocinio/apoio.svg")
            },
            {
                name: "ifpb",
                image: require("../assets/img/patrocinio/ifpb.png"),
                cota: require("../assets/img/patrocinio/apoio.svg")
            },
            {
                name: "Codata",
                image: require("../assets/img/patrocinio/codata.png"),
                cota: require("../assets/img/patrocinio/apoio.svg")
            },
            {
                name: "PMJP",
                image: require("../assets/img/patrocinio/joao_pessoa.png"),
                cota: require("../assets/img/patrocinio/apoio.svg")
            },
            {
                name: "Centro de Convenções",
                image: require("../assets/img/patrocinio/centro_convencoes.png"),
                cota: require("../assets/img/patrocinio/apoio.svg")
            },
        ],
        
    }
  },
  methods:{
            cota(item){
                if (item === "madrinha"){
                    this.madrinha = !this.madrinha
                    this.inspiradora = false
                    this.realizadora = false
                    this.incentivadora = false
                    this.colaboradora = false
                } else if (item === "inspiradora"){
                    this.madrinha = false
                    this.inspiradora = !this.inspiradora
                    this.realizadora = false
                    this.incentivadora = false
                    this.colaboradora = false
                } else if (item === "realizadora"){
                    this.madrinha = false
                    this.inspiradora = false
                    this.realizadora = !this.realizadora
                    this.incentivadora = false
                    this.colaboradora = false
                } else if (item === "incentivadora"){
                    this.madrinha = false
                    this.inspiradora = false
                    this.realizadora = false
                    this.incentivadora = !this.incentivadora
                    this.colaboradora = false
                } else if (item === "colaboradora"){
                    this.madrinha = false
                    this.inspiradora = false
                    this.realizadora = false
                    this.incentivadora = false
                    this.colaboradora = !this.colaboradora
                }
            }
        }
}
</script>

<style>
.v-chip.v-chip--outlined.v-chip.v-chip, .theme--light.v-chip:not(.v-chip--active), .chip, .v-chip{
    font-family: 'Inter', sans-serif !important;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #1C1B1F !important;
    background-color: #FFFFFF !important;
    background: #FFFFFF !important;
    /* M3/Elevation Light/1 */

    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    border:none;
}
.hidden{
    display: none;
}
.hidden2{
    display: block;
}

@media (max-width: 600px) {
  .hidden{
    display: block !important;
  }
  .hidden2{
    display: none !important;
  }
}
.title_patrocinio{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 34px;
    /* identical to box height, or 162% */

    text-align: center;

    color: #D94A77;
}

.subtitle_mobile{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 46px;
    /* or 192% */

    letter-spacing: -1.2px;

    /* Blue/900 */

    color: #0F172A;
}
</style>
