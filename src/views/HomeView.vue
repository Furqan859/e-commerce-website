<template>
<v-row>
    <v-main>
        <v-app app>
            <v-container fluid>
                <!-- <div v-for="item in items" :key="item.id" >
                        {{item.brand}}
                    </div> -->
                <v-layout row>
                   <InputFilterData/>

                    <card-data v-for="product in products" :key="product.id" :product="product" />
                </v-layout>

                <div class="text-center mb-5">
                    <v-pagination v-model="page" :length="4" circle></v-pagination>
                </div>
            </v-container>
        </v-app>
    </v-main>

</v-row>
</template>

<script>
import CardData from './CardData.vue'
import InputFilterData from '../components/InputFilterData.vue'

export default {
    name: 'HomeView',
    data: () => ({
    }),
    components: {
        CardData,
        InputFilterData
    },

    computed: {
        products() {
            return this.$store.state.products;

        }
    },
    mounted() {
        this.$store.dispatch('getProducts');

    },
    beforeUpdate() {
        this.items = this.$store.state.products;
    }
}
</script>
