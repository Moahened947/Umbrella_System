<template>
  <v-container fluid class="ml-md-6">
          <h2>
        <v-icon>mdi-note</v-icon>
        Notes
      </h2>
  <div id="app2">

    <button class="add-note" @click="addNote">+</button>

    <div v-for="note in notes" :key="note.id" class="note-container">
      <textarea
        class="note"
        v-model="note.content"
        placeholder="Empty Sticky Note"
        @change="updateNote(note.id, note.content)"
      ></textarea>
      <button class="delete-note" id="del" @click="deleteNote(note.id)">
        <v-icon>mdi-delete</v-icon>
      </button>
    </div>
  </div>
  <drawerComponent :noResize="true" />
</v-container>
</template>

<style>
body {
  margin: 0;
  background: white;
}

#app2 {
  display: flex;
    flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, 200px);
  padding: 24px;
  gap: 24px;
}

.note {
  height: 200px;
  width: 300px;
  box-sizing: border-box;
  padding: 16px;
  border: none;
  border-radius: 10px;
  background-color: aqua;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);
  resize: none;
  font-family: sans-serif;
  font-size: 16px;
}

.add-note {
  height: 200px;
  width: 200px;
  border: none;
  outline: none;
  background: whitesmoke;
  border-radius: 10px;
  font-size: 120px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: background 0.2s;
}

.add-note:hover {
  background: rgba(0, 0, 0, 0.2);
}
.delete-note {
  margin-bottom: 6px;
  position: absolute;
  bottom: 5px;
  right: 6px;
  background-color: #ff6b6b;
  color: #fff;
  border-radius: 5px;
  padding: 5px 5px;
}

.delete-note:hover {
  background-color: #d9534f;
}
.note-container {
  position: relative;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import drawerComponent from "../components/drawerComponent.vue";

const notes = ref(getNotes());


onMounted(() => {
  notes.value.forEach((note) => {
    createNoteElement(note.id, note.content);
  });
});

function getNotes() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note");
  element.value = content;
  element.placeholder = "Empty Sticky Note";

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

}

function addNote() {
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };

  createNoteElement(noteObject.id, noteObject.content);
  notes.value.push(noteObject);
  saveNotes(notes.value);
}

function updateNote(id, newContent) {
  const targetNote = notes.value.find((note) => note.id === id);

  if (targetNote) {
    targetNote.content = newContent;
    saveNotes(notes.value);
  }
}

function deleteNote(id) {
  // Display a confirmation dialog
  const isConfirmed = confirm("Are you sure you want to delete this note?");

  // Check if the user confirmed the deletion
  if (isConfirmed) {
    // Filter out the note with the specified id
    notes.value = notes.value.filter((note) => note.id !== id);

    // Save the updated notes
    saveNotes(notes.value);
  }
}

</script>
