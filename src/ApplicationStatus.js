import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';

function MenuPopupState(loan_id, isCancel) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);

  };

  const [open1, setOpen1] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    setOpen1(true);

    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: `http://localhost:9090/cancel/${loan_id.loan_id}`,
      headers: {
        // 'Origin': 'http://localhost:3000'
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClose1 = () => {
    setOpen1(false);
    setOpen(false);
  };



  return (
    <PopupState variant="dialog" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button style={{ backgroundColor: "#017aa7" }} variant="contained" {...bindTrigger(popupState)}>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </Button>

          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Call Us</MenuItem>
            {/* <MenuItem onClick={popupState.close}>Chat</MenuItem> */}
            <MenuItem onClick={popupState.close}>Feedback</MenuItem>
            <MenuItem style={{ display: loan_id.isCancel ? 'none' : 'collapse' }} onClick={handleClickOpen}>Cancel Application</MenuItem>
            <Dialog
              open={open}
              onClose={handleClose1}
              aria-labelledby="responsive-dialog-title"
              style={{
                position: 'absolute',
                bottom: '40%'
              }}
            >
              <DialogTitle id="responsive-dialog-title">
                {"Are you sure?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Do you really want to cancel the loan application? This action cannot be undone.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus variant="contained" sx={{
                  backgroundColor: "red", ':hover': {
                    backgroundColor: '#D10000'

                  }
                }} onClick={handleClose1}>
                  Disagree
                </Button>
                <Button variant="contained" onClick={handleClose} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog
              open={open1}
              onClose={handleClose1}
              style={{
                position: 'absolute',
                bottom: '40%'
              }}
            >
              <DialogTitle id="responsive-dialog-title">
                {"Confirmation"}
              </DialogTitle>
              {/* <Button onClick={handleClose1} style={{ position: "absolute", left: '80%', color: "black", top: "5%" }}>
                  <CancelIcon fontSize="medium">
                  </CancelIcon>
                </Button> */}


              <DialogContent>
                <DialogContentText>
                  You have successfully cancelled the loan application.
                </DialogContentText>
              </DialogContent>

              <Button style={{
                backgroundColor: "#017aa7", width: '60px',
                left: "40%"
              }} variant="contained" onClick={handleClose1}>OKAY</Button>
              <br />


            </Dialog>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}





const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#017aa7",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(SerialNo, ApplicationDate, ApplicationNo, LoanType, Amount, ApplicationStatus, ViewData, Support) {
  return { SerialNo, ApplicationDate, ApplicationNo, LoanType, Amount, ApplicationStatus, ViewData, Support };
}

const rows = [
  createData(1, "25-July-2023", 74379246, "Personal Loan", "Rs. 15000000", "Pending Approval from Checker", "View", <MenuPopupState></MenuPopupState>),
  createData(2, "25-July-2023", 74379246, "Personal Loan", "Rs. 15000000", "Pending Approval from Checker", "View", <MenuPopupState></MenuPopupState>),
  createData(3, "25-July-2023", 74379246, "Personal Loan", "Rs. 15000000", "Pending Approval from Checker", "View", <MenuPopupState></MenuPopupState>),
  createData(4, "25-July-2023", 74379246, "Personal Loan", "Rs. 15000000", "Pending Approval from Checker", "View", <MenuPopupState></MenuPopupState>),
  createData(5, "25-July-2023", 74379246, "Personal Loan", "Rs. 15000000", "Pending Approval from Checker", "View", <MenuPopupState></MenuPopupState>),
];

