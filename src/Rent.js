import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, Image, pdf } from '@react-pdf/renderer';
import rs20 from './assets/rs20.png';

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    padding: 20,
    fontFamily: 'Helvetica',
  },
  section: {
    // margin: 10,
    padding: 30,
    flexGrow: 1,
  },
  heading: {
    textDecoration: 'underline',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: "center",
  },
  subheading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 2,
    letterSpacing: 0.6,
  },
  image: {
    width: '100%',
    // width: 200,
    // height: 100,
    marginBottom: 140,
  },
});

const MyDocument = ({ formValues }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.image} src={rs20} />
      <View style={styles.section}>
        <Text style={styles.heading}>RESIDENTIAL RENTAL AGREEMENT</Text>
        {/* <Text style={styles.subheading}>Details</Text> */}
        {/* <Text style={styles.text}>Name: {formValues.name}</Text>
        <Text style={styles.text}>Email: {formValues.email}</Text>
        <Text style={styles.text}>Address: {formValues.address}</Text> */}
        <Text style={styles.text}>
            This agreement made at {formValues.city},{formValues.state} on this {formValues.date} between {formValues.name1}, residing at {formValues.address1} hereinafter referred to as `LESSOR` of One Part AND {formValues.name2} residing at {formValues.address2} hereinafter referred to as the `LESSEE` of the other Part;
        </Text>
        <Text style={styles.text}>
            WHEREAS the Lessor is the lawful owner of, and otherwise well sufficiently entitled to {formValues.address3} falling in the category, {formValues.type} and comprising of {formValues.bed} Bedrooms, {formValues.bath} Bathrooms, {formValues.car} Carparks with an extent of {formValues.sqft} Square Feet hereinafter referred to as the `said premises`;
        </Text>
      </View>
    </Page>
  </Document>
);

const Rent = () => {
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
    generatePdf();
  };

  const generatePdf = () => {
    const doc = <MyDocument formValues={formValues} />;
    const asPdf = pdf(doc).toBlob();
    asPdf.then((blob) => {
      const url = window.URL.createObjectURL(blob);
      handleOpen(url);
    });
  };

  const handleOpen = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <div class="parent">
    <div class="container">
      <h1>Fill in the details</h1>
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input class="input" type="text" name="city" value={formValues.city} onChange={handleChange} />
        </label>
        <br />

        <label>
          State:
          <input class="input" type="text" name="state" value={formValues.state} onChange={handleChange} />
        </label>
        <br />

        <label>
          Date:
          <input class="input" type="date" name="date" value={formValues.date} onChange={handleChange} />
        </label>
        <br />

        <label>
          Landlord name:
          <input class="input" type="text" name="name1" value={formValues.name1} onChange={handleChange} />
        </label>
        <br />

        <label>
          Landlord address:
          <textarea class="input" type="text" name="address1" value={formValues.address1} onChange={handleChange} />
        </label>
        <br />

        <label>
          Tenant name:
          <input class="input" type="text" name="name2" value={formValues.name2} onChange={handleChange} />
        </label>
        <br />

        <label>
          Tenant address:
          <textarea class="input" type="text" name="address2" value={formValues.address2} onChange={handleChange} />
        </label>
        <br />

        <label>
          Land address:
          <textarea class="input" type="text" name="address3" value={formValues.address3} onChange={handleChange} />
        </label>
        <br />

        <label>
          Type of Property:
          <select class="input" name="type" value={formValues.type} onChange={handleChange}>
            <option>value1</option>
            <option>value1</option>
            <option>value1</option>
            <option>value1</option>
          </select>
        </label>
        <br />

        <label>
          No. of Bedroom:
          <input class="input" type="number" name="bed" value={formValues.bed} onChange={handleChange} />
        </label>
        <br />

        <label>
          No. of Bathroom:
          <input class="input" type="number" name="bath" value={formValues.bath} onChange={handleChange} />
        </label>
        <br />

        <label>
          No. of Carparks:
          <input class="input" type="number" name="car" value={formValues.car} onChange={handleChange} />
        </label>
        <br />

        <label>
          Sqft:
          <input class="input" type="number" name="sqft" value={formValues.sqft} onChange={handleChange} />
        </label>
        <br />

        <button type="submit" class="submitBtn">Generate PDF</button>
      </form>
    </div>
    </div>
  );
};

export default Rent;