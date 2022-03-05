import { BarDatum } from "@nivo/bar";
import React, { useState } from "react";
import { PowerBar } from "./components/PowerBar.tsx/PowerBar";
import { Background, Button, HomeTitle } from "../Home.styles";

export interface PowerDatapoint extends BarDatum {
  time: number;
  power: number;
}

export function Home() {
  const [pairedDevice, setPairedDevice] = useState(false);
  const [currentPower, setCurrentPower] = useState(0);
  const [historicalPower, setHistoricalPower] = useState<PowerDatapoint[]>([]);

  const pushPowerDatapoint = (power: number) => {
    setCurrentPower(power);
    setHistoricalPower((powerHistory: any) => [
      ...powerHistory,
      {
        time: powerHistory.length + 1,
        power,
      },
    ]);
  };

  const pairDevice = () => {
    (navigator as any).bluetooth
      .requestDevice({
        filters: [{ services: ["cycling_power"] }],
      })
      .then((device: any) => {
        return device.gatt.connect();
      })
      .then(async (server: any) => {
        setPairedDevice(true);
        const service = await server.getPrimaryService(
          "00001818-0000-1000-8000-00805f9b34fb"
        );
        const characteristics = await service.getCharacteristics();
        await characteristics[0].startNotifications();
        characteristics[0].addEventListener(
          "characteristicvaluechanged",
          (e: any) => {
            pushPowerDatapoint(e.target!.value.getInt8(2));
          }
        );
      })
      .catch((error: Error) => {
        setPairedDevice(false);
        console.error(error);
      });
  };

  return (
    <Background>
      <HomeTitle>Home</HomeTitle>
      <Button onClick={pairDevice}>Pair bluetooth power meter</Button>
      <br />
      <span>Paired device: {pairedDevice ? "true" : "false"}</span>
      <br />
      <span>Current Power: {currentPower}</span>
      <br />
      <PowerBar data={historicalPower} />
    </Background>
  );
}
