import { ComponentProps, PropsWithChildren } from 'react';

export const Table = (props: PropsWithChildren<ComponentProps<'table'>>) => {
  return (
    <table
      className="table w-full table-fixed text-base text-slate-900"
      {...props}
    />
  );
};
