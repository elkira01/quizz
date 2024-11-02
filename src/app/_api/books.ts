import { fetchCallAction } from '@/lib/api/fetch';

const baseUrl = `/api/book`;
export const bookCollection = fetchCallAction<any>(`${baseUrl}/`, 'get');
