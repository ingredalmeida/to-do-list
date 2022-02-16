<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <v-card max-width="475" class="mx-auto mt-10">
                <v-toolbar dark color="teal darken-4">
                    <v-app-bar-nav-icon>
                        <v-icon>mdi-beaker-check</v-icon>
                    </v-app-bar-nav-icon>
                    <v-toolbar-title>ToDo List</v-toolbar-title>
                    <v-spacer />
                    <NewTask />
                </v-toolbar>
            </v-card>
            <TaskItem />
        </v-col>
    </v-row>
</template>

<script>
import NewTask from "~/components/NewTask.vue";
import TaskItem from "~/components/TaskItem.vue";
import { mapState } from "vuex";
import { state } from "~/store";

export default {
    components: {
        NewTask,
        TaskItem,
    },

    computed: {
        ...mapState({
            list: (state) => state.taskList,
        }),
    },
};
</script>
