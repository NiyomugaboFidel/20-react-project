

const Button = ({children, onClick}) => {
  return (
    <button className='bg-indigo-600 text-white px-3 mt-2 py-2 rounded-md outline-none border-2'onClick={onClick}>
        {children}
    </button>
  )
}

export default Button