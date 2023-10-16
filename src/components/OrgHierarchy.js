import React, { useState } from 'react';

import {
    Clipboard,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Clipboard, Ripple });

function OrgHierarchy() {
  const [jsonData, setJsonData] = useState('');
  const [hierarchy, setHierarchy] = useState('');

  const createHierarchy = (employee_list, managerId = null) => {
    try {
      // Parse the user-entered JSON data
     // employee_list = JSON.parse(jsonData);
      console.log(typeof employee_list)
      let structure = [];

      for (let employee of employee_list) {
        console.log(employee.id)
        if ((managerId === null && employee.manager.id === null) || (employee.manager.id === managerId)) {
          let children = createHierarchy(employee_list, employee.id);
    
          if (children.length > 0) {
            employee.subordinates = children;
          }
    
          structure.push(employee);
        }
      }

      // Update the state with the calculated gross wages
      setHierarchy(structure);
      return structure;
    } catch (error) {
      console.error('An error occurred:', error);
      setHierarchy(null);
    }
  };


//console.log(JSON.stringify(createHierarchy(data), null, 2));

let demoCode = 
`[
    {
      "id": "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
      "first_name": "Arthur",
      "middle_name": "Elijah",
      "last_name": "Bradtke",
      "manager": {
        "id": null
      },
      "department": {
        "name": "Creative"
      },
      "is_active": true
    },
    {
      "id": "12bf2b85-1a7e-4509-800d-0919971dcf3d",
      "first_name": "Vicky",
      "middle_name": "Avery",
      "last_name": "Braun",
      "manager": {
        "id": null
      },
      "department": {
        "name": "Marketing"
      },
      "is_active": true
    },
    {
      "id": "2b4e7615-e100-4c5e-898b-cb37190cabcc",
      "first_name": "Dale",
      "middle_name": "Liam",
      "last_name": "Cole",
      "manager": {
        "id": "072580ed-f473-4bb9-aa93-eb820b0b0621"
      },
      "department": {
        "name": "Integration"
      },
      "is_active": false
    },
    {
      "id": "5b1d719f-b284-4c60-88af-49188a315c7f",
      "first_name": "Hilda",
      "middle_name": "Blue",
      "last_name": "Dach",
      "manager": {
        "id": "12bf2b85-1a7e-4509-800d-0919971dcf3d"
      },
      "department": {
        "name": "Marketing"
      },
      "is_active": true
    },
    {
      "id": "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
      "first_name": "Darlene",
      "middle_name": "Venus",
      "last_name": "Durgan",
      "manager": {
        "id": "be74c934-b0d7-489c-be2b-767a49b1ab5c"
      },
      "department": {
        "name": "Marketing"
      },
      "is_active": false
    },
    {
      "id": "aa81aa2b-cc57-4016-ad7c-67148f9f2892",
      "first_name": "Rhonda",
      "middle_name": "Valerie",
      "last_name": "Feil",
      "manager": {
        "id": "b0578cd5-9eb8-4452-98a6-d79b07250c08"
      },
      "department": {
        "name": "Infrastructure"
      },
      "is_active": false
    },
    {
      "id": "7df3e106-51d4-4fdc-bfcc-609045798c95",
      "first_name": "Calvin",
      "middle_name": "Ethan",
      "last_name": "Fritsch",
      "manager": {
        "id": "072580ed-f473-4bb9-aa93-eb820b0b0621"
      },
      "department": {
        "name": "Integration"
      },
      "is_active": true
    },
    {
      "id": "1b956cdf-5bcc-4423-b89b-01d27283abc0",
      "first_name": "Ruben",
      "middle_name": "Alexander",
      "last_name": "Fritsch",
      "manager": {
        "id": "31077856-f3b1-4b02-8101-876c0d3a6b7d"
      },
      "department": {
        "name": "Creative"
      },
      "is_active": true
    },
    {
      "id": "54932fbb-cc84-48db-a555-bf4b94cacabd",
      "first_name": "Darrel",
      "middle_name": "Henry",
      "last_name": "Gerlach",
      "manager": {
        "id": "1d9d7171-cf2b-4f85-b4cb-af34cc340609"
      },
      "department": {
        "name": "Marketing"
      },
      "is_active": true
    },
    {
      "id": "891a5957-79cc-41e0-a28a-8c0eb67d3ce7",
      "first_name": "Colleen",
      "middle_name": "Sofia",
      "last_name": "Gislason",
      "manager": {
        "id": "1d9d7171-cf2b-4f85-b4cb-af34cc340609"
      },
      "department": {
        "name": "Marketing"
      },
      "is_active": false
    },
    {
      "id": "b0578cd5-9eb8-4452-98a6-d79b07250c08",
      "first_name": "Russell",
      "middle_name": "Elijah",
      "last_name": "Goodwin",
      "manager": {
        "id": "411b17df-d13e-46c4-af02-822b971661d2"
      },
      "department": {
        "name": "Infrastructure"
      },
      "is_active": true
    },
    {
      "id": "16f3ed36-ad78-4f63-becf-bf4aad858250",
      "first_name": "Andre",
      "middle_name": "Oliver",
      "last_name": "Goodwin",
      "manager": {
        "id": "87ff4e00-92da-4a9c-8496-03f3e4f7bbce"
      },
      "department": {
        "name": "Creative"
      },
      "is_active": false
    },
    {
      "id": "68d36c46-97d4-4f70-acf9-c26a257d23c1",
      "first_name": "Orville",
      "middle_name": "Nixon",
      "last_name": "Gulgowski",
      "manager": {
        "id": "072580ed-f473-4bb9-aa93-eb820b0b0621"
      },
      "department": {
        "name": "Integration"
      },
      "is_active": true
    },
    {
      "id": "39af7854-da32-4e15-9543-676f1a4b2790",
      "first_name": "Roy",
      "middle_name": "Otto",
      "last_name": "Hagenes",
      "manager": {
        "id": "12bf2b85-1a7e-4509-800d-0919971dcf3d"
      },
      "department": {
        "name": "Marketing"
      },
      "is_active": true
    },
    {
      "id": "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
      "first_name": "Michele",
      "middle_name": "Zaylee",
      "last_name": "Heaney",
      "manager": {
        "id": "12bf2b85-1a7e-4509-800d-0919971dcf3d"
      },
      "department": {
        "name": "Marketing"
      },
      "is_active": true
    },
    {
      "id": "411b17df-d13e-46c4-af02-822b971661d2",
      "first_name": "Isaac",
      "middle_name": "Lucky",
      "last_name": "Hessel",
      "manager": {
        "id": null
      },
      "department": {
        "name": "Infrastructure"
      },
      "is_active": true
    },
    {
      "id": "7a21bad0-b12c-4384-9a20-637e45335767",
      "first_name": "Samantha",
      "middle_name": "Pearl",
      "last_name": "Klein",
      "manager": {
        "id": "54932fbb-cc84-48db-a555-bf4b94cacabd"
      },
      "department": {
        "name": "Marketing"
      },
      "is_active": false
    },
    {
      "id": "cc9922be-639e-4d4c-a43b-d45db0125677",
      "first_name": "Josefina",
      "middle_name": "Caylen",
      "last_name": "Krajcik",
      "manager": {
        "id": "891a5957-79cc-41e0-a28a-8c0eb67d3ce7"
      },
      "department": {
        "name": "Marketing"
      },
      "is_active": true
    },
    {
      "id": "31077856-f3b1-4b02-8101-876c0d3a6b7d",
      "first_name": "Loren",
      "middle_name": "Monroe",
      "last_name": "Lindgren",
      "manager": {
        "id": "1a15a2e7-0565-4862-bd3d-394cc719a7dd"
      },
      "department": {
        "name": "Creative"
      },
      "is_active": false
    },
    {
      "id": "072580ed-f473-4bb9-aa93-eb820b0b0621",
      "first_name": "Isabel",
      "middle_name": "Isla",
      "last_name": "Padberg",
      "manager": {
        "id": "6c4f66ad-b79a-4018-8534-41f6c9feefb5"
      },
      "department": {
        "name": "Integration"
      },
      "is_active": true
    },
    {
      "id": "48669dc4-8654-4de8-8fb9-76725bd39163",
      "first_name": "Pete",
      "middle_name": "Parker",
      "last_name": "Parker",
      "manager": {
        "id": "072580ed-f473-4bb9-aa93-eb820b0b0621"
      },
      "department": {
        "name": "Integration"
      },
      "is_active": true
    },
    {
      "id": "9a572f9d-3164-43a9-a0cd-a00b62d64745",
      "first_name": "Ted",
      "middle_name": "Wison",
      "last_name": "Quitzon",
      "manager": {
        "id": "7b9ed496-4f75-4b93-864c-0c47705ae2bd"
      },
      "department": {
        "name": "Marketing"
      },
      "is_active": false
    },
    {
      "id": "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
      "first_name": "Freda",
      "middle_name": "Ashton",
      "last_name": "Rau",
      "manager": {
        "id": "411b17df-d13e-46c4-af02-822b971661d2"
      },
      "department": {
        "name": "Infrastructure"
      },
      "is_active": true
    },
    {
      "id": "bfc868c9-08b9-413e-b9aa-3b53acac4191",
      "first_name": "Sherry",
      "middle_name": "Blake",
      "last_name": "Reichert",
      "manager": {
        "id": "072580ed-f473-4bb9-aa93-eb820b0b0621"
      },
      "department": {
        "name": "Integration"
      },
      "is_active": true
    },
    {
      "id": "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
      "first_name": "Joanna",
      "middle_name": "Sage",
      "last_name": "Roob",
      "manager": {
        "id": "31077856-f3b1-4b02-8101-876c0d3a6b7d"
      },
      "department": {
        "name": "Creative"
      },
      "is_active": true
    },
    {
      "id": "7b9ed496-4f75-4b93-864c-0c47705ae2bd",
      "first_name": "Jimmy",
      "middle_name": "Michael",
      "last_name": "Schamberger",
      "manager": {
        "id": "12bf2b85-1a7e-4509-800d-0919971dcf3d"
      },
      "department": {
        "name": "Marketing"
      },
      "is_active": false
    },
    {
      "id": "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
      "first_name": "Elijah",
      "middle_name": "Beckham",
      "last_name": "Terry",
      "manager": {
        "id": null
      },
      "department": {
        "name": "Integration"
      },
      "is_active": true
    },
    {
      "id": "be74c934-b0d7-489c-be2b-767a49b1ab5c",
      "first_name": "Alejandro",
      "middle_name": "Levi",
      "last_name": "Torp",
      "manager": {
        "id": "7b9ed496-4f75-4b93-864c-0c47705ae2bd"
      },
      "department": {
        "name": "Marketing"
      },
      "is_active": true
    },
    {
      "id": "612f53fe-c2c7-4934-a170-5b7ded0c170b",
      "first_name": "Patrick",
      "middle_name": "Clyde",
      "last_name": "Ward",
      "manager": {
        "id": "b0578cd5-9eb8-4452-98a6-d79b07250c08"
      },
      "department": {
        "name": "Infrastructure"
      },
      "is_active": false
    },
    {
      "id": "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
      "first_name": "Calvin",
      "middle_name": "Isaac",
      "last_name": "Wisoky",
      "manager": {
        "id": "6c4f66ad-b79a-4018-8534-41f6c9feefb5"
      },
      "department": {
        "name": "Integration"
      },
      "is_active": true
    }
  ]`


  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-4xl font-bold tracking-tight sm:text-6xl">Build Organizational Hierarchy</h3>
      <br />
        <a target="_blank" rel="noreferrer" href="https://github.com/logangingerich/finch-code-examples/blob/main/src/components/OrgHierarchy.js" className='text-blue-500'>Click here to see the code.</a>
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
      <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => createHierarchy(JSON.parse(jsonData))}>Calculate</button>
      <br />
      { hierarchy ? 
        <div>
          <h2 className="text-4xl font-extrabold">Organizational Hierarchy</h2>
          <br />
          <ul className="divide-y divide-gray-200">
            <li>
            <pre className="language-json"><code className="text-sm">
            {JSON.stringify(hierarchy, null, 2)}
            </code></pre>
              </li>
          </ul>
        </div>
        :
        null
        }
    <br />
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Try this example JSON from Finch's /directory endpoint:
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

export default OrgHierarchy;
