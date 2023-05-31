import { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts'
import useSystemStore from '@/store/modules/system.ts'
import type { ECharts } from 'echarts'

interface Props {
    height: string
}

export default function Line(props: Props) {
    const chartRef = useRef(null)
    const systemStore = useSystemStore()

    const [chart, setChart] = useState<ECharts>()

    const options = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    }
    useEffect(() => {
        if (chartRef.current) {
            const chart = echarts.init(chartRef.current)
            chart?.setOption(options)
            setChart(chart)
            return () => {
                chart?.dispose()
            }
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            chart?.resize()
        }, 200)
        return () => {
            clearTimeout(timer)
        }
    }, [chart, systemStore.width])

    return <div ref={chartRef} style={{ height: props.height }}></div>
}
