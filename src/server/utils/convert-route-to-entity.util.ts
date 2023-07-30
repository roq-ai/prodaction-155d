const mapping: Record<string, string> = {
  downloads: 'download',
  platforms: 'platform',
  resources: 'resource',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
