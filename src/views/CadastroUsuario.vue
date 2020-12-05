<template>
  <div>
    <h2 class="text-center">Cadastro de Usuário</h2>
    <b-form @submit.prevent="Cadastrar">
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
export default {
  data () {
    return {
      usuario: {
        nome: '',
        idade: null
      }
    }
  }
}
</script>
