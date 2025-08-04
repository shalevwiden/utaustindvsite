// this is for the stats page sheetJs

console.log("Running sheet.js for stats file");

window.addEventListener("DOMContentLoaded", async () => {
  //
  const container = document.getElementById("tablecontainer");
  container.innerText = "test";
  const csvUrl =
    "https://storage.googleapis.com/degreeview-ut/ut-stats/csvs/universityoftexas_stats.csv";
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
    container.innerHTML = htmlTable;
  } catch (err) {
    container.innerHTML = `<p style="color:red; font-weight:bold;">Failed to load CSV: ${err.message}</p>`;
    console.error("CSV load error:", err);
  }
});
