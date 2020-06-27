import React from 'react'
import {Cards, Chart, CoutryPicker} from './components';
import styles from  './App.module.css';
import {fetchdata} from './api/index';
import coronaImage from './images/image.png';
class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
  async  componentDidMount() {
        const fetchedData = await fetchdata();
        this.setState({data:fetchedData})
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchdata(country);

      this.setState({data: fetchedData, country: country});
    }
    render () {
        const {data, country} = this.state;
        return(
        <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data}/>
        <CoutryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        </div>
        )
    }
}
export default App;