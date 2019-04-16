"use strict";

const nameForm = {
  template: `
  <div class="display">
    <button ng-click="$ctrl.getData()">load</button>
    <p>{{ $ctrl.name }}</p>
  </div>
  `,

  controller: ["NameService", function(NameService) {
    const vm = this;

    vm.getData = ()=> {
        vm.name = NameService.getData();
    }

    
  }]
}

angular
  .module("NameApp")
  .component("nameForm", nameForm);