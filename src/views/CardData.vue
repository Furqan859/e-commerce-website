<template>
<!-- main home products card  -->
<v-card :loading="loading" class="mx-auto my-3" width="350">
    <template v-slot:loader="{ isActive }">
        <v-progress-linear :active="isActive" color="deep-purple" height="3" indeterminate></v-progress-linear>
    </template>
    <v-window v-model="window" show-arrows max-height="300px" max-width="100%">
        <v-window-item v-for="image in product.images" :key="image">

            <v-card class="d-flex justify-center align-center">

                <router-link :to="{ path: 'detailPage', query: { productId: product.id }}">
                    <v-img cover height="250" :src="image" :productId="product.id" @click="DetailPageId(product.id)" :contain="true" class="fill-height" justify="center" align="center" image-size="cover"> </v-img>
                </router-link>
            </v-card>

        </v-window-item>
    </v-window>

    <v-card-title>
        <v-row align="center" class="mx-0">
            <v-row>{{ product.title }}</v-row>
            <v-rating :v-model="product.rating" half-increments readonly size="large">
            </v-rating>
            <div class="text-grey ms-4">
                {{ product.rating }}
            </div>

        </v-row>
    </v-card-title>

    <v-card-subtitle>
        <span class="my-2">{{ product.brand }}</span>

        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
    </v-card-subtitle>
    <v-card-text>

        <div class=" text-subtitle-1">
            ${{ product.price }}
        </div>

        <div>{{ product.description }}</div>
    </v-card-text>
</v-card>
</template>

<script>
export default {
    name: 'CardData',
    props: ["product"],
    data: () => ({
        loading: false,
        selection: 1,
        length: 3,
        window: 0,
        inject: {
            theme: {
                default: {
                    isDark: false
                },
            },
        },

    }),

    methods: {
        //dispatch detail page 

        DetailPageId(id) {
            this.$store.dispatch('DetailPageGet', id)
            console.log(id, "this is detail page id")
        },

    },

}
</script>
