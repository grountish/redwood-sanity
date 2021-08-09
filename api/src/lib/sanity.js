import sanityClient from '@sanity/client'

export const sanity = sanityClient({
  projectId: 'llwrlanj',
  dataset: 'production',
  useCdn: true,
})
