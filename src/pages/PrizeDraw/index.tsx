import React, { useCallback, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import airplane from '../../assets/images/airplane.svg';
import { Card } from '../../components/Card';
import { useParticipantsList } from '../../state/hooks/useParticipantsList';
import { useResultRaffle } from '../../state/hooks/useResultRaffle';
import { Button, Footer, SecretFriendText, Select, Text } from './styles';

export const PrizeDraw = () => {
  const [participant, setParticipant] = useState('');
  const [secretFriend, setSecretFriend] = useState('');

  const { t } = useTranslation();

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
            data-testid="participant"
            id="participant"
            name="participant"
            required
            placeholder={t('prizeDraw:selectname')}
            value={participant}
            onChange={(event) => setParticipant(event.target.value)}
          >
            <option>{t('prizeDraw:selectname')}</option>
            {participants.map((participator) => (
              <option key={participator}>{participator}</option>
            ))}
          </Select>

          <Text>{t('prizeDraw:raffleSecretFriend')}</Text>

          <Button type="submit">{t('prizeDraw:raffle')}</Button>
        </form>

        {secretFriend && (
          <SecretFriendText role="alert">{secretFriend}</SecretFriendText>
        )}

        <Footer>
          <img src={airplane} alt={t('prizeDraw:airplanePic')} />
        </Footer>
      </section>
    </Card>
  );
};
