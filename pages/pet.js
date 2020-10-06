import Layout from '../components/Layout';

const Pets = () => (
  <Layout>
    <h1>Happy Pets Hideaway</h1>
    <p>About the project.</p>
    <div className="grid">
      <div className="container">
      <img src="/portfolio/image1.png" className="image"></img>
      </div>
      <div className="container">
      <img src="/portfolio/image2.png" className="image"></img>
      </div>
      <div className="container">
      <img src="/portfolio/image3.png" className="image"></img>
      </div>
      <div className="container">
      <img src="/portfolio/image4.png" className="image"></img>
      </div>
      <div className="container">
      <img src="/portfolio/image5.png" className="image"></img>
      </div>
      <div className="container">
      <img src="/portfolio/image6.png" className="image"></img>
      </div>
    </div>

    <style jsx>
    {`
      .grid{
        display: inline-grid;
        grid-template-columns: auto auto;
        width: 100%
        margin: 0;
      }
      .container {
        position: relative;
        width: 80%;
        padding: 10px;
        margin: auto;
        margin-top: 50px;
      }
      .image {
        width: 100%;
        opacity: 1;
        display: block;
        height: auto;
        border-radius: 4px;
      }
      p {
        width: 200px;
        margin: auto;
      }

      @media (max-width: 600px) {
        .grid {
          display: grid;
          grid-template-columns: auto;
        }
      }
      
    `}
    </style> 


    </Layout>

);

export default Pets;