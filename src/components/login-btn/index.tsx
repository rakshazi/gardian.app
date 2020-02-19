import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

type Props = {
  className: string;
};

const LoginBtn: FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <Button className={className} color='secondary'>
      {t('logIn')}
    </Button>
  );
};

export default LoginBtn;
