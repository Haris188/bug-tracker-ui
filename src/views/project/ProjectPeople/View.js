import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';
import PerfectScroll from 'react-perfect-scrollbar';
import { object } from 'prop-types';
import React from 'react';

const View = (props) => {
  const { container } = props;
  return (
    <Card style={{ height: '100%' }}>
      <CardContent>
        <Typography
          variant="h1"
        >
          People
        </Typography>
        <PerfectScroll>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {container.users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </PerfectScroll>
      </CardContent>
    </Card>
  );
};

View.propTypes = {
  container: object
};

export default View;
