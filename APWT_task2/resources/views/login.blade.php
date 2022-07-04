<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">  
    <title>loginpage</title>
</head>
<body>
<h1> Login system </h1>
<form action="login" method="post">
    @csrf
        <label for="name">
             <b>Username:</b>
        </label> <br>
    <input type="text" name="username" placeholder="Enter your username" /> <br>
    <span style="color: red">@error('username'){{$message}}@enderror</span>
    <br><br>

    <label for="name">
        <b>Password:</b>
    </label> <br>
    <input type="password" name="password" placeholder="Enter your password" /> <br>
    <span style="color: red">@error('password'){{$message}}@enderror</span>
    <br><br>

    <button style="background-color: blue; border-color: blue; color:white" type="submit"> Login </button>
</form> 
</body>
</html>



