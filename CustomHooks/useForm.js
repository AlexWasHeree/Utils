import React from 'react';

const types = {
  //lista com regex nesse formato
  email: {
    regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    msg: 'Preencha um email válido',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    //false no useForm = sem tipo especifico nao precisa validar
    if (type === false) {
      return true;
    }
    //length 0 = nao passou valor no input
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].msg);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    //valida quando o campo é alterado
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    //dessa forma => exemplo.validate(); # apenas validate => exemplo.validate(exemplo);
    validate: () => validate(value),
    //valida quando desfoca do campo
    onBlur: () => validate(value),
  };
};

export default useForm;
