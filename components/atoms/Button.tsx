import clsx from 'clsx'

// define the types of props that this component accepts
type Button = {
  children: React.ReactNode
  color: 'primary' | 'secondary' | 'tertiary'
}

// example Button component
const Button = ({ children, color }) => {
  // this is a simple example of how you can use TailwindCSS classes in your components
  const buttonColorStyle = {
    primary: 'bg-red-500 hover:bg-blue-700',
    secondary: 'bg-green-500 hover:bg-blue-700',
    tertiary: 'bg-blue-500 hover:bg-blue-700',
  }[color]

  return (
    <button
      className={clsx(
        'rounded py-2 px-4 font-bold text-white',
        buttonColorStyle
      )}
    >
      {children}
    </button>
  )
}

// export the component so it can be imported elsewhere
export default Button
