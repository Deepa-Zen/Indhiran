
import React from 'react';

const App = () => {
  const containerStyle = {
    fontFamily: 'Georgia, serif',
    backgroundColor: '#fefefe',
    color: '#444',
    padding: '40px',
    maxWidth: '1000px',
    margin: '0 auto'
  };

  const headerStyle = {
    backgroundColor: '#6a5acd',
    color: '#fff',
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '30px'
  };

  const cardGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: '0.3s',
  };

  const nameStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const roleStyle = {
    fontSize: '16px',
    color: '#6a5acd'
  };

  const footerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    fontSize: '14px',
    color: '#888'
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>Our Loving Family</h1>
        <p>Together with love, laughter, and dreams.</p>
      </header>

      <div style={cardGridStyle}>
        <div style={cardStyle}>
          <div style={nameStyle}>Ganesh</div>
          <div style={roleStyle}>Father - The Strength of the Family</div>
          <p>Guiding us with wisdom and unconditional support.</p>
        </div>

        <div style={cardStyle}>
          <div style={nameStyle}>Mahadevi</div>
          <div style={roleStyle}>Mother - The Heart of the Home</div>
          <p>Filling our lives with warmth, care, and endless love.</p>
        </div>

        <div style={cardStyle}>
          <div style={nameStyle}>Deepa Dharshini</div>
          <div style={roleStyle}>Daughter - The Spark of Joy</div>
          <p>Cheerful, smart, and always ready to shine.</p>
        </div>

        <div style={cardStyle}>
          <div style={nameStyle}>Gopika</div>
          <div style={roleStyle}>Daughter - The Creative Soul</div>
          <p>Inspiring us with her imagination and kindness.</p>
        </div>
      </div>

      <footer style={footerStyle}>
        © 2025 The Ganesh Family. Made with ❤.
      </footer>
    </div>
  );
};

export default App;
