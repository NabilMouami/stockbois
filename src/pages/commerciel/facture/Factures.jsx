import React, { useState, useEffect } from "react";
import axios from "axios";
import { exportDataGrid } from "devextreme/pdf_exporter";
import Sidebar from "../sidebar/Sidebar";

import DataGrid, {
  Column,
  Summary,
  GroupPanel,
  Grouping,
  SortByGroupSummaryInfo,
  Paging,
  SearchPanel,
  TotalItem,
  Toolbar,
  Item,
  Selection,
  Export,
  Editing,
} from "devextreme-react/data-grid";
import { jsPDF } from "jspdf";
import { useDispatch, useSelector } from "react-redux";
import { loadclient, loadfactures } from "../../../actions/action";

const exportFormats = ["pdf"];

const Factures = () => {
  const dispatch = useDispatch();
  const load = useSelector((state) => state.Factures.factures);

  useEffect(() => {
    dispatch(loadfactures());
    dispatch(loadclient());
  }, []);
  const onExporting = React.useCallback((e) => {
    setTimeout(() => {
      const doc = new jsPDF();

      exportDataGrid({
        jsPDFDocument: doc,
        component: e.component,
        columnWidths: [35, 15, 25, 20, 20],
        customizeCell({ gridCell, pdfCell }) {
          if (
            gridCell.rowType === "data" &&
            gridCell.column.dataField === "Phone"
          ) {
            pdfCell.text = pdfCell.text.replace(
              /(\d{3})(\d{3})(\d{4})/,
              "($1) $2-$3"
            );
          } else if (gridCell.rowType === "group") {
            pdfCell.backgroundColor = "#BEDFE6";
          } else if (gridCell.rowType === "totalFooter") {
            pdfCell.font.style = "italic";
          }
        },
        customDrawCell(options) {
          const { gridCell, pdfCell } = options;

          if (
            gridCell.rowType === "data" &&
            gridCell.column.dataField === "Website"
          ) {
            options.cancel = true;
            doc.setFontSize(11);
            doc.setTextColor("#0000FF");

            const textHeight = doc.getTextDimensions(pdfCell.text).h;
            doc.textWithLink(
              "website",
              options.rect.x + pdfCell.padding.left,
              options.rect.y + options.rect.h / 2 + textHeight / 2,
              { url: pdfCell.text }
            );
          }
        },
      }).then(() => {
        doc.save("Factures.pdf");
      });
    }, "8000");
  });

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <DataGrid
        id="gridContainer"
        dataSource={load}
        keyExpr="id"
        showBorders={true}
        onExporting={onExporting}
      >
        <Selection mode="single" />
        <Paging defaultPageSize={200} />
        <SearchPanel visible={true} />

        <Export enabled={true} formats={exportFormats} />
        <GroupPanel visible={true} />
        <Grouping autoExpandAll={true} />
        <SortByGroupSummaryInfo summaryItem="count" />
        <Column dataField="nomClient" width={190} />

        <Column dataField="nemuro" width={190} groupIndex={0} />
        <Column dataField="category" width={190} />
        <Column dataField="type" width={190} />
        <Column dataField="status" width={120} />

        <Column dataField="quantity" width={110} />
        <Column dataField="totalprix" width={190} />

        <Column dataField="dateCreated" dataType="date" width={130} />
        <Column dataField="dateEcheance" dataType="date" width={130} />
      </DataGrid>
    </div>
  );
};

export default Factures;
