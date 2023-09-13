
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Slider } from 'primereact/slider';


const ProductsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const sliderTemplate1 = (rowData, { rowIndex }) => <Slider value={rowData.price} style={{width:"20rem"}}  />
    const sliderTemplate2 = (rowData, { rowIndex }) => <Slider value={rowData.oldPrice} style={{width:"20rem"}}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="name" header="Name"  style={{ minWidth: "8rem" }} />
            <Column field="price" header="price" body={sliderTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="oldPrice" header="Old Price" body={sliderTemplate2} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ProductsDataTable;