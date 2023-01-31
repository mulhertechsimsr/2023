<template>
  <div id="4" class="back_footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 logo_footer">
          <img src="../assets/img/logo.png" width="80"/>
        </div>
        <div class="col-md-6 nav_itens d-flex justify-content-end">
          <a href="#1" class="hidden-lg-and-down text-decoration-none">
            O evento
          </a>
          <a href="#2" class="hidden-sm-and-down text-decoration-none">
            Diferenciais 
          </a>
          <a href="#3" class="hidden-sm-and-down text-decoration-none">
            Para empresas
          </a>
          <a href="#4" class="hidden-sm-and-down text-decoration-none">
            Contato
          </a>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-md-6">
          <p class="p_footer">Mulher Tech Sim Senhor © 2023 | João Pessoa, Paraíba, Brasil | 04 de março</p>
        </div>
        <div class="col-md-6 contatos">
            <v-tooltip bottom>
              <template v-slot:activator="{on}">
                <v-btn class="mr-5" text icon v-on="on" href="https://www.instagram.com/mulhertechsimsr/" target="_blank">
                  <v-icon small class="icon" style="font-size:30px !important">mdi-instagram</v-icon>
                </v-btn>
              </template>
              <span>Instagram</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{on}">
                <v-btn class="mr-5" text icon v-on="on" href="https://www.linkedin.com/company/mulher-tech-sim-senhor/" target="_blank">
                  <v-icon small class="icon" style="font-size:30px !important">mdi-linkedin</v-icon>
                </v-btn>
              </template>
              <span>Linkedin</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{on}">
                <v-btn class="mr-5" text icon v-on="on" href="https://www.facebook.com/mulhertechsimsr" target="_blank">
                  <v-icon small class="icon" style="font-size:30px !important">mdi-facebook</v-icon>
                </v-btn>
              </template>
              <span>Facebook</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{on}">
                <v-btn text icon v-on="on" href="https://open.spotify.com/playlist/4iaqlHEzL0UDGdt2rq0fV2" target="_blank">
                  <v-icon small class="icon" style="font-size:30px !important">mdi-spotify</v-icon>
                </v-btn>
              </template>
              <span>Spotify</span>
            </v-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FooterEvento',
    
    data: () => ({
      
    }),
  }
</script>

<style>
.back_footer{
  background: #F4DCD5;
  padding-top: 60px;
  padding-bottom: 80px;
}

.logo_footer{
  display: flex;
  justify-content: flex-start;
}

.contatos{
  display: flex;
  justify-content: flex-end;
}

a:hover{
  text-decoration: none !important;
}

.p_footer{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #4B5262;
}

</style>
