import { AxisBottom } from "@visx/axis";
import { Group } from "@visx/group";
import { AnyD3Scale, scaleBand, scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";

export const data = {
    bins: [
        {
            maximum: 134,
            num_points: 21468,
        },
        {
            maximum: 141.08333333333334,
            minimum: 134,
            num_points: 59190,
        },
        {
            maximum: 148.16666666666669,
            minimum: 141.08333333333334,
            num_points: 117951,
        },
        {
            maximum: 155.25000000000003,
            minimum: 148.16666666666669,
            num_points: 194392,
        },
        {
            maximum: 162.33333333333337,
            minimum: 155.25000000000003,
            num_points: 224824,
        },
        {
            maximum: 169.4166666666667,
            minimum: 162.33333333333337,
            num_points: 219926,
        },
        {
            maximum: 176.50000000000006,
            minimum: 169.4166666666667,
            num_points: 439616,
        },
        {
            maximum: 183.5833333333334,
            minimum: 176.50000000000006,
            num_points: 481126,
        },
        {
            maximum: 190.66666666666674,
            minimum: 183.5833333333334,
            num_points: 726915,
        },
        {
            maximum: 197.75000000000009,
            minimum: 190.66666666666674,
            num_points: 529440,
        },
        {
            maximum: 204.83333333333343,
            minimum: 197.75000000000009,
            num_points: 257382,
        },
        {
            maximum: 211.91666666666677,
            minimum: 204.83333333333343,
            num_points: 8059,
        },
        {
            maximum: 219.0000000000001,
            minimum: 211.91666666666677,
            num_points: 254,
        },
        {
            minimum: 219,
            num_points: 190,
        },
    ],
    num_points: 3280733,
} as const;

const width = 400;
const height = 400;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };

const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

type Bin = {
    minimum?: number;
    maximum?: number;
    num_points: number;
};

const x = (d: Bin) => {
    if (d.minimum !== undefined && d.maximum !== undefined)
        return Math.floor((d.minimum + d.maximum) / 2);
    if (d.maximum !== undefined) return d.maximum;
    if (d.minimum !== undefined) return d.minimum;
    throw new TypeError(
        "Expected bin to have either minimum or maximum: " + JSON.stringify(d)
    );
};
const y = (d: Bin) => d.num_points;

export const Histogram: React.FC = () => {
    const xScale = scaleBand({
        range: [0, xMax],
        round: true,
        domain: data.bins.map(x),
        padding: 0.4,
    });

    const yScale = scaleLinear({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.bins.map(y))],
    });

    const compose =
        (scale: AnyD3Scale, accessor: (d: Bin) => number) => (data: Bin) =>
            scale(accessor(data));
    const xPoint = compose(xScale, x);
    const yPoint = compose(yScale, y);

    return (
        <svg
            viewBox={`0 0 ${height} ${width}`}
            className="border-gray-300 border p-6 pb-2 pr-2 max-w-full bg-white"
        >
            {data.bins.map((d, i) => {
                const barHeight = yMax - yPoint(d);
                return (
                    <Group key={`bar-${i}`}>
                        <Bar
                            x={xPoint(d)}
                            y={yMax - barHeight}
                            height={barHeight}
                            width={xScale.bandwidth()}
                            className="fill-primary-500"
                        />
                    </Group>
                );
            })}
            <AxisBottom scale={xScale} labelOffset={15} top={yMax} />
        </svg>
    );
};
