import React, { Component } from 'react';
import Chart from 'react-google-charts';
import Snack from './Snack';
import Loader from '../Loader/Loader';
import './Skills.css';

export default class Skills extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      show: false
    };
  }

  componentDidMount() {
    this.timeOut = setTimeout(
      function() {
        this.setState({
          loading: false,
          show: true
        });
      }.bind(this),
      2000
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  render() {
    const { loading, show } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <React.Fragment>
        {show ? <Snack /> : null}
        <div className="skills-section">
          <h1>
            Skills & <span>Experience:</span>
          </h1>
          <p>
            My main area of expertise is Front End Development (client side of
            the web).
          </p>

          <div className="chart-container" style={{ overflow: 'hidden' }}>
            <Chart
              width={'100%'}
              height={'80vh'}
              chartType="PieChart"
              loader={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: '#fff',
                    height: '400px'
                  }}
                >
                  Loading Chart...
                </div>
              }
              data={[
                ['Languages', 'Piece of the pie'],
                ['JavaScript', 15],
                ['HTML5', 10],
                ['CSS3', 10],
                ['React', 10],
                ['Redux', 10],
                ['Node.js', 10],
                ['PostgreSQL', 10],
                ['npm', 10],
                ['Git', 10]
              ]}
              options={{
                enableInteractivity: false,
                pieSliceText: 'label',
                pieSliceTextStyle: { fontSize: 14 },
                chartArea: {
                  width: '100%',
                  height: '400px',
                  top: 0
                },
                title: { position: 'none' },
                colors: [
                  '#f7df1e',
                  '#e34f26',
                  'blue',
                  'purple',
                  '00d8ff',
                  '#44883e'
                ],
                tooltip: { text: 'value' },
                backgroundColor: 'transparent',
                is3D: true,
                legend: {
                  position: 'none'
                },
                animation: { startup: true, duration: 2000, easing: 'in' }
              }}
              rootProps={{ 'data-testid': '2' }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
