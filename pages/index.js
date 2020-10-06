
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <h1>Welcome</h1>
    <div className="container">
      <div className="grid-item"> 
        <img className="profile" src="/about.jpg" />
      </div>
      <div className="grid-item">
      <p>I'm a senior in the Web and Social Platforms program at the University of Central Florida. After I graduate in the fall of 2020 I hope to obtain a job in front-end design. </p>
      </div>
    </div>

    <style jsx>
    {`
      
      
      
      img {
        
        margin: 10px 0 20px 80px;
        border-radius: 6px;
        }
      p {
        
        margin: 10px 80px 20px 0;
      }
      .container {
        display: grid;
        grid-template-columns: auto auto;
        width: 80%;
        margin: 0 auto;
      }
      .grid-item {
        width: 50%;
        padding: 10px;
        margin: auto;
        min-width: 400px;
      }
      @media (max-width: 600px) {
        .container {
          display: grid;
          grid-template-columns: auto;
          width: 100%;
          margin: 0;
        }
        p {
          float: none;
        }
        img {
          float: none;
          width: 100%;
          margin 0;
        }
      }
    `}
    </style>  
  </Layout>
);



export default Home
