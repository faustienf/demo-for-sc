import { PropsWithChildren } from 'react';

export const TableCaption = ({ children }: PropsWithChildren) => {
  return (
    <caption className="mb-3">
      <div className="flex items-center justify-between text-pink-700 font-bold">
        {children}
      </div>
    </caption>
  );
};
