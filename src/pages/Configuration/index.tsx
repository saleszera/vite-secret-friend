import { useTranslation } from 'react-i18next';

import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Form } from '../../components/Form';
import { ParticipantsList } from '../../components/ParticipantsList';

export const Configuration = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <section>
        <h2>{t('configuration:start')}</h2>
        <Form />
        <ParticipantsList />
        <Footer />
      </section>
    </Card>
  );
};
