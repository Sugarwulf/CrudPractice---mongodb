namespace top5.Services {

  export class RapperService {
    public RapperResource
    public saveRapper(rapper) {
      this.RapperResource.save(rapper);

    }
    public getRappers() {
    return this.RapperResource.query(); //retrieve all rappers
    }

    public removeRapper(id) {
    this.RapperResource.delete({id:id});
    }

    public constructor(
      public $resource
    ) {
    this.RapperResource = $resource('/rappers/:id');

    }

  }

  angular.module('top5').service('rapperService', RapperService);


    }
