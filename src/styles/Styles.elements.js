import styled from "styled-components";

// NAVBAR ------------------------------------
export const ContainerNavBar = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #f1f1f1;

  width: 100%;
  height: auto;
`

export const Logo = styled.p`
  color: #818181;
  font-size: 25px;
  font-weight: bold;
`

// APP --------------------------------------
export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
`

export const ContainerFormList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 800px;
  height: auto;

  border: 1px solid #000000;
  padding: 30px;

  margin: 30px 0px;
`

// FORM --------------------------------------
export const ContainerForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 750px;
  height: auto;

  margin-bottom: 10px;
`

export const Label = styled.label`
  width: 200px;
  font-weight: bold;
`

export const Input = styled.input`
  width: 400px;
  height: 30px;
`

export const InputDate = styled.input`
  width: 400px;
  height: 30px;
`

export const Select = styled.select`
  width: 400px;
  height: 30px;
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 750px;
  height: auto;

  margin-bottom: 10px;
`

export const Button = styled.button`
  width: 90%;
  height: 30px;

  background: #084594;
  color: #fff;
  font-weight: bold;

  border: 1px solid #000000;
  border-radius: 2px;
  
  cursor: pointer;

  margin-bottom: 10px;

  &:hover {
    background: #5D8BF4;
  }
`

export const MassageExito = styled.p`
  margin-top: 20px;
  color: #084594;
  font-weight: bold;
`

// export const ButtonClear = styled.button`
//   width: 90%;
//   height: 30px;

//   background: #5D8BF4;
//   color: #fff;
//   font-weight: bold;

//   border: 1px solid #000000;
//   border-radius: 2px;
  
//   cursor: pointer;

//   &:hover {
//     background: #084594;
//   }
// `

// LIST --------------------------------------
export const ContainerList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;

  border-top: 2px solid #f1f1f1;
  margin: 20px 0px;
`

export const Table = styled.table`
  width: 750px;
  height: auto;

  text-align: center;
`

// FOOTER ------------------------------------
export const ContainerPrincipal = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid #818181;
  padding: 20px 0px;
  margin: 0px 20px;

  width: 100%;
  height: auto;
`

export const Credits = styled.a`
  color: #818181;
  font-size: 18px;

  text-decoration: none;
`