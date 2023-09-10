import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonCommon({title, type}) {
    if(type === "contained") {
    return (
        <Button variant="contained" className='hover:bg-zinc-700 bg-slate-700'>
            {title}
        </Button>
    );
    }
    if(type === "outlined") {
        return (
            <Button variant="outlined" className=' border-slate-300 text-zinc-100 hover:border-zinc-600 hover:bg-zinc-600 hover:text-zinc-50'>{title}</Button>
        );
    }
}