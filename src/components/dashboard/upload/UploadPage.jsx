import React, { useRef, useState, useEffect } from "react";
import "./UploadPage.css";

const UploadPage = ({menu}) => {
    const [loading, setLoading] = useState(false);
    const [fileName, setFileName] = useState("");
    const [csvData, setCsvData] = useState('');
    const inputRef = useRef(null);
    const columns = [
        {"title": "SI No.", "key": "id", width: "1%"},
        {"title": "Links", "key": "links", width: "12%"},
        {"title": "Prefix", "key": "prefix",width: "7%"},
        {"title": "Add Tags", "key": "select tags",width: "16%"},
        {"title": "Selected Tags", "key": "selected tags\r",width: "14%"}
    ];

    const handleFileUpload = () => {
        console.log("here")
        inputRef.current.click();
    }
    useEffect(() => {
        console.log(menu);
        for(let i=0;i<csvData.length;i++){
            let x = csvData[i]['selected tags\r'];
            if (x) {
                let y = x.split(" ");
                let z = [];
                for(let j=0;j<y.length;j++){
                    if(y[j]!==""){
                        z.push(y[j]);
                    }
                }
                csvData[i]['selected tags\r'] = z;
            }else{
                csvData[i]['selected tags\r'] = [x];
            }
            
        }
        for(let i=0;i<csvData.length;i++){
            let x = csvData[i]['select tags'];
            if (x) {
                let y = x.split('"');
                let z = [];
                for(let j=0;j<y.length;j++){
                    if(y[j]!==""){
                        z.push(y[j]);
                    }
                }
                csvData[i]['select tags'] = z;
            }else{
                csvData[i]['select tags'] = [x];
            }
            
        }
        console.log(csvData)
    }, [csvData, menu]);

    const handleFileChange = (event) => {
        const fileObj = event.target.files && event.target.files[0];
        console.log(fileObj)
        if (!fileObj) {
          return;
        }
        setLoading(true);
        event.target.value = null;
        console.log(event.target.files);
        console.log(fileObj);
        setFileName(fileObj.name);
        if (fileObj) {
            const reader = new FileReader();
      
            reader.onload = (e) => {
                const content = e.target.result;
                const rows = content.split('\n');
                const headers = rows[0].split(',');
              
                const jsonData = [];
                for (let i = 1; i < rows.length; i++) {
                  const values = rows[i].split(',');
                  const entry = {};
                  for (let j = 0; j < headers.length; j++) {
                    entry[headers[j]] = values[j];
                  }
                  jsonData.push(entry);
                }
                console.log(jsonData)
                setCsvData(jsonData);
              };
            reader.readAsText(fileObj);
        }
        setTimeout(() => {
            setLoading(false);
        }, 1000);
      };

    return (
        <>
        <div>
            <div className="uploadHeading">
                <div className="uploadCSVHeading">
                    Upload CSV
                </div>
                {
                    ((menu && window.innerWidth < 768) || window.innerWidth >= 768) ? (
                        <div className="imagesUploadTop">
                            <img src="/assets/Notify.svg" style={{height: "23px", marginRight: "10px"}} alt="" />
                            <img src="/assets/Avatar.svg" style={{height: "25px", borderRadius: "100%"}} alt="" />
                        </div>
                    ) : (
                        <div></div>
                    )
                }
            </div>
            <div className="uploadingContainer">
                <div className="uploadingDiv">
                <div className="uploadCenter">
                    <img src="/assets/ExcelFile.svg" style={{height: "22px"}} alt="" />
                    {
                        (loading) ? <>
                        <div style={{display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"}}>
                            <span style={{marginTop: "10px"}}>{fileName}</span>
                            <span style={{color: "red", marginTop: "20px"}}>Remove</span>
                        </div>
                        </> 
                        : 
                        <>
                        <span style={{color: "grey", marginTop: "15px"}}>Drop your excel sheet or <span style={{color: "blue"}}>browse</span></span>
                        </>
                    }
                </div>
                <button onClick={handleFileUpload} className="buttonForUpload" style={{backgroundColor: (csvData)?'#b4b4ff':'#605BFF'}}>
                    {
                        loading ? <><img src="/assets/loading.svg" style={{height: "30px"}} alt="" /></> : <><img src="/assets/UploadButton.svg" style={{height: "20px", marginRight: "10px"}} alt="" /> Upload</>
                    }
                </button>
                </div>
            </div>
            <div>
            <input style={{display: 'none'}} ref={inputRef} type="file" accept=".csv" onChange={handleFileChange} />
            </div>
            {
                csvData && (
                    <>
                    <div>
                        <div className="uploadCSVHeading uploadsHeading">
                            Uploads
                        </div>
                        <div className="tableDiv">
                        <div className="tableInnerDiv">
                        <table>
                            <thead className="colTHead">
                                <tr className="colTr">
                                    {columns.map(col => (
                                        <th style={{fontWeight: "500"}} key={col.key}>{col.title}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="colHead">
                                {csvData.map((item, index) => (
                                    <tr className="colTr" key={index}>
                                        {columns.map(col => (
                                            <td style={{width: col.width}} key={col.key}>
                                                {renderCell(item, col)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                        </div>
                    </div>
                    </>
                )
            }
        </div>
        </>
    );
}
const renderCell = (item, col) => {
    switch (col.key) {
        case "id":
            return <>
            <div style={{width: "10%"}}>
            {item[col.key]}
            </div>
            </>;
        case "links":
            return <a href={item[col.key]}>{item[col.key]}</a>;
        case "prefix":
            return <>{item[col.key]}</>;
        case "select tags":
            return <>
            <div style={{display: "flex",
    alignItems: "center",
    justifyContent: "center"}}>
            <select id="multiSelect" multiple>
                <option value="option1">{item[col.key]} </option>
            </select>
            <img src="/assets/downArrow.svg" style={{height: "8px", marginLeft: "-19px", cursor: "pointer"}} alt="" />
            </div>
            </>;
        case "selected tags\r":
            return <>
            <div style={{background: "#6464ff", borderRadius: "5px", height: "28px", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                <span style={{padding: "8px", color: "white", fontSize: "15px"}}>{item[col.key]}</span> <img src="/assets/close.svg" style={{height: "20px"}} alt="" />
            </div>
            </>;
        default:
            return null;
    }
};

export default UploadPage;