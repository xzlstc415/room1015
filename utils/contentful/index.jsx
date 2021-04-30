import * as contentful from 'contentful';

const config = {
  CTF_SPACE_ID: 'fh8xyr4dylrt',
  CTF_CDA_TOKEN: 'fINnHGb7lljerx7Xz1olVZRbermvwB1HkLSaCCR9ejs',
};

export const createClient = () => {
  const options = {
    space: config.CTF_SPACE_ID,
    accessToken: config.CTF_CDA_TOKEN,
    host: 'cdn.contentful.com',
  };

  return contentful.createClient(options);
};

export const fetchEntriesForContentType = async (contentType, order) => {
  let client = createClient();
  const types = await client.getContentTypes({
    name: contentType,
  });
  const entries = await client.getEntries({
    content_type: types.items[0].sys.id,
    order,
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType}.`);
};
