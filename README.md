## App configuration

Set all properties in src/settings/setting.tsx

-   Set endpoints for application data
-   Enter objects keys you would like to compare (one key for each url)
-   Set Names for each group - this names will be displayed on the page (on buttons etc)
-   Set Range of ids for each endpoint. Random number will be selected from that range and added to the endpoint i.e (https://swapi.dev/api/people/id)
-   Set How many properties would you like to show on a card for all groups

export const config = {

    urls: ["https://swapi.dev/api/people/", "https://swapi.dev/api/species/"],

    keys: ["mass", "average_height"],

    groups: ["people", "species"],

    minMax: [ [1, 45], [1, 34] ],

    propertiesToShow: 7,

};

## Important note

-   If key's value cant be changed in to the number ( i.e 'unknow' or 'n/a' ) it will be set for 0 !!!
