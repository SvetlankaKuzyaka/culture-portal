import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Paper from '@material-ui/core//Paper';
import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';
import Overview from '../director/overview/Overview';
import chooseDirector from './chooseDirector';
import directorOftheDayStyles from './directorOfTheDay.module.css';

const DirectorOfTheDay = () => {
  const { t } = useTranslation('layout');
  const director = chooseDirector(useDirectorsNamespaces());
  return (
    <Paper className={directorOftheDayStyles.directorBlock}>
      <Link
        to="/director/"
        state={{ director }}
        className={directorOftheDayStyles.directorLink}
      >
        <div className={directorOftheDayStyles.directorHeader}>
          {t('title_director_block')}
        </div>
        <Overview director={director} />
      </Link>
    </Paper>
  );
};

export default DirectorOfTheDay;
