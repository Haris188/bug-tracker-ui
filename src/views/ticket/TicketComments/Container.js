import { object } from 'prop-types';
import React, { useEffect, useState } from 'react';
import Controllers from 'src/controllers/Controllers';
import Presenters from 'src/presenters/Presenters';
import LoadingView from 'src/views/loadingView';
import View from './View';

const Container = (props) => {
  const { ticket } = props;
  const [loading, setLoading] = useState(true);
  const [addLoading, setAddLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentError, setCommentError] = useState(false);
  const [commentField, setCommentField] = useState('');

  const getCommentsFromApi = async () => {
    const commentRes = await
    Presenters.getCommentsForTicket(ticket.id);

    if (commentRes.success) {
      setComments(commentRes.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    getCommentsFromApi();
  }, []);

  const changeCommentValue = (e) => {
    setCommentField(e.target.value);
  };

  const submitComment = async (e) => {
    e.preventDefault();

    if (commentField.length > 0) {
      setAddLoading(true);
      setCommentError(false);
      setCommentField('');

      const addRes = await
      Controllers.addCommentToTicket({
        ticketId: ticket.id,
        text: commentField
      });

      if (addRes.success) {
        await getCommentsFromApi();
      } else {
        alert('Comment add failed');
      }
    } else {
      setCommentError(true);
    }

    setAddLoading(false);
  };

  return loading
    ? <LoadingView />
    : (
      <View
        {...props}
        container={{
          comments,
          changeCommentValue,
          commentField,
          submitComment,
          addLoading,
          commentError
        }}
      />
    );
};

Container.propTypes = {
  ticket: object
};

export default Container;
