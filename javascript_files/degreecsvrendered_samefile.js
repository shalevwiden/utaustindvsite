// this is the one thats rendered on another page

console.log("Running degreecsvrendered_samefile file");

// can change this later, to render a diferent one in the browser.
// gets the full googleapis url
let csvtorender = document.getElementById("majorcoursesdownload").href;

//
window.addEventListener("DOMContentLoaded", async () => {
  // table container is where the
  const container = document.getElementById("csvtablecontainer");
  const csvUrl = csvtorender;
  try {
    const response = await fetch(csvUrl);
    const csvText = await response.text();

    // Properly parse CSV with Sheet.js (handles quoted commas)
    const workbook = XLSX.read(csvText, { type: "string" });

    // Get the first worksheet
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // Convert to HTML table
    const htmlTable = XLSX.utils.sheet_to_html(worksheet);

    // Inject table
    tablecontainer.innerHTML = htmlTable;
  } catch (err) {
    tablecontainer.innerHTML = `<p style="color:red;">Failed to load CSV: ${err.message}</p>`;
    console.error("CSV load error:", err);
  }
});
