import { useState } from 'react';

function Upload() {
    const [selectedFile, setSelectedFile] = useState(null);
  
    function handleFileChange(event) {
      setSelectedFile(event.target.files[0]);
    }
  
    function handleUpload(event) {
      event.preventDefault();
      const formData = new FormData();
      formData.append('pdf_file', selectedFile);
      console.log(selectedFile);
      // TODO: send formData to the server
    }
  
  
  
  
    return (
      <div className="upParent">
        <div><h1>Upload the file</h1></div>
      <div className="Upload container">
      <form onSubmit={handleUpload} className="upForm">
        <label  className = "Upselectbtn" htmlFor="pdf_file">Select a PDF file:</label>
        <input type="file" name="pdf_file" id="pdf_file" onChange={handleFileChange} accept=".pdf" />
        <button  className="uploadbtn" type="submit">Upload</button>

      </form>
      </div>
      </div>
    );
  }
  
  
  
  export default Upload;