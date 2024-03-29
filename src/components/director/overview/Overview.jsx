import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import useDirectorData from '../../../utils/useDirectorData';
import useDirectorsImages from '../../../utils/useDirectorsImages';
import OverviewStyles from './overview.module.css';

const Overview = ({ id }) => {
  const [data, setData] = useState(null);
  const images = useDirectorsImages();
  const { t } = useTranslation('layout');

  useEffect(() => {
    const fetchData = async () => {
      const directorData = await useDirectorData(id);
      setData(directorData);
    };
    if (typeof id !== 'object') {
      fetchData();
    } else setData(id);
  }, [id]);

  if (data === null) return null;

  const birthplace = `${t('birthplace')}: ${data.city}`;

  return (
    <div id="overview" className={OverviewStyles.overviewWrapper}>
      <div className={OverviewStyles.container}>
        <img
          className={OverviewStyles.img}
          src={images[data.path].main}
          alt="director"
        />
      </div>
      <div className={OverviewStyles.info}>
        <h1 className={OverviewStyles.name}>{data.name}</h1>
        <span className={OverviewStyles.date}>{data.date}</span>
        <span className={OverviewStyles.birthplace}>{birthplace}</span>
        <span className={OverviewStyles.description}>{data.description}</span>
      </div>
    </div>
  );
};

Overview.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.objectOf(PropTypes.any).isRequired,
  ]).isRequired,
};

export default Overview;
