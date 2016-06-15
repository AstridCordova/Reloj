$(document).ready(function() {
	setInterval("relojFecha()", 1000);
	$(".pais").on("click",zonaHoraria);
})

function relojFecha() {
	var complet = new Date();
	var hora = complet.getHours();
	var minutos = complet.getMinutes();
	var segundos = complet.getSeconds();
	var dia = complet.getDay();
	var fecha = complet.getDate();
	var mes = complet.getMonth();

	if(hora<10) {
		hora = "0" + hora;
	} if(minutos<10) {
		minutos = "0" + minutos;
	} if(segundos<10) {
		segundos = "0" + segundos;
	}

	var semana = ["Domingo" , "Lunes" , "Martes" , "Miercoles" , "Jueves" , "Viernes" , "Sábado"]
	diaSemana = semana[dia]

	var meses = ["Diciembre" , "Enero" , "Febrero" , "Marzo" , "Abril" , "Mayo" , "Junio" , "Julio" , "Agosto" , "Setiembre" , "Octubre" , "Noviembre"]
	mesActual = meses[mes]

	var horaFinal = hora + ":" +minutos+ ":" +segundos;
	$("#reloj").html(horaFinal);

	var fechaFinal = diaSemana+ ", " +fecha+ " de " +mesActual;
	$("#fecha").html(fechaFinal);
}
	
function zonaHoraria() {
	var paises = [ 
		{	pais : "Chicago" ,
			suma : 0	},

		{	pais : "Sao Paulo" ,
			suma : 2	},

		{	pais : "Santiago",
			suma : 1	},

		{	pais : "México",
			suma : 0	},

		{	pais : "Caracas",
			suma : 1		},

		{	pais : "Brasilia",
			suma : 2		},

		{	pais : "Quito",
			suma : 0		},

		{	pais : "Guayaquil",
			suma : 0		},

		{	pais : "Santa Marta",
			suma : 0		},

		{	pais : "Bogotá",
			suma : 0	},
	]

	var complet2 = new Date();
	var llamando = this.checked ;
	var valor = parseInt(this.value);

	if(llamando) {
		hora = complet2.getHours()+paises[valor].suma ;
		if(hora>=24)
	      hora=hora-24
	    if(hora<10)
	    hora="0"+hora
	    minutos=complet2.getMinutes()
	    if(minutos<10)
	    minutos="0"+minutos
	    segundos=complet2.getSeconds()
	    if(segundos<10)
	    segundos="0"+segundos
		$("#contenedor").append("<div class='row"+valor+"'><div class='col-xs-6 text-center'><span class='ciudadPais'>"+paises[valor].pais+"</span></div><div class='col-xs-6 text-center'><span class='hora-ciudadPais'>"+hora+":"+minutos+"</span></div></div>");
		} else 
			$(".row"+valor).remove();
		
}

