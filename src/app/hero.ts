/**
 * Created by tomow on 20.02.17.
 */
export class Hero {

  id: number;
  name: string;
  newName: string;
  history: string[];


  constructor(id: number) {
    this.id = id;
    this.history = [];
  }
}
