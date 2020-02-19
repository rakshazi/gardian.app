import React, { FC } from 'react';
import MaskedInput from 'react-text-mask';
import { TextField, InputAdornment } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

type TextMaskPhoneProps = {
  inputRef: (ref: HTMLInputElement | null) => void;
};

const TextMaskPhone = (props: TextMaskPhoneProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/]}
      placeholderChar={'_'}
      showMask
    />
  );
};

type Props = {
  className: string;
};

const PhoneInput: FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <TextField
      className={className}
      variant='filled'
      label={t('phone')}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>{'+373 '}</InputAdornment>
        ),
        inputComponent: TextMaskPhone as any,
      }}
    />
  );
};

export default PhoneInput;
