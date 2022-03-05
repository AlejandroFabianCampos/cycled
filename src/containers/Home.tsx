import React, { useState } from 'react'

export function Home() {
  const [pairedDevice, setPairedDevice] = useState(false)
  const [currentPower, setCurrentPower] = useState(0)

  const pairDevice = () => {
    (navigator as any).bluetooth.requestDevice({
      filters: [{ services: ["cycling_power"] }]
    })
      .then((device: any) => {
        return device.gatt.connect()
      })
      .then(async (server: any) => {
        setPairedDevice(true)
        const service = await server.getPrimaryService("00001818-0000-1000-8000-00805f9b34fb")
        const characteristics = await service.getCharacteristics()
        await characteristics[0].startNotifications();
        characteristics[0].addEventListener('characteristicvaluechanged', (e: any) => {
          setCurrentPower(e.target!.value.getInt8(2))
        })
      })
      .catch((error: Error) => {
        setPairedDevice(false)
        console.error(error);
      });
  }
  return (
    <div>
      <div>Home</div>
      <button onClick={pairDevice}>Pair bluetooth power meter</button>
      <br />
      <span>Paired device: {pairedDevice ? "true" : "false"}</span>
      <br />
      <span>Current Power: {currentPower}</span>
    </div>
  )
}
