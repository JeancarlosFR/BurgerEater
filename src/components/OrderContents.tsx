import type { OrderItem} from '../types';

type orderContentsProps = {
    order: OrderItem[]
}


export default function OrderContents({order}: orderContentsProps) {
  return (
    <div className='space-y-3'>
        {order.map(item => (
            <div
                key={item.id}
                className="bg-amber-500 p-2 rounded-3xl items-center border-double border-black py-5 "
                >
                    
                <div className=''>
                    <p className='text-lg font-bold'>{item.name}</p>
                    <p className='font-bold'>Cantidad: {item.quantity} - ${item.price * item.quantity}</p>
                </div>
            </div>
        ))}

    </div>
  )
}
