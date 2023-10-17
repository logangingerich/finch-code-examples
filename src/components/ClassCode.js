import React, { useState } from 'react';

import {
    Clipboard,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Clipboard, Ripple });

function ClassCode() {
  const [jsonData1, setJsonData1] = useState(null);
  const [jsonData2, setJsonData2] = useState(null);
  const [aggregation, setAggregation] = useState(null);

  const aggregateByClassCode = () => {
	const parsed1 = JSON.parse(jsonData1);
  	const parsed2 = JSON.parse(jsonData2);
    try {
        let classCodePayMap = {};

        // Create a map of individual_id to class_code from the employeeProfiles
        let employeeIdToClassCodeMap = {};
        for(let profile of parsed1) {
            employeeIdToClassCodeMap[profile.id] = profile.class_code
        }
    
        // Traverse through the payStatements
        for(let payStatement of parsed2) {
            let classCode = employeeIdToClassCodeMap[payStatement.individual_id];
            if(!classCode) continue; // If there is no class code for this individual, ignore this pay statement
            
            if(classCodePayMap[classCode]) {
                classCodePayMap[classCode] += payStatement.gross_pay.amount;
            } else {
                classCodePayMap[classCode] = payStatement.gross_pay.amount;
            }
        }
    
        // Convert the classCodePayMap to an array of objects
        let result = [];
        for(let classCode in classCodePayMap) {
            result.push({
                class_code: classCode,
                aggregated_workers_comp: classCodePayMap[classCode]
            });
        }
      setAggregation(result);
      console.log ("THE RESULT " + JSON.stringify(result))
      return result;
    } catch (error) {
      console.error('An error occurred:', error);
      setAggregation(null);
      return;
    }
  }

let demoCode1 = `[
    {
        "id": "c2fce459-e78b-45ae-8814-850d7fa03991",
        "first_name": "Katherine",
        "middle_name": "Lyric",
        "last_name": "Balistreri",
        "title": "Customer Web Analyst",
        "manager": {
            "id": "4c362794-ca22-457c-9f38-8a03a3181b61"
        },
        "employment": {
            "type": "employee",
            "subtype": "full_time"
        },
        "department": {
            "name": "Accounts"
        },
        "start_date": "2023-08-14",
        "end_date": null,
        "is_active": true,
        "class_code": "2026",
        "location": {
            "line1": "92288 Block Expressway",
            "line2": "Apt. 485",
            "city": "Lake Efrain",
            "state": "SD",
            "postal_code": "55566-3813",
            "country": "US"
        },
        "income": {
            "unit": "yearly",
            "amount": 28391162,
            "currency": "USD",
            "effective_date": "2023-06-01"
        },
        "income_history": [],
        "custom_fields": [
            {
                "name": "velit",
                "value": "aut vitae tempora placeat at omnis"
            }
        ]
    },
    {
        "id": "d2fce459-e78b-45ae-8814-850d7fa03992",
        "first_name": "Logan",
        "middle_name": "Paul",
        "last_name": "Gingerich",
        "title": "Solutions Engineer",
        "manager": {
            "id": null
        },
        "employment": {
            "type": "employee",
            "subtype": "full_time"
        },
        "department": {
            "name": "Accounts"
        },
        "start_date": "2023-07-14",
        "end_date": null,
        "is_active": true,
        "class_code": "3137",
        "location": {
            "line1": "92288 Block Expressway",
            "line2": "Apt. 486",
            "city": "Lake Efrain",
            "state": "SD",
            "postal_code": "55566-3813",
            "country": "US"
        },
        "income": {
            "unit": "yearly",
            "amount": 27280051,
            "currency": "USD",
            "effective_date": "2023-06-01"
        },
        "income_history": [],
        "custom_fields": [
            {
                "name": "velit",
                "value": "aut vitae tempora placeat at omnis"
            }
        ]
    },
    {
        "id": "f2fce459-e78b-45ae-8814-850d7fa03993",
        "first_name": "Jonathan",
        "middle_name": "Silas",
        "last_name": "Thompson",
        "title": "Account Executive",
        "manager": {
            "id": "5v362794-ca22-457c-9f38-8a03a3181b27"
        },
        "employment": {
            "type": "employee",
            "subtype": "full_time"
        },
        "department": {
            "name": "Accounts"
        },
        "start_date": "2023-06-14",
        "end_date": null,
        "is_active": true,
        "class_code": "2026",
        "location": {
            "line1": "92288 Block Expressway",
            "line2": "Apt. 487",
            "city": "Lake Efrain",
            "state": "SD",
            "postal_code": "55566-3813",
            "country": "US"
        },
        "income": {
            "unit": "yearly",
            "amount": 39403273,
            "currency": "USD",
            "effective_date": "2023-06-01"
        },
        "income_history": [],
        "custom_fields": [
            {
                "name": "velit",
                "value": "aut vitae tempora placeat at omnis"
            }
        ]
    },
    {
        "id": "x2fce459-e78b-45ae-8814-850d7fa03999",
        "first_name": "Angela",
        "middle_name": "Lyra",
        "last_name": "Ross",
        "title": "Senior Software Engineer",
        "manager": {
            "id": null
        },
        "employment": {
            "type": "employee",
            "subtype": "full_time"
        },
        "department": {
            "name": "Accounts"
        },
        "start_date": "2023-05-14",
        "end_date": null,
        "is_active": true,
        "class_code": "3137",
        "location": {
            "line1": "92288 Block Expressway",
            "line2": "Apt. 488",
            "city": "Lake Efrain",
            "state": "SD",
            "postal_code": "55566-3813",
            "country": "US"
        },
        "income": {
            "unit": "yearly",
            "amount": 9402162,
            "currency": "USD",
            "effective_date": "2023-06-01"
        },
        "income_history": [],
        "custom_fields": [
            {
                "name": "velit",
                "value": "aut vitae tempora placeat at omnis"
            }
        ]
    }
    ]`

let demoCode2 = `[
	{
		"individual_id": "c2fce459-e78b-45ae-8814-850d7fa03991",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"total_hours": 80,
		"gross_pay": {
			"amount": 441992,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 179227,
			"currency": "usd"
		},
		"earnings": [
			{
				"name": "HOURLY",
				"type": "wage",
				"amount": 441992,
				"currency": "usd",
				"hours": 80
			}
		],
		"taxes": [
			{
				"type": "federal",
				"name": "Federal Income Tax",
				"employer": false,
				"amount": 106078,
				"currency": "usd"
			},
			{
				"type": "state",
				"name": "State Income Tax",
				"employer": false,
				"amount": 88398,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Social Security (OASDI)",
				"employer": false,
				"amount": 27404,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Medicare",
				"employer": false,
				"amount": 6409,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Social Security (OASDI) - Employer",
				"employer": true,
				"amount": 27404,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Medicare - Employer",
				"employer": true,
				"amount": 6409,
				"currency": "usd"
			}
		],
		"employee_deductions": [
			{
				"type": "401k",
				"name": "401(k) plan %",
				"amount": 26520,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_medical",
				"name": "MED PRE TAX",
				"amount": 4420,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_dental",
				"name": "DEN PRE TAX",
				"amount": 2652,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_vision",
				"name": "VIS PRE TAX",
				"amount": 884,
				"currency": "usd",
				"pre_tax": true
			}
		],
		"employer_contributions": [
			{
				"type": "401k",
				"name": "401(k) Employer",
				"amount": 13260,
				"currency": "usd"
			},
			{
				"type": "s125_medical",
				"name": "MED Employer",
				"amount": 5304,
				"currency": "usd"
			},
			{
				"type": "s125_dental",
				"name": "DEN Employer",
				"amount": 3536,
				"currency": "usd"
			},
			{
				"type": "s125_vision",
				"name": "VIS Employer",
				"amount": 1768,
				"currency": "usd"
			}
		]
	},
	{
		"individual_id": "d2fce459-e78b-45ae-8814-850d7fa03992",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"total_hours": 80,
		"gross_pay": {
			"amount": 615110,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 249427,
			"currency": "usd"
		},
		"earnings": [
			{
				"name": "HOURLY",
				"type": "wage",
				"amount": 615110,
				"currency": "usd",
				"hours": 80
			}
		],
		"taxes": [
			{
				"type": "federal",
				"name": "Federal Income Tax",
				"employer": false,
				"amount": 147626,
				"currency": "usd"
			},
			{
				"type": "state",
				"name": "State Income Tax",
				"employer": false,
				"amount": 123022,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Social Security (OASDI)",
				"employer": false,
				"amount": 38137,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Medicare",
				"employer": false,
				"amount": 8919,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Social Security (OASDI) - Employer",
				"employer": true,
				"amount": 38137,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Medicare - Employer",
				"employer": true,
				"amount": 8919,
				"currency": "usd"
			}
		],
		"employee_deductions": [
			{
				"type": "401k",
				"name": "401(k) plan %",
				"amount": 36907,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_medical",
				"name": "MED PRE TAX",
				"amount": 6151,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_dental",
				"name": "DEN PRE TAX",
				"amount": 3691,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_vision",
				"name": "VIS PRE TAX",
				"amount": 1230,
				"currency": "usd",
				"pre_tax": true
			}
		],
		"employer_contributions": [
			{
				"type": "401k",
				"name": "401(k) Employer",
				"amount": 18453,
				"currency": "usd"
			},
			{
				"type": "s125_medical",
				"name": "MED Employer",
				"amount": 7381,
				"currency": "usd"
			},
			{
				"type": "s125_dental",
				"name": "DEN Employer",
				"amount": 4921,
				"currency": "usd"
			},
			{
				"type": "s125_vision",
				"name": "VIS Employer",
				"amount": 2460,
				"currency": "usd"
			}
		]
	},
	{
		"individual_id": "f2fce459-e78b-45ae-8814-850d7fa03993",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"total_hours": 80,
		"gross_pay": {
			"amount": 565884,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 229466,
			"currency": "usd"
		},
		"earnings": [
			{
				"name": "HOURLY",
				"type": "wage",
				"amount": 523624,
				"currency": "usd",
				"hours": 80
			},
			{
				"name": "Bonus",
				"type": "bonus",
				"amount": 42260,
				"currency": "usd",
				"hours": 0
			}
		],
		"taxes": [
			{
				"type": "federal",
				"name": "Federal Income Tax",
				"employer": false,
				"amount": 135812,
				"currency": "usd"
			},
			{
				"type": "state",
				"name": "State Income Tax",
				"employer": false,
				"amount": 113177,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Social Security (OASDI)",
				"employer": false,
				"amount": 35085,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Medicare",
				"employer": false,
				"amount": 8205,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Social Security (OASDI) - Employer",
				"employer": true,
				"amount": 35085,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Medicare - Employer",
				"employer": true,
				"amount": 8205,
				"currency": "usd"
			}
		],
		"employee_deductions": [
			{
				"type": "401k",
				"name": "401(k) plan %",
				"amount": 33953,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_medical",
				"name": "MED PRE TAX",
				"amount": 5659,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_dental",
				"name": "DEN PRE TAX",
				"amount": 3395,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_vision",
				"name": "VIS PRE TAX",
				"amount": 1132,
				"currency": "usd",
				"pre_tax": true
			}
		],
		"employer_contributions": [
			{
				"type": "401k",
				"name": "401(k) Employer",
				"amount": 16977,
				"currency": "usd"
			},
			{
				"type": "s125_medical",
				"name": "MED Employer",
				"amount": 6791,
				"currency": "usd"
			},
			{
				"type": "s125_dental",
				"name": "DEN Employer",
				"amount": 4527,
				"currency": "usd"
			},
			{
				"type": "s125_vision",
				"name": "VIS Employer",
				"amount": 2264,
				"currency": "usd"
			}
		]
	},
	{
		"individual_id": "x2fce459-e78b-45ae-8814-850d7fa03999",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"total_hours": 80,
		"gross_pay": {
			"amount": 1278517,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 377803,
			"currency": "usd"
		},
		"earnings": [
			{
				"name": "HOURLY",
				"type": "wage",
				"amount": 1182965,
				"currency": "usd",
				"hours": 80
			},
			{
				"name": "Leave Without Pay",
				"type": "other",
				"amount": 95552,
				"currency": "usd",
				"hours": 0
			}
		],
		"taxes": [
			{
				"type": "federal",
				"name": "Federal Income Tax",
				"employer": false,
				"amount": 447481,
				"currency": "usd"
			},
			{
				"type": "state",
				"name": "State Income Tax",
				"employer": false,
				"amount": 255703,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Social Security (OASDI)",
				"employer": false,
				"amount": 79268,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Medicare",
				"employer": false,
				"amount": 18538,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Social Security (OASDI) - Employer",
				"employer": true,
				"amount": 79268,
				"currency": "usd"
			},
			{
				"type": "fica",
				"name": "Medicare - Employer",
				"employer": true,
				"amount": 18538,
				"currency": "usd"
			}
		],
		"employee_deductions": [
			{
				"type": "401k",
				"name": "401(k) plan %",
				"amount": 76711,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_medical",
				"name": "MED PRE TAX",
				"amount": 12785,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_dental",
				"name": "DEN PRE TAX",
				"amount": 7671,
				"currency": "usd",
				"pre_tax": true
			},
			{
				"type": "s125_vision",
				"name": "VIS PRE TAX",
				"amount": 2557,
				"currency": "usd",
				"pre_tax": true
			}
		],
		"employer_contributions": [
			{
				"type": "401k",
				"name": "401(k) Employer",
				"amount": 38356,
				"currency": "usd"
			},
			{
				"type": "s125_medical",
				"name": "MED Employer",
				"amount": 15342,
				"currency": "usd"
			},
			{
				"type": "s125_dental",
				"name": "DEN Employer",
				"amount": 10228,
				"currency": "usd"
			},
			{
				"type": "s125_vision",
				"name": "VIS Employer",
				"amount": 5114,
				"currency": "usd"
			}
		]
	}	
]`

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-4xl font-bold tracking-tight sm:text-6xl">Compare /employment and /pay-statement arrays and aggregate gross pay by class code</h3>
      <br />
        <a target="_blank" rel="noreferrer" href="https://github.com/logangingerich/finch-code-examples/blob/main/src/components/ClassCode.js" className='text-blue-500'>Click here to see the code.</a>
      <br />

      <div className="grid grid-cols-2 gap-4">
        <div>
        <textarea
            className="block p-4 text-gray-900 border border-black rounded-lg bg-gray-0 sm:text-md focus:ring-blue-500 focus:border-blue-500"
            rows="5"
            cols="40"
            placeholder="Paste your /employment JSON 'responses' array here..."
            value={jsonData1}
            onChange={(e) => setJsonData1(e.target.value)}
        ></textarea>
      <br />
        </div>
        <div>
        <textarea
            className="block p-4 text-gray-900 border border-black rounded-lg bg-gray-0 sm:text-md focus:ring-blue-500 focus:border-blue-500"
            rows="5"
            cols="40"
            placeholder="Paste your /pay-statement JSON 'responses' array here..."
            value={jsonData2}
            onChange={(e) => setJsonData2(e.target.value)}
        ></textarea>
      <br />
        </div>
    </div>
    <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={aggregateByClassCode}>Calculate</button>
      <br />
      {aggregation !== null && (
        <div>
          <h2 className="text-4xl font-extrabold">JSON Diff</h2>
          <br />
          <ul className="max-w-md divide-y divide-gray-200">
          <li>
            <pre className="language-json"><code className="text-sm">
            {JSON.stringify(aggregation, null, 2)}
            </code></pre>
          </li>
          </ul>
        </div>
      )}
    <br />
        <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Try this example JSON array from Finch's /employment endpoint:
          </p>
          <div className="max-w mx-auto mt-6 bg-gray-900 rounded-lg overflow-hidden">
            <div className="p-4">
                <div className="flex items-center justify-between">
                <span className="text-gray-200 text-xl font-bold">/employment JSON Example</span>
                <button onClick={() => {navigator.clipboard.writeText(demoCode1)}} id="copyButton" className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 focus:outline-none focus:ring focus:ring-red-400">Copy</button>
                </div>
            </div>

            <div id="copy-target" className="px-3 py-2">
                <pre className="language-json"><code className="text-sm">
                {demoCode1}
           </code></pre>
           </div>
        </div>
      </div>
      <div>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Try this example JSON array from Finch's /pay-statement endpoint:
          </p>
          <div className="max-w mx-auto mt-6 bg-gray-900 rounded-lg overflow-hidden">
            <div className="p-4">
                <div className="flex items-center justify-between">
                <span className="text-gray-200 text-xl font-bold">/pay-statement JSON Example</span>
                <button onClick={() => {navigator.clipboard.writeText(demoCode2)}} id="copyButton" className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 focus:outline-none focus:ring focus:ring-red-400">Copy</button>
                </div>
            </div>

            <div id="copy-target" className="px-3 py-2">
                <pre className="language-json"><code className="text-sm">
                {demoCode2}
           </code></pre>
           </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ClassCode;
