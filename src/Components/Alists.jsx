import React, { useState } from "react";
import * as XLSX from "xlsx";

const Alists = (item) => {
  const [data, setData] = useState([]);

  // This function handles the file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Get the file from the input
    if (!file) return; // If no file selected, return

    const reader = new FileReader();

    reader.onload = (event) => {
      // Parse the uploaded Excel file
      const binaryString = event.target.result;
      const wb = XLSX.read(binaryString, { type: "binary" });

      // Assuming the data is in the first sheet
      const sheet = wb.Sheets[wb.SheetNames[0]];

      // Convert sheet data to JSON format
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setData(jsonData); // Store the parsed data in state
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <h1>Upload Excel File</h1>
      <input type="file" accept=".xlsx,.xls" onChange={handleFileUpload} />
      <div>
        <h2>Data from Excel:</h2>
        <table border="1">
          <thead>
            <tr>
              {data[0] &&
                Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alists;
