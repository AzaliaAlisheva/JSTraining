<div id="education">
    <h2>Education</h2>
    <div class="timeline">
        <div class="container">
            <h3><span>2017-2018</span> IT-lyceum, Kazan</h3>
            <p>Relevant modules:<br>
            Basics of C++, HTML + CSS basics</p>
        </div>
        <div class="container">
            <h3><span>2018-2022</span> Letovo school, Moscow</h3>
            <p>Relevant modules:<br>
                Basics of Python, Statistics on
                Python, Computational geometry
                C++, Creating API, Databases,
                Django, Git</p>
        </div>
        <div class="container">
            <h3><span>Since 2023</span> Innopolis University, Innopolis</h3>
            <p>Relevant modules:<br>
                Design Patterns, Data Structures 
                and Algorithms, Computer Architecture</p>
        </div>
        </div>
</div>

<style>
    /* The actual timeline (the vertical ruler) */
    .timeline {
        position: relative;
    }

    /* The actual timeline (the vertical ruler) */
    .timeline::after {
        content: '';
        position: absolute;
        width: 6px;
        background-color: black;
        top: 0;
        bottom: 0;
        left: 20px;
        margin-left: 3px;
    }

    /* Container around content */
    .container {
        left: 70px;
        padding: 10px 0;
        position: relative;
        background-color: inherit;
        width: 50%;
        max-width: 450px;
    }

    /* The circles on the timeline */
    .container::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        background-color: white;
        border: 4px solid #FF9F55;
        top: 20px;
        left: -60px;
        border-radius: 50%;
        z-index: 1;
    }

    .timeline span {
        margin-right: 10px;
    }

    #education span {
        background-color: #FF9F55;
    }

</style>