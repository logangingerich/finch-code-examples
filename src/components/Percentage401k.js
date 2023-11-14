import React, { useState } from 'react';

import {
    Clipboard,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Clipboard, Ripple });

function Percentage401k() {
  const [jsonData, setJsonData] = useState('');
  const [data, setData] = useState('');
  const [parseError, setParseError] = useState(null);

  const calculateMultiple401kPercentage = (input) => {
    try {
      let results = [];

      // Loop through each pay statement to calculate the 401k percentage
      let payStatements = JSON.parse(input);
      for (let statement of payStatements) {
          let individualId = statement.individual_id;
          let grossPay =  statement.gross_pay.amount;

          // Check if employee_deductions is empty
          if (!statement.employee_deductions || statement.employee_deductions.length === 0) {
              results.push({
                  individual_id: individualId,
                  percentage401k: null
              });
              continue;
          }

          // Find the 401k deduction amount for the individual
          let deduction401k = null;
          for (let deduction of statement.employee_deductions) {
              if (deduction.type === '401k') {
                  deduction401k = deduction.amount;
                  break;
              }
          }

          // If 401k deduction is not found, continue to next iteration
          if (deduction401k === null) {
              results.push({
                  individual_id: individualId,
                  percentage401k: null
              });
              continue;
          }

          // Calculate the percentage and round to an integer
          let percentage = Math.round((deduction401k / grossPay) * 100);

          // Append the result to the list
          results.push({
              individual_id: individualId,
              percentage401k: percentage
          });
      }
      setData(results);
	  setParseError(null);
      return results;
    } catch (error) {
      console.error('An error occurred:', error);
      setData(null);
	  setParseError("Parsing Error: Please double-check your JSON input.")
    }
  };

let demoCode = 
`[
	{
		"individual_id": "2680d9cb-21ee-47c3-8128-a8584767a7a3",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"gross_pay": {
			"amount": 88000,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 48806,
			"currency": "usd"
		},
		"total_hours": 40,
		"earnings": [
			{
				"name": "Regular Hours",
				"amount": 88000,
				"type": "wage",
				"hours": 40,
				"currency": "usd"
			}
		],
		"taxes": [
			{
				"name": "Federal Income Tax",
				"employer": false,
				"type": "federal",
				"amount": 11,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": false,
				"type": "fica",
				"amount": 3310,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": true,
				"type": "fica",
				"amount": 3310,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": false,
				"type": "fica",
				"amount": 774,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": true,
				"type": "fica",
				"amount": 774,
				"currency": "usd"
			},
			{
				"name": "FUTA",
				"employer": true,
				"type": "federal",
				"amount": 320,
				"currency": "usd"
			},
			{
				"name": "CA SUI",
				"employer": true,
				"type": "state",
				"amount": 1815,
				"currency": "usd"
			},
			{
				"name": "CA ETT",
				"employer": true,
				"type": "state",
				"amount": 53,
				"currency": "usd"
			},
			{
				"name": "CA SDI",
				"employer": false,
				"type": "state",
				"amount": 480,
				"currency": "usd"
			}
		],
		"employee_deductions": [
			{
				"name": "401k",
				"amount": 12195,
				"type": "401k",
				"currency": "usd",
				"pre_tax": true
			},
			{
				"name": "Dental Insurance",
				"amount": 10591,
				"type": "s125_dental",
				"currency": "usd",
				"pre_tax": true
			},
			{
				"name": "Vision Insurance",
				"amount": 11833,
				"type": "s125_vision",
				"currency": "usd",
				"pre_tax": true
			}
		],
		"employer_contributions": [
			{
				"name": "401k",
				"amount": 6186,
				"currency": "usd",
				"type": "401k"
			},
			{
				"name": "Dental Insurance",
				"amount": 11332,
				"currency": "usd",
				"type": "s125_dental"
			},
			{
				"name": "Vision Insurance",
				"amount": 11604,
				"currency": "usd",
				"type": "s125_vision"
			}
		]
	},
	{
		"individual_id": "27b7ee8d-5e40-472e-a77e-12a57405ad38",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"gross_pay": {
			"amount": 300000,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 223801,
			"currency": "usd"
		},
		"total_hours": 40,
		"earnings": [
			{
				"name": "Regular Hours",
				"amount": 300000,
				"type": "wage",
				"hours": 40,
				"currency": "usd"
			}
		],
		"taxes": [
			{
				"name": "Federal Income Tax",
				"employer": false,
				"type": "federal",
				"amount": 36233,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": false,
				"type": "fica",
				"amount": 18600,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": true,
				"type": "fica",
				"amount": 18600,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": false,
				"type": "fica",
				"amount": 4350,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": true,
				"type": "fica",
				"amount": 4350,
				"currency": "usd"
			},
			{
				"name": "CA State Income Tax",
				"employer": false,
				"type": "state",
				"amount": 14316,
				"currency": "usd"
			},
			{
				"name": "FUTA",
				"employer": true,
				"type": "federal",
				"amount": 1800,
				"currency": "usd"
			},
			{
				"name": "CA SUI",
				"employer": true,
				"type": "state",
				"amount": 10200,
				"currency": "usd"
			},
			{
				"name": "CA ETT",
				"employer": true,
				"type": "state",
				"amount": 300,
				"currency": "usd"
			},
			{
				"name": "CA SDI",
				"employer": false,
				"type": "state",
				"amount": 2700,
				"currency": "usd"
			}
		],
		"employee_deductions": [],
		"employer_contributions": []
	},
	{
		"individual_id": "6bd153dc-f0b4-405a-b59f-11de63a0a25e",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"gross_pay": {
			"amount": 269231,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 187467,
			"currency": "usd"
		},
		"total_hours": 40,
		"earnings": [
			{
				"name": "Regular Hours",
				"amount": 269231,
				"type": "wage",
				"hours": 40,
				"currency": "usd"
			}
		],
		"taxes": [
			{
				"name": "Federal Income Tax",
				"employer": false,
				"type": "federal",
				"amount": 22923,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": false,
				"type": "fica",
				"amount": 14849,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": true,
				"type": "fica",
				"amount": 14849,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": false,
				"type": "fica",
				"amount": 3473,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": true,
				"type": "fica",
				"amount": 3473,
				"currency": "usd"
			},
			{
				"name": "CA State Income Tax",
				"employer": false,
				"type": "state",
				"amount": 8634,
				"currency": "usd"
			},
			{
				"name": "FUTA",
				"employer": true,
				"type": "federal",
				"amount": 1437,
				"currency": "usd"
			},
			{
				"name": "CA SUI",
				"employer": true,
				"type": "state",
				"amount": 8143,
				"currency": "usd"
			},
			{
				"name": "CA ETT",
				"employer": true,
				"type": "state",
				"amount": 240,
				"currency": "usd"
			},
			{
				"name": "CA SDI",
				"employer": false,
				"type": "state",
				"amount": 2156,
				"currency": "usd"
			}
		],
		"employee_deductions": [
			{
				"name": "401k",
				"amount": 9099,
				"type": "401k",
				"currency": "usd",
				"pre_tax": true
			},
			{
				"name": "Dental Insurance",
				"amount": 7044,
				"type": "s125_dental",
				"currency": "usd",
				"pre_tax": true
			},
			{
				"name": "Vision Insurance",
				"amount": 13586,
				"type": "s125_vision",
				"currency": "usd",
				"pre_tax": true
			}
		],
		"employer_contributions": [
			{
				"name": "401k",
				"amount": 6121,
				"currency": "usd",
				"type": "401k"
			},
			{
				"name": "Dental Insurance",
				"amount": 8122,
				"currency": "usd",
				"type": "s125_dental"
			},
			{
				"name": "Vision Insurance",
				"amount": 11810,
				"currency": "usd",
				"type": "s125_vision"
			}
		]
	},
	{
		"individual_id": "a2fae979-2449-4727-9ad9-b3d339d283cc",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"gross_pay": {
			"amount": 234615,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 184503,
			"currency": "usd"
		},
		"total_hours": 40,
		"earnings": [
			{
				"name": "Regular Hours",
				"amount": 234615,
				"type": "wage",
				"hours": 40,
				"currency": "usd"
			}
		],
		"taxes": [
			{
				"name": "Federal Income Tax",
				"employer": false,
				"type": "federal",
				"amount": 21848,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": false,
				"type": "fica",
				"amount": 14546,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": true,
				"type": "fica",
				"amount": 14546,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": false,
				"type": "fica",
				"amount": 3402,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": true,
				"type": "fica",
				"amount": 3402,
				"currency": "usd"
			},
			{
				"name": "CA State Income Tax",
				"employer": false,
				"type": "state",
				"amount": 8204,
				"currency": "usd"
			},
			{
				"name": "FUTA",
				"employer": true,
				"type": "federal",
				"amount": 1408,
				"currency": "usd"
			},
			{
				"name": "CA SUI",
				"employer": true,
				"type": "state",
				"amount": 7977,
				"currency": "usd"
			},
			{
				"name": "CA ETT",
				"employer": true,
				"type": "state",
				"amount": 235,
				"currency": "usd"
			},
			{
				"name": "CA SDI",
				"employer": false,
				"type": "state",
				"amount": 2112,
				"currency": "usd"
			}
		],
		"employee_deductions": [],
		"employer_contributions": []
	},
	{
		"individual_id": "2a1e22e2-0f3e-4ff8-8b55-06409c23b600",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"gross_pay": {
			"amount": 423077,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 283708,
			"currency": "usd"
		},
		"total_hours": 40,
		"earnings": [
			{
				"name": "Regular Hours",
				"amount": 423077,
				"type": "wage",
				"hours": 40,
				"currency": "usd"
			}
		],
		"taxes": [
			{
				"name": "Federal Income Tax",
				"employer": false,
				"type": "federal",
				"amount": 58487,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": false,
				"type": "fica",
				"amount": 24872,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": true,
				"type": "fica",
				"amount": 24872,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": false,
				"type": "fica",
				"amount": 5817,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": true,
				"type": "fica",
				"amount": 5817,
				"currency": "usd"
			},
			{
				"name": "CA State Income Tax",
				"employer": false,
				"type": "state",
				"amount": 24664,
				"currency": "usd"
			},
			{
				"name": "FUTA",
				"employer": true,
				"type": "federal",
				"amount": 2407,
				"currency": "usd"
			},
			{
				"name": "CA SUI",
				"employer": true,
				"type": "state",
				"amount": 13639,
				"currency": "usd"
			},
			{
				"name": "CA ETT",
				"employer": true,
				"type": "state",
				"amount": 401,
				"currency": "usd"
			},
			{
				"name": "CA SDI",
				"employer": false,
				"type": "state",
				"amount": 3610,
				"currency": "usd"
			}
		],
		"employee_deductions": [
			{
				"name": "401k",
				"amount": 6490,
				"type": "401k",
				"currency": "usd",
				"pre_tax": true
			},
			{
				"name": "Dental Insurance",
				"amount": 7683,
				"type": "s125_dental",
				"currency": "usd",
				"pre_tax": true
			},
			{
				"name": "Vision Insurance",
				"amount": 7746,
				"type": "s125_vision",
				"currency": "usd",
				"pre_tax": true
			}
		],
		"employer_contributions": [
			{
				"name": "401k",
				"amount": 9113,
				"currency": "usd",
				"type": "401k"
			},
			{
				"name": "Dental Insurance",
				"amount": 9527,
				"currency": "usd",
				"type": "s125_dental"
			},
			{
				"name": "Vision Insurance",
				"amount": 8950,
				"currency": "usd",
				"type": "s125_vision"
			}
		]
	},
	{
		"individual_id": "b00f92ff-3387-4c42-a505-be9ad3d619b2",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"gross_pay": {
			"amount": 423077,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 296628,
			"currency": "usd"
		},
		"total_hours": 40,
		"earnings": [
			{
				"name": "Regular Hours",
				"amount": 423077,
				"type": "wage",
				"hours": 40,
				"currency": "usd"
			}
		],
		"taxes": [
			{
				"name": "Federal Income Tax",
				"employer": false,
				"type": "federal",
				"amount": 63369,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": false,
				"type": "fica",
				"amount": 26231,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": true,
				"type": "fica",
				"amount": 26231,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": false,
				"type": "fica",
				"amount": 6135,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": true,
				"type": "fica",
				"amount": 6135,
				"currency": "usd"
			},
			{
				"name": "CA State Income Tax",
				"employer": false,
				"type": "state",
				"amount": 26906,
				"currency": "usd"
			},
			{
				"name": "FUTA",
				"employer": true,
				"type": "federal",
				"amount": 2538,
				"currency": "usd"
			},
			{
				"name": "CA SUI",
				"employer": true,
				"type": "state",
				"amount": 14385,
				"currency": "usd"
			},
			{
				"name": "CA ETT",
				"employer": true,
				"type": "state",
				"amount": 423,
				"currency": "usd"
			},
			{
				"name": "CA SDI",
				"employer": false,
				"type": "state",
				"amount": 3808,
				"currency": "usd"
			}
		],
		"employee_deductions": [],
		"employer_contributions": []
	},
	{
		"individual_id": "ad7dd0b5-a215-4c92-a817-24a6736f1667",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"gross_pay": {
			"amount": 88000,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 48797,
			"currency": "usd"
		},
		"total_hours": 40,
		"earnings": [
			{
				"name": "Regular Hours",
				"amount": 88000,
				"type": "wage",
				"hours": 40,
				"currency": "usd"
			}
		],
		"taxes": [
			{
				"name": "Federal Income Tax",
				"employer": false,
				"type": "federal",
				"amount": 10,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": false,
				"type": "fica",
				"amount": 3309,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": true,
				"type": "fica",
				"amount": 3309,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": false,
				"type": "fica",
				"amount": 774,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": true,
				"type": "fica",
				"amount": 774,
				"currency": "usd"
			},
			{
				"name": "FUTA",
				"employer": true,
				"type": "federal",
				"amount": 320,
				"currency": "usd"
			},
			{
				"name": "CA SUI",
				"employer": true,
				"type": "state",
				"amount": 1815,
				"currency": "usd"
			},
			{
				"name": "CA ETT",
				"employer": true,
				"type": "state",
				"amount": 53,
				"currency": "usd"
			},
			{
				"name": "CA SDI",
				"employer": false,
				"type": "state",
				"amount": 480,
				"currency": "usd"
			}
		],
		"employee_deductions": [
			{
				"name": "401k",
				"amount": 12263,
				"type": "401k",
				"currency": "usd",
				"pre_tax": true
			},
			{
				"name": "Dental Insurance",
				"amount": 11119,
				"type": "s125_dental",
				"currency": "usd",
				"pre_tax": true
			},
			{
				"name": "Vision Insurance",
				"amount": 11248,
				"type": "s125_vision",
				"currency": "usd",
				"pre_tax": true
			}
		],
		"employer_contributions": [
			{
				"name": "401k",
				"amount": 13576,
				"currency": "usd",
				"type": "401k"
			},
			{
				"name": "Dental Insurance",
				"amount": 11966,
				"currency": "usd",
				"type": "s125_dental"
			},
			{
				"name": "Vision Insurance",
				"amount": 6867,
				"currency": "usd",
				"type": "s125_vision"
			}
		]
	},
	{
		"individual_id": "4801cbc0-5fff-4f29-a710-f4a498575f29",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"gross_pay": {
			"amount": 307692,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 228357,
			"currency": "usd"
		},
		"total_hours": 40,
		"earnings": [
			{
				"name": "Regular Hours",
				"amount": 307692,
				"type": "wage",
				"hours": 40,
				"currency": "usd"
			}
		],
		"taxes": [
			{
				"name": "Federal Income Tax",
				"employer": false,
				"type": "federal",
				"amount": 37925,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": false,
				"type": "fica",
				"amount": 19077,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": true,
				"type": "fica",
				"amount": 19077,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": false,
				"type": "fica",
				"amount": 4462,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": true,
				"type": "fica",
				"amount": 4462,
				"currency": "usd"
			},
			{
				"name": "CA State Income Tax",
				"employer": false,
				"type": "state",
				"amount": 15102,
				"currency": "usd"
			},
			{
				"name": "FUTA",
				"employer": true,
				"type": "federal",
				"amount": 1846,
				"currency": "usd"
			},
			{
				"name": "CA SUI",
				"employer": true,
				"type": "state",
				"amount": 10462,
				"currency": "usd"
			},
			{
				"name": "CA ETT",
				"employer": true,
				"type": "state",
				"amount": 308,
				"currency": "usd"
			},
			{
				"name": "CA SDI",
				"employer": false,
				"type": "state",
				"amount": 2769,
				"currency": "usd"
			}
		],
		"employee_deductions": [],
		"employer_contributions": []
	},
	{
		"individual_id": "b454ed01-eacb-4940-a85e-efd3ceb20e6f",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"gross_pay": {
			"amount": 169231,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 117124,
			"currency": "usd"
		},
		"total_hours": 40,
		"earnings": [
			{
				"name": "Regular Hours",
				"amount": 169231,
				"type": "wage",
				"hours": 40,
				"currency": "usd"
			}
		],
		"taxes": [
			{
				"name": "Federal Income Tax",
				"employer": false,
				"type": "federal",
				"amount": 9704,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": false,
				"type": "fica",
				"amount": 8754,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": true,
				"type": "fica",
				"amount": 8754,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": false,
				"type": "fica",
				"amount": 2047,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": true,
				"type": "fica",
				"amount": 2047,
				"currency": "usd"
			},
			{
				"name": "CA State Income Tax",
				"employer": false,
				"type": "state",
				"amount": 2286,
				"currency": "usd"
			},
			{
				"name": "FUTA",
				"employer": true,
				"type": "federal",
				"amount": 847,
				"currency": "usd"
			},
			{
				"name": "CA SUI",
				"employer": true,
				"type": "state",
				"amount": 4800,
				"currency": "usd"
			},
			{
				"name": "CA ETT",
				"employer": true,
				"type": "state",
				"amount": 141,
				"currency": "usd"
			},
			{
				"name": "CA SDI",
				"employer": false,
				"type": "state",
				"amount": 1271,
				"currency": "usd"
			}
		],
		"employee_deductions": [
			{
				"name": "401k",
				"amount": 7834,
				"type": "401k",
				"currency": "usd",
				"pre_tax": true
			},
			{
				"name": "Dental Insurance",
				"amount": 14289,
				"type": "s125_dental",
				"currency": "usd",
				"pre_tax": true
			},
			{
				"name": "Vision Insurance",
				"amount": 5922,
				"type": "s125_vision",
				"currency": "usd",
				"pre_tax": true
			}
		],
		"employer_contributions": [
			{
				"name": "401k",
				"amount": 11571,
				"currency": "usd",
				"type": "401k"
			},
			{
				"name": "Dental Insurance",
				"amount": 7588,
				"currency": "usd",
				"type": "s125_dental"
			},
			{
				"name": "Vision Insurance",
				"amount": 9974,
				"currency": "usd",
				"type": "s125_vision"
			}
		]
	},
	{
		"individual_id": "26e5ae38-dfbb-4beb-96a7-d254e7ebfe6a",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"gross_pay": {
			"amount": 300000,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 223801,
			"currency": "usd"
		},
		"total_hours": 40,
		"earnings": [
			{
				"name": "Regular Hours",
				"amount": 300000,
				"type": "wage",
				"hours": 40,
				"currency": "usd"
			}
		],
		"taxes": [
			{
				"name": "Federal Income Tax",
				"employer": false,
				"type": "federal",
				"amount": 36233,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": false,
				"type": "fica",
				"amount": 18600,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": true,
				"type": "fica",
				"amount": 18600,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": false,
				"type": "fica",
				"amount": 4350,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": true,
				"type": "fica",
				"amount": 4350,
				"currency": "usd"
			},
			{
				"name": "CA State Income Tax",
				"employer": false,
				"type": "state",
				"amount": 14316,
				"currency": "usd"
			},
			{
				"name": "FUTA",
				"employer": true,
				"type": "federal",
				"amount": 1800,
				"currency": "usd"
			},
			{
				"name": "CA SUI",
				"employer": true,
				"type": "state",
				"amount": 10200,
				"currency": "usd"
			},
			{
				"name": "CA ETT",
				"employer": true,
				"type": "state",
				"amount": 300,
				"currency": "usd"
			},
			{
				"name": "CA SDI",
				"employer": false,
				"type": "state",
				"amount": 2700,
				"currency": "usd"
			}
		],
		"employee_deductions": [],
		"employer_contributions": []
	},
	{
		"individual_id": "626ed866-f1dd-4356-8c2e-d8b5ca62654e",
		"type": "regular_payroll",
		"payment_method": "direct_deposit",
		"gross_pay": {
			"amount": 148000,
			"currency": "usd"
		},
		"net_pay": {
			"amount": 105137,
			"currency": "usd"
		},
		"total_hours": 40,
		"earnings": [
			{
				"name": "Regular Hours",
				"amount": 148000,
				"type": "wage",
				"hours": 40,
				"currency": "usd"
			}
		],
		"taxes": [
			{
				"name": "Federal Income Tax",
				"employer": false,
				"type": "federal",
				"amount": 7787,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": false,
				"type": "fica",
				"amount": 7763,
				"currency": "usd"
			},
			{
				"name": "Social Security",
				"employer": true,
				"type": "fica",
				"amount": 7763,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": false,
				"type": "fica",
				"amount": 1816,
				"currency": "usd"
			},
			{
				"name": "Medicare",
				"employer": true,
				"type": "fica",
				"amount": 1816,
				"currency": "usd"
			},
			{
				"name": "CA State Income Tax",
				"employer": false,
				"type": "state",
				"amount": 1584,
				"currency": "usd"
			},
			{
				"name": "FUTA",
				"employer": true,
				"type": "federal",
				"amount": 751,
				"currency": "usd"
			},
			{
				"name": "CA SUI",
				"employer": true,
				"type": "state",
				"amount": 4257,
				"currency": "usd"
			},
			{
				"name": "CA ETT",
				"employer": true,
				"type": "state",
				"amount": 125,
				"currency": "usd"
			},
			{
				"name": "CA SDI",
				"employer": false,
				"type": "state",
				"amount": 1127,
				"currency": "usd"
			}
		],
		"employee_deductions": [
			{
				"name": "401k",
				"amount": 7801,
				"type": "401k",
				"currency": "usd",
				"pre_tax": true
			},
			{
				"name": "Dental Insurance",
				"amount": 6250,
				"type": "s125_dental",
				"currency": "usd",
				"pre_tax": true
			},
			{
				"name": "Vision Insurance",
				"amount": 8735,
				"type": "s125_vision",
				"currency": "usd",
				"pre_tax": true
			}
		],
		"employer_contributions": [
			{
				"name": "401k",
				"amount": 9260,
				"currency": "usd",
				"type": "401k"
			},
			{
				"name": "Dental Insurance",
				"amount": 14976,
				"currency": "usd",
				"type": "s125_dental"
			},
			{
				"name": "Vision Insurance",
				"amount": 7395,
				"currency": "usd",
				"type": "s125_vision"
			}
		]
	}
]`

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-4xl font-bold tracking-tight sm:text-6xl">Use pay-statement data to determine employee 401k benefit percentage</h3>
      <br />
        <a target="_blank" rel="noreferrer" href="https://github.com/logangingerich/finch-code-examples/blob/main/src/components/FilterInactive.js" className='text-blue-500'>Click here to see the code.</a>
      <br />
      <textarea
        className="block p-4 text-gray-900 border border-black rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        rows="5"
        cols="40"
        placeholder="Paste your JSON data here..."
        value={jsonData}
        onChange={(e) => setJsonData(e.target.value)}
      ></textarea>
        <br />
      <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => calculateMultiple401kPercentage(jsonData)}>Calculate</button>
      <br />
	  {parseError}
      { data ? 
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold">Employee 401k benefit percentages</h2>
          <br />
          <ul className="divide-y divide-gray-200">
            <li>
            <pre className="language-json"><code className="text-sm">
            {JSON.stringify(data, null, 2)}
            </code></pre>
              </li>
          </ul>
        </div>
        :
        null
        }
    <br />
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Try this example JSON from Finch's /pay-statement endpoint:
          </p>
          <div className="max-w mx-auto mt-6 bg-gray-900 rounded-lg overflow-hidden">
            <div className="p-4">
                <div className="flex items-center justify-between">
                <span className="text-gray-200 text-xl font-bold">JSON Example</span>
                <button onClick={() => {navigator.clipboard.writeText(demoCode)}} id="copyButton" className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 focus:outline-none focus:ring focus:ring-red-400">Copy</button>
                </div>
            </div>

            <div id="copy-target" className="px-3 py-2">
                <pre className="language-json"><code className="text-sm">
                {demoCode}
           </code></pre>
           </div>
        </div>
    </div>
  )
}

export default Percentage401k;
