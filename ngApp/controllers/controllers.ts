namespace top5.Controllers {

    export class HomeController {
    public rappers

    deleteRapper(id) {
      this.rapperService.removeRapper(id);
    }


    constructor(
      private rapperService
    ) {
    this.rappers = rapperService.getRappers();
    }

    }

    export class AddRapperController {
        public rapper
        public addRapper() {
        this.rapperService.saveRapper(this.rapper);
        }

        constructor(
          private rapperService
        ) {

        }
    }

    export class EditRapperController {
    public rapper
    public id

    public editRapper() {
    this.rapper._id = this.id
    this.rapperService.saveRapper(this.rapper);
    }

    constructor(
      public $stateParams,
      private rapperService
    ) {
      this.id = $stateParams['id'];
    }

    }


}
