<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="images/logo.png" type="image/x-icon">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Khamar Bari</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->


    <style>
        body {
            height: 100%;
            margin: 0;
            font-family: 'Nunito', sans-serif;
            background-color: rgb(214, 214, 214);
        }

        .antialiased {
            height: 100%;
            margin: 0;
        }

    </style>
</head>

<body class="antialiased">
    <div id="root"></div>
    <script src="/js/app.js"></script>
</body>

</html>
