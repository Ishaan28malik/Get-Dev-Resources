<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="description" content="Check your website's responsive design quickly.">
	<title>Responsive Design Checker</title>
	<style>
		*{vertical-align:top;}
		body{padding:20px;font-family:sans-serif;overflow-y:scroll;}
		h2{margin:0 0 20px 0;}
		span.small{font-size:60%;vertical-align:middle;}
		#url{margin:0 0 20px 0px;display:block;}
		#url input[type=text]{border:solid 1px #666;width:85%;margin:0 auto;font-size:2em;text-align:left;}
		#url input[type=submit]{display:none;}
		#url #options{float:right;line-height:25px;width:13%;}
		#url #options input{margin-top:5px;}
		#frames{overflow-x:scroll;width:100%;margin-bottom:10px;padding-bottom:20px;}
		.frame{margin-right:20px;float:left;}
		.frame:last-child{margin-right:0;}
		.frame img{display:none;vertical-align:middle;}
		iframe{border:solid 1px #000;}
		.widthOnly {height:580px;}
		.widthOnly h2 span{display:none;}
		.widthOnly iframe{height:500px;}
	</style>
</head>
<body id="container">
	<div id="url">
		<form method="post">
			<input type="text" placeholder="Test your own site... type the url and hit enter" />
			<input type="submit" value="submit">
			<div id="options">
				<label for="normal"><input id="normal" type="radio" name="option" value="1" checked>Width only</label><br />
        <label for="accurate"><input id="accurate" type="radio" name="option" value="2">Device sizes</label><br />
				<label for="scrollbar"><input id="scrollbar" type="checkbox" name="scrollbar" value="1" checked>Visible Scrollbars</label>
			</div>
		</form>
	</div>
	<div id="frames" class="widthOnly">
		<div id="inner">
			<div id="f1" class="frame">
				<h2>240<span> x 320</span> <span class="small">(small phone)</span>  </h2>
				<iframe sandbox="allow-same-origin allow-forms allow-scripts" seamless width="255" height="320"></iframe>
			</div>
			<div id="f2" class="frame">
				<h2>320<span> x 480</span> <span class="small">(iPhone)</span>  </h2>
				<iframe sandbox="allow-same-origin allow-forms allow-scripts" seamless width="335" height="480"></iframe>
			</div>
			<div id="f3" class="frame">
				<h2>480<span> x 640</span> <span class="small">(small tablet)</span>  </h2>
				<iframe sandbox="allow-same-origin allow-forms allow-scripts" seamless width="495" height="640"></iframe>
			</div>
			<div id="f4" class="frame">
				<h2>768<span> x 1024</span> <span class="small">(iPad - Portrait)</span> </h2>
				<iframe sandbox="allow-same-origin allow-forms allow-scripts" seamless width="783" height="1024"></iframe>
			</div>
			<div id="f5" class="frame">
				<h2>1024<span> x 768</span> <span class="small">(iPad - Landscape)</span>  </h2>
				<iframe sandbox="allow-same-origin allow-forms allow-scripts" seamless width="1039" height="768"></iframe>
			</div>
		</div>
	</div>
	 

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js"></script>
	<script src="responsive.js"></script>

</body>
</html>