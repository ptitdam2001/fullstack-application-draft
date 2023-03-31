import { BarChartOutlined, HeatMapOutlined, RadarChartOutlined } from '@ant-design/icons'
import { MenuItemProp } from '../types'

export default [
  {
    label: 'First page',
    link: '/my-first-page',
    icon: <RadarChartOutlined />
  },
  {
    label: 'Second page',
    link: '/my-second-page',
    icon: <HeatMapOutlined />,
    children: [
      {
        label: 'Second bis',
        link: '/my-second-page/bis',
        icon: <BarChartOutlined />
      }
    ]
  }
] as MenuItemProp[]
