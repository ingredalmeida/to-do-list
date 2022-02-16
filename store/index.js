export const state = () => ({
	taskList: [{ text: 'cortar cabelo', done: false, id: 0 }, { text: 'comprar roupa', done: false, id: 1 }],
	task: {
		text: '',
		done: false
	},
	taskEdited: {
		text: '',
		done: false,
		id: null,
	},
	counter: 2,
	dialogAdd: false,
	dialogEdit: false,
})

export const mutations = {
	ADD_TASK(state, task) {
		state.taskList.push({
			...task,
			id: state.counter++,
		})
	},

	EDIT_TASK(state, task) {
		const taskToEdit = state.taskList.find(({ id }) => id === task.id)
		state.taskEdited = taskToEdit
	},

	REMOVE_TASK(state, { id }) {
		state.taskList = state.taskList.filter(task => task.id !== id)
	},

	TOGGLE_TASK(state, { id }) {
		state.taskList = state.taskList.map(task => ({ ...task, done: task.id === id ? !task.done : task.done }))
	},

	UPDATE_TASK(state, payload) {
		const [field, val] = payload
		state.task[field] = val
	},

	UPDATE_TASK_EDIT(state, payload) {
		const [field, val] = payload
		state.taskEdited[field] = val
	},

	UPDATE(state) {
		const index = state.taskList.findIndex(({ id }) => id === state.taskEdited.id)
		state.taskList[index] = state.taskEdited
	},

	SET_MODAL_ADD(state, payload) {
		state.dialogAdd = payload;
	},

	SET_MODAL_EDIT(state, payload) {
		state.dialogEdit = payload;
	},
}


export const getters = {
	allTasks: (state) => state.taskList,
	textTask: (state) => state.task.text,
	doneTask: (state) => state.task.done,
	textTaskEdited: (state) => state.taskEdited.text,
	dialogAdd: (state) => state.dialogAdd,
	dialogEdit: (state) => state.dialogEdit,
}

