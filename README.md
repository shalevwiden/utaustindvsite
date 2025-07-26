## DegreeView Website:

DegreeView is a website that provides and displays data visualizations and data on degree programs and courses at the University of Texas at Austin. All data is sourced directly from the undergraduate catalog of the University of Texas at Austin, catalog.utexas.edu.
<br>
See the website live at https://www.degreeviewsite.com/
<br>
DegreeView uses mermaid.js for creating flowchart graphs.
The following python libraries are also used: BeautifulSoup and Requests (for web scraping), csv and OpenPyXL (for tabular formatting of data), google-cloud (for automating uploading to Google Cloud Storage), and ReportLab, Pillow, PyPDF2, and cairoSVG for pdf generation.
<br><br>
There are likely 50,000+ lines of code across everything in this project. Each mermaid file that creates a graph is 200-300 lines of code, each html file for each degree page and each school page is 200-300 as well. There are 141 degree pages and 14 school pages. Of course those are primarily automated, being built off of a template that loops through variables, but also thousands of lines of hand written python generated the csv, excel, mmd, and pdf files and scraped the data and thousands of lines of CSS styled everything and provided animation and responsivity.
<br>

---

In addition sheet.js is used briefly on the stats page to facilitate rendering a csv into an HTML table.
Built over the course of July 2025.

<br>
