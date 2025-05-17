import { JourneyPicker } from '../../components/JourneyPicker';

export const HomePage = () => {

  const handleJourney = (journeyData) => {
    console.log('Journey selected:', journeyData);
  }

  return (
    <main>
      <JourneyPicker onJourney={handleJourney} />
    </main>
  );
};
