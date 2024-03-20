import { Pipe, PipeTransform } from "@angular/core";
import { StorageService } from "@core/services";
@Pipe({
    name: "join"
})
export class JoinPipe implements PipeTransform {
    companyCurrency: string = "";


    transform(value: any[], key) {
        try {
            if (value.length) {
                return value.map((x) => x[key]).join(',');
            } else {
                return null
            }
        } catch (error) {
            console.log("error", error);

            return null;
        }
    }
}
