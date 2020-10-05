import { object } from 'prop-types';
import React, { useState, useEffect } from 'react';
import Controllers from 'src/controllers/Controllers';
import Presenters from 'src/presenters/Presenters';
import LoadingView from 'src/views/loadingView';
import View from './View';

const Container = (props) => {
  const { ticket } = props;
  const [loading, setLoading] = useState(true);
  const [attachLoading, setAttachLoading] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [imageOpen, setImageOpen] = useState(false);
  const [openedImage, setOpenedImage] = useState('');

  const getImagesFromApi = async () => {
    const imagesRes = await
    Presenters.getImagesForTicket(ticket.id);

    if (imagesRes.success) {
      setAttachments(imagesRes.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getImagesFromApi();
  }, []);

  const openImage = (url) => {
    setOpenedImage(url);
    setImageOpen(true);
  };

  const closeImage = () => {
    setImageOpen(false);
  };

  const uploadImg = async (files) => {
    setAttachLoading(true);

    const formData = new FormData();
    formData.append('ticketId', ticket.id);
    formData.append('file', files[0]);

    const attachRes = await
    Controllers.attachImgToTicket(formData);

    if (attachRes.success) {
      await getImagesFromApi();
    } else {
      alert('Image upload failed');
    }

    setAttachLoading(false);
  };

  return loading
    ? <LoadingView />
    : (
      <View
        {...props}
        container={{
          attachments,
          imageOpen,
          openedImage,
          openImage,
          closeImage,
          uploadImg,
          attachLoading
        }}
      />
    );
};

Container.propTypes = {
  ticket: object
};

export default Container;
