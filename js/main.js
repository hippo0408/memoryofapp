'use strict'

var data=
    [
      '顔',
      'スタイル',
      '色気',
      '服装',
      '気遣い',
      '自立性',
      'トーク',
      '相性',
      '知性'];

var average={label: '平均点',
data: [
  59, 59, 60, 63, 55, 60, 66, 61, 59
],
backgroundColor: 'rgba( 31, 167, 165, 0.5)',
borderColor: 'rgba(0, 0, 0, 0)',
borderWidth: 3,
pointBackgroundColor: 'rgb(46,106,177)',
hitRadius: 5};

const options = {
  scale: {
    r: {
      min: 0,
      max: 100,
      stepSize: 10,
    }
  }
}

var ctx = document.getElementById('saori');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'saori',
      data: [
        80, 100, 90, 80, 70, 90, 90, 80, 80
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average
      ]
  },
  options
});

var ctx = document.getElementById('megumi');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'megumi',
      data: [90, 70, 80, 80, 80, 90, 80, 100, 70],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('maki');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'maki',
      data: [
        60, 50, 70, 60,100, 100, 100, 80, 90
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('akiko');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'akiko',
      data: [
        100, 80, 90, 100, 50, 60, 90, 90, 50
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('aiko');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'aiko',
      data: [
        90, 80, 80, 80, 70, 80, 80, 60, 80
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('sayaka');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'sayaka',
      data: [
        80, 90, 90, 90, 50, 50, 90, 70, 60
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('chihiro');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'chihiro',
      data: [
        60, 50, 70, 60, 90, 80, 90, 80, 80
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('arisu');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'arisu',
      data: [
        90, 90, 90, 80, 50, 60, 60, 50, 70
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('akie');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'akie',
      data: [
        60, 60, 70, 60, 80, 70, 80, 90, 80
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('sakiko');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'sakiko',
      data: [
        60, 70, 90, 60, 40, 80, 80, 70, 90
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('chiaki');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'chiaki',
      data: [
        70, 70, 70, 60, 80, 70, 60, 70, 70
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('kiyomi');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'kiyomi',
      data: [
        40, 40, 60, 60, 60, 70, 80, 80, 80
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('moe');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'moe',
      data: [
        60, 80, 70, 70, 40, 40, 70, 70, 40
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('iko');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'aiko',
      data: [
        80, 80, 60, 70, 40, 30, 70, 60, 20
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('misaki');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'misaki',
      data: [
        70, 80, 50, 40, 40, 40, 70, 60, 30
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('fumi');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'fumi',
      data: [
        70, 70, 50, 50, 40, 60, 50, 40, 40
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('saki');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'sakiko',
      data: [
        40, 40, 20, 30, 70, 60, 40, 20, 60
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('kei');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'kei',
      data: [
        40, 50, 70, 60, 20, 40, 30, 30, 40
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('aki');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'aki',
      data: [
        50, 70, 20, 30, 60, 40, 30, 20, 30
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});

var ctx = document.getElementById('miki');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'miki',
      data: [
        20, 40, 10, 30, 10, 30, 10, 10, 20
      ],
      backgroundColor: 'rgba(241, 107, 141, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(46,106,177)',
      hitRadius: 5
    }, average]
  },
  options
});


// function displayChart(canvasId, datasets, options) {
//   var ctx = document.getElementById(canvasId);
//   var myPieChart = new Chart(ctx, {
//     type: 'radar',
//     data: {
//       labels:
//         ['顔',
//           'スタイル',
//           '色気',
//           '服装',
//           '気遣い',
//           '自立性',
//           'トーク',
//           '相性',
//           '知性'],
//       datasets: datasets,
     
//     }
//   });
// }

// var datasets = [
//   { label: "沙織", data: [80, 100, 90, 80, 70, 90, 90, 80, 80] },
//   { label: "メグ", data: [100, 100, 90, 80, 70, 70, 90, 80, 80] },
//   { label: "Maki", data: [80, 100, 90, 80, 70, 90, 90, 100, 100] },
// ];
// for (var i = 0; i < 3; i++) {
//   displayChart('myChart'.concat(i + 1), [datasets[i]], {
//     title: datasets[i].label,
//     colorscheme: "brewer.RdPu8",
//     usePointStyle: true,
//     legendPosition: "left"
//   });
// }
