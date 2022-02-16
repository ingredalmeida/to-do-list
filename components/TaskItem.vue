<template>
    <div>
        <v-card v-for="task in list" :key="task" class="list-items pa-2">
            <v-list-item>
                <v-list-item-content
                    :class="{ 'text-decoration-line-through': task.done }"
                >
                    {{ task.text }}
                </v-list-item-content>
                <v-icon color="#004D40" class="pa-1" small @click="done(task)"
                    >mdi-check-all</v-icon
                >
                <v-icon color="amber" class="pa-1" small @click="edit(task)"
                    >mdi-pencil-outline</v-icon
                >
                <ModalEdit />
                <v-icon color="red" class="pa-1" small @click="remove(task)"
                    >mdi-trash-can-outline</v-icon
                >
            </v-list-item>
        </v-card>
    </div>
</template>

<script>
import ModalEdit from "~/components/ModalEdit.vue";
export default {
    name: "TaskItem",

    components: {
        ModalEdit,
    },

    computed: {
        list: {
            get() {
                return this.$store.getters["allTasks"];
            },
        },
    },

    methods: {
        done(task) {
            this.$store.commit("TOGGLE_TASK", task);
        },

        remove(task) {
            this.$store.commit("REMOVE_TASK", task);
        },

        edit(task) {
            this.$store.commit("EDIT_TASK", task);
			this.$store.commit('SET_MODAL_EDIT', true)
        },
    },
};
</script>

<style>
.list-items {
    margin-right: 46px;
    margin-left: 46px;
    margin-top: 8px;
    margin-bottom: 8px;
}
</style>
