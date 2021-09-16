import { Avatar } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { BorderColor, DeleteOutline } from "@material-ui/icons";
import "./Customers.css";
import { customersRows } from "../../components/DummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

function CustomersList({ title }) {
  const [data, setData] = useState(customersRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 250,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="fullName">
            <Avatar className="customerAvatar" src={params.row.avatar} />
            <Link to={"/user/" + params.row.id} className="fullNameUser">
            {params.row.fullName}
            </Link>
            
          </div>
        );
      },
    },
    {
      field: "orders",
      headerName: "Orders",
      width: 130,
      editable: true,
      sortable: true,
    },

    {
      field: "email",
      headerName: "Email",
      sortable: false,
      width: 200,
    },
    {
      field: "amount",
      headerName: "Spent",
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
            <Link to={"/user/" + params.row.id}>
              <BorderColor className="customerEditIcon" />
            </Link>

            <DeleteOutline
              className="customerDeleteIcon"
              onClick={() => handleDelete(params.row.id)}
            />
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
          columns={columns}
          pordersSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

export default CustomersList;
