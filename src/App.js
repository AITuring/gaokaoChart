import { useEffect } from 'react';
import './App.css';
import * as echarts from 'echarts';

const chartData = [
  {
    name: '二本线',
    type: 'line',
    smooth: true,
    // stack: 'Total',
    data: [458, 456, 400, 439, 432]
  },
  {
    name: '同位分',
    type: 'line',
    smooth: true,
    // stack: 'Total',
    data: [460, 445, 474, 476, 455]
  },
  {
    name: '哈尔滨商业大学',
    type: 'line',
    smooth: true,
    // stack: 'Total',
    data: [488, 492, 513, 514, 432]
  },
  {
    name: '哈尔滨师范大学',
    type: 'line',
    // stack: 'Total',
    data: [493, 497, 511, 513, 460]
  },
  {
    name: '湖州师范学院',
    type: 'line',
    smooth: true,
    // stack: 'Total',
    data: [485, 490, 514, 514, 464]
  },
  {
    name: '辽宁科技大学',
    type: 'line',
    smooth: true,
    // stack: 'Total',
    data: [489, 496, 517, 518, 440]
  },
  {
    name: '山西大同大学',
    type: 'line',
    smooth: true,
    // stack: 'Total',
    data: [486, 492, 516, 517, 432]
  },
  {
    name: '沈阳师范大学',
    type: 'line',
    smooth: true,
    // stack: 'Total',
    data: [491, 495, 518, 523, 432]
  }
]

const option = {
  animationDuration: 10000,
  title: {
    text: '各个学校分数线分布'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['二本线', '同位分','哈尔滨商业大学', '哈尔滨师范大学', '湖州师范学院', '辽宁科技大学','山西大同大学']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2017', '2018', '2019', '2020', '2021']
  },
  yAxis: {
    type: 'value',
    min: 400,
    max: 530,
  },
  series: chartData,
};


function App() {
  useEffect(() => {
    var myChart = echarts.init(document.getElementById('App'));
    myChart.setOption(option);
  }, [])
  return (
    <div className="App" id="App">
    </div>
  );
}

export default App;
