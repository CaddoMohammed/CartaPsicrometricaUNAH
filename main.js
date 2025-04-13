let locale = {moduleType:"locale",name:"es",dictionary:{Autoscale:"Autoescalar","Box Select":"Seleccionar Caja","Click to enter Colorscale title":"Introducir el t\xedtulo de la Escala de Color","Click to enter Component A title":"Introducir el t\xedtulo del Componente A","Click to enter Component B title":"Introducir el t\xedtulo del Componente B","Click to enter Component accordion title":"Introducir el t\xedtulo del Componente C","Click to enter Plot title":"Introducir el t\xedtulo de la Gr\xe1fica","Click to enter X axis title":"Introducir el t\xedtulo del eje X","Click to enter Y axis title":"Introducir el t\xedtulo del eje Y","Click to enter radial axis title":"Introducir el t\xedtulo del eje radial","Compare data on hover":"Comparar datos al pasar por encima","Double-click on legend to isolate one trace":"Haga doble-clic en la leyenda para aislar una traza","Double-click to zoom back out":"Haga doble-clic para restaurar la escala","Download plot as a png":"Descargar gr\xe1fico como png","Download plot":"Descargar gr\xe1fico","Edit in Chart Studio":"Editar en Chart Studio","IE only supports svg.  Changing format to svg.":"IE solo soporta svg. Cambiando formato a svg.","Lasso Select":"Seleccionar con lazo","Orbital rotation":"Rotaci\xf3n esf\xe9rica",Pan:"Desplazarse","Produced with Plotly.js":"Hecho con Plotly.js",Reset:"Reiniciar",	"Reset axes":"Reiniciar ejes","Reset camera to default":"Restaurar c\xe1mara predeterminada","Reset camera to last save":"Restaurar anterior c\xe1mara","Reset view":"Restaurar vista","Reset views":"Restaurar vistas","Show closest data on hover":"Mostrar el dato m\xe1s cercano al pasar por encima","Snapshot succeeded":"Gr\xe1fico guardado correctamente","Sorry, there was a problem downloading your snapshot!":"\xa1La descarga del gr\xe1fico fall\xf3!","Taking snapshot - this may take a few seconds":"Guardando gr\xe1fico - podr\xeda tardar unos segundos","Toggle Spike Lines":"Mostrar/Ocultar Gu\xedas","Toggle show closest data on hover":"Activar/Desactivar mostrar el dato m\xe1s cercano al pasar por encima","Turntable rotation":"Rotaci\xf3n plana",Zoom:"Modo Ampliar/Reducir","Zoom in":"Ampliar","Zoom out":"Reducir","close:":"cierre:","high:":"alza:","incoming flow count:":"flujo de entrada:","kde:":"edp:","lat:":"lat:","lon:":"lon:","low:":"baja:","lower fence:":"l\xedmite inferior:","max:":"m\xe1x:","mean \xb1 \u03c3:":"media \xb1 \u03c3:","mean:":"media:","median:":"mediana:","min:":"m\xedn:","new text":"nuevo texto","open:":"apertura:","outgoing flow count:":"flujo de salida:","q1:":"q1:","q3:":"q3:","source:":"fuente:","target:":"destino:",trace:"traza","upper fence:":"l\xedmite superior:"},format:{days:["Domingo","Lunes","Martes","Mi\xe9rcoles","Jueves","Viernes","S\xe1bado"],shortDays:["Dom","Lun","Mar","Mi\xe9","Jue","Vie","S\xe1b"],months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],shortMonths:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],date:"%d/%m/%Y",decimal:".",thousands:","}};
typeof Plotly=="undefined"?(window.PlotlyLocales=window.PlotlyLocales||[],window.PlotlyLocales.push(locale)):Plotly.register(locale);
Plotly.setPlotConfig({locale:"es"});
let div = [
	document.getElementById("accordion-aside"),
	document.getElementById("accordion-lineas"),
	document.getElementById("accordion-puntos-guardados"),
	document.getElementById("actions-btn-container"),
	document.getElementById("lineas-guardadas"),
	document.getElementById("puntos-guardados")
];
let accordion = [
	document.getElementById("accordion-entalpias"),
	document.getElementById("accordion-humedad-especifica"),
	document.getElementById("accordion-humedad-relativa"),
	document.getElementById("accordion-temperatura-bulbo-humedo"),
	document.getElementById("accordion-temperatura-bulbo-seco"),
	document.getElementById("accordion-temperatura-de-rocio"),
	document.getElementById("accordion-volumen-especifico")
];
let linea = [
	document.getElementById("entalpias"),
	document.getElementById("humedad-especifica"),
	document.getElementById("humedad-relativa"),
	document.getElementById("temperatura-bulbo-humedo"),
	document.getElementById("temperatura-bulbo-seco"),
	document.getElementById("temperatura-de-rocio"),
	document.getElementById("volumen-especifico")
];
let Grafico = document.getElementById("grafico");
let AgregarLinea = [
	document.getElementById("abrir-ventana-agregar-lineas"),	// 0 Boton para abrir ventana de ingresar datos
	document.getElementById("ventana-agregar-lineas"),	// 1 Ventana
	document.getElementById("titulo-agregar-lineas"),	// 2 Titulo de la ventana
	document.getElementById("input-nueva-linea"),	// 3 Input
	document.getElementById("btn-nueva-linea"),	// 4 Boton para mandar los datos
	document.getElementById("spinner-nueva-linea"),	// 5 Spinner
	document.getElementById("label-nueva-linea"),	// 6 Label
	document.getElementById("error-nueva-linea"),	// 7 Mensaje de error
	document.getElementById("icono-menu")	// 8 Boton menu
];
let S,T;
let U = document.getElementById("sistema-de-unidades");
let V = [
	document.getElementById("input-altura-sobre-el-nivel-del-mar"),
	document.getElementById("label-altura-sobre-el-nivel-del-mar"),
	document.getElementById("error-altura-sobre-el-nivel-del-mar")
];
let W=null,Y,Z;
U.addEventListener("change",() => a1(true));
V[0].addEventListener("input",() => a2());
document.addEventListener("keydown", (z) => c1(z));
AgregarLinea[3].addEventListener("input",() => c3(S));
window.addEventListener("load",() => {
	if(localStorage.getItem("CaddoMohammed-CartaPsicrometrica")===null){
		U.value = true;
		V[0].value = 0;
		a1(true);
	} else {
		T = localStorage.getItem("CaddoMohammed-CartaPsicrometrica")
		T = JSON.parse(T);
		U.value = T["Sistema de unidades"];
		V[0].value = T["Altura sobre el nivel del mar"];
		a1(false);
		b2();
		if(T["Lineas Psicrometricas"]!==undefined){
			for(i in T["Lineas Psicrometricas"]){
				for(j in T["Lineas Psicrometricas"][i]){
					c6(j,i,T["Lineas Psicrometricas"][i][j]);
				}
			}
		}
		if(T["Puntos Guardados"]!==undefined){
			if(div[2].classList.contains("d-none")&&Object.keys(T["Puntos Guardados"]).length!=0){
				div[2].classList.remove("d-none");
			}
			d3(T["Puntos Guardados"]);
		}
	}
});
function a1(x){
	switch(U.value){
		default:
			U.classList.add("is-invalid");
			V[0].placeholder = "";
			V[1].innerHTML = "";
			break;
		case "false":
			U.classList.remove("is-invalid");
			V[0].min = -16500;
			V[0].max = 36000;
			V[0].placeholder = "Altura sobre el nivel del mar <em>(ft)</em>";
			V[1].innerHTML = "Altura sobre el nivel del mar <em>(ft)</em>";
			break;
		case "true":
			U.classList.remove("is-invalid");
			V[0].min = -5000;
			V[0].max = 11000;
			V[0].placeholder = "Altura sobre el nivel del mar <em>(m)</em>";
			V[1].innerHTML = "Altura sobre el nivel del mar <em>(m)</em>";
			break;
	}
	if(x===true){
		a2();
	}
}
function a2(){
	clearTimeout(W);
	W = setTimeout(() => {
		if(isNaN(V[0].value)){
			V[0].classList.add("is-invalid");
			V[2].innerHTML = "Solamente números";
			return;
		}
		if((Number(V[0].value)==0)&&(V[0].value!=="0")){
			V[0].classList.add("is-invalid");
			V[2].innerHTML = "Ingrese un carácter válido";
			return;
		}
		switch(U.value){
			case "false":
				if(V[0].value<-16500){
					V[0].classList.add("is-invalid");
					V[2].innerHTML = "El mínimo es de -16,500ft";
					return;
				}
				if(V[0].value>36000){
					V[0].classList.add("is-invalid");
					V[2].innerHTML = "El máximo es de 36,000ft";
					return;
				}
				break;
			case "true":
				if(V[0].value<-5000){
					V[0].classList.add("is-invalid");
					V[2].innerHTML = "El mínimo es de -5,000m";
					return;
				}
				if(V[0].value>11000){
					V[0].classList.add("is-invalid");
					V[2].innerHTML = "El máximo es de 11,000m";
					return;
				}
				break;
		}
		V[0].classList.remove("is-invalid");
		V[2].innerHTML = "";
		b1();
	},700);
}
function a3(){
	T["A"] = [[],[],[],[],[],[],[]];
	T["Lineas Psicrometricas"] = {"0":new Object(),"1":new Object(),"2":new Object(),"3":new Object(),"4":new Object(),"5":new Object(),"6":new Object()};
	T["B"] = new Object();
	T["Puntos Guardados"] = new Object();
	localStorage.setItem("CaddoMohammed-CartaPsicrometrica",JSON.stringify(T));
}
function b1(){
	let a = document.createElement("div");
	a.style.position = "absolute";
	a.style.top = "50%";
	a.style.left = "50%";
	a.className = "z-3"
	a.style.transform = "translate(-50%,-50%)";
	a.innerHTML = `
		<div class="spinner-border text-primary" role="status" style="width:5rem; height:5rem;">
			<span class="visually-hidden">Loading...</span>
		</div>`;
	Grafico.appendChild(a);
	fetch(`https://cartapsicrometrica-a00-252997894133.us-central1.run.app/rreszdzxvffgsdfcxcasa`,{
		method:"POST",
		headers: {
			"Content-Type":"application/json"
		},
		body: JSON.stringify({A:JSON.parse(U.value),B:Number(V[0].value)}),
	})
	.then(v => v.json())
	.then(x => {
		a.remove();
		Grafico.innerHTML = "";
		T = x;
		a3();
		localStorage.setItem("CaddoMohammed-CartaPsicrometrica",JSON.stringify(T));
		b2();
	})
	.catch(c => {
		console.error(c);
	});
}
function b2(){
	Plotly.purge(Grafico);
	let a,b,c,d,e;
	if(T["Sistema de unidades"]){
		a = [-60,90];
		if(T["Altura sobre el nivel del mar"]===0){
			b = [0,50];
			c = 50;
			d = [0,30];
		} else {
			b = [-60,90];
			c = 130;
			d = [0,100];
		}
		e = "Carta Psicrométrica en el sistema internacional";
	} else {
		if(T["Altura sobre el nivel del mar"]===0){
			a = [-80,150];
			b = [32,120];
			c = 0.05;
			d = [0,0.03];
		} else {
			a = [-80,200];
			b = [-50,120];
			c = 0.14;
			d = [0,0.05];
		}
		e = "Carta Psicrométrica en el sistema inglés";
	}
	Y = {xaxis:{title:`Temperatura de bulbo seco (${T["Unidades"][4]})`,minallowed:a[0],maxallowed:a[1],showgrid:true,zeroline:true,showline:true,mirror:"ticks",gridcolor:"#bdbdbd",gridwidth:1,zerolinecolor:"#969696",zerolinewidth:1,linecolor:"#636363",linewidth:1,tickmode:"auto",dtick:0.1,ticklen:10,minor:{ticklen:5,nticks:10,},mirror:true,rangemode:"tozero",range:b},yaxis:{title:`Humedad específica (${T["Unidades"][1]})`,minallowed:0,maxallowed:c,showgrid:true,zeroline:true,showline:true,mirror:"ticks",gridcolor:"#bdbdbd",gridwidth:1,zerolinecolor:"#969696",zerolinewidth:1,linecolor:"#636363",linewidth:1,tickmode:"auto",dtick:0.1,ticklen:10,minor:{ticks:"outside",ticklen:5,nticks:15,},mirror:true,rangemode:"tozero",range:d},showlegend:false,dragmode:false,scrollZoom:false,margin:{autoexpand:false,b:60,l:60,r:5,t:35}};
	Z = {displaylogo:false,toImageButtonOptions:{format:"png",filename:e,height:1080,width:1300,scale:1},modeBarButtonsToRemove:["autoScale2d","lasso2d","select2d","zoom2d"],displayModeBar:true,showAxisRangeEntryBoxes:false,showAxisDragHandles:false,showAxisRangeEntryBoxes:false,responsive:true,doubleClickDelay:10}
	Plotly.newPlot(Grafico,T["Carta Psicrometrica"],Y,Z);
}
function c1(z){
	if(!AgregarLinea[1].classList.contains("show")){
		if((z.key==="h")||z.key==="H"){
			c2(0);
		}
		if((z.key==="w")||z.key==="W"){
			c2(1);
		}
		if((z.key==="r")||z.key==="R"){
			c2(2);
		}
		if((z.key==="b")||z.key==="B"){
			c2(3);
		}
		if((z.key==="t")||z.key==="T"){
			c2(4);
		}
		if((z.key==="d")||z.key==="linea"){
			c2(5);
		}
		if((z.key==="v")||z.key==="V"){
			c2(6);
		}
	}
	if(AgregarLinea[1].classList.contains("show")){
		if(z.key==="Enter"){
			c4();
		}
	}
}
function c2(x){
	S = x;
	switch(x){
		case 0:
			AgregarLinea[2].innerHTML = `Entalpía (<em>${T["Unidades"][x]}</em>)`;
			break;
		case 1:
			AgregarLinea[2].innerHTML = `Humedad específica (<em>${T["Unidades"][x]}</em>)`;
			break;
		case 2:
			AgregarLinea[2].innerHTML = `Humedad relativa (<em>${T["Unidades"][x]}</em>)`;
			break;
		case 3:
			AgregarLinea[2].innerHTML = `Temperatura de bulbo húmedo (<em>${T["Unidades"][x]}</em>)`;
			break;
		case 4:
			AgregarLinea[2].innerHTML = `Temperatura de bulbo seco (<em>${T["Unidades"][x]}</em>)`;
			break;
		case 5:
			AgregarLinea[2].innerHTML = `Temperatura de rocío (<em>${T["Unidades"][x]}</em>)`;
			break;
		case 6:
			AgregarLinea[2].innerHTML = `Volumen específico (<em>${T["Unidades"][x]}</em>)`;
			break;
	}
	AgregarLinea[3].min = T["Limites"][x][0];
	AgregarLinea[3].max = T["Limites"][x][1];
	AgregarLinea[3].value = "";
	AgregarLinea[3].classList.remove("is-invalid");
	AgregarLinea[7].innerHTML = "";
	AgregarLinea[0].click();
}
function c3(){
	clearTimeout(W);
	W = setTimeout(() => {
		if(isNaN(AgregarLinea[3].value)){
			AgregarLinea[3].classList.add("is-invalid");
			AgregarLinea[7].innerHTML = "Solamente números";
			return;
		}
		if((Number(AgregarLinea[3].value)==0)&&(AgregarLinea[3].value!=="0")){
			AgregarLinea[3].classList.add("is-invalid");
			AgregarLinea[7].innerHTML = "Ingrese un carácter valido";
			return;
		}
		if(AgregarLinea[3].value<T["Limites"][S][[0]]){
			AgregarLinea[3].classList.add("is-invalid");
			AgregarLinea[7].innerHTML = `El valor minímo para ingresar es de ${T["Limites"][S][0]}${T["Unidades"][S]}`;
			return;
		}
		if(AgregarLinea[3].value>T["Limites"][S][[1]]){
			AgregarLinea[3].classList.add("is-invalid");
			AgregarLinea[7].innerHTML = `El valor máximo para ingresar es de ${T["Limites"][S][1]}${T["Unidades"][S]}`;
			return;
		}
		if(T["Lineas Psicrometricas"]!==undefined){
			if(T["Lineas Psicrometricas"][S][AgregarLinea[3].value]){
				AgregarLinea[3].classList.add("is-invalid");
				AgregarLinea[7].innerHTML = "Valor ya guardado";
				return;
			}
		}
		AgregarLinea[3].classList.remove("is-invalid");
		AgregarLinea[7].innerHTML = "";
	},500);
}
function c4(){
	if(isNaN(AgregarLinea[3].value)){
		return;
	}
	if((Number(AgregarLinea[3].value)==0)&&(AgregarLinea[3].value!=="0")){
		return;
	}
	if(AgregarLinea[3].value<T.Limites[S][0]){
		return;
	}
	if(AgregarLinea[3].value>T.Limites[S][1]){
		return;
	}
	if(T["Lineas Psicrometricas"]!==undefined){
		if(T["Lineas Psicrometricas"][S][AgregarLinea[3].value]){
			return;
		}
	}
	AgregarLinea[4].disabled = true;
	AgregarLinea[5].classList.remove("d-none");
	AgregarLinea[6].innerHTML = "Cargando...";
	fetch(`https://cartapsicrometrica-a00-252997894133.us-central1.run.app/ttrgxdfvasdfhgfcvsxdf`, {
		method:"POST",
		headers:{
			"Content-Type":"application/json",
		},
		body: JSON.stringify({A:S,B:{"Sistema de unidades":T["Sistema de unidades"],"Altura sobre el nivel del mar":T["Altura sobre el nivel del mar"],A:Number(AgregarLinea[3].value),B:T["Limites"][6][1]}})
	})
	.then(u => u.json())
	.then(v => {
		AgregarLinea[0].click();
		AgregarLinea[4].disabled = false;
		AgregarLinea[5].classList.add("d-none");
		AgregarLinea[6].innerHTML = "Aceptar";
		T["Lineas Psicrometricas"][v[1]][v[2]] = true;
		T.A[v[1]].push(v[2]);
		T["Carta Psicrometrica"].push(v[0]);
		localStorage.setItem("CaddoMohammed-CartaPsicrometrica",JSON.stringify(T));
		c6(v[2],v[1],true);
		Plotly.react(Grafico,T["Carta Psicrometrica"],Y,Z);
		if(div[2].classList.contains("d-none")){
			let a=0;
			for(let i=0;i<7;i++){
				if(T["A"][i].length>0){
					a = a+1;
				}
			}
			if(a>=2){
				d1();
			}
		} else {
			d1();
		}
	})
	.catch(error => console.error(error));
}
function c5(){
	if(AgregarLinea[8].style.transform==="rotate(0deg)"){
		AgregarLinea[8].style.transform = "rotate(90deg)";
		return;
	}
	if(AgregarLinea[8].style.transform==="rotate(90deg)"){
		AgregarLinea[8].style.transform = "rotate(0deg)";
		return;
	}
}
function c6(x,y,z){
	let a = document.createElement("div");
	let b = "bi-eye-slash-fill";
	if(z===false){
		b = "bi-eye-fill";
	}
	a.id = `linea-${x}-${y}`;
	a.className = "d-flex justify-content-between align-content-center m-2";
	a.innerHTML =
		`<p class="m-1 p-1">${x}${T["Unidades"][y]}</p>
		<div class="d-flex flex-nowrap mx-3 align-items-center">
			<p class="m-2 btn-hide" onclick="ocultarLinea(${x},${y})">
				<i id="hide-${x}-${y}" class="bi ${b} icon-primary"></i>
			</p>
			<p class="m-2 btn-delete" onclick="borrarLinea(${x},${y})">
				<i class="bi bi-trash3-fill icon-danger"></i>
			</p>
		</div>`;
	linea[y].appendChild(a);
	if(div[1].classList.contains("d-none")){
		div[1].classList.remove("d-none");
		div[3].classList.remove("d-none");
		div[4].classList.remove("d-none");
	}
	if(accordion[y].classList.contains("d-none")){
		accordion[y].classList.remove("d-none");
	}
	if(linea[y].classList.contains("d-none")){
		linea[y].classList.remove("d-none");
	}
}
function d1(){
	let a = false;
	if(T["Unidades"].length===7){
		a = true;
	} else {
		if(T["Sistema de unidades"]){
			if(T["Unidades"][7]!=="kPa"){
				a = true;
			}
		} else {
			if(T["Unidades"][7]!=="psi"){
				a = true;
			}
		}
	}
	fetch(`https://cartapsicrometrica-a00-252997894133.us-central1.run.app/ppoasakjzxgqhgahzbanq`, {
		method:"POST",
		headers:{
			"Content-Type":"application/json",
		},
		body: JSON.stringify({"Sistema de unidades":T["Sistema de unidades"],"Altura sobre el nivel del mar":T["Altura sobre el nivel del mar"],"Puntos Guardados":T["B"],"A":T["A"],"B":a})
	})
	.then(u => u.json())
	.then(v => {
		if(div[2].classList.contains("d-none")){
			div[2].classList.remove("d-none");
		}
		if(a===true){
			T["Unidades"].push(v[1]);
		}
		d2(v[0]);
	})
	.catch(k => console.error(k));
}
function d2(v){
	for(let i in v){
		if(T["Puntos Guardados"][i]||(i=="")){
			continue;
		}
		T["Puntos Guardados"][i] = v[i];
		T["B"][i] = true;
		d3({[i]:v[i]});
		T["Carta Psicrometrica"].push({x:[v[i][0]],y:[v[i][6]],mode:"markers",type:"scatter",marker:{size:10,},name:i});
		Plotly.react(Grafico,T["Carta Psicrometrica"],Y,Z);
	}
	localStorage.setItem("CaddoMohammed-CartaPsicrometrica",JSON.stringify(T));
}
function d3(v){
	for(let i in v){
		if(i==""){
			continue;
		}
		let a = document.createElement("div");
		a.className = "accordion accordion-flush accordion-item";
		a.id = `DivPunto-${i}`;
		div[5].appendChild(a);
		let b = document.createElement("h2");
		b.className = "accordion-header";
		b.innerHTML = 
			`<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Punto-${i}" aria-expanded="false" aria-controls="Punto-${i}">
				${i}
			</button>`;
		a.appendChild(b);
		let c = document.createElement("div");
		c.id = `Punto-${i}`;
		c.className = "accordion-collapse collapse ms-3 p-1";
		c.setAttribute("data-bs-parent","#puntos-guardados");
		a.appendChild(c);
		let d = "bi-eye-slash-fill";
		if(T.B[i]===false){
			d = "bi-eye-fill";
		}
		c.innerHTML =
			`<table class="table table-dark table-striped">
				<tbody>
					<tr class="table-dark">
						<td class="table-dark">Temperatura de bulbo seco <em>(t)</em></td>
						<td class="table-dark" style="width:max-content; text-align:right;">${v[i][0].toLocaleString('en-US',{style:"decimal",maximunFractionDigits:4})}</td>
						<td class="table-dark" style="width:max-content;">${T["Unidades"][4]}</td>
					</tr>
					<tr class="table-dark">
						<td class="table-dark">Temperatura de bulbo húmedo <em>(tbh)</em></td>
						<td class="table-dark" style="width:max-content; text-align:right;">${v[i][1].toLocaleString('en-US',{style:"decimal",maximunFractionDigits:4})}</td>
						<td class="table-dark" style="width:max-content;">${T["Unidades"][2]}</td>
					</tr>
					<tr class="table-dark">
						<td class="table-dark">Temperatura de rocío <em>(dp)</em></td>
						<td class="table-dark" style="width:max-content; text-align:right;">${v[i][2].toLocaleString('en-US',{style:"decimal",maximunFractionDigits:4})}</td>
						<td class="table-dark" style="width:max-content;">${T["Unidades"][5]}</td>
					<tr class="table-dark">
						<td class="table-dark">Presión del agua saturada</td>
						<td class="table-dark" style="width:max-content; text-align:right;">${v[i][3].toLocaleString('en-US',{style:"decimal",maximunFractionDigits:4})}</td>
						<td class="table-dark" style="width:max-content;">${T["Unidades"][7]}</td>
					</tr>
					<tr class="table-dark">
						<td class="table-dark">Presión del vapor de agua en el aire</td>
						<td class="table-dark" style="width:max-content; text-align:right;">${v[i][4].toLocaleString('en-US',{style:"decimal",maximunFractionDigits:4})}</td>
						<td class="table-dark" style="width:max-content;">${T["Unidades"][7]}</td>
					</tr>
					<tr class="table-dark">
						<td class="table-dark">Humedad específica del agua saturada</td>
						<td class="table-dark" style="width:max-content; text-align:right;">${v[i][5].toLocaleString('en-US',{style:"decimal",maximunFractionDigits:4})}</td>
						<td class="table-dark" style="width:max-content;">${T["Unidades"][1]}</td>
					</tr>
					<tr class="table-dark">
						<td class="table-dark">Humedad específica <em>(W)</em></td>
						<td class="table-dark" style="width:max-content; text-align:right;">${v[i][6].toLocaleString('en-US',{style:"decimal",maximunFractionDigits:4})}</td>
						<td class="table-dark" style="width:max-content;">${T["Unidades"][1]}</td>
					</tr>
					<tr class="table-dark">
						<td class="table-dark">Humedad relativa</td>
						<td class="table-dark" style="width:max-content; text-align:right;">${v[i][7].toLocaleString('en-US',{style:"decimal",maximunFractionDigits:4})}</td>
						<td class="table-dark" style="width:max-content;">${T["Unidades"][2]}</td>
					</tr>
					<tr class="table-dark">
						<td class="table-dark">Entalpía <em>(h)</em></td>
						<td class="table-dark" style="width:max-content; text-align:right;">${v[i][8].toLocaleString('en-US',{style:"decimal",maximunFractionDigits:4})}</td>
						<td class="table-dark" style="width:max-content;">${T["Unidades"][0]}</td>
					</tr>
					<tr class="table-dark">
						<td class="table-dark">Volumen específico <em>(v)</em></td>
						<td class="table-dark" style="width:max-content; text-align:right;">${v[i][9].toLocaleString('en-US',{style:"decimal",maximunFractionDigits:4})}</td>
						<td class="table-dark" style="width:max-content;">${T["Unidades"][6]}</td>
					</tr>
				</tbody>
			</table>
			<div class="d-flex justify-content-end align-content-center m-2">
				<p class="m-2 btn-hide z-1" onclick="ocultarPunto('${i}')">
					<i id="hide-${i}" class="bi ${d} icon-primary"></i>
				</p>
				<p class="m-2 btn-delete z-1" onclick="borrarPunto('${i}')">
					<i class="bi bi-trash3-fill icon-danger"></i>
				</p>
			</div>`;	
	}
}
function borrarLinea(x,y){
	let a = "";
	switch(Number(y)){
		case 0:a=`h-${x}`;break;
		case 1:a=`w-${x}`;break;
		case 2:a=`r-${x}`;break;
		case 3:a=`b-${x}`;break;
		case 4:a=`t-${x}`;break;
		case 5:a=`d-${x}`;break;
		case 6:a=`v-${x}`;break;
	}
	T["Carta Psicrometrica"] = T["Carta Psicrometrica"].filter(b => b.ref!=a);
	T["A"][y] = T["A"][y].filter(b => b!=x);
	delete T["Lineas Psicrometricas"][y][x];
	Plotly.react(Grafico,T["Carta Psicrometrica"],Y,Z);
	document.getElementById(`linea-${x}-${y}`).remove();
	localStorage.setItem("CaddoMohammed-CartaPsicrometrica",JSON.stringify(T));
	if(T["A"][y].length===0){
		accordion[y].classList.add("d-none");
		linea[y].classList.add("d-none");
	}
	a=0;
	for(let i=0;i<7;i++){
		if(T["A"][i].length>0){
			a = a+1;
		}
	}
	if(a===0){
		div[1].classList.add("d-none");
	}
}
function borrarPunto(x){
	T["Carta Psicrometrica"] = T["Carta Psicrometrica"].filter(b => b.name!=x);
	delete T["Puntos Guardados"][x];
	delete T["B"][x];
	Plotly.react(Grafico,T["Carta Psicrometrica"],Y,Z);
	document.getElementById(`DivPunto-${x}`).remove();
	localStorage.setItem("CaddoMohammed-CartaPsicrometrica",JSON.stringify(T));
	if(Object.keys(T["Puntos Guardados"]).length==0){
		div[2].classList.add("d-none");
	}
}
function borrarTodo(){
	for(i in T["Puntos Guardados"]){
		T["Carta Psicrometrica"] = T["Carta Psicrometrica"].filter(b => b.name!=i);
	}
	for(let i=0;i<T["A"].length;i++){
		for(let j=0;j<T["A"][i].length;j++){
			let a;
			switch(i){
				case 0:a=`h-${T["A"][i][j]}`;break;
				case 1:a=`w-${T["A"][i][j]}`;break;
				case 2:a=`r-${T["A"][i][j]}`;break;
				case 3:a=`b-${T["A"][i][j]}`;break;
				case 4:a=`t-${T["A"][i][j]}`;break;
				case 5:a=`d-${T["A"][i][j]}`;break;
				case 6:a=`v-${T["A"][i][j]}`;break;
			}
			T["Carta Psicrometrica"] = T["Carta Psicrometrica"].filter(b => b.ref!=a);
		}
	}
	b2();
	for(let i=1;i<5;i++){
		div[i].classList.add("d-none");
	}
	div[5].innerHTML = "";
	for(let i=0;i<7;i++){
		accordion[i].classList.add("d-none");
		linea[i].innerHTML = "";
	}
	a3();
	localStorage.setItem("CaddoMohammed-CartaPsicrometrica",JSON.stringify(T));
}
function ocultarLinea(x,y){
	let a = document.getElementById(`hide-${x}-${y}`);
	let b;
	switch(Number(y)){
		case 0:b=`h-${x}`;break;
		case 1:b=`w-${x}`;break;
		case 2:b=`r-${x}`;break;
		case 3:b=`b-${x}`;break;
		case 4:b=`t-${x}`;break;
		case 5:b=`d-${x}`;break;
		case 6:b=`v-${x}`;break;
	}
	T["Carta Psicrometrica"].forEach(c => {
		if(c.ref==b){
			if(c["x"]){
				a.classList.add("bi-eye-fill");
				a.classList.remove("bi-eye-slash-fill");
				T["Lineas Psicrometricas"][y][x] = false;
				c["x1"] = c["x"]; 
				c["y1"] = c["y"]; 
				delete c["x"];
				delete c["y"];
			} else {
				a.classList.add("bi-eye-slash-fill");
				a.classList.remove("bi-eye-fill");
				T["Lineas Psicrometricas"][y][x] = true;
				c["x"] = c["x1"]; 
				c["y"] = c["y1"]; 
				delete c["x1"];
				delete c["y1"];
			}
		}
	});
	Plotly.react(Grafico,T["Carta Psicrometrica"],Y,Z);
	localStorage.setItem("CaddoMohammed-CartaPsicrometrica",JSON.stringify(T));
	return;
}
function ocultarPunto(x){
	let a = document.getElementById(`hide-${x}`);
	T["Carta Psicrometrica"].forEach(b => {
		if(b.name==x){
			if(b["x"]){
				a.classList.add("bi-eye-fill");
				a.classList.remove("bi-eye-slash-fill");
				T["B"][x] = false;
				b["x1"] = b["x"]; 
				b["y1"] = b["y"]; 
				delete b["x"];
				delete b["y"];
			} else {
				a.classList.add("bi-eye-slash-fill");
				a.classList.remove("bi-eye-fill");
				T["B"][x] = true;
				b["x"] = b["x1"]; 
				b["y"] = b["y1"]; 
				delete b["x1"];
				delete b["y1"];
			}
		}
	});
	Plotly.react(Grafico,T["Carta Psicrometrica"],Y,Z);
	localStorage.setItem("CaddoMohammed-CartaPsicrometrica",JSON.stringify(T));
}
function mensaje(x,y){
	document.getElementById("abrir-ventana-mensaje").click();
	document.getElementById("titulo-mensaje").innerHTML = x;
	document.getElementById("mensaje").innerHTML = y;
}
function exportar(){
	//document.getElementById("exportar-label")
	//document.getElementById("exportar-spinner")
	//"exportar-btn"
}