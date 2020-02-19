import React, { FC } from 'react';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core';
import useOpen from '../../hooks/useOpen';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Minus } from '../../assets/icons/minus.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';

type Props = {
  info: {
    name: string;
    description: string;
  };
};

const InfoDropdown: FC<Props> = ({ info: { name, description } }) => {
  const { open, handleToggle } = useOpen();
  const { fw500, summary, description: descrStyle } = useStyles(open);
  const { t } = useTranslation();
  return (
    <ExpansionPanel square expanded={open} onClick={handleToggle} elevation={0}>
      <ExpansionPanelSummary
        className={summary}
        expandIcon={open ? <Minus /> : <Plus />}
      >
        <Typography variant='body1' color='primary' className={fw500}>
          {t(name)}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={descrStyle}>
        <Typography variant='body2' color='textPrimary'>
          {t(description)}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default InfoDropdown;
