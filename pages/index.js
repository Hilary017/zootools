
import Chart from "chart.js/auto";
import { useEffect } from "react";
import Image from "next/image";

import united from "../public/images/U.S.png";
import germany from "../public/images/Germany.png";
import japan from "../public/images/Japan.png";
import india from "../public/images/India.png";
import netherlands from "../public/images/Netherlands.png";
import earth from "../public/images/earth.png";
import Barchart from "@/components/Barchart";
import Tabs from "@/components/Tabs";
import Summary from "@/components/Summary";
import Stats from "@/components/Stats";

const HomePage = () => {
    useEffect(() => {
            const ctx = document.getElementById('chart').getContext('2d');
    
            if (ctx) {
                const existingChart = Chart.getChart(ctx);
          
                if (existingChart) {
                  existingChart.destroy();
                }
            }
            new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ['July 22', 'July 23', 'July 24', 
                          'July 25', 'July 26', 'July 27', 
                            'July 28', 'July 29', 'July 30', 
                            'July 31', 'August 1', 'August 2',
                            'August 3', 'August 4', 'August 5', 
                            'August 6', 'August 7', 'August 8',
                            'August 9', 'August 10', 'August 11',
                            'August 12', 'August 13', 'August 14', 
                            'August 15', 'August 16', 'August 17',
                            'August 18', 'August 19', 'August 10',
                            'August 21', 'August 22', 'August 23', 
                            'August 24', 'August 25', 'August 26',
                          ],
                datasets: [{
                  label: 'Signups',
                  data: [2, 4, 2, 
                          4, 8, 12, 8, 
                            10, 8, 6, 8,
                              10, 8, 10, 8, 
                                10, 12, 14, 12, 
                                  16, 14, 16, 18, 
                                    17, 18, 20, 18,
                                     17, 18, 20, 19, 
                                      21, 20, 22, 24, 26 
                          ],
                  backgroundColor: 'rgb(255, 211, 11)',
                  color: "black",
                  barThickness: 10,
                  borderRadius: 10
                }]
              },
              options: {
                scales: {
                  x: {
                    display: false 
                  },
                  y: {
                    display: false 
                  }
                },
                plugins: {
                  tooltip: {
                    backgroundColor: 'black', 
                    bodyColor: 'white',
                    yAlign: 'bottom',
                    boxShadow: '10px 20px 50px rgba(10, 10, 10, 0.5)',
                    titleFont: {
                        size: 14,
                    },
                    titleColor: "white",
                    bodyFont: {
                        color: 'red'
                    },
                    displayColors: false,
                    padding: 10,
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)',
                    style: {
                        textAlign: 'center'
                    }
                  },
                  legend: {
                    display: false, 
                  },
                  label: {
                    display: false
                  },
                  title: {
                    display: false,
                    text: "August 10"
                  }
                }
              }
            });
        }, [])


    return (
        <div style={{width: "960px", height: "100%"}} className="bg-light-grey mx-auto my-10 px-10 py-8">
            <Tabs />
            <Barchart />
            <Summary />
            <Stats />
        </div>
      )
}

export default HomePage;