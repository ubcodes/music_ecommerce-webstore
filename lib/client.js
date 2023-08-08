//this is for our sanity client
// import sanityClient from '@sanity/client'
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    //projectId so that sanity knows which project to connect us with
    projectId: 'kty8czsx',
    dataset: 'production', // to know if we're in development or production
    apiVersion: '2023-08-08',
    useCdn: true,
    token: 'proces.env.SANITY_STUDIO_TOKEN',
    ignoreBrowserTokenWarning: true

})

//we have access to this values, we'd just need to check  our sanity manager

//to use the sanity images

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)