<template>
<!-- detail page product show -->
<v-sheet :color="`grey ${inject.theme.default.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
    <v-skeleton-loader class="mx-auto" max-width="600" type="card">
        <v-container>
            <v-list two-line class="mb-5">
                <template class="mb-5">
                    <v-card avatar>
                        <v-card :loading="loading" class="mx-auto my-12" max-width="350">
                            <template v-slot:loader="{ isActive }">
                                <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
                            </template>

                            <v-window v-model="window" show-arrows>
                                <v-window-item v-for="image in detailPage.images" :key="image">

                                    <v-card height="300px" class="d-flex justify-center align-center">

                                        <v-img cover height="300" :src="image" :contain="true" class="fill-height" justify="center" align="center" image-size="cover"></v-img>

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
                                <div class="mx-4">{{ detailPage.description }}</div>
                            </v-card-text>

                            <v-card-actions>

                                <v-row>
                                    <v-btn @click="AddToCart(detailPage.id)" :disabled="isActive" color="deep-purple-lighten-2 mx-5 " variant="text">
                                        Add To Cart
                                    </v-btn>
                                </v-row>
                                <v-btn depressed  class="ma-2" :loading="loading" :disabled="loading" color="secondary" @click="loader = 'loading'">Discount:{{ detailPage.discountPercentage }}%</v-btn>

                            </v-card-actions>
                        </v-card>

                    </v-card>

                </template>
            </v-list>

        </v-container>
    </v-skeleton-loader>
</v-sheet>
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {

    data: () => ({
        count: 1,
        loading: false,
        selection: 1,
        length: 3,
        window: 0,
        isActive: false,
        inject: {
            theme: {
                default: {
                    isDark: false
                },
            },
        },

    }),
    methods: {
        // add product to cart
        AddToCart(id) {
            if (id == id) {
                this.isActive = true
            }
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
            this.$store.dispatch('ProductDescription', id)

        },

    },
    computed: {
        // get product detail page
        ...mapGetters([
            'detailPage',
        ]),

    }
}
</script>

<style scoped>
</style>
