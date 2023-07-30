import axios from 'axios';
import queryString from 'query-string';
import { DownloadInterface, DownloadGetQueryInterface } from 'interfaces/download';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDownloads = async (
  query?: DownloadGetQueryInterface,
): Promise<PaginatedInterface<DownloadInterface>> => {
  const response = await axios.get('/api/downloads', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDownload = async (download: DownloadInterface) => {
  const response = await axios.post('/api/downloads', download);
  return response.data;
};

export const updateDownloadById = async (id: string, download: DownloadInterface) => {
  const response = await axios.put(`/api/downloads/${id}`, download);
  return response.data;
};

export const getDownloadById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/downloads/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDownloadById = async (id: string) => {
  const response = await axios.delete(`/api/downloads/${id}`);
  return response.data;
};
