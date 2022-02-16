<template>
    <div>
        <v-btn icon @click="open()">
            <v-icon> mdi-plus </v-icon>
        </v-btn>

        <v-dialog v-model="openDialog" max-width="290px">
            <v-card>
                <v-card-title>
                    <span class="title text-h5 mt-3 font-weight-medium"
                        >Create a new task</span
                    >
                </v-card-title>
                <v-card-text class="card">
                    <v-text-field
                        label="Description"
                        class="mt-3"
                        v-model="taskText"
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer> </v-spacer>
                    <v-btn
                        class="mb-4 pa-4 text-button"
                        text
                        color="#004D40"
                        @click="add(), close()"
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
    name: "ModalAdd",

    computed: {
        taskText: {
            get() {
                return this.$store.getters["textTask"];
            },

            set(value) {
                this.$store.commit("UPDATE_TASK", ["text", value]);
            },
        },

        openDialog: {
            get() {
                return this.$store.getters["dialogAdd"];
            },
        },
    },

    methods: {
        add() {
            const task = {
                text: this.taskText,
                done: false,
            };
            console.log(this.task);
            this.$store.commit("ADD_TASK", task);
            this.taskText = "";
        },

        close() {
            this.$store.commit("SET_MODAL_ADD", false);
        },

        open() {
            this.$store.commit("SET_MODAL_ADD", true);
        },
    },
};
</script>

<style>
.title {
    color: #004d40;
}

.card {
    padding: 0 24px 20px;
    height: 100px;
}

.text-button {
    font-size: 1rem;
}
</style>


