function getData(){
    //debugger;

	var formValues= $("#prediction-form").serialize();
	 $.ajax({
          url: "https://futuremedico.in/prediction.php",
          type: "POST",
          
          headers:{
              "Access-Control-Allow-origin":"*"
          },
          data:formValues,
           dataType: "json",
          
        })
        .done(function(view_data)
        {   

        		var table_ex=$("#example").DataTable();
        		table_ex.clear()
    //.draw();
       		 $(view_data).each(function(index, keys){
            $(keys.college).each(function(i,value){
            		   cellz =[];
                                var cell='';
                                cell = '<td>'+value.state+'</td>';
                                cellz.push(cell);
                                cell = '<td>'+value.annual_fee+'</td>';
                                cellz.push(cell);
                                cell = '<td>'+value.college_name+'</td>';
                                cellz.push(cell);
                               /*cell= '<td>'+value.UPS_id+'</td>' ;
                               cellz.push(cell);
                                cell = '<td>'+value.power_rating+'</td>';
                                cellz.push(cell);
                                cell = '<td>'+value.power_rating+'</td>';
                                cellz.push(cell);*/
                                //console.log('++++++++++++++++++++++++++++++++++++++++');
                               
                                table_ex.row.add(cellz).draw().node();
            });
        });
       	});


           var x = document.getElementById("myDIV");
           if (x.style.display === "none") {
             x.style.display = "block";
           } else {
             x.style.display = "none";
           }
}