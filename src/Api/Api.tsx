import { GRAPHQL_API_URL } from '../constants';

export async function makeRequest(query: string, variablesStr: string, headersStr: string) {
  try {
    const variables = variablesStr ? JSON.parse(variablesStr) : {};
    const headers = headersStr ? JSON.parse(headersStr) : {};

    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    const allHeaders = {
      ...defaultHeaders,
      ...headers,
    };
    const response = await fetch(GRAPHQL_API_URL, {
      method: 'POST',
      headers: allHeaders,
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
