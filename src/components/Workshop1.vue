<template>
    <div class="inscricoes_background">
        <div class="container" style="padding-bottom: 60px;">
            <div class="row pt-5 align-items-center justify-content-center">
                <div class="col-md-1 logo">
                    <img src="../assets/img/logo_boneca.png" class="logo_tamanho" width="100%"/>
                </div> 
            </div>
            <div class="row align-items-center justify-content-center">
                <div class="col-md-8">
                    <p class="titulo_inscricao d-flex justify-content-center">Inscrição</p>
                    <div class="row">
                        <div class="col-md-1 d-flex justify-content-center align-items-center">
                            <router-link class="voltar" to="/">Voltar</router-link>
                        </div>
                        <div class="col-md-10 d-flex justify-content-center">
                            <p class="subtitulo_inscricao">Atividades</p>
                        </div>
                        <div class="col-md-1">

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mt-4">
                                <v-card variant="outlined" id="card_atividade" style="border: 1px solid rgba(151, 71, 255, 0.31);">
                                    <v-card-item class="row justify-conten-between align-items-center">
                                        <div class="col-md-10">
                                            <div class="titulo_horario">
                                                04/03/2023 - 14 horas
                                            </div>
                                            <div id="insc">
                                                Visualização de dados com Locker Studio: Primeiros passos pra engenharia analítica
                                            </div>
                                            <a class="subtitulo_card justify-content-start pl-0" href="">
                                                <p>Laysa Belici | Engenheira de dados @ Energisa</p>
                                            </a>
                                        </div>
                                        <div class="col-md-2">
                                            <router-link to="/inscricao" class="subtitulo_card justify-content-start pl-0">
                                                <p class="link_reg mb-0 mr-1">Trocar</p>
                                            </router-link>
                                        </div>
                                            
                                        </v-card-item>
                                </v-card>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="mt-4" style="padding-top: 8px; padding-bottom: 8px; background-color: white; border-radius: 8px">
                            <div class="" style="padding: 16px;">
                                <p class="titulo_ativ ml-2">
                                    Adicione seus dados abaixo para finalizar a inscrição
                                </p>
                                <p class="subtitulo_ativ ml-2">
                                    Importante: Para esse workshop será necessário que você leve um <strong>notebook</strong>, <strong>mouse</strong> e que possua uma <strong>conta gmail</strong>. 
                                </p>
                                    <v-form class="d-flex align-items-center mx-0 px-0" style="flex-direction: column;">
                                    <input
                                        class="largura3 input mt-4"
                                        v-model="user.codigo"
                                        placeholder="Número de inscrição"
                                    />
                                    <input
                                        class="largura3 input mt-4"
                                        v-model="user.nome"
                                        placeholder="Nome"
                                    />
                                    <input
                                        class="largura3 input mt-4"
                                        v-model="user.email"
                                        placeholder="E-mail"
                                    />
                                    <v-checkbox
                                    v-model="checkbox"
                                    :value="true"
                                    label="Declaro que estou ciente dos itens necessários para participar."
                                    ></v-checkbox>
                                    {{ validar() }}
                                    <v-btn class="primary_button" @click="inscrever()" :disabled="!valido"> Finalizar inscrição</v-btn>
                                </v-form>
                                
                            </div>
                        </div>    
                    </div>
                </div> 
            </div>
        </div>
        
    </div>
</template>

<script>
import { db } from '../firebaseDb';
import Swal from 'sweetalert2'
import router from '../router/router'
  export default {
    name: 'TemaVue',
    data() {
      return {
        user:{
            nome: '',
            email: '',
            codigo: '', 
        },
        checkbox: '',
        valido: '',
        Users: []
      }
    },

    methods:{
        validar(){
            if (this.user.nome && this.user.email && this.user.codigo && this.checkbox){
                this.valido = true
            } else{
                this.valido = false
            }
        },
        async inscrever(){
            await db.collection("workshop1").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    this.Users.push(doc.data())
                });
            });
            if (this.Users.length <= 30){
                console.log(this.Users.length)
                db.collection('workshop1').add(this.user).then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Parabéns! Sua inscrição foi concluída com sucesso!',
                        confirmButtonColor: ' #28A899',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            router.push('/')
                        }
                    })
                    this.user.nome = ''
                    this.user.email = ''
                    this.user.codigo = ''
                }).catch(() => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Tivemos um problema ao realizar o cadastro! Tente novamente!',
                    })
                });
            } else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Inscrições esgotadas!',
                })
            }
            
            }
        }
  }
</script>

<style>
.titulo_ativ{
    font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 120%;
/* or 19px */


/* Grey/Grey-900 */

color: #1D1B1F;
}
.subtitulo_ativ{
    font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 140%;
/* identical to box height, or 20px */

letter-spacing: 0.15px;

/* Grey/Grey-700 */

color: #706D73;
}
label{
    margin-bottom: 3px !important;
}
@media only screen and (max-width: 576px)
{
    .largura3{
    width: 100% !important;
  }
}
.largura3{
    width: 50%;
}
.input{
    border: 1px solid #79747E;
    border-radius: 4px;
    padding: 16px;

}
.link_reg{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    /* identical to box height, or 20px */

    letter-spacing: 0.15px;
    text-decoration-line: underline;

    /* purple */

    color: #9747FF !important;
}
.voltar{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    color: #1D1B1F;
}
.inscricoes_background{
    background: linear-gradient(180deg, #CCE4D7 0%, #D0E0D8 40%, #EFF8EA 40%, #EFF8EA 100%);
    height: 100%;
}
.titulo_horario{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.15px;
    color: #1D1B1F;
    padding: 16px;
    padding-bottom: 12px;
}
#insc{
    font-family: 'Inter', sans-serif;
    padding: 16px;
    padding-bottom: 12px;
    padding-top: 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    color: #1D1B1F;
}
.titulo_inscricao{
    font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 120%;
/* identical to box height, or 58px */

text-align: center;

/* Grey/Grey-900 */

color: #1D1B1F;
}
.subtitulo_inscricao{
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    letter-spacing: 0.15px;
    color: #1D1B1F;
}
</style>
