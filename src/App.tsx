import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents"
import TipAmount from "./components/TipAmount"
import OrderTotal from "./components/OrderTotal"
import { ToastContainer } from "react-toastify"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"


function App() {
  
  const {order, tip, setTip, addItem, removeItem, placeOrder} = useOrder()

  return (
    <>

<header className="bg-amber-400 p-4 flex justify-center">
  <h1 className="text-4xl text-center p-10 font-bold bg-white rounded-full shadow-lg">
    ¡Bienvenido a BurgerEater! 🍔
  </h1>
</header>

    <main className="min-h-screen bg-[url('/Fondo_BurgerEater.png')] bg-cover bg-center bg-no-repeat p-5 ">

    <div className="bg-amber-400 rounded-2xl  max-w-7xl mx-auto  grid md:grid-cols-2 ">
      <div className="  p-5">

        <h2 className="text-center text-4xl font-black">Menu</h2>
        <div className=" space-y-5 mt-10">
          {menuItems.map(item => (
            <MenuItems
            key={item.id}
            item={item}
            addItem={addItem}
            />

          ))}
          
        </div>
      </div>


      <div className="p-5">

        <h2 className="text-center  text-4xl font-black">Ordenes</h2>

      <div className="bg-amber-500 border border-dashed border-slate-300 p-5 rounded-2xl space-y-5 mt-10">
          {order.length ? (
            <>
            <OrderContents 
            order={order}
            removeItem={removeItem}
          />
          <TipAmount
            setTip={setTip}
            tip={tip}
          
          />

          <OrderTotal
            order={order}
            tip={tip}
            placeOrder={placeOrder}
          
          />
            </>
          ) : 
          
          <p className="text-bold text-2xl text-center">La Orden Esta Vacia!</p>

          }
      </div>

      </div>

    </div>
    <ToastContainer />


    </main>
      
    </>
  )
}

export default App
