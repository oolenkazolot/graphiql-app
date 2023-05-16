import { GRAPHQL_API_URL } from '../constants';

export async function makeRequest(query: string, variablesStr: string) {
  try {
    const variables = variablesStr ? JSON.parse(variablesStr) : {};
    const response = await fetch(GRAPHQL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });
    const data = await response.json();

    return data;
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    }
  }
}
