<template>
  <div>
    <h2 class="text-center">Cadastro de Usuário</h2>
    <b-alert v-if="msgSuccess" variant="success" show>{{msgSuccess}}</b-alert>
    <b-form @submit.prevent="cadastrar()">
      <b-form-group label="Nome:" label-for="nome">
        <b-form-input
          id="nome"
          v-model="usuario.nome"
          type="text"
          required
          placeholder="Informe seu nome"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Idade:" label-for="idade">
        <b-form-input
          id="idade"
          v-model="usuario.idade"
          type="number"
          required
          placeholder="Informe sua idade"
        ></b-form-input>
      </b-form-group>
      <b-button variant="success" type="submit">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      usuario: {
        nome: '',
        idade: null,
      },
      msgSuccess: ''

    }
  },
  methods:{
    cadastrar(){
      axios.post('https://ifpi-web-nodejs.herokuapp.com/usuarios', this.usuario).then((retorno) => {
        console.log(retorno)
        this.msgSuccess = retorno.data;
        this.nome = '';
        this.idade = null;
      }).catch((erro) => {
        console.error(erro);
      })
    }
  }
}
</script>
