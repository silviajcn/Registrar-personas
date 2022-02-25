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
  height: 20px;
`

export const Select = styled.select`
  width: 410px;
  height: 28px;
`

export const Button = styled.button`
  width: 90%;
  height: 30px;

  background: #5D8BF4;
  color: #fff;

  border: 1px solid #000000;
  border-radius: 2px;
  
  cursor: pointer;

  &:hover {
    background: #084594;
  }
`

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

export const BtnEdit = styled.button`
  width: 80px;
  height: 25px;

  background: #86C6F4;
  color: #000000;

  border: 1px solid #000000;
  border-radius: 2px;
  
  cursor: pointer;
  margin-right: 5px;
  font-weight: bold;

  &:hover {
    color: #fff;
    background: #084594;
  }
`

export const BtnDelete = styled.button`
  width: 70px;
  height: 25px;

  background: #FF7272;
  color: #000000;

  border: 1px solid #000000;
  border-radius: 2px;
  font-weight: bold;
  
  cursor: pointer;

  &:hover {
    color: #fff;
    background: #D82148;
  }
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

export const Credits = styled.small`
  color: #818181;
  font-size: 18px;
`