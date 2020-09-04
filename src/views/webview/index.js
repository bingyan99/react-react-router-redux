import React from 'react'

const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>Alerts</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #fff;
      }
    </style>
  </head>
  <body>
    <p id="demo">这是一段富文本</p>    
  </body>
</html>
`
export default class HTMLView extends React.Component {

  render() {
    return (
      <div className="webview" dangerouslySetInnerHTML={{__html: HTML}}>
      </div>
    );
  }
}
