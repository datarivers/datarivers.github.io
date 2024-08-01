

$(document).ready(function() {
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