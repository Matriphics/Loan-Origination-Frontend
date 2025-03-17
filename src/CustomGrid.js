import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function Customgrid(props) {
    return (
        <Box sx={{ height: '500px', width: '100%', justifyContent: 'center' }}>
            <DataGrid
                rows={props.application}
                columns={props.columns}
                getRowId={(row) => row.bd_id}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                pageSizeOptions={[10]}
                disableRowSelectionOnClick
                sx={{ marginLeft: '20px', marginRight: '20px', marginTop: '100px', justifyContent: 'center' }}
            />
        </Box>
    );
}
