import { JourneyPicker } from '../../components/JourneyPicker';
import { useState } from 'react';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData);
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && journey.journeyId > 0 && (
        <p>Nalezeno spojení s id: {journey.journeyId}</p>
      )}
    </main>
  );
};
