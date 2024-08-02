

$(document).ready(function() {
      /*$("#dr-navbar").html(`
        <nav class="navbar navbar-expand-lg" style="background-color: #686868 ;">
          <div class="container-fluid ">
            <a class="navbar-brand text-light fs-5" href="/">DATA RIVER</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active text-light fs-5" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-light fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Products
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item fs-5" href="datavision.html">
                    DataVision</a></li>
                    <li><a class="dropdown-item fs-5" href="datashield.html">
                    DataSheild
                    </a></li>
                  </ul>
                  <li class="nav-item">
                  <a class="nav-link active text-light fs-5" aria-current="page" href="https://forms.gle/581vg9wwmuKtt4Ak7">Contact</a>
                </li>
                </li>
            </div>
          </div>
        </nav>
        `);*/

      $("#more-decisions").click(function() {
        $("#modal-title").html(`Decision Prediction`); 
        
        $("#modal-text").html(`Data River services include building software components that consume data and produce
        decisions. For example, a restaurant owner might be interested in receiving daily 
        emails on the type and the volume of ingredients that are <it>predicted</it> to be 
        needed for tomorrow's operations. Such business recommendations can be produced 
        by providing the right data set to Data River systems, which in turn digest and 
        produce live predictions, given specific frequencies. `);
        $("#myModal").modal("show");
      });
      $("#more-decisions-close").click(function() {
        $("#myModal").modal("hide");
      });

      $("#more-privacy").click(function() {
        $("#modal-title").html(`Data Protection`); 

        $("#modal-text").html(`Data River can protect your data from
          unauthorized access. Data protection can work for
          internal databases that are used by your employees or
          by external databases that are indirectly accessibly 
          by anyone on the Internet, thus endangering your business
          secrets. We use a combination of access control and
          cryptography to protect your live or resting databases.`);
        $("#myModal").modal("show");
      });

      $("#more-analysis").click(function() {
        $("#modal-title").html(`Data Analysis`); 

        $("#modal-text").html(`Sometimes you just need to dig into
          your data and understand your business trends. This
          requires complex machine learning algorithms to 
          work on your data and produce insights for you
          so you can present them in your next board meeting.
          Data River can work with you to achieve this goal.`);
        $("#myModal").modal("show");
      });

    });