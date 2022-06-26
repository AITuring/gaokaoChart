import { useEffect } from 'react';
import './App.css';
import * as echarts from 'echarts';


const handleColors = () => {
  let color = '';
  let r=Math.floor(Math.random()*256);
  let g=Math.floor(Math.random()*256);
  let b=Math.floor(Math.random()*256);
  color = `rgb(${r},${g},${b})`;
  return color;//所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
}


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
    data: [460, 445, 474, 476, 455],
    areaStyle: {
      opacity: 0.8,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [ //这里是渐变的角度，上下左右四个方向
        {
          offset: 0,
          color: 'rgb(128, 255, 165)'//这里是渐变色的起始颜色
        },
        {
          offset: 1,
          color: 'rgb(1, 191, 236)'// 这里是渐变色的结束颜色
        }
      ])
    },
  },
  {
    name: '哈尔滨商业大学',
    type: 'line',
    smooth: true,
    itemStyle:{color: handleColors()},
    // stack: 'Total',
    data: [488, 492, 513, 514, 432]
  },
  {
    name: '哈尔滨师范大学',
    type: 'line',
    smooth: true,
    itemStyle:{color: handleColors()},
    // stack: 'Total',
    data: [493, 497, 511, 513, 460]
  },
  {
    name: '湖州师范学院',
    type: 'line',
    smooth: true,
    itemStyle:{color: handleColors()},
    // stack: 'Total',
    data: [485, 490, 514, 514, 464]
  },
  {
    name: '辽宁科技大学',
    type: 'line',
    smooth: true,
    itemStyle:{color: handleColors()},
    // stack: 'Total',
    data: [489, 496, 517, 518, 440]
  },
  {
    name: '山西大同大学',
    type: 'line',
    smooth: true,
    itemStyle:{color: handleColors()},
    // stack: 'Total',
    data: [486, 492, 516, 517, 432]
  },
  {
    name: '沈阳师范大学',
    type: 'line',
    smooth: true,
    itemStyle:{color: handleColors()},
    // stack: 'Total',
    data: [491, 495, 518, 523, 432]
  },
  {
    name: '景德镇陶瓷大学',
    type: 'line',
    smooth: true,
    itemStyle:{color: handleColors()},
    // stack: 'Total',
    data: [476,481,502,506,459]
  },
  {
    name: '邯郸学院',
    type: 'line',
    smooth: true,
    itemStyle:{color: handleColors()},
    // stack: 'Total',
    data: [466,462,489,492,454]
  },
  {
    name: '许昌学院',
    type: 'line',
    smooth: true,
    // areaStyle: {type: 'default',color:'#dcdfee'},
    itemStyle:{color: handleColors()},
    // stack: 'Total',
    data: [461,466,490,495,436],
  },
  {
    name: '赣东学院',
    type: 'line',
    smooth: true,
    // areaStyle: {type: 'default',color:'#dcdfee'},
    itemStyle:{color: handleColors()},
    // stack: 'Total',
    data: [403,411,457,466,468],
  },
  {
    name: '黑龙江工业学院',
    type: 'line',
    smooth: true,
    // areaStyle: {type: 'default',color:'#dcdfee'},
    itemStyle:{color: handleColors()},
    // stack: 'Total',
    data: [469,460,482,485,455],
  },
  {
    name: '黄冈师范学院',
    type: 'line',
    smooth: true,
    // areaStyle: {type: 'default',color:'#dcdfee'},
    itemStyle:{color: handleColors()},
    // stack: 'Total',
    data: [470,474,498,501,482],
  }
]

const option = {
  // animationDuration: 10000,
  // title: {
  //   text: '各个学校分数线分布'
  // },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['二本线', '同位分','哈尔滨商业大学', '哈尔滨师范大学', '湖州师范学院', '辽宁科技大学','山西大同大学', '沈阳师范大学','景德镇陶瓷大学','邯郸学院','许昌学院','赣东学院','黑龙江工业学院','黄冈师范学院'],
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
