import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "trainCase",
    standalone: true
})
export class TrainCasePipe implements PipeTransform {

    transform(value: string): string {
        return value.trim()
            .replace(/\s/g, "-") // Replace whitespaces ' ' with '-'
            .replace(/[^a-z0-9\-]/gi, "") // Remove non alpha-numerical
            .replace(/-+/g, "-") // Trim to single '-'
            .toLowerCase();
    }
}
