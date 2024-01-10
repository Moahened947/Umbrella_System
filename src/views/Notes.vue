<script setup>
import { ref, onMounted } from "vue";
import drawerComponent from "../components/drawerComponent.vue";

const showModal = ref(false);
const newNote = ref("");
const isNewNote = ref(true);
const notes = ref([]);
const selectedNote = ref(null);

function getRandomColor() {
  const color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  return color;
}

const addNote = () => {
  notes.value.push({
    id: Math.floor(Math.random() * 100000),
    text: newNote.value,
    color: getRandomColor(),
    date: new Date(),
  });
  closeModal();
  saveNotesToLocalStorage();
};

const saveNotesToLocalStorage = () => {
  localStorage.setItem("notes", JSON.stringify(notes.value));
};

const loadNotesFromLocalStorage = () => {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notes.value = JSON.parse(storedNotes, (key, value) => {
      if (key === "date") {
        return new Date(value); // Parse 'date' property as a Date object
      }
      return value;
    });
  }
};

const openModal = (note) => {
  selectedNote.value = note;
  newNote.value = note.text;
  isNewNote.value = false;
  showModal.value = true;
};

const updateNote = () => {
  // Implement the update logic here
  if (selectedNote.value) {
    selectedNote.value.text = newNote.value;
    selectedNote.value.date = new Date();
  }
  saveNotesToLocalStorage();
  closeModal();
};

const deleteNote = () => {
  // Implement the delete logic here
  if (selectedNote.value) {
    const index = notes.value.indexOf(selectedNote.value);
    if (index !== -1) {
      notes.value.splice(index, 1);
    }
  }
  saveNotesToLocalStorage();
  closeModal();
};

const closeModal = () => {
  showModal.value = false;
  selectedNote.value = null;
  newNote.value = "";
  isNewNote.value = true;
};

onMounted(() => {
  loadNotesFromLocalStorage();
});
</script>


<template>
  <v-container fluid class="ml-md-6">
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <p @click="closeModal">x</p>
        <textarea v-model="newNote" />
        <button v-if="isNewNote" @click="addNote">Add Note</button>
        <button v-else @click="updateNote" style="background-color: green;">Update Note</button>
        <button v-if="!isNewNote" @click="deleteNote" style="background-color: red;">Delete Note</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1><v-icon>mdi-note</v-icon>Notes</h1>
        <button @click="showModal = true; isNewNote = true">+</button>
      </header>
      <hr>
      <div class="cards-container">
        <div
          v-for="note in notes"
          class="card"
          :style="{ backgroundColor: note.color }"
          @click="openModal(note)"
        >
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString("en-US") }}</p>
        </div>
      </div>
    </div>
    <drawerComponent :noResize="true" />
  </v-container>
</template>


<style scoped>
  .container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto
  }

  h1 {
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 65px;
    color: #2196f3;
  }

  .card {
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .main-text {
    line-height: 1.25;
    font-size: 17.5px;
    font-weight: bold;
  }

  .date {
    font-size: 12.5px;
    margin-top: auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: #2196f3;
    border-radius: 1000px;
    color: white;
    font-size: 20px;
  }
  .cards-container {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  main {
    height: 100vh;
    width: 100vw;
  }

  .modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: #2196f3;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;

  }

  .modal p {
    margin-left: auto;
    font-size: 20px;
    z-index: 100000;
    cursor: pointer;
  }

  textarea {
    border: 1px solid #2196f3;
    width: 100%;
    height: 200px;
    padding: 5px;
    font-size: 20px;
  }

</style>

<!-- <style>
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
</style> -->

<!-- <script setup>
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

</script> -->
