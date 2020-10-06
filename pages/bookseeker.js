import Layout from '../components/Layout';

const Books = () => (
  <Layout>
    <h1>Book Seeker</h1>
    <p>About the project.</p>
    <div className="grid">
      <div className="container">
      <img src="/portfolio/hi-fid-loading.png" className="image"></img>
      </div>
      <div className="container">
      <img src="/portfolio/hi-fid-login.png" className="image"></img>
      </div>
      <div className="container">
      <img src="/portfolio/hi-fid-home.png" className="image"></img>
      </div>
      <div className="container">
      <img src="/portfolio/hi-fid-quiz.png" className="image"></img>
      </div>
      <div className="container">
      <img src="/portfolio/hi-fid-q.png" className="image"></img>
      </div>
      <div className="container">
      <img src="/portfolio/hi-fid-results.png" className="image"></img>
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

export default Books;