import { NavLink } from "react-router-dom"
import { FaArrowRight } from 'react-icons/fa'
import img1 from '../assets/estadisticas.png'
import list from '../Data/list.json'

export default function Home () {  
  return (
    <div className="flex flex-col items-center gap-20 min-h-screen w-full h-full pb-20">
     
     {/*Banner*/}
      <section id="banner" className="flex justify-center items-center bg-[#f3f3f3] w-full h-[600px] ">
        <article className="w-3/4 flex flex-col justify-center h-full gap-4">
          <span className="text-6xl">
            Bienvenido
          </span>
          <p className="text-2xl">
            Descubre nuestros tragos
          </p>
          <NavLink
            className={'flex justify-center items-center gap-2 border-2 w-[140px] h-12 rounded-lg hover:bg-white hover:text-black hover:text-lg duration-300'} 
            to={'/tragos'}>
            <span>Tragos</span>
            <FaArrowRight className="mt-[1px]"/>
          </NavLink>
        </article>
      </section>

      {/*Welcome to client*/}
      <section className="flex flex-col px-10 gap-5 justify-center w-3/4">
        <h1 className="text-3xl font-bold">
          Bienvenido a nuestra pagina
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea odit aut. Exercitationem illo nulla placeat sit, qui dolores est consequatur assumenda provident eum nisi quidem maiores excepturi eaque nemo?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, id quisquam cum tempora similique natus deleniti neque distinctio, debitis minima cumque. Quia, laudantium non cum porro a repellendus repudiandae consequatur
        </p>
        <div className="flex w-full justify-center items-center">
          <img 
            src="./logo.png" 
            className="border-2 object-contain rounded-3xl h-[320px] w-[320px]" />
        </div>
      </section>

      {/*Info article*/}
      <section className="flex flex-col px-10 gap-5 justify-center">
        <h1 className="text-3xl font-bold">
          Estamos creciendo
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea odit aut. Exercitationem illo nulla placeat sit, qui dolores est consequatur assumenda provident eum nisi quidem maiores excepturi eaque nemo?
        </p>
        <div className="flex w-full justify-center items-center">
          <img 
            src={img1} 
            className="border-2 object-contain rounded-3xl h-[280px] w-[280px]" />
        </div>
      </section>

      {/*Categories*/}
      <section className="flex flex-col gap-5 px-10 w-3/4">
        <h1 className="font-bold text-3xl w-full">
          Categorias
        </h1>
        <div className="flex justify-evenly gap-20">
          {list.map((categoriesObject) => (
            Object.keys(categoriesObject.categories).map((category) => (
              <ul
                className="flex flex-col" 
                key={category}>
                <NavLink className='hover:text-pink-500 duration-300 text-2xl'>
                  {category}
                </NavLink>
                {categoriesObject.categories[category].map((subcategory) => (
                  <li
                    className="flex flex-col w-full" 
                    key={subcategory}>
                    <NavLink className='hover:text-pink-500 duration-300 text-lg'>
                      -{subcategory}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ))
          ))}
        </div>
      </section>
    </div>
  )
}