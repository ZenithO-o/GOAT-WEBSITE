$().ready( init );

var user_path = 'http://dance.goat.dance/assets/goatter_users/'
var last_message;
var old_message;

function init() {
    check_for_new_message();
    setup_chat();
    setup_enter();
    loop();
}

function setup_enter() {
    $('#message_text').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
        {
           $('#send_message').click();
           return false;  
        }
    });
}

function setup_chat() {
    $( "#send_message" ).click( function( event ) {
        event.preventDefault();
        if( !!$( "#message_text" ).val() || str.replace(/\s/g,"") == "") {
            send_message( $( "#message_text" ).val() );
            $( "#message_text" ).val( "" );
        }
    });
}

function loop() {
    setInterval(() => {
        check_for_new_message();
    }, 50);
}

function check_for_new_message() {
    old_message = last_message;
    $.get("https://goatchat.herokuapp.com/API/latest_message", 
        function (data, _textStatus, _jqXHR) {
            last_message = data.id;
        },
    )
    .done( function() {
        if( old_message != last_message ) {
            console.log( 'new message!!!' );
            load_new_messages( old_message );
        }
    })
}

function load_new_messages( id ) {
    if( !Number.isFinite( id ) ) {
        return;
    }
    
    let data = {
        "last_message" : id,
    }
    console.log( 'getting everything after ' + data.last_message );
    $.get("https://goatchat.herokuapp.com/API/get_messages", data,
        function (data, _textStatus, _jqXHR) {
            console.log( data.messages );
        },
    )
    .done( function( data ) {
        let messages = data.messages;
        messages.sort( function(a, b) {
            if (a.id < b.id) {
                return -1;
            } else if ( a.id > b.id ) {
                return 1;
            } else {
                return 0;
            }
        });
        add_to_chatbox( messages );
    });
}

function send_message( message ) {
    let data = {
        "message" : message,
    };

    $.get("https://goatchat.herokuapp.com/API/send_message", data, function (data, _textStatus, _jqXHR) {
            console.log( data );
        }
    )
}

function add_to_chatbox( messages ) {
    $( '#chat-welcome' ).remove();
    console.log( messages.length )
    var random_val = 9176;
    messages.forEach( function( e ) {
        random_val = getRandomIntInclusive(9176, 9193)
        $( '#chat_messages' ).append( '<div class="bubble"><img src="' + user_path + 'IMG_' + random_val + '.png' + '"></img><p>' + e.message + '</p></div>' );
    });
    $("#chatbox-container").scrollTop($("#chatbox-container")[0].scrollHeight);
    $("#chatbox").scrollTop($("#chatbox")[0].scrollHeight);   
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}