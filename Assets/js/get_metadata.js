$document.ready(function(){
    $("callmetadata").click(function(){
        var meta = this.id;
        switch(meta){
            case "pers":
                $("pers").each(function(){
                    console.log($(this).text());
                })
        }
        
    })
})