<template>
  <div>
    <h3>Posts</h3>
    <b-table :items="posts"></b-table>
    <div v-if="loadAtivo" class="d-flex justify-content-center mb-3">
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [],
      loadAtivo: true
    }
  },
  created () {
    // this.consultar()
    this.carreagarEmTempoReal()

  },
  methods: {
    consultar () {
      this.$firebase
        .firestore()
        .collection('posts')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            this.posts.push(doc.data())
            // console.log(doc.id, " => ", doc.data());
          })
        })
    },
    carreagarEmTempoReal () {
      this.$firebase
        .firestore()
        .collection('posts')
        .onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if (change.type === 'added') {
              console.log('New Post: ', change.doc.data())
              this.posts.push(change.doc.data())
              this.loadAtivo = false;
            }
            if (change.type === 'modified') {
              console.log('Modified city: ', change.doc.data())
            }
            if (change.type === 'removed') {
              console.log('Removed city: ', change.doc.data())
            }
          })
        })
    }
  }
}
</script>

<style></style>
