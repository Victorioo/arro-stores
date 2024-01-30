import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="h-14 bg-gray-800 flex items-center justify-between w-full border-b-2 border-[#2beba3]">
        <div className="w-full flex justify-between max-w-[70%] mx-auto items-center">
          <h1>
            <span className="font-bold">ARRO</span> STORES
          </h1>
          <ul className="flex gap-10 list-none font-bold text-md">
            <a href="#tiendas">Tiendas</a>
            <a href="#nosotros">Nosotros</a>
          </ul>
        </div>
      </header>
      <main className="hero relative h-[calc(100vh-3.5rem)] bg-gray-900">
        <section className="z-20 w-full h-full flex items-center justify-between mx-auto max-w-[70%]">
          <article className="max-w-[50%] flex flex-col items-start gap-4 sm:max-w-[100%]">
            <h1 className="text-4xl leading-tight font-bold max-w-[29ch]">
              Conocé nuestras tiendas de ropa, y vestí siempre genial.
            </h1>
            <button className="bg-[#2beba3] px-10 py-2 font-bold text-black text-xl rounded-xl">
              VER TIENDAS
            </button>
            <p className="font-bold text-xl max-w-[40ch] my-4 sm:text-md">
              HACÉ CLICK EN EL BOTÓN DE ARRIBA Y HACÉ QUE TU LOOK SE VEA GENIAL
            </p>
          </article>
          <Image
            src={"/stores.jpg"}
            width={100}
            height={50}
            className="w-[500px] h-[500px] object-cover rounded-full levitate sm:hidden lg:hidden"
            alt=""
            unoptimized={true}
          ></Image>
        </section>
        <section
          className="grid grid-cols-2 grid-rows-1 items-center h-96 overflow-hidden"
          id="tiendas"
        >
          <a
            className="rola-store bg-gray-200 flex items-center justify-center flex-col gap-4 p-10 h-full text-black text-center"
            href="https://www.instagram.com/rolastoreok/"
            target="_blank"
          ></a>
          <a
            className="vitto-store bg-black w-full flex items-center justify-center flex-col gap-4 p-10 h-full text-center"
            href="https://www.instagram.com/vittostore.ok/"
            target="_blank"
          ></a>
        </section>
        <section className="bg-gray-900 flex items-start justify-center py-24">
          <div className="flex flex-col items-center justify-center max-w-[50%] gap-5 sm:max-w-[90%]">
            <h1 className="text-2xl font-semibold text-white">
              Sobre nosotros
            </h1>
            <p className="leading-loose text-lg text-center text-gray-400 max-w-[80%]">
              Somos un grupo de mujeres que trabajan para mejorar cada día
              nuestro producto, trayendo siempre la mejor calidad para las
              personas que residen en Arroyito, empezamos haciendo de{" "}
              <a
                href="https://www.instagram.com/rolastoreok/"
                className="text-[#2beba3] hover:text-[#2beba5b0]"
                target="_blank"
              >
                Rola Store
              </a>{" "}
              nuestra tienda para venta de vestimenta de mujer, y luego
              decidimos que los hombres también debían disfrutar de nuestra
              ropa, por lo que creamos{" "}
              <a
                href="https://www.instagram.com/vittostore.ok/"
                className="text-[#2beba3] hover:text-[#2beba5b0]"
                target="_blank"
              >
                Vitto Store
              </a>
              .
            </p>
          </div>
        </section>
        <section className="flex items-center justify-center flex-col p-10 bg-gray-900 gap-8">
          <h1 className="text-2xl font-semibold">
            Contamos con el apoyo de...
          </h1>
          <article className="grid grid-cols-3 grid-rows-1 gap-4">
            <Image
              src={"/bohe-store.jpg"}
              width={150}
              height={150}
              alt="Foto de marca"
              className="rounded-full opacity-70"
            ></Image>
            <Image
              src={"/fca.jpg"}
              width={150}
              height={150}
              alt="Foto de marca"
              className="rounded-full opacity-70"
            ></Image>
            <Image
              src={"/la-konga.jpg"}
              width={150}
              height={150}
              alt="Foto de marca"
              className="rounded-full opacity-70"
            ></Image>
          </article>
        </section>

        <footer className="bg-gray-950 flex items-center justify-center p-14">
          <p className="max-w-[50%] text-center text-gray-500 sm:max-w-[90%]">
            © 2024 ARRO STORE Todos los derechos reservados.
          </p>
        </footer>
      </main>
    </>
  );
}
