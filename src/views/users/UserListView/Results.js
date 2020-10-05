import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  makeStyles, IconButton
} from '@material-ui/core';
import {
  Delete
} from '@material-ui/icons';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({
  deleteCustomer, className, customers, ...rest
}) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          {customers.length < 1
            ? (
              <Typography
                variant="body1"
                style={{
                  marginLeft: '1em'
                }}
              >
                No user available
              </Typography>
            )
            : (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      Name
                    </TableCell>
                    <TableCell>
                      Email
                    </TableCell>
                    <TableCell>
                      Role
                    </TableCell>
                    <TableCell>
                      Delete
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow
                      hover
                      key={customer.id}
                    >
                      <TableCell>
                        <Box
                          alignItems="center"
                          display="flex"
                        >
                          <Avatar
                            className={classes.avatar}
                            src={customer.avatarUrl}
                          >
                            {getInitials(customer.name)}
                          </Avatar>
                          <Typography
                            color="textPrimary"
                            variant="body1"
                          >
                            {customer.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        {customer.email}
                      </TableCell>
                      <TableCell>
                        {customer.role}
                      </TableCell>
                      <TableCell>
                        <IconButton onClick={() => { deleteCustomer(customer.id); }}>
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired,
  deleteCustomer: PropTypes.func
};

export default Results;
