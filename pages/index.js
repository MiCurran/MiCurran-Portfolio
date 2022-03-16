import Home from '../views/Home/Home';
import SEOHead from '../components/Head';
const HomePage = (props) => (
<>
    <SEOHead title={'Michael Curran'} content={"Michael Curran portfolio site"} name={"portfolio site"} />
    <Home {...props}/>
</>
);

export default HomePage