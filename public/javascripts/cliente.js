// $(document).ready(function() {
// 	alert("Hola");
// });
var socket=io.connect("http://localhost:3000/");
socket.on('inicio_server',function(mensaje){
	$("#pagina").html(mensaje);
});

socket.on('mensaje_del_servidor',function(mensaje){
	$("#pagina").append('<ul>');
	$("#pagina").append('<li>'+mensaje+'</li>');
	$("#pagina").append('</ul>');
});

$(function(){
	$("#enviar").click(function(event) {
		mensaje=$("#mensaje").val();
		socket.emit("mensaje_del_cliente",mensaje);
	});
});

