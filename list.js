$(function () 
{

    try 
    {
        let num= [];
        $("#tb").on("change", ":checkbox", function () 
        {
            
            var checkstatus=this.checked;
            let j=num.indexOf(this.id);
            let Aitem=this.id;
            var p= new Promise(function (resolve, reject) {
                if(checkstatus === true)
                {
                    if(j==-1){
                        num.push(Aitem);
                    }
                   
                   
                }
                else {
                    if(j!=-1){
                        num.splice(Aitem,1);
                    }
                   
                }
                if (num.length==5) {
                    resolve("Congratulations! 5 Tasks have been successfully completed!");
                   
                }
            });
             p.then(function (ex) 
            {   alert(ex);
                num=[];
            });
        });
        var tb= document.getElementById("tb");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var List = JSON.parse(this.responseText);
                var it = List;
                
                var op = "<caption></caption><tr><th>USER ID</th><th>ID</th><th>TITLE</th><th>STATUS</th></tr>";
                for (let i = 0; i < it.length; i++) {
                    op += "<tr>";
                    op += "<td>" + it[i].userId + "</td>";
                    op += "<td>" + it[i].id + "</td>";
                    op += "<td>" + it[i].title + "</td>";
                    
                    op += "<td><input type='checkbox' id='checkbox"+ it[i].id +"'" + ((it[i].completed == true) ? 'checked disabled' : '') + " ></td>";
                    
                }
                tb.innerHTML = op;
            }
        }
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
        xhttp.send();
    }
    catch (e) {
        document.getElementById("listdiv").innerHTML = e;
    }
    $(".logout").click(function(){location.replace("index.html");});
    
});