import { ComponentFactoryResolver, Inject, Injectable, Type, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DyanamicContentLoadingService {

  factoryResolver!: ComponentFactoryResolver;
  rootViewContainer!: ViewContainerRef;
  
  constructor(@Inject(ComponentFactoryResolver) factoryResolver:ComponentFactoryResolver) {
    this.factoryResolver = factoryResolver
  }

  setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  showComponent<T>(compoennt:Type<T>)
  {
    const factory = this.factoryResolver.resolveComponentFactory(compoennt);
    const component = factory.create(this.rootViewContainer.injector);

    this.rootViewContainer.insert(component.hostView);
  }

  hideComponent(){
    this.rootViewContainer.remove();
  }
}
