import React, { Component } from 'react'
declare module "src/abstract-chart" {
    export default AbstractChart;
    class AbstractChart extends React.Component{
        calcScaler: (data: any) => number;
        renderHorizontalLines: (config: any) => any[];
        renderHorizontalLabels: (config: any) => any[];
        renderVerticalLabels: (config: any) => any;
        renderVerticalLines: (config: any) => any[];
        renderDefs: (config: any) => any;
    }
}
declare module "src/line-chart" {
    export default LineChart;
    class LineChart extends AbstractChart {
        renderDots: (config: any) => any[];
        renderShadow: (config: any) => any[];
        renderLine: (config: any) => any[];
        getBezierLinePoints: (dataset: any, config: any) => string;
        renderBezierLine: (config: any) => any[];
        renderBezierShadow: (config: any) => any[];
        render(): any;
    }
    import AbstractChart from "src/abstract-chart";
}
declare module "src/bar-chart" {
    export default BarChart;
    class BarChart extends AbstractChart {
        renderBars: (config: any) => any;
        renderBarTops: (config: any) => any;
        render(): any;
    }
    import AbstractChart from "src/abstract-chart";
}
declare module "src/pie-chart" {
    export default PieChart;
    class PieChart extends AbstractChart {
        render(): any;
    }
    import AbstractChart from "src/abstract-chart";
}
declare module "src/progress-chart" {
    export default ProgressChart;
    class ProgressChart extends AbstractChart {
        render(): any;
    }
    import AbstractChart from "src/abstract-chart";
}
declare module "src/contribution-graph/constants" {
    export const MILLISECONDS_IN_ONE_DAY: number;
    export const DAYS_IN_WEEK: 7;
    export const MONTH_LABELS: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
    };
}
declare module "src/contribution-graph/dateHelpers" {
    export function shiftDate(date: any, numDays: any): Date;
    export function getBeginningTimeForDate(date: any): Date;
    export function convertToDate(obj: any): Date;
}
declare module "src/contribution-graph/index" {
    export default ContributionGraph;
    class ContributionGraph extends AbstractChart {
        constructor(props: any);
        state: {
            valueCache: any;
        };
        componentWillReceiveProps(nextProps: any): void;
        getSquareSizeWithGutter(): any;
        getMonthLabelSize(): any;
        getStartDate(): Date;
        getEndDate(): Date;
        getStartDateWithEmptyDays(): Date;
        getNumEmptyDaysAtStart(): number;
        getNumEmptyDaysAtEnd(): number;
        getWeekCount(): number;
        getWeekWidth(): number;
        getWidth(): number;
        getHeight(): number;
        getValueCache(values: any): any;
        getValueForIndex(index: any): any;
        getClassNameForIndex(index: any): any;
        getTitleForIndex(index: any): any;
        getTooltipDataAttrsForIndex(index: any): any;
        getTooltipDataAttrsForValue(value: any): any;
        getTransformForWeek(weekIndex: any): number[];
        getTransformForMonthLabels(): string;
        getTransformForAllWeeks(): string;
        getViewBox(): string;
        getSquareCoordinates(dayIndex: any): number[];
        getMonthLabelCoordinates(weekIndex: any): number[];
        handleClick(value: any): void;
        renderSquare(dayIndex: any, index: any): any;
        renderWeek(weekIndex: any): any;
        renderAllWeeks(): any;
        renderMonthLabels(): any;
        render(): any;
    }
    namespace ContributionGraph {
        namespace ViewPropTypes {
            const values: any;
            const numDays: any;
            const endDate: any;
            const gutterSize: any;
            const squareSize: any;
            const horizontal: any;
            const showMonthLabels: any;
            const showOutOfRangeDays: any;
            const tooltipDataAttrs: any;
            const titleForValue: any;
            const classForValue: any;
            const onClick: any;
        }
        namespace defaultProps {
            const numDays_1: number;
            export { numDays_1 as numDays };
            const endDate_1: Date;
            export { endDate_1 as endDate };
            const gutterSize_1: number;
            export { gutterSize_1 as gutterSize };
            export { SQUARE_SIZE as squareSize };
            const horizontal_1: boolean;
            export { horizontal_1 as horizontal };
            const showMonthLabels_1: boolean;
            export { showMonthLabels_1 as showMonthLabels };
            const showOutOfRangeDays_1: boolean;
            export { showOutOfRangeDays_1 as showOutOfRangeDays };
            export function classForValue_1(value: any): "black" | "#8cc665";
            export { classForValue_1 as classForValue };
        }
    }
    import AbstractChart from "src/abstract-chart";
    const SQUARE_SIZE: 20;
}
declare module "expo-chart-kit" {
    import AbstractChart from "src/abstract-chart";
    import BarChart from "src/bar-chart";
    import LineChart from "src/line-chart";
    import PieChart from "src/pie-chart";
    import ProgressChart from "src/progress-chart";
    import ContributionGraph from "src/contribution-graph";
    export { AbstractChart, BarChart, LineChart, PieChart, ProgressChart, ContributionGraph };
}
