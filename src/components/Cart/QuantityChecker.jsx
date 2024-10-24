import * as React from 'react';
import PropTypes from 'prop-types';
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import clsx from 'clsx';

export default function NumberInputIntroduction() {
  const [value, setValue] = React.useState(1);

  return (
    <NumberInput
      aria-label="Demo number input"
      placeholder="Num" // Shorter placeholder text
      value={value}
      onChange={(event, val) => setValue(val)}
    />
  );
}

const resolveSlotProps = (fn, args) =>
  typeof fn === 'function' ? fn(args) : fn;

const NumberInput = React.forwardRef(function NumberInput(props, ref) {
  return (
    <BaseNumberInput
      className="w-60" // Keep the width small
      {...props}
      ref={ref}
      slotProps={{
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              'grid grid-cols-[1fr_8px] grid-rows-2 overflow-hidden font-sans rounded-lg  dark:text-slate-300 border border-solid bg-transparent dark:bg-transparent hover:border-violet-400 dark:hover:border-violet-400 focus-visible:outline-0 p-1',
              ownerState.focused
                ? 'border-violet-400 dark:border-violet-400 shadow-lg shadow-outline-purple dark:shadow-outline-purple'
                : 'border-slate-300 dark:border-slate-600 shadow-md shadow-slate-100 dark:shadow-slate-400',
              resolvedSlotProps?.className,
            ),
          };
        },
        input: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.input,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              'col-start-1 col-end-2 row-start-1 row-end-3 text-sm font-sans leading-normal text-slate-900 bg-transparent dark:bg-transparent border-0 rounded-[inherit] dark:text-slate-900 px-1 py-1 outline-0 focus-visible:outline-0 focus-visible:outline-none', // Reduced padding
              resolvedSlotProps?.className,
            ),
          };
        },
        incrementButton: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.incrementButton,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            children: '▴',
            className: clsx(
              'font-[system-ui] flex flex-row flex-nowrap justify-center items-center p-0 w-5 h-5 border border-solid outline-none text-xs box-border leading-[1.2] rounded-t-md border-slate-200 bg-transparent dark:bg-transparent text-slate-900 dark:text-slate-300 transition-all duration-[120ms] hover:cursor-pointer hover:bg-purple-500 hover:text-slate-50 dark:hover:bg-slate-800 dark:border-slate-600 col-start-3 col-end-3 row-start-1 row-end-2',
              resolvedSlotProps?.className,
            ),
          };
        },
        decrementButton: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.decrementButton,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            children: '▾',
            className: clsx(
              'font-[system-ui] flex flex-row flex-nowrap justify-center items-center p-0 w-5 h-5 border border-solid outline-none text-xs box-border leading-[1.2] rounded-b-md border-slate-200 bg-transparent dark:bg-transparent text-slate-900 dark:text-slate-300 transition-all duration-[120ms] hover:cursor-pointer hover:bg-purple-500 hover:text-slate-50 dark:hover:bg-slate-800 dark:border-slate-600 col-start-3 col-end-3 row-start-2 row-end-3',
              resolvedSlotProps?.className,
            ),
          };
        },
      }}
    />
  );
});

NumberInput.propTypes = {
  /**
   * The props used for each slot inside the NumberInput.
   * @default {}
   */
  slotProps: PropTypes.shape({
    decrementButton: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    incrementButton: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    input: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
};
