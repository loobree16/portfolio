import Layout from '../components/Layout';

const Parramore = () => (
  <Layout>
    <h1>Parramore-Callahan Neighborhood Project</h1>
    <p>About the project.</p>
    <div className="grid">
      <div className="container">
      <img src="/portfolio/parramore.png" className="image"></img>
      </div>
      <div className="container">
      <img src="/portfolio/ParramoreHome.png" className="image"></img>
      </div>
     
      
    </div>

    <style jsx>
    {`
      .grid{
        display: grid;
        grid-template-columns: auto auto;
        width: 100%
        margin: 0;
      }
      .container {
        position: relative;
        width: 70%;
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

export default Parramore;