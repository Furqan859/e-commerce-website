<template>
  <div>Detail Page</div>
</template>

<script>
export default {

  computed:{
    id(){
      return  console.log(this.$route.params.id,"this is id in params")
    }
}
}
</script>

<style>

</style>