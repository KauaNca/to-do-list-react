import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Input({ name, label }) {
    return (
        <>
            <TextField
                required
                type='text'
                id={name}
                name={name}
                label={label}
                size='medium'
                fullWidth
            />

        </>
    )
}
export default Input;