<template>
<v-container>
    <h2 class="display-2">Basket checkout</h2>

    <form action="">
        <v-layout>
            <v-flex x6>
                <strong>Payment address</strong>
                <v-text-field label="Name"></v-text-field>
                <v-text-field label="Address"></v-text-field>
                <v-text-field label="Zip-code"></v-text-field>
                <v-text-field label="City"></v-text-field>
                <v-text-field label="Phone"></v-text-field>
                <v-text-field label="E-mail"></v-text-field>

                <v-checkbox v-model="delivery_address" label="Other delivery address"></v-checkbox>
            </v-flex>
            <v-flex x6>
                <strong>Delivery address</strong>
                <div v-if="delivery_address">
                    <v-text-field label="Name"></v-text-field>
                    <v-text-field label="Address"></v-text-field>
                    <v-text-field label="Zip-code"></v-text-field>
                    <v-text-field label="City"></v-text-field>
                </div>
                <div v-else>
                    <v-alert type="info" :value="true">
                        The delivery address is the same as the payment address
                    </v-alert>
                </div>
            </v-flex>

        </v-layout>

    </form>

    <v-row>
        <v-btn dark @click.stop="dialog = true">
            Complete Order
        </v-btn>

        <v-dialog v-model="dialog" max-width="290">
            <v-card>

                <v-card-text>
                    Your Has been Placed Successfully.
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="dialog = false">
                        Disagree
                    </v-btn>

                    <v-btn color="green darken-1" text @click="dialog = false">
                        <router-link style="text-decoration: none; color: inherit;" to="/">Agree</router-link>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>

</v-container>
</template>

<script>
export default {
    name: "BasketCheckout",

    data() {
        return {
            delivery_address: false,
            dialog: false,
            product: null
        }
    },

}
</script>

<style scoped>
</style>
