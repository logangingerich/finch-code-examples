import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Finch++</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Click on an option below to see how you can use the raw data from Finch to easily accomplish your use case.
          </p>
          <br />
      <ul>
        <li className="font-medium text-blue-600 hover:underline w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
          <Link to="/calculateGrossWages">Calculate Gross Wages</Link>
        </li>
        <li className="font-medium text-blue-600 hover:underline w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
          <Link to="/orgHierarchy">Build Organizational Hierarchy</Link>
        </li>
        <li className="font-medium text-blue-600 hover:underline w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
          <Link to="/filterInactive">Filter out Inactive Employees from /directory response and reformat for /individual and /employee</Link>
        </li>
        <li className="font-medium text-blue-600 hover:underline w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
          <Link to="/paymentToPayStatement">Convert /payment array to array of payment IDs needed by /pay-statement endpoint</Link>
        </li>
        <li className="font-medium text-blue-600 hover:underline w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
          <Link to="/compareJSON">Compare two /directory arrays and return the diff, associated to the individual's ID</Link>
        </li>
        <li className="font-medium text-blue-600 hover:underline w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
          <Link to="/classCode">Aggregate Gross Pay by Class Code</Link>
        </li>
        <li className="font-medium text-blue-600 hover:underline w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
          <Link to="/percentage401k">Use pay-statement data to determine employee 401k benefit percentage</Link>
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