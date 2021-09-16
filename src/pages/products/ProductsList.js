
import { DataGrid } from "@material-ui/data-grid";
import { ArrowForward, BorderColor, DeleteOutline } from "@material-ui/icons";
import "./Products.css";
import { productsRows } from "../../components/DummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProductsList({ title }) {
  const [data, setData] = useState(productsRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "productName",
      headerName: "Product Name",
      width: 250,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="productName">
            <img src={params.row.img} alt="" />
            {/* <Avatar className="productPic" src={params.row.avatar} /> */}
            <Link to={"/products/" + params.row.id} className="fullNameUser">
            {params.row.productName}
            </Link>
            
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "In Stock",
      width: 130,
      editable: true,
      sortable: true,
    },

    {
      field: "details",
      headerName: "Details",
      sortable: false,
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      sortable: true,
      width: 140,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="customerEdit">
            <Link to={"/products/" + params.row.id}>
              <ArrowForward className="customerEditIcon" />
            </Link>

            
          </div>
        );
      },
    },
  ];

  return (
    <div className="card">
      <div className="cardTitle" style={{ marginBottom: 20 }}>
        <h3>{title}</h3>
      </div>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={data}
          rowHeight={100}
          columns={columns}
          pordersSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

export default ProductsList;
