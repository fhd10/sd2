import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-temprature',
  templateUrl: './temprature.component.html',
  styleUrls: ['./temprature.component.scss']
})
export class TempratureComponent implements OnInit {

  title = 'livechart';
  chart;

  constructor(private afstore: AngularFirestore) { }

  ngOnInit(): void {
    this.chart = new Chart('tempraturewidget', {
      type: 'bar',
      data: {
        labels: ['building', 'parking lot', 'highway'],
        datasets: [{
          label: 'temprature',
          backgroundColor: '#3F3FBF',
          data: [15, 25, 40]
        }]
      },
      options: {
        // title:{
        //   display:true ,
        //   text:'Realtime temprature'
        // },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 50,
                stepSize: 5,
              },
            },
          ],
        },
      }
    });
    this.afstore.collection("sensors").doc("temprature").snapshotChanges().subscribe(
      doc => {
        this.chart.data.datasets[0].data = [
          doc.payload.get('building'),
          doc.payload.get('parking lot'),
          doc.payload.get('highway')
        ];
        this.chart.update();
      }
    )

  }
}
