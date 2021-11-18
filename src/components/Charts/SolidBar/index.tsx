import { BarChart, Bar, XAxis, YAxis, LabelList } from 'recharts';
import { getColorFromGradient } from '../../../utils/colors';

export const SolidBar = ({ width = 150, height = 24, label, value, max = 100 }: any) => {
  const data = [{
    name: label,
    value: value,
  }];
  const fill = getColorFromGradient('rgb(173,220,145)', 'rgb(74,119,41)', value / max);

  return (
    <BarChart width={width}
      height={height}
      data={data}
      layout="vertical"
      margin={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}>
      <XAxis type="number" domain={[0, max]} hide />
      <YAxis type="category" dataKey="name" hide />
      <Bar dataKey="value" barSize={height} fill={fill} isAnimationActive={false}>
        <LabelList dataKey="name" position="insideLeft" fontSize="12" />
      </Bar>
    </BarChart>
  );
}