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
	document.getElementById("cpi_res").innerHTML = "your CPI is "+ spi;
}

function sem2(){
		var tot_cretits = 4.5*3 + 4 + 3;
		var subj = new Array();
	
	for(var i = 1; i <= 5 ; i++)
		subj[i] = document.getElementById( i).value;	
		
	var spi = (subj[1] * 4.5 + subj[2] * 4.5 + subj[3] * 4.5 + subj[4] * 4 + subj[5] * 3)/tot_credits;
	console.log(spi);
	document.getElementById("result").innerHTML = "your SPI this semester is "+ spi;
	}
	
function sem3(){
		var tot_credits = 4.5*2 + 4*3 + 3;
		var subj = new Array();
	
	for(var i = 1; i <= 6 ; i++)
		subj[i] = document.getElementById( i).value;	
		
	var spi = (subj[1] * 4.5 + subj[2] * 4.5 + subj[3] * 4 + subj[4] * 4 + subj[5] * 3 + subj[6] * 4)/tot_credits;
	console.log(spi);
	document.getElementById("result").innerHTML = "your SPI this semester is "+ spi;
	
	}
		
function sem4(){
		var tot_credits = 4.5*3 + 4 + 3*2;
		var subj = new Array();
	
	for(var i = 1; i <= 6 ; i++)
		subj[i] = document.getElementById( i).value;	
		
	var spi = (subj[1] * 4.5 + subj[2] * 4.5 + subj[3] * 4.5 + subj[4] * 4 + subj[5] * 3 + subj[6] * 3)/tot_credits;
	console.log(spi);
	document.getElementById("result").innerHTML = "your SPI this semester is "+ spi;
	
	}

function oldCpi(form){
	var oldcpi = parseFloat(form.old_cpi.value);
	var spi_string = document.getElementById("result").innerHTML;
	var temp_Arr = spi_string.split(" ");
	var spi = parseFloat(temp_Arr[5]);
	var cpi;
	var sem = parseInt(document.getElementById("seminp").value);
	console.log(sem);
	switch(sem)
	{
		case 2:{
				cpi = (16* oldcpi + spi * 20)/ (16 + 20);
				break;
			}
	case 3:{
				cpi = (36* oldcpi + spi * 24.5)/ (36 + 24.5);
				console.log(cpi);
				break;
				}
	case 4:{
				cpi = (60.5 * oldcpi + spi * 24.5)/ (60.5 + 23.5);
				break;
				}
	}
	
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
	else if(sem == 2)
	{
		cour[1].innerHTML = "<input type=\"text\" placeholder=\"Introduction to Communication and Technology\" id = \"1\">";
		cour[2].innerHTML = "<input type=\"text\" placeholder=\"Digital Logic Design\" id = \"2\">";
		cour[3].innerHTML = "<input type=\"text\" placeholder=\"Obect Oriented Programming\" id = \"3\">";
		cour[4].innerHTML = "<input type=\"text\" placeholder=\"Discrete Mats\" id = \"4\">";
		cour[5].innerHTML = "<input type=\"text\" placeholder=\"Economics\" id = \"5\">";
		cour[6].innerHTML = "";
		but.innerHTML = "<input type =\"button\" value = \"Calculate\" onclick = \"sem2()\">";
		
		// cpi thing
		document.getElementById("semwise-1").innerHTML = "<input type=\"text\" placeholder = \"Semester 1 spi\" name=\"sem1\">";
		
		
	}	
	else if(sem == 3)
	{
		cour[1].innerHTML = "<input type=\"text\" placeholder=\"Data Structures and Algorithms\" id = \"1\">";
		cour[2].innerHTML = "<input type=\"text\" placeholder=\"Comp Organization\" id = \"2\">";
		cour[3].innerHTML = "<input type=\"text\" placeholder=\"Signals and Systems\" id = \"3\">";
		cour[4].innerHTML = "<input type=\"text\" placeholder=\"Algebraic Structures\" id = \"4\">";
		cour[5].innerHTML = "<input type=\"text\" placeholder=\"Science tech and Society\" id = \"5\">";
		cour[6].innerHTML = "<input type=\"text\" placeholder=\"Electromagnetic Theory\" id = \"6\">";
		but.innerHTML = "<input type =\"button\" value = \"Calculate\" onclick = \"sem3()\">";
		
		// cpi thing
		document.getElementById("semwise-1").innerHTML = "<input type=\"text\" placeholder = \"Semester 1 spi\" name=\"sem1\">";
		document.getElementById("semwise-2").innerHTML = "<input type=\"text\" placeholder = \"Semester 2 spi\" name=\"sem2\">";
			
	}
	else if(sem == 4)
	{
		cour[1].innerHTML = "<input type=\"text\" placeholder=\"System Software\" id = \"1\">";
		cour[2].innerHTML = "<input type=\"text\" placeholder=\"Analog Circuits\" id = \"2\">";
		cour[3].innerHTML = "<input type=\"text\" placeholder=\"Analog and Digital Communication\" id = \"3\">";
		cour[4].innerHTML = "<input type=\"text\" placeholder=\"Probabilty\" id = \"4\">";
		cour[5].innerHTML = "<input type=\"text\" placeholder=\"Intenational Business Finance\" id = \"5\">";
		cour[6].innerHTML = "<input type=\"text\" placeholder=\"Environmental Science\" id = \"6\">";
		but.innerHTML = "<input type =\"button\" value = \"Calculate\" onclick = \"sem4()\">";
		
		// cpi thing
		document.getElementById("semwise-1").innerHTML = "<input type=\"text\" placeholder = \"Semester 1 spi\" name=\"sem1\">";
		document.getElementById("semwise-2").innerHTML = "<input type=\"text\" placeholder = \"Semester 2 spi\" name=\"sem2\">";
		document.getElementById("semwise-3").innerHTML = "<input type=\"text\" placeholder = \"Semester 3 spi\" name=\"sem3\">";
			
	}	
}
