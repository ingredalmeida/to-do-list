<template>
    <div>
        <v-dialog v-model="openDialog" max-width="290px">
            <v-card>
                <v-card-title>
                    <span class="title text-h5 mt-3 font-weight-medium"
                        >Edit a task</span
                    >
                </v-card-title>
                <v-card-text class="card">
                    <v-text-field
                        label="Edit"
                        class="mt-3"
                        v-model="textTaskEdited"
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer> </v-spacer>
                    <v-btn
                        class="mb-4 pa-4 text-button"
                        text
                        color="#004D40"
                        @click="close(), save()"
                    >
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "ModalEdit",

    computed: {
        openDialog: {
            get() {
                return this.$store.getters["dialogEdit"];
            },
        },

        textTaskEdited: {
            get() {
                return this.$store.getters["textTaskEdited"];
            },

            set(value) {
                this.$store.commit("UPDATE_TASK_EDIT", ["text", value]);
            },
        },
    },

    methods: {
        close() {
            this.$store.commit("SET_MODAL_EDIT", false);
        },

		save() {
			this.$store.commit('UPDATE')
		},
    },
};
</script>

