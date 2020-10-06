import {
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { object } from 'prop-types';
import React from 'react';
import LabelGroup from 'src/components/LabelGroup';

const View = (props) => {
  const { container } = props;
  return (
    <Card style={{ height: '100%' }}>
      <CardContent>
        <Typography
          variant="h1"
        >
          Project Details
        </Typography>
        <LabelGroup
          title="Project"
          label={container.project.name}
        />
        <LabelGroup
          title="Description"
          label={container.project.description}
        />
      </CardContent>
    </Card>
  );
};

View.propTypes = {
  container: object
};

export default View;
