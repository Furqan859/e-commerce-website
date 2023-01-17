<template>
<v-row>
    <!-- carousel component -->
    <Carousel />
    <v-main>
        <v-app app>
            <v-container>
               
                <!-- search card  -->
                <v-layout row v-if="searchData.length >0">
                    <SearchCard v-for="filterData in searchData" :key="filterData.id" :filterData="filterData" />
                </v-layout>
                <!-- products data card  -->
                <v-layout v-else row>
                    <CardData v-for="product in updatePage" :key="product.id" :product="product" />
                </v-layout>
                <!-- pagination -->
                <div class="text-center mb-5" >
                    <v-pagination  v-model="page" :length="4" circle ></v-pagination>
                </div>
            </v-container>
        </v-app>
    </v-main>
</v-row>
</template>

<script>
import CardData from './CardData.vue'
import Carousel from '@/components/Carousel.vue';
import SearchCard from '../components/SearchCard.vue' //search component card

import {
    mapState
} from 'vuex'


export default {
    name: 'HomeView',
    data: () => ({
        dialog: false,
        page: 1,
        perPage: 25
    }),
    components: {
        CardData,
        SearchCard,
        Carousel
    },
    methods:{
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
    ,
    computed: {
        // get search filter from state and pass to component
        ...mapState(['searchData']),
        // get product data from state and pass to component
        ...mapState(['products']),
        //  pagination function
        updatePage() {
            this. scrollToTop();
            //  pagination function
            const start = (this.page - 1) * this.perPage;
            const end = start + this.perPage;
            return this.products.slice(start, end);
            

        }

    },
    // call actions to get product data and passing value from component
    mounted() {
        this.$store.dispatch('getProducts');

    },

}
</script>
