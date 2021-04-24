import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {
  buildingswitch = false;
  parkingswitch = false;
  highwayswitch = false;

  constructor(private afstore:AngularFirestore) { }

  ngOnInit(): void {
    this.afstore.collection('switches').doc('buildingswitch').snapshotChanges().subscribe(
      doc => {
        this.buildingswitch = doc.payload.get('value')
      }
    )
    this.afstore.collection('switches').doc('parkingswitch').snapshotChanges().subscribe(
      doc => {
        this.parkingswitch = doc.payload.get('value')
      }
    )
    this.afstore.collection('switches').doc('highwayswitch').snapshotChanges().subscribe(
      doc => {
        this.highwayswitch = doc.payload.get('value')
      }
    )
  }
  togglebuildingswitch(){
    this.afstore.collection("switches").doc("buildingswitch").set({value: !this.buildingswitch})
  }
  toggleparkingswitch(){
    this.afstore.collection("switches").doc("parkingswitch").set({value: !this.parkingswitch})
  }
  togglehighwayswitch(){
    this.afstore.collection("switches").doc("highwayswitch").set({value: !this.highwayswitch})
  }
}
