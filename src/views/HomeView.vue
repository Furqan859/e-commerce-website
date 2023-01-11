<template>
<v-row>
    <v-main>
        <v-app app>
            <v-container fluid>
                <InputFilterData />
                <v-layout row v-if="searchData.length >0">
                    <SearchCard v-for="filterData in searchData" :key="filterData.id" :filterData="filterData" />
                </v-layout>
                <v-layout v-else row>
                    <CardData v-for="product in products" :key="product.id" :product="product" />
                </v-layout>
                <div class="text-center mb-5">
                    <Pagination />
                </div>
            </v-container>
        </v-app>
    </v-main>
</v-row>
</template>

<script>
import CardData from './CardData.vue'
import SearchCard from '../components/SearchCard.vue' //search component card
import InputFilterData from '../components/InputFilterData.vue'
import Pagination from '../components/Pagination.vue'

import {
    mapState
} from 'vuex'

export default {
    name: 'HomeView',
    data: () => ({
        dialog: false
    }),
    components: {
        CardData,
        InputFilterData,
        Pagination,
        SearchCard
    },
    methods: {},
    computed: {
        // get search filter from state and pass to component
        ...mapState(['searchData']),
        // get product data from state and pass to component
        ...mapState(['products']),

    },
    // call actions to get product data and passing value from component
    mounted() {
        this.$store.dispatch('getProducts');

    },

}
</script>
