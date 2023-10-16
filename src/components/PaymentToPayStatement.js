import React, { useState } from 'react';

import {
    Clipboard,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Clipboard, Ripple });

function PaymentToPayStatement() {
  const [jsonData, setJsonData] = useState('');
  const [convertedPayment, setConvertedPayment] = useState('');

  const paymentConversion = (payments) => {
    try {

      let output = [];

     // Iterate over each payment
    for (let payment of payments) {
        // Add the payment's ID to the output array
        output.push({
            'payment_id': payment.id
        });
    }

      setConvertedPayment(output);
      return output;
    } catch (error) {
      console.error('An error occurred:', error);
      setConvertedPayment(null);
    }
  };


let demoCode = 
`[
    {
      "id": "5f36c737-c024-4ad6-876d-131c312f1ebc",
      "pay_period": {
        "start_date": "2023-05-01",
        "end_date": "2023-05-15"
      },
      "pay_date": "2023-05-16",
      "debit_date": "2023-05-16",
      "company_debit": {
        "amount": 11564619,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10351888,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4117323,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5626733,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 791924,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "8811c170-9c9f-4144-adc9-5d83c59df2ee",
      "pay_period": {
        "start_date": "2023-05-16",
        "end_date": "2023-05-31"
      },
      "pay_date": "2023-06-01",
      "debit_date": "2023-06-01",
      "company_debit": {
        "amount": 11572973,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10363647,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4148138,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5613882,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 792820,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "c1eac81f-2f60-4bb8-b7df-d4479ab5af3a",
      "pay_period": {
        "start_date": "2023-04-01",
        "end_date": "2023-04-15"
      },
      "pay_date": "2023-04-16",
      "debit_date": "2023-04-16",
      "company_debit": {
        "amount": 11620348,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10398869,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4118365,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5665222,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 795515,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "c4d9ee43-4a3e-4dbb-a3aa-f6ee692cf2b0",
      "pay_period": {
        "start_date": "2023-04-16",
        "end_date": "2023-04-30"
      },
      "pay_date": "2023-05-01",
      "debit_date": "2023-05-01",
      "company_debit": {
        "amount": 11753261,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10520346,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4168167,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5733793,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 804802,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "f4d1f8ee-e64d-4871-b1e1-7db68cc3ac1a",
      "pay_period": {
        "start_date": "2023-03-01",
        "end_date": "2023-03-15"
      },
      "pay_date": "2023-03-16",
      "debit_date": "2023-03-16",
      "company_debit": {
        "amount": 11344047,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10152697,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4023547,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5530183,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 776682,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "0bb2f795-5cae-4e2c-b309-37c367a8abb2",
      "pay_period": {
        "start_date": "2023-03-16",
        "end_date": "2023-03-31"
      },
      "pay_date": "2023-04-01",
      "debit_date": "2023-04-01",
      "company_debit": {
        "amount": 11507340,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10297078,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4071833,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5614915,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 787729,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "304f9fa5-4f12-4f55-8bc9-17ec8dd65f36",
      "pay_period": {
        "start_date": "2023-02-01",
        "end_date": "2023-02-15"
      },
      "pay_date": "2023-02-16",
      "debit_date": "2023-02-16",
      "company_debit": {
        "amount": 11526090,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10321912,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4128348,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5594765,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 789626,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "7353812b-b13f-416f-a8dc-11e129f07940",
      "pay_period": {
        "start_date": "2023-02-16",
        "end_date": "2023-02-28"
      },
      "pay_date": "2023-03-01",
      "debit_date": "2023-03-01",
      "company_debit": {
        "amount": 11500450,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10290160,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4073170,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5605856,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 787198,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "7b758d37-bee4-4be5-a639-1a779f9a4a2e",
      "pay_period": {
        "start_date": "2023-01-01",
        "end_date": "2023-01-15"
      },
      "pay_date": "2023-01-16",
      "debit_date": "2023-01-16",
      "company_debit": {
        "amount": 11676692,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10454518,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4170559,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5673820,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 799772,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "9f82ac12-52f6-41db-bdb9-db18e212be5a",
      "pay_period": {
        "start_date": "2023-01-16",
        "end_date": "2023-01-31"
      },
      "pay_date": "2023-02-01",
      "debit_date": "2023-02-01",
      "company_debit": {
        "amount": 11662165,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10442126,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4166103,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5667600,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 798824,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "c64990be-83e6-4e03-b93b-f2239128febe",
      "pay_period": {
        "start_date": "2022-12-01",
        "end_date": "2022-12-15"
      },
      "pay_date": "2022-12-16",
      "debit_date": "2022-12-16",
      "company_debit": {
        "amount": 11575697,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10361181,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4114554,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5637239,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 792634,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "ae83801e-b503-4c1c-b101-05e5ec6bde5a",
      "pay_period": {
        "start_date": "2022-12-16",
        "end_date": "2022-12-31"
      },
      "pay_date": "2023-01-01",
      "debit_date": "2023-01-01",
      "company_debit": {
        "amount": 11437414,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10234508,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4042237,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5585656,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 782940,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "7b7ade4a-7976-4be5-9de7-08b4c057afda",
      "pay_period": {
        "start_date": "2022-11-01",
        "end_date": "2022-11-15"
      },
      "pay_date": "2022-11-16",
      "debit_date": "2022-11-16",
      "company_debit": {
        "amount": 11894899,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10651828,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4251930,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5781379,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 814865,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "9bf5903e-a264-45cc-96c5-68db92aad382",
      "pay_period": {
        "start_date": "2022-11-16",
        "end_date": "2022-11-30"
      },
      "pay_date": "2022-12-01",
      "debit_date": "2022-12-01",
      "company_debit": {
        "amount": 11362449,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10162656,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4004881,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5547708,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 777441,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "0b991d3c-3c92-4ef1-89f1-3fd78306de58",
      "pay_period": {
        "start_date": "2022-10-01",
        "end_date": "2022-10-15"
      },
      "pay_date": "2022-10-16",
      "debit_date": "2022-10-16",
      "company_debit": {
        "amount": 11384801,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10190077,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4056541,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5533826,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 779540,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "8caba56d-3ff1-49d4-ae05-e2c0e5074f60",
      "pay_period": {
        "start_date": "2022-10-16",
        "end_date": "2022-10-31"
      },
      "pay_date": "2022-11-01",
      "debit_date": "2022-11-01",
      "company_debit": {
        "amount": 11430065,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10229948,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4059621,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5567234,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 782591,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "b06526b9-b837-430e-992b-698dc167a9f7",
      "pay_period": {
        "start_date": "2022-09-01",
        "end_date": "2022-09-15"
      },
      "pay_date": "2022-09-16",
      "debit_date": "2022-09-16",
      "company_debit": {
        "amount": 11609898,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10397995,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4157272,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5639175,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 795448,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "557fe133-9e87-4eb3-b484-58322867c726",
      "pay_period": {
        "start_date": "2022-09-16",
        "end_date": "2022-09-30"
      },
      "pay_date": "2022-10-01",
      "debit_date": "2022-10-01",
      "company_debit": {
        "amount": 11628162,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10405467,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4122214,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5666939,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 796019,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "650bfab4-b831-49ea-a230-e9a9d7ac55a3",
      "pay_period": {
        "start_date": "2022-08-01",
        "end_date": "2022-08-15"
      },
      "pay_date": "2022-08-16",
      "debit_date": "2022-08-16",
      "company_debit": {
        "amount": 11872137,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10634040,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4258168,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5762566,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 813502,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "7b9ed496-4f75-4b93-864c-0c47705ae2bd",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "f4e1ae9f-572c-48b2-915c-83efa8b2a35c",
      "pay_period": {
        "start_date": "2022-08-16",
        "end_date": "2022-08-31"
      },
      "pay_date": "2022-09-01",
      "debit_date": "2022-09-01",
      "company_debit": {
        "amount": 11787164,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10558937,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4243616,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5707979,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 807759,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "7b9ed496-4f75-4b93-864c-0c47705ae2bd",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "e99a6774-b444-40d9-9a62-d3c56d8a402d",
      "pay_period": {
        "start_date": "2022-07-01",
        "end_date": "2022-07-15"
      },
      "pay_date": "2022-07-16",
      "debit_date": "2022-07-16",
      "company_debit": {
        "amount": 11940789,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10705174,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4352239,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5751079,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 818946,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "7b9ed496-4f75-4b93-864c-0c47705ae2bd",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    },
    {
      "id": "90981eae-c4e0-41c3-8687-d635643ee0e8",
      "pay_period": {
        "start_date": "2022-07-16",
        "end_date": "2022-07-31"
      },
      "pay_date": "2022-08-01",
      "debit_date": "2022-08-01",
      "company_debit": {
        "amount": 11643088,
        "currency": "usd"
      },
      "gross_pay": {
        "amount": 10429585,
        "currency": "usd"
      },
      "net_pay": {
        "amount": 4192207,
        "currency": "usd"
      },
      "employee_taxes": {
        "amount": 5637007,
        "currency": "usd"
      },
      "employer_taxes": {
        "amount": 797862,
        "currency": "usd"
      },
      "individual_ids": [
        "411b17df-d13e-46c4-af02-822b971661d2",
        "12bf2b85-1a7e-4509-800d-0919971dcf3d",
        "6c4f66ad-b79a-4018-8534-41f6c9feefb5",
        "1a15a2e7-0565-4862-bd3d-394cc719a7dd",
        "bdfd5ea0-66d6-497c-905e-2c7c31f39905",
        "b0578cd5-9eb8-4452-98a6-d79b07250c08",
        "7b9ed496-4f75-4b93-864c-0c47705ae2bd",
        "072580ed-f473-4bb9-aa93-eb820b0b0621",
        "87ff4e00-92da-4a9c-8496-03f3e4f7bbce",
        "be74c934-b0d7-489c-be2b-767a49b1ab5c",
        "1d9d7171-cf2b-4f85-b4cb-af34cc340609",
        "bf2713e3-70c2-4f0f-a495-5a4db5b8a4d5",
        "48669dc4-8654-4de8-8fb9-76725bd39163",
        "39af7854-da32-4e15-9543-676f1a4b2790",
        "bfc868c9-08b9-413e-b9aa-3b53acac4191",
        "7df3e106-51d4-4fdc-bfcc-609045798c95",
        "68d36c46-97d4-4f70-acf9-c26a257d23c1",
        "8f0c6b25-20eb-44ee-bbbe-b21c2d8fc566",
        "1b956cdf-5bcc-4423-b89b-01d27283abc0",
        "5b1d719f-b284-4c60-88af-49188a315c7f",
        "54932fbb-cc84-48db-a555-bf4b94cacabd",
        "cc9922be-639e-4d4c-a43b-d45db0125677"
      ]
    }
  ]`


  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-4xl font-bold tracking-tight sm:text-6xl">Convert /payment array to array of payment IDs needed by /pay-statement endpoint</h3>
      <br />
        <a target="_blank" rel="noreferrer" href="https://github.com/logangingerich/finch-code-examples/blob/main/src/components/PaymentToPayStatement.js" className='text-blue-500'>Click here to see the code.</a>
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
      <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => paymentConversion(JSON.parse(jsonData))}>Calculate</button>
      <br />
      { convertedPayment ? 
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold">Payment IDs to use with Finch's /pay-statement endpoint</h2>
          <br />
          <ul className="divide-y divide-gray-200">
            <li>
            <pre className="language-json"><code className="text-sm">
            {JSON.stringify(convertedPayment, null, 2)}
            </code></pre>
              </li>
          </ul>
        </div>
        :
        null
        }
    <br />
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Try this example JSON from Finch's /payment endpoint:
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

export default PaymentToPayStatement;
