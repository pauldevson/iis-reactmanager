export const websites = [
  {
    id: 'kg8knDzagn',
    name: 'Default Web Site',
    status: 'Stopped',
    poolName: 'DefaultAppPool',
    binding: 'https://paul.dotnet.bosch.com',
    physicalPath: 'C:\\inetpub\\wwwroot\\DefaultWebSite'
  },
  {
    id: '4IJzmNNgtg',
    name: 'VisitorsQA',
    status: 'Started',
    poolName: 'VisitorsPool',
    binding: 'https://visitors.bosch.com',
    physicalPath: 'C:\\inetpub\\wwwroot\\VisitorsQA'
  },
  {
    id: 'ghykAzrQbE',
    name: 'Jengalcoholic',
    status: 'Stopped',
    poolName: 'JengaPool',
    binding: 'https://jenga.bosch.com',
    physicalPath: 'C:\\inetpub\\wwwroot\\Jengalcoholic'
  }
];

export const servers = [
  {
    id: 0,
    url: 'https://mtpwbpz1.us.bosch.com:588856/',
    name: 'MTPWBPZ1',
    accessToken: '',
    remember: false,
    connected: false
  },
  {
    id: 1,
    url: 'https://mtpwbpz2.us.bosch.com:588856/',
    name: 'MTPWBPZ2',
    accessToken: '',
    remember: false,
    connected: false
  },
  {
    id: 2,
    url: 'https://mtpwbpz3.us.bosch.com:588856/',
    name: 'MTPWBPZ3',
    accessToken: '',
    remember: false,
    connected: false
  },
  {
    id: 3,
    url: 'https://mtpwbpz4.us.bosch.com:588856/',
    name: 'MTPWBPZ4',
    accessToken: '',
    remember: false,
    connected: false
  },
  {
    id: 4,
    url: 'https://mtpwbpz7.us.bosch.com:588856/',
    name: 'MTPWBPZ7',
    accessToken: '',
    remember: false,
    connected: false
  }
];

export const connection = {
  connected: false,
  server: null
};
