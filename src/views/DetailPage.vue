<template>
<v-container>
    <v-list two-line class="mb-5">
        <template class="mb-5">
            <v-card  avatar>
                <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                    <template v-slot:loader="{ isActive }">
                        <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
                    </template>
                   

                    <v-window v-model="window" show-arrows>
                        <v-window-item v-for="image in detailPage.images" :key="image">

                            <v-card height="300px" class="d-flex justify-center align-center">

                                <v-img cover height="300" :src="image"></v-img>

                            </v-card>

                        </v-window-item>
                    </v-window> 

                  <v-card-title>
                        <v-row align="center" class="mx-4">
                            <v-row>{{ detailPage.title }}</v-row>
                            <div class="text-grey mx-4">
                                {{ detailPage.brand }}
                            </div>

                        </v-row>
                    </v-card-title>

                    <v-card-text>

                        <v-row align="center" class="my-2 mx-4">
                            <v-row> ${{ detailPage.price }}</v-row>
                            <div>
                                <v-btn x-small class="my-2 mx-2" @click="addProducts()">+</v-btn>
                                {{ count }}
                                <v-btn x-small class="my-2 mx-2" @click="removeProduct()">-</v-btn>
                            </div>
                        </v-row>

                        <div class="mx-4">{{ detailPage.description }}</div>
                    </v-card-text>

                    <v-card-actions>

                        <v-btn @click="AddToCart(detailPage.id)"  color="deep-purple-lighten-2 mx-4 " variant="text">
                            Add To Cart
                        </v-btn>

                    </v-card-actions>
                </v-card>
                
            </v-card>

        </template>
    </v-list>

    <v-container>
        <v-row align="center" class="mx-0">
            <v-row>
                <v-btn larger>Go to payment</v-btn>
            </v-row>
            <div>Total Price $:{{ detailPage.price * this.count }} </div>
        </v-row>
    </v-container>
</v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data: () => ({
        count: 1,
        loading: false,
        selection: 1,
        length: 3,
        window: 0,
    }),
    methods: {
        addProducts() {
            this.count++
        },
        removeProduct() {
            if (this.count > 1) {
                this.count = this.count - 1
            } else {
                this.count = 1
            }
            
        },
        AddToCart(id) {
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
            console.log(id)
            this.$store.state.id = id;
            this.$store.dispatch('ProductDescription',id)

        },
        

    },
    computed: {
       ...mapGetters([
        'detailPage'
       ]),
    }
}
</script>

<style scoped>
</style>
