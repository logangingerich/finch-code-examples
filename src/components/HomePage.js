import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Finch++</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Click on an option below to see how you can use the raw data from Finch to esily accomplish your use case.
          </p>
          <br />
      <ul>
        <li className="font-medium text-blue-600 hover:underline w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
          <Link to="/CalculateGrossWages">Calculate Gross Wages</Link>
        </li>
        <li
            class="font-medium text-blue-600 hover:underline w-full py-4">
            Check back soon for more.
        </li>
      </ul>
    </div>
  );
}

export default HomePage;