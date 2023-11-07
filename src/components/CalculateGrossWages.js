import React, { useState } from 'react';

import {
    Clipboard,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Clipboard, Ripple });

function CalculateGrossWages() {
  const [jsonData, setJsonData] = useState('');
  const [grossWages, setGrossWages] = useState(null);
  const [parseError, setParseError] = useState(null);

  const calculateGrossWages = () => {
    try {
      // Parse the user-entered JSON data
      const data = JSON.parse(jsonData);

      // Ensure that data is an array of pay statements
      if (!Array.isArray(data)) {
        throw new Error('Input data must be an array');
      }

      // Calculate gross wages
      const wageMap = new Map();

      for (let payStatement of data) {
        let individual_id = payStatement.individual_id;
        let gross_pay = payStatement.gross_pay && payStatement.gross_pay.amount || 0;

        if (wageMap.has(individual_id)) {
          wageMap.set(individual_id, wageMap.get(individual_id) + gross_pay);
        } else {
          wageMap.set(individual_id, gross_pay);
        }
      }

      const output = [];
      wageMap.forEach((value, key) => {
        output.push({
          'individual_id': key,
          'total_gross_wage': value
        });
      });

      // Update the state with the calculated gross wages
      setGrossWages(output);
	  setParseError(null);
    } catch (error) {
      console.error('An error occurred:', error);
      setGrossWages(null);
	  setParseError("Parsing Error: Please double-check your JSON input.")
    }
  };

  const demoCode = `[
	{
		"individual_id": "3c4bbf1f-e6c1-448a-af49-b682905bb786",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"total_hours": 80,
		"gross_pay": {
			"amount": 980489,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 289735,
			"currency": "usd"
		},
		"earnings": [
			{
				"name": "Regular Earnings",
				"type": "salary",
				"amount": 945486,
				"currency": "usd",
				"hours": 80
			},
			{
				"name": "Bonus",
				"type": "bonus",
				"amount": 35003,
				"currency": "usd",
				"hours": 0
			}
		],
		"taxes": [
			{
				"type": "federal",
				"name": "Federal Income Tax",
				"employer": false,
				"amount": 343171,
				"currency": "usd"
			},
			{
				"type": "state",
				"name": "State Income Tax",
				"employer": false,
				"amount": 196098,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Social Security (OASDI)",
				"employer": false,
				"amount": 60790,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Medicare",
				"employer": false,
				"amount": 14217,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Social Security (OASDI) - Employer",
				"employer": true,
				"amount": 60790,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Medicare - Employer",
				"employer": true,
				"amount": 14217,
				"currency": "usd"
			}
		],
		"employee_deductions": [
			{
				"type": "401k",
				"name": "401(k) plan %",
				"amount": 58829,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_medical",
				"name": "MED PRE TAX",
				"amount": 9805,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_dental",
				"name": "DEN PRE TAX",
				"amount": 5883,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_vision",
				"name": "VIS PRE TAX",
				"amount": 1961,
				"currency": "usd",
				"pre_tax": true
			}
		],
		"employer_contributions": [
			{
				"type": "401k",
				"name": "401(k) Employer",
				"amount": 29415,
				"currency": "usd"
			},
			{
				"type": "s125_medical",
				"name": "MED Employer",
				"amount": 11766,
				"currency": "usd"
			},
			{
				"type": "s125_dental",
				"name": "DEN Employer",
				"amount": 7844,
				"currency": "usd"
			},
			{
				"type": "s125_vision",
				"name": "VIS Employer",
				"amount": 3922,
				"currency": "usd"
			}
		]
	},
	{
		"individual_id": "f04b3361-a268-4d8c-be98-e3d78d652119",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"total_hours": 80,
		"gross_pay": {
			"amount": 660070,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 267659,
			"currency": "usd"
		},
		"earnings": [
			{
				"name": "Regular Earnings",
				"type": "salary",
				"amount": 660070,
				"currency": "usd",
				"hours": 80
			}
		],
		"taxes": [
			{
				"type": "federal",
				"name": "Federal Income Tax",
				"employer": false,
				"amount": 158417,
				"currency": "usd"
			},
			{
				"type": "state",
				"name": "State Income Tax",
				"employer": false,
				"amount": 132014,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Social Security (OASDI)",
				"employer": false,
				"amount": 40924,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Medicare",
				"employer": false,
				"amount": 9571,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Social Security (OASDI) - Employer",
				"employer": true,
				"amount": 40924,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Medicare - Employer",
				"employer": true,
				"amount": 9571,
				"currency": "usd"
			}
		],
		"employee_deductions": [
			{
				"type": "401k",
				"name": "401(k) plan %",
				"amount": 39604,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_medical",
				"name": "MED PRE TAX",
				"amount": 6601,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_dental",
				"name": "DEN PRE TAX",
				"amount": 3960,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_vision",
				"name": "VIS PRE TAX",
				"amount": 1320,
				"currency": "usd",
				"pre_tax": true
			}
		],
		"employer_contributions": [
			{
				"type": "401k",
				"name": "401(k) Employer",
				"amount": 19802,
				"currency": "usd"
			},
			{
				"type": "s125_medical",
				"name": "MED Employer",
				"amount": 7921,
				"currency": "usd"
			},
			{
				"type": "s125_dental",
				"name": "DEN Employer",
				"amount": 5281,
				"currency": "usd"
			},
			{
				"type": "s125_vision",
				"name": "VIS Employer",
				"amount": 2640,
				"currency": "usd"
			}
		]
	},
	{
		"individual_id": "3c4bbf1f-e6c1-448a-af49-b682905bb786",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"total_hours": 80,
		"gross_pay": {
			"amount": 937177,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 276936,
			"currency": "usd"
		},
		"earnings": [
			{
				"name": "Regular Earnings",
				"type": "salary",
				"amount": 937177,
				"currency": "usd",
				"hours": 80
			}
		],
		"taxes": [
			{
				"type": "federal",
				"name": "Federal Income Tax",
				"employer": false,
				"amount": 328012,
				"currency": "usd"
			},
			{
				"type": "state",
				"name": "State Income Tax",
				"employer": false,
				"amount": 187435,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Social Security (OASDI)",
				"employer": false,
				"amount": 58105,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Medicare",
				"employer": false,
				"amount": 13589,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Social Security (OASDI) - Employer",
				"employer": true,
				"amount": 58105,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Medicare - Employer",
				"employer": true,
				"amount": 13589,
				"currency": "usd"
			}
		],
		"employee_deductions": [
			{
				"type": "401k",
				"name": "401(k) plan %",
				"amount": 56231,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_medical",
				"name": "MED PRE TAX",
				"amount": 9372,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_dental",
				"name": "DEN PRE TAX",
				"amount": 5623,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_vision",
				"name": "VIS PRE TAX",
				"amount": 1874,
				"currency": "usd",
				"pre_tax": true
			}
		],
		"employer_contributions": [
			{
				"type": "401k",
				"name": "401(k) Employer",
				"amount": 28115,
				"currency": "usd"
			},
			{
				"type": "s125_medical",
				"name": "MED Employer",
				"amount": 11246,
				"currency": "usd"
			},
			{
				"type": "s125_dental",
				"name": "DEN Employer",
				"amount": 7497,
				"currency": "usd"
			},
			{
				"type": "s125_vision",
				"name": "VIS Employer",
				"amount": 3749,
				"currency": "usd"
			}
		]
	},
	{
		"individual_id": "f04b3361-a268-4d8c-be98-e3d78d652119",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"total_hours": 65,
		"gross_pay": {
			"amount": 139555,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 91199,
			"currency": "usd"
		},
		"earnings": [
			{
				"name": "Regular",
				"type": "1099",
				"amount": 139555,
				"currency": "usd",
				"hours": 65
			}
		],
		"taxes": [
			{
				"type": "federal",
				"name": "Federal Income Tax",
				"employer": false,
				"amount": 30702,
				"currency": "usd"
			},
			{
				"type": "state",
				"name": "State Income Tax",
				"employer": false,
				"amount": 6978,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Social Security (OASDI)",
				"employer": false,
				"amount": 8652,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Medicare",
				"employer": false,
				"amount": 2024,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Social Security (OASDI) - Employer",
				"employer": true,
				"amount": 8652,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Medicare - Employer",
				"employer": true,
				"amount": 2024,
				"currency": "usd"
			}
		],
		"employee_deductions": [],
		"employer_contributions": []
	}
]`


  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-4xl font-bold tracking-tight sm:text-6xl">Calculate Gross Wages</h3>
	  <br />
        <a target="_blank" rel="noreferrer" href="https://github.com/logangingerich/finch-code-examples/blob/main/src/components/CalculateGrossWages.js" className='text-blue-500'>Click here to see the code.</a>
      <br />
      <textarea
        className="block p-4 text-gray-900 border border-black rounded-lg bg-gray-0 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        rows="5"
        cols="40"
        placeholder="Paste your JSON data here..."
        value={jsonData}
        onChange={(e) => setJsonData(e.target.value)}
      ></textarea>
      
        <br />

      <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={calculateGrossWages}>Calculate</button>
      <br />
	  {parseError}
      {grossWages !== null && (
        <div>
          <h2 className="text-4xl font-extrabold">Gross Wages:</h2>
          <br />
          <ul className="max-w-md divide-y divide-gray-200">
            {grossWages.map((item, index) => (
              <li className="pb-3 sm:pb-4" key={index}>
                <p className="text-sm font-medium text-gray-900 truncate">
                Individual ID: {item.individual_id}
                </p>
                <p className="inline-flex items-center text-base font-semibold text-gray-900">
                Total Gross Wage: {item.total_gross_wage}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    <br />
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Try this example JSON from Finch's /pay-statement endpoint:
          </p>
          <div className="max-w mx-auto mt-6 bg-gray-900 rounded-lg overflow-hidden">
            <div className="p-4">
                <div className="flex items-center justify-between">
                <span className="text-gray-200 text-xl font-bold">JSON Example</span>
                <button onClick={() => {navigator.clipboard.writeText(demoCode)}} id="copyButton" class="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 focus:outline-none focus:ring focus:ring-red-400">Copy</button>
                </div>
            </div>

            <div id="copy-target" className="px-3 py-2">
                <pre className="language-json"><code className="text-sm">
                {demoCode}
           </code></pre>
           </div>
        </div>
    </div>
  );
}

export default CalculateGrossWages;
