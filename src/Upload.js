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
      <div className="App">
      <form onSubmit={handleUpload}>
        <label  classname = "selectbtn" htmlFor="pdf_file">Select a PDF file:</label>
        <input type="file" name="pdf_file" id="pdf_file" onChange={handleFileChange} accept=".pdf" />
        <button  classname="uploadbtn" type="submit">Upload</button>
      </form>
      </div>
    );
  }
  
  
  
  export default Upload;