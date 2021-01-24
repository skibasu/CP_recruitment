export const config = {
    /* Set links for endpoints yu want to compare */
    urls: ["https://swapi.dev/api/people/", "https://swapi.dev/api/species/"],
    /* Properties / Key for comparing - one for endpoint*/
    keys: ["mass", "average_height"],
    /* Names for display in buttons */
    groups: ["people", "species"],
    /* Ids range / :id */
    minMax: [
        [1, 45],
        [1, 34],
    ],
    /* Properties to show in cards -- i.e 7 will show first seven properties */
    propertiesToShow: 7,
};
