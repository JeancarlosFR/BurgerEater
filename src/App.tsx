import MenuItems from "./components/MenuItems"


function App() {
  

  return (
    <>

    <header className="bg-amber-400">
      <h1 className=" text-4xl text-center p-10 font-bold">¡Bienvenido a BurgerEater! 🍔</h1>
    </header>
    <main className="min-h-screen bg-[url('/Fondo_BurgerEater.png')] bg-cover bg-center bg-no-repeat p-5 ">

    <div className="bg-amber-400 rounded-2xl  max-w-7xl mx-auto  grid md:grid-cols-2 ">
      <div className="  p-5">

        <h2 className="text-center font-sans text-4xl font-black">Menu</h2>
        <div className=" space-y-5 mt-10">
          <MenuItems />
        </div>
      </div>

      <div className="p-5">

        <h2 className="text-center font-sans text-4xl font-black">Ordenes</h2>

      <div className=" border border-dashed border-slate-300 p-5 rounded-2xl space-y-5 mt-10">
      
      </div>

      </div>

    </div>

    </main>
      
    </>
  )
}

export default App
