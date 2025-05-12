const PASSWORD = "sas";

function checkPassword() {
  const input = document.getElementById("password-input").value;
  if (input === PASSWORD) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("note-section").style.display = "block";
  } else {
    document.getElementById("login-message").innerText = "Wrong password!";
  }
}

function saveNote() {
  const noteText = document.getElementById("note-input").value;
  if (!noteText) return;

  const noteRef = database.ref("notes").push();
  noteRef.set({
    text: noteText,
    time: new Date().toISOString()
  });

  document.getElementById("note-input").value = "";
}

function loadNotes() {
  const notesList = document.getElementById("notes-list");
  database.ref("notes").on("value", snapshot => {
    notesList.innerHTML = "";
    snapshot.forEach(child => {
      const li = document.createElement("li");
      li.textContent = child.val().text;
      notesList.appendChild(li);
    });
  });
}

window.onload = () => {
  loadNotes();
};
