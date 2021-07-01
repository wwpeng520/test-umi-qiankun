import { useState } from 'react';

import {
  BorderBox8,
  Decoration9,
  ActiveRingChart,
  FlylineChartEnhanced,
  ScrollRankingBoard,
  DigitalFlop,
} from '@jiaminghi/data-view-react';
import { Button } from 'antd';

const mapBg = require('@/assets/images/map.jpg');
const flylineConfig = {
  points: [
    { name: '郑州', coordinate: [0.48, 0.35] },
    { name: '新乡', coordinate: [0.52, 0.23] },
    { name: '焦作', coordinate: [0.43, 0.29] },
    { name: '开封', coordinate: [0.59, 0.35] },
    { name: '许昌', coordinate: [0.53, 0.47] },
    { name: '平顶山', coordinate: [0.45, 0.54] },
    { name: '洛阳', coordinate: [0.36, 0.38] },
    { name: '周口', coordinate: [0.62, 0.55] },
    { name: '漯河', coordinate: [0.56, 0.56] },
    { name: '南阳', coordinate: [0.37, 0.66] },
    { name: '信阳', coordinate: [0.55, 0.81] },
    { name: '驻马店', coordinate: [0.55, 0.67] },
    { name: '济源', coordinate: [0.37, 0.29] },
    { name: '三门峡', coordinate: [0.2, 0.36] },
    { name: '商丘', coordinate: [0.76, 0.41] },
    { name: '鹤壁', coordinate: [0.59, 0.18] },
    { name: '濮阳', coordinate: [0.68, 0.17] },
    { name: '安阳', coordinate: [0.59, 0.1] },
  ],
  lines: [
    { source: '新乡', target: '郑州' },
    { source: '焦作', target: '郑州' },
    { source: '开封', target: '郑州' },
    { source: '许昌', target: '郑州' },
    { source: '平顶山', target: '郑州' },
    { source: '洛阳', target: '郑州' },
    { source: '周口', target: '郑州' },
    { source: '漯河', target: '郑州' },
    { source: '南阳', target: '郑州' },
    { source: '信阳', target: '郑州' },
    { source: '驻马店', target: '郑州' },
    { source: '济源', target: '郑州' },
    { source: '三门峡', target: '郑州' },
    { source: '商丘', target: '郑州' },
    { source: '鹤壁', target: '郑州' },
    { source: '濮阳', target: '郑州' },
    { source: '安阳', target: '郑州' },
  ],
  bgImgSrc: mapBg,
};

const scrollRankingBoardConfig = {
  data: [
    { name: '周口', value: 55 },
    { name: '南阳', value: 120 },
    { name: '西峡', value: 78 },
    { name: '驻马店', value: 66 },
    { name: '新乡', value: 80 },
    { name: '信阳', value: 45 },
    { name: '漯河', value: 29 },
  ],
};

function formatter(number: number) {
  const numbers = number.toString().split('').reverse();
  const segs = [];

  while (numbers.length) segs.push(numbers.splice(0, 3).join(''));

  return segs.join(',').split('').reverse().join('');
}

export default function App() {
  const [count, setCount] = useState(1243545);
  const digitalFlopConfig = {
    number: [count],
    content: '{nt}个',
    formatter,
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ScrollRankingBoard
        config={scrollRankingBoardConfig}
        style={{ width: '500px', height: '300px' }}
      />
      <DigitalFlop
        config={digitalFlopConfig}
        style={{ width: '200px', height: '50px' }}
      />
      <Button onClick={() => setCount(Math.floor(Math.random() * 1000000))}>
        改变数字
      </Button>
      <BorderBox8 reverse={true} style={{ width: '150px', height: '150px' }}>
        BorderBox8
      </BorderBox8>
      <Decoration9 style={{ width: '150px', height: '150px' }}>66%</Decoration9>
      <ActiveRingChart
        config={{}}
        style={{ width: '300px', height: '300px' }}
      />
      <FlylineChartEnhanced
        config={flylineConfig}
        style={{ width: '400px', height: '300px' }}
      />
    </div>
  );
}
