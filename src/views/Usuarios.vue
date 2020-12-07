<template>
  <div>
    <h2 class="text-center">Usuários</h2>
    <!-- <b-table striped hover :items="usuarios" :fields="campos"></b-table> -->
    <table class="table table-striped">
      <thead>
        <tr>
          <td>Nome</td>
          <td>Idade</td>
          <td>Data de Alteração</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.nome }}</td>
          <td>{{ usuario.idade }}</td>
          <td>{{ usuario.dataAlteracao }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="loadAtivo" class="d-flex justify-content-center mb-3">
        <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      usuarios: [],
      campos: ['nome', 'idade', 'dataAlteracao'],
      loadAtivo: true
    }
  },
  created () {
    this.consultarUsuarios()
  },
  methods: {
    async consultarUsuarios () {
      const resposta = await axios.get(
        'https://ifpi-web-nodejs.herokuapp.com/usuarios'
      )
      this.usuarios = resposta.data
      this.loadAtivo = false
    }
  }
}
</script>
