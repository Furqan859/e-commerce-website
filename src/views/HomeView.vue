<template>
<v-row>
    <v-main>
        <v-app app>
            <v-container fluid>

                <InputFilterData />

                <v-layout row v-if="searchData!=0">
                    <FilterData v-for="filterData in searchData" :key="filterData.id" :filterData="filterData" />
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
import FilterData from './FilterData.vue'
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
        FilterData
    },
    methods: {},
    computed: {
        products() {
            // 
            return this.$store.state.products
        },

        // get search filter from state

        ...mapState(['searchData'])

    },
    // call actions and passing value from component
    mounted() {
        this.$store.dispatch('getProducts');

    },

}
</script>
