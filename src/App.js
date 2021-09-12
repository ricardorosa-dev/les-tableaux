import './App.css';
// import styled from 'styled-components';
// import sinapses1 from './img/sinapses1.jpg'

// const Container = styled.div`
//   background-color: aquamarine;
//   height: 99vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Tableau = styled.div`
//   background-image: url(${sinapses1});
//   background-size: cover;
//   // border: 1px solid;
//   width: 600px;
//   height: 450px;
// `;

function App() {
  return (
    <container>
      <div className="cadre">
        <div className="tableau">
          <div className="reflexe"></div>
          {/* <div class="reflexe2"></div> */}
        </div>
        <div className="tableau-shadow"></div>
      </div>
    </container>
  );
}

export default App;
