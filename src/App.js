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
import { pink } from '@mui/material/colors';

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

  const [grayCount, setGrayCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);
  const [blueCount, setBlueCount] = useState(0);
  const [orangeCount, setOrangeCount] = useState(0);
  const [seafoamCount, setSeafoamCount] = useState(0);
  const [grapeCount, setGrapeCount] = useState(0);
  const [lavenderCount, setLavenderCount] = useState(0);
  const [oliveCount, setOliveCount] = useState(0);
  const [caramelCount, setCaramelCount] = useState(0);
  const [pinkCount, setPinkCount] = useState(0);
  const [whiteCount, setWhiteCount] = useState(0);
  const [coralCount, setCoralCount] = useState(0);
  const [lemonCount, setLemonCount] = useState(0);
  const [mustardCount, setMustardCount] = useState(0);


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
              if (d[col].includes("Gray")) {
                setGrayCount((prevCount) => prevCount + 1)
              }
              if (d[col].includes("Green")) {
                setGreenCount((prevCount) => prevCount + 1)
              }
              if (d[col].includes("Blue")) {
                setBlueCount((prevCount) => prevCount + 1)
              }
              if (d[col].includes("Orange")) {
                setOrangeCount((prevCount) => prevCount + 1)
              }
              if (d[col].includes("Seafoam")) {
                setSeafoamCount((prevCount) => prevCount + 1)
              }
              if (d[col].includes("Grape")) {
                setGrapeCount((prevCount) => prevCount + 1)
              }
              if (d[col].includes("Lavender")) {
                setLavenderCount((prevCount) => prevCount + 1)
              }
              if (d[col].includes("Olive")) {
                setOliveCount((prevCount) => prevCount + 1)
              }
              if (d[col].includes("Caramel")) {
                setCaramelCount((prevCount) => prevCount + 1)
              }
              if (d[col].includes("Pink")) {
                setPinkCount((prevCount) => prevCount + 1)
              }
              if (d[col].includes("White")) {
                setWhiteCount((prevCount) => prevCount + 1)
              }
              if (d[col].includes("Coral")) {
                setCoralCount((prevCount) => prevCount + 1)
              }
              if (d[col].includes("Lemon")) {
                setLemonCount((prevCount) => prevCount + 1)
              }
              if (d[col].includes("Mustard")) {
                setMustardCount((prevCount) => prevCount + 1)
              }
            }
            if (col.includes("Lineitem name") && d[col].includes("Sticker")) {
              if (d[col].includes("Bundle")) {
                setStickerCount((prevCount) => prevCount + 3);
              }
              else {
                setStickerCount((prevCount) => prevCount + 1);
              }
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

      <div style={{ display: "flex" }}>
        <p style={{ width: "5%", textAlign: "left", margin: ".5em .5em", fontSize: "1.9em" }}>ripple&nbsp;| </p>
        <div style={{
          width: "20%", textAlign: "left", margin: "1em", fontSize: "1em", display: "flex", alignItems: "center"
        }}>sales analysis tool</div>
        <label htmlFor="file-upload" style={{ display: "inline-flex", justifyContent: "center", alignItems: "center", backgroundColor: "#337ab7", color: "#fff", cursor: "pointer", padding: "6px 12px", border: "none", borderRadius: "4px", fontSize: "14px", fontWeight: 400, boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.5)", margin: "10px" }}
          onMouseEnter={(e) => { e.target.style.backgroundColor = "#23527c" }}
          onMouseLeave={(e) => { e.target.style.backgroundColor = "#337ab7" }}
          onMouseDown={(e) => { e.target.style.backgroundColor = "#1b4d7e"; e.target.style.boxShadow = "inset 0px 1px 3px rgba(0, 0, 0, 0.5)" }}
          onMouseUp={(e) => { e.target.style.backgroundColor = "#337ab7"; e.target.style.boxShadow = "none" }}>
          Click to Select CSV file
          <input id="file-upload" type="file" accept=".csv" onChange={handleFile} style={{ display: "none" }} />
        </label>


      </div>

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

        <div style={{ width: "50%", boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.5)" }}>
          <div style={{ height: "45em", overflow: "auto", padding: "10px" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead sx={{ backgroundColor: "red" }}>
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
        </div>

        <div style={{ width: "50%", padding: "1px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", width: "100%", height: "100%" }}>
            <div style={{ flexBasis: "100%", height: "50%", boxSizing: "border-box", border: "1px solid black", borderRadius: "1em" }}>
              <h2 style={{ padding: 10 }}>Charity Allocations</h2>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, height: 250 }} size="small">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "lightgreen" }}>
                      <TableCell>Bottles ($6/unit)</TableCell>
                      <TableCell align="center">Stickers ($1/unit)</TableCell>
                      <TableCell align="right">Crewnecks ($5/unit)</TableCell>
                    </TableRow>
                    <TableRow sx={{ backgroundColor: "white" }}>
                      <TableCell>${bottleCount * 6}</TableCell>
                      <TableCell align="center">${stickerCount * 1}</TableCell>
                      <TableCell align="right">${crewneckCount * 5}</TableCell>
                    </TableRow>
                    <TableRow sx={{ backgroundColor: "lightgreen" }}>
                      <TableCell align="left">Hoodies ($5/unit)</TableCell>
                      <TableCell align="center">Tumblers ($3/unit)</TableCell>
                      <TableCell align="right">T-Shirts ($5/unit)</TableCell>
                    </TableRow>
                    <TableRow sx={{ backgroundColor: "white" }}>
                      <TableCell align="left">${hoodieCount * 5}</TableCell>
                      <TableCell align="center">${tumblerCount * 3}</TableCell>
                      <TableCell align="right">${tshirtCount * 5}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>

            </div>
            <div style={{ flexBasis: "100%", height: "50%", boxSizing: "border-box", border: "1px solid black", borderRadius: "1em" }}>
              <h2 style={{ padding: 10 }}>Bottle Colors Sold</h2>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, height: 75 }} size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ backgroundColor: "gray", borderRadius: 2 }}>Deep Gray: {grayCount} </TableCell>
                      <TableCell sx={{ backgroundColor: "green", borderRadius: 2 }} align="left">Forest Green: {greenCount}</TableCell>
                      <TableCell sx={{ backgroundColor: "skyblue", borderRadius: 2 }} align="left">Light/Sky Blue: {blueCount}</TableCell>
                      <TableCell sx={{ backgroundColor: "orange", borderRadius: 2 }}>Orange: {orangeCount}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, height: 75 }} size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ backgroundColor: "aquamarine", borderRadius: 2 }} align="left">Seafoam: {seafoamCount}</TableCell>
                      <TableCell sx={{ backgroundColor: "purple", borderRadius: 2 }} align="left">Grape: {grapeCount} </TableCell>
                      <TableCell sx={{ backgroundColor: "lavender", borderRadius: 2 }}>Lavender: {lavenderCount}</TableCell>
                      <TableCell sx={{ backgroundColor: "olive", borderRadius: 2 }} align="left">Olive: {oliveCount}</TableCell>
                      <TableCell sx={{ backgroundColor: "tan", borderRadius: 2 }} align="left">Caramel: {caramelCount}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, height: 75 }} size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ backgroundColor: "pink", borderRadius: 2 }}>Pink: {pinkCount}</TableCell>
                      <TableCell sx={{ backgroundColor: "white", borderRadius: 2 }} align="left">White: {whiteCount}</TableCell>
                      <TableCell sx={{ backgroundColor: "coral", borderRadius: 2 }} align="left">Coral: {coralCount}</TableCell>
                      <TableCell sx={{ backgroundColor: "yellow", borderRadius: 2 }} align="left">Lemon: {lemonCount}</TableCell>
                      <TableCell sx={{ backgroundColor: "gold", borderRadius: 2 }} align="left">Mustard: {mustardCount}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, height: 40 }} size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ backgroundColor: "black", borderRadius: 2, color: "white" }} align="center">Others: {bottleCount - grayCount - greenCount - blueCount - orangeCount - seafoamCount - grapeCount - lavenderCount - oliveCount - caramelCount - pinkCount - whiteCount - coralCount - lemonCount - mustardCount}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>

            </div>
          </div>
        </div>
      </div>





    </div >
  );
}

export default App;
