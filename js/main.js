function change(obj){
	//alert("Fadsf");
	obj.innerHTML="text changed";
	}
	
function sem4(form){
	var tot_credits = 0;
	tot_credits = parseFloat(form.adcsel.value) + parseFloat(form.acsel.value) + parseFloat(form.sssel.value) + parseFloat(form.evssel.value) + 				  parseFloat(form.ibfsel.value) + parseFloat(form.probsel.value);
	
	var spi = (form.adc.value * form.adcsel.value + form.ac.value * form.acsel.value + form.prob.value * form.probsel.value + form.ibf.value * 				  form.ibfsel.value + form.evs.value * form.evssel.value + form.ss.value * form.sssel.value) / tot_credits ;
	
	document.getElementById("result").innerHTML = "your SPI this semester is "+ spi;
}

function sem1(){
	var tot_credits = 4.5 + 4.5 + 4 + 3;
	var subj = new Array();
	
	for(var i = 1; i <= 4 ; i++)
		subj[i] = document.getElementById( i).value;
	var spi = (subj[1] * 4.5 + subj[2] * 4.5 + subj[3] * 4 + subj[4] * 3)/tot_credits;
	console.log(spi);
	document.getElementById("result").innerHTML = "your SPI this semester is "+ spi;
}

function oldCpi(form){
	var oldcpi = parseFloat(form.old_cpi.value);
	var oldcreds = parseFloat(form.tot_old_creds.value);
	var spi_string = document.getElementById("result").innerHTML;
	var temp_Arr = spi_string.split(" ");
	var spi = parseFloat(temp_Arr[5]);
	var cpi;
	cpi = (oldcreds * oldcpi + spi * 23.5)/ (oldcreds + 23.5);
	
	document.getElementById("cpi_res").innerHTML = "your CPI is "+ cpi;

}

function semWise(form){
	var cpi = new Array();
	cpi[0] = parseFloat(form.sem1.value);
	cpi[1] = parseFloat(form.sem2.value);
	cpi[2] = parseFloat(form.sem3.value);
	var credits = new Array();
	credits[0] = parseFloat(form.sem1creds.value);
	credits[1] = parseFloat(form.sem2creds.value);
	credits[2] = parseFloat(form.sem3creds.value);
	
	var old_cpi = 0, old_creds = 0;
	var i = 0;
	for(i = 0; i<3; i++)
		{
			old_cpi = old_cpi + credits[i] *cpi[i];
			old_creds = old_creds + credits[i];
		}
	old_cpi = old_cpi/old_creds;
	var spi = getSpi();
	var cpi = (old_cpi * old_creds + spi * 23.5)/ (23.5 + old_creds);
	document.getElementById("cpi_res").innerHTML = "your CPI is "+ cpi;
	
}

function getSpi(){
	var spi_string = document.getElementById("result").innerHTML;
	var arr = spi_string.split(" ");
	return arr[5];
	
}


function fileSave(){
	var filename = document.getElementById("fileName").value;
	var text = document.getElementById("cpi_res").innerHTML;
	var file = new Blob([text],{type: 'text/plain'});
	
	var link = document.createElement("a");
	link.href = window.webkitURL.createObjectURL(file);
	link.download = filename;
	link.click();
}


function getsem(){
	var sem = document.getElementById("seminp").value;
	console.log(sem);
	var semdiv = document.getElementById("semesterCourses");
	var cour = new Array();
	for(var i = 1;i <=6;i++)
		{cour[i] = document.getElementById("c-"+i);
		}
	var but = document.getElementById("calc-but");
	if(sem == 1 )
	{
		cour[1].innerHTML = "<input type=\"text\" placeholder=\"Intro to Programming\" id = \"1\">";
		cour[2].innerHTML = "<input type=\"text\" placeholder=\"Basic Electronic Circuits\" id = \"2\">";
		cour[3].innerHTML = "<input type=\"text\" placeholder=\"Calculus and Complex variables\" id = \"3\">";
		cour[4].innerHTML = "<input type=\"text\" placeholder=\"Indian society\" id = \"4\">";
		cour[5].innerHTML = "";
		cour[6].innerHTML = "";
		but.innerHTML = "<input type =\"button\" value = \"Calculate\" onclick = \"sem1()\">";
		

		
	}		
}
