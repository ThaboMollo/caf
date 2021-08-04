import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Caf from './caf';

import Layout from './components/Layout';
import About from './containers/About';
import Partners from './containers/Partners';
import FathersAndSons from './containers/FathersAndSons';
import ForexMan from './containers/ForexMaf';
import Events from './containers/Events';
import gentsNWU from './containers/gentsNWUMaf';
import HeatLich from './containers/HeatLich';
import MarriageKlerk from './containers/MarriageKlerk';
import MarriagePta from './containers/MarriagePta';
import MothersAndSons from './containers/mnsMaf';
import Programs from './containers/Programs';
import SingleRusty from './containers/SingleRusty';
import TargetGroup from './containers/Target-group';
import VouterMaf from './containers/VouterMaf';
import FashionGoesDigital from './containers/FashionGoesDigital';
import JsonData from './data/data.json';
import Blogs from './containers/Blogs';
import Blog from './containers/Blog';
import Sponsor from './containers/Sponsor';

const App = () => {
		const [cafData, setCafData] = useState({})
		useEffect(() => {
			setCafData(JsonData)
		}, [])
	return (
		<Layout>
			<Switch>
				<Route path="/about" render={(props) => <About data={cafData.About} /> } />
				<Route path="/events" render={(props) => <Events data={cafData.Events} /> }/>
				<Route path="/partners" render={(props) => <Partners data={cafData.Partners} /> }/>
				<Route path="/target-group" render={(props) => <TargetGroup data={cafData.Target} /> }/>
				<Route path="/" exact component={Caf} />
				<Route path="/blogs" render={(props) => <Blogs data={cafData.Blogs} />} />
				<Route path="/blog" component={Blog} />
				<Route path="/programs" component={Programs} />
				<Route path="/father-and-sons" component={FathersAndSons} />
				<Route path="/gentlemen-talk" component={gentsNWU} />
				<Route path="/heatware-lich" component={HeatLich} />
				<Route path="/marriage-klerksdorp" component={MarriageKlerk} />
				<Route path="/singleness-rusternburg" component={SingleRusty} />
				<Route path="/vouter-molefe-launch" component={VouterMaf} />
				<Route path="/empowerment-mafikeng" component={ForexMan} />
				<Route path="/mothers-and-sons" component={MothersAndSons} />
				<Route path="/marriage-pta" component={MarriagePta} />
				<Route path="/fashion-goes-digital" component={FashionGoesDigital} />
				<Route path="/sponsor-us" component={Sponsor} /> 
			</Switch>
		</Layout>
	)
}

export default App;