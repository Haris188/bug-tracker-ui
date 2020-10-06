import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell, Card, CardContent, Checkbox, Button, Typography, CircularProgress
} from '@material-ui/core';
import { bool, func, object } from 'prop-types';
import React from 'react';
import PerfectScroll from 'react-perfect-scrollbar';
import LoadingView from 'src/views/loadingView';

const AddProjectUserSelector = (props) => {
  const {
    users,
    selectUser,
    userLoading,
    submitProject,
    submitLoading
  } = props;

  return userLoading
    ? <LoadingView />
    : (
      <Card style={{ marginTop: '1em' }}>
        <CardContent>
          <Typography
            variant="h1"
          >
            Attach People to Project
          </Typography>
          <PerfectScroll>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Selected
                  </TableCell>
                  <TableCell>
                    Name
                  </TableCell>
                  <TableCell>
                    Role
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow>
                    <TableCell>
                      <Checkbox
                        checked={user.selected}
                        onChange={() => { selectUser(index); }}
                      />
                    </TableCell>
                    <TableCell>
                      {user.name}
                    </TableCell>
                    <TableCell>
                      {user.role}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </PerfectScroll>
          {submitLoading
            ? (
              <CircularProgress
                size="1em"
                style={{ marginTop: '1em' }}
              />
            )
            : (
              <Button
                variant="contained"
                color="primary"
                onClick={submitProject}
                style={{ marginTop: '1em' }}
              >
                Add Now
              </Button>
            )}
        </CardContent>
      </Card>
    );
};

AddProjectUserSelector.propTypes = {
  users: object.isRequired,
  selectUser: func,
  userLoading: bool,
  submitProject: func,
  submitLoading: bool
};

export default AddProjectUserSelector;
