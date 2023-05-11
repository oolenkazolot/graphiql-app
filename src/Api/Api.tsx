import { GRAPHQL_API_URL } from '../constants';

export async function makeRequest(query: string) {
  try {
    const response = await fetch(GRAPHQL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.error('Error:', e);
    }
  }
}
