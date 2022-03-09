import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snippet'
})
export class SnippetPipe implements PipeTransform {

  transform( value: string ): string {

    const snipetTagStart: RegExp = new RegExp('<span class="searchmatch">', 'g');
    const snipetTagEnd: RegExp = new RegExp('</span>', 'g');

    return value.replace(snipetTagStart, '').replace(snipetTagEnd, '');
  }

}
