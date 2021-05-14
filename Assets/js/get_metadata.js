$(document).ready(function(){
    $(".callmetadata").click(function(){
        alert("ciao");
        var meta = this.id;
        switch(meta){
            case "pers":
                $(".pers").each(function(){
                    console.log($(this).text());
                });
        }
        
    });
});