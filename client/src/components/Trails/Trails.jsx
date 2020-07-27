import React from 'react';
import { Typography } from '@material-ui/core';
import TrailsTable from './TrailsTable';

const Trails = (props) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>{props.i} {props.trail.name}</Typography>
      <Typography variant="body2" gutterBottom>{props.trail.summary}</Typography>
    </div>

  );
};

export default Trails;
