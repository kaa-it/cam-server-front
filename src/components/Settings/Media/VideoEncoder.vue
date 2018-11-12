<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h1>Video Encoder {{id}} Settings</h1>
      </v-flex>
    </v-layout>
  </v-container>    
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
