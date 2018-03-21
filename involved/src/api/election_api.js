import './App.css';
import Form from '../component/form.js';
// import Form2 from '../component/login_form'
//email password address city state zipcode
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      info: ''
    };
  }

  componentWillMount() {
    const api_key = 'AIzaSyBgfiDlTi-VtbLrQ0CjcV6z2KbVX_h7kwA';
    const url = 'https://www.googleapis.com/civicinfo/v2/elections?key=' + api_key;
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data));
  }



  render() {
    return (
      <div className="App">

        {this.state.info}
      </div>
    );
  }
}

export default App;
