import React, { Suspense, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import uniqid from 'uniqid';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Header from '../components/layout/Header';
import Menu from '../components/layout/Menu';
import Biography from '../components/director/Biography';
import WorksList from '../components/director/WorksList';
import Gallery from '../components/director/gallery/Gallery';
import Video from '../components/director/video/Video';
import Map from '../components/director/map/Map';

import Overview from '../components/director/overview/Overview';
import Loader from '../components/layout/Loader';
import useDirectorData from '../utils/useDirectorData';
import useDirectorId from '../utils/useDirectorId';

const style = {
  margin: '0 auto',
  padding: '1%',
  fontSize: '32px',
};

const useStyles = makeStyles({
  wrapper: {
    '@media only screen and (min-width: 1024px)': {
      width: '80%',
    },
  },
});

const Director = ({ location }) => {
  const { t } = useTranslation('layout');
  const { director } = location.state ? location.state : null;
  const id = useDirectorId(director);
  const styles = useStyles();

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setData(null);
      const directorData = await useDirectorData(id);
      setData(directorData);
    }
    fetchData();
  }, [id]);

  if (data === null)
    return (
      <>
        <Header>
          <Menu />
        </Header>
        <Loader />
      </>
    );

  const mapNameComponent = {
    overview: <Overview id={data} />,
    biography: <Biography bio={data.bio} />,
    workslist: <WorksList works={data.work} />,
    gallery: <Gallery path={data.path} />,
    video: <Video video={data.video} />,
    map: <Map mapData={data.mapData} />,
  };

  return (
    <>
      <Element name="start">
        <Header>
          <Menu />
        </Header>
      </Element>
      <Typography component="div" style={style} className={styles.wrapper}>
        {Object.keys(mapNameComponent).map((item) => (
          <Element key={uniqid()} name={item}>
            {mapNameComponent[`${item}`]}
          </Element>
        ))}
      </Typography>
    </>
  );
};

const DirectorWrapper = ({ location }) => (
  <>
    {typeof window !== 'undefined' && (
      <Suspense fallback={<Loader />}>
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