function BasicDetails(loan_id) {

  const [basicData, setBasicData] = useState([]);

  useEffect(() => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:9090/getbasicdata/${loan_id.loan_id}`,
      headers: {
        // 'Origin': 'http://localhost:3000'
      }
    };

    axios.request(config)
      .then((response) => {
        setBasicData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);




  // open=false;
  const [open, setOpen] = React.useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleClose1 = () => {

  // };

  const useStyles = makeStyles({
    table: {
      width: 650,
    },
  });

  const classes = useStyles();


  return (
    <div>
      <a href="#" onClick={openDialog} style={{ color: "#4477CE" }}>View</a>
      {/* <h4 style={{fontWeight: "lighter", color: "#4477CE"}} onClick={openDialog}><u>View</u></h4> */}


      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        style={{
          position: 'absolute',
          bottom: '85%',
          height: '600px'
        }}
      >
        <DialogTitle id="responsive-dialog-title" style={{
          textAlign: "center",
          backgroundColor: "#017aa7",
          color: "white",
          margin: "15px",
          // fontSize: "px",
          // marginBottom: "10px",
          // height: "50px",
          // marginTop: "10px",
          borderRadius: "5px",


        }}>
          {"Application Details"}
        </DialogTitle>

        <DialogContent sx={{ height: "250px" }}>
          <Table sx={{ minWidth: 500 }} >
            {/* <TableHead>
              <TableRow>
                <StyledTableCell align="center">Key</StyledTableCell>
                <StyledTableCell align="center">Value</StyledTableCell>
              </TableRow>
            </TableHead> */}
            <TableBody sx={{
              "& .MuiTableRow-root:hover": {
                backgroundColor: "#DDDDDD"
              }
            }}>
              <TableRow>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">{basicData.applicant_name}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Email Id</StyledTableCell>
                <StyledTableCell align="center">{basicData.applicant_email}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Phone No.</StyledTableCell>
                <StyledTableCell align="center">{basicData.applicant_phn_no}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Alternet Phone No.</StyledTableCell>
                <StyledTableCell align="center">{basicData.applicant_alt_no}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Aadhar No.</StyledTableCell>
                <StyledTableCell align="center">{basicData.aadhar_no}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">PAN No.</StyledTableCell>
                <StyledTableCell align="center">{basicData.pan_no}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Income</StyledTableCell>
                <StyledTableCell align="center">{basicData.income}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">DOB</StyledTableCell>
                <StyledTableCell align="center">{basicData.applicant_dob}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Address 1</StyledTableCell>
                <StyledTableCell align="center">{basicData.address1}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Address 2</StyledTableCell>
                <StyledTableCell align="center">{basicData.address2}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">City</StyledTableCell>
                <StyledTableCell align="center">{basicData.city}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">State</StyledTableCell>
                <StyledTableCell align="center">{basicData.state}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Zip Code</StyledTableCell>
                <StyledTableCell align="center">{basicData.zip}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Country</StyledTableCell>
                <StyledTableCell align="center">{basicData.country}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Loan Amount</StyledTableCell>
                <StyledTableCell align="center">{basicData.loan_amount}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">{basicData.status}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Application Date</StyledTableCell>
                <StyledTableCell align="center">{basicData.application_date}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Gender</StyledTableCell>
                <StyledTableCell align="center">{basicData.gender}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">Loan Type</StyledTableCell>
                <StyledTableCell align="center">{basicData.loan_type}</StyledTableCell>
              </TableRow>



            </TableBody>
          </Table>
        </DialogContent>







      </Dialog>
    </div>
  );
}






export default function ApplicationStatus() {

  const [status, setStatus] = useState([]);

  useEffect(() => {

    console.log("useEffect triggred");
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:9090/users/' + localStorage.getItem('username'),
      headers: {
        // 'Origin': 'http://localhost:3000'
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setStatus(response.data);
      })
      .catch((error) => {
        console.log(error);
        setStatus([]);
      });



  }, []);

  return (
    <div>

      <Header></Header>
      <div style={{ marginTop: "85px", padding: "20px" }}>

        <h1 class="customheader" style={{
          textAlign: "center",
          backgroundColor: "#017aa7",
          color: "white",
          fontSize: "32px",
          marginBottom: "10px",
          height: "50px",
          marginTop: "10px",
          borderRadius: "5px",


        }}>Application Status </h1>

        {/* <img src="sc_logo.png" /> */}
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ fontWeight: "bold" }} align="center">Application No.</StyledTableCell>
              <StyledTableCell style={{ fontWeight: "bold" }} align="center">Application Date</StyledTableCell>
              <StyledTableCell style={{ fontWeight: "bold" }} align="center">Loan Type</StyledTableCell>
              <StyledTableCell style={{ fontWeight: "bold" }} align="center">Amount</StyledTableCell>
              <StyledTableCell style={{ fontWeight: "bold" }} align="center">Application Status</StyledTableCell>
              <StyledTableCell style={{ fontWeight: "bold" }} align="center">View Submitted Data</StyledTableCell>
              <StyledTableCell style={{ fontWeight: "bold" }} align="center">Support</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{
            "& .MuiTableRow-root:hover": {
              backgroundColor: "#DDDDDD"
            }
          }}>
            {status.map((row) => (
              <StyledTableRow key={row.name} sx={{ height: "60px" }}>
                {/* <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell> */}
                <StyledTableCell align="center">{row.bd_id}</StyledTableCell>
                <StyledTableCell align="center">{row.application_date}</StyledTableCell>
                <StyledTableCell align="center">{row.loan_type}</StyledTableCell>
                <StyledTableCell align="center">{row.loan_amount}</StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center"><BasicDetails loan_id={row.bd_id}></BasicDetails></StyledTableCell>

                <StyledTableCell align="center"><MenuPopupState loan_id={row.bd_id} isCancel={row.status === 'cancelled'}></MenuPopupState></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <br /><br /><br /><br /><br />

      <Footer></Footer>

    </div>
  );
}