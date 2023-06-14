import ChartBar from "./ChartBar";
import "./Chart.css"

const Chart = props => {


    const totalMaximum = Math.max(...props.dataPoints.map(data => data.value));

    return(
        <div className="chart">
            {
                props.dataPoints.map(
                    dataPoint => {
                        return <ChartBar key={dataPoint.label} data={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/>
                    }
                )
            }
        </div>
    )
}

export default Chart;