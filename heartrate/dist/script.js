const WEBSOCKET_KEY = "uVV6jfEFoDC9vFEwmfa8dc1AlXJDg88SCnZkjfXQqTOw5Flyx18rV4gNo1zJmt4H";
const CHANNEL_ID = "52514";
// const CHANNEL_ID = 'internal-testing';

document.addEventListener("DOMContentLoaded", function(event) {
    var socket = new WebSocket(`wss://app.hyperate.io/socket/websocket?token=${WEBSOCKET_KEY}`);

    // Handle incoming messages from the websocket
    socket.addEventListener('open', function (event) {
            console.log('WebSocket connection established.');
            
            const joinMsg = {
            "topic": `hr:${CHANNEL_ID}`,
            "event": "phx_join",
            "payload": {},
            "ref": 0
            };
            
            socket.send(JSON.stringify(joinMsg));
    });
    
    setInterval(function() {
        socket.addEventListener('message', function (event) {
            //   console.log('Received message: ' + event.data);
            var data = JSON.parse(event.data);

            // Check if the event is a heart rate update
            if (data.event === "hr_update") {
            // Extract the HR value from the payload
            var hr = data.payload.hr;
            // if hr === 0 console log
            // document.getElementById("animation-heartrate").textContent = hr;
            // write hr value to animation-heartrate ID
            document.getElementById("animation-heartrate").textContent = hr;
            }
        });
    }, 1000);
});