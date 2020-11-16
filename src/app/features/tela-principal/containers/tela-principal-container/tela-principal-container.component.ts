import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-principal-container',
  templateUrl: './tela-principal-container.component.html',
  styleUrls: ['./tela-principal-container.component.css']
})
export class TelaPrincipalContainerComponent implements OnInit {

  lineData: any;

  barData: any;

  pieData: any;

  polarData: any;

  radarData: any;

  ngOnInit() {
      this.lineData = {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
          datasets: [
            //   {
            //       label: 'Novos clientes',
            //       data: [65, 59, 80, 81, 56, 55, 40],
            //       fill: false,
            //       borderColor: '#3984b8'
            //   },
              {
                  label: 'Vendas do mês',
                  data: [28, 48, 40, 19, 86, 27, 90],
                  fill: false,
                  borderColor: '#3eb839'
              }
          ]
      };

      this.barData = {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
          datasets: [
              {
                  label: 'Norte',
                  backgroundColor: '#59c429',
                  borderColor: '#3984b8',
                  data: [65, 59, 90, 81, 56, 55, 40]
              },
              {
                  label: 'Sul',
                  backgroundColor: '#3EFEB0',
                  borderColor: '#3EFEB0',
                  data: [38, 48, 40, 10, 47, 65, 70]
              },
              {
                label: 'Leste',
                backgroundColor: '#3EAAFE',
                borderColor: '#3EAAFE',
                data: [93, 76, 82, 73, 16, 27, 15]
            },
            {
                label: 'Oeste',
                backgroundColor: '#923EFE',
                borderColor: '#923EFE',
                data: [28, 48, 40, 19, 96, 27, 100]
            }
          ]
      };

    //   this.pieData = {
    //       labels: ['A', 'B', 'C'],
    //       datasets: [
    //           {
    //               data: [300, 50, 100],
    //               backgroundColor: [
    //                   '#3eb839',
    //                   '#f6ac2b',
    //                   '#3984b8'
    //               ]
    //           }]
    //       };

    //   this.polarData = {
    //       datasets: [{
    //           data: [
    //               11,
    //               16,
    //               7,
    //               3,
    //               14
    //           ],
    //           backgroundColor: [
    //               '#3984b8',
    //               '#f6ac2b',
    //               '#7e8dcd',
    //               '#e175a0',
    //               '#3eb839'
    //           ],
    //           label: 'My dataset'
    //       }],
    //       labels: [
    //           'Red',
    //           'Green',
    //           'Yellow',
    //           'Grey',
    //           'Blue'
    //       ]
    //   };

    //   this.radarData = {
    //       labels: ['Celular', 'Monitor', 'Laptop', 'Micro Computador', 'Headset', 'Impressora', 'Outros'],
    //       datasets: [
    //           {
    //               label: 'Norte',
    //               backgroundColor: 'rgba(179,181,198,0.2)',
    //               borderColor: 'rgba(179,181,198,1)',
    //               pointBackgroundColor: 'rgba(179,181,198,1)',
    //               pointBorderColor: '#fff',
    //               pointHoverBackgroundColor: '#fff',
    //               pointHoverBorderColor: 'rgba(179,181,198,1)',
    //               data: [65, 59, 90, 81, 56, 55, 40]
    //           },
    //           {
    //               label: 'Sul',
    //               backgroundColor: 'rgba(70, 155, 114, 0.3)',
    //               borderColor: 'rgba(70, 155, 114, 1)',
    //               pointBackgroundColor: 'rgba(70, 155, 114, 1)',
    //               pointBorderColor: '#fff',
    //               pointHoverBackgroundColor: '#fff',
    //               pointHoverBorderColor: 'rgba(70, 155, 114, 1)',
    //               data: [38, 48, 40, 10, 47, 65, 70]
    //           },
    //           {
    //             label: 'Leste',
    //             backgroundColor: 'rgba(230, 210, 127, 0.3)',
    //             borderColor: 'rgba(230, 210, 127, 1)',
    //             pointBackgroundColor: 'rgba(230, 210, 127, 1)',
    //             pointBorderColor: '#fff',
    //             pointHoverBackgroundColor: '#fff',
    //             pointHoverBorderColor: 'rgba(230, 210, 127, 1)',
    //             data: [93, 76, 82, 73, 16, 27, 15]
    //         },
    //         {
    //             label: 'Oeste',
    //             backgroundColor: 'rgba(255,99,132,0.2)',
    //             borderColor: 'rgba(255,99,132,1)',
    //             pointBackgroundColor: 'rgba(255,99,132,1)',
    //             pointBorderColor: '#fff',
    //             pointHoverBackgroundColor: '#fff',
    //             pointHoverBorderColor: 'rgba(255,99,132,1)',
    //             data: [28, 48, 40, 19, 96, 27, 100]
    //         }
    //       ]
    //   };
  }
}
