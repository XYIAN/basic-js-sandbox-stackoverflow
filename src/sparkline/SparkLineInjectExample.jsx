import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

export const SparkLineInjectExample = ({
  id,
  height,
  width,
  color,
  data,
  type,
  currentColor,
}) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="y"
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};
