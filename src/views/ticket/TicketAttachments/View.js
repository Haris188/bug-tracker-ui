import { object } from 'prop-types';
import React from 'react';
import FileUpload from 'react-input-files';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Modal,
  IconButton, CircularProgress
} from '@material-ui/core';
import {
  AddPhotoAlternate
} from '@material-ui/icons';
import styled from 'styled-components';

const Image = styled.img`
  height: 140px;
  margin-right:0.5em;
  margin-top: 0.5em;
`;

const View = (props) => {
  const { container } = props;

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h1">
            Attachments
          </Typography>
          {container.attachLoading
            ? (
              <CircularProgress
                size={20}
              />
            )
            : (
              <FileUpload
                onChange={container.uploadImg}
                multiple={false}
              >
                <IconButton>
                  <AddPhotoAlternate />
                </IconButton>
              </FileUpload>
            )}
          <Box
            display="flex"
            flexWrap="wrap"
          >
            {container.attachments.length > 0
              ? container.attachments.map((att) => (
                <Image
                  src={att}
                  onClick={() => { container.openImage(att); }}
                />
              ))
              : (
                <Typography>
                  No attachment available
                </Typography>
              )}
          </Box>
        </CardContent>
        <Modal
          open={container.imageOpen}
          onClose={container.closeImage}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <img
            style={{
              maxWidth: '90%',
              maxHeight: '90%'
            }}
            src={container.openedImage}
            alt="attachment"
          />
        </Modal>
      </Card>
    </div>
  );
};

View.propTypes = {
  container: object
};

export default View;
