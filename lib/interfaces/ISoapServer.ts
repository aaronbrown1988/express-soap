import {Server} from 'soap';

export interface ISoapServer extends Server {

  path: string;
  services: any;
  wsdl: any;

  _requestListener: Function;
  _initializeOptions: Function;
}
