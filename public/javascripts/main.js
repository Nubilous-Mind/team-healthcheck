$(document).ready(function(){
    $('#click1').on('change', function() {
        
      if ( this.value != '0' )
      
      {
        $("#show1").show();
      }
      else
      {
        $('#click2').val(0);
        $('#click3').val(0);
        $("#show2").hide();
        $("#show1").hide();
        $("#CheckBox").hide();
        $("#submit").hide();
       
      }
    });
    
    });
        
          $(document).ready(function(){
    $('#click2').on('change', function() {
        
      if ( this.value != '0' )
      
      {
        $("#show2").show();
        
      }
      else
      {
        $('#click2').val(0);
        $('#click3').val(0);
        $("#CheckBox").hide();
        $("#submit").hide();
        $("#show2").hide();
      }
    });
    
    });
        
  
         $(document).ready(function(){
    $('#click3').on('change', function() {
        
      if ( this.value != '0' )
      
      {
        $("#CheckBox").show();
        $("#submit").show();
      }
      else
      {
        $('#click3').val(0);
        $("#CheckBox").hide();
        $("#submit").hide();
      }
    });
    
    });
        
             
        
        
        $(document).ready(function(){    
            $("#show1").hide();
            $("#show2").hide();
            $("#CheckBox").hide();
            $("#submit").hide();
        });