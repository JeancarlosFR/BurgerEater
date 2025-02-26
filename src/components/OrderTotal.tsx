import { useMemo } from "react"
import { useToast } from "../hooks/useToast"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"



type OrderTotalProps = {
    order : OrderItem[]
    tip : number
    placeOrder : () => void

}

export default function OrderTotal({order , tip, placeOrder} : OrderTotalProps) {

    const {mostrarToast} = useToast()
    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subTotalAmount * tip, [order, tip])
    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [order,tip])
    
  return (

    <div className="space-y-3">
        <h2 className="text-2xl font-bold">Totales y Propina</h2>

        <p >Subtotal a Pagar: {' '}
            <span className="font-bold">{formatCurrency(subTotalAmount)}</span>

        </p>
        <p >Propina: {' '}
            <span className="font-bold">{formatCurrency(tipAmount)}</span>
            
        </p>

        <p >Total a Pagar: {' '}
            <span className="font-bold">{formatCurrency(totalAmount)}</span>
        
        </p>

        <button 
            className="bg-amber-300 font-bold py-3 w-full border-black border-2 text-2xl rounded-md hover:bg-yellow-200"
            onClick={() => {placeOrder(), mostrarToast('Orden Realizada con Exito!')}}
            >
            Completar Orden
        </button>

    </div>
  )
}
