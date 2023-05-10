import { NextPage } from 'next';
import { getResults } from './database';

type Result = {
  date: string;
  team_one: string;
  team_two: string;
  prob_two_goals: number;
  prob_three_goals: number;
};

type Props = {
  results: Result[];
};

const ResultsPage: NextPage<Props> = ({ results }) => {
  return (
    <div>
      <h1>Results</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Team One</th>
            <th>Team Two</th>
            <th>Probability of Two Goals</th>
            <th>Probability of Three Goals</th>
          </tr>
        </thead>
        <tbody>
          {results.map(result => (
            <tr key={result.date}>
              <td>{result.date}</td>
              <td>{result.team_one}</td>
              <td>{result.team_two}</td>
              <td>{result.prob_two_goals}</td>
              <td>{result.prob_three_goals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export async function getServerSideProps() {
  const results = await getResults();

  return {
    props: { results },
  };
}

export default ResultsPage;