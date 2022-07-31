import React, { useCallback, useState, useEffect } from 'react';

import airplane from '../../assets/images/aviao.png';
import { Card } from '../../components/Card';
import { useParticipantsList } from '../../state/hooks/useParticipantsList';
import { useResultRaffle } from '../../state/hooks/useResultRaffle';
import { Button, Footer, SecretFriendText, Select, Text } from './styles';

export const PrizeDraw = () => {
  const [participant, setParticipant] = useState('');
  const [secretFriend, setSecretFriend] = useState('');

  const participants = useParticipantsList();
  const result = useResultRaffle();

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (result.has(participant)) {
        setSecretFriend(result.get(participant)!);
      }
    },
    [result, participant]
  );

  useEffect(() => {
    if (secretFriend) {
      setTimeout(() => {
        setSecretFriend('');
      }, 5000);
    }
  }, [secretFriend]);

  return (
    <Card>
      <section>
        <form onSubmit={handleSubmit}>
          <Select
            required
            name="participant"
            id="participant"
            placeholder="Selecione o seu nome"
            value={participant}
            onChange={(event) => setParticipant(event.target.value)}
          >
            <option>Selecione seu nome</option>
            {participants.map((participator) => (
              <option key={participator}>{participator}</option>
            ))}
          </Select>

          <Text>Clique em em sortear para ver quem é seu amigo secreto!</Text>

          <Button type="submit">Sortear</Button>
        </form>

        {secretFriend && (
          <SecretFriendText role="alert">{secretFriend}</SecretFriendText>
        )}

        <Footer>
          <img src={airplane} alt="A pic of a airplane paper" />
        </Footer>
      </section>
    </Card>
  );
};
