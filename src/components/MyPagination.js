import * as React from 'react';
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function MyPagination(props) {

  const [page, setPage] = React.useState(1);
  const [hidden, sethidden] = React.useState();
  const handleChange = (event, value) => {
    setPage(value);
    props.onmove(value)
  };


  useEffect(() => {
    console.log(props.hide)
    sethidden(props.hide)
  }, [props.hide]);



  return (
    <div style={{ visibility: hidden ? "hidden" : "visible" }}>
      <Stack spacing={1}>
        <Typography>Page: {page} </Typography>
        <Pagination count={5} page={page} onChange={handleChange} />
      </Stack>
    </div>

  );
}