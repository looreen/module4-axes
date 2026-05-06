import { data } from "./gapminder";
import { scaleLinear } from "d3";

const MARGIN = { top: 20, right: 20, bottom: 50, left: 50 };
const width = 500;
const height = 300;

export default function App() {
  const boundsWidth = width - MARGIN.left - MARGIN.right;
  const boundsHeight = height - MARGIN.bottom - MARGIN.top;

  const xScale = scaleLinear().range([0, boundsWidth]).domain([0, 100]);
  const yScale = scaleLinear().range([boundsHeight, 0]).domain([0, 100]);

  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill="orange" />
      <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
        <rect width={boundsWidth} height={boundsHeight} fill="green" />
      </g>
    </svg>
  );
}
