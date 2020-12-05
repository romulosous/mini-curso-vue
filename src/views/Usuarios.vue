<template>
  <div>
    <h2 class="text-center">Usuários</h2>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      items: [
        {nome: "Jesiel", idade: 35},
        {nome: "Ainslan", idade: 35},
        {nome: "Joao Paulo", idade: 35},
        {nome: "Vicente", idade: 35}
      ]
    }
  }
}
</script>
