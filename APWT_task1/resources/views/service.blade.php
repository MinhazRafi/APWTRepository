@extends('layout.index')
@section('content')
<html>
    <head></head>
    <body>
        <h1><bold>This is the product page</bold></h1>
        <div>
            Product name: {{$name}} <br>
            Product id: {{$id}} <br>
            Product quantity: {{$quantity}} <br>
        </div>
    </body>
</html>
@endsection