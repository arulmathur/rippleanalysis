import './App.css';
import React, { useState } from 'react'
import Papa from 'papaparse'

function App() {

  const [data, setData] = useState([]);
  const [columnArray, setColumn] = useState([]);
  const [values, setValues] = useState([]);
  const [bottleCount, setBottleCount] = useState(0);
  const [stickerCount, setStickerCount] = useState(0);
  const [crewneckCount, setCrewneckCount] = useState(0);
  const [hoodieCount, setHoodieCount] = useState(0);
  const [tumblerCount, setTumblerCount] = useState(0);
  const [tshirtCount, setTshirtCount] = useState(0);

  const [bottleMoney, setBottleMoney] = useState(0);
  const [stickerMoney, setStickerMoney] = useState(0);
  const [crewneckMoney, setCrewneckMoney] = useState(0);
  const [hoodieMoney, setHoodieMoney] = useState(0);
  const [tumblerMoney, setTumblerMoney] = useState(0);
  const [tshirtMoney, setTshirtMoney] = useState(0);

  const resetCounts = () => {
    setBottleCount(0);
    setStickerCount(0);
    setCrewneckCount(0);
    setHoodieCount(0);
    setTumblerCount(0);
    setTshirtCount(0);
    setBottleMoney(0);
    setStickerMoney(0);
    setCrewneckMoney(0);
    setHoodieMoney(0);
    setTumblerMoney(0);
    setTshirtMoney(0);
  }

  const handleFile = (event) => {
    resetCounts();
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: false,
      complete: function (result) {
        const columnArray = ["Email", "Subtotal", "Lineitem name", "Lineitem sku"];
        const valuesArray = result.data.map((d) => {
          const row = [d.Email, d.Subtotal, d["Lineitem name"], d["Lineitem sku"]];
          Object.keys(d).forEach((col) => {
            if (col.includes("Lineitem name") && d[col].includes("Bottle")) {
              setBottleCount((prevCount) => prevCount + 1);
              setBottleMoney((prevMoney) => prevMoney + Number(d["Lineitem price"]));
            }
            if (col.includes("Lineitem name") && d[col].includes("Sticker")) {
              setStickerCount((prevCount) => prevCount + 1);
              setStickerMoney((prevMoney) => prevMoney + Number(d["Lineitem price"]));
            }
            if (col.includes("Lineitem name") && d[col].includes("Crewneck")) {
              setCrewneckCount((prevCount) => prevCount + 1);
              setCrewneckMoney((prevMoney) => prevMoney + Number(d["Lineitem price"]));
            }
            if (col.includes("Lineitem name") && d[col].includes("Hoodie")) {
              setHoodieCount((prevCount) => prevCount + 1);
              setHoodieMoney((prevMoney) => prevMoney + Number(d["Lineitem price"]));
            }
            if (col.includes("Lineitem name") && d[col].includes("Tumbler")) {
              setTumblerCount((prevCount) => prevCount + 1);
              setTumblerMoney((prevMoney) => prevMoney + Number(d["Lineitem price"]));
            }
            if (col.includes("Lineitem name") && d[col].includes("T-Shirt")) {
              setTshirtCount((prevCount) => prevCount + 1);
              setTshirtMoney((prevMoney) => prevMoney + Number(d["Lineitem price"]));
            }
          });
          return row;
        });

        setData(result.data);
        setColumn(columnArray);
        setValues(valuesArray);
      }
    });
  };


  return (
    <div style={{ textAlign: "center" }}>
      <input type="file" name="file" accept='.csv' onChange={handleFile} style={{ display: "block", margin: "10px auto" }}>
      </input>

      <br />

      <table style={{ borderCollapse: "collapse", border: "1px solid black", margin: "5px auto" }}>
        <tbody>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>Bottles sold: {bottleCount}</td>
            <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>Stickers sold: {stickerCount}</td>
            <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>Crewnecks sold: {crewneckCount}</td>
            <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>Hoodies sold: {hoodieCount}</td>
            <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>Tumblers sold: {tumblerCount}</td>
            <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>T-Shirts sold: {tshirtCount}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>${bottleMoney.toFixed(2)}</td>
            <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>${stickerMoney.toFixed(2)}</td>
            <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>${crewneckMoney.toFixed(2)}</td>
            <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>${hoodieMoney.toFixed(2)}</td>
            <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>${tumblerMoney.toFixed(2)}</td>
            <td style={{ border: "1px solid black", padding: "5px", textAlign: "center" }}>${tshirtMoney.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <hr></hr>

      <div style={{ height: "50em", overflow: "auto" }}>
        <table
          style={{
            borderCollapse: "collapse",
            border: "1px solid black",
            margin: "5px auto",
          }}
        >
          <thead>
            <tr>
              {columnArray.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {values.map((v, i) => (
              <tr key={i}>
                {v.map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr></hr>


    </div>
  );
}

export default App;
