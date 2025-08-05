copyicon = document.getElementById("copyicon");
console.log("Copy Script Present");

// this is the one on the rendered page
semester_csv_container = document.getElementById("semester-csvtablecontainer");
if (semester_csv_container) {
  function copytoclipboard() {
    const outputtext = semester_csv_container.innerText;
    navigator.clipboard
      .writeText(outputtext)
      .then(() => alert("Copied! (try pasting in an Excel file)"))
      .catch(() => alert("Failed to copy."));
  }
  copyicon.addEventListener("click", copytoclipboard);
}

// this is the one on the degreepage
csvtablecontainer = document.getElementById("csvtablecontainer");
if (csvtablecontainer) {
  function copytoclipboard() {
    const outputtext = csvtablecontainer.innerText;
    navigator.clipboard
      .writeText(outputtext)
      .then(() => alert("Copied! (try pasting in an Excel file)"))
      .catch(() => alert("Failed to copy."));
  }
  copyicon.addEventListener("click", copytoclipboard);
}
