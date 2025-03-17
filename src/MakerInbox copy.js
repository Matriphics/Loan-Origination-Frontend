import { useState, useEffect } from "react"
import CustomGrid from "./CustomGrid"
import Footer from "./Footer"
import Header3 from "./Header3"
import axios from "axios"

export default function MakerInbox() {
    const [application, setApplication] = useState([])
    // var config = {
    //     method: 'get',
    //     url: 'http://localhost:9090/maker/mounika'
    // };
    const maker_id = localStorage.getItem('maker_id')
    const url = 'http://localhost:9090/maker/' + maker_id
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
            <Header3></Header3>
            <CustomGrid columns={[{ field: 'status', headerName: 'Status', flex: 0.5 },
            {
                field: 'bd_id', headerName: 'Application ID', flex: 1.2,
                renderCell: (params) => {
                    let id = params.row.bd_id
                    let url = `/application/${id}`
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