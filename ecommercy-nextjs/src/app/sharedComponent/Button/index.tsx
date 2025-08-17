
interface ButtonProps{
    buttonText: string,
    variant: string
    
}


const Button = ({buttonText, variant}: ButtonProps)=>{

    const buttonVariants=()=>{
        switch(variant){
            case "primary":
                return 'bg-black text-white p-2 w-45 '
            case "secondary":
                return 'bg-pink-700 text-white border border-green-500'
            case "newBtn":
                    return 'bg-pink-700  text-white p-2 w-45 '
            default:
                return'bg-pink-700  text-white p-2 w-85 rounded-sm'    
        }
    }
    const variantStyles = buttonVariants();
    return(
        <button className={`${variantStyles} px-[12px] cursor-pointer rounded-md border-none`}
       >
            {buttonText}
        </button>
    )
}

export default Button;