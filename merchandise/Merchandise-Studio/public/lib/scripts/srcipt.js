
    let progressBarOptions = {
        startAngle: -1.55,
        size: 200,
        value: 0.75,
        fill: {
          color: '#ffa500'
        }
      }
  
      $('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function (event, progress, stepValue) {
        $(this).find('strong').text(parseInt(stepValue * 100));
      });
  
      $('#circle_one').circleProgress({
        value: 0.25,
        fill: {
          color: '#047ab3'
        }
      });
  
      $('#circle_two').circleProgress({
        value: .05,
        fill: {
          color: '#047ab3'
        }
      });
  
      $('#circle_three').circleProgress({
        value: .56,
        fill: {
          color: '#047ab3'
        }
      });
      $('#circle_four').circleProgress({
        value: .50,
        fill: {
          color: '#047ab3'
        }
      });
  