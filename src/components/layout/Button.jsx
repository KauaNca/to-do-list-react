import * as React from 'react';
import Button from '@mui/material/Button';

function Button({id,variant,texto,handleOnChange}) {
  return (<Button variant={variant} onChange={handleOnChange}>{texto}</Button>)
}

export default Button
