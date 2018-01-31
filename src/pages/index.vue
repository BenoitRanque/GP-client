<template>
  <q-page class="flex flex-center">
    <q-input v-model="message" placeholder="message"></q-input>
    <q-btn @click="send">send</q-btn>
    <q-btn @click="fetch">fetch</q-btn>
    <q-btn @click="session">session</q-btn>
    <hr>
    <pre>
      {{response}}
    </pre>
  </q-page>
</template>

<style>
</style>

<script>
import { QInput } from 'quasar'

export default {
  name: 'PageIndex',
  components: {
    QInput
  },
  data () {
    return {
      message: '',
      response: ''
    }
  },
  methods: {
    send () {
      this.$axios.post('/test', { message: this.message })
        .then(response => {
          this.response = response
        })
        .catch(error => {
          this.response = error.response
        })
    },
    fetch () {
      this.$axios.get('/test')
        .then(response => {
          this.response = response
        })
        .catch(error => {
          this.response = error.response
        })
    },
    session () {
      this.$axios.get('/session')
        .then(response => {
          this.response = response
        })
        .catch(error => {
          this.response = error.response
        })
    }
  }
}
</script>
