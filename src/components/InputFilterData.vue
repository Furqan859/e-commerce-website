<template>
    <v-container fluid>
        <template>
            <v-container>
                <v-row no-gutters>
                    <v-col>
                        <div class="text-center">
                            <v-menu down offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn class="border-none" v-bind="attrs" v-on="on">
                                        Product Select
                                        <v-icon>
                                            mdi-arrow-down
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item v-for="item in $store.state.filterCategory" :key="item.id"
                                        :item="item" >
                                       
                                        <v-list-item-title>
                                            <v-chip @click="filterProduct(item)"> {{ item }}</v-chip>
                                        </v-list-item-title>
                                       
                                    </v-list-item>
                               

                                </v-list>
                            </v-menu>

                        </div>

                    </v-col>

                </v-row>
            </v-container>
        </template>
        <v-dialog v-model="dialog" width="500">
            <div v-for="filterData in selectFilterCategory" :key="filterData.id">
                <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                    <template v-slot:loader="{ isActive }">
                        <v-progress-linear :active="isActive" color="deep-purple" height="4"
                            indeterminate></v-progress-linear>
                    </template>

                    <v-window v-model="window" show-arrows>
                        <v-window-item v-for="image in filterData.images" :key="image">

                            <v-card height="200px" class="d-flex justify-center align-center">

                                <router-link :to="{ path: 'detailPage', query: { filterDataId: filterData.id } }">
                                    <v-img @click="DetailPageId(filterData.id)" cover height="200" :src="image"
                                        :productId="filterData.id"></v-img>
                                </router-link>
                            </v-card>

                        </v-window-item>
                    </v-window>

                    <v-card-title>
                        <v-row align="center" class="mx-0">
                            <v-row>{{ filterData.title }}</v-row>
                            <v-rating :v-model="filterData.rating" half-increments readonly size="large">
                            </v-rating>
                            <div class="text-grey ms-4">
                                {{ filterData.rating }}
                            </div>

                        </v-row>
                    </v-card-title>

                    <v-card-subtitle>
                        <span class="my-2">{{ filterData.brand }}</span>

                        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                    </v-card-subtitle>
                    <v-card-text>

                        <div class=" text-subtitle-1">
                            ${{ filterData.price }}
                        </div>

                        <div>{{ filterData.description }}</div>
                    </v-card-text>

                    <v-card-actions>

                        <v-btn @click="AddToCart(filterData.id)" color="deep-purple-lighten-2 " variant="text">
                            Add To Cart
                        </v-btn>

                    </v-card-actions>
                </v-card>
            </div>
            <v-btn @click="dialog = false">Close</v-btn>
        </v-dialog>
    </v-container>
</template>

<script>
import {
    mapGetters
} from 'vuex'
// import FilterData from '../views/FilterData.vue'
export default {

    name: 'InputFilterData',
    data: () => ({
        dialog: false,
        loading: false,
        selection: 1,
        length: 3,
        window: 0,

    }),
    components: {
        // FilterData
    },
    methods: {
        // this function for filter categories
        filterProduct(productFilterName) {
            this.$store.dispatch('filterSingleProduct', productFilterName),
                this.dialog = true
        },
        // get id from product and dispatch an action
        AddToCart(id) {
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
            console.log(id)
            this.$store.dispatch('ProductDescription',
                id
            )
        },

        // this function get a id for detail page
        DetailPageId(id) {
            this.$store.dispatch('DetailPageGet', id)
        },
       

    },
    mounted() {
        // dispatch action
        this.$store.dispatch('productSelect')
    },
    computed: {
        // get data from state
        ...mapGetters([
            'selectFilterCategory'
        ]),

    }

}
</script>

<style>

</style>
