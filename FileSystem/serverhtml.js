const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
<html>
<head>
	<title>FORM</title>
</head>
<body>
	<fieldset>
		<legend>Form</legend>
		<p>Login Id:-<br><input type="text" name=""></p>
		<p>Password:-<br><input type="Password" name=""></p>
		<p>Name:<br><input type="text" name=""></p>
		<p>Age:<br><input type="number" name=""></p>
		<p>DOB:<br><input type="date" name=""></p>
		<P>Course:<br><select>
			<option>-------select-------</option>
			<option>Graphic Design</option>
			<option>Data Science</option>
			<option>Quant Analyst</option>
		</select></P>
		<p>Hobbies:<br><input type="checkbox" name="">Swimming<input type="checkbox" name="">Gaming</p>
		<p>Gender:<br><input type="radio" name="g">Male<input type="radio" name="g">Female</p>
		<p>Email:<br><input type="text" name=""></p>
		<p>Address:<br><textarea rows="08" cols="80">  </textarea></p>
	    <input type="submit" name="">
	    <input type="color" name="">
	</fieldset>

</body>
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});