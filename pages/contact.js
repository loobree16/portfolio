import Layout from '../components/Layout';

/*constructor(props) {
  super(props);
  this.state = {
    name: '',
    email: '',
    subject: '',
    }
}

handleFormSubmit(event) {
  event.preventDefault();
  console.log(this.state);
}*/


const Contact = () => (
  <Layout>
  <h1>Contact Me!</h1>
  <div className="container">
    <form>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Name"></input>

      <label for="email">Email</label>
      <input type="text" id="email" name="email" placeholder="Email Address"></input>

      <label for="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something..."></textarea>

      <input type="submit" value="Submit"></input>
    </form>
  </div>

  <style jsx>
    {`
      .container {
        width: 50%;
        margin: auto;
      }
      #subject {
        height: 200px;
      }

      input[type=text], select, textarea {
        width: 100%;
        padding: 12px;
        border-radius: 4px;
        box-sizing: border-box; 
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
      }
      input[type=submit] {
        background-color: #66CDAA;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius:
        cursor: pointer;
      }
      input[type=submit]:hover {
        background-color: black;
      }
    `}
  </style>
</Layout>
);

export default Contact;