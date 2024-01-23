

export const Enjoy = ()=>{

  return (
    <>
      <div className="">
        <h2>Disfruta como quieras</h2>
        <p>Disfruta de las mejores historias, en cualquier momento y en cualquier lugar</p>
      </div>
      <picture>
        <source media="(min-width:600px)" srcSet="/enjoy_md.webp"/>
        <source media="(min-width:1268pc" srcSet="/enjoy_ld.webp"/>
        <img src="/enjoy_lg.webp" alt="" />
      </picture>
    </>
  )
}