<template>
  <div class="home">
    <img v-if="showImg" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" @show-img="changeImg" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },

  data() {
    return {
      showImg: true,
    };
  },

  methods: {
    changeImg(value) {
      this.showImg = value;
    },
  },
};
</script>
