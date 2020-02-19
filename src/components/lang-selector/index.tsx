import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from './styles';
import languages from './languages';
import { useTranslation } from 'react-i18next';

const LangSelector = () => {
  const { active, rest } = useStyles();
  const { i18n } = useTranslation();
  return (
    <>
      {languages.map(({ key, name }) => (
        <Button
          key={key}
          className={key === i18n.language ? active : rest}
          onClick={() => i18n.changeLanguage(key)}
        >
          {name}
        </Button>
      ))}
    </>
  );
};

export default LangSelector;
