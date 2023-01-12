<template>
<div>
    <v-text-field v-model="search"   @keyup="dbSearch" color="black" class=" d-none d-lg-block d-md-block d-sm-block" placeholder="Search..." ></v-text-field>
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
        // dispatching the action to get the search result
        dbSearch() {
            this.$store.dispatch('searchProduct', this.search)
        }
    }

}
</script>

<style>

</style>
