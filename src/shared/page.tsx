import { PropsWithChildren } from 'react';
import { HeavyComponent } from './heavy-component';

export const Page = ({ children }: PropsWithChildren) => (
  <div className="bg-white p-6 shadow-2xl shadow-indigo-900/50 my-16 rounded-2xl max-w-screen-lg">
    {children}
    <HeavyComponent duration={150} />
  </div>
);
