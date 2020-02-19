import React, { FC } from 'react';
import { Button, Typography } from '@material-ui/core';
import { usePaginationStyles } from './styles';

type Props = {
  goTo: (ind: number) => void;
  amount: number;
  page: number;
};

const SwiperPagination: FC<Props> = ({ amount, goTo, page }) => {
  const { root, divider } = usePaginationStyles();
  return (
    <div className={root}>
      {Object.keys(Array(amount).fill(null)).map(i => {
        const ind = +i;
        return (
          <Button
            key={ind}
            onClick={() => {
              goTo(ind);
            }}
          >
            <Typography
              variant='body1'
              color={page === ind ? 'secondary' : 'textSecondary'}
            >
              {ind + 1}
              {page === ind && ind + 1 < amount && <span className={divider} />}
            </Typography>
          </Button>
        );
      })}
    </div>
  );
};

export default SwiperPagination;
