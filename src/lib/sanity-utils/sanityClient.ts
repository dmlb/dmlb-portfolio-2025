import { createClient } from 'next-sanity'

const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.NEXT_PRIVATE_SANITY_API_READ_TOKEN,
    apiVersion: '2024-07-11',
    useCdn: true,
});

export default sanityClient;