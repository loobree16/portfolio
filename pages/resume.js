import Layout from '../components/Layout';

const Resume = () => (
  <Layout>
  <h1>My Resume</h1>
  <img src="/resume-design.png"></img>

  <style jsx>
  {`
    img {
      display: block;
      width: 50%;
      margin: auto;
    }
  `}
</style>
</Layout>
);

export default Resume;