import React, { FunctionComponent } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { PowerDatapoint } from '../../Home'

interface PowerBarProps {
  data: PowerDatapoint[]
}

export const PowerBar: FunctionComponent<PowerBarProps> = ({ data }) => {
  return (
    <div style={{ height: 200, borderWidth: 1, borderColor: 'black', border: 'solid' }}>
      <ResponsiveBar
        data={data}
        keys={[
          'power',
        ]}
        padding={0}
        indexBy="time"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }} role="application"
        ariaLabel="Power Histogram"
      />
    </div>
  )
}
