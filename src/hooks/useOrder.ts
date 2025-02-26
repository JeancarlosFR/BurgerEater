import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    function addItem (item: MenuItem) {
        const itemExists = order.find(orderItem => orderItem.id === item.id)
        if(itemExists) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ?
                {...orderItem, quantity: orderItem.quantity + 1}: orderItem)
            setOrder(updatedOrder)
            
        }else {
            const newItem = {...item, quantity: 1}
            setOrder([...order,newItem])
        }
    }

    function removeItem (item : MenuItem['id']) {
            setOrder(order.filter(orderItem => orderItem.id !== item))
        }
    
    function placeOrder (){
        setOrder([])
        setTip(0)
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    }
    

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  }
}
