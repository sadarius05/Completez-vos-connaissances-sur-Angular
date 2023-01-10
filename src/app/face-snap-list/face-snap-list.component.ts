import { Component, OnInit } from '@angular/core';
import { interval, take, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsServie: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsServie.getAllFaceSnaps();

    interval(1000)
      .pipe(
        take(2),
        tap((value) => console.log(value))
      )
      .subscribe();
  }
}
