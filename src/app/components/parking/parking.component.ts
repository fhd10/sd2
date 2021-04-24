import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit {

  chart;
  constructor(private afstore: AngularFirestore) { }

  ngOnInit(): void {
    this.chart= new Chart('parkingwidget',{
      type: 'line',
      data:{
        labels:[],
        datasets:[{
          label:'parking lot',
          data:[]
        }]
      }
     });
     this.afstore.collection('sensors').doc('parking').snapshotChanges().subscribe(
       doc => {
         this.chart.data.labels = [
           doc.payload.get("value1")[0],
           doc.payload.get("value2")[0],
           doc.payload.get("value3")[0],
         ];
         this.chart.data.datasets[0].data[
          doc.payload.get("value1")[1],
          doc.payload.get("value2")[1],
          doc.payload.get("value3")[1],
         ]
         this.chart.update()
       }
     )
  }
  
}
