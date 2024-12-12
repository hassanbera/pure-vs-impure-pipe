import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureDouble',
  pure:false
})
export class ImpureDoublePipe implements PipeTransform {

  transform(values: number[]): number[] { {
    console.log('ImpureDoublePipe called');
  }
    return values.map(value => value * 2);
}

}
