import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map'

import { Bar } from './bar';
import { AppStore } from '../app.store';
import { BAR_LIST_UPDATE } from '../app.actions';

@Injectable()
export class BarService {

  private searchEndpoint = 'http://localhost:9200';

  constructor(
    private store: Store<AppStore>,
    private http: Http
  ) { }

  addBar(bar: Bar) {

  }

  getBar(id) {
    
  }

  getAllBars() {
    let uri = this.searchEndpoint + '/bars/bar/_search';

    let body = {
      "query": {
        "filtered": {
          "filter": {
            "geo_distance": {
              "distance": "10mi", 
              "location": { 
                "lat":  31.569,
                "lon": -97.1832
              }
            }
          }
        }
      },
      "script_fields" : {
        "distance" : {
          "params" : {
            "lat" : 31.569,
            "lon" : -97.1832
          },
          "script" : "doc[\u0027location\u0027].distanceInMiles(lat,lon)"
        }
      }
    }
   
    this.http.get(uri)
      .map(res => res.json())
      .map(res => res.hits.hits)
      .subscribe(res => {
        var formattedArray = res.map((obj) => {
          return Object.assign({}, obj._source);
        });

        console.log(formattedArray);

        let action = {
          type: BAR_LIST_UPDATE,
          payload: formattedArray
        }
        
        this.store.dispatch(action);

      });
  }

  bars: Bar[];

}