import { UserInterface } from 'interfaces/user';
import { ResourceInterface } from 'interfaces/resource';
import { GetQueryInterface } from 'interfaces';

export interface DownloadInterface {
  id?: string;
  user_id?: string;
  resource_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  resource?: ResourceInterface;
  _count?: {};
}

export interface DownloadGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  resource_id?: string;
}
