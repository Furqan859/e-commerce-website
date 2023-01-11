<template>
     <!-- v-model="page" -->
     <v-pagination  v-model="page"  :length="4" circle></v-pagination>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
     data() {
          return {
              page:1,
              perPage:25
          }
     },
     methods: {
          updatePage() {
             const  start = (this.page - 1) * this.perPage;
             const  end = start + this.perPage;
             return this.products.slice(start, end);
             
             
          }
     },
     computed:{
          ...mapGetters(['product'])
     }

}
</script>

<style>

</style>