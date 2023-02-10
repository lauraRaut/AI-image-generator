import * as React from 'react';
import Paper from '@mui/material/Paper'
import { PaperStyles } from '../styles/Styles';
import { TextField } from '@mui/material';
import Form from './Form'
import Header from './Header';


const PaperTest = () => {
    return (
        <div>
            <Paper sx={PaperStyles} >
                <Form />
            </Paper>
        </div>
    )
}
export default PaperTest