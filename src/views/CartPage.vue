<template>
<!-- cart page where products show -->
<v-container>
    <h2 class="display-2 mb-4">Basket</h2>

    <v-list two-line class="mb-5">
        <template v-if="product.length != 0">
            <v-card v-for="(prod, index) in product" :key="prod.id" avatar>
                <v-card :loading="loading" class="mx-auto my-12" width="350">
                    <template v-slot:loader="{ isActive }">
                        <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
                    </template>

                    <v-window v-model="window" show-arrows max-height="300p">
                        <v-window-item v-for="image in prod.images" :key="image">

                            <v-card height="200px" class="d-flex justify-center align-center">

                                <v-img cover height="250" :src="image" :contain="true" class="fill-height" justify="center" align="center" image-size="cover"></v-img>

                            </v-card>

                        </v-window-item>
                    </v-window>

                    <v-card-title>

                        <v-row align="center" class="mx-4">
                            <v-row>{{ prod.title }}</v-row>

                            <!-- <div class="text-grey mx-4">
                                {{ prod.brand }}
                            </div> -->

                        </v-row>
                    </v-card-title>

                    <v-card-text>
                        <v-row class="mx-1 my-auto">{{ prod.brand }}</v-row>
                        <h1 class="my-1 black--text "> ${{ prod.price * prod.quantity }}</h1>

                        <v-layout row class="pa-2" justify-center>
                            <v-btn class="mx-2 " x-small v-if="prod.quantity<=prod.stock " @click="prod.quantity++">+</v-btn>
                            <p>{{ prod.quantity }}</p>
                            <v-btn x-small class="mx-2 " v-if="prod.quantity>1 " @click="prod.quantity--">-</v-btn>
                        </v-layout>

                        <v-chip cols="12" color="black " class="white--text ">
                            Discount:{{ prod.discountPercentage }}%
                        </v-chip>

                        <div class="mx-4">{{ prod.description }}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="mx-3 " variant="text" @click="removeCartDataId(index)">
                            Remove
                        </v-btn>

                        <v-row>
                        </v-row>

                    </v-card-actions>
                </v-card>

            </v-card>

        </template>
        <template v-else>
            <v-card class="text-center"> No Product Added</v-card>
        </template>
        <v-container fluid>
        <v-row align="center" class="mx-0">
            <v-row>
                <router-link style="text-decoration: none; color: inherit;" to="/basketCheckout">
                    <v-btn larger>Go to payment</v-btn>
                </router-link>
            </v-row>
            <div>
                <div>Delivery Charges :$50</div>
                <div> Grand Total : {{totalPrices}} </div>
            </div>
        </v-row>
    </v-container>
    </v-list>

    
</v-container>
</template>

<script>
import {
    mapGetters
} from 'vuex'

export default {

    data: () => ({

            loading: false,
            selection: 1,
            length: 3,
            window: 0,
            totalPrice: 0,

        })

        ,
    methods: {
        // remove data from cart
        removeCartDataId(id) {
            this.$store.commit('removeCartData', id)
            console.log(id, "this is remove id")
        },

    },
    computed: {
        // get data from store
        ...mapGetters(['product']),
        // calculate total price function
        totalPrices() {
            return this.product.reduce((total, prod) => {
                return total + prod.price * prod.quantity + 50
            }, 0)
        }

    }

}
</script>

<style scoped>

</style>
