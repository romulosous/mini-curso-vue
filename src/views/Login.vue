<template>
  <div id="login">
     <b-card class="col-md-4 ml-auto mr-auto mt-4 bg-info">
       <h2 class="text-center">LOGIN</h2>
       <b-form @submit.prevent="login">
         <b-form-group
          label="Email:"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="Informe seu email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Senha:"
          label-for="senha"
        >
          <b-form-input
            id="senha"
            v-model="senha"
            type="password"
            required
            placeholder="Informe sua senha"
          ></b-form-input>
        </b-form-group><b-button variant="success" type="submit">Log in</b-button>
       </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      senha: '',
    }
  },
  methods: {
    login(){
      this.$router.push('usuarios');
    }
  }

}
</script>
