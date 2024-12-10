function updateTable() {
    // Get the number of rows and columns from input fields
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
  
    // Update the displayed row and column count
    document.getElementById('rowCount').textContent = rows;
    document.getElementById('columnCount').textContent = columns;
  
    // Get the reference to the table where rows and cells will be inserted
    const table = document.getElementById('dynamicTable');
    
    // Clear the previous table contents before creating a new one
    table.innerHTML = ''; // This removes any previous rows or cells
  
    // Loop through each row
    for (let i = 1; i <= rows; i++) {
        // Create a new row in the table
        const row = table.insertRow();
        
        // Loop through each column within the current row
        for (let j =1; j <= columns; j++) {
            // Create a new cell within the current row
            const cell = row.insertCell();
            
            // Set the cell content based on its position (i, j)
            cell.textContent = (i - 1) * columns + j;
        }
    }
}
  
// Initialize the table when the page is loaded
updateTable();
