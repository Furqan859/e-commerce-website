<template>
    <v-container>
        <h2 class="display-2 mb-4">Basket</h2>

        <v-list two-line class="mb-5">
            <template v-if="product.length != 0">
                <v-card v-for="(prod, index) in product" :key="prod.id" avatar>
                    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                        <template v-slot:loader="{ isActive }">
                            <v-progress-linear :active="isActive" color="deep-purple" height="4"
                                indeterminate></v-progress-linear>
                        </template>

                        <v-window v-model="window" show-arrows>
                            <v-window-item v-for="image in prod.images" :key="image">

                                <v-card height="200px" class="d-flex justify-center align-center">

                                    <v-img cover height="200" :src="image"></v-img>

                                </v-card>

                            </v-window-item>
                        </v-window>

                        <v-card-title>
                            <v-row align="center" class="mx-4">
                                <v-row>{{ prod.title }}</v-row>
                                <div class="text-grey mx-4">
                                    {{ prod.brand }}
                                </div>

                            </v-row>
                        </v-card-title>

                        <v-card-text>

                            <v-row align="center" class="my-2 mx-4">
                                <v-row> ${{ prod.price }}</v-row>
                                <div>
                                    <v-btn x-small class="my-2 mx-2" @click="addQuantity(prod.id)">+</v-btn>
                                    {{ totalQuantity }}
                                    <v-btn x-small class="my-2 mx-2" @click="removeQuantity(prod.id)">-</v-btn>
                                </div>
                            </v-row>

                            <div class="mx-4">{{ prod.description }}</div>
                        </v-card-text>

                        <v-card-actions>

                            <v-row>
                                <v-btn color="mx-3 " variant="text"
                                    @click="removeCartDataId(index)">
                                    Remove
                                </v-btn>
                                <div>Quantity:{{ totalQuantity }} prodId: {{ prod.id }}</div>
                            </v-row>
                            <div>Total Price:${{ totalQuantity * prod.price }}</div>
                            

                        </v-card-actions>
                    </v-card>

                </v-card>

            </template>
            <template v-else>
                <v-card class="text-center"> No Product Added</v-card>
            </template>
        </v-list>

        <v-container fluid>
            <v-row align="center" class="mx-0">
                <v-row>
                    <router-link style="text-decoration: none; color: inherit;" to="/basketCheckout">
                        <v-btn larger>Go to payment</v-btn>
                    </router-link>
                </v-row>
                <div>
                    <div>Delivery Charges:250/=</div>
                    <div>Grand Total : total </div>
                </div>
            </v-row>
        </v-container>
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
        totalQuantity: 1,

    })

    ,
    methods: {
        // remove data from cart
        removeCartDataId(id) {
            this.$store.commit('removeCartData', id)
            console.log(id, "this is remove id")
        },
        // add quantity to cart
        addQuantity(id) {
            if(id == id){
            this.totalQuantity++
            console.log(id, "this is add id")
            }
        },
        // remove quantity from cart
        removeQuantity(id) {
            console.log(id, "this is remove id")
            if (this.totalQuantity > 1) {
                this.totalQuantity = this.totalQuantity - 1
            } else {
                this.totalQuantity = 1
            }

        },



    },
    computed: {
        // get data from store
        ...mapGetters(['product'])

    }

}
</script>

<style scoped>

</style>
