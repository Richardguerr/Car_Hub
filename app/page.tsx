import { CarCard,Hero,SearchBar,CustomFilter,ShowMore } from "@/components";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import { Main } from "next/document";
import Image from "next/image";


export default async function Home({searchParams}:HomeProps) {

  const allCars = await fetchCars(
    {
    manufacturer: searchParams.manufacturer || '', 
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  }
  );

  console.log("Carros" + allCars.length)
  
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id="discover"  >
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Catalogo de Carros</h1>
          <p>Explorar</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div
          className="home__filter-container">
            <CustomFilter  title="fuel" options ={fuels}/>
            <CustomFilter  title="year" options={yearsOfProduction}/>
          </div>

        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car)=> <CarCard car={car} />

              )}
            </div>

            <ShowMore pageNumber={(searchParams.limit || 10)/10} isNext={(searchParams.limit || 10) > allCars.length }>

            </ShowMore>
          </section>
        ): (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold"> Opppss</h2>
            <p>{allCars?.message} </p>
          </div>
        )}
      </div>
    </main>
  );
}
