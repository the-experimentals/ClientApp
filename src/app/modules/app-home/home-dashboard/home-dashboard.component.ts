import { Component, ElementRef, Inject, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { DyanamicContentLoadingService } from 'src/app/core/services';
import { LoadingIndicatorComponent } from 'src/app/shared/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {

  constructor(private dyanamicContentLoading: DyanamicContentLoadingService,
    @Inject(ViewContainerRef) ViewContainerRef:ViewContainerRef,
    private elementRef:ElementRef,
    private rendrer:Renderer2) {
      this.dyanamicContentLoading.setRootViewContainerRef(ViewContainerRef);  
      this.dyanamicContentLoading.showComponent(LoadingIndicatorComponent);
  }

  ngOnInit(): void {
  }

}
