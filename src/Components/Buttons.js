import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Buttons(props) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant={props.variant} size={props.size} color={props.color}>{props.title}</Button>
    </Stack>
  );
}