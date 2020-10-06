
import Layout from '../components/Layout';
//import Gallery from '../components/gallery';

  const Work = () => {
    /*const images = [];
    const imageCount = 2;

    for (let i = imageCount; i > 0; i--) {
      images.push(`/portfolio/${i}.jpg`);
    }*/

    return (
      <Layout>
      <h1>My Portfolio!</h1>
      <div className="grid">
      <div className="container">
      <img src="/portfolio/thumbnail1.png" className="image"></img>
      <div className="middle">
        <div className="text">
          <a href="/bookseeker">Book Seeker</a>
        </div>
      </div>
      </div>

      <div className="container">
      <img src="/portfolio/thumbnail2.png" className="image"></img>
      <div className="middle">
        <div className="text">
          <a href="/pet">Happy Pets Hideaway</a>
        </div>
      </div>
      </div>

      <div className="container">
      <img src="/portfolio/parramore.png" className="image"></img>
      <div className="middle">
        <div className="text">
          <a href="/parramore">Parramore</a>
        </div>
      </div>
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
        width: 50%;
        padding: 10px;
        margin: auto;
        margin-top: 50px;
      }
      .image {
        width: 100%;
        opacity: 1;
        display: block;
        height: auto;
        transition: .5s ease;
        backface-visibility: hidden;
        border-radius: 4px;
      }
      .middle {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
      }
      .container:hover .image {
        opacity: 0.3;
      }
      .container:hover .middle {
        opacity: 1;
      }
      .text {
        background-color: #AD89C7;
        padding: 16px 32px;
        border-radius: 5px;
      }
      a {
        color: white;
        font-size: 16px;
        text-decoration: none;
      }
    `}
    </style> 
    </Layout>
    );
  };
//<Gallery images={images} />
export default Work;