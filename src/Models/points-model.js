import { getRandomPoint,getOffersInType,getDestinationsMock } from '../mock/mock-points.js';

const POINT_COUNT = 5;


export default class PointsModel {
  #points = [];

  getPoints(){
    //забиваю массив точками, но только уникальными
    while(this.#points.length < POINT_COUNT){
      const point = getRandomPoint();
      if(!this.#points.includes(point)){
        this.#points.push(point);
      }
    }

    return this.#points;
  }

  getDestinations(){
    return getDestinationsMock();
  }

  getOffersByType(type){
    this.offer = getOffersInType().filter((item) =>item.type === type);
    return this.offer[0].offers;
  }
}
