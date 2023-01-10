<template>
<div>
    <v-text-field v-model="search"   @keyup="dbSearch" color="black"></v-text-field>
</div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            search: ""
        }
    },

    methods: {
        dbSearch() {
            this.$store.dispatch('searchProduct', this.search)
        }
    },
    created() {
        this.dbSearch();
    }

}
</script>

<style>

</style>
