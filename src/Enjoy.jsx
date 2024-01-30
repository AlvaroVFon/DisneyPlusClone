import { Cards } from "./Cards"

export const Enjoy = () => {

  return (
    <>
      <div className="bg-[#050614] flex flex-col items-center">
        <div className="flex flex-col items-center justify-center pt-20">
          <h2 className="text-xl font-semibold text-white/90 lg:text-4xl">Disfruta como quieras</h2>
          <p className="px-10 pt-10 text-sm tracking-wide text-center text-white/60 lg:text-xl">Disfruta de las mejores historias, en cualquier momento y en cualquier lugar</p>
        </div>
        <picture>
          <source media="(min-width:800px)" srcSet="/enjoy_md.webp" />
          <source media="(min-width:1100px)" srcSet="/enjoy_lg.webp" />
          <img src="/enjoy_sm.webp" alt="" />
        </picture>
        <Cards />
      </div>

    </>
  )
}