// angular import
import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
// project import
import tableData from "src/fake-data/default-data.json";
import { SharedModule } from "src/app/theme/shared/shared.module";
// bootstrap import
import { NgbNavChangeEvent } from "@ng-bootstrap/ng-bootstrap";
// third party
import { NgApexchartsModule } from "ng-apexcharts";
import ApexCharts from "apexcharts";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexGrid,
  ApexLegend,
} from "ng-apexcharts";
import { DashboardService } from "@shared/services/dashboard.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { SaleRateService } from "@shared/services/saleRate.service";
import { CustomPaginationComponent } from "@core/components/custom-pagination/custom-pagination.component";
import moment from "moment";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  colors: string[];
  stroke: ApexStroke;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  legend: ApexLegend;
};

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    CommonModule,
    NgApexchartsModule,
    SharedModule,
    CustomPaginationComponent,
  ],
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export default class DashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  chartOptions_4: Partial<ChartOptions>;
  chartOptions_5: Partial<ChartOptions>;
  chartOptions_6: Partial<ChartOptions>;

  monthChart;
  weekChart;
  dayOfWeekChartOptions: Partial<ChartOptions>;
  salesStatisticsChartOptions: Partial<ChartOptions>;
  monthChartOptions: Partial<ChartOptions>;
  topCategoriesOptions: Partial<ChartOptions>;
  lowCategoriesOptions: Partial<ChartOptions>;
  dayOfWeekCount: number = 0;
  dayOfWeekAmount: number = 0;

  dashboardStats: any = {};
  search: any = "";
  invoiceFilterArray = [
    {
      label: "Year",
      value: "year",
    },
    {
      label: "Month",
      value: "month",
    },
    {
      label: "Week",
      value: "week",
    },
    {
      label: "Date",
      value: "date",
    },
  ];
  filterType: any = "";
  endDate: any = moment().format("YYYY-MM-DD");

  startDate: any = moment().subtract(1, "year").format("YYYY-MM-DD");
  currentDate: any = moment().format("YYYY-MM-DD");
  startDateWeekOfDay: any = moment().subtract(1, "year").format("YYYY-MM-DD");
  endDateWeekOfDay: any = moment().format("YYYY-MM-DD");
  chartData: any = [];
  chartDataX_axis: any = [];
  todayData: any;
  yearlyOrderValue = {
    "Apr": 0,
    "May": 0,
    "Jun": 0,
    "Jul": 0,
    "Aug": 0,
    "Sept": 0,
    "Oct": 0,
    "Nov": 0,
    "Dec": 0,
    "Jan": 0,
    "Feb": 0,
    "Mar": 0,
  }
  yearlyInvoiceCount = {
    "Apr": 0,
    "May": 0,
    "Jun": 0,
    "Jul": 0,
    "Aug": 0,
    "Sept": 0,
    "Oct": 0,
    "Nov": 0,
    "Dec": 0,
    "Jan": 0,
    "Feb": 0,
    "Mar": 0,
  }

  // constructor
  constructor(
    private dashboardService: DashboardService,
    private saleRateService: SaleRateService,
    private spinner: NgxSpinnerService,
    private toastService: ToastrService
  ) {

    this.monthChartOptions = structuredClone({
      chart: {
        type: "bar",
        height: 430,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: 25,
          borderRadius: 4,
        },
      },
      stroke: {
        show: true,
        width: 5,
        colors: ["transparent"],
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "top",
        horizontalAlign: "center",
        show: true,
        fontFamily: `'Public Sans', sans-serif`,
        offsetX: 10,
        offsetY: 10,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          width: 10,
          height: 10,
          radius: 50,
        },
        itemMargin: {
          horizontal: 15,
          vertical: 5,
        },
      },
      colors: ["#cd007e", "#af6c3e"],
      series: [
        {
          name: "Invoice Count",
          data: [],
        },
        {
          name: "Invoice Revenue",
          data: [],
        },
      ],
      xaxis: {
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
          "Jan",
          "Feb",
          "Mar",
        ],
      },
    });
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.weekChart = new ApexCharts(
    //     document.querySelector("#visitor-chart"),
    //     this.weekOptions
    //   );
    //   this.weekChart.render();
    // }, 500);
    this.getDashboardDetails();
    // this.getDayWiseSales();
    // this.getTodayDataByCurrentDate();
  }
  groupByMonth(data) {

    let yearlyData = data.reduce((result, order) => {
      const date = new Date(order.createdAt);
      const month = date.toLocaleString('default', { month: 'short' }); // e.g., "August 2024"

      if (!result[month]) {
        result[month] = [];
      }
      result[month].push(order);

      return result;
    }, {});
    for (const key in yearlyData) {
      if (yearlyData[key].length) {
        this.yearlyOrderValue[key] = yearlyData[key].reduce((accu, curr) => accu + (curr.amount ?? 0), 0)
        this.yearlyInvoiceCount[key] = yearlyData[key].length;
      }
    }
  }

  getDashboardDetails(): void {
    this.spinner.show();
    this.dashboardService.getAll({}).subscribe((success) => {
      
      this.dashboardStats = success;
      this.groupByMonth(success.yearlyOrder);
      this.monthChartOptions.series[0].data = [this.yearlyInvoiceCount['Apr'], this.yearlyInvoiceCount['May'], this.yearlyInvoiceCount['Jun'], this.yearlyInvoiceCount['Jul'], this.yearlyInvoiceCount['Aug'], this.yearlyInvoiceCount['Sept'], this.yearlyInvoiceCount['Oct'], this.yearlyInvoiceCount['Nov'], this.yearlyInvoiceCount['Dec'], this.yearlyInvoiceCount['Jan'], this.yearlyInvoiceCount['Feb'], this.yearlyInvoiceCount['Mar']];

      this.monthChartOptions.series[1].data = [this.yearlyOrderValue['Apr'], this.yearlyOrderValue['May'], this.yearlyOrderValue['Jun'], this.yearlyOrderValue['Jul'], this.yearlyOrderValue['Aug'], this.yearlyOrderValue['Sept'], this.yearlyOrderValue['Oct'], this.yearlyOrderValue['Nov'], this.yearlyOrderValue['Dec'], this.yearlyOrderValue['Jan'], this.yearlyOrderValue['Feb'], this.yearlyOrderValue['Mar']];
      this.monthChartOptions = { ...this.monthChartOptions }

      // this.onNavChangeOfProfit();
      // this.topCategoriesOptions.xaxis = {
      //   categories: success.categoryWiseSaleData.lowCategories.map(
      //     (x: any) => x.categoryName
      //   ),
      // };
      // this.topCategoriesOptions.series = [
      //   {
      //     name: "Top 5 Low Categories Amount",
      //     data: success.categoryWiseSaleData.lowCategories.map(
      //       (x: any) => x.totalValue
      //     ),
      //   },
      //   {
      //     name: "Top 5 Low Categories Quantity",
      //     data: success.categoryWiseSaleData.lowCategories.map(
      //       (x: any) => x.quantity
      //     ),
      //   },
      // ];
      // this.lowCategoriesOptions.series = [
      //   {
      //     name: "Top 5 High Categories Amount",
      //     data: success.categoryWiseSaleData.topCategories.map(
      //       (x: any) => x.totalValue
      //     ),
      //   },
      //   {
      //     name: "Top 5 High Categories Quantity",
      //     data: success.categoryWiseSaleData.topCategories.map(
      //       (x: any) => x.quantity
      //     ),
      //   },
      // ];
      // this.lowCategoriesOptions.xaxis = {
      //   categories: success.categoryWiseSaleData.topCategories.map(
      //     (x: any) => x.categoryName
      //   ),
      // };
      // this.monthChartOptions.series = [
      //   {
      //     name: "Invoice Amount",
      //     data: success.monthlyInvoiceData.data.map((x: any) => x.amount),
      //   },
      // ];
      this.spinner.hide();
    });
  }

  getDayWiseSales() {
    this.spinner.show();
    this.dashboardService
      .getDayWiseSales({
        startDate: this.startDateWeekOfDay,
        endDate: this.endDateWeekOfDay,
      })
      .subscribe((success: any) => {
        this.spinner.hide();
        this.dayOfWeekCount = success.totalCount;
        this.dayOfWeekAmount = success.totalAmount;
        this.dayOfWeekChartOptions.series =
          this.dayOfWeekChartOptions.series.map((x, i) => {
            return {
              name: x.name,
              data: success.daysValue.map((x: any) =>
                i == 0 ? x.count : x.amount
              ),
            };
          });
        this.dayOfWeekChartOptions.xaxis.categories = success.daysValue.map(
          (x: any) => x.dayOfWeek
        );
      });
  }
  getTodayDataByCurrentDate() {
    this.spinner.show();
    this.dashboardService
      .getTodayDataByCurrentDate({
        currentDate: this.currentDate,
      })
      .subscribe((success: any) => {
        this.spinner.hide();
        this.todayData = success;
      });
  }
  onNavChangeOfProfit(title = "week") {
    this.salesStatisticsChartOptions.series = [
      {
        name: "Statistic",
        data: this.dashboardStats.dashCardStats.map((x: any) => x[title]),
      },
    ];
    this.salesStatisticsChartOptions.xaxis.categories =
      this.dashboardStats.dashCardStats.map((x: any) => x.title);
  }
  checkLimit() {
    if (this.filterType == "year") {
      let startYear = moment(this.startDate);
      let endYear = moment(this.endDate);
      const yearDiff = endYear.diff(startYear, "years");

      if (yearDiff > 12) {
        this.startDate = null;
        this.endDate = null;
        this.toastService.warning(
          "Year Range can not be Greater than 12 Years"
        );
      }
    }
    if (this.filterType == "month") {
      let startMonth = moment(this.startDate);
      let endMonth = moment(this.endDate);
      const MonthDiff = endMonth.diff(startMonth, "months");
      if (MonthDiff > 12) {
        this.startDate = null;
        this.endDate = null;
        this.toastService.warning(
          "Month Range can not be Greater than 12 Months"
        );
      }
    }
    if (this.filterType == "week") {
      let startWeek = moment(this.startDate);
      let endWeek = moment(this.endDate);
      const WeekDiff = endWeek.diff(startWeek, "days");
      if (WeekDiff > 7) {
        this.startDate = null;
        this.endDate = null;
        this.toastService.warning("Range can not be Greater than 7 Days");
      }
    }
  }
  transformToArray(obj: any): { key: string; value: any }[] {
    return Object.keys(obj).map((key) => ({ key: key, value: obj[key] }));
  }

  // public method
  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 1) {
      setTimeout(() => {
        this.weekChart = new ApexCharts(
          document.querySelector("#visitor-chart"),
          this.weekOptions
        );
        this.weekChart.render();
      }, 200);
    }

    if (changeEvent.nextId === 2) {
      setTimeout(() => {
        this.monthChart = new ApexCharts(
          document.querySelector("#visitor-chart-1"),
          this.monthOptions
        );
        this.monthChart.render();
      }, 200);
    }
  }

  monthOptions = {
    chart: {
      height: 450,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#1890ff", "#13c2c2"],
    series: [
      {
        name: "Page Views",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35],
      },
      {
        name: "Sessions",
        data: [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  weekOptions = {
    chart: {
      height: 450,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#1890ff", "#13c2c2"],
    series: [
      {
        name: "Page Views",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Sessions",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  };

  card = [
    {
      title: "Total Page Views",
      amount: "4,42,236",
      background: "bg-light-primary ",
      border: "border-primary",
      icon: "ti ti-trending-up",
      percentage: "59.3%",
      color: "text-primary",
      number: "35,000",
    },
    {
      title: "Total Users",
      amount: "78,250",
      background: "bg-light-success ",
      border: "border-success",
      icon: "ti ti-trending-up",
      percentage: "70.5%",
      color: "text-success",
      number: "8,900",
    },
    {
      title: "Total Order",
      amount: "18,800",
      background: "bg-light-warning ",
      border: "border-warning",
      icon: "ti ti-trending-down",
      percentage: "27.4%",
      color: "text-warning",
      number: "1,943",
    },
    {
      title: "Total Sales",
      amount: "$35,078",
      background: "bg-light-danger ",
      border: "border-danger",
      icon: "ti ti-trending-down",
      percentage: "27.4%",
      color: "text-danger",
      number: "$20,395",
    },
  ];

  tables = tableData;

  transaction = [
    {
      background: "text-success bg-light-success",
      icon: "ti ti-gift",
      title: "Order #002434",
      time: "Today, 2:00 AM",
      amount: "+ $1,430",
      percentage: "78%",
    },
    {
      background: "text-primary bg-light-primary",
      icon: "ti ti-message-circle",
      title: "Order #984947",
      time: "5 August, 1:45 PM",
      amount: "- $302",
      percentage: "8%",
    },
    {
      background: "text-danger bg-light-danger",
      icon: "ti ti-settings",
      title: "Order #988784",
      time: "7 hours ago",
      amount: "- $682",
      percentage: "16%",
    },
  ];
}
