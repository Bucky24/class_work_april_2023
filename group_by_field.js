/*
Write a function that takes the following array of objects and groups them by country code:

const orders = [
    {countryCode: 'CA', name: 'sarah'},
    {countryCode: 'MX', name: 'carlos'},
    {countryCode: 'FR', name: 'marie'},
    {countryCode: 'JP', name: 'yuki'},
    {countryCode: 'US', name: 'emily'},
    {countryCode: 'US', name: 'scott'},
    {countryCode: 'CA', name: 'david'},
    {countryCode: 'MX', name: 'juan'}
]

Output:

{
  US: [
    {countryCode: 'US', name: 'sarah'},
    {countryCode: 'US', name: 'emily'},
    {countryCode: 'US', name: 'scott'}
  ],
  MX: [
   {countryCode: 'MX', name: 'carlos'}
   //etc...
  ]
  //...
}
*/

function groupByField(array) {
    const result = {};

    for (const item of array) {
        const value = item.countryCode;

        if (!result[value]) {
            result[value] = [];
        }

        result[value].push(item);
    }

    const result = array.reduce((obj, item) => {
        return {
            ...obj,
            [item.countryCode]: [
                ...obj[item.countryCode] || [],
                item,
            ],
        };
    }, {});

    return result;
}

const orders = [
    {countryCode: 'CA', name: 'sarah'},
    {countryCode: 'MX', name: 'carlos'},
    {countryCode: 'FR', name: 'marie'},
    {countryCode: 'JP', name: 'yuki'},
    {countryCode: 'US', name: 'emily'},
    {countryCode: 'US', name: 'scott'},
    {countryCode: 'CA', name: 'david'},
    {countryCode: 'MX', name: 'juan'}
];

console.log(groupByField(orders));