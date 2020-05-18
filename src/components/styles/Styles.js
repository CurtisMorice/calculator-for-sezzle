import styled from 'styled-components';

export const CalculatorStyles = styled.div` background-color: #333;
width: 100%;
min-height: 100vh;
display: grid;
justify-items: center;
grid-template-rows: minmax(200px 350px) 1fr;
grid-template-columns: 1fr;

.calculator-wrapper {
  border: 10px solid azure;
  padding: 10px;
  border-radius: 10px;
  @media (max-width: 800px) {
    margin: 20px;
    flex-direction: column;
    justify-items: initial;
  }
}
.outer-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
 @media (max-width: 800px) {
  flex-direction: column;
  padding-bottom: 50px;
 }
}
.display {
  font-family: 'Orbitron', serif;
  margin: 0 !important;
  width: 100%;

  @media (max-width: 500px) {
    width: 90%;
    max-height: 275px;
  }

  h1 {
    font-size: 3.5rem;
    color: #333;
    text-align: center;

    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }
}

.number-pad {
  /* grid-area: numbers; */
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
  width: 500px;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 100%;
    margin: 0;
    padding: 0;
    grid-gap: 15px;
  }

  button {
    cursor: pointer;
    width: 100%;
    height: 80px;
    border-radius: 20px;
    border: 3px solid white;
    font-size: 2rem;
    color: #333;
    font-family: 'Orbitron', serif;
    background: azure;

    &:focus {
      outline: none;
    }

    &:hover {
      border: 3px solid #dfe6e9;
      font-weight: 500;
    }
    @media (max-width: 500px) {
      height: 70px;
      font-size: 2.5rem;
    }

  button.function-button {
    background-color: #2d3436;
    color: #fff;
  }

  button.white-button {
    color: #2d3436;
    background-color: white;
  }
}

.zero-button {
  grid-column: 1/3;
}

`;

export const DisplayStyles = styled.div`
display: grid;
grid-template-rows: 90px 30px;
grid-template-columns: 1fr;
border: 4px solid white;
max-width: 450px;
margin: 10px auto;
align-items: center;
border-radius: 20px;
background: azure;

@media (max-width: 800px) {
  width: 95%;
  grid-template-rows: 60px 40px;
}


h2,
p {
  text-align: center;
  color: #333;
}

h2 {
  font-size: 2.5rem;
  margin: 0;
  text-align: center;
  border-bottom: 4px solid white;
  padding: 15px 20px;

  @media (max-width: 500px) {
    font-size: 1.5rem;
    padding: 10px;
  }
}

h2.long-main-display {
  font-size: 1.2rem;
}

p {
  margin: 5px 0;
  font-size: 1.3rem;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
}

p.long-stored-display {
  font-size: 0.5rem;
}

`
export const CalcListStyle = styled.div`
border: 4px solid white;
max-width: 450px;
margin: 10px 20px;
align-items: center;
border-radius: 20px;
background: azure;
width: 450px;
height: 500px;
@media (max-width: 500px) {
  width : 90%;
  display: flex;
  flex-direction: column;
  margin: 10px;
}
h1 {
  width: 100%;
  text-align: center;
}
`
  ;