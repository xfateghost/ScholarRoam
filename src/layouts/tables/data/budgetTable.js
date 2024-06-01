import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import React, { useState, useRef, useCallback, useEffect } from "react";
import "./budgetTable.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const BudgetBreakdown = () => {
  const gridRef = useRef();

  const newData = {
    Info: "Week #: City",
    Travel: "$ #",
    Lodging: "$ #",
    Food: "$ #",
    Shopping: "$ #",
    Nightlife: "$ #",
    Misc: "$ #",
    Discretionary: "$ #",
  };

  const [counter, setCounter] = useState(0);

  const disable = (id, disabled) => {
    document.querySelector(id).disabled = disabled;
  };

  const setValue = (id, value) => {
    document.querySelector(id).value = value;
  };

  const onFirstDataRendered = useCallback(() => {
    disable("#undoBtn", true);
  }, []);

  const onCellValueChanged = useCallback((params) => {
    console.log("cellValueChanged", params);
    var undoSize = params.api.getCurrentUndoSize();
    disable("#undoBtn", undoSize < 1);
  }, []);

  const onUndoStarted = useCallback((event) => {
    console.log("undoStarted", event);
  }, []);

  const onUndoEnded = useCallback((event) => {
    console.log("undoEnded", event);
  }, []);

  const onRedoStarted = useCallback((event) => {
    console.log("redoStarted", event);
  }, []);

  const onRedoEnded = useCallback((event) => {
    console.log("redoEnded", event);
  }, []);

  const handleAddRow = () => {
    console.info("Edit");
    setRowData((prevRowData) => prevRowData.concat(newData));
  };

  const handleDeleteRow = () => {
    console.info("Delete");
    setRowData((prevRowData) => prevRowData.slice(0, -1));
  };

  const handleAddColumn = () => {
    console.info("Add");
    const newCol = { field: `Label ${counter}` };
    setCounter((prevCounter) => prevCounter + 1);
    setColDefs((prevColDefs) => [...prevColDefs, newCol]);
  };

  const handleDeleteColumn = () => {
    console.info("Delete");
    setColDefs((prevColDefs) => prevColDefs.slice(0, -1));
  };

  const handleUndo = () => {
    console.info("Undo");
    gridRef.current.api.undoCellEditing();
  };

  const handleResize = () => {
    if (gridRef.current) {
      const gridApi = gridRef.current.api;
      const allColumnIds = colDefs.map((col) => col.field);
      gridApi.autoSizeColumns(allColumnIds);
    }
  };

  const handleFitToGrid = () => {
    console.info("Fits");
    gridRef.current.api.sizeColumnsToFit({
      defaultMinWidth: 100,
      columnLimits: [{ key: "info", minWidth: 150 }],
    });
  };

  const [rowData, setRowData] = useState([
    {
      Info: "Week 1: Madrid",
      Travel: "$100",
      Lodging: "$74",
      Food: "$50",
      Shopping: "$30",
      Nightlife: "$20",
      Misc: "$20",
      Discretionary: "$10",
    },
    {
      Info: "Week 2: Vienna",
      Travel: "$100",
      Lodging: "$73",
      Food: "$60",
      Shopping: "$20",
      Nightlife: "$25",
      Misc: "$10",
      Discretionary: "$20",
    },
    {
      Info: "Week 3: Sevilla",
      Travel: "$100",
      Lodging: "$90",
      Food: "$60",
      Shopping: "$30",
      Nightlife: "$10",
      Misc: "$40",
      Discretionary: "$30",
    },
    {
      Info: "Week 4: Madrid",
      Travel: "$110",
      Lodging: "$80",
      Food: "$50",
      Shopping: "$40",
      Nightlife: "$10",
      Misc: "$20",
      Discretionary: "$40",
    },
    {
      Info: "Week 5: Paris",
      Travel: "$90",
      Lodging: "$100",
      Food: "$150",
      Shopping: "$35",
      Nightlife: "$10",
      Misc: "$10",
      Discretionary: "$30",
    },
    {
      Info: "Week 6: Barcelona",
      Travel: "$95",
      Lodging: "$150",
      Food: "$145",
      Shopping: "$50",
      Nightlife: "$30",
      Misc: "$20",
      Discretionary: "$40",
    },
    {
      Info: "Week 7: Munich",
      Travel: "$87",
      Lodging: "$45",
      Food: "$160",
      Shopping: "$20",
      Nightlife: "$20",
      Misc: "$40",
      Discretionary: "$30",
    },
    {
      Info: "Week 8: Madrid",
      Travel: "$65",
      Lodging: "$135",
      Food: "$170",
      Shopping: "$10",
      Nightlife: "$10",
      Misc: "$10",
      Discretionary: "$20",
    },
    {
      Info: "Week 9: Brussels",
      Travel: "$90",
      Lodging: "$120",
      Food: "$180",
      Shopping: "$60",
      Nightlife: "$50",
      Misc: "$40",
      Discretionary: "$20",
    },
    {
      Info: "Week 10: Dublin",
      Travel: "$110",
      Lodging: "$112",
      Food: "$190",
      Shopping: "$50",
      Nightlife: "$30",
      Misc: "$20",
      Discretionary: "$30",
    },
  ]);
  const [colDefs, setColDefs] = useState([
    { field: "Info", editable: true, minWidth: 50, maxWidth: 250 },
    { field: "Travel", editable: true, maxWidth: 150 },
    { field: "Lodging", editable: true, maxWidth: 150 },
    { field: "Food", editable: true, maxWidth: 150 },
    { field: "Shopping", editable: true, maxWidth: 150 },
    { field: "Nightlife", editable: true, maxWidth: 150 },
    { field: "Misc", editable: true, maxWidth: 150 },
    { field: "Discretionary", editable: true, maxWidth: 150 },
  ]);

  const autoSizeStrategy = {
    type: "fitGridWidth",
  };

  const defaultColDef = {
    editable: true,
  };

  const sortingOrder = [null];

  return (
    <div>
      <div>
        <Box pb={2} pl={2}>
          <Stack direction="row" spacing={2}>
            <Chip id="undoBtn" label="Add Row" onClick={handleAddRow} variant="outlined" />
            <Chip label="Delete Row" onClick={handleDeleteRow} variant="outlined" />
            <Chip label="Add Column" onClick={handleAddColumn} variant="outlined" />
            <Chip label="Delete Column" onClick={handleDeleteColumn} variant="outlined" />
            <Chip label="Undo" onClick={handleUndo} variant="outlined" />
            <Chip label="Auto Resize Columns" onClick={handleResize} variant="outlined" />
            <Chip label="Fit Columns to Grid" onClick={handleFitToGrid} variant="outlined" />
          </Stack>
        </Box>
      </div>
      <div className="ag-theme-quartz" style={{ height: 500 }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={colDefs}
          style={{ width: "100%", height: "100%" }}
          defaultColDef={defaultColDef}
          autoSizeStrategy={autoSizeStrategy}
          sortingOrder={sortingOrder}
          rowDragManaged={true}
          rowDragEntireRow={true}
          rowDragMultiRow={true}
          rowSelection={"multiple"}
          undoRedoCellEditing={true}
          undoRedoCellEditingLimit={5}
          enableCellChangeFlash={true}
          onFirstDataRendered={onFirstDataRendered}
          onCellValueChanged={onCellValueChanged}
          onUndoStarted={onUndoStarted}
          onUndoEnded={onUndoEnded}
          onRedoStarted={onRedoStarted}
          onRedoEnded={onRedoEnded}
        />
      </div>
    </div>
  );
};

export default BudgetBreakdown;
