import React from 'react';
import { InputHTMLAttributes } from 'react';

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = (props: TextInputInputProps) => {
  return <input {...props} />;
};
