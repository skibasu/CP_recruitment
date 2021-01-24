export const config = {
    /* Set endpoints */
    urls: ["https://swapi.dev/api/people/", "https://swapi.dev/api/species/"],
    /* Properties / Keys for comparing - one for each endpoint */
    keys: ["mass", "average_height"],
    /* Names / Strings  */
    groups: ["people", "species"],
    /* Ids range / :id */
    minMax: [
        [1, 45],
        [1, 34],
    ],
    /* Number of properties to show in cards */
    propertiesToShow: 7,
};
