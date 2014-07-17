angular.module("yolifeApp").service("ActorService", function ($http, $q) {
	return {
		getActor: getActor
	}

	function getActor(name) {
		var d = $q.defer();

		$http.get("data/" + name + ".json").success(function (actor) {
			console.log(1);
			d.resolve(actor);
		});

		return d.promise;
	}
});