import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value :any[], filterName : string, propsName : string): any[] {
    const result:any = [];
    if(!value || filterName == ''|| propsName == ''){
      return value;
    }
    value.filter((a:any)=>{
      if(a[propsName].trim().toLowerCase().includes(filterName.toLowerCase())){
        result.push(a)
      }
    })
    return result;  
  }

}
