import { Trash2 } from 'lucide-react';
import type { OrderItem} from '../types';

type orderContentsProps = {
    order: OrderItem[],
    removeItem: (item: OrderItem['id']) => void
}


export default function OrderContents({order, removeItem}: orderContentsProps) {
  return (
    <div className='bg-amber-500 rounded-3xl p-2 space-y-3'>
        {order.map(item => (
            <div
                key={item.id}
                className=" p-2 items-center border-double border-b border-black py-5 grid md:grid-cols-2 "
                >
                    
                <div>
                    <p className='text-lg font-bold'>{item.name}</p>
                    <p className='font-bold'>Cantidad: {item.quantity} - ${item.price * item.quantity}</p>
                </div>
                <div className='flex justify-end'>
                    <button className='border-2 border-red-600 p-2 hover:bg-red-600 h-auto w-auto rounded-full text-black font-black ' onClick={() => removeItem(item['id'])}> <Trash2></Trash2></button>

                </div>
            </div>
        ))}

    </div>
  )
}
