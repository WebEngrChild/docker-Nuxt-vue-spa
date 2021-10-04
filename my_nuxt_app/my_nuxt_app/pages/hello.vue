<template>
  <div>
  <Header />
    {{ data }}
  </div>
</template>


<script>
  import Header from "@/components/header.vue";
  export default {
    async asyncData ({ app }) {
      const data = await app.$axios.$get(`http://host.docker.internal:90/api`)
      return { data }
    }
  }
</script>
