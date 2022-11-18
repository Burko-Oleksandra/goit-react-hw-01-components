import Statistics from './Statistics';
import data from 'components/Statistics/data.json';

export default function StatisticsApp() {
  return (
    <>
      <Statistics title="Upload stats" stats={data} />
    </>
  );
}
