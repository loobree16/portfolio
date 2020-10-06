import Header from '../components/header';
import Footer from '../components/footer';

const Layout = props => (
    <div className="siteWrapper">
        
        <Header />
        <div className="content">{props.children}</div>

            <Footer />
       
    <style jsx global>
        
        {`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500&display=swap');
        body {
            margin: 0;
            line-height: 1.7;
            font-weight: 400;
            background: #fff;
            color: #454545;
            font-family: 'IBM Plex Sans', sans-serif;
            font-weight: 400;
            text-rendering: optimizeLegibility;
        }

        h1{
            font-family: 'IBM Plex Sans', sans-serif;
            font-weight: 400;
            margin:40px 0 30px;
            text-align: center;
        }

        .content{
            min-height: 600px;
            
        }

        img {
            max-width: 100%;
        }
    
    `}</style>

    </div>
);

export default Layout;