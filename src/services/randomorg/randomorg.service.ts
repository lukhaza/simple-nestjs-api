import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class RandomorgService {
    num_ints: Int16Array;
    min_int: BigInteger;
    max_int: BigInteger;
    replacement: boolean;
    constructor(private httpService: HttpService){

    }

    health(): number{
        return 1;
    }

    generateIntegers():  Observable<AxiosResponse<any>> {
        const url = 'https://api.random.org/json-rpc/2/invoke';
        const requestbody = {
            "jsonrpc": "2.0",
            "method": "generateIntegers",
            "params": {
                "apiKey": "ec21ff8a-c0c2-4efc-baa4-6aa3c1313cee",
                "n": this.num_ints,
                "min": this.min_int,
                "max": this.max_int,
                "replacement": this.replacement
            },
            "id": 42
        };

        const result = this.httpService.post(url,requestbody).pipe(map(res=> res.data.result));
        return result;
    }
}
