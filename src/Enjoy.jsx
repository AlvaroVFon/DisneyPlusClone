import { Cards } from "./Cards"

export const Enjoy = ()=>{

  return (
    <>
    <div className="bg-[#050614] flex flex-col items-center">
      <div className="flex flex-col items-center justify-center pt-20">
        <h2 className="text-xl font-semibold text-white/90">Disfruta como quieras</h2>
        <p className="pt-10 px-10 text-sm text-center text-white/60 tracking-wide">Disfruta de las mejores historias, en cualquier momento y en cualquier lugar</p>
      </div>
      <picture>
        <source media="(min-width:600px)" srcSet="/enjoy_md.webp"/>
        <source media="(min-width:1268pc" srcSet="/enjoy_ld.webp"/>
        <img src="/enjoy_sm.webp" alt="" />
      </picture>
      <Cards/>
    </div>
      
    </>
  )
}