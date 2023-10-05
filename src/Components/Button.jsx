const Button = ({label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,}) => {
  return (
    <buttin 
    className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
    // className="flex justify-center items-center gap-2 px-8 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red"
    >

        {label}
        {iconUrl && (
        <img
          src={iconUrl}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </buttin>
  )
}

export default Button
