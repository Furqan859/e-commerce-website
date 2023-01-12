<template>
<v-footer dark >
    <v-card flat tile class=" lighten-1 white--text text-center">
        <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                <v-icon size="24px">
                    {{ icon }}
                </v-icon>
            </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
            This is the E-commerce Store Where You can Buy Product and search product and filter it. User Page and also contact and about us page In this Application i will use vue and vue-x store and i will use vue-x store </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>E-commerce</strong>
        </v-card-text>
    </v-card>
</v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>
