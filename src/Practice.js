import React, { useState } from 'react';
import {FormControl,  InputLabel, Select, MenuItem, Button}from '@mui/material/';
import { Container } from '@mui/system';
import TextField from '@mui/material/TextField';


const Practice = () => {
  const [formValues, setFormValues] = useState({
    city: '',
    state: '',
    date: '',
    name1: '',
    address1: '',
    name2: '',
    address2: '',
    address3: '',
    type: '',
    bed: '',
    bath: '',
    car: '',
    sqft: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleOpen = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <div>
        <Container>
      <form onSubmit={handleSubmit}>
      <FormControl fullWidth>
          <TextField
        id="city"
        label="City"
        type="text"
        onChange={handleChange}
        // sx={{ width: 220 }}
      />
          </FormControl>
          <br/><br/>

        <FormControl fullWidth>
        <TextField
        id="state"
        label="State"
        type="text"
        onChange={handleChange}
        // sx={{ width: 220 }}
      />
          </FormControl>
        <br /><br/>

        <FormControl fullWidth>
          <TextField
        id="date"
        label="Agreement Date"
        type="date"
        onChange={handleChange}
        defaultValue="2023-02-21"
        // sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
        </FormControl>
        <br /><br/>

        <FormControl fullWidth>
        <TextField
        id="name1"
        label="Landlord Name"
        type="text"
        onChange={handleChange}
        // sx={{ width: 220 }}
      />
          </FormControl>
        <br /><br/>

        <FormControl fullWidth>
        <TextField
        id="address1"
        label="Landlord Address"
        type="text"
        onChange={handleChange}
        // sx={{ width: 220 }}
      />
          </FormControl>
        <br /><br/>

        <FormControl fullWidth>
        <TextField
        id="name2"
        label="Tenant Name"
        type="text"
        onChange={handleChange}
        // sx={{ width: 220 }}
      />
          </FormControl>
        <br /><br/>

        <FormControl fullWidth>
        <TextField
        id="address2"
        label="Tenant Address"
        type="text"
        onChange={handleChange}
        // sx={{ width: 220 }}
      />
          </FormControl>
        <br /><br/>

        <FormControl fullWidth>
        <TextField
        id="address3"
        label="Land Address"
        type="text"
        onChange={handleChange}
        // sx={{ width: 220 }}
      />
          </FormControl>
        <br /><br/>

        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type of Property</InputLabel>
          <Select 
          labelId="demo-simple-select-label"
          id="type"
          label="Type of Property"
          // sx={{ width: 220 }}
          name="type" 
          onChange={handleChange}>

            <MenuItem value={"value1"}>value1</MenuItem>
            <MenuItem value={"value2"}>value2</MenuItem>
            <MenuItem value={"value3"}>value3</MenuItem>
            <MenuItem value={"value4"}>value4</MenuItem>
          </Select>
          </FormControl>
        <br /><br/>

        <FormControl fullWidth>
        <TextField
        id="bed"
        label="No. of Bedroom"
        type="number"
        onChange={handleChange}
        // sx={{ width: 220 }}
      />
          </FormControl>
        <br /><br/>

        <FormControl fullWidth>
        <TextField
        id="bath"
        label="No. of Bathroom"
        type="number"
        onChange={handleChange}
        // sx={{ width: 220 }}
      />
          </FormControl>
        <br /><br/>

        <FormControl fullWidth>
        <TextField
        id="car"
        label="No. of Car parking area"
        type="number"
        onChange={handleChange}
        // sx={{ width: 220 }}
      />
          </FormControl>
        <br /><br/>

        <FormControl fullWidth>
        <TextField
        id="sqft"
        label="Sqft"
        type="number"
        onChange={handleChange}
        // sx={{ width: 220 }}
      />
          </FormControl>
        <br /><br/>

        <Button type="submit" variant="contained">Generate PDF</Button>
      </form>
        </Container>
    </div>
  );
};

export default Practice;