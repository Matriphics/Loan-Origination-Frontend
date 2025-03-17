import { useState, useEffect } from "react"
import CustomGrid from "./CustomGrid"
import Footer from "./Footer"
import axios from "axios"
import Header4 from "./Header4"

export default function CheckerInbox() {
    const [application, setApplication] = useState([])
    // var config = {
    //     method: 'get',
    //     url: 'http://localhost:9090/maker/mounika'
    // };
    const checker_id = localStorage.getItem('checker_id')
    const url = 'http://localhost:9090/checker/' + checker_id
    const fetchApplications = () => {
        axios.get(url)
        .then(res => setApplication(res.data))
        .catch((error)=>{
            console.log(error)
            setApplication([])
        })  
    }
    
    useEffect(() => {
        console.log("useEffect triggered");
        fetchApplications(); 
    }, []);

    return (
        <div>
            <Header4></Header4>
            <CustomGrid columns={[{ field: 'status', headerName: 'Status', flex: 0.5 },
            {
                field: 'bd_id', headerName: 'Application ID', flex: 1.2,
                renderCell: (params) => {
                    let id = params.row.bd_id
                    let url = `/checkerapplication/${id}`
                    return <a href={url}>{id}</a>
                }
            },
            { field: 'curr_step', headerName: 'Curr. Step Name', flex: 1.2 },
            { field: 'prev_step', headerName: 'Prev. Step Name', flex: 1.2 },
            { field: 'application_date', headerName: 'Application Date', flex: 1.5 },
            { field: 'loan_type', headerName: 'Loan Type', flex: 1 },
            { field: 'loan_amount', headerName: 'Loan Amount', flex: 1 },
            { field: 'remarks', headerName: 'Remarks', flex: 1.5 }]} application={application}></CustomGrid>
            <Footer></Footer>
        </div>
    )
}