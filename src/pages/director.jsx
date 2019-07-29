import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Map from '../components/director/Map';
import Video from '../components/director/Video';
import Gallery from '../components/director/Gallery';

const Director = ({ location }) => {
  const { director } = location.state ? location.state : null;

  return (
    <>
      <Header />
      <Sidebar />
      <Video director={director} />
      <Map director={director} />
      <Gallery director={director} />
    </>
  );
};

const DirectorWrapper = ({ location }) => (
  <>
    {typeof window !== 'undefined' && (
      <Suspense fallback="loading">
        <Director location={location} />
      </Suspense>
    )}
  </>
);

Director.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

DirectorWrapper.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DirectorWrapper;