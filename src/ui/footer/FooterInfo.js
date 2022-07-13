import React from 'react'

const FooterInfo = ({ categorias, sobreNosotros, soporte }) => {
  return (
    <>
      <div>
        <h3>Categorias</h3>
        <nav>
          {categorias?.map(i => <a href="/">{i}</a>)}
        </nav>
      </div>
      <div>
        <h3>Sobre Nosotros</h3>
        <nav>
          {sobreNosotros?.map(i => <a href='/'>{i}</a>)}
        </nav>
      </div>
      <div>
        <h3>Soporte</h3>
        <nav>
          {soporte?.map(i => <a href='/'>{i}</a>)}
        </nav>
      </div>
    </>
  )
}

export default FooterInfo;