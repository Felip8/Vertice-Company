// Type declarations for local JSX modules so TypeScript can import .jsx components
// This quiets the "Could not find a declaration file for module './componentes/...'." warning

declare module '*.jsx' {
  import * as React from 'react';
  const Component: React.ComponentType<any>;
  export default Component;
}

declare module './componentes/MenuLateralAdm' {
  import * as React from 'react';
  const MenuLateralAdm: React.ComponentType<any>;
  export default MenuLateralAdm;
}
