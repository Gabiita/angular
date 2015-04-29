var app= angular.module("MyFirstApp",[])
app.controller("FirstController", function($scope){
	$scope.nombre="Gabita";
	$scope.nuevoComentario={ };
	$scope.comentarios =[
	{	
		comentario: "Buen Tutorial",
		username: "CF"
	},
	{
		comentario: "Mal Tutorial",
		username: "CF_no"

	}];
	$scope.nuevaTarea={};
	$scope.tareas=[
	{
		texto:"Esta es la tarea 1",
		hecho:true
	},
	{
		texto:"Esta es la tarea 2",
		hecho:false
	}];
	$scope.empleados=
		[
			{
				nombre:"Gabriela", edad:"20", fechaActual: new Date(), telefono:"0990514221"
			},
			{
				nombre:"Carlos Andres", edad:"4", fechaActual: new Date(), telefono:"xxxxxxxx"
			},
			{
				nombre:"Alexander", edad:"10", fechaActual: new Date(), telefono:"xxxxxxxx"
			}
			];

	$scope.agregarComentario= function () {
		$scope.comentarios.push($scope.nuevoComentario);
	}
	/*$scope.agregarTarea=function(){
		$scope.tareas.push($scope.nuevaTarea);
	}*/
	$scope.agregarTarea= function(){
		$scope.tareas.push({texto:$scope.nuevaTareatexto,hecho:false});
		$scope.nuevaTareatexto='';
	}
	$scope.restantes=function(){
		var cuenta=0;
		angular.forEach($scope.tareas,function(tarea){
			cuenta += tarea.hecho ? 0:1;
		});
		return cuenta;
	}
	$scope.eliminar=function(){
		var tareasViejas= $scope.tareas;
		$scope.tareas=[];
		angular.forEach(tareasViejas,function(tarea){
			if(!tarea.hecho) $scope.tareas.push(tarea);

		});
	}
	$scope.ordenarPor = function(orden) {
    $scope.ordenSeleccionado = orden;
  }
  
});
 