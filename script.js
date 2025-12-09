// 自分の名前に変更（大文字が一番カッコいい）
const myName = "TARO";  // ← ここを変更！

document.querySelector('.logo').textContent = myName;

// Particles.js 設定（ゴールドのキラキラ）
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#d4af37" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.4, "random": true },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": false },
    "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    }
  },
  "retina_detect": true
});
