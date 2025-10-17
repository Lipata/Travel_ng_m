import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DestinationsType } from '../../models/travel-app-data/destinations-type';
import { ImageSet1Type } from '../../models/travel-app-data/image-set1-type';
import { ImageSet2Type } from '../../models/travel-app-data/image-set2-type';
import { SelectedArticlesType } from '../../models/travel-app-data/selected-articles-type';
import { TravelAppDataService } from '../../services/travel-app-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public travelAppDataSelectedArticles: SelectedArticlesType[] = [];
  public travelAppDataDestinations: DestinationsType[] = [];
  public travelAppDataImageSet1: ImageSet1Type[] = [];
  public travelAppDataImageSet2: ImageSet2Type[] = [];

  constructor(
    public travelAppDataService: TravelAppDataService,
  ) {}


  ngOnInit() {
    this.travelAppDataService.getSelectedArticles().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.travelAppDataSelectedArticles = data
    );
    this.travelAppDataService.getDestinations().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.travelAppDataDestinations = data
    );
    this.travelAppDataService.getImageSet1().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.travelAppDataImageSet1 = data
    );
    this.travelAppDataService.getImageSet2().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.travelAppDataImageSet2 = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
