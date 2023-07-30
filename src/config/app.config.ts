interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Super Admin'],
  customerRoles: [],
  tenantRoles: ['Super Admin', 'User', 'Visitor', 'Activated User', 'Not Activated User'],
  tenantName: 'Platform',
  applicationName: 'ProdAction',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
