const active = document.currentScript.getAttribute('active');

document.write(`
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">UPE</a>
            </div>
            <div class="collapse navbar-collapse" id="navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        About <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li id="navbar-org"><a href="organization.html">Organization</a></li>
                            <li id="navbar-members"><a href="members.html">Members</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            Student Services <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li id="navbar-oh"><a href="office.html">Office Hours</a></li>
                            <li id="navbar-profdev"><a href="profdev.html">Professional Development</a></li>
                            <li id="navbar-events"><a href="events.html">Events</a></li>
                        </ul>
                    </li>
                    <li id="navbar-indrel"><a href="indrel.html">Industrial Relations</a></li>
                </ul>
            </div>
        </div>
    </nav>
`);

if (active) {
    const activeElement = document.getElementById(active);
    activeElement.classList.add("active");

}