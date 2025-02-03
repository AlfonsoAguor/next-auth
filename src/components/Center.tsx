import { ReactNode } from 'react'

// Para el funcionamiento de los props

interface CenterProps {
    children: ReactNode;
}

export const Center: React.FC<CenterProps> = ({children}) => {
    return (
        <div className='m-auto max-w-3xl mx-4 md:mx-auto'>
            {children}
        </div>
    )
}