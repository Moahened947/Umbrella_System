<template>
  <v-container fluid class="ml-md-6">
    <div class="todo-container">
      <h1 style="text-align: center">
        <v-icon>mdi-calendar-plus</v-icon> Todo List
      </h1>
      <div class="add-task-container">
        <input
          v-model="newTask"
          @keyup.enter="addTask"
          placeholder="Add a new task"
          class="task-input"
        />
        <input
          type="date"
          v-model="newTaskEndDate"
          placeholder="End Date"
          class="date-input"
        />
        <button @click="addTask" class="add-button">Add Task</button>
      </div>
      <ul class="task-list">
        <li
          v-for="(task, index) in tasks"
          :key="index"
          class="task-item"
          @dblclick="completeTask(index)"
          @mousedown.prevent
        >
          <div class="task-details">
            <span :class="{ completed: task.completed }">{{ task.text }}</span>
            <div class="dates">
              <span class="issue-date">Issue Date: {{ task.issueDate }}</span>
              <span class="end-date">End Date: {{ task.endDate }}</span>
            </div>
            <span v-if="task.completed" class="completed-text">Completed</span>
          </div>
          <button @click="confirmDelete(index)" class="delete-button">
            <v-icon>mdi-delete</v-icon>
          </button>
        </li>
      </ul>
    </div>
    <drawerComponent />
  </v-container>
</template>
<style scoped>
.todo-container {
  max-width: 600px;
  margin: auto;
  margin-top: 20px;
  font-family: "Arial", sans-serif;
}

.add-task-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 50px;
  margin-bottom: 20px;
}

.task-input {
  flex: 2;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.date-input {
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-button {
  background-color: green !important;
  color: white;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.delete-button {
  padding: 5px;
  margin-left: 15px;
  font-size: 14px;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-button:hover {
  background-color: rgb(146, 202, 146);
}
.delete-button:hover {
  background-color: rgb(135, 52, 52);
}

.task-list {
  list-style: none;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;
}

.task-details {
  flex-grow: 1;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

.dates {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}

.issue-date,
.end-date {
  font-size: 12px;
  color: #555;
}
.completed-text {
  font-size: 12px;
  color: red;
  display: block;
  font-weight: bold;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import drawerComponent from "../components/drawerComponent.vue";

const newTask = ref("");
const newTaskEndDate = ref("");
const tasks = ref([]);
const deletingIndex = ref(null);

const getTasks = () => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    const newTaskObject = {
      text: newTask.value,
      issueDate: new Date().toISOString().split("T")[0],
      endDate: newTaskEndDate.value,
      completed: false,
    };
    tasks.value.push(newTaskObject);
    newTask.value = "";
    newTaskEndDate.value = "";
    saveTasks();
  }
};

const completeTask = (index) => {
  tasks.value[index].completed = !tasks.value[index].completed;
  saveTasks();
};

const confirmDelete = (index) => {
  // Set the index to be deleted
  deletingIndex.value = index;
  // Show a confirmation alert
  if (confirm("Are you sure you want to delete this task?")) {
    deleteTask();
  } else {
    // Reset the deletingIndex if the user cancels the delete action
    deletingIndex.value = null;
  }
};

const deleteTask = () => {
  if (deletingIndex.value !== null) {
    tasks.value.splice(deletingIndex.value, 1);
    deletingIndex.value = null;
    saveTasks();
  }
};

// Fetch tasks on component mount
onMounted(() => {
  tasks.value = getTasks();
});
</script>
