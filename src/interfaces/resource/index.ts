import { DownloadInterface } from 'interfaces/download';
import { PlatformInterface } from 'interfaces/platform';
import { GetQueryInterface } from 'interfaces';

export interface ResourceInterface {
  id?: string;
  name: string;
  type: string;
  platform_id?: string;
  created_at?: any;
  updated_at?: any;
  download?: DownloadInterface[];
  platform?: PlatformInterface;
  _count?: {
    download?: number;
  };
}

export interface ResourceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
  platform_id?: string;
}
