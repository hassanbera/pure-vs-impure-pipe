import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureDouble'
})
export class PureDoublePipe implements PipeTransform {

  transform(values: number[]): number[] {
    console.log('PureDoublePipe called');
    return values.map(value => value * 2);
  }

}
