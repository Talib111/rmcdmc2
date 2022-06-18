import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'gray',
            height:'300px',
            
        
        },
        '&:hover fieldset': {
            // borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
            // borderColor: 'white',

        },
    },
});


export default function InputField(props) {
    const passNotesToParent = (event)=>{
        props.fun(event.target.value)
    }
    
    return (
        <div className="">
            <CssTextField onChange={(event)=> passNotesToParent(event)} label={props.label} id="custom-css-outlined-input" />

            {/* </Box> */}
        </div>
    );
}
