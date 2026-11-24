import './App.css';

function Header() {
  return <div className="header"><h1>Header Component</h1></div>;
}

function Details() {
  return (
    <div className="details">
      <h2>Name:Aditya Agarwal</h2>
      <h2>Address: Agra</h2>
      <h2>University: GLA University</h2>
      <h2>Course: B.Tech</h2>
    </div>
  );
}

function Footer() {
  return <div className="footer"><h3>Footer Component</h3></div>;
}

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <h1>Hello World</h1>
        <Details />
      </div>
      <Footer />
    </>
  );
}

export default App;