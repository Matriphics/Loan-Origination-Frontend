import { useState, useEffect } from "react"
import CustomGrid from "./CustomGrid"
import Footer from "./Footer"
import Header3 from "./Header3"
// import axios from "axios" // API call removed; custom data is used instead

export default function MakerInbox() {
    const [application, setApplication] = useState([])

    // Custom sample data replacing the API call
    const sampleApplications = [
        {
            status: "Pending",
            bd_id: "APP001",
            curr_step: "Review",
            prev_step: "Submission",
            application_date: "2025-03-15",
            loan_type: "Home Loan",
            loan_amount: "$200,000",
            remarks: "Need more documents"
        },
        {
            status: "Approved",
            bd_id: "APP002",
            curr_step: "Finalization",
            prev_step: "Review",
            application_date: "2025-03-10",
            loan_type: "Auto Loan",
            loan_amount: "$25,000",
            remarks: "Approved"
        }
    ];

    const fetchApplications = () => {
        // Previously: axios.get(url)...
        // Instead, we set the state with custom data
        setApplication(sampleApplications);
    }

    useEffect(() => {
        console.log("useEffect triggered");
        fetchApplications(); 
    }, []);

    return (
        <div>
            <Header3></Header3>
            <CustomGrid 
                columns={[
                    { field: 'status', headerName: 'Status', flex: 0.5 },
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
                    { field: 'remarks', headerName: 'Remarks', flex: 1.5 }
                ]}
                application={application}>
            </CustomGrid>
            <Footer></Footer>
        </div>
    )
}
