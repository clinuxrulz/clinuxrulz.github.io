import{o,t as n,u as a}from"./index.5aba22ff.js";const r=n('<iframe style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>'),p=d=>{let e;return o(()=>{e!=null&&(e.srcdoc=`<html>
    <head>
    </head>
    <body>
        <style>
            body {
                font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
                background: #3973aa;
                color: #fefeff;
                height: 100vh;
                margin: 0;
            }
            
            #page {
                display: table;
                height: 100%;
                margin: 0 auto;
                margin-top: -10px;
                width: 70%;
                font-size: 1.9vw;
            }
            
            #container {
                display: table-cell;
                vertical-align: middle;
            }
            
            h1,
            h2,
            h3,
            h4,
            h5 {
                font-weight: normal;
                padding: 0;
                margin: 25px 0;
                margin-top: 0;
                font-weight: 300;
            }
            
            h1 {
                font-size: 6.5em;
                margin-bottom: 10px;
            }
            
            h2 {
                font-size: 1.5em;
            }
            
            h4 {
                font-size: 1.4em;
                line-height: 1.5em;
            }
            
            h5 {
                line-height: 1.1em;
                font-size: 1.3em;
            }
            
            #details {
                display: flex;
                flex-flow: row;
                flex-wrap: nowrap;
                padding-top: 10px;
            }
            
            #qr {
                flex: 0 1 auto;
            }
            
            #image {
                background: white;
                padding: 5px;
                line-height: 0;
            }
            
            #image img {
                width: 9.8em;
                height: 9.8em;
            }
            
            #stopcode {
                padding-left: 10px;
                flex: 1 1 auto;
            }
            
            @media (min-width: 840px) {
                #page {
                    font-size: 140%;
                    width: 800px;
                }
            }
        </style>
        <div id="page">
            <div id="container">
                <h1>:(</h1>
                <h2>Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for
                    you.</h2>
                <h2>
                    <span id="percentage">0</span>% complete</h2>
                <div id="details">
                    <div id="qr">
                        <div id="image">
                            <img src="http://xontab.com/experiments/Javascript/BSOD/qr.png" alt="QR Code" />
                        </div>
                    </div>
                    <div id="stopcode">
                        <h4>For more information about this issue and possible fixes, visit
                            <br />http://xontab.com/stopcode</h4>
                        <h5>If you call a support person, give them this info:
                            <br />Stop Code: 404 PAGE NOT FOUND</h5>
                    </div>
                </div>
            </div>
        </div>
        <script>
            var percentageElement = document.getElementById("percentage");
            var percentage = 0;
            function process() {
                percentage += Math.round(Math.random() * 10);
                //var bail = false;
                if (percentage > 100) {
                    percentage = 0;
                    //bail = true;
                }
                percentageElement.innerText = percentage.toString();
                //if (bail) {
                //    return;
                //}
                processInterval();
            }
            function processInterval() {
                setTimeout(process, Math.random() * (1000 - 500) + 500)
            }
            processInterval();
        <\/script>
    </body>
</html>
`,document.body.requestFullscreen())}),(()=>{const t=r.cloneNode(!0),i=e;return typeof i=="function"?a(i,t):e=t,t})()};export{p as default};
