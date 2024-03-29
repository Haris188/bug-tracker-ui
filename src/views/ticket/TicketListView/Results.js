import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
  Checkbox,
  Link
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({
  completeTicket,
  handleTicketClick,
  className,
  tickets,
  currentUser,
  ...rest
}) => {
  const classes = useStyles();

  const checkDisabled = (ticket) => {
    const res = (
      ticket.completed === 'true'
      || currentUser.role === 'developer'
    );

    return res;
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          {tickets.length < 1
            ? (
              <Typography
                variant="body1"
                style={{
                  marginLeft: '1em'
                }}
              >
                No ticket available
              </Typography>
            )
            : (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      Problem
                    </TableCell>
                    <TableCell>
                      Priority
                    </TableCell>
                    <TableCell>
                      Description
                    </TableCell>
                    <TableCell>
                      Completed
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow
                      hover
                      key={ticket.id}
                    >
                      <TableCell>
                        <Box
                          alignItems="center"
                          display="flex"
                        >
                          <Link
                            variant="body1"
                            component="button"
                            onClick={() => { handleTicketClick(ticket); }}
                          >
                            {ticket.problem}
                          </Link>
                        </Box>
                      </TableCell>
                      <TableCell>
                        {ticket.priority}
                      </TableCell>
                      <TableCell>
                        {ticket.description}
                      </TableCell>
                      <TableCell>
                        <Checkbox
                          onClick={() => { completeTicket(ticket.id); }}
                          disabled={checkDisabled(ticket)}
                          checked={ticket.completed === 'true'}
                        />
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
  tickets: PropTypes.array.isRequired,
  deleteticket: PropTypes.func,
  handleTicketClick: PropTypes.func,
  completeTicket: PropTypes.func,
  currentUser: PropTypes.object
};

export default Results;
