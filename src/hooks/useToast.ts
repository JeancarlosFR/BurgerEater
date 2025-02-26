import { toast } from 'react-toastify';

export const useToast = () => {
    const mostrarToast = (mensaje : string) => (
        toast.success(mensaje,{
            position: "top-right",
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
        })
    )
    return {
        mostrarToast
    }
}