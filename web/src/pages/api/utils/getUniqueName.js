import { uniqueNamesGenerator, starWars } from 'unique-names-generator';

const config = { dictionaries: [starWars] };

const getUniqueName = () => uniqueNamesGenerator(config);

export default getUniqueName;
