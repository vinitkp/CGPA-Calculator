function change(obj){
	//alert("Fadsf");
	obj.innerHTML="text changed";
	}
	
function sem4(form){
	var tot_credits = 0;
	tot_credits = parseFloat(form.adcsel.value) + parseFloat(form.acsel.value) + parseFloat(form.sssel.value) + parseFloat(form.evssel.value) + 				  parseFloat(form.ibfsel.value) + parseFloat(form.probsel.value);
	
	var spi = (form.adc.value * form.adcsel.value + form.ac.value * form.acsel.value + form.prob.value * form.probsel.value + form.ibf.value * 				  form.ibfsel.value + form.evs.value * form.evssel.value + form.ss.value * form.sssel.value) / tot_credits ;
	
	document.getElementById("result").innerHTML = spi;
}
