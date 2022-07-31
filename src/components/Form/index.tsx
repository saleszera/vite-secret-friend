import { useRef, FormEvent, useCallback, useState } from 'react';

import { useAddParticipants } from '../../state/hooks/useAddParticipants';
import { useErrorMessage } from '../../state/hooks/useErrorMessage';
import { Container, AlertError } from './styles';

export const Form = () => {
  const [name, setName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const addParticipantIntoList = useAddParticipants();
  const errorMessage = useErrorMessage();

  const handleAddParticipant = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      addParticipantIntoList(name);
      setName('');
      inputRef.current?.focus();
    },
    [inputRef, addParticipantIntoList, name]
  );

  return (
    <form onSubmit={handleAddParticipant}>
      <Container>
        <input
          ref={inputRef}
          type="text"
          placeholder="Insira os nomes dos participantes"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit" disabled={!name}>
          Adicionar
        </button>
      </Container>
      {errorMessage && <AlertError role="alert">{errorMessage}</AlertError>}
    </form>
  );
};
