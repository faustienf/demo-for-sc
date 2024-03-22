import { ComponentProps, PropsWithChildren, memo } from 'react';

export const Button = memo(
  (props: PropsWithChildren<ComponentProps<'button'>>) => {
    return (
      <button
        type="button"
        className="inline-flex items-center h-7 px-4 bg-slate-100 text-slate-900 font-normal disabled:opacity-50 text-sm rounded-full leading-none cursor-pointer focus:outline outline-indigo-500 focus:outline-offset-2"
        {...props}
      />
    );
  },
);
