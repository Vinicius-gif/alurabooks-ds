import React from 'react'
import styled from 'styled-components'

const CardStyled = styled.div`
  padding: 48px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  h1 {
    color:#EB9B00;
    font-weight: 700;
    font-family: sans-serif;
  }
`

export const AbCard = () => {
  return (
    <CardStyled>
      <h1>Sobre o livro:</h1>
      <h2>Liderança em Design</h2>
      <p>Habilidades de gestão para alavancar sua carreira <br/> Por: Vitor Zanini</p>
      <div>
        <p>A partir de:</p>
        <strong>R$ 29,90</strong>
      </div>
      <button>Comprar</button>
    </CardStyled>
  )
}
