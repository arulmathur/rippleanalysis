import './App.css';
import React, { useState } from 'react'
import Papa from 'papaparse'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

      <hr></hr>
      <div style={{ padding: 10 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "lightblue" }}>
                <TableCell>Bottles sold: {bottleCount}</TableCell>
                <TableCell align="right">Stickers sold: {stickerCount}</TableCell>
                <TableCell align="right">Crewnecks sold: {crewneckCount}</TableCell>
                <TableCell align="right">Hoodies sold: {hoodieCount}</TableCell>
                <TableCell align="right">Tumblers sold: {tumblerCount}</TableCell>
                <TableCell align="right">T-Shirts sold: {tshirtCount}</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "white" }}>
                <TableCell>${bottleMoney.toFixed(2)}</TableCell>
                <TableCell align="right">${stickerMoney.toFixed(2)}</TableCell>
                <TableCell align="right">${crewneckMoney.toFixed(2)}</TableCell>
                <TableCell align="right">${hoodieMoney.toFixed(2)}</TableCell>
                <TableCell align="right">${tumblerMoney.toFixed(2)}</TableCell>
                <TableCell align="right">${tshirtMoney.toFixed(2)}</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </div>

      <hr style={{ marginBottom: -1 }}></hr>

      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", height: "45em", overflow: "auto", padding: "10px", boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.5)" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  {columnArray.map((col, i) => (
                    <TableCell key={i}>{col}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {values.map((v, i) => (
                  <TableRow key={i}>
                    {v.map((value, i) => (
                      <TableCell key={i}>{value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div style={{ width: "50%", backgroundColor: "red" }}>
          Future graphs, etc
        </div>
      </div>

    </div >
  );
}

export default App;
