<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.1/papaparse.min.js"
        integrity="sha512-EbdJQSugx0nVWrtyK3JdQQ/03mS3Q1UiAhRtErbwl1YL/+e2hZdlIcSURxxh7WXHTzn83sjlh2rysACoJGfb6g=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.4/xlsx.min.js"
        integrity="sha512-W/mRQs9ZSFpF14X/4aRgQss7+HRsVXsph+Y6DGLeqIqK8IpO+rQz0ISUEXkTeeKF7tivoGv+Ru7SpocS/1qahg=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <title>CSV Parser</title>
    <script src="./script.js"></script>
</head>

<body>
    <input type="file" onchange="Main()" id="filein">
    <div id="output"></div>
</body>

</html>