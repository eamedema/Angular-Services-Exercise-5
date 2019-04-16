"use strict";

function NameService() {
  const service = this;

  service.setData = (person) => {
    service.name = person;
    console.log(service.name);

    // $location.path("/nameDisplay.js");

  };

  service.getData = () => {
    return service.name;
  };
}

angular
  .module("NameApp")
  .service("NameService", NameService);