import clsx from 'clsx'

export const base = {
  container: 'relative w-full',
  input: clsx(
    'peer w-full h-full bg-transparent outline-none transition-all',
    'border-slate-500 focus:border-primary dark:border-primary/50 focus:dark:border-primary',
    'placeholder:opacity-0 focus:placeholder:opacity-100',
    'disabled:text-gray-700 disabled:bg-gray-100 dark:disabled:bg-primary-disabled/10 disabled:cursor-not-allowed'
  ),
  label: clsx(
    'flex w-ful h-full absolute left-0 transition-all select-none pointer-events-none leading-tight peer-focus:leading-tight'
  ),
  icon: clsx('grid place-items-center absolute text-blue-gray-500')
}

export const variantMap = {
  standard: {
    input: 'border-b-2 disabled:border-dotted ',
    inputWithIcon: '!pr-7',
    icon: 'top-2/4 right-0 -translate-y-1/4',
    label:
      '-top-1.5 text-gray-400 text-sm peer-focus:text-sm peer-placeholder-shown:text-base peer-focus:text-primary',
    sizes: {
      md: {
        container: '',
        input: 'pt-4 pb-1.5',
        label: 'peer-placeholder-shown:leading-[4.25]',
        icon: 'w-5 h-5'
      },
      lg: {
        container: 'h-12',
        input: 'text-sm px-px pt-5 pb-2',
        label: 'peer-placeholder-shown:leading-[4.875]',
        icon: 'w-6 h-6'
      }
    },
    error: {
      input:
        '!border-error dark:border-error placeholder-shown:border-error focus:border-error',
      label:
        'text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500 after:border-red-500 peer-focus:after:border-red-500'
    }
  },
  // focus:shadow-input-shadow focus:shadow-primary
  outlined: {
    input: 'border',
    inputWithIcon: '!pr-9',
    icon: 'top-2/4 right-3 -translate-y-2/4',
    label:
      '-top-2.5 w-full text-gray-400 text-sm peer-focus:text-sm peer-placeholder-shown:text-base peer-focus:text-primary before:content[" "] before:block before:box-border before:w-2.5 before:h-[8px] before:mt-[10px] before:mr-1 peer-focus:before:border-primary peer-focus:after:border-primary peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t before:border-l before:transition-all dark:peer-disabled:before:border-primary-disabled peer-disabled:before:border-slate-500 after:content[" "] after:block after:flex-grow after:box-border after:w-2.5 after:h-[8px] after:mt-[10px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t before:border-slate-500 dark:before:border-primary-disabled dark:after:border-primary-disabled after:border-slate-500 after:border-r after:transition-all ',
    sizes: {
      md: {
        container: '',
        input: 'px-3 py-3 rounded-md',
        label: 'peer-placeholder-shown:leading-[3.75]',
        icon: 'w-5 h-5'
      },
      lg: {
        container: 'h-11',
        input: 'text-sm px-3 py-3 rounded-md',
        label: 'peer-placeholder-shown:leading-[4.1]',
        icon: 'w-6 h-6'
      }
    },
    // !border-error dark:!border-error border-red-500 placeholder-shown:!border-t-error placeholder-shown:border-red-500
    error: {
      input:
        '!border-error',
      label:
        '!text-error peer-focus:text-error peer-placeholder-shown:text-error before:!border-error after:!border-error dark:before:border-error dark:after:border-error peer-focus:before:border-error after:border-error peer-focus:after:!border-error'
    }
  },
  filled: {
    input: 'border-b placeholder-shown:border-blue-gray-200',
    inputWithIcon: '!pr-7',
    icon: 'top-2/4 right-0 -translate-y-1/4',
    label:
      '-top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content[" "] after:block after:w-full after:absolute after:-bottom-1.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300',
    sizes: {
      md: {
        container: 'h-11',
        input: 'text-sm pt-4 pb-1.5',
        label: 'peer-placeholder-shown:leading-[4.25]',
        icon: 'w-5 h-5'
      },
      lg: {
        container: 'h-12',
        input: 'text-sm px-px pt-5 pb-2',
        label: 'peer-placeholder-shown:leading-[4.875]',
        icon: 'w-6 h-6'
      }
    },
    error: {
      input:
        'border-red-500 placeholder-shown:border-red-500 focus:border-red-500',
      label:
        'text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500 after:border-red-500 peer-focus:after:border-red-500'
    }
  }
}

// placeholder-shown:border placeholder-shown:border-blue-200 placeholder-shown:border-t-blue-200

// standard bottom border effect
// w-full - label
// after:content[" "] after:block after:w-full after:absolute after:-bottom-1.5 left-0 after:border-b-2 after:border-green-400 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300
