$(function(){
    $('#generate').click(function(){
        var num = $("#upperlimit").val();
        var col = $("#tablecol").val();
        
        if(col.length==0) col=10;
        if(num.length>0) {
            insert(createTable(findPrimeList(num),col));
            $('#display').show();
        }
        
        
    });
    
    $('#reset').on('click',function(){
       $("#upperlimit").val('');
        clear();
        $('#display').hide();
    });
    
    $('#check').click(function(){
        var num = $("#number").val();
        $('#result').show();
        
        if(num.length>0){    
            $('#result').html((isPrime(num) ? '<div style="color:green;"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Is prime</div>' : '<div style="color:red;"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Is Not Prime</div>'));
        } else {
            $('#result').html('Please Input Your Number First!');
        }
    });
    
    
    $('.close').click(function(){
        $(this).parent().hide();
    });
    
    
    
    // end of defualt
});


function createTable(list,col) {
    var table = document.createElement("TABLE");
    var title = document.createElement("TR");
    var data = document.createElement("TR");
    
    //table.class('table table-hover');
    $(table).addClass('table table-hover');
    // title
    for(var i = 1 ; i <= col ; i++) {
        var th = document.createElement("TH");
        th.append(i);
        title.append(th);
    }
    
    table.append(title);
    
    // data row
    for(var i = 0 ; i < list.length ; i++ ) {
        
        if( i % col == 0) {
            var data = document.createElement("TR");
            var td = document.createElement("TD");
            td.append(list[i]);
            data.append(td);
            table.append(data);
        } else {
            var td = document.createElement("TD");
            td.append(list[i]);
            data.append(td);
        }
    }
    
    
    
    return table;
}


function findPrimeList(upperlimit) {
    var list = [];
    for(var i = 0 ; i < upperlimit ; i++) {
        if(isPrime(i)) {
            list.push(i);
        }
    }
    return list;
}


function isPrime(num) {
    // When is 1, is not prime.
        if(num<=1)
            return false;
        // When is 2,3 are prime.
        else if(num <=3)
            return true;
        // When number can be divided by 2 and 3. are not prime.
        else if(num%2==0||num%3==0)
            return false;
        // Starting from 5
        var i = 5;

        // When number smaller than the power of i, looping
        while(i*i<=num){
            // If number can be divided by i and i+2, are not prime.
            if(num%i==0||num%(i+2)==0)
                return false;
            // i increment by 6 every loop.
            i+=6;
        }
        // Otherwise are all prime.
        return true;
}


function insert(HTMLs) {
   $('#display').html(HTMLs);
}

function clear() {
   $('#display').html('');
}